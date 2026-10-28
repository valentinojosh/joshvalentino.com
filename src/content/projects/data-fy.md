---
title: Data-fy
shortDescription: A full-stack Spotify analytics application connecting account authorization, API processing, and an interactive listening dashboard.
displayOrder: 3
category: Software
status: archived
statusLabel: Retired deployment · 2023
visible: true
detailPage: true
role: Independent full-stack development and original cloud deployment
technologies: [Java, Spring Boot, React, Spotify API, Docker]
engineeringHighlights:
  - Consolidated several Spotify resources into one response model, with bounded pagination and concurrent processing.
links:
  - label: View on GitHub
    href: https://github.com/valentinojosh/data-fy
    kind: source
deployment: retired
deploymentNote: Built in 2023. The original hosted service is retired; source, tests, architecture, and historical interface captures remain available.
image: ../../media/projects/data-fy.png
imageAlt: Historical Data-fy interface with a radial top-genres chart and listening-data controls.
---

## An application across service boundaries

I developed Data-fy's React dashboard, Spring Boot backend, Spotify integration, container packaging, and original cloud deployment. The application combines ranked artists, tracks, genres, recommendations, and a listening summary.

A stateless backend assembles several external resources into one response. Bounded pagination and a parallel calculation keep that processing explicit; secret providers separate local, container, and historical cloud configuration.

## Preserving the project accurately

The original service is retired, so the interface shown here is a historical capture. Its listening-minutes figure is an estimate derived from track durations, rather than measured play-count history. Backend caching applies to secret lookups, not listening data.

The repository contains the source, architecture, tests, deployment history, and implementation limits.
