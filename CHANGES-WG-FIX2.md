# Workgroup Fix 2 (WG-FIX2) Audit & Changelog: Correcting WG3, WG4, and WG8 Deviations

**Date:** 2026-10-23  
**Branch:** `wg-fix2`  
**Execution:** Precision Correction & Verification  
**Compliance Invariants Enforced:**
- Strict prohibition of em dash characters across visible copy, titles, meta descriptions, and structured data.
- Preservation of canonical URLs, layout templates, CSS variables, and design tokens.
- Strict adherence to the Latent Anchor Algorithm (LAA-v3) entity salience and normal author callout model.
- Bit-perfect JSON-LD validation across all modified documents.
- 100% internal link resolution verified via `scripts/resolve_internal_links.py`.
- Read-only preservation of `hps-engine.html`.

---

## 1. Summary of Files Changed

| File | Status | Description |
|---|---|---|
| `what-is-hybrid.html` | Modified | Restored pre-WG8 opening definition, removed "absolute creative authorship" site-wide and replaced with HPS declared/scored contributions, updated title separator to middle dot (59 chars), and added document changelog |
| `suno6.html` | Modified | Shortened title to 52 chars (`Suno V6 Guide: Prompting Tutorial · Trust Node Logic`), restored dated release hook (September 9, 2026) followed by prompt-focused sentence, updated `dateModified` to `2026-10-23`, and added document changelog |
| `sunov6.html` | Modified | Shortened title to 53 chars (`Suno v6 Review & Migration Analysis · Trust Node Logic`) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `songstructure.html` | Modified | Updated meta description and schemas to accurately match 90 bars at 120 BPM in 4/4 (146 chars), and updated title separator to middle dot (56 chars) |
| `index.html` | Modified | Restored HPS card to a fully clickable `<a>` element pointing to `hybridproductionstandard.html`, removed all nested `<a>` elements within the card, and placed the HPS Attestation Engine launch strip in a separate container outside the card |
| `field-notes.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 59 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `mixrstudio.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 59 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD; shortened header nav label from `HPS Attestation Engine ↗` to `HPS Engine ↗` to restore original header height on mobile viewports |
| `projects.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 59 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `saturation.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 59 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `staccatoreview.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 59 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `sunonewtos.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 56 chars) across `<title>`, OpenGraph, Twitter, and JSON-LD |
| `void.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`, 58 chars) across `<title>`, OpenGraph, and Twitter |
| `void/index.html` | Modified | Standardized title separator to middle dot (` · Trust Node Logic`) across `<title>`, OpenGraph, and Twitter |
| `agentichybridproduction.html` | Modified | Standardized JSON-LD WebPage name to middle dot (` · Trust Node Logic`) |
| `404.html` | Modified | Standardized JSON-LD WebPage name to middle dot (` · Trust Node Logic`) |
| `sitemap.xml` | Modified | Updated `<lastmod>` for `suno6.html` to `2026-10-23` |
| `hps-engine.html` | Unchanged (Read-Only) | Preserved without edits; technical claims cataloged for user verification |

---

## 2. Before & After Diffs by Task

### Task 1: Title Separator Convention & Shortening suno6.html / sunov6.html Titles
AGENTS.md and the web standards guidelines specify ` · Trust Node Logic` (middle dot `\u00b7`) as the canonical title separator. All remaining instances of `| Trust Node Logic` were updated. `suno6.html` and `sunov6.html` titles were shortened to 60 characters or fewer while retaining high-intent search terms (`suno v6 guide` / `prompting`, `suno v6 review`).

#### A. `suno6.html`
- **Title (Before):** `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic` (78 chars)
- **Title (After):** `Suno V6 Guide: Prompting Tutorial · Trust Node Logic` (52 chars)
- **OpenGraph Title (Before):** `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`
- **OpenGraph Title (After):** `Suno V6 Guide: Prompting Tutorial · Trust Node Logic`
- **Twitter Title (Before):** `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`
- **Twitter Title (After):** `Suno V6 Guide: Prompting Tutorial · Trust Node Logic`
- **JSON-LD WebPage Name (Before):** `Suno V6 Prompting Guide: How to Prompt, Edit, and Produce | Trust Node Logic`
- **JSON-LD WebPage Name (After):** `Suno V6 Guide: Prompting Tutorial · Trust Node Logic`

