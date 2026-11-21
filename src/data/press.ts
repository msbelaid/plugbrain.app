// Press kit copy, one entry per language. The page is src/components/PressPage.astro; files live in
// public/press/. French typography:   is a non-breaking space (before ":" and between a number
// and its unit),   a narrow non-breaking space (before "; ! ?" and inside « »).

export const pressEmail = 'belaid.mohammed.said@gmail.com';
export const languageCount = 13;

/** Where each language's press page lives. */
export const pressPaths: Record<string, string> = { en: '/press/', fr: '/fr/press/', ar: '/ar/press/' };

/** Suffix of the per-language files: the fact sheet PDF and the ZIP. English has none. */
export function pressSuffix(locale: string): string {
  return locale === 'en' ? '' : `-${locale}`;
}

/** Screenshot folder for a language, under public/press/screenshots/. */
export function screenshotDir(locale: string): string {
  return locale === 'en' ? '/press/screenshots' : `/press/screenshots/${locale}`;
}

export const screenshotFiles = [
  'plugbrain-1-welcome.png',
  'plugbrain-2-choose-apps.png',
  'plugbrain-3-home.png',
  'plugbrain-4-challenge.png',
  'plugbrain-5-interval.png',
  'plugbrain-6-difficulty.png',
  'plugbrain-7-dark-mode.png',
];

export const logoFiles = [
  { file: 'plugbrain-light', bg: 'light' },
  { file: 'plugbrain-dark', bg: 'dark' },
  { file: 'plugbrain-light-mono', bg: 'light' },
  { file: 'plugbrain-dark-mono', bg: 'dark' },
  { file: 'plugbrain-light-square', bg: 'none' },
  { file: 'plugbrain-dark-square', bg: 'none' },
];

const defaultGraphics = [
  'plugbrain-banner-1920x1080.png',
  'plugbrain-banner-1280x640.png',
  'plugbrain-banner-1024x500.png',
  'plugbrain-banner-light-1024x500.png',
];

/** Banners for a language: Arabic has its own designs (same content as the Arabic Facebook post). */
export function graphicsFor(locale: string): { dir: string; files: string[] } {
  if (locale === 'ar') {
    return {
      dir: '/press/graphics/ar',
      files: [
        'plugbrain-banner-ar-1920x1080.png',
        'plugbrain-banner-ar-1280x640.png',
        'plugbrain-banner-ar-1024x500.png',
        'plugbrain-post-ar-1080x1080.png',
        'plugbrain-post-ar-1080x1350.png',
      ],
    };
  }
  return { dir: '/press/graphics', files: defaultGraphics };
}

export const colors = [
  { hex: '#20DFD9', key: 'teal' },
  { hex: '#004852', key: 'green' },
  { hex: '#001824', key: 'navy' },
  { hex: '#ADFEFD', key: 'cyan' },
  { hex: '#F9F5F4', key: 'beige' },
] as const;

export const coverageLinks = [
  { outlet: 'Valley4Techs', url: 'https://en.valley4techs.com/2026/11/plugbrain-app-review.html', lang: 'en' },
  { outlet: 'Valley4Techs', url: 'https://www.valley4techs.com/2026/11/plugbrain-app-review.html', lang: 'ar' },
];

