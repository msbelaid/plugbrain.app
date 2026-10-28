// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://plugbrain.app',
  i18n: {
    // Each locale needs a matching file in src/i18n/ and a page in src/pages/<locale>/.
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
});
