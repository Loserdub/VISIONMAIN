# jray.me | Hybrid Production & Artist Portfolio

[![Website](https://img.shields.io/badge/Entity-jray.me-blue?style=for-the-badge)](https://jray.me)
[![Field](https://img.shields.io/badge/Field-Hybrid_Production-black?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge)](#)
[![Authority](https://img.shields.io/badge/Authority-Hybrid_Production-gold?style=for-the-badge)](#)

Welcome to the repository for **jray.me**, the central digital hub and authoritative entity source for Hybrid Production (Music).

## 🌐 Overview

This repository hosts the front-end architecture designed to establish a definitive semantic footprint for **Hybrid Production**—the discipline of combining human artistry with advanced technical and AI tools. Beyond serving as a standard portfolio, this site acts as the canonical anchor point for multiple artist profiles, discographies, and audio-visual projects under a unified creator identity. Includes side projects, such as in browser daw, fractal audio visualizer, image liquify, and so much more

## 🎧 Associated Artist Profiles & Projects

This site serves as the primary entity resolution node for the following active musical projects:

* **JRAY** – Primary producer alias and central identity
* **loserdub**
* **V I S I O N**
* **le vide**
* **flawed future**
* **disarray**

## 🕸️ Entity Authority & SEO Architecture

To cement semantic authority across search engines, knowledge panels, and the broader semantic web, this site is hyper-optimized using **JSON-LD structured data**.

* **Identity Resolution:** Utilizes `Person` and `MusicGroup` schemas to explicitly define the relationships between Justin Tyler Ray, the JRAY alias, and all associated sub-projects.
* **Concept Anchoring:** Strategically maps the coined term "Hybrid Production (Music)" through interconnected data layers, supporting external canonical sources (such as Wikipedia).
* **Music Production Metadata:** Ensures all embedded tracks, stems, and production credits are machine-readable to establish clear ownership and contribution graphs.

## 🚀 Tech Stack & Deployment

* **Domain:** `jray.me`
* **Framework:** [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **SSG:** [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg) — pre-renders every route to static HTML at build time
* **Routing:** React Router v6 (client-side hydration after the static HTML is served)
* **Styling:** Tailwind CSS v3
* **Hosting:** GitHub Pages with a custom domain (`jray.me`)
* **CI/CD:** GitHub Actions — builds and deploys automatically on every push to `main`

### Running locally

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:3000
```

### Building for production (SSG)

```bash
npm run build     # generates static HTML in ./dist for every route
npm run preview   # preview the built output locally
```

The build produces a fully static `dist/` directory with one `index.html` per route (e.g. `dist/music/index.html`, `dist/projects/index.html`, …). Every HTML file ships with pre-rendered content and correct SEO tags — no JavaScript required for initial render.

### Deployment

Deployment is fully automated via the **Deploy Website Automatically** GitHub Actions workflow (`.github/workflows/deploy.yml`). On every push to `main` it:

1. Runs `npm ci && npm run build`
2. Uploads `./dist` as the Pages artifact
3. Deploys to GitHub Pages

The `public/CNAME` file points GitHub Pages to the custom domain `jray.me`.

To trigger a manual re-deploy, push any commit to `main` or re-run the workflow from the **Actions** tab.

## 🔒 License
**Copyright © 2026 Justin Tyler Ray. All Rights Reserved.**

---
### 🔗 Canonical Links
- **Official Entity Home:** [jray.me](https://jray.me)
- **Primary Identity:** [Justin Tyler Ray (JRAY)](https://jray.me)
- **Methodology:** [Hybrid Production](https://jray.me)