#### B. `sunov6.html`
- **Title (Before):** `Suno v6 Review & Migration: Stems, Personas, and Models | Trust Node Logic` (75 chars)
- **Title (After):** `Suno v6 Review & Migration Analysis · Trust Node Logic` (53 chars display / 58 chars raw)
- **OpenGraph Title (Before):** `Suno v6 Review & Migration: Stems, Personas, and Models | Trust Node Logic`
- **OpenGraph Title (After):** `Suno v6 Review & Migration Analysis · Trust Node Logic`
- **Twitter Title (Before):** `Suno v6 Review & Migration: Stems, Personas, and Models | Trust Node Logic`
- **Twitter Title (After):** `Suno v6 Review & Migration Analysis · Trust Node Logic`
- **JSON-LD WebPage Name (Before):** `Suno v6 Review & Migration: Stems, Personas, and Models | Trust Node Logic`
- **JSON-LD WebPage Name (After):** `Suno v6 Review & Migration Analysis · Trust Node Logic`

#### C. `field-notes.html`
- **Title (Before):** `25 AI Music Research Papers & Field Notes | Trust Node Logic` (59 chars)
- **Title (After):** `25 AI Music Research Papers & Field Notes · Trust Node Logic` (59 chars)

#### D. `mixrstudio.html`
- **Title (Before):** `MIXR Studio: Free Web Audio Segment Mixer | Trust Node Logic` (59 chars)
- **Title (After):** `MIXR Studio: Free Web Audio Segment Mixer · Trust Node Logic` (59 chars)

#### E. `projects.html`
- **Title (Before):** `10 Free Browser Audio Tools & DSP Engines | Trust Node Logic` (59 chars)
- **Title (After):** `10 Free Browser Audio Tools & DSP Engines · Trust Node Logic` (59 chars)

#### F. `saturation.html`
- **Title (Before):** `Music Saturation: Streaming Supply Crisis | Trust Node Logic` (59 chars)
- **Title (After):** `Music Saturation: Streaming Supply Crisis · Trust Node Logic` (59 chars)

#### G. `staccatoreview.html`
- **Title (Before):** `Staccato AI Review: Pro MIDI Co-Writer | Trust Node Logic` (56 chars)
- **Title (After):** `Staccato AI Review: Pro MIDI Co-Writer · Trust Node Logic` (56 chars)

#### H. `sunonewtos.html`
- **Title (Before):** `Suno New Terms of Service: BMG Update | Trust Node Logic` (56 chars)
- **Title (After):** `Suno New Terms of Service: BMG Update · Trust Node Logic` (56 chars)

#### I. `void.html`
- **Title (Before):** `VOID Web Sampler: 16-Pad Browser Slicer | Trust Node Logic` (58 chars)
- **Title (After):** `VOID Web Sampler: 16-Pad Browser Slicer · Trust Node Logic` (58 chars)

#### J. `what-is-hybrid.html`
- **Title (Before):** `What is Hybrid Music Production? Tools & Workflows · Trust Node Logic` (69 chars)
- **Title (After):** `What is Hybrid Music? Meaning and Method · Trust Node Logic` (59 chars)

#### K. `songstructure.html`
- **Title (Before):** `How Many Bars is a 3-Minute Pop Song? | Trust Node Logic` (56 chars)
- **Title (After):** `How Many Bars is a 3-Minute Pop Song? · Trust Node Logic` (56 chars)

---

### Task 2: suno6.html Lede Dated Hook Restoration
Restored a one-sentence dated hook at the start of the lede stating that Suno released v6 on September 9, 2026, while preserving the prompting-focused sentence directly after it.

- **Lede Paragraph (Before):**
```html
<p class="lede">Prompting and producing in Suno V6 centers on prompt syntax precision, targeted inpainting, and clean DAW stem integration rather than endless full-track regeneration. This comprehensive seven-stage guide walks through model selection, acoustic meta-tags, lyric timing, and hybrid post-production to help you build release-ready audio.</p>
```
- **Lede Paragraph (After):**
```html
<p class="lede">Suno released v6 on September 9, 2026, introducing a new model architecture built alongside licensed catalog partners. Prompting and producing in Suno V6 centers on prompt syntax precision, targeted inpainting, and clean DAW stem integration rather than endless full-track regeneration. This comprehensive seven-stage guide walks through model selection, acoustic meta-tags, lyric timing, and hybrid post-production to help you build release-ready audio.</p>
```
- **Date Modified:** Updated to `2026-10-23` in `TechArticle` schema, `article:modified_time`, and `sitemap.xml`.
- **Changelog Entry:** Added visible document changelog panel at bottom of article.

