import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"post">;

export function viewPostFilter(post: Post) {
  const isPublished = post.data.published !== undefined;
  return isPublished;
}

function timeOrZero(date: Date | undefined): number {
  return date ? date.getTime() : 0;
}

export function viewPostSort(a: Post, b: Post) {
  const featured = b.data.featured - a.data.featured;
  if (featured !== 0) return featured;
  const time = timeOrZero(b.data.published) - timeOrZero(a.data.published);
  return time;
}
