import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const post = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    featured: z.number().int().optional(),
    special: z.boolean().optional(),
    topics: z.array(reference("topic")),
  }),
});

const link = defineCollection({
  loader: file("./src/content/links.yml"),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
  }),
});

const topic = defineCollection({
  loader: file("./src/content/topics.yml"),
  schema: z.object({
    post: reference("post"),
    related: z.array(reference("topic")),
  }),
});

const artwork = defineCollection({
  loader: file("./src/content/artworks.yml"),
  schema: z.object({
    post: reference("post"),
    images: z.string().url(),
  }),
});

export const collections = { post, link, topic, artwork };
