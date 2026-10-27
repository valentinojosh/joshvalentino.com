---
title: Systems Lab
shortDescription: Hands-on engineering across segmented networking, self-hosted services, PC integration, storage recovery, and Windows deployment.
displayOrder: 4
category: Systems / Infrastructure
status: active
statusLabel: Ongoing systems practice
visible: true
detailPage: true
role: Independent system design, integration, operation, and validation
technologies: [Windows, Jellyfin, Networking, DNS filtering, Linux recovery tools]
engineeringHighlights:
  - Operates a LAN-restricted Windows media service with separate administration and viewing accounts and tested recovery.
  - Completed Phase 1 of a high-end simulator PC; custom cooling and the full simulator expansion remain planned.
links: []
deployment: not-public
deploymentNote: Physical and local-network systems. The simulator PC's Phase 1 is complete, with later expansion planned.
image: ../../media/projects/systems-lab.webp
imageAlt: Completed air-cooled Phase-1 simulator PC with a white chassis, installed GPU, and controllable fan layout.
---

## Engineering beyond the application

Systems Lab brings together systems I have designed, built, configured, operated, repaired, or recovered. The common approach is to establish the requirements, understand the dependencies, commission a usable baseline, and validate both normal operation and recovery.

## Segmented home network

The network separates trusted computers and household services from less-trusted IoT devices. An OpenWrt-based gateway, managed wired distribution, and conservative DNS filtering support that boundary while preserving everyday compatibility and low-latency use.

The implemented boundary prevents IoT-side access to trusted endpoints and the local media service. Further review of exact segmentation, firewall, and congestion settings remains a separate validation task.

## Self-hosted service and recoverability

A repurposed Windows machine serves as both a Jellyfin host and a directly connected home-theater PC. NVIDIA hardware acceleration handles supported transcode stages. The service stays on the LAN, and normal viewing accounts are separated from administration.

Storage grew from 2 TB to 4 TB to 8 TB. Reviewed Robocopy operations and representative-file checks supported the transitions. Tested cold/off-site media and successful restoration of Jellyfin state provide recovery evidence beyond simply having a backup copy.

## Racing simulator PC: Phase 1 complete

I assembled and commissioned a Ryzen 7 9800X3D / RTX 5090 platform with rear-connector integration, an 18-fan iCUE LINK installation, firmware and memory configuration, Windows 11 Pro, drivers, and stability checks. The air-cooled Phase 1 was handed over operational.

Custom CPU/GPU water cooling and the complete multi-display simulator remain future phases. Completing the baseline first established a working reference before adding those variables.

## Recovery, deployment, and repair

Windows/macOS storage recovery prioritizes protecting the source, inspecting health evidence, imaging or cloning when appropriate, and validating recovered files before destructive repair. Bootable Linux tools provide offline access independently of the installed operating system; this is separate from the Windows-hosted media service.

Related work covers reproducible Windows installation media, firmware and driver reconciliation, workstation integration, component repair, and post-change functional checks. Private topology, device identifiers, access details, and raw configurations stay outside the portfolio.
