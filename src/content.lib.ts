import { getCollection, type CollectionEntry } from "astro:content";

type Post = CollectionEntry<"post">;
type Tag = CollectionEntry<"tag">;

export async function getViewablePosts() {
  return await getCollection("post", ({ data }) => data.published != null);
}

export function splitFeaturedNormalPosts(posts: Post[]): [Post[], Post[]] {
  const featured: Post[] = [];
  const normal: Post[] = [];
  for (const post of posts)
    (post.data.featured == null ? normal : featured).push(post);
  return [featured, normal];
}

export function filterPostsByTag({ id }: Tag) {
  return (post: Post) => post.data.tags?.find((tag) => id === tag.id) != null;
}

export function sortPostsByFeatured(a: Post, b: Post) {
  return (a.data.featured ?? 1e9) - (b.data.featured ?? 1e9);
}

export function sortPostsByPublished(a: Post, b: Post) {
  return (
    (b.data.published?.getTime() ?? 0) - (a.data.published?.getTime() ?? 0)
  );
}

export async function getTags() {
  return await getCollection("tag");
}

export function sortTagsByName(a: Tag, b: Tag) {
  return a.id.localeCompare(b.id);
}
