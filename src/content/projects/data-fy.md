---
title: Data-fy
shortDescription: A cloud-hosted listening-history analyzer that turns Spotify data into an explorable visual summary.
displayOrder: 2
prominence: standard
category: Software
status: archived
statusLabel: Deployment retired
visible: true
detailPage: true
role: Application architecture, backend services, frontend, and deployment
technologies:
  - Java
  - Spring Boot
  - React
  - Spotify API
  - Docker
  - Google Cloud
engineeringHighlights:
  - Designed an OAuth-aware service that retrieves paginated listening history and consolidates it into a stable domain model.
  - Added concurrent processing and caching to reduce repeat API work while keeping the backend stateless.
links:
  - label: Source on GitHub
    href: https://github.com/valentinojosh/data-fy
    kind: source
deployment: retired
deploymentNote: The original hosted deployment is retired; source and product evidence remain available.
image: ../../media/projects/data-fy.png
imageAlt: Data-fy interface showing a radial chart of Spotify genres and controls for selecting listening data.
---

## Overview

Data-fy explores a listener's Spotify history through artist, genre, track, and listening-pattern views. The project spans authentication, third-party API access, backend data processing, frontend visualization, and cloud delivery.

## Engineering

The Java and Spring Boot backend receives and verifies Spotify access, walks paginated listening-history responses, and maps multiple API payloads into a consolidated domain model. Processing was split across data segments where concurrency improved the response path, while caching reduced avoidable calls to an external API.

The frontend consumes the backend through REST endpoints and presents the resulting data as interactive visual summaries. The system evolved toward a stateless service boundary so frontend and backend deployment could remain independently understandable.

## Delivery and status

Container builds were used to verify deployment behavior before publishing to Google Cloud. The original hosted application is no longer maintained as a live service, so the portfolio links to source rather than presenting a broken demo.
