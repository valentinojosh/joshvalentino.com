---
title: Incident Management System
shortDescription: A full-stack operational records system created to replace a paper-based incident workflow.
displayOrder: 3
prominence: standard
category: Software
status: shipped
statusLabel: Documentation available
visible: true
detailPage: true
role: Requirements, application development, data model, and workflow design
technologies:
  - React
  - Node.js
  - SQL
  - REST APIs
  - Agile delivery
engineeringHighlights:
  - Translated an existing paper workflow into a searchable digital process with distinct employee and administrative paths.
  - Reduced record-retrieval time by 75% while eliminating the form-loss risk of the previous process.
links:
  - label: System documentation
    href: https://valentinojosh.github.io/ims-documentation/
    kind: documentation
deployment: not-public
deploymentNote: The operational application is not publicly deployed; project documentation remains available.
image: ../../media/projects/incident-management.png
imageAlt: Incident Management System login screen with separate administrator and employee entry points.
---

## Overview

The Incident Management System replaced a paper-based records process with a searchable application. Its public evidence focuses on the workflow and implementation without exposing operational data from the organization it was built to support.

## Engineering

The project began with workflow analysis: identifying the information captured on paper, the differences between employee and administrative use, and how records needed to be searched later. A React interface, Node.js service layer, and SQL data store turned those requirements into a maintainable full-stack system.

The application separated user-facing data entry from administrative review while keeping the data contract explicit through REST endpoints. That architecture supported clearer validation and a more consistent record-retrieval workflow than the process it replaced.

## Status

The application itself is not a public demo. The linked documentation preserves authentic interface and implementation evidence without publishing private operational records.
