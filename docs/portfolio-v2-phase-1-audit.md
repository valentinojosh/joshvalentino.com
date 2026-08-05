# Portfolio V2 — Phase 1 Audit and Blueprint

**Audit date:** August 5, 2026  
**Scope:** Repository assessment, live UX review, current-practice research, information architecture, visual direction, Astro architecture, content verification workflow, and staged migration plan.  
**Implementation status:** No redesign or migration work is included in this phase.

## Executive decision

Portfolio V2 should be rebuilt as a static-first Astro 7 site and repositioned as a concise proof trail for a hybrid software, systems, application, and production engineer. The current site is a readable personal landing page, but it is not yet an effective technical portfolio: the home page does not establish a strong professional identity, project discovery is one route away, professional experience is presented as a project, systems/infrastructure work is absent, and the project cards emphasize technology lists rather than engineering decisions or evidence.

The recommended V2 is a recruiter-first single-page portfolio with optional deep project routes. Its core content should render as semantic HTML with no framework runtime. Project content should live in a typed, local Astro content collection. Netlify should remain the host. React, Material UI, React Router, Sass, and the current media-player stack should not be migrated unless a later requirement independently justifies them.

The redesign should not begin with visual polish. The first implementation checkpoint should establish the content model and private verification ledger, because the largest current weakness is incomplete and poorly classified evidence rather than color or animation.

## Method and confidence

This assessment used:

- a full inventory of tracked source, public files, assets, dependencies, and recent history;
- a local production build and test invocation;
- browser review at 320, 390, 768, 1024, 1280, and 1440 CSS-pixel widths;
- DOM inspection of headings, landmarks, links, images, and rendered desktop/mobile variants;
- public response-header checks for the portfolio, its SPA routes, and linked project destinations;
- current primary documentation from Astro, React, W3C/WAI, web.dev, MDN, GitHub, Google, and Netlify;
- a pattern review of current engineering portfolios and high-quality engineering/product sites.

Claims in this document are labeled where useful as:

- **Confirmed:** directly supported by repository, runtime, or public endpoint evidence.
- **Verification required:** plausible or currently published, but not verified by sufficient evidence in this repository.
- **Proposed:** a recommendation for V2, not a claim about completed work.

---

## A. Current repository assessment

### Framework and runtime model

The repository is a Create React App single-page application:

- `src/index.js:1-9` mounts one React root and unregisters the generated service worker.
- `src/App.js:2-26` uses React Router 5 with client routes for `/`, `/about`, `/projects`, `/contact`, `/datafydemo`, and a wildcard error view.
- `package.json:10-15` declares React 16, React DOM 16, React Router 5, and `react-scripts` 5.
- The installed lockfile resolves React/React DOM 16.14.0, Material UI 4.12.4, and React Router 5.3.4.

React itself is not the defect. The mismatch is architectural: this content-driven portfolio renders nothing useful until JavaScript boots, although nearly all of its UI is static. The React team formally deprecated Create React App in 2025 and notes that it has no active maintainers. The current build also emits CRA's own warning that `babel-preset-react-app` depends on an undeclared Babel plugin and is unlikely to be fixed.

**Decision:** migrate away from CRA rather than attempting to modernize the existing SPA in place.

### Dependencies

The dependency graph is much larger than the site requires.

| Dependency group | Current use | Assessment |
| --- | --- | --- |
| React 16 / React DOM 16 | Entire SPA shell | Replace with static Astro components. |
| React Router 5 | Four content routes and one demo route | Replace with Astro file routes plus anchor navigation and legacy redirects. |
| Material UI 4 | `Fade`, `Hidden`, breakpoints, and tooltips | Remove. Native CSS and semantic markup cover these needs. |
| `react-progressive-image` | Desktop project images | Remove. Astro responsive images solve the real asset problem more effectively. |
| `react-player` | Three local MP4 files on `/datafydemo` | Remove. Use a native video element or curated stills in the Data-fy case study if the media remains useful. |
| Sass and loader packages | One project/demo stylesheet | Remove. Native CSS custom properties, nesting where supported, and component-scoped Astro styles are enough. |
| Enzyme and Testing Library packages | Test setup only | Remove during migration. There are no tests. Add only tests that match V2's risks. |
| `gh-pages` | A deployment script | Remove. Production is on Netlify. |
| `yarn` as an application dependency | None | Remove. A package manager should not be a browser dependency. |
| `react-icons` | Commented-out footer | Remove unless a tiny icon strategy is later justified. Inline SVG is sufficient for three links. |

Several explicit loader dependencies (`css-loader`, `postcss-loader`, `sass-loader`, `style-loader`, `resolve-url-loader`) duplicate concerns already encapsulated by CRA and should never have become direct portfolio dependencies.

### Build and test behavior

The application code compiles successfully, but `npm run build` exits with an error on Windows because `package.json:21` pipes to Unix `cat` to create `build/_redirects`. Netlify's Linux builder can execute this, which masks the cross-platform defect. A V2 build should be platform-neutral.

Measured output from the audit build:

- main JavaScript: 274 KB uncompressed / 91 KB gzip;
- main CSS: 9.3 KB uncompressed / 2.0 KB gzip;
- total build directory: 35.9 MB;
- three demo videos alone: 23.2 MB;
- source asset directory: 47.9 MB.

`npm test -- --watchAll=false` reports zero tests and exits with code 1. `src/setupTests.js` configures Enzyme despite there being no test files.

### Routing

`src/App.js:14-26` renders the header outside the route switch and maps the three main navigation items to separate SPA routes. This causes three problems:

1. project discovery is not available from the initial page;
2. every route receives the same generic document metadata from `public/index.html`;
3. direct route support depends on a catch-all rewrite rather than real HTML pages.

The current Netlify deployment returns `200 OK` for both `/` and `/projects`; the latter works because the build creates `/* /index.html 200`. That fallback should be removed after the Astro migration and replaced by real generated pages plus explicit permanent redirects for retired URLs.

### Component architecture

The component tree is small, but it has accumulated avoidable duplication and inactive code:

- `src/Components/About.js` and `src/Components/Contact.js` duplicate the clipboard, timeout, fallback, toast, and email-link implementation.
- `src/Components/About.js:4` imports `Contact.css`, while `src/Styles/About.css` is no longer used.
- `src/Components/Projects.js:11-113` maintains separate desktop and mobile project-card trees. Mobile does not merely reflow the desktop card; it drops every project image.
- `src/Components/Footer.js` contains useful GitHub, email, and LinkedIn links, but `src/App.js:25` comments the footer out.
- `src/Components/Demo.js` duplicates desktop/mobile demo-card structures and imports all three large videos.
- `src/constants.js` combines data, JSX, asset imports, navigation behavior, presentation color, and project copy in one file.
- Project fields such as `type` are present but not rendered. Empty strings and the literal sentinel `"None"` substitute for a real schema.

### Styles and design tokens

