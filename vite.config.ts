import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * React 19 + react-helmet-async v3 hoisting logic for SSG
 */
function hoistMetaTagsToHead(html: string, route: string): string {
  const HOME_TITLE = 'Justin Ray | Creative Technologist & Hybrid Artist';
  const HOME_DESCRIPTION = 'Justin Ray is a Hybrid Producer and software developer blending Generative AI with traditional engineering.';
  const isHomeRoute = route === '/';
  
  const escapeHtml = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const titleTagRe = /<title\b[^>]*>[\s\S]*?<\/title>/gi;
  const descriptionMetaRe = /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/gi;
  const canonicalLinkRe = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi;

  const initialRootDivIdx = html.indexOf('<div id="root"');
  if (initialRootDivIdx === -1) return html;
  
  const bodyPart = html.slice(initialRootDivIdx);

  // 1. Hoist Title
  const bodyTitle = bodyPart.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const titleToUse = bodyTitle ?? (isHomeRoute ? HOME_TITLE : undefined);
  if (titleToUse) {
    html = html.replace(titleTagRe, '').replace('</head>', `  <title data-rh="true">${escapeHtml(titleToUse)}</title>\n  </head>`);
  }

  // 2. Hoist Description
  const bodyDescMatch = bodyPart.match(/<meta\b(?=[^>]*\bname=(["'])description\1)[^>]*\bcontent=(["'])([\s\S]*?)\2[^>]*>/i);
  const descriptionToUse = bodyDescMatch?.[3] ?? (isHomeRoute ? HOME_DESCRIPTION : undefined);
  if (descriptionToUse) {
    html = html.replace(descriptionMetaRe, '').replace('</head>', `  <meta data-rh="true" name="description" content="${escapeHtml(descriptionToUse)}">\n  </head>`);
  }

  // 3. Hoist Canonical
  const bodyCanonicalMatch = bodyPart.match(/<link\b(?=[^>]*\brel=(["'])canonical\1)[^>]*\bhref=(["'])([\s\S]*?)\2[^>]*>/i);
  if (bodyCanonicalMatch) {
    html = html.replace(canonicalLinkRe, '').replace('</head>', `  <link data-rh="true" rel="canonical" href="${escapeHtml(bodyCanonicalMatch[3])}">\n  </head>`);
  }

  // 4. Cleanup duplicate tags in body
  const currentRootDivIdx = html.indexOf('<div id="root"');
  if (currentRootDivIdx !== -1) {
    const headPart = html.slice(0, currentRootDivIdx);
    let cleanedBodyPart = html.slice(currentRootDivIdx)
      .replace(titleTagRe, '')
      .replace(descriptionMetaRe, '')
      .replace(/<meta\b(?=[^>]*\bname=(["'])twitter:[^"']+\1)[^>]*>/gi, '')
      .replace(/<meta\b(?=[^>]*\bproperty=(["'])og:[^"']+\1)[^>]*>/gi, '')
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
    plugins: [react()],
    ssgOptions: {
      entry: '/index.tsx',
      dirStyle: 'nested',
      includedRoutes: () => ['/', '/music', '/projects', '/bio', '/what-is-hybrid', '/services', '/contact'],
      onPageRendered(route, html) {
        return hoistMetaTagsToHead(html, route);
      },
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
  };
});
