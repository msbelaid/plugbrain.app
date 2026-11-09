---
title: "Every workaround, and how we closed it"
description: "Split screen, calculators, copy and paste. How people got around the challenge, and what changed."
date: 2026-11-07
stage: youngTree
---

Put a lock on something, and people will look for a way around it.

PlugBrain is no different. Every workaround we found made the app a little stronger.

The first one was split screen. Open the challenge on one half, and keep scrolling on the other. A contributor disabled split screen for the challenge in December 2025 ([#96](https://github.com/msbelaid/PlugBrain/pull/96)). Now, if you try it, the challenge comes back full screen ([#234](https://github.com/msbelaid/PlugBrain/pull/234)).

Then the calculator. Why do the math yourself when your phone can do it? So we blocked calculators ([#148](https://github.com/msbelaid/PlugBrain/pull/148)).

But we went too far. A user's calculators were blocked while shopping, hours after their last challenge. They uninstalled the app ([#236](https://github.com/msbelaid/PlugBrain/issues/236)). Now calculators are blocked only while a challenge is on screen ([#240](https://github.com/msbelaid/PlugBrain/pull/240)).

Then copy and paste. An answer pasted from somewhere else used to count. Now it doesn't. The field clears, and you get a new challenge ([#252](https://github.com/msbelaid/PlugBrain/pull/252)).
