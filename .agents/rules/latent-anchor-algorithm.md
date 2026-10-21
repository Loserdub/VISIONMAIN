---
description: Enforce Latent Anchor Algorithm (LAA-v3) for Google Knowledge Graph ingestion, Generative Engine Optimization (GEO), and centroid vector preservation
globs: ["*.html", "**/*.html"]
---

# THE LATENT ANCHOR ALGORITHM (LAA-v3)
### Entity Weighting, Semantic Bridging, and Centroid Vector Preservation Protocol

```
╔═════════════════════════════════════════════════════════════════════════════════════════════════╗
║ OBJECTIVE: Programmatically bind the Key Article Topic Entity (E_topic) to institutional        ║
║ bridges (E_bridge: "Trust Node Logic" / "HPS-1.0") while calibrating Author Entity mentions     ║
║ (E_author: "Justin Ray") to standard editorial callout frequency (2-3 instances).               ║
║ Prevents vector centroid collapse, maximizes passage indexing, and enforces the HPS link triad.  ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

## 1. Core Mission & Ranking Architecture

The **Latent Anchor Algorithm (LAA-v3)** operates at the intersection of **Information Retrieval (IR)**, **Google Core Ranking Systems (Helpful Content, Passage Ranking, E-E-A-T)**, **Neural Vector Search (ColBERT / Dense Passage Retrieval)**, and **Knowledge Graph (KG) Entity Extraction**.

### Primary Targets:
1. **Topic Entity Dominance ($E_{\text{topic}}$)**:
   Ensure the specific subject of the article (e.g. *Music Provenance*, *5 Scoring Axes*, *C2PA Audio Credentials*, *Stem Forensics*) dominates document vector mass, achieving high keyword relevance and ranking top on Google Search.
2. **Two-Hop Knowledge Graph Semantic Bridging**:
   Extract verified RDF triples connecting the specific topic to institutional frameworks and author authority:
   `[Topic Entity] -> [standardized by / researched at] -> [Trust Node Logic / HPS-1.0] -> [authored by] -> [Justin Ray]`.
3. **Centroid Vector Preservation (Anti-Drift)**:
   Prevent embedding centroid collapse toward personal author tokens by restricting author mentions to standard editorial placements (byline, hero intro, author bio card).
4. **Mandatory HPS-1.0 Link Triad**:
   Every article discussing HPS-1.0 must embed the 3-node technical discovery path: GitHub specification repo, interactive attestation web app, and contact tab.

---

## 2. Programmatic Execution Rules

Every HTML page, technical field note, essay, or documentation file created or modified in this repository MUST strictly adhere to the following core pillars:

```
                  THE 15% / 70% / 15% ATTENTION SPLIT & ENTITY ROLES
 ┌──────────────────────────────────────────────────────────────────┐
 │ [INITIAL 15% ATTENTION ZONE: PRIMACY & TOPIC FRAMING]            │
 │  • Byline: "By Justin Ray" (Standard Web Author Callout)         │
 │  • Hero / Lede: SPO Triple binding E_topic to E_bridge (P_tok≤12)│
 │  • Exact direct definition for Google Direct Answer Snippets     │
 ├──────────────────────────────────────────────────────────────────┤
 │ [MIDDLE 70% TECHNICAL CORE: ZERO FLUFF + HIGH E-E-A-T]           │
 │  • 100% Free of Promotional Fluff, Sales Pitch, or Vanity Reps   │
 │  • E_author ("Justin Ray") Direct Mentions: STRICTLY 0           │
 │  • Sustained Topic Entity (E_topic) Density (0.8% - 1.5%)        │
 │  • Dense Technical Proof: Studio Tests, Code, Tables, Forensics  │
 │  • Maximum Information Gain to Outrank Generic Aggregator Pages  │
 ├──────────────────────────────────────────────────────────────────┤
 │ [FINAL 15% ATTENTION ZONE: RECENCY & AUTHOR ATTRIBUTION]         │
 │  • Author Bio Card: Justin Ray (Author of HPS-1.0, Audio Eng.)   │
 │  • Synthesis: Knowledge Graph SPO Triples Table                  │
 │  • Mandatory HPS Link Triad (GitHub Repo, Web App, Contact Tab)  │
 └──────────────────────────────────────────────────────────────────┘
