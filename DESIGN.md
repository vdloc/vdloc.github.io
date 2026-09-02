---
name: vdloc.github.io
description: A near-black cellular-automaton field computing itself behind portfolio content, with dark-translated read surfaces and one accent reserved for living cells.
colors:
  voidground-experience: "rgb(6 8 14)"
  voidground-shared: "rgb(10 12 20)"
  automaton-accent: "rgb(90 250 209)"
  text-heading-dark: "rgb(226 232 240)"
  text-body-dark: "rgb(203 213 225)"
  text-muted-dark: "rgb(148 163 184)"
  code-wash-dark: "rgb(14 165 233)"
  selection-lime: "rgb(217 249 157)"
typography:
  experience-display:
    fontFamily: "ui-monospace, 'JetBrains Mono', 'Space Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
  experience-body:
    fontFamily: "ui-monospace, 'JetBrains Mono', 'Space Mono', Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 400
  read-display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
  read-body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.125em"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "0.875em"
    fontWeight: 600
rounded:
  code: "0.25rem"
  pill: "9999px"
spacing:
  page-x: "1.5rem"
  page-x-sm: "2rem"
  chrome: "5rem"
  content-max: "48rem"
components:
  automaton-field:
    backgroundColor: "{colors.voidground-experience}"
  intro-mark:
    textColor: "{colors.text-heading-dark}"
    typography: "{typography.experience-display}"
  post-list-link:
    textColor: "{colors.text-heading-dark}"
    typography: "{typography.read-body}"
  code-inline-dark:
    backgroundColor: "{colors.code-wash-dark}"
    textColor: "rgb(255 255 255)"
    rounded: "{rounded.code}"
    padding: "0.125rem 0.25rem"
---

# Design System: vdloc.github.io

## Overview

**Creative North Star: "The Living Field"**

The site is a Game-of-Life-family cellular automaton, running now, in the browser, as a fixed full-bleed GPU shader behind content — not a looping video, not a static hero image with particles bolted on. Content sits inside a field that is always faintly alive: a still-life cluster seeded near center, a steady spontaneous-generation term so it never goes dark, cursor and scroll perturbing it locally. This is the single defining device of the redesign and the reason every other decision — palette, type, motion — exists in service of legibility over that field, not decoration alongside it.

The ground is a near-black voidground, never pure black: `rgb(6 8 14)` on the two Experience surfaces that carry the live shader (`/`, `/lab`), and a very slightly lighter `rgb(10 12 20)` as the shared dark-theme body token that every other surface inherits when translated to dark. One accent exists in the entire system — a bioluminescent teal-green — and it is carried exclusively by living cells inside the shader canvas. It does not appear as link color, button fill, focus ring, or any other UI element anywhere in the built CSS; text, links, and the toggle all render in a neutral cool-slate scale instead. This is a load-bearing restraint, not an oversight: the system's own material fix this round was removing accent leakage from UI chrome.

Two registers exist. **Experience surfaces** (`/`, `/lab`) run the live automaton and switch to a geometric-mono system-font stack — this is a disclosed, accepted exception to a no-system-font expectation; it ships no new font asset and is scoped only to `.intro-field` and `.lab-field`. **Read surfaces** (`/blog`, `/blog/[slug]`, `/projects`, `/contact`, `/404`) carry no WebGL and keep the site's pre-existing Space Grotesk body face; they're translated to the dark palette by a `forceDark` prop plus a `.theme-bubblegum.dark` custom-property rewrite, not by a new stylesheet. Every page in the site sets `forceDark` except one: `/resume` is a **standing, deliberate exclusion**, entirely outside this redesign — it doesn't import `PageLayout` at all, sets its own Raleway face and light, bordered layout, and should not be read as an oversight or as evidence the light theme still governs anywhere else.

**Key Characteristics:**
- One live computation, not a decoration: the automaton is the world, run as a GPU shader, never a static asset
- Near-black, never pure black, as the ground on every surface (`rgb(6 8 14)` Experience / `rgb(10 12 20)` shared dark)
- One accent, reserved absolutely for living cells; UI chrome is accent-free
- Two type registers by surface role: geometric-mono on Experience, Space Grotesk on Read — never mixed on one page
- Motion runs at a deliberate low tick-rate (24fps) so it reads as computation, not smoothness
- `/resume` is the one surface outside the system, kept in its pre-redesign light styling on purpose

## Colors

A near-black voidground carrying exactly one accent, and that accent is fenced to the shader canvas alone.

### Primary
- **Automaton Accent** (`rgb(90 250 209)`): the bioluminescent teal-green a living cell renders as, inside the shader's glow kernel only (`AutomatonField.astro`'s `uAccent` uniform). It is never assigned to a CSS custom property, text color, link color, or fill. There is no second use anywhere in the built styles.

