---
title: AI Driver
shortDescription: A deterministic driving simulator and controlled reinforcement-learning experiment comparing what a DQN agent observes.
displayOrder: 1
category: AI / Automation
status: shipped
statusLabel: Experiment complete
visible: true
detailPage: true
role: Independent simulator, learning pipeline, and experiment development
technologies: [Python, TensorFlow / Keras, DQN, NumPy, Pyglet]
engineeringHighlights:
  - Separated headless physics, ray sensors, collision detection, and ordered-gate progress from interactive playback.
  - Completed six controlled runs with validation-selected checkpoints and protected blind-track evaluation.
links: []
deployment: not-deployed
deploymentNote: Local simulation and completed experimental record. The authentic capture shows trained-policy playback.
image: ../../media/projects/ai-driver.png
imageAlt: AI Driver trained-policy playback showing the vehicle, ray sensors, track boundaries, and live telemetry.
---

## The engineering question

I built a driving environment and DQN training workflow to compare sensor-only observations with observations that add track context. The work combines simulation, learning infrastructure, experiment controls, evaluation, and reporting of generalization limits.

## A simulator independent of its display

The headless environment exposes a Gym-style reset/step interface. Five discrete controls drive shared vehicle physics, while eight normalized ray sensors measure track geometry. Movement substeps reduce the risk of tunneling through thin boundaries, and ordered gates distinguish valid progress from shortcuts.

Pyglet supplies manual driving, trained-policy playback, and an editable track interface without becoming a requirement for training or evaluation.

## Change one variable, preserve the experiment

The comparison used three seeds for each of two observation variants: sensor-only and track-aware. Network architecture, optimizer, rewards, actions, replay strategy, training layouts, and episode budgets were held constant across the six runs, totaling 12,000 logical training episodes.

Latest checkpoints preserve resumable state, including replay and random-number state. Separate best checkpoints are selected by deterministic validation on training tracks. Development layouts support inspection, while the blind final circuit is excluded from training and checkpoint selection.

## Results and limits

Both variants completed the nominal training layouts and retained strong completion under bounded starting-position perturbations. The sensor-only variant transferred more effectively to the development layouts in this experiment.

Neither variant completed the protected blind circuit. Both progressed beyond the random baseline, but the result shows the limits of zero-shot transfer from the training distribution. CSV/JSON evidence, reports, and charts preserve the comparison instead of presenting a successful training lap as general driving capability.