const en = {
  meta: {
    title: 'Press kit · PlugBrain',
    description: 'Facts, descriptions, the story, logos, screenshots and contact details for writing about PlugBrain, the free Android app that uses math challenges to stop phone addiction.',
  },
  back: '← PlugBrain',
  title: 'Press kit',
  lead: 'Everything you need to write about PlugBrain. All text and images on this page are free to use in articles, reviews and videos about the app.',
  zip: 'Download everything (ZIP)',
  factSheet: 'Fact sheet (PDF)',
  contactButton: 'Contact',
  mailSubject: 'PlugBrain press',
  toc: { label: 'On this page', facts: 'Facts', descriptions: 'Descriptions', story: 'Story', features: 'Features', quotes: 'Quotes', logos: 'Logos', screenshots: 'Screenshots', contact: 'Contact' },
  factsTitle: 'Quick facts',
  facts: [
    ['Name', 'PlugBrain'],
    ['What it is', 'An Android app that uses math challenges to stop phone addiction. The more you use your distracting apps, the harder the math gets'],
    ['Price', 'Free, no ads'],
    ['Platform', 'Android 9 and later'],
    ['License', 'Free and open source (GPL-3.0)'],
    ['Languages', `${languageCount}, including English, Arabic, French, Spanish, German and Portuguese`],
    ['Privacy', 'No internet permission, no account, no data collected'],
    ['First release', 'June 2025 on GitHub; F-Droid in July 2025, Google Play in October 2025'],
    ['Made by', 'Mohammed-Said Belaid and contributors from around the world'],
    ['Based in', 'Oran, Algeria'],
  ] as [string, string][],
  getIt: 'Get it',
  apk: 'APK on GitHub',
  linksLabel: 'Links',
  source: 'Source code',
  descriptionsTitle: 'Descriptions',
  descriptionsNote: 'Copy the one that fits your space.',
  copy: 'Copy',
  copied: 'Copied',
  selected: 'Selected',
  descriptions: [
    {
      id: 'one-line',
      label: 'One line',
      text: 'PlugBrain is a free, open-source Android app that uses math challenges to stop phone addiction: the more you use your distracting apps, the harder the math gets.',
    },
    {
      id: 'short',
      label: 'Short (about 50 words)',
      text: `PlugBrain is a free, open-source Android app that uses math challenges to stop phone addiction: the more you use your distracting apps, the harder the math gets. Stay away and it gets easier again. No ads, no account, no internet permission. Available in ${languageCount} languages.`,
    },
    {
      id: 'long',
      label: 'Long (about 130 words)',
      text: `PlugBrain is a free, open-source Android app that uses math challenges to stop phone addiction: the more you use your distracting apps, the harder the math gets. Stay away longer and it gets easier again.

You choose the apps, such as social media or games, and how often PlugBrain should step in. When it's time, the app pauses and a math challenge appears. Solve it and carry on. The challenges range from simple additions to complex equations.

That short pause is the point: it breaks the automatic reach for the phone and leaves the choice to you. PlugBrain has no ads, needs no account and has no internet permission, so nothing leaves the phone. It is available on Google Play, F-Droid and IzzyOnDroid in ${languageCount} languages.`,
    },
  ],
  storyTitle: 'The story',
  story: [
    'PlugBrain began in 2025 as the hands-on example in an Android development training for students at the Khaldounia cultural association in Oran, Algeria, led by Mohammed-Said Belaid. The idea was to show how a real app is built, step by step, with the care a large project needs.',
    `Once the code was published as open source, the example grew beyond the classroom. People started using it and sending feedback, and developers, translators and designers from around the world began to contribute. Algerian designer Hichem Dahaoui redesigned the interface, Australian designer Travis Jeans drew the logo, and volunteers translated the app into ${languageCount} languages.`,
    'Today PlugBrain is available on Google Play, F-Droid and IzzyOnDroid, and it is still free, open source and without ads.',
  ],
  featuresTitle: 'Key features',
  features: [
    ['Mental math to raise your awareness before opening distracting apps', 'A quick math problem breaks the automatic reach for the app and gives you a few seconds to decide if you really want to open it.'],
    ['Difficulty that adapts', 'The more often you go back, the harder the math gets. Stay away and it gets easier again.'],
    ['A variety of challenges', 'From simple additions to complex equations. A little mental math practice comes as a bonus.'],
    ['You set the rules', 'Pick the apps to block, how often a challenge appears, and the difficulty to start from.'],
    ['Private by design', 'No internet permission, no account, no ads, no tracking. Everything stays on the phone.'],
    ['Free and open source', 'GPL-3.0 on GitHub. Listed on F-Droid, which checks the code and found no anti-features.'],
  ] as [string, string][],
  quotesTitle: 'Quotes',
  quotesNote: 'From Mohammed-Said Belaid, the developer of PlugBrain.',
  quotes: [
    "I didn't want a total ban. Bans make you want to get around them. A small math problem gives you a few seconds to ask yourself: do I really need this app right now?",
    'An app that helps you spend less time on your phone should never earn money from the time you spend on it. That is why PlugBrain has no ads, no account and no internet access.',
    'PlugBrain started as a teaching example. Then people I had never met, from all over the world, began translating it, designing it and improving the code. It is not only my project anymore.',
  ],
  openQuote: '“',
  closeQuote: '”',
  logosTitle: 'Logos',
  logosNote: "Please don't change the colors or proportions of the logo. Icon by Travis Jeans.",
  logoLabels: ['For light backgrounds', 'For dark backgrounds', 'Black, for light backgrounds', 'White, for dark backgrounds', 'Square tile, light', 'Square tile, dark'],
  logoAlt: 'PlugBrain logo',
  appIcon: 'App icon',
  colorsTitle: 'Colors',
  colorNames: { teal: 'Teal', green: 'Dark green', navy: 'Navy', cyan: 'Cyan', beige: 'Beige' },
  nameNote: 'The name is written PlugBrain: one word, capital P and capital B. The typeface on the site and banners is Lexend.',
  bannersTitle: 'Banners and demo',
  graphicLabels: ['Banner, 1920 × 1080', 'Banner, 1280 × 640', 'Banner, 1024 × 500', 'Light banner, 1024 × 500'],
  bannerAlt: 'PlugBrain banner',
  gifLabel: 'Animated demo (GIF)',
  gifAlt: 'Animation: the math challenges get harder the more you use a blocked app',
  screenshotsTitle: 'Screenshots',
  screenshotsNote: 'Real screenshots of PlugBrain 1.6 in English, 1080 × 2340. Click one to download it.',
  screenshotLabels: ['Welcome screen', 'Choosing the apps to block', 'Home screen', 'A math challenge', 'How often to challenge', 'Starting difficulty', 'Dark mode'],
  screenshotAlt: 'PlugBrain screenshot',
  coverageTitle: 'Coverage',
  coverageTitles: ['PlugBrain app review (English)', 'PlugBrain app review (Arabic)'],
  creditsTitle: 'Credits',
  // html
  credits: [
    '<strong>Mohammed-Said Belaid</strong>, developer and maintainer (<a href="https://github.com/msbelaid">GitHub</a>)',
    '<strong>Hichem Dahaoui</strong>, interface design (<a href="https://github.com/HichemDahaoui">GitHub</a>)',
    '<strong>Travis Jeans</strong>, logo and app icon (<a href="https://github.com/travis-jeans">GitHub</a>)',
    'Translators and code contributors from around the world, listed on <a href="https://github.com/msbelaid/PlugBrain/graphs/contributors">GitHub</a>',
  ],
  contactTitle: 'Contact',
  // html; {email} is replaced with the linked address.
  contactText: 'For interviews, questions or a review build, write to Mohammed-Said Belaid at {email}. Interviews are possible in English, French and Arabic.',
};

