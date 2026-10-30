# Original React portfolio: visual and feature inventory

Reference: local `main` at `c0f80b15`. Inspected `App.js`, `App.css`, `index.css`, every component and stylesheet, `constants.js`, entry point, public metadata, and asset inventory before implementation. The unchanged reference runs in ignored `tmp/react-parity/original/`, extracted with `git archive main`; its locked dependencies were installed **offline** from the existing npm cache.

## Routes and behavior

| Original route | Rendered behavior | Astro parity |
| --- | --- | --- |
| `/`, `/about` | Same short About paragraph; Contact CSS, no portrait | Same shared native component and centered layout, updated copy |
| `/projects` | Six vertical cards: RxSense, two tentative AI projects, Data-fy, IMS, GitHub | Same card language, verified project selection; RxSense summary directs to Experience |
| `/contact` | Short centered text, copy-email button, separate mailto link | Original copy interaction/toast with truthful failure state and no-JS mailto fallback |
| `/datafydemo` | Base, Mobile, Error videos with controls; 700×400 desktop and 200px-tall mobile players | All three original files, native HTML video, same card scale; restored real route |
| unmatched | Centered Ubuntu Mono error text with emoji | Static 404, same text and added recovery link |
| Header | Logo→home, about/projects/contact click links; slash separators; purple active/hover dot | Same behavior, Experience added in the same convention; current links remain usable |

There are no menus, scroll reveals, filters, modals, themes, carousel, API activity queries, or intro overlays in the actual original. Footer JSX is commented out in `App.js`; the footer component is not visible. `About.css` and its wave keyframes/portrait styling are unused by the actual About component. Do not introduce either as a supposed parity feature.

## Visual specification

- Canvas `#2a2b2e`; text `#f5f5f5`; rules `#f5f5f5`; purple `#9c88f7`; demo accent `#ff7c7c`. Original alternate pink/blue/yellow constants exist but are not the visible project accent.
- Root font size 62.5%; body 16px. Varela Round regular for body/nav; bold is browser-synthesized in the original. Ubuntu Mono 400/700 for stack labels, project titles, and pill text. Original font source is Google Fonts; the same typefaces now ship locally.
- Header 80px high. Desktop logo 50px from left, 30px from top; right navigation 50px from right. Original nav h3 text 18.72px, 5px link/separator spacing; dot margin-top −5px with a 200ms opacity transition.
- Below 600px the logo disappears and navigation centers. At 600–959px original Material UI rules produce an absolutely right-aligned navigation; preserve this breakpoint. Four links require 16px nav at narrow phone sizes.
- About/Contact content max-width 400px plus 50px side padding; desktop centered in `100vh − 80px − 35px`. Body paragraph has default 16px margins and normal line-height. At ≤480px content is top-aligned with 50px padding.
- Desktop project outer width 762px (700px content + 60px padding + 2px border), margin 25px, 5px radius, 1px light border, 10px/10px/20px black shadow. Flex columns vertically centered.
- Left column min-width 330px plus 30px right padding; image max 300×170px, 3px radius, 5px black shadow. Stack is 35px/1fr grid with 20px gap, 20px vertical padding, 18px Ubuntu Mono label and 16px Varela value capped at 140px.
- Purple divider 1×300px. Right column 30px left padding; title 30px bold Ubuntu Mono with 5px black shadow; paragraphs 15px Varela, left aligned, normal line-height.
- Pill links 60×25px, 25px radius, 1px accent border, 10px horizontal margins. Text 14px italic Ubuntu Mono. Hover adds black shadow/text-shadow. External buttons already use new tabs and `noopener noreferrer`.
- Below 960px original cards switch to 300px max border-box width, 15px/20px padding, 24px title, 14px/12px stack label/value, 50×20px pills, horizontal 200×1px divider, and 15px copy. **Original hides every project image on these sizes.**
- Fade in: 1200ms Material UI standard easing. No animated background. Clipboard status: fixed at horizontal center, 24px from bottom, 1400ms visibility, 180ms fade, subtle dark rounded box.

## Assets and links

- Preserve original `rx.jpg`, `datafy.png`, `im.png`, `github.png` and all three MP4 recordings. No recreated screenshot, replacement illustration, or live third-party widget.
- `github.png` is an entire profile screenshot containing the full-year contribution grid, **not** live data. Keep its exact bytes, original card, and profile link. On mobile expose the image and a full-size local-image link as a deliberate accessibility improvement.
- Source contains unused photography, portrait, backup/mini screenshots, stock workout/clipboard imagery, Yahtzee, StatsDB, Cloud Jams, and videos. Those assets remain available; their existence alone does not establish a project for publication.
- Original Data-fy source link and IMS documentation destination preserved. Original stale deployment and unsupported organization/performance claims replaced with sourced status and attribution.
- No external links were opened in QA; outgoing browser requests are blocked except localhost and locally fulfilled original-font requests.

## Comparison method

Captured the actual React app at 390×900, 768×1024, and 1440×900 for About, Projects, Contact, demos, and 404. Font requests are fulfilled from the locally saved original fonts, keeping comparisons independent of the network. Astro uses those same local files. Separate identical-content fixtures isolate geometry from intentional content changes. QA results and deliberate differences are in `validation.md`.
