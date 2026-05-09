import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const ROOT_MARKER = '<div id="root" data-server-rendered="true">';
const APP_SHELL_MARKER = '<div class="relative min-h-screen';

const hoistRootHeadTagsToDocumentHead = (html: string) => {
  const rootIndex = html.indexOf(ROOT_MARKER);
  const appShellIndex = html.indexOf(APP_SHELL_MARKER, rootIndex);

  if (rootIndex === -1 || appShellIndex === -1) {
    return html;
  }

  const tagsStart = rootIndex + ROOT_MARKER.length;
  const headTags = html.slice(tagsStart, appShellIndex);

  if (!headTags.trim()) {
    return html;
  }

  return html
    .replace(headTags, '')
    .replace('</head>', `${headTags}</head>`);
};

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
        onPageRendered: (_route, renderedHtml) => hoistRootHeadTagsToDocumentHead(renderedHtml),
        includedRoutes: () => [
          '/',
          '/music',
          '/projects',
          '/bio',
          '/what-is-hybrid',
          '/services',
          '/contact',
        ],
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
