# Josh Valentino — original portfolio, rebuilt in Astro

This local implementation recreates the original React portfolio from `main` using static Astro pages, native components, conventional CSS, and one small email-copy script. The charcoal canvas, original fonts, slash/dot navigation, project cards, screenshots, contribution snapshot, and demo recordings are retained. Updated writing distinguishes implemented work, retired deployments, and planned features.

The working branch is `feat/portfolio-astro-react-parity`, based on local `feat/portfolio-v2-astro` (`8492629e`). No publication is part of this work.

## Run locally

Use Node 24+ and the existing locked dependencies:

```sh
npm run dev
```

The original URLs `/`, `/about`, `/projects`, `/contact`, and `/datafydemo` are real static pages. `/experience` uses the same navigation convention. The four existing `/work/` URLs remain available, with a fifth bounded BetterDates.ai overview. An unmatched URL uses the static 404 page.

```sh
npm run check
npm run build
npm run test:build
```

A normal build writes `dist/`. For this task, existing generated output was preserved and verification used an isolated output directory:

```powershell
npm run build -- --outDir tmp/react-parity/build
$env:PORTFOLIO_BUILD_DIR = 'tmp/react-parity/build'
npm run test:build
```

The retained Netlify configuration builds a static directory and applies security/cache headers. It has no SPA catch-all or redirects replacing the original pages. Building locally does not deploy.

## Maintain content and presentation

- `src/content/projects/*.md`: verified projects, order, status, technology, contribution, images, links, and overview copy. `visible`/`detailPage` control listing and generated routes. Private entries may omit source links. No runtime data belongs here.
- `src/data/profile.ts`: sanitized professional experience. `src/pages/experience.astro`: current bounded GHI collaboration statement.
- `src/data/site.ts`: contact/profile URLs and metadata.
- `src/components/AboutPage.astro`: shared `/` and `/about` copy. `EmailCopy.astro`: copy status, compatibility fallback, and no-JavaScript mailto.
- `src/styles/cards.css`: retained original desktop card declarations, compiled once from the original Sass. No Sass dependency is required by this Astro project.
- `src/styles/parity.css`: original layout/header typography, responsive single-DOM card behavior, reduced motion, focus styles, and matching extensions for the new pages.
- `public/fonts/`: the original Varela Round and Ubuntu Mono typefaces with redistribution licenses. Visitors make no font-service request.

External project/profile actions open separate tabs; internal navigation uses ordinary links. No React runtime, intro overlay, analytics, API activity feed, or production server is required. The original footer was disabled and remains absent.

## Audit and verification

See `docs/react-parity/` for the visual inventory, content provenance, validation, and resumable progress record. Ignored `tmp/react-parity/` contains the unchanged extracted React reference, comparison scripts/results, production build, screenshots, and preservation baselines. It is not published.

The original contribution image is a **historical static screenshot**. See `docs/react-parity/github-snapshot.md` for the manual refresh procedure. The graph remains visible on mobile and opens at full resolution, while other card images follow the original mobile hiding rule.

## Licensing

Original design/code attribution to Karen Ying is retained in `LICENSE.md` and `NOTICE.md`. Fonts have separate license files under `public/fonts/`. Historical branches and prior documentation remain intact.
