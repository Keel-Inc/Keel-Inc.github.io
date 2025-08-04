import { defineCollection, z } from "astro:content";

const articleSchema = z.object({
  title: z.string(),
  series: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  publishedDate: z.date(),
  modifiedDate: z.date()
});

export const collections = {
  articles: defineCollection({ schema: articleSchema })
};
