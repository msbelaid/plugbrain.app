import type { APIRoute } from 'astro';
import { getStrings } from '../i18n';
import { pagesFor, gardenHome } from './garden';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** An RSS feed of the garden stories published in `locale`, newest first. */
export function rss(locale: string): APIRoute {
  return async ({ site }) => {
    const g = getStrings(locale).garden;
    const items = (await pagesFor(locale)).reverse().map((s) => {
      const url = new URL(s.url, site).href;
      return `    <item>
      <title>${esc(s.entry.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${s.entry.data.date.toUTCString()}</pubDate>
      <description>${esc(s.entry.data.description)}</description>
    </item>`;
    });
    const home = new URL(gardenHome(locale), site).href;
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(g.title)}</title>
    <link>${home}</link>
    <atom:link href="${home}rss.xml" rel="self" type="application/rss+xml"/>
    <description>${esc(g.intro)}</description>
    <language>${locale}</language>
${items.join('\n')}
  </channel>
</rss>
`;
    return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
  };
}