The site has the beginning of a token system in `src/App.css:31-39`, but the same palette is re-declared as Sass variables in `src/Styles/Projects.scss:1-8` and as inline JavaScript constants in `src/constants.js:19-21`. Presentation is split among global CSS, Sass, Material UI breakpoint functions, and large inline-style objects.

The layout is heavily card-based:

- desktop project cards use a white border, 5 px radius, and 10×10×20 px black shadow (`Projects.scss:18-26`);
- mobile cards repeat the same model with a stronger 10×10×30 px shadow (`Projects.scss:136-145`);
- project links are visually styled through nested `div` elements rather than the interactive anchors themselves;
- contact/about views use viewport-height arithmetic (`Contact.css:3`) and a 40 rem content cap (`Contact.css:12`).

The resulting code is harder to change than the size of the site warrants.

### Assets and media

The source contains authentic screenshots, portraits, employer/project imagery, mini placeholders, backups, and no-longer-rendered project images in one flat directory. Notable findings:

- current project imagery includes 4.5 MB and 4500×4500 px (`4368.jpg`), 1.5 MB and 7972×6433 px (`JEMA GER 1723-11.jpg`), 1.5 MB and 2391×2390 px (`rx.jpg`), and 2.6 MB and 2872×1484 px (`im.png`);
- the current six desktop project cards collectively reference roughly 11 MB of full-resolution imagery;
- all desktop project images use the same `alt="project"` (`Projects.js:34`);
- mobile cards render no images at all;
- portrait, photography, Yahtzee, stats database, Cloud Jams, backup, and mini assets remain tracked even where their projects or components are not rendered;
- `.DS_Store` files and IntelliJ `.idea` project metadata are tracked;
- asset licensing/provenance is not recorded for the two generic AI-project illustrations.

**Migration concern:** do not bulk-copy `src/Assets`. Build a reviewed media manifest, retain original evidence outside the public build when useful, and move only approved/optimized assets into `src/assets`.

### Metadata, analytics, and deployment

`public/index.html:24-41` contains basic description, Open Graph, Twitter-card, theme-color, and favicon metadata. These are worth preserving in concept, but not in wording or implementation. The current title and description say little beyond “portfolio site of Josh Valentino,” all routes share them, there is no canonical link, and the Twitter image has no title/description pair.

More seriously, `public/manifest.json:2-3` still identifies the application as `karenying.com` and “Personal / portfolio site of Karen Ying.” That inherited metadata must not survive V2.

`public/index.html:58-71` loads a `UA-...` Universal Analytics property. Standard Universal Analytics properties stopped processing new data in 2023. Remove the script. Add privacy-conscious analytics only if there is a current, explicit measurement requirement.

Deployment findings:

- **Confirmed:** the public site is served by Netlify with HTTPS and HSTS.
- **Confirmed:** the README's Netlify badge and static-hosting statement match the live response headers.
- **Confirmed:** no `netlify.toml`, `_headers`, GitHub Actions workflow, or checked-in runtime version file exists.
- **Conflict:** `package.json` includes `gh-pages` deployment even though the active host is Netlify.
- **Risk:** essential build behavior is hidden in a shell expression and Netlify UI configuration rather than a portable checked-in configuration.

**Decision:** retain Netlify and the custom domain. Use Astro's static `dist` output, a small checked-in `netlify.toml`, deploy previews, explicit headers, and explicit legacy redirects. Do not add SSR or a Netlify adapter unless a real server-side or Image CDN requirement later appears.

### Licensing and lineage

The README and license correctly acknowledge that the original site was bootstrapped from Karen Ying's MIT-licensed portfolio. A from-scratch V2 should stop inheriting the original design and component patterns. Preserve required historical attribution while any copied substantial portions remain; update the notice deliberately after the replacement rather than silently deleting attribution.

---

## B. Content inventory

### Preserve, reposition, rewrite, or remove

| Current item | Evidence/status | V2 treatment |
| --- | --- | --- |
| Josh Valentino name and domain | Confirmed | Preserve. Make the name the page `h1`, not a navigation `h3`. |
| “Engineer with experience in software, systems, and support” | Supported by supplied context | Preserve the core positioning, rewrite it with sharper role language and evidence. |
| Email address | Confirmed and intentionally public | Preserve once, prominently in the footer/contact close. Keep `mailto`; make copy-to-clipboard a progressive enhancement. |
| GitHub and LinkedIn URLs | Confirmed; footer currently inactive | Preserve in the global close/footer, not as a fake project. |
| RxSense experience | Confirmed employer context; current exact scale claim requires verification | Move from Projects to Professional Experience. Use sanitized, non-confidential evidence and a breadth-oriented role summary. |
| TrainWise AI concept | Current copy clearly says in development | Preserve as a possible supporting/in-development item only after current artifacts, ownership, and status are inventoried. Separate implemented Custom GPT behavior from standalone-app plans. |
| ApplyPilot AI concept | Current copy clearly says in development | Preserve as a high-potential in-development item. Verify repo, current implementation, privacy architecture, backend status, and Structured Outputs use before featuring. |
| Data-fy / Spotify analyzer | Public repository, README, responsive images, demo videos, live shell endpoint | Make this a primary software case study. It has much stronger engineering evidence than the current card exposes. |
| Incident Management System | Documentation link and exact outcome metric are public | Preserve as a primary or strong supporting project. Verify the 75% metric, personal role, team context, schema, testing, and deployment status. |
| Cloud Jams | Commented code and assets; not currently public on the site | Preserve as an audit candidate for automation/cloud work. Inspect its repository before deciding Featured/Supporting/Archive. |
| GitHub “project” card | Merely redirects to profile | Remove. GitHub is a global professional link, not a project. |
| `/datafydemo` | Three large local videos, route not linked from current project card | Retire as a standalone route. Curate short, compressed evidence or stills into the Data-fy case study. |
| Portrait and photography assets | Tracked but not currently rendered | Keep outside the public build until reviewed. A headshot is optional, not required for the design. |
| Generic AI-project illustrations | No provenance recorded; visually resemble stock/placeholder art | Remove from public presentation unless provenance and intentional relevance are established. Prefer authentic product UI, diagrams, or an honest text-only in-development treatment. |
| Current favicon/preview image | Existing brand artifacts | Review, then replace or deliberately retain. Generate a new 1200×630 social image for V2. |
| Inherited Karen Ying web manifest content | Incorrect | Replace immediately during migration. |

### Data-fy is materially undersold

The current card says “Java, React, Maven, Spring, Google Cloud, Docker, REST” and briefly mentions Spotify API/MVC. Its public repository already documents potentially stronger material that should be verified and reconstructed:

- OAuth token reception/verification;
- Spotify API pagination and recursive listening-history retrieval;
- multithreaded processing of data segments;
- a consolidated `SpotifyData` domain model;
- REST delivery to the frontend;
- centralized exception handling;
- stateless-backend refactoring;
- caching and API-call reduction;
- Docker build verification;
- Google App Engine and secret-management deployment work;
- multiple versioned iterations and 77 commits.

This is the model for future content work: inspect the repository, derive a complete engineering narrative, and then verify claims. Do not merely lengthen the current sentence.

