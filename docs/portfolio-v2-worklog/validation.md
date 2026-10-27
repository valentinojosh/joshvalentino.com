# Validation

## Initial checks

- Local Git inspection: main clean for tracked files; feature two ahead/zero behind; archive tag peels to main.
- Verified no untracked-file collisions with feature tree, then SHA-256 verified all 124 pre-existing files unchanged after switch.
- Node 24.19.0 and npm 11.17.0 available; installed Astro 7.1.6. No packages downloaded.
- Commands use per-process safe.directory because sandbox identity differs from repository owner; no persistent Git config edits.

## Final local implementation validation

Commands below run with existing dependencies and `ASTRO_TELEMETRY_DISABLED=1`, with no installation. Build/check commands run in the isolated source mirror `tmp/portfolio-v2-task-20261027/site/` to preserve the existing root output. All 80 source/public/script/config files in that mirror were SHA-256 matched against the authorized repository after final implementation changes.

| Command/check | Result |
| --- | --- |
| `node node_modules/astro/bin/astro.mjs check --root tmp/portfolio-v2-task-20261027/site` | Initial check passed; URL-validator deprecation hint corrected |
| `npm run verify` (mirror) | Final Astro check: 23 files, zero errors/warnings/hints; production build passed |
| `npm run build` (mirror during header refinement) | Passed after increasing brand link target size |
| `npm run test:build` (mirror) | Four tests passed: internal routes/fragments/assets; metadata/headings/IDs/alt; sitemap/draft exclusion; public-output privacy markers |
| `node tmp/portfolio-v2-task-20261027/browser-qa.cjs` (bundled Node/Playwright, installed Edge 156) | Passed 35 responsive samples plus functional checks below |
| `git diff --check`, `git diff --cached --check` | Passed |
| SHA-256 comparison of all 124 pre-existing files | Unchanged |
| 14 read-only external repositories: HEAD/status comparison | Unchanged, including the source repository with unborn HEAD |
| `git rev-parse main audit portfolio-v1-archive 'portfolio-v1-archive^{}'` | All match original safety baseline |

The initial direct browser launch found no bundled Chromium binary. Used the installed Edge browser through bundled Playwright; no browser was downloaded. An early test harness awaited offscreen lazy images; fixed the harness to request images before checking. A real undersized brand link was corrected. An initial mirror refresh used the wrong relative destination; corrected to absolute paths and verified all final source hashes. Final check/build/tests ran against the corrected mirror.

## Browser and visual review

- Widths: 320, 390, 430, 768, 1024, 1440, 1920 pixels. Checked homepage plus all four case studies at each width: no horizontal overflow, broken images or controls below the 24px target check.
- Verified keyboard skip link and visible focus, focus transfer to main, all header anchors clear sticky navigation, case-study/legacy navigation, clipboard success/failure with a test stub, 200% zoom, and custom 404 status/noindex.
- Verified reduced-motion intro removal, normal animation cleanup, session suppression on repeat navigation, and visible content with JavaScript disabled and normal motion preference. Corrected inherited opaque intro background so no-JS users are not covered permanently.
- No page runtime errors, unexpected failed page/asset requests, or external page requests. The intentionally requested missing route returned the expected 404; it is recorded in raw QA output, not an asset defect. No GitHub requests were sent.
- Inspected actual desktop hero, experience, projects, background/education and case-study screenshots; mobile detail crops and tablet/full-page captures support layout review. Screenshot files and browser harness/results remain in ignored task scratch, excluded from source export/build.
- Solid text-token contrast against all four dark surfaces: minimum 6.22:1 (muted text on raised surface). This token calculation and targeted checks are not a claim of a formal WCAG audit.
- Homepage HTML: 27,574 bytes, 7,180 gzip bytes. No standalone JS assets/framework bundles; small existing native scripts are inlined. No analytics/remote fonts or additional runtime packages. These are build observations, not Lighthouse/Core Web Vitals field scores.

## Content and release boundaries

- Reviewed full canonical dossier; retained individual/team authorship and production read-only/DBA execution boundaries. No dossier file or passage copied. No employer scale/ticket/savings metrics or invented security roles.
- Corrected title/dates, GPA, retired software status, simulator phase, Data-fy cache behavior and IMS estimate attribution. New source visibility not assumed; kept established links only. Draft concepts generate no pages or sitemap entries.
- No lint command is configured. No network dependency audit, hosted-link check, deployment test, Safari/Firefox test, screen-reader session or formal accessibility certification was performed. External repositories' test suites were not executed.
- Existing local Netlify config retained unchanged. Actual hosted routing, headers, DNS and external-link availability require an authorized future release check. No unresolved local build/runtime errors remain.

## Review export verification

Export uses the original feature baseline through final local HEAD, not just the implementation or latest documentation commit. The Desktop export manifest records the final references, full cumulative path/status list, deletions/renames and per-file SHA-256. Export verification compares source/copy/ZIP bytes, exact archive entry set and repository state before/after export. ZIP checksum and byte size are reported separately because embedding an archive's own checksum inside it would be circular.
