# Phase 0 Audit Inventory: Baseline Styles and Layout Architecture

- Project: Trust Node Logic (VISIONMAIN)
- Branch: `feature/instrument-polish` (off `main`)
- Scope: Initial audit and baseline documentation across 6 core pages:
  - `index.html`
  - `about.html`
  - `projects.html`
  - `services.html`
  - `what-is-hybrid.html`
  - `contact.html`
- Asset Baselines: 12 full-page screenshots saved to `/audit/before/` (at 1440px and 390px viewports).
- Modifying Action: None. Codebase source files remain 100% untouched in Phase 0.

---

## 1. Visual Baseline Archive

All full-page reference screenshots have been captured at viewport widths 1440px (desktop) and 390px (mobile) and stored in `/audit/before/`:

| Page | 1440px Desktop Screenshot | 390px Mobile Screenshot | File Status |
| :--- | :--- | :--- | :--- |
| `index.html` | `/audit/before/index-1440.png` | `/audit/before/index-390.png` | Captured (1.55 MB / 1.24 MB) |
| `about.html` | `/audit/before/about-1440.png` | `/audit/before/about-390.png` | Captured (944 KB / 758 KB) |
| `projects.html` | `/audit/before/projects-1440.png` | `/audit/before/projects-390.png` | Captured (264 KB / 272 KB) |
| `services.html` | `/audit/before/services-1440.png` | `/audit/before/services-390.png` | Captured (266 KB / 246 KB) |
| `what-is-hybrid.html` | `/audit/before/what-is-hybrid-1440.png` | `/audit/before/what-is-hybrid-390.png` | Captured (1.41 MB / 1.28 MB) |
| `contact.html` | `/audit/before/contact-1440.png` | `/audit/before/contact-390.png` | Captured (361 KB / 234 KB) |

---

## 2. Distinct Font-Size Values and Locations

### A. Raw CSS Rules (Stylesheet and Embedded `<style>` Blocks)

| Font Size Value | Computed Equivalent | Location / Selector | Source File |
| :--- | :--- | :--- | :--- |
| `9px` | 9px (0.5625rem) | `.new-corner-ribbon span` | `projects.html` `<style>` (line 261) |
| `10px` | 10px (0.625rem) | `.tech-tag` | `input.css` (line 152) |
| `11.5px` | 11.5px (0.71875rem) | `.breadcrumb` | `about.html` (line 224), `projects.html` (line 240), `services.html` (line 351), `what-is-hybrid.html` (line 240), `contact.html` (line 242) |
| `12px` | 12px (0.75rem) | `.tech-bracket::before`, `.tech-bracket::after` | `input.css` (lines 181, 194) |
| `12px` | 12px (0.75rem) | `.breadcrumb span[aria-hidden]` | `about.html` (line 231), `projects.html` (line 247), `services.html` (line 358), `what-is-hybrid.html` (line 247) |
| `13px` | 13px (0.8125rem) | `.breadcrumb span[aria-hidden]` | `contact.html` (line 249) |
| `0.62rem` | ~9.92px | `.contact-label` | `contact.html` `<style>` (line 285) |
| `0.68rem` | ~10.88px | `.social-link` | `contact.html` `<style>` (line 329) |
| `0.75rem` | 12px | `.send-btn` | `contact.html` `<style>` (line 307) |
| `0.78rem` | ~12.48px | `.contact-input` | `contact.html` `<style>` (line 271) |

### B. Tailwind CSS Utility Classes (HTML Prose and Components)

