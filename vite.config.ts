import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * React 19 SSR: <title>, <meta>, <link> tags rendered inside React components
 * (including react-helmet-async's <Helmet>) are included in the serialised
 * component HTML (appHTML) rather than captured in a server context.
 * vite-react-ssg places that appHTML inside <div id="root">. This hook
 * extracts the leading metadata tags from inside the root div and moves
 * them into the document <head>, so crawlers see the correct per-route
 * canonical, title, description and Open Graph tags.
 */
function liftHeadTagsFromRoot(html: string): string {
  const marker = ' data-server-rendered="true">';
  const rootOpen = html.indexOf(marker);
  if (rootOpen === -1) return html;
  const contentStart = rootOpen + marker.length;

  const slice = html.slice(contentStart);
  const lifted: string[] = [];
  let pos = 0;

  // Parse full tags from the front of the server-rendered content.
  const tagOpenRE = /^<(title|meta|link)(\s[^>]*)?\/?>/i;
  while (pos < slice.length) {
    const remaining = slice.slice(pos);
    const m = tagOpenRE.exec(remaining);
    if (!m) break;

    const tagName = m[1].toLowerCase();
    if (tagName === 'title') {
      // Include the full title tag with its text content and closing tag.
      const closeTag = '</title>';
      const closeIdx = remaining.indexOf(closeTag, m[0].length);
      if (closeIdx === -1) {
        // Malformed – stop extraction to avoid corrupting the page.
        break;
      }
      const fullTag = remaining.slice(0, closeIdx + closeTag.length);
      lifted.push(fullTag);
      pos += fullTag.length;
    } else {
      // <meta> and <link> are void elements; match[0] is the full tag.
      lifted.push(m[0]);
      pos += m[0].length;
    }
  }

  if (lifted.length === 0) return html;

  // Remove extracted tags from root div content.
  const htmlWithoutMetaInRoot =
    html.slice(0, contentStart) + html.slice(contentStart + pos);

  // Inject the tags right after the opening <head> tag.
  const headTag = '<head>';
  const headIdx = htmlWithoutMetaInRoot.indexOf(headTag);
  if (headIdx === -1) return html;

  return (
    htmlWithoutMetaInRoot.slice(0, headIdx + headTag.length) +
    lifted.join('') +
    htmlWithoutMetaInRoot.slice(headIdx + headTag.length)
  );
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
        onPageRendered: (_path: string, html: string) => liftHeadTagsFromRoot(html),
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
