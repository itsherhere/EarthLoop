import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/app/lib/blog";
import LayoutShell from "@/components/LayoutShell";

export const dynamic = "force-static"; 

export default function BlogPage() {
  const posts = getAllPosts();

  return (
   <LayoutShell className="bg-linear-to-t from-[#cbe9e0]  via-[#8db0a6] via-35% to-[#0d5a4f] to-98%">
     <div className="min-h-screen w-full " >
      {/*difference between navbar bg and the page bg  */}
    <main className="mx-auto max-w-7xl px-4 py-10 ">
      <div className="mb-8 flex items-center justify-between ">
        <h1 className="blog-title text-4xl md:text-5xl text-white">BLOG</h1>
      </div>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
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
   </LayoutShell>
  );
}
