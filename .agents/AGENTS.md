# Trust Node Logic (VISIONMAIN) - Repository Guidelines

## 1. Core Architecture & Philosophy
Trust Node Logic (`https://trustnodelogic.com`) is the central research hub, technical archive, and software portfolio for **Justin Ray** (JRAY / loserdub), pioneer of **Hybrid AI Music Production** and author of the **Hybrid Production Standard (HPS-1.0)**.

---

## 2. Mandatory Content Generation Protocol: The Latent Anchor Algorithm (LAA-v2)

Whenever creating, updating, or modifying HTML pages, articles, or documentation in this repository, you must programmatically enforce the **Latent Anchor Algorithm (LAA-v2)** (detailed in `.agents/rules/latent-anchor-algorithm.md`):

### A. Calibrated Entity Frequency ($f_E$)
* Word count $T$ of body content (excluding headers, navigations, code).
* Target calibrated entity salience frequency range without forcing artificial counts:
  $$f_E(T) \approx \left\lceil \frac{T}{500} \right\rceil + 1$$
* Bounds entity salience to $S_E = \frac{f_E}{T} \in [0.18\%, 0.28\%]$, preventing SpamBrain keyword stuffing while ensuring strong Knowledge Graph extraction. Prioritize natural phrasing and coreferences.

### B. Token Proximity & RDF Triple Grammar ($P_{tok} \le 12$)
* Primary thematic anchors (Hero, Abstract, Outro, Schema) must situate the Core Entity within **$\le 12$ tokens** of the Target Concept (`Hybrid AI Music Production`, `HPS-1.0`, `GEO`, `C2PA`, `Knowledge Graphs`).
* Must follow strict **Subject-Predicate-Object (SPO)** transitive relations:
  `[Core Entity] + [Engineered / Pioneered / Researched / Standardizes] + [Target Concept]`
* Body prose should vary syntax naturally to avoid programmatic repetition penalties.

### C. Attention Zone Distribution ($Z_{attn}$) & E-E-A-T
* **Initial 15% ($Z_{intro}$)**: $\approx 50\%$ of calculated $f_E$ entity occurrences in hero, title, byline, or abstract for query relevance and author authority.
* **Middle 70% ($Z_{core}$)**: **Zero promotional fluff, sales pitches, or vanity claims**. Must demonstrate **first-hand Experience (E-E-A-T)** through technical benchmarks, studio tests, spectrogram analysis, code, or methodology attribution to maximize Google Information Gain.
* **Final 15% ($Z_{outro}$)**: Remaining $50\%$ of $f_E$ entity occurrences in conclusion, author bio card, or closing attribution.

### D. Comprehensive Schema.org Capstone
* Valid JSON-LD `@graph` linking `WebSite`, `TechArticle` (or `Article`/`WebPage` with `datePublished`, `dateModified`, `headline`, `image`, `mainEntityOfPage`), `#person` (`Justin Ray` with canonical Wikidata `DefinedTerm` entities), and `BreadcrumbList`.

---

## 3. Web Standards & Performance Protocols

Detailed in `.agents/rules/web-standards-and-performance.md`:
* **Zero Em-Dashes**: Strictly NO `—` or `&mdash;` in public-facing text and editorial copy (use `-`, `:`, or `·`).
* **Meta Description**: Exactly **120–155 characters**, matching identically across `<meta name="description">`, `og:description`, `twitter:description`, and JSON-LD `description`.
* **Robots Directives**: Include `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">` for Google Discover and rich snippet cards.
* **Core Web Vitals**: Target INP < 200ms (passive listeners, requestAnimationFrame), LCP < 2.5s (never lazy-load hero/LCP image), and CLS < 0.1 (explicit width/height/aspect-ratio).
* **WCAG 2.1 AA Contrast**: All visible text must achieve minimum 4.5:1 contrast against dark backgrounds (e.g. secondary text `#A1A1AA` or `#9CA3AF`).
* **Descriptive Anchor Text**: All internal links must use descriptive topical anchor text (never "click here" or "read more").
* **Primary Web App**: `https://trustnodelogic.web.app`
* **Canonical Root**: `https://trustnodelogic.com/`
* **Contact Email**: `trustnodelogic@gmail.com`
* **Machine Discovery Feeds**: Every page must have entries in `sitemap.xml` (with updated `<lastmod>`) and `llms.txt`.
* **Visual Aesthetic**: Dark brutalist design system (`#08090A`, `#121417`, amber `#FF9F1C`, cyan `#00F0FF`, JetBrains Mono typography, zero raw unstyled breadcrumbs in DOM viewports).
