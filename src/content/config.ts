import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    author: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  posts
};
