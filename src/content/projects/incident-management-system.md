---
title: Incident Management System
shortDescription: A four-person academic team project that translated a local organization's paper reports into a full-stack browser application.
displayOrder: 3
category: Software
status: archived
statusLabel: Academic team project · 2022
visible: true
detailPage: true
role: Software development contributor within a four-person team
technologies: [React, Node.js, Express, MySQL, REST APIs]
engineeringHighlights:
  - The team delivered six report workflows with structured forms, administrator review, and CSV export.
  - Connected form state, JSON requests, API controllers, and relational persistence while preserving familiar document layouts.
links:
  - label: Historical system documentation
    href: https://valentinojosh.github.io/ims-documentation/
    kind: documentation
deployment: retired
deploymentNote: Completed in spring 2022 and permanently retired; preserved as a historical team project.
image: ../../media/projects/incident-management.png
imageAlt: Historical IMS entry screen with separate administrator login and employee report access.
---

## A real workflow, implemented as a team

I contributed to a four-person college software-engineering team that continued a multi-semester incident-reporting project for a local recreation organization. Completed in spring 2022, the shared application translated paper forms into browser entry, retrievable records, and administrator tools. The architecture and delivered features described here belong to the team as a whole.

## From familiar forms to structured records

The client wanted the web forms to retain the terminology, section order, and visual familiarity of the existing paperwork. The resulting React client supported six specialized report types, with five available through the employee workflow and all six through the administrator workflow.

JSON requests connected form state to an Express route/controller layer and MySQL models. The widest workflow mapped more than one hundred fields across the interface, API, and persistence. Administrator views supported reviewing records, exporting CSV data, and managing administrator accounts.

## Validation and outcome

The team's historical Postman matrix contained 30 API cases spanning collection and item reads, report creation, and deletion. Testing and client discussions estimated report retrieval to be approximately 75% faster than the paper process. This was a project estimate, rather than a controlled production benchmark.

## Lessons and status

The project developed practical experience in requirements, complex forms, API/data contracts, and shared integration work. A comparable system today would need stronger centralized server validation and authorization, automated tests, accessibility, and explicit privacy and retention controls. Separate employee and administrator navigation alone does not establish a secure authorization boundary.

IMS is permanently retired. Historical documentation and interface captures preserve the team's implementation without offering an operational application or publishing incident records.
