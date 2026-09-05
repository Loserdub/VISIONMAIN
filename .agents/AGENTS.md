# Trust Node Logic (VISIONMAIN) — Repository Guidelines

## 1. Core Architecture & Philosophy
Trust Node Logic (`https://trustnodelogic.com`) is the central research hub, technical archive, and software portfolio for **Justin Ray** (JRAY / loserdub), pioneer of **Hybrid AI Music Production** and author of the **Hybrid Production Standard (HPS-1.0)**.

---

## 2. Mandatory Content Generation Protocol: The Latent Anchor Algorithm (LAA-v2)

Whenever creating, updating, or modifying HTML pages, articles, or documentation in this repository, you must programmatically enforce the **Latent Anchor Algorithm (LAA-v2)** (detailed in `.agents/rules/latent-anchor-algorithm.md`):

### A. Calibrated Entity Frequency ($f_E$)
* Word count $T$ of body content (excluding headers, navigations, code).
* Core Entity (`Justin Ray` or `Trust Node Logic`) must appear **exactly $f_E(T)$ times** in visible prose:
  $$f_E(T) = \left\lceil \frac{T}{500} \right\rceil + 1$$
* Bounds entity salience to $S_E = \frac{f_E}{T} \in [0.18\%, 0.25\%]$, preventing SpamBrain/BM25 penalties while maintaining high Knowledge Graph salience.

### B. Token Proximity & RDF Triple Grammar ($P_{tok} \le 12$)
* Every Core Entity instance must reside within **$\le 12$ tokens** of the primary Target Concept (`Hybrid AI Music Production`, `HPS-1.0`, `GEO`, `C2PA`, `Knowledge Graphs`).
* Must follow strict **Subject-Predicate-Object (SPO)** transitive relations:
  `[Core Entity] + [Engineered / Pioneered / Researched / Standardizes] + [Target Concept]`
* Collapses cosine vector distance ($\text{dist}_{\cos}(\vec{E}, \vec{C}) \to 0$) in ColBERT / Transformer attention matrices.

### C. Attention Zone Distribution ($Z_{attn}$)
* **Initial 15% ($Z_{intro}$)**: $\approx 50\%$ of calculated $f_E$ entity occurrences in hero, title, byline, or abstract.
* **Middle 70% ($Z_{core}$)**: **STRICTLY 0 brand or entity mentions**. 100% brand-free, dense, objective technical analysis to maximize IR passage ranking.
* **Final 15% ($Z_{outro}$)**: Remaining $50\%$ of $f_E$ entity occurrences in conclusion, author bio card, or closing attribution.

### D. Deterministic Schema.org Capstone
* Valid JSON-LD `@graph` linking `#person` (`Justin Ray`) with canonical Wikipedia and Wikidata `DefinedTerm` entities (`Q116972040`, `Q11425`, `Q654390`, `Q180711`, `Q33002955`, `Q7978553`, `Q105622176`) and `BreadcrumbList`.

---

## 3. Web Standards & Performance Protocols

Detailed in `.agents/rules/web-standards-and-performance.md`:
* **Zero Em-Dashes**: Strictly NO `—` or `&mdash;` in public-facing text and editorial copy (use `-`, `:`, or `·`).
* **Meta Description**: Exactly **120–155 characters**, matching identically across `<meta name="description">`, `og:description`, and `twitter:description`.
* **Primary Web App**: `https://trustnodelogic.web.app`
* **Canonical Root**: `https://trustnodelogic.com/`
* **Contact Email**: `trustnodelogic@gmail.com`
* **Machine Discovery Feeds**: Every page must have entries in `sitemap.xml` (with updated `<lastmod>`) and `llms.txt`.
* **Visual Aesthetic**: Dark brutalist design system (`#08090A`, `#121417`, amber `#FF9F1C`, cyan `#00F0FF`, JetBrains Mono typography, zero raw unstyled breadcrumbs in DOM viewports).