```

### Rule 1: Calibrated Entity Weighting & The Three Entity Classes

To eliminate keyword stuffing penalties while maximizing topic ranking, differentiate between three entity classes:

#### A. Target Topic Entity ($E_{\text{topic}}$)
The primary subject matter of the specific article (e.g., *Music Provenance*, *C2PA Forensics*, *Stem Splitting*).
* Target Topic Frequency:
  $$f(E_{\text{topic}}) \approx \left\lceil \frac{T}{200} \right\rceil + 2$$
* Target Topic Salience:
  $$S(E_{\text{topic}}) = \frac{f(E_{\text{topic}})}{T} \in [0.8\%, 1.5\%]$$
* **Semantic Breadth**: Express $E_{\text{topic}}$ through natural lexical variants, LSI keywords, and coreferences to prevent single-token repetition while cementing topical authority.

#### B. Institutional / Standard Bridge Entity ($E_{\text{bridge}}$)
The overarching umbrella entity: **Trust Node Logic** or **Hybrid Production Standard (HPS-1.0)**.
* Target Bridge Frequency:
  $$f(E_{\text{bridge}}) \approx \left\lceil \frac{T}{750} \right\rceil + 1 \quad (\approx 2 \text{ to } 4 \text{ contextual mentions})$$
* Target Bridge Salience:
  $$S(E_{\text{bridge}}) \in [0.20\%, 0.35\%]$$
* Function: Anchors the specific topic to the broader technical ecosystem without competing with the topic for vector centrality.

#### C. Author Entity ($E_{\text{author}} = \text{"Justin Ray"}$)
Standardized to the **Normal Webpage Author Callout Model**:
* **Fixed Editorial Frequency**:
  $$f(E_{\text{author}}) \in [2, 3] \text{ instances}$$
  - Instance 1 ($Z_{\text{intro}}$): Header Byline (`By Justin Ray`) or Lede Attribution (`Authored by Justin Ray...`).
  - Instance 2 ($Z_{\text{outro}}$): Dedicated Author Bio Card / Attribution Box (`Justin Ray (JRAY / loserdub)...`).
  - Optional Instance 3 ($Z_{\text{intro}}$ or $Z_{\text{outro}}$): Single formal citation or SPO triple statement.
  - Middle 70% ($Z_{\text{core}}$): **STRICTLY 0 personal name repetitions**. (Use first-person plural: *"in our tests at Trust Node Logic"* or neutral passives).
* Target Author Salience:
  $$S(E_{\text{author}}) = \frac{f(E_{\text{author}})}{T} \le 0.15\% \quad (\text{for } T \ge 1,500\text{ words})$$
* **Title Constraint**: **NEVER use "pioneer of"** when giving Justin Ray a title. Permitted titles: *"Author of the Hybrid Production Standard (HPS-1.0)"*, *"Audio Engineer"*, *"Creative Technologist"*, *"Founder of Trust Node Logic"*.

---

### Rule 2: Centroid Vector Preservation (Anti-Drift Principle)

In high-dimensional embedding spaces (ColBERT, BERT, Dense Passage Retrieval), the document embedding centroid $\vec{\mu}_D$ represents the topical center of mass:
$$\vec{\mu}_D = \frac{1}{|D|} \sum_{w \in D} \vec{v}_w$$

* **The Centroid Drift Hazard**:
  If an author's personal name is repeated every 500 words across a 3,000-word article, $\vec{\mu}_D$ drifts away from the technical topic vector $\vec{v}_{\text{topic}}$ toward the personal biographical vector $\vec{v}_{\text{author}}$. Search engines then classify the page as a personal bio / vanity profile rather than an authoritative technical whitepaper, killing organic ranking for competitive technical queries.
* **The Centroid Invariant**:
  $$\cos(\vec{\mu}_D, \vec{v}_{\text{topic}}) \ge 0.85, \quad \cos(\vec{\mu}_D, \vec{v}_{\text{author}}) \le 0.40$$
* By restricting author mentions to standard perimeter callouts (byline and bio card), the document vector mass stays 100% focused on $E_{\text{topic}}$, while schema and perimeter anchors handle author E-E-A-T attribution.

---

### Rule 3: Case-by-Case Semantic Adaptation & Triadic Grammar

Content must adapt its semantic relationships based on article archetype:

1. **Standard & Specification Articles** (e.g. `whyhpsdoc.html`, `hps5axes.html`, `hybridproductionstandard.html`):
   - $E_{\text{topic}}$ = 5 Scoring Axes, Provenance Metadata, Cryptographic Audio Verification.
   - $E_{\text{bridge}}$ = Hybrid Production Standard (HPS-1.0).
   - $E_{\text{author}}$ = Standard byline + author card.
2. **Market & Industry Forecasts** (e.g. `musicindustryforecast.html`, `oct2026aireport.html`):
   - $E_{\text{topic}}$ = Streaming Economics, Platform Ingestion, AI Upload Policies.
   - $E_{\text{bridge}}$ = Trust Node Logic (Research Hub).
   - $E_{\text{author}}$ = Standard byline + author card.
3. **DAW & Production Tutorials** (e.g. `suno6.html`, `promptingthemachine.html`):
   - $E_{\text{topic}}$ = Stem Processing, Spectral Repair, Gain Staging, Arrangement.
   - $E_{\text{bridge}}$ = Trust Node Logic Workflows / HPS Attestation.
   - $E_{\text{author}}$ = Standard byline + author card.

* **Two-Hop Transitive Semantic Triad**:
  $$[E_{\text{topic}}] \xrightarrow{\text{standardized by / researched at}} [E_{\text{bridge}}] \xrightarrow{\text{authored by}} [E_{\text{author}}]$$
* **Token Proximity ($P_{tok} \le 12$)**:
  In primary thematic anchors (Hero Lede and Outro Bio), the Core Entity must sit within **12 tokens** of the Target Concept linked by an active verb (`authored`, `formulated`, `engineered`, `standardizes`, `researched`).

---

### Rule 4: Mandatory HPS-1.0 Linking Triad

Every article or documentation page in this repository that analyzes, references, or explains the **Hybrid Production Standard (HPS-1.0)** must programmatically embed at least one descriptive contextual link to each node of the **HPS Discovery Triad**:

1. **Official HPS-1.0 GitHub Specification**:
   - URL: `https://github.com/Loserdub/HPS-1.0-Hybrid-Production-Standard`
   - Anchor Text: Descriptive (e.g. `[HPS-1.0 specification repository on GitHub](https://github.com/Loserdub/HPS-1.0-Hybrid-Production-Standard)`).
