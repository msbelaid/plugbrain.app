// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://plugbrain.app',
  i18n: {
    // English only for now. Add 'fr', 'ar', ... here and a matching file in src/i18n/.
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
});
