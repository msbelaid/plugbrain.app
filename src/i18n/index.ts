import en from './en';
import fr from './fr';
import ar from './ar';

export type Strings = typeof en;

// To add a language: create e.g. de.ts with the same shape, import it here, add it to
// `languages`, add the locale to astro.config.mjs and create src/pages/<locale>/index.astro.
// Right-to-left locales go in RTL.
const dictionaries: Record<string, Strings> = { en, fr, ar };
const RTL = new Set(['ar', 'fa']);

/** Every locale the home page is translated to, with its name in that language. */
export const languages: Record<string, string> = { en: 'English', fr: 'Français', ar: 'العربية' };
export const defaultLocale = 'en';

export function getStrings(locale: string | undefined): Strings {
  return dictionaries[locale ?? defaultLocale] ?? en;
}

export function dirFor(locale: string | undefined): 'ltr' | 'rtl' {
  return RTL.has(locale ?? defaultLocale) ? 'rtl' : 'ltr';
}

/** The home page of a locale: `/` for English, `/fr/` for French. */
export function homeFor(locale: string | undefined): string {
  return !locale || locale === defaultLocale ? '/' : `/${locale}/`;
}
