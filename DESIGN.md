---
name: mrvivot Portfolio
description: A restrained, single-accent portfolio that reads like a designer's working notebook — process and reasoning first, decoration never.
colors:
  background: "#FAF9F6"
  background-dark: "#111110"
  surface: "#F0EEE9"
  surface-dark: "#1C1C1A"
  text-primary: "#1A1A1A"
  text-primary-dark: "#F5F4F0"
  text-secondary: "#6B6B6B"
  text-secondary-dark: "#888884"
  accent: "#2DCC8F"
  accent-dark: "#1F9D6F"
  accent-text: "#1B7955"
  accent-text-dark: "#2DCC8F"
  accent-text-large: "#21976A"
  accent-text-large-dark: "#2DCC8F"
  accent-fill: "#1B7955"
  accent-fill-hover: "#145C40"
  accent-chip: "#186D4C"
  accent-chip-dark: "#2DCC8F"
  border: "#E2DED8"
  border-dark: "#2A2A28"
  error: "#E53E3E"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(32px, 5vw, 56px)"
    fontWeight: 700
    lineHeight: 1.15
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  caption:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
  tag:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
rounded:
  pill: "999px"
  lg: "16px"
  md: "12px"
  sm: "8px"
  xs: "4px"
spacing:
  section-y: "96px"
  section-y-mobile: "64px"
  container-x: "48px"
  container-x-mobile: "24px"
components:
  button-primary:
    backgroundColor: "{colors.accent-fill}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.accent-fill-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.accent-fill}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  card-project:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "20px"
  chip-category:
    backgroundColor: "rgba(45,204,143,0.15)"
    textColor: "{colors.accent-chip}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Design System: mrvivot Portfolio

## Overview

**Creative North Star: "The Designer's Notebook" ("El Cuaderno del Diseñador")**

The site reads like a working notebook, not a showreel: one disciplined accent color, one typeface, flat surfaces, and generous air between ideas. Every visual choice defers to the content it's carrying — a case-study metric, a phase description, a piece of reasoning — rather than competing with it. This is deliberate: the audience is hiring managers judging design judgment, and a portfolio that visually overperforms its own restraint would undercut the argument it's trying to make.

Density is low and rhythm is slow. Sections breathe at 96px of vertical space on desktop (64px on mobile), so each idea — a hero claim, a result, a piece of process — gets its own uninterrupted beat before the next one starts. Nothing competes with the mint accent for attention: it is reserved for what's interactive or worth noticing (CTAs, active nav state, links, the oversized result metrics), and everywhere else the palette stays neutral paper-and-ink.

**Key Characteristics:**
- One accent, used sparingly and consistently, never a second hue
- Flat by default; hover states shift color and scale, never elevation
- Pill-shaped buttons and chips everywhere; soft (12–16px) radii on content containers
- Slow vertical rhythm (96px/64px) that treats whitespace as a structural tool, not a gap
- Bilingual (ES/EN) and dual-theme (light/dark) by construction — no visual decision is made for one language or one theme alone. Theme follows the visitor's system `prefers-color-scheme` on first visit; a manual toggle overrides it and persists in localStorage from then on.

## Colors

A warm off-white-and-ink neutral base carries almost the entire interface; a single mint green is the system's only signal color.