### Weak or risky current claims

Move these to the future verification ledger before they reappear in V2:

- “supporting 400 million dollar organization software and systems” — verify the figure, time period, source, and whether it is appropriate to publish; rewrite the grammar even if retained;
- “reducing retrieval time by 75%” — verify how the baseline and result were measured;
- “standalone SaaS platform” for Data-fy — verify the product and operating model;
- “securely access user data,” “secure backend,” and “privacy-conscious local storage” — security/privacy language needs code and architecture evidence, not intent alone;
- every technology listed for employer work — verify actual use and whether it can be disclosed;
- every in-development capability — separate current behavior from target architecture.

### Missing content that most limits the current portfolio

- no professional role title, dates, employer narrative, or responsibilities;
- no resume link despite commented header code suggesting one was planned;
- no systems, networking, infrastructure, home-lab, automation, or operations case study;
- no explicit role/ownership field on projects;
- no explanation of problem, constraints, decisions, tradeoffs, testing, reliability, or lessons;
- no deployment-state model (live, retired, not public, in development);
- no authentic screenshots for new AI projects;
- no architecture diagrams;
- no project-detail routes;
- no distinction among featured, supporting, archived, and in-development work;
- no public explanation of AI-assisted engineering as a governed human-in-the-loop workflow;
- no private content-verification system;
- no repository-level documentation strategy linking portfolio claims to evidence.

### Duplicate and obsolete material

- About and Contact repeat the same email interaction.
- Desktop and mobile projects repeat the same content markup.
- Full, mini, and backup images are mixed without an asset policy.
- Color values are repeated in JavaScript, CSS, and Sass.
- Contact exists as its own route even though it contains one paragraph and the same email already shown on About.
- Generic `site` and `code` link labels repeat without project context.
- `Footer`, `About.css`, service-worker boilerplate, Enzyme setup, manifest boilerplate, and multiple CRA comments are inactive or obsolete.

---

## C. Current UX and design assessment

### What works

- The dark neutral base and restrained purple accent are directionally compatible with V2.
- Body text has strong light-on-dark contrast.
- The site is visually uncluttered and has no distracting marketing widgets.
- External project links use `noopener noreferrer`.
- The email interaction uses a native button with an accessible label and provides a `mailto` fallback.
- Tested widths did not produce horizontal overflow.
- Project-in-development status is stated in visible text rather than silently implied.

### Hierarchy and professional positioning

The home page contains no `h1` or `h2`; its only headings are navigation labels and decorative bullets marked as `h3`. The visitor sees a short generic paragraph in a large empty viewport. It does not quickly answer role, specialism, professional history, strongest evidence, or desired next step.

The current sentence relies on generic claims (“proven track record,” “exceptional communication,” “innovate,” “lifelong learning”) rather than technical specificity. It is not false on its face, but it reads like résumé filler and undersells the supplied experience breadth.

### Navigation and discoverability

The three-route model is simple, but it imposes a needless discovery step. A recruiter landing on `/` sees no project name, professional role, employer, GitHub link, LinkedIn link, or resume. Project discovery requires selecting “projects,” and the footer that would expose professional links is disabled.

For V2, anchor navigation should support a single-page scan. Optional case-study routes should deepen a project after discovery, never become the only way to discover it.

### Typography and spacing

Varela Round gives the site a friendly, youthful tone that conflicts with the requested restrained engineering identity. Ubuntu Mono works as a technical accent but is overused for project titles and receives heavy text shadows. Body copy is narrow on desktop, while tablet project cards remain only 300 px wide up to the Material UI `md` breakpoint, leaving excessive unused space at 768 px.

Spacing is dominated by viewport centering, large blank areas, fixed card margins, and card padding rather than a coherent vertical rhythm. The heavy black shadows age the design and reduce visual precision.

### Responsive behavior

The site avoids horizontal overflow at the tested widths, but it maintains two independent project layouts:

- 320–768 px: a 255–300 px text-only mobile card;
- 1024 px and above: a 762 px two-column desktop card;
- around the breakpoint, layout changes abruptly rather than adapting continuously.

At tablet width, content occupies a small central strip. Mobile omits project visuals entirely, so the presentation loses evidence rather than intentionally recomposing it. V2 should use one semantic project structure and reflow it with CSS grid/container queries; mobile should retain an optimized, purposeful visual when one exists.

### Accessibility