| Class | Equivalent Value | Total Uses | Distribution Across Audited Pages |
| :--- | :--- | :--- | :--- |
| `text-[9px]` | 9px (0.5625rem) | 18 | `index.html` (9), `about.html` (9) |
| `text-[10px]` | 10px (0.625rem) | 109 | `index.html` (35), `about.html` (33), `projects.html` (20), `services.html` (7), `what-is-hybrid.html` (5), `contact.html` (9) |
| `text-[11px]` | 11px (0.6875rem) | 16 | `index.html` (8), `about.html` (2), `projects.html` (1), `services.html` (3), `what-is-hybrid.html` (1), `contact.html` (1) |
| `text-xs` | 12px (0.75rem) | 149 | `index.html` (21), `about.html` (50), `projects.html` (18), `services.html` (15), `what-is-hybrid.html` (36), `contact.html` (9) |
| `sm:text-sm` | 14px (0.875rem) | 4 | `index.html` (2), `about.html` (1), `what-is-hybrid.html` (1) |
| `text-sm` | 14px (0.875rem) | 23 | `index.html` (2), `about.html` (8), `services.html` (1), `what-is-hybrid.html` (11), `contact.html` (1) |
| `sm:text-base`| 16px (1.0rem) | 13 | `index.html` (2), `about.html` (1), `what-is-hybrid.html` (10) |
| `text-base` | 16px (1.0rem) | 5 | `index.html` (2), `about.html` (2), `what-is-hybrid.html` (1) |
| `sm:text-lg` | 18px (1.125rem) | 2 | `index.html` (1), `about.html` (1) |
| `text-lg` | 18px (1.125rem) | 19 | `index.html` (5), `about.html` (3), `projects.html` (10), `what-is-hybrid.html` (1) |
| `sm:text-xl` | 20px (1.25rem) | 12 | `index.html` (1), `projects.html` (10), `what-is-hybrid.html` (1) |
| `text-xl` | 20px (1.25rem) | 7 | `index.html` (2), `about.html` (2), `services.html` (3) |
| `sm:text-2xl` | 24px (1.5rem) | 3 | `index.html` (2), `about.html` (1) |
| `text-2xl` | 24px (1.5rem) | 13 | `index.html` (4), `about.html` (1), `what-is-hybrid.html` (8) |
| `sm:text-3xl` | 30px (1.875rem) | 12 | `index.html` (3), `about.html` (1), `what-is-hybrid.html` (8) |
| `text-3xl` | 30px (1.875rem) | 2 | `projects.html` (1), `what-is-hybrid.html` (1) |
| `sm:text-4xl` | 36px (2.25rem) | 1 | `index.html` (1) |
| `md:text-4xl` | 36px (2.25rem) | 1 | `index.html` (1) |
| `text-4xl` | 36px (2.25rem) | 4 | `index.html` (1), `about.html` (1), `services.html` (1), `contact.html` (1) |
| `sm:text-5xl` | 48px (3.0rem) | 2 | `projects.html` (1), `contact.html` (1) |
| `md:text-5xl` | 48px (3.0rem) | 1 | `what-is-hybrid.html` (1) |
| `sm:text-6xl` | 60px (3.75rem) | 3 | `index.html` (1), `about.html` (1), `services.html` (1) |
| `md:text-7xl` | 72px (4.5rem) | 1 | `index.html` (1) |
| `lg:text-8xl` | 96px (6.0rem) | 1 | `index.html` (1) |

### Key Typographic Observations
1. **Sub-12px Fragmentation**: There are 7 distinct sub-12px sizes in active use (`9px`, `0.62rem` (~9.92px), `10px`, `0.68rem` (~10.88px), `11px`, `11.5px`, `0.78rem` (~12.48px)).
2. **Breadcrumb Inconsistency**: `contact.html` sets `.breadcrumb span[aria-hidden]` to `13px`, whereas `about.html`, `projects.html`, `services.html`, and `what-is-hybrid.html` use `12px`. All five use `11.5px` for the `.breadcrumb` container.
3. **Display Titles**: Mobile titles range from `text-3xl` to `text-4xl`, scaling on desktop to `sm:text-6xl` (`about.html`, `services.html`), `md:text-7xl` and `lg:text-8xl` (`index.html`), and `sm:text-5xl` (`projects.html`, `contact.html`).

---

## 3. Distinct Spacing, Margin, and Padding Values

### A. Raw CSS Rules (Stylesheet and `<style>` Blocks)

