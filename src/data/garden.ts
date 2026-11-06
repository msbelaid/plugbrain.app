import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { defaultLocale, homeFor } from '../i18n';

// Featured images: src/assets/garden/<slug>.png (1200×630), shared by every language.
const images = import.meta.glob<{ default: ImageMetadata }>('../assets/garden/*.png', { eager: true });
export function imageFor(slug: string): ImageMetadata | undefined {
  return images[`../assets/garden/${slug}.png`]?.default;
}

export type Stage = CollectionEntry<'garden'>['data']['stage'];
export const stageOrder: Stage[] = ['seed', 'sprout', 'seedling', 'sapling', 'youngTree', 'blossom', 'fruit'];

export interface Story {
  slug: string;
  /** Language the story is shown in: the page's, or English when it isn't translated yet. */
  lang: string;
  entry: CollectionEntry<'garden'>;
  url: string;
  published: boolean;
}

// `GARDEN_PREVIEW=1 npm run dev` shows future stories too, to review them before their date.
const preview = import.meta.env.GARDEN_PREVIEW === '1' || process.env.GARDEN_PREVIEW === '1';

export function gardenHome(locale: string): string {
  return `${homeFor(locale)}garden/`;
}

function split(id: string) {
  const [lang, ...rest] = id.split('/');
  return { lang, slug: rest.join('/') };
}

/**
 * Every story in timeline order, in `locale` where translated and in English otherwise.
 * Future-dated stories are included with `published: false` so the index can show the next one.
 */
export async function stories(locale: string): Promise<Story[]> {
  const all = await getCollection('garden', ({ data }) => !data.draft);
  const now = new Date();
  const bySlug = new Map<string, Story>();
  for (const entry of all) {
    const { lang, slug } = split(entry.id);
    if (lang !== locale && lang !== defaultLocale) continue;
    if (lang !== locale && bySlug.has(slug)) continue; // the translation wins
    // Untranslated stories link to the English page.
    const url = `${gardenHome(lang)}${slug}/`;
    bySlug.set(slug, { slug, lang, entry, url, published: preview || entry.data.date <= now });
  }
  return [...bySlug.values()].sort((a, b) => a.entry.data.date.getTime() - b.entry.data.date.getTime());
}

/** Stories that have their own page in `locale` (published, and written in that language). */
export async function pagesFor(locale: string) {
  return (await stories(locale)).filter((s) => s.published && s.lang === locale);
}

/** `long`: "January 15, 2024"; `month`: "Jan 2024" (the timeline); `day`: "January 15" (upcoming stories). */
export function formatDate(date: Date, locale: string, style: 'long' | 'month' | 'day' = 'long') {
  const opts: Intl.DateTimeFormatOptions =
    style === 'month' ? { month: 'short', year: 'numeric' }
    : style === 'day' ? { day: 'numeric', month: 'long' }
    : { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-DZ-u-nu-latn' : locale, { ...opts, timeZone: 'UTC' }).format(date);
}
