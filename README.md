# plugbrain.app

The website for [PlugBrain](https://github.com/msbelaid/PlugBrain), the open-source Android app that locks distracting apps behind a quick math challenge.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

Needs Node 24 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things are

| Path | What |
| --- | --- |
| `src/i18n/` | All page copy: `en.ts`, `fr.ts` and `ar.ts`. A translation is a copy of `en.ts`, a line in `src/i18n/index.ts` and `astro.config.mjs`, and a `src/pages/<locale>/index.astro` page. |
| `src/layouts/Home.astro` | The home page, rendered at `/`, `/fr/` and `/ar/`. Arabic is right to left: use logical CSS (`margin-inline-start`, `text-align: start`) rather than left/right. |
| `src/components/` | One component per section. `ChallengeDemo.astro` is the playable challenge in the hero. |
| `src/pages/privacy.astro` | Privacy policy, mirrored from `PRIVACY_POLICY.md` in the app repo. Keep them in sync. |
| `src/assets/screens/` | Phone screenshots per language, from the app repo's `fastlane/metadata/android/<locale>/images/phoneScreenshots/`. |
| `src/data/links.ts` | Store links and the contributor list. Avatars live in `public/contributors/`. |
| `public/` | Logo, favicon, social preview image (`og.png`) and `CNAME`. |

## Privacy

The site sets no cookies and loads nothing from third parties: fonts, images and avatars are all served from this site. The GitHub star count and latest version are fetched once at build time.