| Property | Value | Pixel / Rem Equiv | Location / Selector | Source File |
| :--- | :--- | :--- | :--- | :--- |
| `padding` | `2px 8px` | 2px top/bottom, 8px left/right | `.tech-tag` | `input.css` |
| `scrollbar` | `5px 5px` | 5px width, 5px height | `::-webkit-scrollbar` | `input.css` |
| `padding` | `0 24px` | 0 top/bottom, 24px left/right | `.breadcrumb` | `about.html`, `projects.html`, `services.html`, `what-is-hybrid.html`, `contact.html` |
| `gap` | `8px` | 8px | `.breadcrumb` | `about.html`, `projects.html`, `services.html`, `what-is-hybrid.html` |
| `margin` | `16px auto 0`| 16px top, centered, 0 bottom | `.breadcrumb` | `projects.html` |
| `margin` | `14px auto 0`| 14px top, centered, 0 bottom | `.breadcrumb` | `contact.html` |
| `padding` | `3px 0` | 3px top/bottom, 0 left/right | `.new-corner-ribbon span` | `projects.html` |
| `margin-bottom` | `0.4rem` | 6.4px | `.contact-label` | `contact.html` |
| `gap` | `0.5rem` | 8px | `.send-btn` | `contact.html` |
| `padding` | `0.6rem 0.75rem` | 9.6px top/bottom, 12px left/right | `.social-link` | `contact.html` |
| `padding` | `0.85rem 1rem` | 13.6px top/bottom, 16px left/right | `.contact-input` | `contact.html` |
| `padding` | `1rem` | 16px | `.send-btn` | `contact.html` |
| `padding` | `1.5rem` | 24px | `.info-card` | `contact.html` |
| `margin-right`| `6px` | 6px | `.status-dot` | `contact.html` |

### B. Tailwind CSS Utility Spacing Scale (Actual Occurrences)

#### 1. Padding Values
- `p-1` (4px / 0.25rem): 12 uses (`index: 2`, `about: 2`, `projects: 2`, `services: 2`, `what-is-hybrid: 2`, `contact: 2`)
- `p-3` (12px / 0.75rem): 24 uses (`what-is-hybrid: 24`)
- `p-3.5` (14px / 0.875rem): 6 uses (`about: 6`)
- `p-4` (16px / 1.0rem): 22 uses (`index: 4`, `about: 5`, `what-is-hybrid: 13`)
- `p-5` (20px / 1.25rem): 10 uses (`what-is-hybrid: 10`)
- `p-6` (24px / 1.5rem): 31 uses (`index: 7`, `about: 14`, `projects: 9`, `what-is-hybrid: 1`)
- `p-8` (32px / 2.0rem): 10 uses (`index: 4`, `about: 1`, `services: 3`, `what-is-hybrid: 2`)
- `sm:p-6` (24px): 1 use (`about: 1`)
- `sm:p-7` (28px): 1 use (`about: 1`)
- `sm:p-8` (32px): 8 uses (`index: 2`, `about: 6`)
- `sm:p-10` (40px): 1 use (`about: 1`)
- `sm:p-12` (48px): 2 uses (`index: 2`)
- `md:p-12` (48px): 1 use (`what-is-hybrid: 1`)
- Horizontal padding (`px-*`):
  - `px-2` (8px): 8 uses (`index: 8`)
  - `px-2.5` (10px): 13 uses (`index: 13`)
  - `px-3` (12px): 11 uses (`index: 4`, `about: 7`)
  - `px-4` (16px): 6 uses (global containers)
  - `px-5` (20px): 1 use (`index: 1`)
  - `px-6` (24px): 37 uses (`index: 14`, `about: 7`, `projects: 4`, `services: 4`, `what-is-hybrid: 4`, `contact: 4`)
  - `px-8` (32px): 4 uses (navbars/headers)
- Vertical padding (`py-*`):
  - `py-0.5` (2px): 8 uses (`index: 8`)
  - `py-1` (4px): 60 uses (`index: 20`, `about: 8`, `projects: 8`, `services: 8`, `what-is-hybrid: 8`, `contact: 8`)
  - `py-1.5` (6px): 6 uses (`index: 6`)
  - `py-2` (8px): 48 uses (`index: 8`, `about: 8`, `projects: 8`, `services: 8`, `what-is-hybrid: 8`, `contact: 8`)
  - `py-2.5` (10px): 8 uses (`index: 1`, `about: 7`)
  - `py-3` (12px): 4 uses (`index: 1`, `services: 3`)
  - `py-3.5` (14px): 8 uses (`index: 1`, `about: 3`, `projects: 1`, `services: 1`, `what-is-hybrid: 1`, `contact: 1`)
  - `py-4` (16px): 1 use (`index: 1`)
  - `py-6` (24px): 6 uses (`index: 1`, `about: 1`, `projects: 1`, `services: 1`, `what-is-hybrid: 1`, `contact: 1`)
  - `py-8` (32px): 7 uses (`index: 1`, `about: 2`, `projects: 1`, `services: 1`, `what-is-hybrid: 1`, `contact: 1`)
  - `py-12` (48px): 4 uses (`about: 1`, `projects: 1`, `services: 1`, `contact: 1`)
  - `py-14` (56px): 1 use (`index: 1`)
  - `py-16` (64px): 3 uses (`index: 3`)
  - `py-20` (80px): 2 uses (page sections)
