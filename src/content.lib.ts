import { getEntry, type ReferenceDataEntry } from "astro:content";

export interface InternalLink {
  title: string;
  url: string;
}

export async function pageToLink(reference: ReferenceDataEntry<"page">): Promise<InternalLink> {
  const entry = await getEntry(reference);
  return {
    title: entry.data.title,
    url: `/${entry.id}`,
  }
}
