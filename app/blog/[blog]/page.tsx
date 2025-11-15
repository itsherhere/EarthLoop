import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/app/lib/blog";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: post.coverImage ? [post.coverImage] : [] }
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>

      <div className="mt-2 text-sm text-white/80">
        {post.date && <span>{new Date(post.date).toLocaleDateString()}</span>}
        {post.author && <span className="ml-3">by {post.author}</span>}
      </div>

      {post.coverImage && (
        <div className="relative mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10" style={{ aspectRatio: "16 / 9" }}>
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <article className="prose prose-slate prose-invert mt-8 max-w-none">
        {post.content.map((para, i) => <p key={i}>{para}</p>)}
      </article>
    </main>
  );
}
