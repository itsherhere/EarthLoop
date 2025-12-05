import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/app/lib/blog";
import { getAllPosts } from "@/app/lib/blog";
import BackButton from "@/components/ui/BackButton";
import LayoutShell from "@/components/LayoutShell";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}


export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}


export default async function BlogPostPage({ params }: PageProps) {
  
  const { slug } = await params;

  const post = getPostBySlug(slug);

  const all = getAllPosts();
  const related = all
  .filter(p => p.slug !== post.slug)
  .filter(p => p.tags?.some(t => post.tags?.includes(t)))
  .slice(0, 3);


  if (!post) return notFound();

  return (
    <LayoutShell className="bg-gradient-to-b from-[#0b2e28] via-[#0f3e36] to-[#154d45]">
    <main className="min-h-screen w-full bg-gradient-to-b from-[#0b2e28] via-[#0f3e36] to-[#154d45] pt-20 pb-24">
      <BackButton/>
      {/* Header */}
      <header className="mx-auto max-w-3xl text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
          {post.title}
        </h1>
  
        <div className="mt-4 text-sm text-white/70 flex items-center justify-center gap-4">
          {post.date && (
            <span>{new Date(post.date).toLocaleDateString()}</span>
          )}
          {post.author && <span>• {post.author}</span>}
        </div>
      </header>
  
      <section className="mx-auto max-w-5xl px-4 mt-10 mb-16 flex flex-col lg:flex-row gap-20 items-start">
  {post.coverImage && (
    <div className="order-1 lg:order-2 w-full lg:w-1/2">
      <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/20">
        <div className="relative aspect-[4/3]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 lg:group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  )}

  
  <article
    className="
      order-2 lg:order-1
      w-full lg:w-1/2
      space-y-4
      leading-relaxed
      text-slate-100
      [&_*]:text-slate-100
    "
  >
    {post.content.map((para, i) => (
      <p key={i}>{para}</p>
    ))}
  </article>
</section>

  
  {/* 🔹 Related Posts */}
{related.length > 0 && (
  <section className="mt-20 mx-20">
    <h2 className="text-2xl font-bold text-white mb-6">
      Related Posts
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {related.map(r => (
        <a
          key={r.slug}
          href={`/blog/${r.slug}`}
          className="block bg-[#1e3d39] rounded-xl p-4 hover:bg-[#264843] transition"
        >
          <h3 className="text-lg font-semibold text-white">{r.title}</h3>
          <p className="text-slate-100/70 mt-2 text-sm">
            {r.excerpt}
          </p>
        </a>
      ))}
    </div>
  </section>
)}

    </main>
    </LayoutShell>
  );
  
}
