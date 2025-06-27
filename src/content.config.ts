import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const article = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    updateNotice: z.string().optional(),
    order: z.number().int(),
  }),
});

const project = defineCollection({
  loader: file("./src/content/projects.yml"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    framework: z.string().optional(),
    languages: z.string().optional(),
    started: z.date(),
    ended: z.date().optional(),
    url: z.string().url(),
  }),
});

export const collections = { article, project };