export type PressCopy = typeof en;

const fr: PressCopy = {
  meta: {
    title: 'Kit presse · PlugBrain',
    description: 'Chiffres clés, descriptions, histoire, logos, captures d’écran et contact pour écrire sur PlugBrain, l’application Android gratuite qui utilise des défis de calcul pour lutter contre l’addiction au téléphone.',
  },
  back: '← PlugBrain',
  title: 'Kit presse',
  lead: 'Tout ce qu’il faut pour écrire sur PlugBrain. Les textes et les images de cette page sont libres d’utilisation dans les articles, tests et vidéos consacrés à l’application.',
  zip: 'Tout télécharger (ZIP)',
  factSheet: 'Fiche d’information (PDF)',
  contactButton: 'Contact',
  mailSubject: 'PlugBrain presse',
  toc: { label: 'Sur cette page', facts: 'Chiffres clés', descriptions: 'Descriptions', story: 'Histoire', features: 'Fonctionnalités', quotes: 'Citations', logos: 'Logos', screenshots: 'Captures', contact: 'Contact' },
  factsTitle: 'En bref',
  facts: [
    ['Nom', 'PlugBrain'],
    ['De quoi s’agit-il', 'Une application Android qui utilise des défis de calcul pour lutter contre l’addiction au téléphone. Plus on utilise ses applications distrayantes, plus les calculs sont difficiles'],
    ['Prix', 'Gratuite, sans publicité'],
    ['Plateforme', 'Android 9 et versions ultérieures'],
    ['Licence', 'Libre et open source (GPL-3.0)'],
    ['Langues', `${languageCount}, dont le français, l’arabe, l’anglais, l’espagnol, l’allemand et le portugais`],
    ['Vie privée', 'Aucune permission internet, aucun compte, aucune donnée collectée'],
    ['Première version', 'Juin 2025 sur GitHub ; F-Droid en juillet 2025, Google Play en octobre 2025'],
    ['Créée par', 'Mohammed-Said Belaid et des contributeurs du monde entier'],
    ['Basée à', 'Oran, Algérie'],
  ],
  getIt: 'Télécharger',
  apk: 'APK sur GitHub',
  linksLabel: 'Liens',
  source: 'Code source',
  descriptionsTitle: 'Descriptions',
  descriptionsNote: 'Copiez celle qui convient à votre format.',
  copy: 'Copier',
  copied: 'Copié',
  selected: 'Sélectionné',
  descriptions: [
    {
      id: 'one-line',
      label: 'En une phrase',
      text: 'PlugBrain est une application Android gratuite et open source qui utilise des défis de calcul pour lutter contre l’addiction au téléphone : plus vous utilisez vos applications distrayantes, plus les calculs sont difficiles.',
    },
    {
      id: 'short',
      label: 'Courte (environ 50 mots)',
      text: `PlugBrain est une application Android gratuite et open source qui utilise des défis de calcul pour lutter contre l’addiction au téléphone : plus vous utilisez vos applications distrayantes, plus les calculs sont difficiles. Si vous vous en éloignez, ils redeviennent plus faciles. Sans publicité, sans compte, sans accès à internet. Disponible en ${languageCount} langues.`,
    },
    {
      id: 'long',
      label: 'Longue (environ 130 mots)',
      text: `PlugBrain est une application Android gratuite et open source qui utilise des défis de calcul pour lutter contre l’addiction au téléphone : plus vous utilisez vos applications distrayantes, plus les calculs sont difficiles. Si vous vous en éloignez plus longtemps, ils redeviennent plus faciles.

Vous choisissez les applications, comme les réseaux sociaux ou les jeux, et la fréquence à laquelle PlugBrain intervient. Le moment venu, l’application se met en pause et un défi de calcul apparaît. Résolvez-le et continuez. Les défis vont de simples additions à des équations compliquées.

Cette courte pause est tout l’intérêt : elle casse le geste automatique vers le téléphone et vous laisse le choix. PlugBrain n’a pas de publicité, ne demande aucun compte et n’a pas accès à internet : rien ne quitte le téléphone. L’application est disponible sur Google Play, F-Droid et IzzyOnDroid, en ${languageCount} langues.`,
    },
  ],
  storyTitle: 'L’histoire',
  story: [
    'PlugBrain est né en 2025 comme exemple pratique d’une formation au développement Android destinée aux étudiants, à l’association culturelle El Khaldounia d’Oran, en Algérie, animée par Mohammed-Said Belaid. L’idée était de montrer comment se construit une vraie application, étape par étape, avec la rigueur qu’exige un grand projet.',
    `Une fois le code publié en open source, l’exemple a dépassé le cadre de la salle de cours. Des gens ont commencé à l’utiliser et à envoyer leurs retours, puis des développeurs, des traducteurs et des designers du monde entier se sont mis à contribuer. Le designer algérien Hichem Dahaoui a repensé l’interface, le designer australien Travis Jeans a dessiné le logo, et des bénévoles ont traduit l’application en ${languageCount} langues.`,
    'Aujourd’hui, PlugBrain est disponible sur Google Play, F-Droid et IzzyOnDroid. Elle reste gratuite, open source et sans publicité.',
  ],
  featuresTitle: 'Fonctionnalités clés',
  features: [
    ['Calcul mental\u00a0: pour éveiller sa conscience avant d’ouvrir les applications distrayantes', 'Un petit calcul casse le geste automatique et laisse quelques secondes pour décider si l’on veut vraiment ouvrir l’application.'],
    ['Une difficulté qui s’adapte', 'Plus vous y revenez souvent, plus les calculs sont difficiles. Éloignez-vous et ils redeviennent plus faciles.'],
    ['Une variété de défis', 'De simples additions aux équations compliquées. Et un peu de calcul mental en prime.'],
    ['Vous fixez les règles', 'Choisissez les applications à bloquer, la fréquence des défis et le niveau de départ.'],
    ['Respect de la vie privée', 'Aucune permission internet, aucun compte, aucune publicité, aucun pistage. Tout reste sur le téléphone.'],
    ['Libre et open source', 'Sous licence GPL-3.0 sur GitHub. Présente sur F-Droid, qui vérifie le code et n’y a trouvé aucune anti-fonctionnalité.'],
  ],
  quotesTitle: 'Citations',
  quotesNote: 'De Mohammed-Said Belaid, développeur de PlugBrain.',
  quotes: [
    'Je ne voulais pas d’une interdiction totale. L’interdiction donne envie de la contourner. Un petit calcul vous laisse quelques secondes pour vous demander : est-ce que j’ai vraiment besoin de cette application maintenant ?',
    'Une application qui vous aide à passer moins de temps sur votre téléphone ne devrait jamais gagner d’argent grâce au temps que vous y passez. C’est pour cela que PlugBrain n’a ni publicité, ni compte, ni accès à internet.',
    'PlugBrain a commencé comme un exemple de cours. Puis des gens que je n’avais jamais rencontrés, venus du monde entier, ont commencé à le traduire, à le dessiner et à améliorer le code. Ce n’est plus seulement mon projet.',
  ],
  openQuote: '« ',
  closeQuote: ' »',
  logosTitle: 'Logos',
  logosNote: 'Merci de ne pas modifier les couleurs ni les proportions du logo. Icône de Travis Jeans.',
  logoLabels: ['Pour fond clair', 'Pour fond sombre', 'Noir, pour fond clair', 'Blanc, pour fond sombre', 'Carré, clair', 'Carré, sombre'],
  logoAlt: 'Logo de PlugBrain',
  appIcon: 'Icône de l’application',
  colorsTitle: 'Couleurs',
  colorNames: { teal: 'Turquoise', green: 'Vert foncé', navy: 'Bleu nuit', cyan: 'Cyan', beige: 'Beige' },
  nameNote: 'Le nom s’écrit PlugBrain : en un seul mot, avec un P et un B majuscules. La police du site et des bannières est Lexend.',
  bannersTitle: 'Bannières et démo',
  graphicLabels: ['Bannière, 1920 × 1080', 'Bannière, 1280 × 640', 'Bannière, 1024 × 500', 'Bannière claire, 1024 × 500'],
  bannerAlt: 'Bannière de PlugBrain',
  gifLabel: 'Démo animée (GIF)',
  gifAlt: 'Animation : les défis de calcul deviennent plus difficiles à mesure que l’on utilise une application bloquée',
  screenshotsTitle: 'Captures d’écran',
  screenshotsNote: 'Vraies captures de PlugBrain 1.6 en français, 1080 × 2340. Cliquez sur une capture pour la télécharger.',
  screenshotLabels: ['Écran d’accueil', 'Choix des applications à bloquer', 'Écran principal', 'Un défi de calcul', 'Fréquence des défis', 'Difficulté de départ', 'Mode sombre'],
  screenshotAlt: 'Capture d’écran de PlugBrain',
  coverageTitle: 'Ils en parlent',
  coverageTitles: ['Test de l’application PlugBrain (anglais)', 'Test de l’application PlugBrain (arabe)'],
  creditsTitle: 'Crédits',
  credits: [
    '<strong>Mohammed-Said Belaid</strong>, développeur et mainteneur (<a href="https://github.com/msbelaid">GitHub</a>)',
    '<strong>Hichem Dahaoui</strong>, design de l’interface (<a href="https://github.com/HichemDahaoui">GitHub</a>)',
    '<strong>Travis Jeans</strong>, logo et icône (<a href="https://github.com/travis-jeans">GitHub</a>)',
    'Des traducteurs et contributeurs du monde entier, listés sur <a href="https://github.com/msbelaid/PlugBrain/graphs/contributors">GitHub</a>',
  ],
  contactTitle: 'Contact',
  contactText: 'Pour une interview, une question ou une version de test, écrivez à Mohammed-Said Belaid à {email}. Interviews possibles en français, en arabe et en anglais.',
};

