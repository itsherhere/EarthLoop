import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/app/lib/blog";

export default function BlogGrid({ limit }: { limit?: number }) {
  const posts = getAllPosts();
  const limited = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return (
    <div className="min-h-screen w-full bg-linear-to-t from-[#cbe9e0] via-[#8db0a6] via-35% to-[#0d5a4f] to-98%">
      <main className="mx-auto max-w-7xl px-4 pt-20 pb-2 lg:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="blog-title text-4xl md:text-5xl text-white">BLOG</h1>
          <Link href="/blog" className="glass-btn">
            Read Our Blog →
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6">
          {limited.map((p) => (
            <BlogCard
              key={p.slug}
              href={`/blog/${p.slug}`}
              title={p.title}
              excerpt={p.excerpt}
              imgSrc={p.coverImage}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
