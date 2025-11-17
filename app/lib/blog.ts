import posts from "@/data/posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
  content: string[];
};

export function getAllPosts(): Post[] {
  return [...(posts as Post[])].sort((a, b) =>
    (b.date || "").localeCompare(a.date || "")
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return (posts as Post[]).find(p => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return (posts as Post[]).map(p => p.slug);
}