const ar: PressCopy = {
  meta: {
    title: 'الملف الصحفي · PlugBrain',
    description: 'معلومات أساسية وأوصاف وقصة التطبيق وشعارات ولقطات شاشة ووسيلة تواصل للكتابة عن PlugBrain، تطبيق أندرويد المجاني الذي يستعمل تحديات حسابية للحد من إدمان الهاتف.',
  },
  back: '→ PlugBrain',
  title: 'الملف الصحفي',
  lead: 'كل ما تحتاجه للكتابة عن PlugBrain. يمكنك استعمال النصوص والصور في هذه الصفحة بحرية في المقالات والمراجعات والفيديوهات التي تتناول التطبيق.',
  zip: 'تحميل الملف كاملا (ZIP)',
  factSheet: 'البطاقة التعريفية (PDF)',
  contactButton: 'تواصل معنا',
  mailSubject: 'PlugBrain - صحافة',
  toc: { label: 'في هذه الصفحة', facts: 'معلومات', descriptions: 'أوصاف', story: 'القصة', features: 'المزايا', quotes: 'تصريحات', logos: 'الشعارات', screenshots: 'لقطات الشاشة', contact: 'التواصل' },
  factsTitle: 'معلومات سريعة',
  facts: [
    ['الاسم', 'PlugBrain'],
    ['ما هو', 'تطبيق أندرويد يستعمل تحديات حسابية للحد من إدمان الهاتف. كلما أكثرت من استعمال التطبيقات المشتتة، ازدادت المسائل صعوبة'],
    ['السعر', 'مجاني، بدون إعلانات'],
    ['النظام', 'أندرويد 9 فما فوق'],
    ['الرخصة', 'حر ومفتوح المصدر (GPL-3.0)'],
    ['اللغات', `${languageCount} لغة، منها العربية والفرنسية والإنجليزية والإسبانية والألمانية والبرتغالية`],
    ['الخصوصية', 'لا يتصل بالإنترنت، لا يطلب حسابا، ولا يجمع أي بيانات'],
    ['أول إصدار', 'جوان 2025 على GitHub، ثم F-Droid في جويلية 2025 وGoogle Play في أكتوبر 2025'],
    ['من تطوير', 'محمد السعيد بلعيد ومساهمين من مختلف أنحاء العالم'],
    ['المقر', 'وهران، الجزائر'],
  ],
  getIt: 'التحميل',
  apk: 'ملف APK على GitHub',
  linksLabel: 'روابط',
  source: 'الشيفرة المصدرية',
  descriptionsTitle: 'أوصاف جاهزة',
  descriptionsNote: 'انسخ الوصف الذي يناسب المساحة المتاحة لك.',
  copy: 'نسخ',
  copied: 'تم النسخ',
  selected: 'تم التحديد',
  descriptions: [
    {
      id: 'one-line',
      label: 'في جملة واحدة',
      text: 'PlugBrain تطبيق أندرويد مجاني ومفتوح المصدر يستعمل تحديات حسابية للحد من إدمان الهاتف: كلما أكثرت من استعمال التطبيقات المشتتة، ازدادت المسائل صعوبة.',
    },
    {
      id: 'short',
      label: 'وصف قصير (نحو 50 كلمة)',
      text: `PlugBrain تطبيق أندرويد مجاني ومفتوح المصدر يستعمل تحديات حسابية للحد من إدمان الهاتف: كلما أكثرت من استعمال التطبيقات المشتتة، ازدادت المسائل صعوبة. وإذا ابتعدت عنها، صارت أسهل. بدون إعلانات، بدون حساب، ولا يحتاج إلى الإنترنت. متوفر بـ${languageCount} لغة.`,
    },
    {
      id: 'long',
      label: 'وصف طويل (نحو 130 كلمة)',
      text: `PlugBrain تطبيق أندرويد مجاني ومفتوح المصدر يستعمل تحديات حسابية للحد من إدمان الهاتف: كلما أكثرت من استعمال التطبيقات المشتتة، ازدادت المسائل صعوبة. وكلما ابتعدت عنها مدة أطول، صارت أسهل.

يختار المستخدم التطبيقات التي تشتته، كتطبيقات التواصل الاجتماعي أو الألعاب، ويحدد وتيرة تدخل PlugBrain. وحين يحين الوقت، يتوقف التطبيق المختار ويظهر مكانه تحد حسابي، فإذا حله المستخدم واصل. وتتنوع التحديات من عمليات جمع بسيطة إلى معادلات معقدة.

هذه الوقفة القصيرة هي الفكرة كلها: تكسر الحركة الآلية نحو الهاتف وتترك القرار للمستخدم. لا يعرض PlugBrain أي إعلانات، ولا يطلب حسابا، ولا يملك صلاحية الاتصال بالإنترنت، فلا شيء يغادر الهاتف. التطبيق متوفر على Google Play وF-Droid وIzzyOnDroid بـ${languageCount} لغة.`,
    },
  ],
  storyTitle: 'القصة',
  story: [
    'بدأ PlugBrain سنة 2025 مثالا تطبيقيا في تكوين حول تطوير تطبيقات أندرويد لفائدة الطلبة، نظمته جمعية الخلدونية الثقافية بوهران وأشرف عليه محمد السعيد بلعيد. كان الهدف أن يرى المشاركون كيف يُبنى تطبيق حقيقي خطوة بخطوة، بالدقة والتنظيم اللذين تحتاجهما المشاريع الكبيرة.',
    `بعد نشر الشيفرة مفتوحة المصدر، تجاوز المثال حدود القاعة. بدأ الناس يستعملونه ويرسلون آراءهم، ثم انضم مطورون ومترجمون ومصممون من مختلف أنحاء العالم. أعاد المصمم الجزائري هشام دهاوي تصميم الواجهة، ورسم المصمم الأسترالي Travis Jeans الشعار، وترجم متطوعون التطبيق إلى ${languageCount} لغة.`,
    'واليوم، PlugBrain متوفر على Google Play وF-Droid وIzzyOnDroid، وما يزال مجانيا ومفتوح المصدر وبدون إعلانات.',
  ],
  featuresTitle: 'أهم المزايا',
  features: [
    ['الحساب الذهني: لإيقاظ الوعي قبل فتح التطبيقات المشتتة', 'مسألة حسابية سريعة تكسر الحركة الآلية نحو التطبيق، وتمنحك بضع ثوان لتسأل نفسك: هل أريد فعلا فتحه الآن؟'],
    ['صعوبة تتكيف معك', 'كلما عدت إلى التطبيقات المشتتة أكثر، ازدادت المسائل صعوبة. وإذا ابتعدت عنها، صارت أسهل.'],
    ['تحديات متنوعة', 'من عمليات الجمع البسيطة إلى المعادلات المعقدة، مع تمرين يومي على الحساب الذهني.'],
    ['أنت من يضع القواعد', 'اختر التطبيقات التي تريد حجبها، ووتيرة ظهور التحديات، ومستوى الصعوبة الذي تبدأ منه.'],
    ['خصوصية في التصميم', 'لا اتصال بالإنترنت، لا حساب، لا إعلانات، ولا تتبع. كل شيء يبقى على الهاتف.'],
    ['حر ومفتوح المصدر', 'برخصة GPL-3.0 على GitHub، ومتوفر على F-Droid الذي يراجع الشيفرة ولم يجد فيه أي خاصية مضرة.'],
  ],
  quotesTitle: 'تصريحات',
  quotesNote: 'على لسان محمد السعيد بلعيد، مطور PlugBrain.',
  quotes: [
    'لم أرد منعا كليا، فالمنع يولد الرغبة في التجاوز. مسألة حسابية بسيطة تمنحك بضع ثوان لتسأل نفسك: هل أحتاج هذا التطبيق الآن؟',
    'تطبيق يساعدك على قضاء وقت أقل أمام الشاشة لا ينبغي أن يكسب شيئا من بقائك أمامها. لهذا لا يعرض PlugBrain إعلانات، ولا يطلب حسابا، ولا يتصل بالإنترنت.',
    'بدأ PlugBrain مثالا للتعليم. ثم بدأ أشخاص لم ألتقهم يوما، من مختلف أنحاء العالم، يترجمونه ويصممونه ويحسنون شيفرته. لم يعد مشروعي وحدي.',
  ],
  openQuote: '«',
  closeQuote: '»',
  logosTitle: 'الشعارات',
  logosNote: 'يرجى عدم تغيير ألوان الشعار أو أبعاده. الأيقونة من تصميم Travis Jeans.',
  logoLabels: ['للخلفيات الفاتحة', 'للخلفيات الداكنة', 'أسود، للخلفيات الفاتحة', 'أبيض، للخلفيات الداكنة', 'مربع، فاتح', 'مربع، داكن'],
  logoAlt: 'شعار PlugBrain',
  appIcon: 'أيقونة التطبيق',
  colorsTitle: 'الألوان',
  colorNames: { teal: 'فيروزي', green: 'أخضر داكن', navy: 'كحلي', cyan: 'سماوي', beige: 'بيج' },
  nameNote: 'يُكتب الاسم PlugBrain: كلمة واحدة بحرفي P وB كبيرين. الخط المستعمل في الموقع والصور هو Lexend.',
  bannersTitle: 'صور ترويجية وعرض متحرك',
  graphicLabels: ['صورة 1920 × 1080', 'صورة 1280 × 640', 'صورة 1024 × 500', 'منشور مربع 1080 × 1080', 'منشور عمودي 1080 × 1350'],
  bannerAlt: 'صورة ترويجية لـ PlugBrain',
  gifLabel: 'عرض متحرك (GIF)',
  gifAlt: 'عرض متحرك: تزداد المسائل الحسابية صعوبة كلما أكثرت من استعمال تطبيق محجوب',
  screenshotsTitle: 'لقطات الشاشة',
  screenshotsNote: 'لقطات حقيقية من PlugBrain 1.6 باللغة العربية، بمقاس 1080 × 2340. انقر على أي لقطة لتحميلها.',
  screenshotLabels: ['شاشة الترحيب', 'اختيار التطبيقات المراد حجبها', 'الشاشة الرئيسية', 'تحد حسابي', 'وتيرة التحديات', 'مستوى الصعوبة الأولي', 'الوضع الداكن'],
  screenshotAlt: 'لقطة شاشة من PlugBrain',
  coverageTitle: 'تحدثوا عنه',
  coverageTitles: ['مراجعة تطبيق PlugBrain (بالإنجليزية)', 'مراجعة تطبيق PlugBrain (بالعربية)'],
  creditsTitle: 'شكر وتقدير',
  credits: [
    '<strong>محمد السعيد بلعيد</strong>، المطور والمشرف على المشروع (<a href="https://github.com/msbelaid">GitHub</a>)',
    '<strong>هشام دهاوي</strong>، تصميم الواجهة (<a href="https://github.com/HichemDahaoui">GitHub</a>)',
    '<strong>Travis Jeans</strong>، الشعار وأيقونة التطبيق (<a href="https://github.com/travis-jeans">GitHub</a>)',
    'مترجمون ومساهمون من مختلف أنحاء العالم، تجد أسماءهم على <a href="https://github.com/msbelaid/PlugBrain/graphs/contributors">GitHub</a>',
  ],
  contactTitle: 'التواصل',
  contactText: 'لإجراء حوار أو طرح سؤال أو طلب نسخة للتجربة، راسل محمد السعيد بلعيد على {email}. الحوارات ممكنة بالعربية والفرنسية والإنجليزية.',
};

const copies: Record<string, PressCopy> = { en, fr, ar };

export function pressCopy(locale: string | undefined): PressCopy {
  return copies[locale ?? 'en'] ?? en;
}
