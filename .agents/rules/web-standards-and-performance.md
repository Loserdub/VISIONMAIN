---
description: Enforce web design standards, Core Web Vitals performance, semantic HTML, and SEO protocols across trustnodelogic.com
globs: ["*.html", "**/*.html", "*.css", "**/*.css", "*.js", "**/*.js"]
---

# Web Standards, Design Aesthetics & Performance Guidelines (trustnodelogic.com)

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
║ PURPOSE: Ensure all pages on trustnodelogic.com maintain ultra-fast performance, elite dark     ║
║ brutalist aesthetics, semantic SEO hierarchy, and seamless mobile responsiveness.             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## 1. Design System & Aesthetics (Dark Brutalist)

1. **Color Palette & Contrast**:
   - **Backgrounds**: Deep blacks and charcoal surfaces (`#08090A`, `#0E1013`, `#121417`).
   - **Borders & Grid Lines**: Subtle low-opacity borders (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`).
   - **Text**: High-contrast primary text (`#FFFFFF` / `#EAEAEA`), muted secondary body (`#A1A1AA`), dim labels (`#71717A`).
   - **Accents**: Cyberpunk amber (`#FF9F1C`), neon cyan (`#00F0FF` / `#6C8DFF`).
2. **Typography**:
   - Headers: `Playfair Display`, `Syne`, or bold monospace headers.
   - Code, Kicker Badges, Timestamps, and Metadata: `JetBrains Mono` or `Fira Code`.
   - Body Copy: Clean, high-legibility sans-serif (`Inter`, `Space Grotesk`, or system-ui) or editorial serif.
3. **UI Cleanliness**:
   - No floating raw/unstyled breadcrumb plaintext in the upper-left viewport.
   - High-contrast interactive hover states with micro-transitions (`transition: all 0.15s ease`).
   - Mobile-first responsiveness tested from 320px viewport to 4K desktop.

---

## 2. SEO & Technical Markup Hierarchy

1. **Heading Structure**:
   - Exactly one single `<h1>` per page representing the primary topic.
   - Strict hierarchical nesting: `<h1>` -> `<h2>` -> `<h3>`. Never skip heading levels.
2. **Meta Tags Precision**:
   - `<title>`: Descriptively structured (`[Topic / Title] | [Section] · Trust Node Logic`). Under 65 characters.
   - `<meta name="description">`: Exactly **120–155 characters**, identical verbatim across `og:description` and `twitter:description`.
   - Canonical URL: Explicit absolute HTTPS link: `<link rel="canonical" href="https://trustnodelogic.com/[page].html">`.
   - OpenGraph: Full suite (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:image:width`, `og:image:height`).
   - Twitter Cards: `summary_large_image` with matching title, description, and image URL.
3. **Semantic HTML5 Elements**:
   - Wrap all content in semantic containers: `<header>`, `<nav>`, `<main id="main-content">`, `<article>`, `<section>`, `<footer>`.
   - Ensure all buttons and interactive tabs have accessible `aria-label`, `role`, and `aria-selected` attributes.

---

## 3. Performance & Core Web Vitals (CWV)

1. **Asset Optimization**:
   - All raster graphics must use modern compressed formats (`.webp` or `.avif`).
   - Explicit `width` and `height` attributes on all `<img>` elements to prevent Cumulative Layout Shift (CLS).
   - Above-the-fold hero images: `fetchpriority="high"`.
   - Below-the-fold images: `loading="lazy"` and `decoding="async"`.
2. **Font & Network Preconnects**:
   - Include `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
   - Use `display=swap` on Google Font stylesheets.
3. **Script Execution**:
   - All scripts must use `defer` or `async` to eliminate render-blocking resources.

---

## 4. Editorial & Content Integrity Constraints

1. **Zero Em-Dashes**:
   - Strictly NO `—` or `&mdash;` in public-facing prose, headings, meta tags, or captions.
   - Permitted substitutes: hyphens (`-`), colons (`:`), middle dots (`·`), or spaced slashes (` / `).
2. **Contact Email Standard**:
   - All contact references and mailto links must use: `trustnodelogic@gmail.com`.
3. **Machine Discovery Manifests**:
   - Every published HTML page must be indexed in `sitemap.xml` with accurate `<lastmod>`.
   - Every published HTML page must have a concise markdown overview in `llms.txt`.
4. **Internal Link Integrity**:
   - Header navigation on all landing pages and articles must link to `Field Notes` (`field-notes.html`) and `About` (`about.html`).