Runtime DOM inspection found zero `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, or `<footer>` landmarks on the home and projects routes. Additional issues:

- no primary heading;
- navigation text and decorative bullets misuse heading elements;
- project titles are generic `span` elements, not headings;
- cards are generic `div` elements, not articles;
- every desktop image has the unhelpful alt text “project”;
- generic link text (“site,” “code,” “open”) loses context out of sequence;
- no skip link;
- no explicit `:focus-visible` system;
- custom project “button” focus styles target a nested non-focusable `div`, so they do not reliably represent anchor focus;
- the 1.2-second route fade and waving emoji do not respect `prefers-reduced-motion`;
- the clipboard status text is always present and only changes opacity, which is less reliable than changing the live-region content;
- the site requires JavaScript for all content and displays “You need to enable JavaScript to run this app” otherwise.

The target for V2 should be WCAG 2.2 AA with semantic HTML first, not ARIA patches on generic containers.

### Project presentation

Every item receives nearly the same card weight, including employer experience, two early-stage concepts, shipped applications, and GitHub itself. The result communicates inventory, not judgment. Project imagery is inconsistent: employer logo, generic fitness/clipboard art, product screenshot, documentation screenshot, and GitHub graphic all behave as equivalent thumbnails.

The card’s strongest emphasized metadata is the technology stack. The problem, role, decision, outcome, and evidence are visually secondary or missing. This is the reverse of the desired professional signal.

### Overall assessment

The current site is clean enough to preserve during migration, but not strategically strong enough to iterate into V2 one card at a time. Its visual restraint is worth carrying forward; its information hierarchy, semantic structure, page model, component model, and content model should be replaced.

---

## D. Research summary and design consequences

Research was current as of the audit date. Primary sources were preferred; portfolio examples were used only to identify patterns, not as templates.

### Astro and framework guidance

- [Astro 7.0](https://astro.build/blog/astro-7/) is the current stable major line; the package registry listed 7.1.4 on the audit date. Astro 7's faster compiler, advanced routing, caching, and agent-oriented development improvements are useful ecosystem signals, but this portfolio does not need advanced routing, live content, caching providers, or server infrastructure.
- Astro's [islands architecture guidance](https://docs.astro.build/en/concepts/islands/) renders Astro components to static HTML and loads client JavaScript only for explicitly hydrated interactive components. This directly supports a zero-framework-runtime portfolio.
- Astro calls [Content Collections](https://docs.astro.build/en/guides/content-collections/) the preferred way to manage repeated structured content and recommends build-time collections where content is relatively static, performance matters, and image processing/type validation are useful. It also explicitly advises against a collection for only a few unrelated pages. Therefore projects should be a collection; one-off site settings and the small experience/capability datasets should remain typed local data.
- Astro's [image guidance](https://docs.astro.build/en/guides/images/) provides responsive `Image`/`Picture` output, generated sizes/formats, and explicit dimensions. This replaces the current mini/full placeholder system.
- React's [Create React App deprecation notice](https://react.dev/blog/2025/02/14/sunsetting-create-react-app) confirms that CRA has no active maintainers and recommends migration. This supports replacement rather than dependency-by-dependency repair.

### Accessibility and responsive guidance

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the target standard. New AA considerations include focus not being obscured and a 24×24 CSS-pixel minimum target or sufficient spacing; the [target-size explanation](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) recommends meeting the actual minimum even when an exception applies.
- MDN's [semantic HTML accessibility guidance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML) emphasizes native landmarks, logical source order, headings, links, buttons, and keyboard behavior. This directly informs the proposed page outline and single DOM structure.
- MDN's [reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility) says non-essential motion should be minimized or removed when requested. The intro must be skipped, not merely slowed, for reduced-motion users.
- Mobile-first responsive media can prevent small screens from paying for desktop assets; MDN's [HTML performance guidance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/HTML) and web.dev's [responsive-image discussion](https://web.dev/articles/preload-responsive-images) reinforce using `srcset`/`sizes` and avoiding oversized sources.

### Performance guidance

- web.dev's current [Core Web Vitals threshold explanation](https://web.dev/articles/defining-core-web-vitals-thresholds) keeps “good” thresholds at LCP ≤2.5 seconds, INP ≤200 ms, and CLS ≤0.1 at the 75th percentile. V2 should treat those as a floor. A small static portfolio should target near-zero CLS, minimal main-thread JavaScript, and materially faster LCP under typical conditions.
- The current 91 KB gzip application bundle is not catastrophic, but it buys almost no user value. Astro's static-first model, optimized media, self-hosted fonts, and removal of the global 1.2-second fade will have more impact than micro-optimizing current React components.

### Portfolio and documentation guidance

- GitHub's [job-search profile guidance](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume) recommends highlighting 3–5 relevant, diverse projects and making each easy to understand in the few minutes a hiring manager may spend. This supports a small featured set and demotion of weaker/supporting work.
- GitHub's [README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) says a README should explain what the project does, why it is useful, and how to get started. Portfolio case studies should add architecture, role, decisions, status, and evidence without turning every README into the same oversized template.
- A current IT recruiter perspective from [Business Centric Technology](https://www.bct-corp.com/what-employers-want-to-see-in-a-technical-portfolio-now-2/) emphasizes contribution, decisions, tradeoffs, outcomes, and readability across recruiter and technical audiences. This matches the brief and reinforces evidence-first project writing.

### Visual-pattern review

The review included [Linear](https://linear.app/), [Vercel](https://vercel.com/), [Lee Robinson](https://leerob.com/), [Brittany Chiang](https://brittanychiang.com/), and [Rauno Freiberg](https://rauno.me/).

Useful principles:

- Linear: quiet dark surfaces, strong typographic hierarchy, structural numbering, and purple used as orientation rather than decoration;
- Vercel: direct headline, clear content sequencing, and visual evidence attached to claims;
- Lee Robinson: concise identity and content-first navigation;
- Brittany Chiang: all important work/experience/contact discovery on one page, but the layout and palette are now heavily imitated and should not be copied;
- Rauno Freiberg: interaction craft can establish technical personality, but interaction density should be much lower here because recruiter comprehension is the primary goal.

The proposed design therefore uses editorial composition, real evidence, and small technical metadata. It explicitly rejects copying a recognizable developer-portfolio template or importing product-site visual spectacle.

### Hosting and analytics guidance

- Netlify's [Astro setup guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/astro/) confirms automatic Astro detection, `astro build`, and `dist`; it also confirms that a fully static site can deploy without the adapter.
- Netlify's [build configuration guidance](https://docs.netlify.com/build/configure-builds/overview/) favors checked-in build/publish settings for reproducibility.
- Google's [Universal Analytics notice](https://support.google.com/analytics/answer/10089681) confirms the current UA property is obsolete.

---

## E. Proposed Portfolio V2 information architecture

### Exact main-page structure

1. **Global header**
   - Josh Valentino wordmark/name linking to the top.
   - Anchors: Work, Experience, Capabilities, Contact.
   - One utility link: Resume, once a current reviewed resume exists.

2. **Hero / professional identity**
   - `h1`: Josh Valentino.
   - One concise positioning line centered on software, systems, and application engineering.
   - Two short sentences connecting production experience, full-stack work, automation/integrations, and human-governed AI-assisted delivery.
   - Primary action: View selected work.
   - Secondary action: Resume or GitHub, not a row of social icons.

3. **Selected Software & Application Work**
   - Two or three full featured project presentations.
   - Initial candidates: Data-fy, Incident Management System, and ApplyPilot only if its implementation evidence is sufficient by launch.
   - Each shows purpose, role, two or three engineering highlights, status/deployment truth, a real visual, and contextual links.
   - A compact “Additional work” list may include supporting/archived projects after review.

4. **Systems, Infrastructure & Automation**
   - A distinct layout for network, home-lab, infrastructure, production, integration, automation, or operational systems.
   - Do not publish an empty placeholder. Keep the architectural slot in V2 planning and enable it only when at least one credible artifact is ready.
   - Use diagrams, topology, operational constraints, or decision notes rather than an application screenshot template.

5. **Professional Experience**
   - Production Support Engineer, employer, and approximate tenure/dates after verification.
   - One positioning paragraph explaining the hybrid scope.
   - Four to six concise evidence-led responsibility/outcome statements.
   - A compact capability strip for software, systems analysis, APIs/data, testing/release, automation, and cross-functional delivery.
   - No employer logo-heavy timeline and no pasted full résumé.

6. **Technical Capabilities & Engineering Practice**
   - Grouped by work performed, not logo inventory:
     - Software & Application Engineering;
     - Production, Systems & Troubleshooting;
     - Data, APIs & Integrations;
     - Infrastructure, Automation & Delivery;
     - AI-Assisted Engineering & Verification.
   - Each group gets a one-sentence competency description and a restrained list of relevant technologies/practices.

7. **Contact / footer**
   - Direct email sentence and address.
   - GitHub, LinkedIn, and resume links once.
   - Copyright and a short build note only if it adds value.

### Optional detail routes

Use `/work/[slug]/` only for projects that have enough evidence for a real technical case study. Do not create a separate Projects landing page. The homepage must remain the complete discovery surface.

Suggested initial routes:

- `/work/data-fy/`
- `/work/incident-management-system/`
- later, `/work/applypilot/` when implementation evidence supports it.

Supporting, early-stage, or confidential work can remain summarized on the homepage without a detail route.

### Text wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ Josh Valentino          Work  Experience  Capabilities  Resume    │
├────────────────────────────────────────────────────────────────────┤
│ 01 / INTRO                                                         │
│                                                                    │
│ JOSH VALENTINO                                                     │
│ Software, systems, and application engineer.                       │
│ Concise positioning paragraph with breadth and working style.      │
│                                                                    │
│ [View selected work]   [GitHub or Resume]                          │
├────────────────────────────────────────────────────────────────────┤
│ 02 / SELECTED SOFTWARE                                             │
│                                                                    │
│ Data-fy             authentic product image / architecture cue     │
│ Purpose · role · decisions · evidence · deployment state           │
│ [Case study] [Source]                                              │
│ ────────────────────────────────────────────────────────────────── │
│ Incident Management System                                        │
│ authentic evidence        purpose · role · outcome · implementation│
│ [Documentation]                                                    │
│                                                                    │
│ Additional work: ApplyPilot / Cloud Jams / reviewed supporting work│
├────────────────────────────────────────────────────────────────────┤
│ 03 / SYSTEMS & INFRASTRUCTURE                                      │
│ Diagram or topology | constraints, decisions, operations, lessons  │
│ (Section publishes only when evidence exists.)                     │
├────────────────────────────────────────────────────────────────────┤
│ 04 / EXPERIENCE                                                    │
│ Production Support Engineer                  dates                 │
│ Hybrid scope statement + concise evidence-led highlights           │
├────────────────────────────────────────────────────────────────────┤
│ 05 / CAPABILITIES                                                  │
│ Software          Production/Systems      Data/Integrations        │
│ Infrastructure    AI-assisted engineering and verification         │
├────────────────────────────────────────────────────────────────────┤
│ CONTACT                                                            │
│ Email · GitHub · LinkedIn · Resume                                 │
└────────────────────────────────────────────────────────────────────┘
```

