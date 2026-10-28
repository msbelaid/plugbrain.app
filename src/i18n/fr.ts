// French copy. Same shape as en.ts; see the notes there.
// French typography: \u00a0 is a non-breaking space (before ":" and between a number and its unit),
// \u202f a narrow non-breaking space (before "; ! ?" and inside « »).
import type { Strings } from '.';

export default {
  meta: {
    title: 'PlugBrain\u00a0: bloqueur d’applis Android gratuit, avec des défis de calcul',
    description:
      'Bloqueur d’applis Android gratuit et open source\u00a0: tes applis distrayantes restent verrouillées derrière un petit calcul. Plus tu scrolles, plus c’est dur. Sans pub, sans pistage.',
    imageAlt: 'PlugBrain\u00a0: un peu de calcul, beaucoup moins de scroll.',
    features: [
      'Verrouille les applis distrayantes derrière un défi de calcul',
      'La difficulté grimpe quand tu scrolles et redescend quand tu décroches',
      'Aucune permission Internet, pas de pub, pas de pistage, pas de compte',
      'Libre et open source (GPL-3.0)',
    ],
  },
  nav: {
    how: 'Comment ça marche',
    difficulty: 'Difficulté',
    privacy: 'Vie privée',
    faq: 'FAQ',
    getApp: 'Télécharger',
    skip: 'Aller au contenu',
    main: 'Navigation principale',
    home: 'Accueil PlugBrain',
    stars: 'GitHub, {stars}\u00a0étoiles',
  },
  stores: {
    getItOn: 'Disponible sur',
    play: 'Google Play',
    fdroid: 'F-Droid',
    alsoOn: 'Également\u00a0:',
    izzy: 'IzzyOnDroid',
    apk: 'APK sur GitHub',
    or: 'ou',
  },
  hero: {
    eyebrow: 'Bloqueur d’applis gratuit et open source',
    title: 'Rebranche ton cerveau.',
    tagline: 'Un peu de calcul. Beaucoup moins de scroll.',
    sub: 'Plus tu scrolles, plus les calculs sont <b>corsés</b>. Fais une pause, et ils redeviennent <b>faciles</b>.',
    proof: ['Sans pub', 'Sans pistage', 'Fonctionne hors ligne'],
  },
  demo: {
    hint: 'Essaie\u00a0: résous-en quelques-uns et regarde le niveau grimper, ou quitte l’appli pour le faire redescendre.',
    lockedApp: 'Temps écoulé pour cette appli',
    title: 'Ralentissons un peu',
    placeholder: 'Écris ta réponse',
    inputLabel: 'Ta réponse',
    check: 'Vérifier la réponse',
    leave: 'Quitter l’appli',
    keepScrolling: 'Continuer à scroller',
    difficulty: 'Difficulté',
    harder: 'Plus dur',
    easier: 'Plus facile',
    wrong: 'Pas tout à fait. Réessaie.',
    empty: 'Tape d’abord un nombre.',
    unlocked: 'Débloqué. Le prochain sera plus corsé.',
    leftApp: 'Bien vu. Chaque pause fait redescendre le niveau.',
    atMin: 'Bien vu. Tu es déjà au niveau le plus facile.',
  },
  how: {
    eyebrow: 'Comment ça marche',
    title: 'Trois étapes, puis elle se fait oublier.',
    steps: [
      {
        title: 'Choisis ce qui te distrait',
        text: 'Sélectionne les applis qui te volent ton temps. PlugBrain t’indique combien de temps tu passes sur chacune.',
        alt: 'Écran de sélection des applis, avec le temps passé sur chacune',
      },
      {
        title: 'Règle la fréquence et la difficulté',
        text: 'Décide combien de temps tu peux rester sur ces applis avant un défi, ou demande-en un dès leur ouverture. Choisis un niveau de départ, de Débutant à Expert.',
        alt: 'Réglage de la difficulté minimale, sur Intermédiaire niveau\u00a05',
      },
      {
        title: 'Un petit calcul pour continuer',
        text: 'Quand ton temps est écoulé, un petit problème se dresse entre toi et ton fil. Résous-le… ou comprends le message et va faire autre chose.',
        alt: 'Écran de défi demandant 25 + 17, avec un bouton Quitter l’appli',
      },
    ],
  },
  difficulty: {
    eyebrow: 'Difficulté progressive',
    title: 'Plus tu scrolles, plus c’est dur.',
    titleB: 'Fais une pause, et ça redevient facile.',
    lead: 'Chaque défi résolu rend le suivant un peu plus difficile. Le temps passé loin de tes applis le fait redescendre, mais jamais sous le niveau de départ que tu as choisi.',
    up: { title: 'Tu continues à scroller', text: 'Chaque défi résolu ajoute un niveau.' },
    down: {
      title: 'Tu fais une pause',
      text: 'Plus tu restes loin des applis distrayantes, plus le prochain défi est facile.',
    },
    alt: 'Écran principal de PlugBrain\u00a0: PlugBrain est activé, 11\u00a0minutes avant le prochain défi, prochain défi au niveau\u00a04',
  },
  contrast: {
    eyebrow: 'Pourquoi des maths\u202f?',
    title: 'Un minuteur qu’on zappe d’un tap n’arrête personne.',
    lead: 'La plupart des bloqueurs affichent un compte à rebours avec un bouton pour l’ignorer, et le réflexe appuie dessus avant même que tu y aies pensé. Un calcul mobilise ton attention quelques secondes, et ces quelques secondes suffisent souvent à te faire changer d’avis.',
    them: {
      title: 'Les limites classiques',
      items: [
        'Un compte à rebours ou un quota quotidien',
        'Un bouton «\u202fIgnorer\u202f» ou «\u202fEncore une minute\u202f»',
        'Les mêmes règles, que tu craques une fois ou dix',
      ],
    },
    us: {
      title: 'PlugBrain',
      items: [
        'Un problème qui demande de réfléchir',
        'Tu tapes la réponse, pas de QCM',
        'Plus dur quand tu reviens souvent, plus facile quand tu décroches',
      ],
    },
  },
  privacy: {
    eyebrow: 'Privé par nature',
    title: 'Pas de pub. Pas de pistage. Juste un peu de calcul.',
    lead: 'PlugBrain ne demande aucun accès à Internet\u00a0: rien de ce que tu fais ne peut quitter ton téléphone.',
    items: [
      { icon: 'wifi-off', title: 'Aucune permission Internet', text: 'L’appli ne peut rien envoyer nulle part. C’est Android qui l’impose.' },
      { icon: 'eye-off', title: 'Ni pistage ni statistiques', text: 'Aucun traceur, aucun rapport de plantage, aucune donnée collectée ni partagée.' },
      { icon: 'ban', title: 'Pas de pub', text: 'Ni maintenant, ni plus tard. Il n’y a rien à vendre.' },
      { icon: 'user-off', title: 'Pas de compte', text: 'Installe-la et c’est parti. Tes réglages restent sur ton téléphone.' },
      { icon: 'code', title: 'Libre et open source', text: 'Sous licence GPL-3.0. Lis le code, compile-le toi-même, améliore-le.' },
      { icon: 'shield', title: 'Sur F-Droid', text: 'Compilée depuis les sources par F-Droid, sans aucune anti-fonctionnalité signalée.' },
    ],
    site: 'Ce site suit les mêmes règles\u00a0: pas de cookies, pas de statistiques, et des polices servies d’ici, pas par Google.',
    policy: 'Lire la politique de confidentialité (en anglais)',
  },
  screens: {
    eyebrow: 'Aperçu',
    title: 'Calme, simple et discrète.',
    alts: [
      'Écran de bienvenue\u00a0: Rebranche ton cerveau',
      'Choix des applis distrayantes',
      'Écran principal avec le temps restant avant le prochain défi',
      'Un défi\u00a0: 25 + 17',
      'Choix de la fréquence des défis, avec l’option d’en recevoir aussi à l’ouverture d’une appli',
      'Choix de la difficulté minimale',
      'Écran principal en mode sombre',
    ],
  },
  quotes: {
    eyebrow: 'Ils en parlent',
    title: 'Ce qu’en disent ceux qui l’utilisent.',
    items: [
      {
        text: 'Enfin une appli de concentration qui marche. Sans elle, on se fait beaucoup trop facilement aspirer par YouTube. Elle aide à trouver le juste équilibre, parfaitement\u202f!',
        who: 'Avis sur Google Play, traduit de l’anglais',
      },
      {
        text: 'Grâce à elle, je ne bave plus devant les Shorts. Résoudre de petits calculs de temps en temps, ça sauve mon cerveau.',
        who: 'Avis sur Google Play, traduit de l’anglais',
      },
      {
        text: 'J’adore l’idée, c’est exactement ce que je cherchais depuis longtemps.',
        who: 'Lezurex, sur GitHub, traduit de l’anglais',
        href: 'https://github.com/msbelaid/PlugBrain/issues/22',
      },
      {
        text: 'Je préfère ça aux QCM des autres applis\u00a0: ça oblige à se concentrer davantage.',
        who: 'user9484, sur GitHub, traduit de l’anglais',
        href: 'https://github.com/msbelaid/PlugBrain/issues/134',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Tes questions, nos réponses.',
    items: [
      {
        q: 'Comment la difficulté monte-t-elle et redescend-elle\u202f?',
        a: 'Chaque défi résolu rend le suivant plus difficile d’un niveau. Quand tu restes loin de tes applis bloquées, elle redescend d’un niveau toutes les deux périodes de défi passées à l’écart. Avec un intervalle de 15\u00a0minutes, ça fait un niveau toutes les 30\u00a0minutes. Elle ne descend jamais sous la difficulté minimale que tu as choisie.',
      },
      {
        q: 'Je peux choisir la difficulté de départ\u202f?',
        a: 'Oui. Choisis <b>Débutant</b> (additions et soustractions simples), <b>Intermédiaire</b> (multiplications et nombres à trouver) ou <b>Expert</b> (multiplications à plusieurs chiffres) comme minimum, et change-le quand tu veux depuis l’écran principal.',
      },
      {
        q: 'Quand un défi apparaît-il\u202f?',
        a: 'Après le temps que tu as choisi, de 1 à 15\u00a0minutes, dans tes applis bloquées. Active <b>Aussi à l’ouverture d’une appli</b> pour en résoudre un avant même qu’une appli bloquée s’ouvre.',
      },
      {
        q: 'Pourquoi a-t-elle besoin de ces autorisations\u202f?',
        a: 'L’<b>accès aux données d’utilisation</b> sert à mesurer le temps passé dans les applis choisies. L’<b>affichage par-dessus d’autres applis</b> permet de montrer le défi au-dessus d’elles. L’<b>accessibilité</b> indique à PlugBrain quelle appli est ouverte\u00a0: elle lit le nom de l’appli, jamais ton écran ni ce que tu tapes. L’<b>optimisation de la batterie</b> est facultative et l’aide à tourner sans interruption.',
      },
      {
        q: 'Elle fonctionne hors ligne\u202f? Quelles données collecte-t-elle\u202f?',
        a: 'Elle fonctionne entièrement hors ligne, puisqu’elle n’a aucune permission Internet. Pas de compte, pas de pub, pas de statistiques, et tes réglages ne quittent jamais ton téléphone. Consulte la <a href="/privacy/">politique de confidentialité</a> (en anglais).',
      },
      {
        q: 'Je peux tricher\u202f?',
        a: 'Si tu y tiens vraiment, oui. C’est ton téléphone, et tu peux toujours désinstaller l’appli. PlugBrain est un ralentisseur, pas une prison\u00a0: les quelques secondes que prend un calcul suffisent généralement à te demander si tu as vraiment envie de continuer à scroller. Pendant un défi, elle bloque aussi les calculatrices, et les failles sont corrigées au fur et à mesure qu’on nous les signale.',
      },
      {
        q: 'Existe-t-il une version iPhone\u202f?',
        a: 'Pas pour le moment. PlugBrain existe uniquement sur Android, à partir d’Android\u00a09.',
      },
      {
        q: 'Qu’est-ce qui la distingue des autres bloqueurs d’applis\u202f?',
        a: 'La plupart des bloqueurs reposent sur des minuteurs ou des quotas qu’on balaie d’un tap. PlugBrain te demande de réfléchir un instant, s’adapte à la fréquence de tes retours, et fait tout ça sans pub, sans compte et sans accès à Internet. En plus, elle est libre et open source.',
      },
      {
        q: 'Dans quelles langues est-elle disponible\u202f?',
        a: 'Allemand, anglais, arabe, chinois (simplifié), français, hindi, japonais, néerlandais, persan et russe. L’espagnol et le portugais (Brésil) cherchent des traducteurs\u00a0: <a href="https://github.com/msbelaid/PlugBrain/issues/52">espagnol</a>, <a href="https://github.com/msbelaid/PlugBrain/issues/56">portugais</a>.',
      },
      {
        q: 'C’est vraiment gratuit\u202f?',
        a: 'Oui, entièrement. Pas de pub, pas d’achats intégrés, pas de version premium. Elle est open source, sous licence GPL-3.0.',
      },
    ],
  },
  contribute: {
    eyebrow: 'Développé au grand jour',
    title: 'Une appli faite par une petite communauté. Rejoins-la.',
    lead: 'PlugBrain est développée en Algérie par Mohammed-Said Belaid et un groupe grandissant de contributeurs du monde entier.',
    stars: 'Mettre une étoile sur GitHub',
    ways: [
      { title: 'Traduire', text: 'Fais parler PlugBrain dans ta langue.', href: 'https://github.com/msbelaid/PlugBrain/issues?q=is%3Aissue+is%3Aopen+translate' },
      { title: 'Ajouter un défi', text: 'Tout nouveau type de défi commence par <code>./gradlew generateChallenge</code>.', href: 'https://github.com/msbelaid/PlugBrain/blob/master/CONTRIBUTING.md' },
      { title: 'Design', text: 'Donne un coup de main sur l’UX, le visuel et la présence sur les stores.', href: 'https://contribute.design/msbelaid/PlugBrain' },
      { title: 'Discuter', text: 'Idées, retours et entraide sur r/PlugBrain.', href: 'https://www.reddit.com/r/PlugBrain/' },
    ],
    contributors: 'Contributeurs',
    credits: [
      { role: 'Design UX et UI', name: 'Hichem Dahaoui', login: 'HichemDahaoui' },
      { role: 'Icône de l’appli', name: 'travis-jeans', login: 'travis-jeans' },
    ],
  },
  footer: {
    download: 'Télécharger',
    project: 'Projet',
    source: 'Code source',
    issues: 'Signaler un bug',
    reddit: 'r/PlugBrain',
    privacy: 'Confidentialité',
    license: 'Logiciel libre sous licence GPL-3.0.',
    made: 'Fait avec soin en Algérie.',
    credit: 'Design par <a href="https://github.com/HichemDahaoui">Hichem Dahaoui</a>, icône par <a href="https://github.com/travis-jeans">travis-jeans</a>.',
    version: 'Dernière version\u00a0: {version}',
    language: 'Langue',
    copyright: 'Les contributeurs de PlugBrain',
  },
  privacyPage: {
    title: 'Politique de confidentialité',
    metaDescription: 'Politique de confidentialité de PlugBrain\u00a0: l’appli ne collecte aucune donnée personnelle, ne demande aucun compte, n’affiche aucune pub et n’a pas de permission Internet.',
    updated: 'Dernière mise à jour\u00a0: 2\u00a0octobre 2025',
    back: 'Retour à l’accueil',
  },
  notFound: {
    title: 'Cette page fait une pause.',
    text: 'La page que tu cherches n’existe pas.',
    back: 'Retour à l’accueil',
  },
} satisfies Strings;
