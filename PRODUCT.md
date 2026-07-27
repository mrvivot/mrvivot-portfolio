# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: recruiters and hiring managers evaluating Manuel Rojo Vivot (mrvivot) for full-time Product/UX Designer roles. They land on the site to judge design judgment and process quality, not just visual output — reading case studies to see how he researches, decides, and validates.

## Product Purpose

A personal portfolio site that builds professional credibility for Manuel as a Product/UX Designer. Success is not a conversion event (no contact-form CTA to optimize) — it's leaving a hiring manager with a clear, favorable read on his design thinking and craft.

## Positioning

Combines product design with an analytical mindset shaped by a philosophy background: research, validate, and build, with every design decision held to criteria, not just aesthetics. This is reinforced by a dual practice — he also teaches UX/UI and digital product management, which keeps the reasoning behind decisions explicit and explainable rather than purely intuitive. Case studies foreground this: benchmarking, heuristic evaluation (Nielsen), and closing the loop with real user testing, not just final-screen galleries.

## Operating Context

- Bilingual ES/EN throughout, user-toggled and persisted in localStorage (default ES) — every surface must work fully in both languages, not as an afterthought.
- Light/dark theme: follows the visitor's system `prefers-color-scheme` on first visit; a manual toggle overrides it and persists that choice in localStorage from then on.
- Case studies are authored in MDX (`content/projects/`) and rendered through a shared dynamic template.
- A blog (`content/blog/`) carries shorter first-person reflections alongside the case-study work.
- Desktop uses a sticky top nav; mobile collapses to a fixed bottom navigation bar (Inicio, Work, About, Contacto).

## Capabilities and Constraints

- Six case studies live under `content/projects/`: Carbon Los Leños, Portfolio IA, GSK (client: GSK), V-Go Alta, V-Go Admin, Informental.
- **GSK is confidential**: that case study is password-gated (`password: true` in frontmatter, protected route at `/work/gsk`) under an NDA-style agreement with the client. Never expose, summarize externally, or work around that gate.
- V-Go Alta and V-Go Admin are in active production use — their case studies describe real deployed outcomes, not concepts.
- Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS v3 (v4 is explicitly unsupported — causes class failures), Framer Motion, MDX. Deployed on Vercel at mrvivot.com.
- Microsoft Clarity analytics is installed in production (ID: xfnpppw2mh).

## Brand Commitments

- Typography: Plus Jakarta Sans exclusively, no alternates.
- Single accent color across the entire site: `#2DCC8F`. No secondary accent colors.
- Colors are defined as CSS variables (`globals.css`), never hardcoded in components.
- Light mode (default): bg `#FAF9F6`, text `#1A1A1A`. Dark mode: bg `#111110`, text `#F5F4F0`. Same accent in both.

## Evidence on Hand

- Real, shipped client work described first-person with concrete context, trade-offs, and testing outcomes (e.g., V-Go Admin: diagnosed via Nielsen heuristics + competitive benchmarking, redesigned, tested with real venue employees, shipped to production).
- No testimonials, client quotes, press mentions, or pricing/licensing claims exist yet — future work must not fabricate these.
- GSK case study content exists but is intentionally withheld behind a password; it is evidence of client trust, not content to surface openly.

## Product Principles

1. **Credibility over conversion.** The site has no lead-gen CTA to optimize; every element should build a hiring manager's trust in his judgment, not chase a click.
2. **Reasoning made visible.** Case studies show the research, heuristics, and validation loop behind a decision, not just the final screens — this is the core differentiator, not a nice-to-have.
3. **Confidentiality is non-negotiable.** Client work under NDA (GSK) stays gated; never trade a design or completeness goal against exposing restricted content.
4. **Bilingual by default.** ES/EN parity is a base requirement for any new surface or copy, not a follow-up task.
5. **Restraint as identity.** One accent color, one typeface, disciplined contrast rules — the portfolio's own design discipline is itself evidence of the designer's judgment.
