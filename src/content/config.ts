import { z, defineCollection } from 'astro:content';

export const collections = {
  bookmarks: defineCollection({
    schema: z.object({
      title: z.string(),
      url: z.string().url(),
    }),
  }),
  log: defineCollection({
    schema: z.object({}),
  }),
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      label: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
