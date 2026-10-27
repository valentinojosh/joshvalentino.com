---
title: Data-fy
shortDescription: A full-stack Spotify analytics application connecting OAuth, concurrent API processing, and a visual listening dashboard.
displayOrder: 2
prominence: standard
category: Software
status: archived
statusLabel: Historical project · 2023
visible: true
detailPage: true
role: Independent full-stack development and cloud deployment
technologies: [Java, Spring Boot, React, Spotify API, Docker, Google Cloud]
engineeringHighlights:
  - Consolidated multiple Spotify responses into one domain model, with bounded pagination and concurrent processing.
  - Separated a stateless backend from the dashboard, with environment-specific secret providers.
links:
  - label: Source on GitHub
    href: https://github.com/valentinojosh/data-fy
    kind: source
deployment: retired
deploymentNote: The original hosted deployment is retired. The project remains a technical record, with no live demo advertised.
image: ../../media/projects/data-fy.png
imageAlt: Historical Data-fy interface with a radial top-genres chart and listening-data controls.
---

## What I built

Data-fy is an independent Java and React application built in 2023 to turn Spotify account data into ranked artists, tracks, genres, recommendations, and a summary dashboard. I worked across the service architecture, frontend, API integration, container packaging, and original cloud deployment.

## One response from several API resources

The Spring Boot backend exchanges an authorization code for Spotify access and assembles multiple API responses into a consolidated domain model. Genre ranking combines artist information, while recommendations are seeded from top tracks and enriched into full records.

A two-thread executor runs the listening-minutes calculation while the request thread fetches the other resources. The response waits for that calculation before returning. Offset-based pagination has an explicit 350-track boundary, keeping the work bounded.

## State and configuration boundaries

The backend does not retain user sessions or use a database. The React client supplies the access token and stores its resulting aggregate locally until logout. Backend Caffeine caching applies to Google Secret Manager reads; it does not cache users' listening data.

Separate secret providers support local, container, and historical Google Cloud environments. The original deployment paired a Netlify frontend with Google App Engine. Docker packaging preserves the frontend/backend boundary.

## Validation and limits

The source includes deterministic tests for input validation, pagination, incomplete responses, and external-fetch failures. The annual listening-minutes figure is a rough extrapolation from top-track durations, rather than a measurement of Spotify play-count history.

The hosted service is retired. Historical screenshots describe the original product.
