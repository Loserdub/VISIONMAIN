import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * React 19 + react-helmet-async v3: With React 19, <Helmet> renders metadata
 * tags (title, meta, link) inline in the component tree. React 19 hoists them
 * to <head> in the browser, but during SSG the rendered appHTML contains them
 * inline inside <div id="root">. This hook moves them from body to <head>.
 */
function hoistMetaTagsToHead(html: string): string {
  const titleTagRe = /<title\b[^>]*>[\s\S]*?<\/title>/gi;
  const firstTitleTagRe = /<title\b[^>]*>[\s\S]*?<\/title>/i;
  const descriptionMetaRe = /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/gi;
  const canonicalLinkRe = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi;

  const initialRootDivIdx = html.indexOf('<div id="root"');
  const bodyPart = initialRootDivIdx !== -1 ? html.slice(initialRootDivIdx) : '';

  // 1. Extract per-page <title> from body root div
  const bodyTitle = bodyPart.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (bodyTitle) {
    if (firstTitleTagRe.test(html)) {
      html = html.replace(firstTitleTagRe, `<title data-rh="true">${bodyTitle}</title>`);
    } else {
      html = html.replace('</head>', `  <title data-rh="true">${bodyTitle}</title>\n  </head>`);
    }
  }

  // 2. Extract and replace <meta name="description">
  const bodyDescMatch = bodyPart.match(/<meta\b(?=[^>]*\bname=["']description["'])(?=[^>]*\bcontent=["']([^"']*)["'])[^>]*>/i);
  if (bodyDescMatch) {
    html = html.replace(descriptionMetaRe, '');
    html = html.replace('</head>', `  <meta data-rh="true" name="description" content="${bodyDescMatch[1]}">\n  </head>`);
  }

  // 3. Extract and hoist <link rel="canonical"> from body to <head>.
  // React 19 + react-helmet-async renders the tag inline in <div id="root">;
  // we remove every canonical from the document and re-insert the page-specific
  // one inside <head> so there is exactly one, correct canonical per page.
  const bodyCanonicalMatch = bodyPart.match(/<link\b(?=[^>]*\brel=["']canonical["'])(?=[^>]*\bhref=["']([^"']*)["'])[^>]*>/i);
  if (bodyCanonicalMatch) {
    const pageCanonical = bodyCanonicalMatch[1];
    // Remove all canonical tags (template fallback + Helmet-rendered body copy),
    // regardless of attribute order.
    html = html.replace(canonicalLinkRe, '');
    // Insert the page-specific canonical in <head>.
    html = html.replace('</head>', `  <link data-rh="true" rel="canonical" href="${pageCanonical}">\n  </head>`);
  }

  // 4. Extract and replace OG meta tags
  const ogProps = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image'];
  for (const prop of ogProps) {
    // Escape any regex special chars in prop (e.g. the colon is safe but be defensive)
    const escapedProp = prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const bodyOgMatch = html.match(new RegExp(`<div id="root"[\\s\\S]*?<meta property="${escapedProp}" content="([^"]*)"`));
    if (bodyOgMatch) {
      html = html.replace(
        new RegExp(`<meta property="${escapedProp}" content="[^"]*"\\s*\\/?>`, ''),
        `<meta property="${prop}" content="${bodyOgMatch[1]}">`
      );
    }
  }

  // 5. Extract and replace Twitter meta tags
  const twitterNames = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  for (const name of twitterNames) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const bodyTwMatch = html.match(new RegExp(`<div id="root"[\\s\\S]*?<meta name="${escapedName}" content="([^"]*)"`));
    if (bodyTwMatch) {
      const existingRe = new RegExp(`<meta name="${escapedName}" content="[^"]*"\\s*\\/?>`);
      if (existingRe.test(html)) {
        html = html.replace(existingRe, `<meta name="${name}" content="${bodyTwMatch[1]}">`);
      }
    }
  }

  // 6. Remove duplicate metadata tags left inside <div id="root"> after hoisting.
  // React 19 renders <Helmet> tags inline in the component tree during SSG; they
  // have already been hoisted to <head> above, so strip them from the body to
  // avoid duplicate title/description/OG signals for crawlers.
  const currentRootDivIdx = html.indexOf('<div id="root"');
  if (currentRootDivIdx !== -1) {
    const headPart = html.slice(0, currentRootDivIdx);
    let cleanedBodyPart = html.slice(currentRootDivIdx);
    cleanedBodyPart = cleanedBodyPart
      .replace(titleTagRe, '')
      .replace(descriptionMetaRe, '')
      .replace(/<meta name="twitter:[^"]*" content="[^"]*"\s*\/?>/g, '')
      .replace(/<meta property="og:[^"]*" content="[^"]*"\s*\/?>/g, '')
      .replace(canonicalLinkRe, '');
    html = headPart + cleanedBodyPart;
  }

  return html;
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
      ],
      ssgOptions: {
        entry: '/index.tsx',
        dirStyle: 'nested',
        includedRoutes: () => [
          '/',
          '/music',
          '/projects',
          '/bio',
          '/what-is-hybrid',
          '/services',
          '/contact',
        ],
        onPageRendered(_route, html) {
          return hoistMetaTagsToHead(html);
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
