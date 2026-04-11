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
  // 1. Extract per-page <title> from body root div
  const bodyTitle = html.match(/<div id="root"[^>]*>(?:<link[^>]*>)*<title>([^<]*)<\/title>/)?.[1];
  if (bodyTitle) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${bodyTitle}</title>`);
  }

  // 2. Extract and replace <meta name="description">
  const bodyDescMatch = html.match(/<div id="root"[^>]*>[\s\S]*?<meta name="description" content="([^"]*)"/);
  if (bodyDescMatch) {
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${bodyDescMatch[1]}">`
    );
  }

  // 3. Extract and replace <link rel="canonical">
  // Find the canonical specifically in the metadata block of the body (before actual content divs)
  const bodyCanonicalMatch = html.match(/<div id="root"[^>]*>[\s\S]*?<link rel="canonical" href="([^"]*)">(?:<div|<article|<section|<main)/);
  if (bodyCanonicalMatch) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${bodyCanonicalMatch[1]}">`
    );
  }

  // 4. Extract and replace OG meta tags
  const ogProps = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image'];
  for (const prop of ogProps) {
    const bodyOgMatch = html.match(new RegExp(`<div id="root"[^>]*>[\\s\\S]*?<meta property="${prop}" content="([^"]*)"`));
    if (bodyOgMatch) {
      html = html.replace(
        new RegExp(`<meta property="${prop}" content="[^"]*">`),
        `<meta property="${prop}" content="${bodyOgMatch[1]}">`
      );
    }
  }

  // 5. Extract and replace Twitter meta tags
  const twitterNames = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
  for (const name of twitterNames) {
    const bodyTwMatch = html.match(new RegExp(`<div id="root"[^>]*>[\\s\\S]*?<meta name="${name}" content="([^"]*)"`));
    if (bodyTwMatch) {
      const existing = new RegExp(`<meta name="${name}" content="[^"]*">`);
      if (existing.test(html)) {
        html = html.replace(existing, `<meta name="${name}" content="${bodyTwMatch[1]}">`);
      }
    }
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

