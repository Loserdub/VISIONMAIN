# TrustNodeLogic HPS Scanner — Repair & Streamline Spec

**Target:** trustnodelogic.web.app (HPS-1.0 DAW Attestation Engine)
**For:** Antigravity IDE agent implementing fixes in the local repo
**Goal:** Fix the watermark embedding crash, remove the duplicate attestation mechanism, and reorganize the app into four plain-language stages a first-time visitor can follow without knowing what DSSS, Ed25519, or DDEX mean.

---

## 1. Bug: "Sign & Embed WAV" throws a type error

**Symptom (reproduced by user):**
Clicking **SIGN & EMBED WAV** on a manually-classified axis (seen on the Production/Mastering axis, "Self-attested via Audio-Only Upload") throws:

```
Error embedding WAV chunk: expected Uint8Array of length 32, got type=string
```

**Root cause hypothesis:**
Somewhere in the WAV-embedding path, a 32-byte value (almost certainly the Ed25519 public key, a signature component, or a manifest hash) is being passed as a hex or base64 *string* into a function that writes raw bytes into the RIFF `hps1` chunk, instead of being decoded into a `Uint8Array` first.

**Fix instructions:**
1. Search the codebase for the exact string `"expected Uint8Array of length"` (or the RIFF chunk writer / `embedWavChunk` / `signAndEmbed` function) to find the throw site.
2. Trace back to find which caller is passing a string. Common culprits: a key stored/retrieved from local storage or IndexedDB as a hex string and never converted back to bytes; or a signing function that returns `signature.toString('hex')` instead of the raw byte array.
3. Add the missing conversion (hex-to-bytes or base64-to-bytes, matching however keys/signatures are serialized elsewhere in the app) at the call site, not by loosening the type check in the chunk writer — the 32-byte check is correct and should stay as a guard.
4. Add a small unit test or manual test step: scan a file, manually classify one axis, click Sign & Embed WAV, confirm no error and confirm the exported WAV actually contains a valid `hps1` chunk that round-trips through the Raw Inspector / verification path.
5. Audit the other two embed/export actions (**Export .hps.json Sidecar**, **Export DDEX XML**) for the same string-vs-bytes mistake, since they likely share the same signing utility.

---

## 2. UX bug: two competing attestation mechanisms

**Symptom:** The app currently has two separate ways to "attest" that appear to run in parallel and confuse the user about which one is the real, binding action:

- Per-axis **self-reporting badges/buttons** (e.g. the "⚡ Self-attested via Audio-Only Upload" tag on individual production axes like Mastering)
- A single global **"Legal Attestation Required"** checkbox + statement ("I attest under penalty of fraud (EU AI Act Art. 50) that this manual classification accurately represents the generative AI used... this action is cryptographically binding")

Having both makes it unclear to the user which one actually produces the binding, signed record, and which one is just a status label.

**Fix instructions:**
1. Decide (and implement) **one** binding attestation action: the global checkbox + Sign & Embed step. That is the only action that should be described as "cryptographically binding" and the only one that triggers the Ed25519 signature.
2. Convert the per-axis "self-attested" badges from interactive buttons into **read-only status chips** — they should reflect what the user selected/classified for that axis (Manual / Human / AI-assisted, upload type, etc.), not offer a second, independent way to submit or attest.
3. Remove any code path where a per-axis badge can submit, sign, or export on its own, separate from the single unified attestation flow.
4. The unified attestation screen (Stage 4 below) should show a summary list of what's being attested per axis, sourced from those same read-only chips, so the user sees exactly what they're about to sign in one place before confirming.

---

## 3. Restructure the app into four plain-language stages

Currently the app is five numbered, jargon-named tabs: *Tracks & Channels, Plugin Inventory, Audio Samples, HPS Attestation & EU AI Act, Raw Inspector.* Replace this with a linear four-stage flow. Each stage gets a one-line plain-English explainer at the top of its screen — no acronyms in the primary copy.

### Stage 1 — Scan
*"Drop your project file and we'll read what's inside it."*
- Existing DAW parsing: tracks/channels, plugin inventory, audio samples (Ableton .als, Logic .logicx, FL Studio .flp).
- Keep this fully automatic and client-side, as now.
- Collapse the current three separate tabs (Tracks & Channels / Plugin Inventory / Audio Samples) into one "Scan Results" view with three simple sub-sections, rather than three top-level tabs — reduces perceived step count.

### Stage 2 — Tag
*"Add basic info about this track."*
- New lightweight metadata form: Title, Artist, Release/Album, Date. Plain text fields, no scanning or crypto involved.
- Make clear in copy that this is superficial/descriptive metadata, distinct from the HPS provenance data — e.g. a short note like "This is just labeling, not part of your AI-usage attestation."

### Stage 3 — Report
*"Here's what we found, in plain terms."*
- Human-readable summary combining Stage 1's scan results with the current per-axis classification UI (Manual/Human/AI-assisted, etc.).
- Each axis (e.g. Production/Mastering) should have a one-sentence explanation of what that axis measures, in plain language, next to the technical label.
- This is where the read-only status chips from Section 2 above live.

### Stage 4 — Attest
*"Sign and export your certification."*
- The single unified attestation: the Legal Attestation Required checkbox/statement, then Sign & Embed WAV, Export .hps.json Sidecar, Export DDEX XML.
- Show the per-axis summary (read-only) so the user can review exactly what they're signing before confirming.
- Keep the EU AI Act Art. 50 language accurate and intact — do not simplify away the legal wording, only clarify the surrounding UI.

### Advanced / optional
- **Raw Inspector** should move out of the main numbered flow entirely — e.g. a collapsed "Advanced" or "Developer view" link/accordion, so newcomers aren't presented with it as a required step.

---

## 4. Copy guidelines (apply throughout)

- Primary UI text: no unexplained jargon (Ed25519, DSSS, RIFF chunk, hps1, DDEX ERN) — either plain-language it or move it to a tooltip/"Learn more" expandable.
- Each of the four stage headers gets exactly one short explainer sentence, styled consistently (same place, same weight) so the pattern is predictable as the user moves through the flow.
- Keep a persistent, simple progress indicator across the four stages (Scan → Tag → Report → Attest) so users always know where they are and what's left.

---

## 5. Out of scope / do not change

- Core parsing logic for .als/.logicx/.flp — not implicated in either bug.
- The legal wording of the EU AI Act Art. 50 attestation statement itself.
- The 100%-client-side, no-server architecture.

---

## 6. Acceptance checklist

- [ ] Dropping a project file, manually classifying an axis, and clicking Sign & Embed WAV completes with no error, and the resulting WAV verifies correctly.
- [ ] There is exactly one attestation action in the app; per-axis badges are read-only status, not separate submit actions.
- [ ] The app presents four stages (Scan, Tag, Report, Attest) instead of five jargon-labeled tabs, with Raw Inspector moved to an Advanced/optional area.
- [ ] Each stage has a one-sentence plain-language explainer visible to a first-time user.
- [ ] Export .hps.json Sidecar and Export DDEX XML still work and were checked for the same string/bytes bug as the WAV embed.
