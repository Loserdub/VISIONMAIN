# VISIONMAIN — jray.me (Hybrid Production)

Static website source for **jray.me** — the public hub for Justin Ray (JRAY) and the Hybrid Production / hybrid AI music work.

- Live site: https://jray.me
- Hosting: GitHub Pages (this repo is deployed as-is)

## What this repo is (current build)

This repository is a **plain static site** (mostly HTML + CSS) that is published directly to GitHub Pages. There’s no React/Vite build in the current version — the site is served from the repository root.

Key pages are implemented as standalone HTML documents (for example: `index.html`, `music.html`, `projects.html`, `services.html`, `contact.html`, and additional research/essay pages).

## Tech

- **HTML / CSS** (Tailwind CSS output is committed as `style.css`)
- **Tailwind CLI** for building/minifying CSS
- **GitHub Actions** for Pages deployment

## Local development

Because it’s a static site, you can open `index.html` directly in a browser. For best results (and to avoid module / CORS issues in some browsers), run a tiny local server:

```bash
# Option A: Python
python -m http.server 3000

# Option B: Node
npx serve .
```

Then visit:

- http://localhost:3000

## CSS workflow (Tailwind)

The repo includes a minimal Tailwind CLI setup.

```bash
npm install
npm run build:css
```

- Input: `input.css`
- Output: `style.css` (minified)

## Deployment

Deployment is automated via GitHub Actions using `.github/workflows/deploy.yml`.

On every push to the `main` branch, the workflow uploads the repository root (`.`) as the Pages artifact and deploys it.

This temporary setup uses the default GitHub Pages project URL (`https://loserdub.github.io/VISIONMAIN/`) with no custom `CNAME` file.

## Entity / SEO notes

The homepage includes structured data (`application/ld+json`) to help define the entity graph for Justin Ray / JRAY and related project aliases.

## License

**Copyright © 2026 Justin Tyler Ray. All Rights Reserved.**
