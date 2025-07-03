import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"post">;
type Tag = CollectionEntry<"tag">;

export function viewPostFilter(post: Post) {
  const isPublished = post.data.published !== undefined;
  return isPublished;
}

function timeOrZero(date: Date | undefined): number {
  return date?.getTime() ?? 0;
}

export function viewPostSort(a: Post, b: Post) {
  const featured = (a.data.featured ?? 1e9) - (b.data.featured ?? 1e9);
  const date = timeOrZero(b.data.published) - timeOrZero(a.data.published);
  return featured || date;
}

export function viewTagSort(a: Tag, b: Tag) {
  return a.id.localeCompare(b.id);
}

export function viewPostsWithTagFilter({ id }: Tag) {
  return (post: Post) => {
    if (!viewPostFilter(post) || post.data.tags === undefined) return false;
    return post.data.tags.find((tag) => id === tag.id);
  };
}