---

## F. Proposed visual system

### Aesthetic and composition

Use an editorial engineering aesthetic: near-black field, off-white type, restrained violet, precise alignment, and content-led asymmetry. The site should feel more like a carefully authored technical case-study index than a SaaS landing page or developer dashboard.

Primary design tools:

- type scale and line length;
- vertical rhythm;
- a consistent content grid;
- intentional negative space;
- evidence imagery and diagrams;
- fine rules and restrained metadata.

Avoid full-page gradients, glass panels, glow blobs, icon clouds, testimonial-style statistics, or a card around every paragraph.

### Color direction

Proposed starting tokens, subject to contrast testing in implementation:

```css
--color-canvas: #0b0a0f;
--color-surface: #121118;
--color-surface-raised: #181620;
--color-text: #f3f0f7;
--color-text-muted: #aaa5b2;
--color-rule: #2b2733;
--color-accent: #a78bfa;
--color-accent-strong: #8b5cf6;
--color-accent-soft: #c4b5fd;
--color-focus: #d8ccff;
```

Rules:

- body copy uses off-white/muted neutral, never purple;
- purple indicates links, focus, a small keyline, or selected metadata;
- `accent-strong` is for large shapes or decorative rules, not small text until contrast is verified;
- no green accent system;
- no broad neon glow; a 1–2 px soft violet edge may appear in the intro only.

### Typography

- **Primary:** self-hosted Inter Variable or an equivalently neutral, readable open-source grotesk.
- **Technical accent:** IBM Plex Mono or JetBrains Mono, subset and self-hosted.
- Use sans-serif for all narrative copy; mono only for section indices, status, period, and small technical metadata.
- Do not restore an all-monospace look.

Starting scale:

- hero: `clamp(3rem, 7vw, 5.75rem)` with controlled line height;
- section heading: `clamp(2rem, 4vw, 3.25rem)`;
- project heading: `clamp(1.5rem, 2.5vw, 2.25rem)`;
- body: `clamp(1rem, 0.3vw + 0.95rem, 1.125rem)`, 1.6–1.7 line height;
- small metadata: 0.75–0.875 rem, never below an accessible reading size merely for aesthetics;
- narrative line length: roughly 62–70 characters.

### Grid and spacing

- maximum shell: about 1180 px;
- desktop: 12-column grid with a 24–32 px gutter;
- main narrative columns: 6–8 grid columns;
- spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144 px;
- section separation: 96–144 px desktop, 64–96 px mobile;
- use optical alignment and shared left edges across hero, sections, project metadata, and footer.

### Project presentation

Use two visual patterns, not one universal card:

1. **Featured software case:** an editorial split row with authentic product evidence on one side and purpose/role/decisions/status on the other. Alternate composition only where source order remains logical.
2. **Supporting work:** compact ruled rows with title, one-line value, category, and status; expand to a detail route only when warranted.

Infrastructure/system work should use an annotated diagram or topology-led layout. Employer work should use text, capability groupings, and sanitized evidence—not a product-marketing card.

### Borders, radius, and elevation

- use 1 px neutral rules to establish structure;
- radius 6–10 px for media, diagrams, and genuinely bounded surfaces;
- reserve pill shapes for a status that benefits from containment, not every technology;
- eliminate large black drop shadows and text shadows;
- use slight background separation or a 1 px rule instead of card elevation;
- buttons should be compact rectangular links with 6–8 px radius and clear focus, not capsules.

### Technical motifs

Permitted motifs:

- section indices such as `02 / SELECTED WORK`;
- small project metadata in mono;
- a faint 24 or 32 px line grid limited to the hero edge or a diagram area;
- tiny node/tick marks on section rules;
- a single persistent line or fragment that the intro animation can resolve into.

Do not use fake terminal text, command prompts, Matrix code, scanlines over content, custom cursors, or animated decorative code.

### Desktop and mobile behavior

- One semantic DOM tree at every width.
- Mobile starts with identity and one action, then evidence; it does not reproduce desktop spacing at a smaller scale.
- Featured project media remains present but is resized/cropped intentionally.
- At tablet widths, use two balanced columns or a wider narrative column; never leave a 300 px card floating in 768 px.
- Navigation may collapse to a short two-row header if necessary, but avoid a menu button unless actual link count requires it.
- Touch targets should aim for at least 44×44 px even though WCAG's AA minimum is 24×24 px or sufficient spacing.
- At large widths, cap line length and composition; do not stretch text across the display.

---

## G. Intro-animation concepts

The page must be complete and usable without any animation code. The body itself provides the near-black initial field; the overlay must never supply an opaque blocking layer.

### Concept 1 — Signal convergence (preferred)

**Visitor sees:** 18–28 tiny violet line fragments and points appear near the edges of the first viewport, move inward along short controlled paths, briefly align into the hero's left rule/section marker, then dissolve as that real page element remains.

**Duration:** 720–850 ms total; no pause at full assembly.

**Implementation:** an `aria-hidden` inline SVG or small transparent canvas overlay with `pointer-events: none`. Prefer SVG for a fixed, deterministic fragment count and CSS/Web Animations transforms. Use a tiny TypeScript controller only for session behavior and cleanup. No library.

**Performance:** SVG fragments animated with `transform` and `opacity`; no layout properties. If canvas is chosen after prototyping, cap device pixel ratio and fragment count, stop `requestAnimationFrame` decisively, and remove the node.

