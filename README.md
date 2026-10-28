# [joshvalentino.com](https://joshvalentino.com)

Portfolio V2 is a static Astro site for Josh Valentino's software, data, and systems engineering work. The original React site is preserved at `portfolio-v1-archive`.

## Local development

```sh
npm run dev
```

Use the existing locked local dependencies. Installing packages requires separate authorization for this controlled review. Node 24 or newer is required. Quality checks:

```sh
npm run verify
npm run test:build
```

The production build is emitted to `dist/`. The existing Netlify configuration is retained; building locally does not deploy. Nothing in this task authorizes publishing. Project records live in `src/content/projects`. Homepage presentation is controlled in each record through:

- `displayOrder` for order
- `prominence` for `standard` or full-grid `wide` presentation
- `category` and `statusLabel` for restrained public metadata
- `visible` for homepage inclusion
- `detailPage` for static case-study generation

Public employment stories, expertise and additional projects live in `src/data/profile.ts`; site metadata/contact details live in `src/data/site.ts`. Private employer sources never belong in either file. `visible: false` excludes draft projects from both case-study routing and the sitemap, as well as the homepage. Images require descriptive alt text. The sitemap is generated from the same collection without another package.

The homepage presents a broad technical introduction, four selected projects, professional experience, technical scope, background/education and contact. GitHub links on project cards and at the top of overview pages are the primary path to code and detailed documentation. The four existing `/work/` pages remain as short, visual introductions, avoiding a second copy of each repository's README. Systems Lab retains its existing `home-lab-network-security` identifier.

Header navigation remains visible and keyboard accessible at mobile widths without JavaScript. Existing `/about`, `/projects`, `/contact` and `/datafydemo` URLs retain redirects. The public site deliberately has no resume page, section, link, PDF or download. Private projects and source documents must stay outside public copy and generated output.

Project `mediaKind` selects interface or photograph presentation. Images retain their aspect ratios inside a dark frame; the hardware photograph stays uncropped. `npm run test:build` checks routes, assets, metadata, source destinations, privacy/draft exclusion, approved contact/education content and the no-resume boundary.

Sanitized audit, decisions, validation and continuation notes live in `docs/portfolio-v2-worklog/`, outside the published site. See `handoff.md` before resuming. No React runtime, analytics, remote fonts or new dependencies have been added.

The optional intro is controlled by `site.intro.mode` in `src/data/site.ts`: `always`, `session`, or `off`. It is decorative, non-interactive, and skipped for reduced-motion users. During local development, `?intro=always&intro-motion=force` is available for deliberate animation review without changing the production accessibility behavior.

## History and licensing

Portfolio V2 is an original Astro implementation. Earlier versions of this repository were adapted from Karen Ying's MIT-licensed portfolio; the historical attribution remains documented in `NOTICE.md` and `LICENSE.md`.
