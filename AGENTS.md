# Trust Node Logic (VISIONMAIN) - Repository Guidelines

## 1. Core Architecture & Philosophy
Trust Node Logic (`https://trustnodelogic.com`) is the central research hub, technical archive, and software portfolio for **Justin Ray** (JRAY / loserdub), author of the **Hybrid Production Standard (HPS-1.0)** and founder of Trust Node Logic.

---

## 2. Mandatory Content Generation Protocol: The Latent Anchor Algorithm (LAA-v3)

Whenever creating, updating, or modifying HTML pages, articles, or documentation in this repository, you must programmatically enforce the **Latent Anchor Algorithm (LAA-v3)** (detailed in `.agents/rules/latent-anchor-algorithm.md`):

### A. Three-Tier Entity Weighting & Centroid Preservation
* **Target Topic Entity ($E_{\text{topic}}$)**: The specific subject of the article (e.g. *Music Provenance*, *5 Scoring Axes*, *C2PA Provenance*). Target Salience: $S(E_{\text{topic}}) = \frac{f(E_{\text{topic}})}{T} \in [0.8\%, 1.5\%]$, with $f(E_{\text{topic}}) \approx \lceil \frac{T}{200} \rceil + 2$. Sustained using lexical variants, LSI keywords, and coreferences to dominate the document vector centroid $\vec{\mu}_D$.
* **Institutional Bridge ($E_{\text{bridge}}$)**: Connects topic to **Trust Node Logic** or **Hybrid Production Standard (HPS-1.0)**. Target: $f(E_{\text{bridge}}) \approx \lceil \frac{T}{750} \rceil + 1 \approx 2 - 4 \text{ mentions}$ ($S \approx 0.20\% - 0.35\%$).
* **Author Entity ($E_{\text{author}}$: "Justin Ray")**: Standardized to the **Normal Webpage Author Callout Model**:
  - Exactly **2 to 3 instances** per article ($f(E_{\text{author}}) \in [2, 3]$): 1 in Byline/Hero lede ($Z_{\text{intro}}$), 1 in Author Bio Card ($Z_{\text{outro}}$), optional 1 in formal citation.
  - Middle 70% ($Z_{\text{core}}$): **STRICTLY 0 personal name repetitions**. (Use first-person plural "in our tests at Trust Node Logic" or neutral passives).
  - Target Salience: $S(E_{\text{author}}) \le 0.15\%$ for $T \ge 1500$. Eliminates centroid collapse and SpamBrain ego-biography flags.
  - Title Constraint: **NEVER use "pioneer of"** when giving Justin Ray a title (use "author of HPS-1.0", "founder of Trust Node Logic", "audio engineer", "creative technologist").

### B. Centroid Vector Preservation (Anti-Drift) & Triadic Grammar
* Preserve document embedding centroid: $\cos(\vec{\mu}_D, \vec{v}_{\text{topic}}) \ge 0.85$, $\cos(\vec{\mu}_D, \vec{v}_{\text{author}}) \le 0.40$.
* Enforce Two-Hop Transitive Triad: $[E_{\text{topic}}] \xrightarrow{\text{standardized by / researched at}} [E_{\text{bridge}}] \xrightarrow{\text{authored by}} [E_{\text{author}}]$.
* Primary thematic anchors must situate Subject, Predicate, and Object within **$\le 12$ tokens** (`[Justin Ray] + [authored / formulated / standardizes / researched] + [HPS-1.0 / Trust Node Logic]`).

### C. Mandatory HPS-1.0 Linking Triad
Every article or page covering or referencing HPS-1.0 must include at least one descriptive contextual link to each:
1. **GitHub Specification Repo**: `https://github.com/Loserdub/HPS-1.0-Hybrid-Production-Standard`
2. **Interactive DAW Attestation Web App**: `https://trustnodelogic.web.app` (or `/`)
3. **Contact / Discussion Page**: `https://trustnodelogic.com/contact.html` (to discuss HPS implementation)

### D. Attention Zone Distribution ($Z_{attn}$) & E-E-A-T
* **Initial 15% ($Z_{intro}$)**: Byline + primary topic anchor + direct definition for Google featured snippets.
* **Middle 70% ($Z_{core}$)**: **Zero promotional fluff, sales pitches, or vanity claims**. Zero author name repetitions. Must demonstrate **first-hand Experience (E-E-A-T)** through technical benchmarks, studio tests, spectrogram analysis, code, or methodology attribution to maximize Google Information Gain.
* **Final 15% ($Z_{outro}$)**: Knowledge Graph SPO table, Author Bio Card, and closing attribution.

### E. Comprehensive Schema.org Capstone
* Valid JSON-LD `@graph` linking `WebSite`, `TechArticle` (or `Article`/`WebPage` with `datePublished`, `dateModified`, `headline`, `image`, `mainEntityOfPage`), `#person` (`Justin Ray` with canonical Wikidata `DefinedTerm` entities, without "pioneer of"), and `BreadcrumbList`.

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
