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

Header navigation remains visible and keyboard accessible at mobile widths without JavaScript. Existing `/about`, `/projects`, `/contact` and `/datafydemo` URLs retain redirects. The public site deliberately has no resume page, section, link, PDF or download. Private source documents, runtime data and implementation details stay outside public copy and generated output; private projects appear only through explicitly approved high-level summaries.

Featured cards share a 16:9 media slot and content-driven equal grid rows. `mediaKind` preserves the full hardware photograph while screenshots fill their slot. `cardImagePosition` permits a top anchor for Data-fy's header/chart; other screenshots use a centered fit. No source images are stretched or replaced. Secondary entries support an optional public link or a plain status label, so a private project never needs a placeholder action.

`npm run test:build` checks routes, assets, metadata, source destinations, privacy/draft exclusion, approved contact/education content, private-secondary link behavior and the no-resume boundary. Reachable historical Git objects are separate from current source/build output; earlier resume assets remain in local history and have not been erased.

Sanitized audit, decisions, validation and continuation notes live in `docs/portfolio-v2-worklog/`, outside the published site. See `handoff.md` before resuming. No React runtime, analytics, remote fonts or new dependencies have been added.

The optional intro is controlled by `site.intro.mode` in `src/data/site.ts`: `always`, `session`, or `off`. It is decorative, non-interactive, and skipped for reduced-motion users. During local development, `?intro=always&intro-motion=force` is available for deliberate animation review without changing the production accessibility behavior.

## History and licensing

Portfolio V2 is an original Astro implementation. Earlier versions of this repository were adapted from Karen Ying's MIT-licensed portfolio; the historical attribution remains documented in `NOTICE.md` and `LICENSE.md`.
