import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const post = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date().optional(),
    updated: z.date().optional(),
    featured: z.number().int().optional(),
    tags: z.array(reference("tag")).optional(),
    next: z.array(reference("post")).optional(),
  }),
});

const tag = defineCollection({
  loader: file("./src/content/tags.yml"),
  schema: z.object({
    description: z.string().optional(),
    relatedRef: z.array(reference("tag")).optional(),
  }),
});

export const collections = { post, tag };
