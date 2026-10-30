---
title: Data-fy
shortDescription: Developed and deployed a full-stack Spotify analytics application with React, Spring Boot, and Google Cloud. Maintained the cloud deployment for over two years without experiencing downtime or operational issues. The original deployment is now retired.
displayOrder: 3
category: Software
status: archived
statusLabel: Retired deployment · 2023
visible: true
detailPage: true
role: Independent full-stack development and Google Cloud deployment
technologies: [Java, Spring Boot, React, Google Cloud, Spotify API, Docker]
engineeringHighlights:
  - Consolidated several Spotify resources into one response model, with bounded pagination and concurrent processing.
links:
  - label: View on GitHub
    href: https://github.com/valentinojosh/data-fy
    kind: source
deployment: retired
deploymentNote: Built in 2023 and hosted on Google Cloud for over two years without experiencing downtime or operational issues. The original deployment is now retired; source, tests, and historical interface captures remain available.
image: ../../Assets/datafy.png
imageAlt: Historical Data-fy interface with a radial top-genres chart and listening-data controls.
cardImagePosition: center top
---

## An application across service boundaries

I developed Data-fy's React dashboard, Spring Boot backend, Spotify integration, and container packaging, then deployed the application on Google Cloud. The application combines ranked artists, tracks, genres, recommendations, and a listening summary.

I maintained the Google Cloud deployment for over two years without experiencing downtime or operational issues.

The stateless backend combines several API resources into one response, with bounded pagination and concurrent processing. Separate secret providers support local, container, and historical cloud configuration.

## Preserving the project accurately

The original service is retired, so the interface shown here is a historical capture. Its listening-minutes figure is an estimate derived from track durations, rather than measured play-count history. Backend caching applies to secret lookups, not listening data.

The repository contains the source, architecture, tests, deployment history, and implementation limits.