### Neutral
- **Voidground (Experience)** (`rgb(6 8 14)`): the canvas clear color and the `body` background override on the two surfaces that carry `AutomatonField` (`/`, `/lab`), forced with `!important` because the shared body background would otherwise paint above the negative-z-index canvas.
- **Voidground (shared dark)** (`rgb(10 12 20)`): `--color-bg-body` under `.theme-bubblegum.dark`, the page background for every other forced-dark surface (`/blog`, `/blog/[slug]`, `/projects`, `/contact`, `/404`).
- **Heading/Bold Slate** (`rgb(226 232 240)`): headings, bold text, the `@vdloc` name mark, and — deliberately — the neutralized value that `--color-text-link` and the former highlighter accent tokens (`--color-primary-blue/green/yellow`) all collapse to under dark theme. Links read as heading-colored text, not as colored links.
- **Body Slate** (`rgb(203 213 225)`): dark-theme body prose and the Experience intro copy.
- **Muted Slate** (`rgb(148 163 184)`): timestamps, the scroll-cue chevron, captions — everything that orients without competing with the field or the accent.
- **Code Sky** (`rgb(14 165 233)` at 15% opacity): the dark-theme inline-code wash, inherited unchanged from the prior system.
- **Selection Lime** (`rgb(217 249 157)`): text selection, carried forward unchanged across both themes.

### Named Rules
**The Accent-in-the-Field-Only Rule.** The bioluminescent teal is the shader's alone. It renders live cells inside `AutomatonField.astro` and nowhere else — not as a link color, not as a button fill, not as a focus ring, not as a hover state. If a teal value shows up on a DOM element's `color` or `background-color`, the system has been broken. This was a material fix this round; verify it stays fixed on every new surface.
**The Never-Pure-Black Rule.** The voidground is always a near-black with a blue cast (`rgb(6 8 14)` or `rgb(10 12 20)`), never `#000`. Pure black flattens the shader's low-luminance glow kernel into banding.

## Typography

**Experience Display/Body Font:** `ui-monospace, 'JetBrains Mono', 'Space Mono', Menlo, Consolas, monospace` — a system-font stack, not a self-hosted face.
**Read Display/Body Font:** Space Grotesk (with `sans-serif`)
**Resume Font:** Raleway Variable — `/resume` sets its own face outside this system entirely.

**Character:** Two registers, cleanly split by surface role rather than blended. Experience surfaces speak in a geometric-mono stack — the accepted exception to a no-system-font floor, disclosed and scoped rather than silently allowed, because it reads as instrumentation/terminal output over a running computation. Read surfaces keep the incumbent Space Grotesk, unchanged in family, only recolored for the dark ground.

### Hierarchy
- **Experience Display** (700, `clamp(2.25rem, 6vw, 3.75rem)` observed as `text-4xl md:text-6xl`, tracking tight): the `@vdloc` name mark on `/`, centered over the field.
- **Experience Body** (400/600, ~1rem–1.125rem): the intro role line and two-paragraph bio on `/`, and the `/lab` list; capped `max-w-xl` and centered on the intro.
- **Read Display** (700, `clamp(2.25rem, 5vw, 3rem)`, 1.1): blog post titles and page `h1`s on Read surfaces, unchanged from the prior system except for color.
- **Read Body** (400, 1.125em, 1.85): all Read-surface prose, same measure and leading as before the redesign.
- **Label** (600, 0.875em): timestamps and inline code, shared across both registers.

### Named Rules
**The Surface-Scoped Face Rule.** The mono stack is scoped to `.intro-field` and `.lab-field` only — it never leaks onto Read-surface `body` or `h1`–`h6`, which stay on `theme('fontFamily.heading')` (Space Grotesk). A page does not mix both faces.
**The Diacritic Test.** Any type change on a Read surface must be checked against Vietnamese text with stacked diacritics (`ế`, `ộ`, `ữ`) — the blog is written in Vietnamese and this predates the redesign, untouched by it.

## Layout

Experience surfaces are full-bleed: `AutomatonField`'s canvas is `position: fixed; inset: 0; z-index: -10`, sized to the viewport, sitting behind a single centered content column with no boxing or glass panels over it — per the direction contract's FIRST VIEWPORT rule. The `/` intro is a `min-h-[calc(100svh-10rem)]` flex column, name centered, copy capped at `max-w-xl`, a scroll-cue chevron pinned to the bottom center.

Read surfaces keep the pre-existing shell: a single centered column, `max-width: 48rem`, `1.5rem` horizontal padding rising to `2rem` at `sm`, inside a three-row page grid (`5rem` header / flexible main / `5rem` footer). This shell is unchanged by the redesign — only its color values moved to the dark register via `forceDark`.

## Elevation & Depth

Flat by default on Read surfaces — depth comes from color and tinted washes, not shadow, unchanged from the prior system. On Experience surfaces depth is conveyed entirely by the automaton's own glow kernel: a live cell's brightness falls off with a wide 5×5 weighted kernel (`AutomatonField.astro`), so a single active cell reads as a soft luminous point rather than a hard pixel. There is no box-shadow vocabulary on Experience surfaces; the field itself is the only depth cue.