---

### Task 3: songstructure.html Bar-Count Claim Report & Meta Description Fix

#### A. Investigation of Bar-Count Claim in Page Body
- **Body Inspection:** An exhaustive text search across `songstructure.html` revealed that the page body contains **zero claims** stating that a 3-minute song is "96 to 120 bars".
- **What the Body Actually Discusses:**
  - Standard structural units: 2-bar pre-chorus transitions, 4-bar and 8-bar chord loops, 8-bar verses, 8-bar choruses.
  - Historical context: 32-bar Tin Pan Alley AABA forms.
  - Streaming algorithm optimizations: intro compression (dropping from 8 bars to 2-4 bars or straight to chorus), looping 4-bar chord cycles, and maintaining sub-3:00 runtimes.
- **Mathematical Calculation:**
  - Tempo: 120 Beats Per Minute (BPM).
  - Time Signature: 4/4 (4 beats per bar).
  - Beat Duration: 60 seconds / 120 beats = 0.5 seconds per beat.
  - Bar Duration: 4 beats * 0.5 seconds = 2.0 seconds per bar.
  - Runtime: 3 minutes = 180 seconds.
  - Bar Count: 180 seconds / 2.0 seconds per bar = **exactly 90 bars**.
- **Body Accuracy Determination:** The page body is musically and structurally accurate; it does not claim 96 to 120 bars. The erroneous figure was introduced solely into the meta description during WG3 without body backing. Therefore, per instructions, no edits were made to the page body.

#### B. Meta Description & Schema Update
Updated `<meta name="description">`, `og:description`, `twitter:description`, `WebPage.description`, and `TechArticle.description` to accurately reflect the 90-bar mathematical reality and the algorithmic restructuring covered in the text:

- **Meta Description (Before):**
`Discover how many bars are in a 3-minute pop song (typically 96 to 120 bars). Learn why streaming algorithms shortened intros and how to structure modern music.` (163 chars)
- **Meta Description (After):**
`At 120 BPM in 4/4 a 3-minute song is 90 bars. Learn how streaming algorithms restructured modern pop songs, cutting intros and looping 4-bar hooks.` (146 chars)

---

### Task 4: saturation.html Sources and Dates Verification

The prompt instructed: *"list the source and date the page gives for '106,000 daily uploads' and '73% of streams'. If none is given, replace both figures in the meta description with a non-numeric statement and report it."*

#### A. Source and Date Verification in `saturation.html`

1. **"106,000 daily uploads"**:
   - **Source:** Luminate Year-End Music Report (2025 edition) / UMG Year-End circulation memo.
   - **Date Given in Text:** December 2025 / Year-End 2025 analysis.
   - **Page Evidence:**
     - Line 595: *"According to Luminate's 2025 Year-End report and UMG circulation data, daily track uploads to DSPs averaged approximately 106,000 tracks per day"*
     - Line 608: *"106,000 daily uploads (up 7% from 99,000 in 2024)"*
     - Line 743 (Footnotes/Citations): *"Luminate Year-End Music Report (2025 Data Release); Universal Music Group investor relations whitepaper on streaming supply and catalogue concentration."*

2. **"73% of streams"**:
   - **Source:** Billboard / Luminate 2024 Year-End Music Report (published January 2025).
   - **Date Given in Text:** Published January 2025 (covering full-year 2024 consumption) and referenced in 2025/2026 data.
   - **Page Evidence:**
     - Line 616: *"Billboard and Luminate's market reports revealed that catalogue music accounted for 72.7% of total U.S. album consumption in 2023, rising to 73.3% in 2024 and maintaining approximately 73% through 2025."*
     - Line 617: *"Only 26.7% of on-demand audio streams came from tracks released within the past five years, leaving roughly 73% of listening volume firmly locked in catalogue."*
     - Line 674: Table row comparing Current vs Catalogue: *"Catalogue Share: 73.3% (Luminate 2024/2025)"*
     - Line 857: Reference 2: *"Billboard / Luminate, '2024 Year-End Music Report: Catalogue Share Dominance and Streaming Consolidation,' published January 2025."*

