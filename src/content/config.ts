import { defineCollection, z } from 'astro:content';

export const collections = {
  bookmarks: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      url: z.string().url(),
    }),
  }),
  log: defineCollection({
    type: 'content',
    schema: z.object({
      publishedDate: z.date().optional(),
    }),
  }),
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      publishedDate: z.date(),
      label: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};
