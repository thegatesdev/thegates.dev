import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topics: z.array(reference("topic")).optional(),
    next: z.array(reference("post")).optional(),
  }),
});

const topic = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { post, topic };