- Directional padding (`pt-*`, `pb-*`, `pl-*`):
  - `pt-2` (8px), `pt-3` (12px), `pt-4` (16px), `pt-5` (20px), `pt-6` (24px), `pt-8` (32px), `pt-10` (40px), `pt-12` (48px), `pt-28` (112px), `sm:pt-0` (0px)
  - `pb-2.5` (10px), `pb-3` (12px), `pb-4` (16px), `pb-6` (24px), `pb-10` (40px), `pb-16` (64px), `pb-20` (80px)
  - `pl-4` (16px), `pl-5` (20px), `sm:pl-6` (24px)

#### 2. Margin Values
- `mx-auto` (centered): 31 uses (`index: 11`, `about: 6`, `projects: 3`, `services: 5`, `what-is-hybrid: 3`, `contact: 3`)
- `mt-auto`: 6 uses (footer pins on all 6 pages)
- Margin Top (`mt-*`):
  - `mt-0.5` (2px): 5 uses (`contact: 5`)
  - `mt-1` (4px): 21 uses (`about: 15`, `what-is-hybrid: 5`, `contact: 1`)
  - `mt-1.5` (6px): 2 uses (`index: 2`)
  - `mt-2` (8px): 12 uses (`index: 1`, `about: 3`, `projects: 1`, `what-is-hybrid: 7`)
  - `mt-2.5` (10px): 9 uses (`projects: 9`)
  - `mt-3` (12px): 6 uses (`about: 2`, `services: 1`, `what-is-hybrid: 3`)
  - `mt-4` (16px): 12 uses (`index: 2`, `about: 3`, `services: 1`, `what-is-hybrid: 5`, `contact: 1`)
  - `mt-6` (24px): 5 uses (`index: 3`, `about: 1`, `services: 1`)
  - `mt-8` (32px): 12 uses (`index: 3`, `about: 1`, `projects: 1`, `services: 3`, `what-is-hybrid: 4`)
  - `mt-12` (48px): 3 uses (`index: 2`, `what-is-hybrid: 1`)
  - `mt-16` (64px): 2 uses (`projects: 1`, `contact: 1`)
- Margin Bottom (`mb-*`):
  - `mb-1` (4px): 24 uses (`index: 2`, `about: 12`, `what-is-hybrid: 7`, `contact: 3`)
  - `mb-2` (8px): 10 uses (`index: 3`, `about: 2`, `projects: 1`, `what-is-hybrid: 4`)
  - `mb-3` (12px): 32 uses (`index: 3`, `about: 10`, `projects: 9`, `services: 7`, `what-is-hybrid: 2`, `contact: 1`)
  - `mb-4` (16px): 18 uses (`index: 7`, `about: 2`, `services: 3`, `what-is-hybrid: 3`, `contact: 3`)
  - `mb-5` (20px): 3 uses (`index: 3`)
  - `mb-6` (24px): 12 uses (`index: 8`, `projects: 1`, `services: 3`)
  - `mb-8` (32px): 2 uses (`index: 2`)
  - `mb-10` (40px): 2 uses (`index: 1`, `projects: 1`)
  - `mb-12` (48px): 2 uses (`about: 1`, `services: 1`)
  - `mb-16` (64px): 1 use (`services: 1`)

