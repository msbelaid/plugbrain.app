---
title: "A small app built like a big one"
description: "Why a small math app is split into modules, like a large project."
date: 2026-10-31
stage: youngTree
---

PlugBrain could fit in one folder. It doesn't.

It is split into six modules: the app itself, the challenges, the blocking, app usage, storage, and the design system.

Each module does one job. Each one can be tested on its own.

Why so much structure for a small app?

Because small apps don't stay small. Every new idea touches the code: a new challenge type, a new screen, a new way to block.

When each part has clear borders, a change in one place doesn't break another.

It also makes the code easier to read. A new contributor can open the challenges module and understand it, without knowing the rest of the app.

I also did it for my students. I wanted to show them what a well-structured app can look like, even a small one. The same structure they will meet in big projects at work.