**Accessibility:** skip entirely under `prefers-reduced-motion: reduce`; never receive focus; never alter document order; content remains present underneath from first paint.

**Disable path:** one `intro.enabled` build-time configuration value. The component renders nothing when false.

### Concept 2 — Trace resolve

**Visitor sees:** three or four thin violet paths trace across a small portion of the viewport, intersect once near the hero label, then retract into the permanent section rule.

**Duration:** 600–750 ms.

**Implementation:** inline SVG paths using stroke-dash animation plus a short opacity finish.

**Performance:** extremely light and deterministic; fewer elements than Signal convergence.

**Accessibility/disable path:** identical to Concept 1.

**Tradeoff:** safest and most restrained, but less distinctive and less aligned with the requested particle/fragment concept.

### Concept 3 — Fragment sweep

**Visitor sees:** a sparse diagonal field of small geometric glyphs sweeps across the canvas, briefly exposes a violet edge on the hero typography, and disappears.

**Duration:** 650–800 ms.

**Implementation:** CSS-transformed inline SVG groups or a small canvas.

**Performance:** still light, but full-viewport movement can feel more visually expensive and is easier to overdesign.

**Accessibility/disable path:** identical to Concept 1.

### Selected behavior

Prototype **Signal convergence** after the static site passes content, accessibility, responsive, and performance checkpoints. Play it **once per browser session**, not on every page load or case-study navigation. Session-level playback preserves delight without making repeat visitors repeatedly wait. If storage access fails, allow the brief CSS-timed effect once and guarantee independent CSS cleanup.

Engineering constraints:

- overlay is transparent and non-blocking;
- content is never `display:none`, visibility-hidden, or translated away;
- cleanup occurs both from animation completion and a hard ~1-second timeout;
- the overlay cannot capture pointer or keyboard events;
- reduced-motion and the feature flag bypass component initialization;
- failure mode is the normal page;
- the animation has its own component, script, styles, tests, and performance budget.

---

## H. Recommended Astro architecture

### Proposed directory tree

```text
.
├─ astro.config.mjs
├─ netlify.toml
├─ package.json
├─ tsconfig.json
├─ public/
│  ├─ favicon.svg
│  ├─ favicon.ico
│  ├─ robots.txt
│  ├─ _headers                 # only if netlify.toml is not used for them
│  └─ social/
│     └─ portfolio-default.png
├─ src/
│  ├─ assets/
│  │  ├─ fonts/
│  │  └─ images/
│  │     ├─ projects/
│  │     │  ├─ data-fy/
│  │     │  └─ incident-management/
│  │     └─ profile/
│  ├─ components/
│  │  ├─ BaseHead.astro
│  │  ├─ SkipLink.astro
│  │  ├─ SiteHeader.astro
│  │  ├─ Hero.astro
│  │  ├─ SectionHeading.astro
│  │  ├─ FeaturedProject.astro
│  │  ├─ SupportingProjectRow.astro
│  │  ├─ SystemsCase.astro
│  │  ├─ ExperienceSection.astro
│  │  ├─ CapabilityGroups.astro
│  │  ├─ ContactFooter.astro
│  │  └─ intro/
│  │     └─ IntroOverlay.astro
│  ├─ content/
│  │  └─ projects/
│  │     ├─ data-fy.md
│  │     └─ incident-management-system.md
│  ├─ content.config.ts
│  ├─ data/
│  │  ├─ capabilities.ts
│  │  ├─ experience.ts
│  │  └─ site.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ ProjectLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ 404.astro
│  │  └─ work/
│  │     └─ [slug].astro
│  ├─ scripts/
│  │  ├─ copy-email.ts
│  │  └─ intro.ts
│  └─ styles/
│     ├─ tokens.css
│     ├─ global.css
│     └─ prose.css
├─ tests/
│  ├─ accessibility.spec.ts
│  ├─ navigation.spec.ts
│  └─ intro.spec.ts
└─ internal-content/           # gitignored or, preferably, a separate private repo
   ├─ content-review.md
   ├─ claim-ledger.yml
   └─ research/
```

### Astro components and layouts

- `BaseLayout.astro` owns document structure, skip link, header, `<main>`, footer, and default metadata.
- `BaseHead.astro` accepts typed title, description, canonical, image, and page type. Detail routes receive project-specific metadata.
- Home sections remain small composition components, not a generic section/card system.
- `ProjectLayout.astro` provides only the shared case-study frame; project bodies remain content-led and can omit irrelevant sections.
- Render links as native anchors and email as `mailto` before enhancing clipboard behavior.

### Content collection and project schema

Use a local build-time collection defined in `src/content.config.ts` with Astro 7's `glob()` loader and Zod from `astro/zod`. Do not use live collections, a CMS, or remote data at runtime.

Recommended common frontmatter:

```text
title                 required
shortDescription      required; homepage summary
kind                  software | systems | infrastructure | automation
status                shipped | active | in-development | archived
featuredRank          optional integer
period                display string after verification
role                  concise ownership/collaboration statement
capabilities          small set of meaningful engineering themes
technologies          supporting metadata, not the story
links                 optional repo/live/docs objects with descriptive labels
deployment            live | retired | not-public | not-deployed
deploymentNote        optional truth-preserving explanation
media                  optional approved assets with alt text and purpose
detailEnabled         explicit boolean
```

The Markdown body can contain only sections relevant to the project, commonly Overview, Engineering, Decisions, Evidence, Status, and Next Steps. “Current implementation” and “Planned capabilities” must be visibly distinct for in-development work.

Do not put verification state, uncertain claims, private sources, or internal notes in public frontmatter. A claim is copied into the public collection only after publication approval.

### Experience and capability data

Experience and capability groups are small, different shapes and do not need collections. Keep them in typed `.ts` data modules. If experience later becomes multiple long-form entries, reconsider; do not preemptively build a résumé CMS.

### Assets

- Put transformable local images in `src/assets` so Astro can optimize them.
- Use `Image` or `Picture` with explicit sizes and accurate alt text.
- Keep decorative images at `alt=""` and outside the accessibility tree.
- Generate AVIF/WebP plus a sensible fallback where useful.
- Do not ship original 4500–8000 px images to card-sized contexts.
- Keep only approved public media in build-reachable folders.
- Curate video; prefer a poster/still plus optional native video, preload `metadata` or `none`, and do not load 23 MB globally.

### Animation isolation

`IntroOverlay.astro` renders at layout level but owns no page content. `src/data/site.ts` contains the single `intro.enabled` switch. `intro.ts` handles session/reduced-motion checks, runs the chosen primitive, and removes the overlay. Component CSS contains a hard cleanup animation so a script error cannot leave visual obstruction.

### Remaining React islands

**Initial recommendation: none.** Do not install `@astrojs/react` during the base migration. Clipboard enhancement and intro behavior require only small native scripts. If a future embedded project demo has genuinely complex interactive state, evaluate a React island independently and hydrate it with the least aggressive appropriate directive.

### TypeScript and quality strategy