#### 3. Flex and Grid Gap Values
- `gap-1` (4px): 6 uses (`index: 1`, `what-is-hybrid: 5`)
- `gap-1.5` (6px): 8 uses (`index: 6`, `about: 1`, `services: 1`)
- `gap-2` (8px): 63 uses (`index: 14`, `about: 8`, `projects: 2`, `services: 23`, `what-is-hybrid: 10`, `contact: 6`)
- `gap-2.5` (10px): 1 use (`index: 1`)
- `gap-3` (12px): 27 uses (`index: 8`, `about: 3`, `projects: 3`, `services: 3`, `what-is-hybrid: 8`, `contact: 2`)
- `gap-4` (16px): 20 uses (`index: 8`, `about: 3`, `projects: 1`, `services: 1`, `what-is-hybrid: 5`, `contact: 2`)
- `gap-5` (20px): 2 uses (`about: 2`)
- `gap-6` (24px): 23 uses (`index: 4`, `about: 5`, `projects: 5`, `services: 3`, `what-is-hybrid: 3`, `contact: 3`)
- `gap-8` (32px): 3 uses (`index: 1`, `about: 1`, `services: 1`)
- `gap-12` (48px): 1 use (`contact: 1`)

#### 4. Stack Space-Y Utilities
- `space-y-1` (4px): 1 use (`about: 1`)
- `space-y-2` (8px): 7 uses (`about: 1`, `projects: 1`, `services: 3`, `what-is-hybrid: 1`, `contact: 1`)
- `space-y-3.5` (14px): 1 use (`about: 1`)
- `space-y-4` (16px): 12 uses (`about: 4`, `what-is-hybrid: 7`, `contact: 1`)
- `space-y-5` (20px): 4 uses (`about: 2`, `contact: 2`)
- `space-y-6` (24px): 10 uses (`about: 2`, `what-is-hybrid: 8`)
- `space-y-8` (32px): 2 uses (`about: 1`, `contact: 1`)
- `space-y-12` (48px): 1 use (`what-is-hybrid: 1`)

---

## 4. Current Color Palette (Hex Values in CSS and Markup)

### A. Theme Variables (Defined in `input.css` `@theme` & `:root`)

| CSS Variable | Hex / RGBA Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--color-ink` / `--bg-main` | `#0B0C0E` | Main page background (deep near-black) |
| `--color-slate-dark` / `--bg-surface` | `#121417` | Card surface container background |
| `--color-slate-surface` / `--bg-elevated` | `#171A1F` | Elevated card hover / active state |
| `--color-slate-border` | `#23272F` | Structural borders & scrollbar thumb |
| `--color-terminal` / `--text-main` | `#EAEAEA` | Primary high-contrast typography |
| `--color-terminal-dim` | `#A1A1AA` | Secondary sub-tier typography |
| `--color-zinc-muted` / `--text-muted` | `#71717A` | Muted metadata and supporting labels |
| `--color-zinc-dim` | `#52525B` | Dim decorative lines and subtle text |
| `--color-amber-volt` / `--accent` | `#FF9F1C` | High-voltage primary accent / CTA / focus outline |
| `--color-amber-bright` | `#FFAE33` | CTA active / hover glow amber |
| `--color-amber-glow` / `--accent-glow` | `rgba(255, 159, 28, 0.25)` | Drop-shadow glow effects |
| `--color-amber-subtle` | `rgba(255, 159, 28, 0.08)` | Ambient card tints |
| `--color-grid-line` / `--grid-line` | `rgba(255, 255, 255, 0.09)`| Grid graphing lines & subtle borders |
| `--color-grid-bright` / `--grid-line-bright` | `rgba(255, 255, 255, 0.20)` | Highlighted card borders on hover |

### B. Hex Color Usage Across HTML Classes & Inline CSS

