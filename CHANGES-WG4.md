# CHANGES-WG4: Differentiate the Suno Cluster

## Overview
Workgroup 4 (WG4) systematically differentiated the Suno cluster (`suno6.html`, `sunov6.html`, `Suno101.html`, and `sunonewtos.html`) across distinct search intents and user queries without merging files or breaking existing URLs on static GitHub Pages hosting.

### Core Intent Architecture
1. **`suno6.html` (4,488 words) - Hands-on How-To & Prompting Guide**:
   - **Target Intent**: How-to queries, prompt syntax, inpainting, section editing, DAW stem isolation, and post-production workflows.
   - **Role**: The de facto studio manual for producers actively working in Suno V6.
2. **`sunov6.html` (1,522 words) - Review, Changes, Pricing Tiers & Migration Analysis**:
   - **Target Intent**: Platform review, September 9 model retirement analysis, licensing architecture (WMG, BMG, Believe), pricing tier rights (Free vs Pro vs Premier), and industry reception.
   - **Role**: Investigative analysis for artists evaluating platform shifts and commercial terms.
3. **`Suno101.html` (Introductory Prompt Masterclass)**:
   - **Role**: Beginner foundation for structural meta-tags and basic prompt syntax. Contains natural contextual bridge to `suno6.html`.
4. **`sunonewtos.html` (Terms of Service & Licensing Deep Dive)**:
   - **Role**: Legal analysis of BMG deals, perpetual upload licensing, and download limits. Contains natural contextual bridge to `sunov6.html`.

---

## 1. Files Changed
* `suno6.html` (Updated title, H1, JSON-LD, lede paragraph, and added cross-intent callout)
* `sunov6.html` (Updated title, H1, JSON-LD, lede paragraph, author title, and added cross-intent callout)
* `Suno101.html` (Added natural contextual link to `suno6.html`)
* `sunonewtos.html` (Added natural contextual link to `sunov6.html`)
* `CHANGES-WG4.md` (Workgroup change report)

---

## 2. Cross-Intent Navigation Callouts: "Which page do you need?"

Both `suno6.html` and `sunov6.html` now feature a dedicated, high-contrast two-line callout block near the top of the viewport directly beneath the article hero bylines, allowing searchers landing on the wrong page to self-route immediately without bouncing.

### A. Callout in `suno6.html` (pointing to `sunov6.html`):
```html
<div class="which-page-callout" style="margin: 20px 0; padding: 14px 18px; background: var(--bg-panel); border: 1px solid var(--border); border-left: 3px solid var(--amber); border-radius: 4px; font-family: var(--mono); font-size: 0.85rem; line-height: 1.6;">
  <div style="color: var(--amber); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Which page do you need?</div>
  <div style="color: var(--text-dim);">Looking for model transition analysis, pricing tier changes, and rights critique? Read our <a href="sunov6.html" style="color: var(--amber); text-decoration: underline;">Suno v6 review and migration analysis</a>.</div>
</div>
```
- **Exact Anchor Text**: `"Suno v6 review and migration analysis"`

### B. Callout in `sunov6.html` (pointing to `suno6.html`):
```html
<div class="which-page-callout" style="margin: 20px 0; padding: 14px 18px; background: var(--bg-raised, #121317); border: 1px solid var(--border, rgba(255,255,255,0.09)); border-left: 3px solid var(--amber, #FF9F1C); border-radius: 4px; font-family: var(--mono, monospace); font-size: 0.85rem; line-height: 1.6;">
  <div style="color: var(--amber, #FF9F1C); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">Which page do you need?</div>
  <div style="color: var(--text-dim, #9B9A97);">Looking for step-by-step prompt syntax, inpainting, and DAW stem workflows? Explore our comprehensive <a href="suno6.html" style="color: var(--amber, #FF9F1C); text-decoration: underline;">Suno v6 prompting guide</a>.</div>
</div>
```
- **Exact Anchor Text**: `"Suno v6 prompting guide"`

---

## 3. Natural Contextual Links Added