#### B. Recommendation & Action Taken
Because both figures are explicitly cited with source and publication date in the body of `saturation.html`, the meta description is verified and grounded. The numeric figures are retained in the meta description, and the title separator was updated to ` · Trust Node Logic`.

---

### Task 5: what-is-hybrid.html Definition Restoration & Phrase Removal

#### A. Restoring Pre-WG8 Opening Definition
Restored the original pre-WG8 definition, ensuring strict zero em-dash compliance by using standard commas:

- **Opening Paragraph (Before / WG8):**
```html
<p class="lede">Hybrid music production is the discipline of treating generative AI models, DAW multi-tracking, hardware synthesizers, and acoustic instruments as equal stages in a single unified signal chain. It rejects the false choice between total automation and manual purism, anchoring every machine output to human creative intent, physical studio technique, and verifiable production provenance.</p>
```
- **Opening Paragraph (After / Restored):**
```html
<p class="lede">Hybrid music production is the practice of combining AI generative audio models with traditional studio workflows, DAW multi-tracking, live instruments, and analog summing to create release-ready music. Rather than treating AI as a finished output, the hybrid workflow treats neural audio as raw acoustic material, subject to the same editing, arrangement, and mixing standards as recorded instruments.</p>
```

#### B. Site-Wide Removal of "absolute creative authorship"
A site-wide regex search was performed for `"absolute creative authorship"`. Exactly one occurrence existed, located in `what-is-hybrid.html` (line 343). It was replaced with language reflecting HPS classification principles where contributions are declared and scored:

- **Text (Before):**
```html
<p>Unlike raw prompt-and-export workflows that leave intellectual property ownership in legal limbo, hybrid music production maintains absolute creative authorship through verifiable stems, custom arrangement decisions, and original composition elements.</p>
```
- **Text (After):**
```html
<p>Unlike raw prompt-and-export workflows that leave intellectual property ownership in legal limbo, hybrid music production aligns with HPS-1.0 classification standards where human, hybrid, and AI contributions are declared and scored across five verifiable production axes through stems, custom arrangement decisions, and original composition elements.</p>
```

---

### Task 6: hps-engine.html Read-Only Technical Claims Audit

Per instructions, `hps-engine.html` was checked in read-only mode and **not edited**. Below is the comprehensive catalog of all technical claims, cryptographic signatures, chunk names, privacy statements, file formats, and scoring axes present on the page for verification against the engine codebase:

#### 1. Cryptographic Signatures, Hashes & Standards
- **SHA-256 Essence Hash:** Bit-perfect SHA-256 hash computed across raw, uncompressed PCM audio sample data (supporting 24-bit integer and 32-bit float PCM). Re-encoding or ID3 container wrapping does not alter the essence hash as long as sample data remains bit-identical.
- **Ed25519 Digital Signatures:** Web Cryptography API (`window.crypto.subtle`) keypair generation and signing performed 100% in-browser. Private key remains in browser volatile memory (`IndexedDB` or session memory); public key and digital signature are serialized into manifests.
- **C2PA JUMBF Manifest Containers:** C2PA v2.1 compliant assertions embedded as JPEG Universal Metadata Box Format (JUMBF) metadata containers into output masters.
- **DDEX ERN 4.3 XML:** Export of standard digital music supply-chain metadata containing explicit AI contribution declarations (`<PartyRole>`, `<ResourceContributor>`, `<UserDefinedValue>`).

#### 2. Chunk Names, Metadata Files & Manifests
- `hps1`: Custom RIFF/WAV metadata chunk ID inserted into the WAV container header to hold essence hash and manifest references without altering audio PCM samples.
- `hps_manifest.json`: Standalone cryptographic JSON-LD sidecar file containing session UUID, file hashes, axis scores, contributor signatures, and timestamped DAW audit events.
- `hps_report.pdf`: Single-page visual distributor attestation certificate summarizing provenance, tier badge, axis radar scores, and verification QR code.
- `c2pa.assertions`: Cryptographic assertion tree mapping origination, performance, curation, sound source, and post-production steps to C2PA claim generators.

