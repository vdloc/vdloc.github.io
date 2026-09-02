---
target: blog surface (src/pages/blog.astro + blog/[slug].astro)
total_score: 16
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 2
target_identity: "file:/home/vdloc/Documents/vdloc.github.io/src/pages/blog.astro"
target_fingerprint: "sha256:a3d00dfc4b8aa66dd0728de8f099be2348daf2b1c6f36fbfb590396d571bab4a"
target_path: /home/vdloc/Documents/vdloc.github.io/src/pages/blog.astro
timestamp: 2026-09-02T04-10-20Z
slug: src-pages-blog-astro
---
Method: dual-agent (A: general-purpose design review · B: general-purpose detector/browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | `/blog` has zero `<h1>`; only cue is a 2px nav underline |
| 2 | Match System/Real World | 1 | `lang="en"` + `en-US` dates on 100% Vietnamese content; footer credits template author's name on the site owner's Facebook link |
| 3 | User Control and Freedom | 1 | No back-to-blog, no prev/next, no ToC (heading IDs exist, unexposed); theme in `sessionStorage` flashes light every session |
| 4 | Consistency and Standards | 2 | Body bg/text don't match DESIGN.md (`rgb(10,10,10)` shipped vs ink-violet/midnight-slate documented); 3 different dark `theme-color` values |
| 5 | Error Prevention | 3 | Zod schema + `draft` filtering both correct, but mostly author-facing not user-facing |
| 6 | Recognition Rather Than Recall | 1 | Every post's `description` fetched, validated, discarded — list shows title+date only |
| 7 | Flexibility and Efficiency | 1 | No search, tags, ToC, copy-code, reading time; `/resume` and `/rss.xml` build but link from nowhere |
| 8 | Aesthetic and Minimalist Design | 3 | Strongest axis — single column, no chrome, restrained; undercut by `/blog` reading empty |
| 9 | Error Recovery | 1 | No `404.astro` anywhere in `src/pages/` |
| 10 | Help and Documentation | 1 | Technique posts have no ToC, no prereqs, no link to the matching `/lab/*` running demo |
| **Total** | | **16/40** | **Poor** |

## Design Specificity Verdict

**Not authored for this product — and the gap between documented and shipped is the real story.** DESIGN.md's "Highlighter Notebook" system is genuinely specific (ink violet, marks-not-fills, one accent per region). Live measurement shows the blog surface doesn't render it: body text/bg computes to `rgb(10,10,10)` in both modes (a dormant shadcn `@layer base` rule in `global.css` silently wins over the documented ink-violet/midnight-slate), line-height measures 1.75 not 1.85, and the measure runs 864px not 48rem. `blog.astro` and `blog/[slug].astro` are otherwise stock Blogster — footer credits `flexdinesh/blogster`, header GitHub icon says `title="Blogster on GitHub"`, and the Facebook icon says `title="Dinesh on Twitter"`. Swap the two Vietnamese posts for English ones and nothing here would need to change.

**Detector (deterministic):** `blog.astro` — exit 2, 1 finding (`design-system-font-size`, 12px icon glyph at line 46) — real but sits in the `external`-post branch, which zero current posts exercise; dead code, near-zero material impact. `blog/[slug].astro` — exit 0, 0 findings, but that's an artifact of the file delegating all markup to layouts the scanner didn't chase.

**False positives identified by Assessment B, confirmed by computed styles:** all 5 `low-contrast` findings (measuring color against a highlighter gradient/rule that paints 0% width at rest, not a fill behind glyphs) and ~348 of 352 `ai-color-palette` findings (Prism syntax-highlighting `<span class="token …">` inside code blocks, mislabeled "cyan" for what is Tailwind blue). Net real signal from the detector: one dead-code line and confirmation that the shipped palette is blue, not the documented cyan.

No browser overlay is claimable as user-visible — Assessment B injected the detector and read console output, but did not present a labeled overlay tab.

## Overall Impression

The prose reading experience itself is well-crafted and holds up under measurement — but almost everything around it is either unfinished template scaffolding or actively undermining the product's two stated goals (developer credibility, recruiter path-to-resume). The single biggest opportunity: the blog is supposed to be the front door to the lab demos, PRODUCT.md's stated differentiator, and right now zero posts link to their matching lab demo. Fix that one connection and the whole site's thesis starts working.

## What's Working

1. **Post-body typography and contrast are genuinely well-judged where they render.** Ink-violet on white measures 11.61:1, dark mode 13.33:1 body/19.80:1 headings — every sampled pair clears AAA.
2. **Sparseness is handled structurally.** `blog.astro`'s `1fr`/`1fr auto` list (not a card grid) satisfies PRODUCT.md's "no design that only looks right full" principle — rare among portfolio blogs.
3. **Draft filtering is correct and defense-in-depth.** Independent filters in `sortPostsByDate` and `getStaticPaths` both exclude `draft-post.md` from listing and routing.

## Priority Issues

**[P0] Space Grotesk cannot render Vietnamese — the language the blog is written in**
- **Why it matters:** Measured directly: `ế`, `đ`, `ữ`, `ơ` advance-width-match a missing font (fallback), while Latin letters use Space Grotesk. Every Vietnamese word switches typeface mid-word, on every line, on the primary content for the primary audience. Violates DESIGN.md's own "Diacritic Test" rule.
- **Fix:** re-subset Space Grotesk with the `vietnamese` unicode range, add matching `@font-face` + `unicode-range` blocks in `src/layouts/GoogleFont.astro`, `font-display: swap`.
- **Suggested command:** `/impeccable harden`

**[P0] Post-list titles have zero click affordance, especially on mobile**
- **Why it matters:** Both list anchors use `class='unset … bg-[length:0%_55%] hover:bg-[length:100%_55%]'` — 0% width at rest in both themes. No hover on touch means the entire `/blog` list shows no visible sign anything is clickable.
- **Fix:** give the rest state a persistent 2px rule (`bg-[length:100%_2px]`) that grows to the 55% band on hover.
- **Suggested command:** `/impeccable clarify`

**[P1] No post links to its matching lab demo, resume, or byline — every path out of a post leads away from the author**
- **Why it matters:** Directly fails PRODUCT.md's stated success condition for both audiences. `/resume` and `/rss.xml` build but are linked from nowhere in `src/`. The gallery post stops mid-tutorial with no conclusion and no link to `lab/entrance-animation-for-images`, which runs the finished result.
- **Fix:** add optional `demo` field to blog schema, render "Xem demo trực tiếp →" top+bottom of post; add byline + `/resume` link in post footer; add "← Tất cả bài viết" back-link; add `/resume` to `Nav.astro`.
- **Suggested command:** `/impeccable onboard`

**[P1] `lang="en"` and English-locale dates on entirely Vietnamese content**
- **Why it matters:** WCAG 3.1.1 failure — screen readers announce Vietnamese prose with English phonemes. Directly contradicts PRODUCT.md principle 3 ("Vietnamese is a first-class reading experience").
- **Fix:** `lang="vi"` on post pages in `ContentLayout.astro`; `toLocaleDateString('vi-VN', {...})` in `ContentLayout.astro` and `blog.astro`.
- **Suggested command:** `/impeccable harden`

**[P2] The dormant shadcn token layer is overriding the design system's actual ink and paper colors**
- **Why it matters:** `body { @apply bg-background text-foreground }` in `global.css` makes the "warm, paper-like" quality DESIGN.md centers on simply not ship. Also desyncs 3 different `theme-color` meta values.
- **Fix:** delete the trailing `@layer base` block consuming shadcn vars from `global.css`; reconcile `theme-color`.
- **Suggested command:** `/impeccable audit`

**[P2] `/blog` has no `<h1>` and discards every post's `description`**
- **Why it matters:** First impression of the blog index is 2 lines of unheaded text on an 864px column — reads empty, not sparse, to the exact recruiter audience judging credibility.
- **Fix:** add `<h1>` ("Bài viết"); render `post.frontmatter.description` under each title using data already fetched.
- **Suggested command:** `/impeccable layout`

## Persona Red Flags

**Sam (accessibility) — most acute:** `#mode-toggle` hardcodes `aria-checked="false"` permanently — verified live in both themes, never updates, no state ever announced. Closed mobile menu is hidden by `transform: translateX(-100%)` only (no `inert`/`display:none`), so keyboard focus travels through 6 invisible off-screen stops before reaching real content. No `prefers-reduced-motion` guard anywhere despite PRODUCT.md calling it a requirement, while the one blog image is an autoplaying GIF with no pause.

**Jordan (first-timer landing on a deep post):** Cannot determine who wrote the post — no byline, no bio, name appears only in `<title>` on `/blog`, nowhere on a post page. Gallery post ends mid-sentence of a tutorial with no conclusion and no link to the finished, running demo.

**Casey (mobile):** 7 of 8 code blocks overflow horizontally (up to 1014px against a 306px column) with zero visual cue that content continues off-screen. `<h1>` alone consumes 243px of a 720px viewport before any content.

## Minor Observations

- `SITE_DESCRIPTION` is still the template default, in English, on a Vietnamese blog.
- Heading IDs already exist in the DOM (`Heading.astro` slugifies) but nothing surfaces a ToC or deep-link affordance — a near-free win.
- `demo.gif` has no `width`/`height`/`loading="lazy"` — guaranteed CLS.
- Prism's `coldark-dark` theme renders identically in light and dark mode.
- `external: true` branch and its zod union are fully built, currently exercised by zero posts.

## Questions to Consider

- DESIGN.md documents a page that doesn't render (ink-violet/1.85-leading/48rem vs. measured `rgb(10,10,10)`/1.75/864px) — which one is the product, and is anything else in the doc describing intent rather than pixels?
- PRODUCT.md's top principle is "the artifact is the argument," yet the post that describes an animation never links the lab page that runs it — is the blog meant to be the lab's front door, or has it quietly drifted into its own thing?
