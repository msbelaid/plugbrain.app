import type { ImageMetadata } from 'astro';

// Real 1.6.0 screenshots, copied from msbelaid/PlugBrain fastlane/metadata/android/<folder>/images/phoneScreenshots:
// en-US into en/, fr-FR into fr/ and ar into ar/. Every locale has the same seven screens, in the same order.
const files = import.meta.glob<ImageMetadata>('../assets/screens/*/*.png', { eager: true, import: 'default' });

export interface Screens {
  list: ImageMetadata[];
  welcome: ImageMetadata;
  apps: ImageMetadata;
  home: ImageMetadata;
  challenge: ImageMetadata;
  interval: ImageMetadata;
  difficulty: ImageMetadata;
  dark: ImageMetadata;
}

/** The screenshots in the page's language, or the English ones if there are none. */
export function screensFor(locale: string | undefined): Screens {
  const folder = locale && files[`../assets/screens/${locale}/1.png`] ? locale : 'en';
  const list = [1, 2, 3, 4, 5, 6, 7].map((n) => files[`../assets/screens/${folder}/${n}.png`]);
  const [welcome, apps, home, challenge, interval, difficulty, dark] = list;
  return { list, welcome, apps, home, challenge, interval, difficulty, dark };
}
