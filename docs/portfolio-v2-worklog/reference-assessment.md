# Independent reference assessment

Reference: [developer.org.tr homepage](https://developer.org.tr/). Scope: one read-only homepage inspection; no linked pages, forms, accounts, source copying, reused assets or GitHub requests. The web reader returned page content. Direct browser rendering was denied by network policy, so visual behavior, live-data implementation, performance and keyboard interactions are unverified.

The accessible page exposes career entries with timeline/grid labels, repository and package sections, a services FAQ, a technologies section and multi-page navigation. Some dynamic sections contain only headings or loading placeholders in that representation. A contribution calendar was not confirmed; it is evaluated separately as the user's proposed idea.

| Feature | Potential value | Engineering, UX, recruiting and maintenance judgment | Decision |
| --- | --- | --- | --- |
| Career timeline/grid | Can make several roles easier to scan | Extra modes add interaction, focus and mobile testing. A clear static chronology is easier to maintain and more useful to recruiters than a decorative switch for one main employer. | Defer |
| Repository/package panels | Convenient routes to deeper work | Provider-driven lists can be stale, fail, expose unwanted projects or distract with volume. Static curated summaries with direct sources offer stronger branding, predictable performance and no credentials or refresh service. | Adapt principle only; current portfolio already follows it |
| Services FAQ | Answers recurring commercial questions | Adds content and update obligations; generic answers repeat expertise. Appropriate questions belong on the separate services website when actual inquiry patterns justify them. | Reject for this portfolio |
| Technology listing | Fast familiarity scan | Unqualified badges can confuse exposure with professional depth. Contextual capability descriptions support technical screening better and avoid another icon dependency. | Reject an extra listing; keep current context |
| Extra blog/API destinations | Can demonstrate sustained publishing or a real product | More pages/services require actual content, availability, security, failure handling and ongoing user effort. A resume destination conflicts with the owner's explicit policy. | Defer new services/blog; reject resume route |

## GitHub contribution visualization

**Reject for this iteration.** Activity volume is a weak recruiting signal: private employment, offline systems work and contribution-credit rules can hide substantial engineering. A graph would compete with outcomes already documented by the selected projects.

A live implementation introduces a provider/API dependency, possible authentication/rate-limit concerns, privacy decisions and failure/loading states. A static build-time snapshot could avoid client JavaScript and fail safely, but still needs authorized data collection, an as-of date, refresh ownership and a useful stale-data policy. Credentials must never enter browser code. The existing profile link offers a reliable opt-in path without that maintenance burden.

No graph, feed, timeline switch, FAQ, animation or other newly evaluated feature was implemented. Any future adoption requires a separate explicit decision. Framework, security and performance quality of the reference itself were not inferred from its marketing text.
