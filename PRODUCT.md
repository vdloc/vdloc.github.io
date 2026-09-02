# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences arrive by different doors and both must work:

- **Frontend developers** land from a link to a specific technique post or lab demo. They read to learn how something was built, and they are the traffic source. Blog and lab are the front door.
- **Recruiters and hiring managers** arrive later, or from a shared link, to judge whether the author is worth an interview. They need a fast credibility path from any entry page to proof of craft and to the resume.

The author is Vu Duc Loc ("Lộc"), a frontend developer based in Hanoi, Vietnam.

## Product Purpose

A personal site that doubles as a technique blog and a portfolio. Success is a developer reading a post to the end, and a recruiter arriving on that same post reaching the resume or projects without hunting.

## Positioning

The lab demos are the differentiator: `/lab` pages run the real animation (GSAP, CSS) in the browser rather than showing a screenshot or a video of it. Claims about craft are demonstrated on the page, not asserted. Blog posts pair the write-up with the running artifact.

## Operating Context

- Static site, no backend. Built with Astro, deployed to GitHub Pages by GitHub Actions on push to `main` (`.github/workflows/deploy.yml`); PRs get a build check (`.github/workflows/ci.yml`).
- Live at `https://vdloc.github.io`. `SITE_URL` env var overrides the baked site URL. `vdloc.me` appears in project history but does not resolve and has no CNAME.
- Content is authored as Markdown/Markdoc files under `content/` in three groups: `blog`, `lab`, `projects`. Adding content means adding a file, not touching a CMS.
- Surfaces: home (`/`, intro), `/blog`, `/blog/[slug]`, `/lab` plus three demo pages, `/projects`, `/resume`, `/contact`, plus `/rss.xml` and a sitemap.
- The contact form posts to a third-party Formspree endpoint (`https://formspree.io/f/mpzgwagn`). There is no server to change.

## Capabilities and Constraints

- Built on the Blogster "bubblegum" Astro template. Its page set and Markdoc content pipeline stay; work happens inside that structure rather than replacing it.
- Astro 5 + Tailwind 3, Yarn 4 via Corepack, GSAP and Lenis for motion. Light/dark mode is built into the template.
- Blog posts are written in Vietnamese, including titles and slugs. UI chrome is English today. Any typography, line-length, or font decision must hold up for Vietnamese diacritics.
- `/resume` is deliberately public and includes real contact details.
- Content volume as of 2026-09-01: 3 blog posts (one draft), 3 lab demos, 3 projects (one draft). Design decisions must survive a near-empty list.
- Undecided: whether UI chrome becomes bilingual; whether a custom domain returns.

## Brand Commitments

- Name and handle: `@vdloc`; site title "Loc is here!".
- Existing voice in posts: first-person, practical, technique-focused, Vietnamese, and it credits the original source that inspired a build.

## Evidence on Hand

- Real running lab demos: `src/pages/lab/animate-svg-shapes-on-scroll.astro`, `src/pages/lab/entrance-animation-for-images.astro`, `src/pages/lab/article-layout-with-css-grid.astro`.
- Real blog posts in `content/blog/`, Vietnamese, crediting their source articles (latest dated 2024-12-23).
- Real projects with live links in `content/projects/`: Tasker (`https://github.com/vdloc/tasker`) and a design-system boilerplate (`https://design-system-boilerplate.netlify.app`).
- Real resume content: education (Post and Telecommunication Institute, 2009–2013), work history, languages.
- No testimonials, clients, metrics, press, or awards exist. Future work must not invent any.

## Product Principles

1. **The artifact is the argument.** Prefer showing a running demo to describing one; a claim about craft the page cannot demonstrate does not belong on it.
2. **Every entry page is a landing page.** Traffic arrives on a deep post, so the path from any page to proof of craft and to the resume has to be present without being pushy.
3. **Vietnamese is a first-class reading experience**, not an English layout with other words poured into it.
4. **Sparse by default.** The site works with three posts and three projects; no design that only looks right when a grid is full.
5. **Static and dependency-light.** No backend to lean on; anything added must survive as a prerendered file on GitHub Pages.

## Accessibility & Inclusion

The template ships light/dark mode and semantic, accessible markup, and that floor is kept. Motion is central to the lab demos, so honoring `prefers-reduced-motion` is a product requirement, not an optional nicety.