- use `astro/tsconfigs/strict`;
- type all component props and local data;
- use the content schema as the project-data source of truth;
- run `astro check` and `astro build` in CI;
- add browser smoke tests for landmarks, heading outline, legacy redirects, links, and reduced motion;
- use Playwright with axe for key-route accessibility automation, supplemented by keyboard and screen-reader-oriented manual review;
- add a small Lighthouse CI or equivalent performance budget only after the baseline shell exists;
- avoid unit-test infrastructure where there is no meaningful logic to test.

### CSS strategy

Use native CSS with:

- global tokens in `tokens.css`;
- reset/base semantics in `global.css`;
- component-scoped styles for composition;
- `:focus-visible`, `prefers-reduced-motion`, and sensible forced-colors behavior;
- fluid type/spacing and grid/container queries where they materially simplify responsive composition.

Do not add Tailwind, Sass, CSS-in-JS, or a component library for this site.

### SEO and sharing

- unique title/description/canonical for homepage and case studies;
- Open Graph and Twitter metadata with accurate alt text;
- one intentional social preview image per featured case study where beneficial;
- sitemap only if detail routes justify it;
- structured heading outline and semantic articles;
- `Person`/`CreativeWork` JSON-LD only if implemented accurately and sparsely—never as keyword stuffing.

---

## I. Content expansion and verification system

### Privacy boundary

Do not put the working claim ledger in `src`, `public`, or a tracked directory of a public repository. A `docs/content-review.md` file would stay off the deployed website but would still be public on GitHub. Preferred options, in order:

1. a small separate private repository for content research and claim verification;
2. a privately backed-up, gitignored `internal-content/` directory;
3. a private document system with stable claim IDs referenced during drafting.

The public repository should contain only approved public copy and non-sensitive source references.

### Workflow

```text
raw information and artifacts
        ↓
evidence inventory + domain/role research
        ↓
comprehensive draft with claim IDs
        ↓
private inferred-claim ledger
        ↓
Josh verifies / corrects / rejects / requests evidence
        ↓
publication-approved copy
        ↓
Astro content/data + build validation
```

### Step 1 — Raw information

Accept incomplete notes, résumé bullets, repository URLs, screenshots, code, diagrams, role memories, infrastructure explanations, and deployment facts without requiring polished prose.

For each intake item, record source, date, owner, confidentiality concern, and related project/role.

### Step 2 — Evidence and research

Inspect the relevant artifacts and create an evidence map:

- repository files and history;
- README and issue/commit context;
- dependencies, routes, schemas, tests, CI, and deployment;
- screenshots and demos;
- relevant professional/domain terminology;
- comparable systems and expected engineering concerns.

Research can suggest missing responsibilities or useful terminology, but it cannot convert a generic industry norm into a confirmed personal claim.

### Step 3 — Comprehensive draft

Draft for completeness. Include problem, role, architecture, implementation, decisions, quality concerns, status, and outcome where evidence or reasonable inference supports them. Attach a stable claim ID to every nontrivial statement while it is under review.

Example internal sentence:

```text
[RX-014] Coordinated release validation across application, data, and partner-integration changes.
```

### Step 4 — Inferred-claim ledger

Recommended private fields:

| Field | Purpose |
| --- | --- |
| Claim ID | Stable reference such as `RX-014` or `DF-022`. |
| Public draft | Proposed publishable wording. |
| Subject | Experience/project/system. |
| Class | confirmed / inferred / planned. |
| Evidence | File, commit, screenshot, supplied statement, or research source. |
| Confidence | high / medium / low. |
| Verification question | Small, answerable prompt—not “write more prose.” |
| Sensitivity | public / sanitize / confidential / unknown. |
| Status | needs-review / approved / revised / rejected / needs-evidence. |
| Approved wording/date | Audit trail for publication. |

Rules:

- do not invent precise metrics, authority, certifications, clients, or scale;
- inferred responsibilities can remain in the draft, visibly flagged in the ledger;
- planned work is never grammatically presented as shipped;
- confidential employer work is summarized by capability and outcome without exposing internals;
- rejected claims remain in ledger history so they are not accidentally reintroduced;
- public copy is plain professional prose—claim markers and uncertainty labels never leak to the site.

### Step 5 — Verification

Review in bounded batches:

- first facts and confidentiality;
- then role/ownership;
- then outcome/metrics;
- then wording.

The reviewer should be able to approve, revise, reject, or request evidence for each claim. The system should ask narrow questions only where the answer materially changes publication.

### Step 6 — Publication gate

Only `approved` wording moves into `src/content` or `src/data`. Proposed future capabilities remain explicitly marked as planned in public content. Add a CI/content check that fails on internal markers such as `VERIFY`, `INFERRED`, claim IDs, or `needs-review` if they appear under public content paths.

### Application to professional experience

- reconstruct the hybrid scope using artifacts, supplied context, and later adjacent-role research;
- use market terminology where it accurately describes the work;
- verify each inferred responsibility and disclosure boundary;
- publish a concise experience section; preserve the fuller approved inventory for résumé and interview preparation.

### Application to projects and systems

- inspect code/config first;
- research the technical domain;
- reconstruct the engineering story;
- distinguish implemented, archived, not public, and planned;
- tailor evidence to the project type;
- approve public copy and then improve the repository README/detail page together so they do not contradict each other.

---

## J. Staged migration plan

Each stage has a checkpoint. Do not combine content approval, framework replacement, final visual polish, and animation in one review.

### Stage 0 — Preserve and baseline

- tag the current production state as Portfolio V1;
- capture desktop/mobile reference screenshots and route/link inventory;
- record current Netlify build settings, domain/DNS ownership, redirects, and environment variables;
- record build size and a baseline Lighthouse/accessibility run on the public site;
- decide which old URLs must remain compatible.

**Checkpoint:** V1 can be restored from git and Netlify; no content/design change.

### Stage 1 — Content model and private verification system

- create the private ledger outside the public build/repository boundary;
- inventory every current and candidate project;
- classify Featured / Supporting / In Development / Archived / Remove;
- reconstruct Data-fy and IMS first;
- create the initial experience claim set from supplied context and artifacts;
- verify exact public links, deployment state, metrics, confidentiality, and image provenance.

**Checkpoint:** approved homepage content outline and at least two publication-ready project records. No redesign required.

### Stage 2 — Astro foundation with neutral styling

- scaffold latest stable Astro 7 with strict TypeScript and Node version pin;
- create `BaseLayout`, semantic header/main/footer, metadata, 404, and legacy redirects;
- configure local fonts, tokens, Netlify static output, and checked-in build settings;
- add project collection schema and minimal sample entries;
- do not add React, a CSS framework, animation, or final art direction.

**Checkpoint:** Netlify preview builds real static HTML, old URLs resolve intentionally, JavaScript-disabled content is complete, and `astro check`/build pass.

### Stage 3 — Content and evidence integration

- implement homepage sections in final source order;
- add approved project content and optional detail routes;
- optimize selected authentic media through Astro;
- add deployment-state treatments such as “Original hosted deployment retired”;
- add professional experience and capability groupings only from approved copy.

