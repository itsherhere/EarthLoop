import Image from "next/image";
import Link from "next/link";
import GlassButton from "./ui/GlassButton";

type BlogCardProps = {
  href: string;
  title: string;
  excerpt?: string;
  imgSrc?: string;
};

export default function BlogCard({
  href,
  title,
  excerpt,
  imgSrc,
}: BlogCardProps) {
  const hasImage = !!imgSrc && imgSrc.trim() !== "";

  return (
    <article
      className="
        h-full
        flex flex-col
        rounded-2xl bg-[#1e3d39]
        shadow-md ring-1 ring-black/5
        overflow-hidden
        transition hover:shadow-lg
      "
    >
   
      {hasImage && (
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(min-width:1280px) 25vw, (min-width:768px) 45vw, 90vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}


      <div className="flex flex-col flex-1 p-5 gap-2">
        <Link href={href} className="block">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
        </Link>

        {excerpt && (
          <p className="text-sm leading-6 text-slate-100/80">
            {excerpt}
          </p>
        )}

       
        <div className="mt-auto pt-4">
          <GlassButton asLinkHref={href}>
            Read More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </GlassButton>
        </div>
      </div>
    </article>
  );
}
