# Validation and handoff

Validated locally on October 30, 2026. No remote Git operations, commits, merges, rebases, pushes, or deployments occurred. Production Netlify settings were not accessed.

## Implementation and build

- Branch: `feat/portfolio-astro-react-parity`, based on local V2 at `8492629e917476a57ffb17225f96343f9e72ce24`. HEAD remains that commit; changes are deliberately uncommitted.
- `npm run check`: 0 errors, 0 warnings; one TypeScript deprecation hint for the intentionally retained `execCommand('copy')` compatibility fallback.
- `npm run build -- --outDir tmp/react-parity/build`: passed; 12 HTML pages plus sitemap. Isolated output preserves the pre-existing `dist/` directory.
- `PORTFOLIO_BUILD_DIR=tmp/react-parity/build npm run test:build`: all 6 regression tests pass. Tests cover static routes, navigation/active states, metadata, local links/assets/anchors, external-tab attributes, original image/video bytes, sourced content boundaries, and minimal static architecture.
- Production dependencies added/removed: **none**. Dev dependencies added/removed: **none**. V2 lockfile unchanged. Existing resolved Astro 7.1.6 satisfies the retained `^7.1.3` declaration. No React, Material UI, Sass, activity API, or player library is shipped.
- Only client script: minified 729-byte inline email-copy module, on About/Contact. Other pages require no application JavaScript.

## Browser and visual comparison

- Ran the real, unchanged React source from `main` in an ignored extracted folder. Its 1,555 historical packages were installed offline from the local npm cache, outside the production dependency tree.
- Edge/Playwright captured React and Astro views at 390×900, 768×1024, and 1440×900. Original font requests were fulfilled from the same locally saved typefaces used by Astro; no GitHub request was made.
- Compared all original pages and the new Experience/project-detail views. Complete-page heights intentionally differ with verified project selection and modernized text.
- Identical-content RxSense card fixtures have **0 differing pixels** at all three viewports. Card boxes are exactly 300×221 at 390/768 and 762×342 at 1440; x/y coordinates match too. This checks the actual image, fonts, divider, stack placement, copy, and border, not just a computed width.
- Contact content boxes and coordinates match exactly at every comparison size. Differing pixels are below 0.35%, attributable to the deliberately brighter `(open)` link; its opacity is 0.9 instead of the original 0.7.
- Demo card geometry matches exactly: 300×287 on phone/tablet, 762×497 desktop. All three original recordings are byte-identical; native browser video controls replace the ReactPlayer wrapper. Video-control/frame-state pixels can vary with loading and browser UI. Final QA explicitly waits for decoded first frames and confirms playback.
- Final interactive checks cover purple hover dots, pill shadows, the 1200ms entrance fade, and the reduced-motion opt-out.
- Local interactive screenshot gallery: `tmp/react-parity/review.html`. Comparison data: `comparison-results.json`; screenshots: `tmp/react-parity/screenshots/`.

## Responsive and functional checks

`tmp/react-parity/browser-results.json` records **132 route/viewport samples**: 12 routes at widths 320, 390, 480, 568, 600, 768, 959, 960, 1024, 1440, and 1920. Heights are 900 except the 768-wide tablet at 1024. Findings:

- No horizontal overflow, broken images, browser console exceptions, missing resources, or outgoing resource requests.
- Every original route and new route returns the correct static page; unknown paths return 404.
- Click navigation and active-page states pass. Skip link and complete keyboard tab path pass. All pages have one primary heading; visible focus and reduced motion are supported.
- Clipboard API success, 1400ms toast expiry, compatibility-copy success, and double-failure feedback pass. Tests use controlled clipboard stubs without changing the user's clipboard.
- All three videos decode and advance playback. Native controls, no autoplay, and first-frame presentation are preserved. The final preload setting matches the original player's automatic preload behavior.
- GitHub image is visible on mobile, resolves at full local resolution, and retains its separate-tab profile link. The static nature is explicit.
- With JavaScript disabled, native navigation, project content, and the email mailto fallback still work.
- External link destinations/attributes are checked locally, without opening or contacting them. Their remote availability was deliberately not tested. Safari and Firefox were not run.

## Deliberate differences and factual limits

- Added Experience in the original slash/dot convention. Phone navigation is 16px to fit four visible links; no hamburger/menu state was introduced.
- Updated professional/project copy; replaced tentative AI projects with verified work. Retained previous Astro project-detail URLs, using the original visual language, and added a bounded BetterDates.ai overview.
- GHI is current collaboration beginning October 2026; formal title, technical scope, and deliverables remain unconfirmed. No delivered software or compensation status is claimed.
- BetterDates.ai has an implemented local prototype; self-hosted models remain planned. No public source/demo link or completed self-hosted integration is inferred.
- The original hid the contribution screenshot below 960px. Astro intentionally makes that screenshot visible and openable on those sizes. Other project images follow the original hiding rule.
- Native semantics, focus styles, larger invisible phone hit areas around original pills, no-JS mailto, truthful clipboard failure, brighter secondary contact link, reduced motion, and a 404 recovery link improve basic usability without changing the original visual system.
- Original Varela Round WOFF2 is retained exactly. Ubuntu Mono uses the same family/weights from Google's current font-hosted files, now local. Font license notices are included.
- No original feature remains blocked. Browser-native media controls are not guaranteed to render identically across operating systems.

## Preservation

- Historical branch/tag references: all 6 baseline references unchanged; only the requested new local branch was added.
- Existing local ignored review files/logs: **960 SHA-256 matches**, no deletion or modification.
- V2 package lock unchanged; original media bytes retained; `git diff --check` passes.
- Other repositories were inspected read-only and not changed. New source edits are confined to the requested branch. Existing generated `dist/` and prior review exports were not rebuilt or overwritten.
- Original audit, content provenance, snapshot refresh instructions, this validation, and resumable progress record are under `docs/react-parity/`.

## Continue locally

Run `npm run dev` from this checkout. The current files are ready for visual review and eventual user-approved commit. Local comparison servers used for QA are stopped during handoff; their build and screenshots remain available. No additional factual confirmation is required for the bounded current copy; confirm GHI details or changed project publication status before expanding those entries.
