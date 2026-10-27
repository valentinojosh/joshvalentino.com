# Handoff

- Branch: `feat/portfolio-v2-astro` only.
- Initial task HEAD: `590e41e9b18b73868a3e95438b364819b6a8eb97`; latest implementation commit `0081d895`, audit commit `e6a71433`. A documentation-only checkpoint follows; resolve latest local commit with `git rev-parse HEAD` and compare to the Desktop export manifest.
- Completed: phases A–E, full source review, experience/expertise/education, four featured case studies, responsive refinements, metadata/sitemap, build regressions and actual browser/visual review.
- Review state: implementation is ready for user review. Desktop export is generated after the final documentation checkpoint; its manifest identifies the authoritative final snapshot. If absent, generate it from the initial baseline above before closing the task.
- Next three actions: review copy/design locally; confirm any new public source links before adding them; perform hosted release checks only after separate authorization. Do not create a speculative cosmetic backlog.
- Validation completed: final Astro check/build, four build tests, 35 browser viewport/page samples, functional/no-JS/motion checks, privacy/routes/assets, unchanged pre-existing files and external Git states. See validation.md for limits. Revalidate only when subsequent changes justify it.
- Restrictions: no remote GitHub commands/contact; no deployments; external repositories and resume sources read-only; preserve all existing untracked files; no history rewrite or automatic stash. Desktop review export is explicitly required, outside the repository as a deliverable only.
- Baselines for pre-existing files and external Git states are saved in ignored task scratch `tmp/portfolio-v2-task-20261027/`.
- Local review preview uses the isolated build at `http://127.0.0.1:4327/` when the task-started preview server is running. It is not a deployment. The root `.astro`/`dist` artifacts intentionally remain at their pre-task contents.