### A. In `Suno101.html`:
- **Placement**: Section 07 ("7. The Final Secret"), closing synthesis.
- **Contextual Text**:
  > "Persistence is the only real master key. The generative nature of the AI means that even with perfect prompts, the seed matters. If you get a 'good' song with a 'bad' ending, use the 'Extend' feature from the last working section. Do not extend from the end of the song: extend from the last 10 seconds of the good section. This creates a branching path that preserves the sonic characteristics you already like, effectively 'training' the model on your own preference in real-time. For multi-stage prompt engineering, inpainting, and DAW stem isolation with the newest model architecture, see our complete `<a href="./suno6.html" class="text-[#FF9F1C] underline hover:text-[#FFAE33]">Suno v6 prompting guide</a>`."
- **Anchor**: `"Suno v6 prompting guide"`

### B. In `sunonewtos.html`:
- **Placement**: Section "The Squeeze", directly following the subscription tier matrix.
- **Contextual Text**:
  > "These download caps and commercial rights boundaries directly define how Suno's licensed models are partitioned in production. For an investigative assessment of how these tiers map to actual studio usage and producer reception, read our `<a href="./sunov6.html">Suno v6 review and migration analysis</a>`."
- **Anchor**: `"Suno v6 review and migration analysis"`

---

## 4. Sentence Duplication Audit Across the Suno Cluster

An exhaustive n-gram and sentence-boundary audit was conducted across all four files (`suno6.html`, `sunov6.html`, `Suno101.html`, and `sunonewtos.html`).

### Findings:
- **Editorial Sentence Duplication**: **0 sentences**.
- **Shared Phrasing**: There are zero copied or shared editorial sentences between `suno6.html` and `sunov6.html`. Each file leads with distinct narrative pacing, tone, and information gain.
- **Only Cross-File Identical Text Found**:
  1. Standard boilerplate copyright: `ALL FIELD NOTES © 2026 Justin Ray (JRAY).`
  2. Standard header/footer navigation lists: `Home The Standard The Suite Field Notes Music About Services Contact Sitemap`
  3. Canonical author credentials in author cards: `Author of HPS-1.0`.

---

## 5. Before and After Comparisons

### 1. `suno6.html`

#### `<title>`
- **Before**: `Suno V6 Guide: Prompting & DAW Tutorial | Trust Node Logic`
- **After**: `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`

#### OpenGraph & Twitter Title
- **Before**: `Suno V6 Guide: Prompting & DAW Tutorial | Trust Node Logic`
- **After**: `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`

#### `<h1>` Heading
- **Before**: `How to Use Suno V6`
- **After**: `How to Use Suno V6: Complete Prompting and Production Guide`

#### Schema.org JSON-LD
- **WebPage `name`**:
  - Before: `Suno V6 Guide: Prompting & DAW Tutorial | Trust Node Logic`
  - After: `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`
- **ListItem 3 `name`**:
  - Before: `How to Use Suno V6 Guide`
  - After: `Suno V6 Prompting Guide`
- **TechArticle `headline`**:
  - Before: `How to Use Suno V6: Complete Field Guide`
  - After: `How to Use Suno V6: Complete Prompting and Production Guide`

#### Lead Paragraph (`<p class="lede">`)
- **Before**: `Suno released v6 on September 9, 2026. It's not a version bump. It's a new generation of music models, built with licensed catalog partners including Warner Music Group, BMG and Believe, and it replaces every model that came before it.`
- **After**: `Prompting and producing in Suno V6 centers on prompt syntax precision, targeted inpainting, and clean DAW stem integration rather than endless full-track regeneration. This comprehensive seven-stage guide walks through model selection, acoustic meta-tags, lyric timing, and hybrid post-production to help you build release-ready audio.`

---

### 2. `sunov6.html`

#### `<title>`
- **Before**: `Suno v6 Review: Edit Mode, Tiers & Migration · Trust Node Logic`
- **After**: `Suno v6 Review: Changes, Pricing Tiers & Migration Analysis | Trust Node Logic`

#### OpenGraph & Twitter Title
- **Before**: `Suno v6 Review: Edit Mode, Tiers & Migration · Trust Node Logic`
- **After**: `Suno v6 Review: Changes, Pricing Tiers & Migration Analysis | Trust Node Logic`

#### `<h1>` Heading
- **Before**: `Suno v6: The Migration Nobody Could Opt Out Of`
- **After**: `Suno v6 Review: Changes, Pricing Tiers, and Forced Migration`

#### Breadcrumb & Byline
- **Breadcrumb current item**:
  - Before: `Suno v6 Migration Breakdown`
  - After: `Suno v6 Review and Migration Analysis`
- **Byline title constraint fix**:
  - Before: `Pioneer of Hybrid AI Music Production`
  - After: `Author of HPS-1.0`

#### Schema.org JSON-LD
- **WebPage `name`**:
  - Before: `Suno v6 Review: Edit Mode, Tiers & Migration · Trust Node Logic`
  - After: `Suno v6 Review: Changes, Pricing Tiers & Migration Analysis | Trust Node Logic`
- **ListItem 3 `name`**:
  - Before: `Suno v6 Migration Breakdown`
  - After: `Suno v6 Review and Migration Analysis`
- **TechArticle `headline`**:
  - Before: `Suno v6 Review: Edit Mode, Tier Breakdown, and the Forced Migration`
  - After: `Suno v6 Review: Changes, Pricing Tiers, and Forced Migration`
- **Person `jobTitle`**:
  - Replaced `Pioneer of Hybrid AI Music Production` with `Author of HPS-1.0`.

#### Lead Paragraph
- **Before**: `Most platform updates give you a choice. This one did not. On September 9, Suno retired every model it has ever shipped (v5.5, v4.5, v3, all of it) and moved the entire product onto a new three-model family trained on licensed catalog from Warner Music Group, BMG, and Believe. Researched at Trust Node Logic, here is what actually changed under the hood, what each tier gets you, and what the early reception is telling producers who got migrated whether they asked for it or not.`
- **After**: `In this Suno v6 review and migration analysis, we examine the platform's forced model transition, compare Free, Pro, and Premier pricing tiers, and evaluate early producer reception. On September 9, Suno retired every prior model without a rollback path, replacing them with a licensed catalog architecture from Warner Music Group, BMG, and Believe. Researched at Trust Node Logic, here is an objective assessment of what changed under the hood, what each subscription tier includes, and whether the new edit-first workflow delivers for working musicians.`

---

### 3. `Suno101.html`
- **Filename**: `Suno101.html` (preserved without change).
- **Contextual Link Added**: Added natural link to `suno6.html` (`Suno v6 prompting guide`) inside Section 07.

---

### 4. `sunonewtos.html`
- **Contextual Link Added**: Added natural link to `sunov6.html` (`Suno v6 review and migration analysis`) following the subscription tier breakdown.

---

## 6. Link Graph Status

After applying all links, `scripts/resolve_internal_links.py` reported:
* `suno6.html`: **5 incoming links** (`Suno101.html`, `field-notes.html`, `hybridproductionstandard.html`, `sunonewtos.html`, `sunov6.html`)
* `sunov6.html`: **3 incoming links** (`field-notes.html`, `suno6.html`, `sunonewtos.html`)
* `Suno101.html`: **5 incoming links** (`field-notes.html`, `promptingthemachine.html`, `suno6.html`, `sunonewtos.html`, `sunov6.html`)
* `sunonewtos.html`: **8 incoming links** (`Suno101.html`, `field-notes.html`, `index.html`, `may2026tools.html`, `suno6.html`, `sunov6.html`, `trainingday.html`, `whyhpsdoc.html`)

Zero broken links detected across the entire repository.

---

## 7. Standards Compliance & Invariant Verification

- **Zero Em Dashes**: Verified programmatically across all modified files and commits (`git diff`). Zero em dash characters present in visible text, titles, descriptions, or JSON-LD.
- **Visual Design & CSS Tokens**: All callout styles use existing custom properties (`var(--bg-panel)`, `var(--bg-raised)`, `var(--border)`, `var(--amber)`, `var(--mono)`, `var(--text-dim)`). Zero external design modifications.
- **Audio Engine JS**: Zero modifications to MIXR, VOID, HPS engine, or J-DAW code.
- **Canonicals & Sitemap**: Zero canonical tags modified. Zero sitemap entries altered. Zero URLs or slugs changed.
- **JSON-LD Schema**: Verified 100% validity across all 41 JSON-LD blocks in 69 HTML files with zero syntax errors. All node `@id`s preserved.
