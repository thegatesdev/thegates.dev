import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const link = defineCollection({
  loader: file("./src/content/links.toml"),
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    author: z.string().optional(),
  }),
});

const page = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    nextRef: reference("page").optional(),
    previousRef: reference("page").optional(),
  }),
});

const post = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topicsRef: z.array(reference("topic")).optional(),
    nextRef: z.array(reference("post")).optional(),
  }),
});

const topic = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    inline: z.string(),
  }),
});

export const collections = { link, page, post, topic };