### Primary
- **Confident Mint** (`#2DCC8F`): the system's only accent hue, identical in light and dark mode. This exact value is reserved for **non-text fills**: icons, borders (CTA outlines, card-hover borders, focus rings), the mobile active-tab icon, and any other surface large enough or paired-enough with a dark ground that raw `#2DCC8F` isn't itself carrying the contrast requirement.
- **Confident Mint, text-safe** (`accent-text`, `#1B7955` light / `#2DCC8F` dark): the accent wherever it colors *text* against the page or surface background — links, eyebrows, active nav state, text-mode CTAs. `#2DCC8F` measures only 1.97:1 against the page background (fails WCAG AA's 4.5:1 for text); `#1B7955` clears 4.5:1 with margin. In dark mode this flattens back to full-strength `#2DCC8F`, which already clears 9:1 there — the dimming is a light-mode-only correction, not a permanent identity.
- **Confident Mint, large-text-safe** (`accent-text-large`, `#21976A` light / `#2DCC8F` dark): a second, lighter text-safe stop reserved exclusively for the case-study **Metric Display**, whose type is large/bold enough (≥32px/700) to qualify for WCAG's relaxed 3:1 large-text threshold instead of 4.5:1. `#21976A` clears 3:1 with a real margin (3.50:1, +17%) while sitting far closer to the original `#2DCC8F` than `accent-text` would — the metric is the system's most expressive moment and keeps the most saturated mint the contrast math allows.
- **Confident Mint, fill-safe** (`accent-fill` / `accent-fill-hover`, `#1B7955` / `#145C40`, same in both themes): the accent as a **solid button background carrying white text**. This is bg-independent — white-on-`#2DCC8F` fails at 2.07:1 regardless of page theme, since the relevant contrast pair is the button fill and its own label, not the page background. Unlike `accent-text`, these two do **not** flatten in dark mode.

### Neutral
- **Warm Paper** (`#FAF9F6` light / `#111110` dark): the page background.
- **Soft Linen** (`#F0EEE9` light / `#1C1C1A` dark): the surface color for cards, image containers, and the "problem statement" callout block — one step off the page background, never a hard white/black panel.
- **Ink** (`#1A1A1A` light / `#F5F4F0` dark): primary text and every heading/label, regardless of size.
- **Warm Gray** (`#6B6B6B` light / `#888884` dark): secondary text only — descriptions, metadata, dates, supporting copy that accompanies an already-visible primary element.
- **Hairline** (`#E2DED8` light / `#2A2A28` dark): borders, dividers, the nav's bottom hairline.

### Named Rules
**The One Voice Rule.** The accent is the only hue used to mean "interactive" or "notice this." It never appears as decoration, and no second accent hue is introduced, even for a single component. Having four lightness stops of the same hue (`accent`, `accent-text`, `accent-text-large`, `accent-fill`) doesn't violate this — it's still one voice, just calibrated so it stays legible everywhere it speaks.

**The Text-Safe Mint Rule.** Never color text directly with `accent` (`#2DCC8F`) — it fails WCAG AA against every background in the light theme. Text and text-bearing fills route through `accent-text` (small/body text, 4.5:1), `accent-text-large` (the Metric Display only, 3:1), or `accent-fill`/`accent-fill-hover` (button backgrounds under white text, theme-invariant). Reserve bare `accent` for borders, icons, and non-text fills only.

**The Ink-for-Headers Rule.** Any title, section label, or element functioning as a heading — including small uppercase eyebrows — uses `text-primary` (Ink), never `text-secondary`, regardless of size or visual weight. `text-secondary` (Warm Gray) is reserved exclusively for genuine secondary content: descriptions, dates, metadata that accompanies an already-visible primary element.

**The Flat Accent Rule.** In dark mode, `accent-dark`, `accent-text`, `accent-text-large`, and `accent-chip` all collapse to the same value as `accent` (`#2DCC8F`) — there is no darker or dimmer variant on dark backgrounds, because dark mode already clears every contrast requirement at full strength. Don't invent a dark-mode-specific dimming; the flatness there is intentional. `accent-fill`/`accent-fill-hover` are the one exception — they stay constant across both themes because their constraint (white text on top) doesn't depend on page background.

**Why the chip needs its own stop.** The category chip's own translucent mint backdrop (`rgba(45,204,143,0.15)`) composites lighter than either the page or surface background, which eats into whatever text color sits on top of it. `accent-text` alone measured 4.57:1 there against the page background but only ~4.2:1 against the surface background (BlogCard) — under AA. `accent-chip` (`#186D4C`, L26% in the same hue family) was calibrated specifically against the *worse* of the two composited chip backgrounds, clearing 4.94:1 there and 5.36:1 against the page-bg variant, with the chip's visual tint left untouched at 15% opacity.

## Typography

**Display / Body / Label Font:** Plus Jakarta Sans (weights 400, 500, 600, 700), with a generic sans-serif fallback. No second typeface anywhere in the system, including code blocks (which use a system monospace stack only for literal `<code>` content).

**Character:** One typeface carrying every role keeps the notebook feeling authored by one hand — weight and size do the work of hierarchy, not a second voice.

### Hierarchy

Seven roles, each backed by ≥3 real recurring uses. This is deliberately more than the five originally documented here — auditing the implementation found the same five names covering 15+ arbitrary pixel values (11–22px, plus seven different `clamp()` ranges) because two genuinely distinct jobs (a section-opening eyebrow vs. a tiny chip/metadata label; long-form prose vs. compact UI copy) were both being forced into one role each. Splitting them into named roles fixed the drift without adding real complexity — each new role is still just "the size for X job," consistently applied.

- **Display** (700, `clamp(32px, 5vw, 56px)`, line-height 1.15): hero headline, case-study title. The largest text in the system; used exactly once per page.
- **Headline** (700, `clamp(28px, 4vw, 44px)`, line-height 1.2): section-level statements and hub-page titles — Contact's "Let's work together," the `/work` and `/blog` index h1s, blog post h1, and the case-study "next project" link title (promoted from a fixed 28px to this full responsive role).
- **Title** (600, 20px, line-height 1.3): card titles, phase titles, sub-headings inside long-form content, the NDA password-gate heading.
- **Body** (400, 17px, line-height 1.8): long-form paragraph copy — case-study context, mdx-prose, phase descriptions, bullet list items, subtitles, the metric's supporting label. Long-form MDX content caps implicitly around 680px measure via container width, not an explicit `ch` value.
- **Caption** (400, 14px, line-height 1.5): compact UI copy — card descriptions, nav/footer links, CTA links ("Ver proyecto →"), pill-button labels, overview metadata values, the coming-soon badge's text.
- **Label** (600–700, 13px, letter-spacing 0.1em, uppercase): section eyebrows ("Sobre mí," "Proceso y decisiones," every case-study section header), form error text. This role's elements are headers, not captions — see the Eyebrow-Is-a-Header Rule below.
- **Tag** (600, 11px, letter-spacing 0.08em): the system's smallest supporting text — category eyebrows on cards, overview metadata labels, phase numbers, hero pills, blog category chips, mobile-nav labels, blog post/card date-and-reading-time metadata.

**Scoped exceptions (intentionally outside the seven roles):**
- **Hero lead** (400, 22px, fixed): "Hola, soy Manuel Rojo Vivot." — a single, deliberately expressive lead sentence above the Display headline. One instance; not a precedent for other intro text.
- **Problem Statement** (600, `clamp(22px, 3vw, 32px)`, line-height 1.4): the case-study "problem" callout, the system's one pull-quote-like moment outside Display/Headline. One instance per case study.
- **Metric Display** (700, `clamp(72px, 10vw, 120px)` or `clamp(32px, 4vw, 48px)` depending on metric length): see the signature component below — has its own dedicated scale, deliberately larger than Display.
- **Wordmark** ("mrvivot" logo, 600, 18px): identical size on both desktop (`text-lg` Tailwind class) and mobile top bar (inline style) — two mechanisms, one deliberate value.
- **Form input text** (16px): the password field is set 1px above Caption specifically to sit at or above the 16px floor that prevents iOS Safari's auto-zoom-on-focus; this is a technical floor, not a role.
- **Prose headings** (`.mdx-prose h2` 22px / `h3` 18px / `code` 14px, in `globals.css`): a small sub-scale for headings and inline code *within* long-form MDX content, one step down from the page-level Display/Headline/Title scale so embedded article structure doesn't compete with page chrome.

### Named Rules
**The Eyebrow-Is-a-Header Rule.** A Label-role element is a header, not a caption, even at 13px. It follows the Ink-for-Headers color rule above without exception.

**The Caption/Tag Split Rule.** Caption (14px) is for compact *sentence-case* UI copy that still reads like prose — descriptions, links, button labels. Tag (11px) is for the smallest *supporting* text that accompanies something else already visible — a card's category, a data value's own label, a date stamp. If it could stand alone as a sentence, it's Caption; if it's decoration/metadata riding along another element, it's Tag.

## Layout

Content is left-aligned and constrained by generous horizontal padding (`px-6` / 24px mobile, `px-12` / 48px desktop) rather than a hard max-width grid for most sections; the case-study template additionally caps its main column at 1400px with a responsive `clamp(24px, 5vw, 48px)` side gutter.

Vertical rhythm is the primary structural device: major sections and case-study blocks (Overview, Result, Context, Problem, Process phases, Next project) are separated by 96px on desktop, collapsing to 64px on mobile — consistently, not per-component judgment calls. The project grid on `/work` and the homepage's featured-work grid use a 3-column layout on large desktop (`lg:grid-cols-3`) collapsing to a single column below that; there is no intermediate 2-column tablet state for project cards.

Navigation occupies fixed chrome on both breakpoints: a sticky, blurred top bar on desktop (`h-16`, translucent `background-nav`, hairline border only after scroll); on mobile, a fixed top bar (logo + language/theme toggles) plus a separate fixed bottom tab bar (Inicio, Work, Blog/About, Contacto) with icon-over-label items — the page body reserves `pt-14`/`pb-16` on mobile specifically to clear both bars.

## Elevation & Depth

Flat by design, confirmed as an invariant: the system does not use elevation to communicate state or hierarchy. The only shadow in the system is a near-imperceptible ambient shadow under project cards at rest (`0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)` in light mode; `0 1px 3px rgba(0,0,0,0.02)` in dark mode, deliberately fainter since dark surfaces don't need shadow to read as raised). Every interactive state change — card hover, nav active state, button press — is communicated through color (border, text, background) and scale, never through added or deepened shadow.

### Shadow Vocabulary
- **Card ambient** (`box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)` light / `0 1px 3px rgba(0,0,0,0.02)` dark): the resting state of project cards only. Not used on buttons, chips, inputs, or the surface/callout blocks.

### Named Rules
**The Border-Over-Shadow Rule.** Hover/focus states never grow a shadow. A card's hover state is a border-color shift (transparent → accent) plus a subtle image scale (`1.03×`); a nav link's active state is a color change. If a new component needs a "raised" or "focused" feeling, reach for border-color or the accent first, shadow last and only as the existing ambient card shadow, unmodified.

## Shapes

Two radius families cover the entire system: **pill** (`999px`) for anything clickable-and-small (buttons, chips, category tags), and **soft rectangle** (`8–16px`) for anything that contains content (cards, images, inputs, callout blocks). There is no sharp-corner (`0px`) surface anywhere, and no radius larger than 16px. The about-page photo uses the same 16px soft-rectangle radius on a 1:1 frame — deliberately not a circular avatar, keeping the "notebook" register instead of a social-profile one.

**`rounded.xs` (`4px`)** is a scoped exception reserved for inline `<code>` in `.mdx-prose` content only — at that small a glyph size, the system's normal 8px minimum reads as disproportionately round. Not a precedent for any other small element; those still use `sm` (8px).

**The favicon (`app/icon.png`, circular, transparent corners) is a scoped exception to the no-circular-avatar rule below.** It's platform chrome, not page content — the browser tab, OS dock, and (if ever wired up) home-screen icon each apply their own circular/rounded mask by convention, independent of this site's own visual language. The "notebook, not social-profile" register the no-circular-avatar rule protects applies to imagery *inside* the page (the About photo, project covers); it was never meant to fight the platform's own icon conventions. Not a precedent for any avatar or photo treatment within the site itself.

Borders are hairline (1–1.5px) and low-contrast at rest (`var(--border)`), reserved for definition rather than emphasis; the one place a border carries emphasis is the accent-colored `1.5px` border on secondary/ghost buttons and the "Hablemos" nav CTA.

## Components

### Buttons
- **Shape:** pill (`border-radius: 999px`) universally; no square or soft-rectangle buttons exist.
- **Primary:** `accent-fill` background (`#1B7955`, same in both themes), white text, 600 weight, `12px 28px` padding. Hover darkens to `accent-fill-hover` (`#145C40`). Not `accent` (`#2DCC8F`) — white text on raw accent fails contrast at 2.07:1; see the Text-Safe Mint Rule.
- **Secondary / Ghost:** transparent background, `1.5px` **`accent`** border (non-text, stays full-strength), `accent-text` label color. Hover fills to `accent-fill` background with white text — the border "commits" on hover rather than just changing shade.
- **Text link CTA** (e.g. "Ver proyecto →"): no button chrome at all — text-primary color at rest, `accent-text` on hover/active, underline on hover, and the trailing arrow glyph nudges `translate-x` on hover. Used for lower-emphasis navigational actions (view all, next project) where a pill would overstate the action.

### Chips
- **Style:** background `rgba(45,204,143,0.15)` (accent at 15% opacity), `accent-chip` label (a dedicated stop, darker than `accent-text` — the chip's own tinted backdrop needs the extra margin; see Colors), `8px` (`rounded.sm`) corners, `2px 8px` padding. Used exclusively for blog category tags — the system's only translucent-accent surface.

### Cards / Containers
- **Corner Style:** `16px` (project cards, cover images, callout/problem blocks) or `12px` (blog cards, process-phase images) — never sharp.
- **Background:** Soft Linen surface color, one step off the page background.
- **Shadow Strategy:** ambient-only at rest; see Elevation & Depth. No shadow growth on hover.
- **Border:** transparent at rest, `accent` at hover (project cards) or hairline border → `accent` at hover (blog cards) — non-text, stays full-strength; the border, not a shadow, is what signals interactivity.
- **Internal Padding:** `20px` for project-card content; `48px` for the problem-statement callout block (its size communicates its weight as the case study's central claim).

### Inputs / Fields
- **Style:** `1px` hairline border, `8px` corners, `12px 16px` padding, transparent/page background.
- **Focus:** border shifts to `accent` (non-text, full-strength).
- **Error:** border and helper text shift to `#E53E3E` (the system's only non-accent, non-neutral color; scoped strictly to this validation state).

### Navigation
- **Desktop:** sticky top bar, translucent blurred background, hairline bottom border appears only after scroll (not at rest). Active route uses `accent-text`; inactive routes use secondary text that brightens to primary on hover — accent is reserved for "you are here," not general hover feedback.
- **Mobile:** split into a fixed top bar (logo + language/theme toggles) and a fixed bottom tab bar (icon-over-label, four destinations). Active tab uses `accent-text` for both icon and label; this is the one place in the system where accent marks a persistent state rather than a momentary interaction.

### Metric Display (signature component)
The oversized result number on each case-study page (`clamp(72px, 10vw, 120px)`, 700 weight, `accent-text-large` color) paired with a smaller supporting label and an optional bullet list. This is the system's most expressive moment — the one place type is allowed to be dramatically larger than the Display role — and it exists specifically to make a case study's outcome impossible to skim past. It uses `accent-text-large` rather than `accent-text`: its type is large/bold enough to qualify for WCAG's relaxed 3:1 threshold, so it gets to keep more of the original mint's saturation than smaller accent text can. Layout adapts to metric length: a short metric (≤5 characters, e.g. "0%" or "40%") sits side-by-side with its bullet list in a `1fr 1.5fr` grid; a longer metric (a phrase like "En producción") stacks full-width above its label and bullets instead — both size variants stay well above 32px/700, so both use the large-text-safe stop.

## Do's and Don'ts

### Do:
- **Do** use the accent hue as the only color signaling "interactive" or "important" — CTAs, active nav, links, result metrics, category eyebrows — but through the correct stop: `accent-text` for small/body text, `accent-text-large` for the Metric Display only, `accent-fill`/`accent-fill-hover` for button backgrounds, and bare `accent` for borders/icons/non-text fills.
- **Do** keep every title, label, and eyebrow in `text-primary`, even when small or uppercase; `text-secondary` is for genuine secondary content only.
- **Do** hold vertical rhythm at 96px (desktop) / 64px (mobile) between major sections and case-study blocks.
- **Do** use pill shape (`999px`) for every button and chip, and 12–16px soft-rectangle radii for every content container.
- **Do** signal hover/active state with border-color, text-color, or scale — never with added or deepened shadow.
- **Do** reserve fixed two-line height for card descriptions so grid cards stay aligned regardless of copy length.
- **Do** design every new surface bilingually (ES/EN) and theme-aware (light/dark) from the start, not as a retrofit.

### Don't:
- **Don't** introduce a second accent hue, even for a single one-off component. (Four lightness stops of the same hue is fine; a second hue is not.)
- **Don't** color text directly with bare `accent` (`#2DCC8F`) — it fails WCAG AA against every light-mode background and as a white-text button fill in both themes. Always route through `accent-text`, `accent-text-large`, or `accent-fill`.
- **Don't** add a drop shadow beyond the existing faint ambient card shadow; no shadow-based hover elevation anywhere in the system.
- **Don't** hardcode colors in components outside the CSS-variable token system, except the scoped, intentional `#E53E3E` error state.
- **Don't** use a circular avatar or profile-style imagery *within the page*; photo frames follow the same 16px soft-rectangle language as everything else. (The favicon is exempt — see the Shapes section; it's platform chrome, not page content.)
- **Don't** write Tailwind v4-only syntax or config; the project is pinned to Tailwind v3.