**Checkpoint:** content-complete grayscale/neutral preview reviewed for truth, hierarchy, and scanability.

### Stage 4 — Visual system and responsive composition

- implement final palette, type scale, grid, rules, buttons, focus states, and project patterns;
- validate 320 px through large desktop, zoom/reflow, high text scaling, touch, and keyboard behavior;
- ensure mobile retains evidence and uses the same DOM/source order;
- create social preview assets and finalize favicon treatment.

**Checkpoint:** design review at phone, tablet, laptop, and large desktop; no animation yet.

### Stage 5 — Engineering quality gate

- semantic/heading/landmark review;
- axe automation plus manual keyboard/focus/contrast/reduced-motion review;
- responsive image and video audit;
- Lighthouse/performance budget and cross-browser checks;
- link checker and deployment-state check;
- metadata/canonical/social preview validation;
- decide whether any analytics is actually needed.

**Checkpoint:** WCAG 2.2 AA target met where practical; no critical accessibility errors; CWV lab results comfortably within “good”; no broken public links.

### Stage 6 — Intro animation experiment

- implement Signal convergence behind the one-line feature flag;
- verify once-per-session behavior, cleanup, failure mode, mobile cost, and reduced-motion bypass;
- compare enabled/disabled perception and performance;
- remove it if it does not materially improve the opening impression.

**Checkpoint:** explicit approval of both enabled and disabled states. Animation never blocks launch.

### Stage 7 — Deployment preview and cutover

- run a final content claim/export audit;
- validate Netlify preview headers, redirects, 404, robots, sitemap if present, and caching;
- verify domain and social previews;
- deploy without changing DNS provider or adding server infrastructure;
- monitor errors and field Web Vitals after launch.

**Checkpoint:** production sign-off and a documented rollback path.

### Stage 8 — GitHub and project documentation program

After the portfolio shell is stable:

- audit one repository at a time;
- align README, repository About metadata, screenshots, status, and portfolio case study;
- pin 3–5 strongest/relevant repositories;
- add architecture/testing/deployment documentation only where it adds evidence;
- revisit portfolio ordering when a project becomes materially stronger.

**Checkpoint:** each promoted repository is understandable independently of the portfolio.

---

## K. Risks and opinionated recommendations

### Remove or replace

- **Remove CRA.** It is deprecated, unmaintained, and unnecessary for static content.
- **Remove Material UI and React Router.** They solve layout/routing problems Astro and native CSS/HTML solve more simply.
- **Remove separate About, Projects landing, and Contact routes.** Their useful content belongs in the single-page narrative.
- **Remove the GitHub project card.** Put GitHub in the footer/header utility area.
- **Remove the Universal Analytics script.** Do not replace it automatically.
- **Remove the SPA catch-all rewrite after cutover.** Generate real pages and explicit redirects.
- **Remove generic stock-like AI project art.** It weakens credibility and may create licensing ambiguity.
- **Remove heavy drop/text shadows, the waving emoji animation, and global 1.2-second content fade.** They make the site feel older and delay comprehension.
- **Remove separate desktop/mobile project markup.** One accessible source of truth is mandatory.
- **Remove dead dependencies, inactive components, `.DS_Store`, and IDE metadata from tracking.** Expand `.gitignore` deliberately.

### Keep

- **Keep Netlify.** It is already working, static hosting matches the requirement, and migration does not justify a hosting change.
- **Keep the custom domain and existing route knowledge.** Redirect old paths so bookmarks do not become dead ends.
- **Keep the dark neutral / purple premise.** Replace the exact treatment, not the core preference.
- **Keep email, GitHub, and LinkedIn.** Show them once in a professional close.
- **Keep Data-fy and IMS as high-priority evidence candidates.** Their existing artifacts justify deeper reconstruction.
- **Keep in-development honesty.** Planned work can be valuable when clearly separated from current implementation.
- **Keep historical licensing attribution until the replacement's legal/source boundary has been reviewed.**

### High-risk claims and confidentiality

Employer work presents the greatest content risk. Do not use internal screenshots, customer names, proprietary architecture, incident details, or employer marks without appropriate permission. The RxSense image and exact organization-scale claim require review. Describe skills and outcomes at a sanitized level and maintain the private evidence ledger.

Exact security, privacy, and performance claims across personal projects require code-level verification. Words such as “secure,” “production,” “SaaS,” and “privacy-conscious” are professionally meaningful claims, not decorative adjectives.

### Content readiness risk

The architecture reserves a Systems & Infrastructure section, but current repository evidence does not supply a publishable case. Do not launch an empty or vague section to satisfy the blueprint. Prepare one strong infrastructure/system case in Stage 1 or omit the section until it is ready.

Similarly, do not feature ApplyPilot or TrainWise only because AI is current. Feature the project that has the strongest implemented engineering story. AI-assisted engineering should appear as a method of work and accountability, not as a theme or quota.

### Media and performance risk

The current media library is the largest preventable performance issue. Original source files can remain as private/archive evidence, but public variants must be generated for their display context. A 4.5 MB square illustration and 7972 px fitness photo have no place in a portfolio card. Three local demo videos should not be carried into the global output unchanged.

### Build reproducibility risk

The current build's Windows failure and UI-only Netlify settings make the deployment less portable than it appears. V2 needs a pinned Node version, one package manager/lockfile, checked-in Netlify config, platform-neutral scripts, and preview-build verification.

### Over-engineering risk

Astro 7 offers live collections, advanced routing, server rendering, route caching, adapters, and framework integrations. None are justified by the current requirements. Do not add a CMS, database, authentication, API, global state library, React integration, animation package, or design-system library.

### Design imitation risk

Dark developer portfolios frequently converge on the same Brittany-Chiang-style layout, neon accent, vertical social rail, and monospace labels. V2 should borrow the single-page clarity, not the composition. Its originality should come from Josh's hybrid experience, differentiated project types, evidence, and precise editorial layout—not novelty controls.

---

## Acceptance criteria for Phase 2 planning

Before implementation starts, confirm or supply only the decisions that materially affect architecture/content:

- preferred current resume artifact and whether it will be public;
- the initial Featured/Supporting project shortlist after repository audits;
- whether RxSense naming/logo and quantitative scale may be published;
- whether the IMS 75% metric is verifiable;
- whether Data-fy's public deployment should be restored as a link, labeled archived, or documented only;
- the first systems/infrastructure case to reconstruct;
- where the private claim ledger will live.

Everything else in this blueprint can proceed with normal engineering judgment and staged review.

## Final recommendation

Treat V2 as a content-and-evidence system expressed through a fast website. The site should make a coherent argument:

> Josh Valentino brings software development, production/application engineering, systems analysis, data/API work, automation, troubleshooting, and modern AI-assisted delivery into one accountable engineering practice.

The current repository contains enough foundation to begin—especially Data-fy, IMS, the established domain, Netlify deployment, and the honest in-development project notes—but it should not dictate the new architecture. Build the content verification pipeline first, migrate to static Astro second, establish the visual system third, and add the intro animation last.