| Hex Color Code | Color Group | Total Uses in Classes | Total Uses in CSS / Style Tags | Where Used |
| :--- | :--- | :--- | :--- | :--- |
| `#FF9F1C` | Accent Amber | 358 | 24 | Primary buttons, active border rings, hover text, tags, corner brackets (`all pages`) |
| `#EAEAEA` | Primary White | 236 | 5 | Headings, hero display titles, terminal cards (`all pages`) |
| `#71717A` | Muted Zinc | 165 | 9 | Metadata tags, descriptions, dates, category indicators (`all pages`) |
| `#0B0C0E` | Canvas Ink | 70 | 8 | Main body background, nested card backgrounds (`all pages`) |
| `#A1A1AA` | Secondary Gray | 47 | 4 | Subtitles, body prose, secondary links (`all pages`) |
| `#00F0FF` | Electric Cyan | 26 | 3 | AI / HPS badge highlights, C2PA badges, GEO tags (`index`, `about`, `projects`) |
| `#10B981` | Emerald Green | 10 | 0 | Music release portal card, audio badges (`index`) |
| `#121417` | Slate Surface | 8 | 3 | Card container backgrounds (`index`, `what-is-hybrid`, `input.css`) |
| `#A855F7` | Methodology Purple | 4 | 0 | Systems / architecture portal card and badges (`index`) |
| `#F59E0B` | Warm Orange | 4 | 0 | Advisory portal card and badges (`index`) |
| `#38EF7D` | Mint Green | 3 | 0 | Verified artist tags and release badges (`about`) |
| `#4B4B52` | Dark Zinc | 2 | 0 | Secondary borders and quiet tags (`contact`) |
| `#FFB042` | Light Amber | 2 | 0 | Button hover states (`index`, `about`) |
| `#0052FF` | Digital Blue | 1 | 0 | External link hover state (`index`) |
| `#FF3B30` | Alert Red | 1 | 0 | Security / integrity tag (`index`) |
| `#FFAE33` | Bright Amber | 0 | 2 | Hover state for send button (`contact.html` `<style>`) |
| `#22C55E` | Status Green | 0 | 1 | Active availability pulsing indicator (`contact.html` `<style>`) |
| `#6B7280` | Gray | 0 | 2 | Form field border inactive (`contact.html` `<style>`) |
| `#6C8DFF` | Soft Blue | 0 | 1 | Social link icon accent (`contact.html` `<style>`) |
| `#9CA3AF` | Placeholder Gray | 0 | 1 | Form placeholder text (`contact.html` `<style>`) |
| `#1E2233` | Navy Slate | 0 | 1 | Contact info card border (`contact.html` `<style>`) |
| `#000000` / `#000` | Pure Black | 0 | 6 | Selection text, button labels, badge background (`index`, `projects`, `contact`) |
| `#FFFFFF` / `#FFF` | Pure White | 0 | 1 | Corner ribbon text (`projects.html` `<style>`) |

---

## 5. Media Queries and Responsive Breakpoints

### A. Tailwind CSS v4 Global Media Queries (Defined in `style.css`)

| Media Query | Pixel Value | Semantic Target | Usage |
| :--- | :--- | :--- | :--- |
| `@media (min-width: 40rem)` | `640px` | `sm:` | 2-column card layouts, expanded type sizes, grid expansions |
| `@media (min-width: 48rem)` | `768px` | `md:` | 3-column layouts, hero display typography, side-by-side flex groups |
| `@media (min-width: 64rem)` | `1024px` | `lg:` | 3-to-4 column grids, `lg:text-8xl` hero displays |
| `@media (min-width: 80rem)` | `1280px` | `xl:` | Maximum container restraints (`container` class) |
| `@media (min-width: 96rem)` | `1536px` | `2xl:` | Ultra-wide display bounding |
| `@media (hover: hover)` | - | Pointer device | Hover transitions, hover borders, hover card translations |

### B. Page-Specific Media Queries (Found in `<style>` Tags)

#### `index.html` (lines 434-440):
```css
@media (min-width: 768px) {
  .portal-span-2-md { grid-column: span 2 / span 2; }
}
@media (min-width: 1024px) {
  .portal-span-2-lg { grid-column: span 2 / span 2; }
  .portal-span-3-lg { grid-column: span 3 / span 3; }
}
```

#### Historical / Sub-page Queries Documented Across the Repository:
- `@media (max-width: 560px)`: used in `sunonewtos.html`
- `@media (max-width: 640px)`: used in `trainingday.html`
- `@media (max-width: 768px)`: used in `Suno101.html`
- `@media (max-width: 860px)`: used in `void.html`, `void15new.html`, `trainingday.html`, `Suno101.html`
- `@media (max-width: 1024px)`: used in `void.html`

---

## 6. Inline Styles vs. Stylesheet Rules Audit

### A. Full Inventory of Inline Styles Across Audited Pages