#### 3. Privacy, Architecture & Security Statements
- **100% Client-Side Browser Execution:** All file parsing, XML tree traversal, binary unpacking, and SHA-256 essence hashing occur locally via Web Workers and Web Cryptography.
- **Zero Cloud Uploads:** No audio files, project archives, stems, MIDI data, or session metadata are ever transmitted to Trust Node Logic servers, external clouds, or third-party APIs.
- **Zero External Telemetry:** Engine works offline once browser cache is primed via Service Worker.
- **Deterministic Hashing:** Project parsing produces identical essence hashes across Windows, macOS, and Linux runtimes.

#### 4. Supported DAW Formats (8 Formats)
1. **Ableton Live (`.als`):** Gzip-compressed XML DOM. Scans track types, Max for Live devices, audio clip file paths, freeze states, and plugin UUIDs.
2. **Logic Pro (`.logicx`):** macOS package bundle / ZIP archive. Inspects `Alternatives/000/ProjectData` plist and audio asset manifests.
3. **FL Studio (`.flp`):** Proprietary binary chunk stream. Decodes event ID chunks, channel rack generators, fruity wrapper plugins, and Edison audio paths.
4. **Pro Tools (`.ptx`):** Compound document binary format. Parses track descriptors, clip lists, and plugin slot instantiations.
5. **Cubase / Nuendo (`.cpr`):** RIFF-like binary container. Scans mixer channels, audio tracks, and VST3 component descriptors.
6. **Studio One (`.song`):** ZIP container holding XML document tree (`project.xml`). Audits audio event layers and track device chains.
7. **REAPER (`.rpp`):** Plaintext ASCII/UTF-8 token stream. Parses `<TRACK`, `<ITEM`, `<SOURCE`, and `<FXCHAIN` blocks.
8. **DAWproject (`.dawproject`):** Open XML/ZIP interchange format (Bitwig/PreSonus). Scans standardized tracks, clips, and device nodes.

#### 5. Scoring Axes & Tier Classification
- **5 Scoring Axes:**
  1. *Axis 1: Origination* (Melody, harmony, lyric conception)
  2. *Axis 2: Performance* (Live acoustic, MIDI capture, expressive timing)
  3. *Axis 3: Curation* (Arrangement, stem editing, selection density)
  4. *Axis 4: Sound Source* (Acoustic instruments, hardware synths, neural audio models)
  5. *Axis 5: Post-Production* (Analog/DSP mixing, dynamic mastering, summing)
- **6 Standardized Tiers:**
  - `Tier H`: Pure Human (100% manual capture, zero AI generative models)
  - `Tier X1`: Human Primary (Subtle neural enhancement or AI stem splitting)
  - `Tier X2`: Balanced Hybrid (Human composition with AI sound design / neural synthesis)
  - `Tier X3`: Machine Primary (AI generation heavily curated, mixed, and arranged by human)
  - `Tier X4`: Machine Dominated (Prompt-engineered audio with basic top-lining or EQ)
  - `Tier A`: Autonomous AI (100% neural generation, zero human performance or processing)
- **Immutable Reason Logging:** Any manual user override of an automated DAW score requires an explicit text justification logged to `hps_manifest.json`.

#### 6. Explicit Limitations & Boundaries
- Engine does **not** perform black-box neural audio waveform classification or acoustic watermark guessing.
- Provenance is verified strictly through project structure forensic analysis and deterministic cryptographic evidence.

---

### Task 7: index.html HPS Card Clickability & Nested Link Remediation

#### A. Issue & Remediation Architecture
In previous workgroups, the HPS card container was converted from `<a>` to `<div>` to avoid invalid HTML when nested links (`inspect protocol`, `hps-engine.html`) were introduced.
In WG-FIX2, the card was restored as a fully clickable root `<a>` element linking to `hybridproductionstandard.html`:
1. The container element is `<a href="./hybridproductionstandard.html" class="portal-card-hps ...">` and closes with `</a>`.
2. All nested `<a>` elements within the card were removed:
   - The top header bar inspect link was converted to `<span class="text-xs font-mono text-[#FF9F1C]/80 group-hover:text-[#FF9F1C] ...">`.
   - The title and subtitle links were converted to clean `<div>` block containers.
   - The prompt text link was converted to a simple text flex row with a hover transition arrow.
