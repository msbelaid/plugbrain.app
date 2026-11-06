import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Garden stories live in src/content/garden/<locale>/<slug>.md.
// The same file name in en/, fr/ and ar/ makes one story in three languages.
const garden = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/garden' }),
  schema: z.object({
    title: z.string(),
    /** One sentence for search results and link previews. */
    description: z.string(),
    /** Publication date. A future date keeps the story hidden until that day (the site rebuilds daily). */
    date: z.coerce.date(),
    /** Describes the featured image src/assets/garden/<slug>.png, for screen readers and link previews. */
    imageAlt: z.string().optional(),
    stage: z.enum(['seed', 'sprout', 'seedling', 'sapling', 'youngTree', 'blossom', 'fruit']),
    /** Keep a story out of the site entirely while it is being written. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { garden };
