import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleSchema = z.object({
  title: z.string(),
  series: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  publishedDate: z.date(),
  modifiedDate: z.date()
});

export const collections = {
  articles: defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: articleSchema
  })
};