3. The secondary link to `hps-engine.html` was extracted and placed in an independent contextual launch strip directly beneath the HPS card, completely outside the clickable card boundaries:
```html
<!-- HPS Attestation Engine Contextual Launch Strip -->
<div class="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 text-xs font-mono text-[#71717A]">
  <div class="flex items-center gap-2">
    <span class="text-[10px] text-[#FF9F1C] font-bold">CLIENT-SIDE VERIFICATION //</span>
    <span>DAW project file scanning without audio uploads</span>
  </div>
  <a href="/hps-engine.html" class="text-[#FF9F1C] hover:underline font-semibold inline-flex items-center gap-1.5 transition-colors">
    <span>HPS Attestation Engine Guide &amp; Tool</span>
    <span>↗</span>
  </a>
</div>
```
4. **Visual & Validation Integrity:** The visual design, typography, glowing borders, animated waveform canvas, and hover effects remain 100% identical. The DOM structure is fully valid HTML5 with zero nested anchor tags.

---

### Task 8: Mobile Nav Audit (375px Viewport Width)

An audit of navigation bars was conducted across all pages at 375px viewport width (standard iPhone SE / small mobile screen):

1. **Main Site Navigation (`index.html`, `field-notes.html`, `what-is-hybrid.html`, `hybridproductionstandard.html`, etc.):**
   - Uses Tailwind responsive layout with desktop links (`hidden md:flex`) and a mobile hamburger button (`md:hidden`).
   - The mobile menu opens into a full-width vertical drawer (`w-full max-w-xs flex flex-col items-center gap-4`).
   - **Result:** No labels wrap or overflow horizontally at 375px width.

2. **`mixrstudio.html` Header Nav Bar & Remediation:**
   - **Prior Deviation:** In WG6, the nav link was changed from `app ↗` to `HPS Attestation Engine ↗` (24 characters), which caused the nav items (`home`, `field notes`, `projects`, `about`, `HPS Attestation Engine ↗`, `? guide`) to break across 3 wrapped lines on 375px mobile screens, expanding header height to 126px.
   - **Remediation:** Shortened the link label to `HPS Engine ↗` (preserving `href="https://trustnodelogic.web.app"`, `target="_blank"`, and `rel="noopener"`).
   - **Height Benchmark vs origin/main:** Verified in headless Chrome across 375px, 768px, and 1280px viewports:

| Viewport Width | `origin/main` Header Height | Current (`HPS Engine ↗`) Header Height | Status |
|---|---|---|---|
| 375px (Mobile) | 94px (2 lines) | 94px (2 lines) | Verified: No taller than origin/main |
| 768px (Tablet) | 62px (1 line) | 62px (1 line) | Verified: Identical to origin/main |
| 1280px (Desktop) | 62px (1 line) | 62px (1 line) | Verified: Identical to origin/main |

3. **`projects.html` Filter Bar & Navigation:**
   - Filter chips use `flex-wrap: wrap` and naturally wrap into two lines cleanly without horizontal clipping or scrollbar breakage at 375px.

---

## 3. Verification & Compliance Checklist

- [x] Title separator convention: ` · Trust Node Logic` applied across all pages (excluding read-only `hps-engine.html`).
- [x] `suno6.html` and `sunov6.html` titles shortened to <= 60 characters with lead search words.
- [x] `suno6.html` dated release hook restored (September 9, 2026) followed by prompt-focused sentence.
- [x] `songstructure.html` bar-count claim analyzed and meta description corrected to 90 bars (146 characters).
- [x] `saturation.html` citations and sources verified and reported.
- [x] `what-is-hybrid.html` pre-WG8 definition restored; "absolute creative authorship" removed site-wide.
- [x] `hps-engine.html` audited in read-only mode with exhaustive technical claims cataloged.
- [x] `index.html` HPS card restored to a single clickable `<a>` with engine link cleanly separated outside.
- [x] Mobile nav audit completed at 375px width.
- [x] Zero em dashes in git diff.
- [x] Internal link resolution script passed with zero broken links.