| Page | Line | Element | Inline Style Content | Reason / Assessment | Recommended Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `index.html` | 447 | `<div class="absolute inset-0">` | `style="background: radial-gradient(circle at 15% 15%, rgba(255, 159, 28, 0.04), transparent 40%), radial-gradient(circle at 85% 85%, rgba(255, 255, 255, 0.02), transparent 50%);"` | Ambient hero lighting matrix | Migrate to `.hero-ambient-glow` in `input.css` |
| `index.html` | 576 | `<span class="tech-tag">` | `style="color: #00F0FF; border-color: rgba(0, 240, 255, 0.4); background: rgba(0, 240, 255, 0.08);"` | Cyan variant of `.tech-tag` | Migrate to `.tech-tag-cyan` in `input.css` |
| `index.html` | 629 | `<span class="inline-flex...">` | `style="color: #00F0FF; background: rgba(0, 240, 255, 0.08); border: 1px solid rgba(0, 240, 255, 0.35);"` | Cyan badge styling override | Migrate to `.tech-tag-cyan` in `input.css` |
| `index.html` | 696 | `<a class="inline-flex..." href="/projects.html">` | `style="white-space: nowrap;"` | Prevent CTA text wrapping | Replace with Tailwind `whitespace-nowrap` |
| `about.html` | 579 | `<a class="p-4..." href="/what-is-hybrid.html">` | `style="grid-column: 1 / -1;"` | Full-width grid span override | Replace with Tailwind `col-span-full` |
| `contact.html` | 487 | `<textarea id="message" class="contact-input">` | `style="resize: vertical;"` | Vertical resize handle lock | Handled by Tailwind base reset, can use `resize-y` |
| `projects.html`| - | *None* | *0 inline styles* | Clean stylesheet / utility compliance | - |
| `services.html`| - | *None* | *0 inline styles* | Clean stylesheet / utility compliance | - |
| `what-is-hybrid.html` | - | *None* | *0 inline styles* | Clean stylesheet / utility compliance | - |

Total inline styles across the 6 audited pages: **6 instances**.

### B. Stylesheet Rules Architecture and Duplication

1. **Central Stylesheet (`input.css` & `style.css`)**:
   - Contains 241 source lines in `input.css`.
   - Global strict 0px border-radius rule: `*, *::before, *::after { border-radius: 0px !important; }`.
   - Reusable brutalist tokens: `.tech-card`, `.tech-border`, `.tech-tag`, `.tech-bracket`, `.graph-accent-line`, `.glow-amber-*`.
   - Dot-matrix backgrounds: `.dot-matrix-bg`, `.dot-matrix-fine`, `.dot-matrix-terminal`.

2. **Embedded `<style>` Blocks (Page-Level Duplication)**:
   - **Breadcrumb Navigation**: Identical or nearly identical `.breadcrumb` CSS blocks are embedded across 5 pages (`about.html`, `projects.html`, `services.html`, `what-is-hybrid.html`, `contact.html`).
     - In `about.html`, `projects.html`, `services.html`, `what-is-hybrid.html`:
       ```css
       .breadcrumb { font-size: 11.5px; padding: 0 24px; gap: 8px; ... }
       .breadcrumb a { color: #71717A; ... }
       .breadcrumb span[aria-hidden] { color: #FF9F1C; font-size: 12px; }
       ```
     - In `contact.html`:
       ```css
       .breadcrumb { font-size: 11.5px; padding: 0 24px; margin: 14px auto 0; ... }
       .breadcrumb span[aria-hidden] { color: #FF9F1C; font-size: 13px; }
       ```
     - Opportunity: Unify all breadcrumb styles into `input.css` as `.nav-breadcrumb`.
   - **Bespoke Portal Cards in `index.html`**:
     - 7 card themes (`.portal-card-music`, `.portal-card-hps`, `.portal-card-tools`, `.portal-card-methodology`, `.portal-card-dossier`, `.portal-card-services`, `.portal-card-contact`).
     - Equalizer bar micro-animations (`eqPulse1` to `eqPulse5`).
   - **Form & Contact Controls in `contact.html`**:
     - `.contact-input`, `.contact-label`, `.send-btn`, `.social-link`, `.info-card`, `.status-dot`.

---

## 7. Next Steps (Phase 1 Readiness)

Phase 0 is complete.
- Branch `feature/instrument-polish` is active.
- Baseline full-page screenshots are archived in `/audit/before/`.
- Every font-size, spacing increment, hex color, breakpoint, and inline style has been mapped and verified.
- Source files remain completely untouched.
