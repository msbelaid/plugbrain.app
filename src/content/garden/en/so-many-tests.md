---
title: "Why PlugBrain has so many tests"
description: "A small math app with more than 300 tests. Here is why."
date: 2026-10-26
stage: youngTree
---

PlugBrain is a small app. It has more than 300 tests.

That sounds like too many. It isn't.

PlugBrain sits between you and your apps. If it breaks, it either blocks nothing, or blocks everything. Both are bad.

So every part has its own tests. The math challenges, the difficulty, the timers, the blocking.

Screenshot tests check that every screen still looks the way it should.

UI tests run the real app on two emulators, Android 11 and Android 14. They go through onboarding, permissions included, then a blocked app and a challenge.

Every pull request runs all of them, plus style and static checks. Nothing gets merged on red.

Tests also make the project open. Someone I've never met can send a change, and the tests tell us both if it broke something.

I also did it for my students. I wanted to show them how far testing can go, even on a small app.
