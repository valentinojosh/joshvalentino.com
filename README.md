# [joshvalentino.com](https://joshvalentino.com)

Portfolio V2 is a static-first Astro site for Josh Valentino's software, systems, and IT work.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4a97bf5c-a702-4b54-b193-b4e7ccdcc4f6/deploy-status)](https://app.netlify.com/sites/joshvalentinocom/deploys)

## Local development

```sh
npm install
npm run dev
```

Quality checks:

```sh
npm run verify
```

The production build is emitted to `dist/` and deployed as a static site on Netlify. Project records live in `src/content/projects`. Homepage presentation is controlled in each record through:

- `displayOrder` for order
- `prominence` for `standard` or full-grid `wide` presentation
- `category` and `statusLabel` for restrained public metadata
- `visible` for homepage inclusion
- `detailPage` for static case-study generation

The optional intro is controlled by `site.intro.mode` in `src/data/site.ts`: `always`, `session`, or `off`. It is decorative, non-interactive, and skipped for reduced-motion users. During local development, `?intro=always&intro-motion=force` is available for deliberate animation review without changing the production accessibility behavior.

## History and licensing

Portfolio V2 is an original Astro implementation. Earlier versions of this repository were adapted from Karen Ying's MIT-licensed portfolio; the historical attribution remains documented in `NOTICE.md` and `LICENSE.md`.
