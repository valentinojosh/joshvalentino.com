---
title: AI Driver
shortDescription: A driving simulator and controlled reinforcement-learning experiment exploring how observation design affects a learned policy.
displayOrder: 2
category: AI / Automation
status: shipped
statusLabel: Experiment complete
visible: true
detailPage: true
role: Independent simulation, learning pipeline, and experiment development
technologies: [Python, TensorFlow / Keras, DQN, NumPy, Pyglet]
engineeringHighlights:
  - Built headless simulation and reproducible training, then compared two observation variants across six controlled runs.
links:
  - label: View on GitHub
    href: https://github.com/valentinojosh/ai-driver
    kind: source
deployment: not-deployed
deploymentNote: Completed local experiment with authentic trained-policy playback, reproducible reports, and documented generalization limits.
image: ../../media/projects/ai-driver.png
imageAlt: AI Driver trained-policy playback showing the vehicle, ray sensors, track boundaries, and live telemetry.
---

## From simulation to a controlled comparison

I built the driving environment, ray sensors, collision handling, training workflow, and interactive playback. Separating simulation from rendering made the same vehicle behavior usable for manual driving, headless training, and deterministic evaluation.

The experiment compared sensor-only and track-aware observations under equal training budgets: three seeds per variant, six runs, and 12,000 logical training episodes. Resumable and validation-selected checkpoints served different purposes, while a protected blind circuit stayed outside training and model selection.

## What the result showed

Both variants mastered the nominal training layouts. Sensor-only observations transferred better to the development layouts in this experiment, while neither variant completed the blind circuit.

GitHub holds the implementation, authentic playback captures, methodology, result tables, and retrospective. Those details explain both the useful result and its limits.