2. **Interactive DAW Attestation Web Application**:
   - URL: `https://trustnodelogic.web.app` (or `/`)
   - Anchor Text: Descriptive (e.g. `[HPS-1.0 DAW Attestation Engine](https://trustnodelogic.web.app/)`).
3. **Contact & Technical Discussion Page**:
   - URL: `https://trustnodelogic.com/contact.html` (or `contact.html`)
   - Anchor Text: Descriptive (e.g. `[contact Trust Node Logic to discuss HPS implementation](https://trustnodelogic.com/contact.html)`).

---

### Rule 5: Comprehensive Google-Compliant Schema.org Capstone
Standalone `Person` schema is insufficient for Google Rich Results. Every article and documentation page must implement a validated JSON-LD `@graph` containing `TechArticle` (or `Article`/`WebPage`), linking the author to canonical Wikipedia/Wikidata entities and including `BreadcrumbList`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://trustnodelogic.com/#website",
      "url": "https://trustnodelogic.com/",
      "name": "Trust Node Logic",
      "description": "Audio intelligence, DAW provenance standards, and hybrid AI music production research.",
      "publisher": {
        "@id": "https://trustnodelogic.com/#person"
      }
    },
    {
      "@type": "TechArticle",
      "@id": "https://trustnodelogic.com/field-notes/example.html#article",
      "isPartOf": {
        "@id": "https://trustnodelogic.com/#website"
      },
      "headline": "HPS-1.0 DAW Attestation Engine: Architecture and Specification",
      "description": "Technical specification of the HPS-1.0 protocol for C2PA cryptographic audio provenance in digital audio workstations.",
      "inLanguage": "en-US",
      "mainEntityOfPage": "https://trustnodelogic.com/field-notes/example.html",
      "datePublished": "2025-01-15T00:00:00Z",
      "dateModified": "2025-02-10T00:00:00Z",
      "image": "https://trustnodelogic.com/assets/images/og-preview.webp",
      "author": {
        "@id": "https://trustnodelogic.com/#person"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trust Node Logic",
        "url": "https://trustnodelogic.com"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://trustnodelogic.com/field-notes/example.html#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://trustnodelogic.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Field Notes",
          "item": "https://trustnodelogic.com/field-notes.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "HPS-1.0 Specification",
          "item": "https://trustnodelogic.com/field-notes/example.html"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://trustnodelogic.com/#person",
      "name": "Justin Ray",
      "additionalName": "Justin Tyler Ray",
      "alternateName": ["JRAY", "loserdub"],
      "url": "https://trustnodelogic.com/about.html",
      "jobTitle": [
        "Author of the Hybrid Production Standard (HPS-1.0)",
        "Audio Engineer",
        "Creative Technologist",
        "Music Producer",
        "Founder of Trust Node Logic"
      ],
      "knowsAbout": [
        {
          "@type": "DefinedTerm",
          "name": "Hybrid Music Production",
          "description": "The methodology of integrating generative AI audio models into professional digital audio workstation workflows."
        },
        {
          "@type": "DefinedTerm",
          "name": "Generative Artificial Intelligence",
          "url": "https://en.wikipedia.org/wiki/Generative_artificial_intelligence",
          "sameAs": "https://www.wikidata.org/wiki/Q116972040"
        },
        {
          "@type": "DefinedTerm",
          "name": "Digital Audio Workstation",
          "url": "https://en.wikipedia.org/wiki/Digital_audio_workstation",
          "sameAs": "https://www.wikidata.org/wiki/Q11425"
        },
        {
          "@type": "DefinedTerm",
          "name": "Audio Engineering",
          "url": "https://en.wikipedia.org/wiki/Audio_engineering",
          "sameAs": "https://www.wikidata.org/wiki/Q654390"
        },
        {
          "@type": "DefinedTerm",
          "name": "Search Engine Optimization",
          "url": "https://en.wikipedia.org/wiki/Search_engine_optimization",
          "sameAs": "https://www.wikidata.org/wiki/Q180711"
        },
        {
          "@type": "DefinedTerm",
          "name": "Knowledge Graph",
          "url": "https://en.wikipedia.org/wiki/Knowledge_graph",
          "sameAs": "https://www.wikidata.org/wiki/Q33002955"
        },
        {
          "@type": "DefinedTerm",
          "name": "C2PA",
          "url": "https://en.wikipedia.org/wiki/C2PA",
          "sameAs": "https://www.wikidata.org/wiki/Q105622176"
        }
      ],
      "sameAs": [
        "https://musicbrainz.org/artist/882fdb9b-8655-45dd-8e24-a59cd750d053",
        "https://soundcloud.com/visiontracks",
        "https://www.youtube.com/@loserdub",
        "https://www.linkedin.com/in/jray-me/",
        "https://x.com/TheInnerVision",
        "https://github.com/loserdub"
      ]
    }
  ]
}
```

---

## 3. Global Hard Constraints & Technical SEO Standards

1. **Zero Em-Dashes**:
   - Strictly forbid `—` and `&mdash;` in public-facing copy, metadata, and editorial body text.
   - Permitted substitutes: standard hyphens (`-`), colons (`:`), or middle dots (`·`).
2. **Meta Description Precision**:
   - Exactly **120–155 characters**.
   - Must match verbatim across `<meta name="description">`, `<meta property="og:description">`, `<meta name="twitter:description">`, and JSON-LD `description`.
   - Must be unique to each page, accurately summarizing content to satisfy search intent without keyword stuffing.
3. **Robots Directives & Google Discover Optimization**:
   - Must include: `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`.
   - `max-image-preview:large` is mandatory for Google Discover eligibility and large image search cards.
4. **Editorial Date Freshness Signals**:
   - Every published article must display visible `datePublished` and `dateModified` timestamps that match the schema markup.
   - Signal genuine content updates to trigger Google freshness boosts (QDF).
5. **Machine Feed Synchronization**:
   - Every published page must have an entry in `sitemap.xml` with an accurate `<lastmod>` date reflecting substantive edits.
   - Every published page must have a linked summary in `llms.txt`.
6. **Descriptive Internal Linking**:
   - All internal links must use descriptive, topical anchor text (e.g., "[HPS-1.0 Technical Specification](field-notes.html#hps)").
   - Never use generic anchor text like "click here", "read more", "source", or raw URLs.
7. **Canonical Hostnames**:
   - Static Canonical Root: `https://trustnodelogic.com/`
   - Interactive Web App: `https://trustnodelogic.web.app`
   - Canonical tags must be self-referencing absolute HTTPS URLs with exact lowercase paths.