### Named Rules
**The Field-Is-the-Depth Rule.** On `/` and `/lab`, do not add drop shadows or glass/blur panels to compete with the shader. Depth on these surfaces comes from the automaton's glow falloff, never from box-shadow.

## Shapes

No boxing anywhere in the system. Experience surfaces have zero cards, panels, or bordered containers over the field — text sits directly on it. Read surfaces carry forward the prior system's near-absence of corners: the inline-code chip (`0.25rem` radius) is the only rounded shape of note, plus the theme toggle pill.

## Components

### Automaton Field (signature component)
A `<canvas>` rendered by `AutomatonField.astro`: fixed full-bleed, `z-index: -10`, a 160×160 cell grid computed as a Game-of-Life variant in a GLSL fragment shader (ping-ponged render targets), displayed through a second shader that maps cell state to a soft glow between the voidground and the accent. Seeded with a still-life block cluster near center plus 18% random noise; a small per-tick spontaneous-generation probability keeps it from ever dying to black. Cursor position seeds a local perturbation each tick; scroll triggers a one-shot pulse. Runs at a deliberate 24fps tick rate — intentionally below smooth-animation rates so it reads as computation, not decoration. Used on exactly two surfaces: `/` and `/lab`.
- **Reduced motion:** not a disabled canvas. The field steps forward ~40 generations synchronously, then renders once and stops — a designed static composition, not a frozen loading state.

### Intro name mark
- **Shape:** plain text, no box, no glow applied to the glyphs themselves — per STORY, the fusion with the field is layering, not literal cell-typography.
- **Color:** `rgb(226 232 240)`, the neutral heading slate — never the automaton accent.
- **Motion:** a 700ms blur-to-sharp entrance, `both`-filled, skipped entirely under `prefers-reduced-motion`.

### Post/lab list links
- **Shape:** no shape; underline drawn via `background-size` transition, unchanged mechanism from the prior system.
- **Color:** on the dark register, `--color-primary-blue` (the underline token) resolves to the neutral heading slate, not a highlighter color — the accent-fencing rule applies to every link on every forced-dark surface, not only the Experience ones.

### Theme toggle / chrome
- Header social links keep their prior hover mechanism (a swept underline) but on the dark register the swipe color is dropped (`dark:bg-none`) in favor of a plain text-color hover — consistent with the no-accent-as-UI-fill rule extending to the leftover highlighter tokens.

### `/resume` (explicit exclusion, not a component of this system)
Standalone page, no `PageLayout`, Raleway Variable body face, light background, black hairline borders. Pre-dates and sits outside this redesign entirely. Do not extend automaton-world rules to it, and do not "fix" its light styling as if it were drift — it is a confirmed, standing exception.

## Do's and Don'ts

### Do:
- **Do** keep the automaton accent (`rgb(90 250 209)`) inside the shader canvas only; every other neutral in the system (text, links, borders) comes from the slate scale.
- **Do** hold the near-black voidground (`rgb(6 8 14)` Experience / `rgb(10 12 20)` shared dark) — never pure `#000`.
- **Do** scope the geometric-mono stack to `.intro-field` / `.lab-field` only; Read surfaces keep Space Grotesk.
- **Do** give any new full-viewport motion device a real designed static fallback under `prefers-reduced-motion` (per the automaton's ~40-generation settle-then-render pattern), not a disabled/frozen canvas.
- **Do** run Experience-surface animation at a deliberately low, visible tick rate rather than a smooth 60fps loop — the roughness reads as live computation.
- **Do** check every Read-surface type or copy change against Vietnamese diacritics.

### Don't:
- **Don't** use the automaton accent as a UI fill, link color, button background, or focus ring anywhere outside the shader canvas — this was a material fix this round and it regresses easily.
- **Don't** add drop shadows, glass panels, or bordered boxes over the automaton field; the glow kernel is the system's only depth cue on Experience surfaces.
- **Don't** mix the mono and Space Grotesk faces on one page; the split is by surface role (Experience vs. Read), not decorative variety.
- **Don't** treat `/resume`'s light theme, Raleway face, or bordered layout as drift to fix — it's a standing, explicit exclusion from this system.
- **Don't** promote the geometric-mono system-font stack beyond Experience surfaces without revisiting the disclosed-exception status noted in the direction contract; it's an accepted trade, not a new floor rule for self-hosted type.

## Known Carryovers

- The dormant shadcn/ui HSL token layer in `src/styles/global.css` (`--background`, `--card`, `--chart-1..5`) remains unconsumed by any component; it predates this redesign and is not part of either the Experience or Read palette.
- Vietnamese-language support (`lang="vi"` on Read surfaces, Space Grotesk Vietnamese unicode-range subset) predates this redesign and is carried forward untouched.
