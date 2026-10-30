---
title: BetterDates.ai
shortDescription: An AI-driven date and activity planning project. The local prototype matches individual or group preferences, constraints, and feedback.
displayOrder: 5
category: AI / Automation
status: in-development
statusLabel: In development · Local prototype
visible: true
detailPage: true
role: Independent application architecture, recommendation logic, and research workflow development
technologies: [Python, SQLite, Browser UI, AI provider adapters]
engineeringHighlights:
  - Implemented explainable ranking and a review workflow for researched activity information. Self-hosted model integration is planned.
links: []
deployment: not-public
deploymentNote: A local prototype is implemented. No public demo is offered here; self-hosted model integration remains planned.
---

## Recommendations with a reason

I am developing BetterDates.ai to help people find dates and activities that fit their preferences and practical constraints. The local Python application uses SQLite to keep preference evidence, feedback, and application state under the operator's control.

Implemented deterministic ranking explains how individual or group preferences, hard constraints, uncertainty, and feedback affect a recommendation. A research-review workflow separates proposed activity information from accepted facts.

## AI direction and current limits

The implementation has a provider-independent AI task boundary and a manual result bridge. Deterministic recommendations work without a configured provider; this does not mean AI-generated research is running by default.

Self-hosted AI models are my preferred direction for personalized planning. That integration remains planned. The project is in development, and this portfolio does not publish its private runtime data or provide a live demo.
