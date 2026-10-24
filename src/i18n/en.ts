// All page copy lives here so a translation is one new file (e.g. fr.ts) plus a line in index.ts.
// Strings marked "html" may contain <b>, <a> or <code>; everything else is plain text.

export default {
  meta: {
    title: 'PlugBrain: free Android app blocker with math challenges',
    description:
      'Free, open-source Android app blocker that locks distracting apps behind a quick math challenge. The more you scroll, the harder it gets. No ads, no tracking.',
  },
  nav: {
    how: 'How it works',
    difficulty: 'Difficulty',
    privacy: 'Privacy',
    faq: 'FAQ',
    getApp: 'Get the app',
    skip: 'Skip to content',
  },
  stores: {
    getItOn: 'Get it on',
    play: 'Google Play',
    fdroid: 'F-Droid',
    alsoOn: 'Also on',
    izzy: 'IzzyOnDroid',
    apk: 'APK from GitHub',
    or: 'or',
  },
  hero: {
    eyebrow: 'Free, open-source app blocker',
    title: 'Plug your brain back in.',
    tagline: 'Solve a little math. Scroll a lot less.',
    // html
    sub: 'The more you scroll, the <b>harder</b> the math. Step away, and it gets <b>easier</b> again.',
    proof: ['No ads', 'No tracking', 'No internet needed'],
  },
  demo: {
    hint: 'Try it: solve a few and watch the level climb, or leave the app to bring it back down.',
    lockedApp: 'Time is up for this app',
    title: "Let's slow down",
    placeholder: 'Write your answer',
    inputLabel: 'Your answer',
    check: 'Check answer',
    leave: 'Leave app',
    keepScrolling: 'Keep scrolling',
    difficulty: 'Difficulty',
    harder: 'Harder',
    easier: 'Easier',
    wrong: 'Not quite. Try again.',
    empty: 'Type a number first.',
    unlocked: 'Unlocked. The next one will be harder.',
    leftApp: 'Good call. Each break brings the level back down.',
    atMin: "Good call. You're at the easiest level already.",
  },
  how: {
    eyebrow: 'How it works',
    title: 'Three steps, then it stays out of your way.',
    steps: [
      {
        title: 'Pick what distracts you',
        text: 'Choose the apps that eat your time. PlugBrain shows how long you spend in each one.',
        alt: 'App selection screen listing apps with time spent in each',
      },
      {
        title: 'Choose how often and how hard',
        text: 'Decide how long you can stay in those apps before a challenge, or get one as soon as they open. Pick a starting level from Beginner to Expert.',
        alt: 'Sheet for choosing the minimum difficulty, set to Intermediate level 5',
      },
      {
        title: 'Solve a little math to keep going',
        text: 'When your time is up, a quick problem stands between you and the feed. Solve it, or take the hint and leave.',
        alt: 'Challenge screen asking 25 + 17 with a Leave App button',
      },
    ],
  },
  difficulty: {
    eyebrow: 'Progressive difficulty',
    title: 'The more you scroll, the harder it gets.',
    titleB: 'Step away, and it gets easier again.',
    lead: 'Every challenge you solve makes the next one a level harder. Time away brings it back down, but never below the starting level you picked.',
    up: { title: 'Keep scrolling', text: 'Each solved challenge adds a level.' },
    down: {
      title: 'Take a break',
      text: 'The longer you stay away from distracting apps, the easier the next challenge gets.',
    },
    alt: 'PlugBrain home screen: PlugBrain is on, 11 minutes left before the next challenge, next challenge at level 4',
  },
  contrast: {
    eyebrow: 'Why math?',
    title: "A timer you tap past isn't friction.",
    lead: 'Most blockers show a countdown with a button to ignore it, and muscle memory taps it before you have thought about it. A math problem needs your attention for a few seconds, and those seconds are often enough to change your mind.',
    them: {
      title: 'Typical limits',
      items: ['A countdown or a daily quota', 'An "ignore" or "one more minute" button', 'Same rules whether you relapse once or ten times'],
    },
    us: {
      title: 'PlugBrain',
      items: ['A problem you have to think through', 'You type the answer, no multiple choice', 'Gets harder the more you come back, easier when you stay away'],
    },
  },
  privacy: {
    eyebrow: 'Private by design',
    title: 'No ads. No tracking. Just a little math.',
    lead: "PlugBrain doesn't ask for internet access at all, so nothing you do can leave your phone.",
    items: [
      { icon: 'wifi-off', title: 'No internet permission', text: 'The app cannot send anything anywhere. Android enforces it.' },
      { icon: 'eye-off', title: 'No tracking or analytics', text: 'No trackers, no crash reporters, no data collected or shared.' },
      { icon: 'ban', title: 'No ads', text: 'Not now, not later. There is nothing to sell.' },
      { icon: 'user-off', title: 'No account', text: 'Install it and go. Your settings stay on your phone.' },
      { icon: 'code', title: 'Free and open source', text: 'GPL-3.0 licensed. Read the code, build it yourself, improve it.' },
      { icon: 'shield', title: 'On F-Droid', text: 'Built from source by F-Droid, with no anti-features listed.' },
    ],
    site: 'This website follows the same rules: no cookies, no analytics, and fonts served from here, not from Google.',
    policy: 'Read the privacy policy',
  },
  screens: {
    eyebrow: 'A look inside',
    title: 'Calm, simple, and out of your way.',
    alts: [
      'Welcome screen: Plug your brain back in',
      'Choosing distracting apps',
      'Home screen with the time left before the next challenge',
      'A challenge: 25 + 17',
      'Choosing how often to be challenged, with the option to also challenge on app open',
      'Choosing the minimum difficulty',
      'Home screen in dark mode',
    ],
  },
  quotes: {
    eyebrow: 'What people say',
    title: 'From people who use it.',
    items: [
      {
        text: "Finally, a focus app which works. It's way too easy to get sucked into YouTube otherwise. This app helps navigate that balance perfectly!",
        who: 'Google Play review',
      },
      {
        text: "Thanks to this, I'm not drooling while scrolling through shorts; solving simple math problems occasionally saves my brain.",
        who: 'Google Play review',
      },
      {
        text: "I love the idea, it's exactly something I had searched for for a long time.",
        who: 'Lezurex, on GitHub',
        href: 'https://github.com/msbelaid/PlugBrain/issues/22',
      },
      {
        text: 'I prefer it over multiple-choice options found in other apps, as it forces a higher level of focus.',
        who: 'user9484, on GitHub',
        href: 'https://github.com/msbelaid/PlugBrain/issues/134',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    // answers are html
    items: [
      {
        q: 'How does the difficulty go up and down?',
        a: 'Every challenge you solve makes the next one a level harder. When you stay away from your blocked apps, it comes back down by one level for every two challenge intervals you spend away. With a 15-minute interval, that is one level every 30 minutes. It never drops below the minimum difficulty you chose.',
      },
      {
        q: 'Can I choose how hard it starts?',
        a: 'Yes. Pick <b>Beginner</b> (simple additions and subtractions), <b>Intermediate</b> (multiplications and missing numbers) or <b>Expert</b> (multi-digit multiplications) as your minimum, and change it any time from the home screen.',
      },
      {
        q: 'When does a challenge appear?',
        a: 'After the time you choose, from 1 to 15 minutes, in your blocked apps. Turn on <b>Also on app open</b> to solve one before a blocked app even opens.',
      },
      {
        q: 'Why does it need these permissions?',
        a: '<b>Usage access</b> measures time in the apps you picked. <b>Display over other apps</b> shows the challenge on top of them. <b>Accessibility</b> tells PlugBrain which app is open: it reads the app\'s name, never your screen or what you type. <b>Battery optimization</b> is optional and keeps it running reliably.',
      },
      {
        q: 'Does it work offline? What data does it collect?',
        a: 'It works fully offline, because it has no internet permission at all. There is no account, no ads and no analytics, and your settings never leave your phone. See the <a href="/privacy/">privacy policy</a>.',
      },
      {
        q: 'Can I cheat?',
        a: "If you really want to, yes. It's your phone, and you can always uninstall the app. PlugBrain is a speed bump, not a jail: the few seconds a problem takes are usually enough to ask yourself if you really want to keep scrolling. It also covers calculator apps during a challenge, and loopholes get fixed as people report them.",
      },
      {
        q: 'Is there an iPhone version?',
        a: 'Not at the moment. PlugBrain is Android only, on Android 9 and newer.',
      },
      {
        q: 'How is it different from other app blockers?',
        a: "Most blockers use timers or quotas you can dismiss with a tap. PlugBrain asks you to think for a moment, adapts to how often you come back, and does it all without ads, accounts or internet access. It's also free and open source.",
      },
      {
        q: 'Which languages does it speak?',
        a: 'English, Arabic, Chinese (Simplified), Dutch, French, German, Hindi, Japanese, Persian and Russian. Spanish and Portuguese (Brazil) are looking for translators: <a href="https://github.com/msbelaid/PlugBrain/issues/52">Spanish</a>, <a href="https://github.com/msbelaid/PlugBrain/issues/56">Portuguese</a>.',
      },
      {
        q: 'Is it really free?',
        a: 'Yes, completely. No ads, no in-app purchases, no premium tier. It is open source under the GPL-3.0 license.',
      },
    ],
  },
  contribute: {
    eyebrow: 'Built in the open',
    title: 'Made by a small community. Join it.',
    lead: 'PlugBrain is made in Algeria by Mohammed-Said Belaid and a growing group of contributors around the world.',
    stars: 'Star on GitHub',
    ways: [
      { title: 'Translate', text: 'Bring PlugBrain to your language.', href: 'https://github.com/msbelaid/PlugBrain/issues?q=is%3Aissue+is%3Aopen+translate' },
      // html
      { title: 'Add a challenge', text: 'New challenge types start with <code>./gradlew generateChallenge</code>.', href: 'https://github.com/msbelaid/PlugBrain/blob/master/CONTRIBUTING.md' },
      { title: 'Design', text: 'Help with UX, visuals and the store presence.', href: 'https://contribute.design/msbelaid/PlugBrain' },
      { title: 'Talk to us', text: 'Ideas, feedback and help on r/PlugBrain.', href: 'https://www.reddit.com/r/PlugBrain/' },
    ],
    contributors: 'Contributors',
    credits: [
      { role: 'UX & UI design', name: 'Hichem Dahaoui', login: 'HichemDahaoui' },
      { role: 'App icon', name: 'travis-jeans', login: 'travis-jeans' },
    ],
  },
  footer: {
    download: 'Download',
    project: 'Project',
    source: 'Source code',
    issues: 'Report a bug',
    reddit: 'r/PlugBrain',
    privacy: 'Privacy policy',
    license: 'Free software under the GPL-3.0 license.',
    made: 'Made in Algeria with care.',
    design: 'Design by',
    icon: 'icon by',
    version: 'Latest version',
  },
  privacyPage: {
    title: 'Privacy policy',
    metaDescription: 'PlugBrain privacy policy: the app collects no personal data, needs no account, shows no ads and has no internet permission.',
    updated: 'Last updated: October 2, 2025',
    back: 'Back to home',
  },
  notFound: {
    title: 'This page took a break.',
    text: "The page you're looking for doesn't exist.",
    back: 'Back to home',
  },
};
