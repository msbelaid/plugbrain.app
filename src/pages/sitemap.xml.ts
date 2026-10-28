import type { APIRoute } from 'astro';
import { languages, defaultLocale, homeFor } from '../i18n';

// Every .astro page except the 404, so new pages are listed without touching this file.
const pages = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\.\//, '/').replace(/(index)?\.astro$/, '').replace(/([^/])$/, '$1/'))
  .filter((path) => path !== '/404/')
  .sort();

// The home page exists in every language: each copy lists all of them, so search engines show the right one.
const homes = Object.keys(languages).map(homeFor);
const alternates: [string, string][] = [
  ...Object.keys(languages).map((l): [string, string] => [l, homeFor(l)]),
  ['x-default', homeFor(defaultLocale)],
];

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((path) => {
      const links = homes.includes(path)
        ? alternates.map(([l, p]) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${new URL(p, site)}"/>`).join('') + '\n  '
        : '';
      return `  <url><loc>${new URL(path, site)}</loc>${links}</url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
