---
description: Enforce web design standards, Core Web Vitals performance, semantic HTML, and SEO protocols across trustnodelogic.com
globs: ["*.html", "**/*.html", "*.css", "**/*.css", "*.js", "**/*.js"]
---

# Web Standards, Design Aesthetics & Performance Guidelines (trustnodelogic.com)

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
║ PURPOSE: Ensure all pages on trustnodelogic.com achieve top Google search rankings through       ║
║ elite Core Web Vitals (INP/LCP/CLS), WCAG AA accessibility, semantic SEO, and dark brutalism.   ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## 1. Design System & Aesthetics (Dark Brutalist)

1. **Color Palette & WCAG Contrast Compliance**:
   - **Backgrounds**: Deep blacks and charcoal surfaces (`#08090A`, `#0E1013`, `#121417`).
   - **Borders & Grid Lines**: Subtle low-opacity borders (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`).
   - **Text & Contrast Ratios**:
     - Primary text: High-contrast pure white / light gray (`#FFFFFF` / `#F4F4F5`, 18:1 contrast ratio).
     - Secondary text: Accessible silver gray (`#A1A1AA`, 7:1 contrast ratio).
     - Metadata & Labels: Muted silver (`#9CA3AF` or `#A1A1AA`, maintaining **≥ 4.5:1 WCAG 2.1 AA** contrast against `#08090A`).
     - *Google Lighthouse Rule*: Never use low-contrast text below 4.5:1 (such as unadjusted `#71717A` on black), as failing accessibility checks degrades Page Experience signals.
   - **Accents**: Cyberpunk amber (`#FF9F1C`), neon cyan (`#00F0FF` / `#6C8DFF`).
2. **Typography & Legibility**:
   - Headers: `Playfair Display`, `Syne`, or bold monospace headers.
   - Code, Kicker Badges, Timestamps, and Metadata: `JetBrains Mono` or `Fira Code`.
   - Body Copy: Clean sans-serif (`Inter`, `Space Grotesk`, or system-ui) with minimum 16px base font size for mobile readability (prevents Google Mobile Usability warnings).
3. **UI Cleanliness**:
   - No floating raw/unstyled breadcrumb plaintext in the upper-left viewport.
   - High-contrast interactive hover states with micro-transitions (`transition: all 0.15s ease`).
   - Mobile-first responsiveness tested from 320px viewport to 4K desktop.

---

## 2. SEO & Technical Markup Hierarchy

1. **Heading Structure**:
   - Exactly one single `<h1>` per page representing the primary topic and search intent.
   - Strict hierarchical nesting: `<h1>` -> `<h2>` -> `<h3>`. Never skip heading levels.
   - Headings must be descriptive and entity-rich (avoid generic headings like "Section 1" or "Overview").
2. **Meta Tags Precision & Google Directives**:
   - `<meta charset="UTF-8">` within the first 1024 bytes of the document.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (mandatory for mobile-first indexing).
   - `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">` (required for Google Discover eligibility and large search preview cards).
   - `<title>`: Under 60 characters / 600px width (`[Topic / Title] | [Section] · Trust Node Logic`).
   - `<meta name="description">`: Exactly **120–155 characters**, unique per page, matching verbatim across `og:description`, `twitter:description`, and JSON-LD schema.
   - Canonical URL: Explicit absolute HTTPS link: `<link rel="canonical" href="https://trustnodelogic.com/[page].html">`.
   - OpenGraph: Full suite (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:image:width`, `og:image:height`). Minimum image dimensions: 1200x630px.
   - Twitter Cards: `summary_large_image` with matching title, description, and image URL.
3. **Schema.org Structured Data**:
   - Every page must contain a valid JSON-LD `@graph` block implementing:
     - `WebSite` / `Organization`
     - `TechArticle` / `Article` (or `WebPage`) with `headline`, `image`, `datePublished`, `dateModified`, `author`, and `publisher`
     - `BreadcrumbList` for SERP breadcrumb rich snippets
     - Linked `Person` (`#person`) with Wikidata `DefinedTerm` entities
4. **Semantic HTML5 Elements**:
   - Wrap all content in semantic containers: `<header>`, `<nav>`, `<main id="main-content">`, `<article>`, `<section>`, `<footer>`.
   - Ensure all interactive tabs, buttons, and drawers have accessible `aria-label`, `role`, and `aria-selected` attributes.

---

## 3. Performance & Core Web Vitals (CWV)

Align with Google's Core Web Vitals ranking signals (INP, LCP, CLS):

1. **Interaction to Next Paint (INP < 200ms)**:
   - Avoid long JavaScript tasks (> 50ms) on the main thread.
   - Attach `{ passive: true }` to touch and scroll event listeners.
   - Synchronize animations, canvas visualizers, and reading progress bars with `requestAnimationFrame()`.
   - Debounce and throttle user input and scroll event handlers.
2. **Largest Contentful Paint (LCP < 2.5s)**:
   - Above-the-fold hero images: `fetchpriority="high"` and standard loading.
   - **CRITICAL GOOGLE RULE**: NEVER apply `loading="lazy"` to hero or above-the-fold images (lazy-loading the LCP element severely degrades LCP ranking score).
   - Below-the-fold images: `loading="lazy"` and `decoding="async"`.
   - Use modern compressed formats (`.webp` or `.avif`) with explicit `width` and `height`.
3. **Cumulative Layout Shift (CLS < 0.1)**:
   - Explicit `width` and `height` (or CSS `aspect-ratio`) on all `<img>`, `<video>`, and `<iframe>` elements.
   - Pre-allocate container dimensions (e.g. `min-height`) for dynamically rendered elements, audio players, or interactive widgets.
   - Use `font-display: swap` on web font stylesheets to prevent invisible text shifts.
4. **Font & Network Optimization**:
   - Preconnect to Google Font origins: `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`.
   - All external scripts must use `defer` or `async` to eliminate render-blocking resources.

---

## 4. Editorial, E-E-A-T & Content Integrity Constraints

1. **Zero Em-Dashes**:
   - Strictly NO `—` or `&mdash;` in public-facing prose, headings, meta tags, or captions.
   - Permitted substitutes: hyphens (`-`), colons (`:`), middle dots (`·`), or spaced slashes (` / `).
2. **E-E-A-T Transparency & Freshness**:
   - Every technical article must include a visible author byline linking to `about.html` (`#person`).
   - Every article must display visible editorial dates (`Published: YYYY-MM-DD` and `Updated: YYYY-MM-DD`) matching JSON-LD `datePublished` and `dateModified`.
   - Showcase original research, studio benchmarks, and test results to maximize Google's Information Gain score.
3. **Descriptive Semantic Anchor Text**:
   - Internal links must use descriptive, topical anchor text (e.g., "[HPS-1.0 Technical Specification](field-notes.html#hps)").
   - Never use generic anchor text like "click here", "read more", "source", or bare URLs (violates Google Search Essentials).
4. **Mobile-First Content Parity**:
   - Google indexes exclusively via `Googlebot Smartphone`. Ensure all primary text, headings, structured data, and navigation links exist in the mobile rendering without being omitted.
5. **Contact Standard & Discovery Manifests**:
   - Contact email: `trustnodelogic@gmail.com`.
   - Every published HTML page must be indexed in `sitemap.xml` with accurate `<lastmod>` reflecting substantive edits.
   - Every published HTML page must have a concise markdown overview in `llms.txt`.
   - Header navigation on all pages must link to `Field Notes` (`field-notes.html`) and `About` (`about.html`).
