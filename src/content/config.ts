import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    author: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),


    series: z.string().optional(),
    seriesName: z.string().optional(),
    seriesOrder: z.number().optional(),
     
    
    
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),

    // 生命周期系统
    timeless: z.boolean().default(false),
    validDays: z.number().optional(),
  })
});

export const collections = {
  posts
};
