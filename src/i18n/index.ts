import en from './en';

export type Strings = typeof en;

// To add a language: create e.g. fr.ts with the same shape, import it here,
// and add the locale to astro.config.mjs. Right-to-left locales go in RTL.
const dictionaries: Record<string, Strings> = { en };
const RTL = new Set(['ar', 'fa']);

export function getStrings(locale: string | undefined): Strings {
  return dictionaries[locale ?? 'en'] ?? en;
}

export function dirFor(locale: string | undefined): 'ltr' | 'rtl' {
  return RTL.has(locale ?? 'en') ? 'rtl' : 'ltr';
}
