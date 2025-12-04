import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/blog"
      className="
        inline-flex items-center md:mx-10 mx-5 mb-4 gap-2 
        text-slate-200 hover:text-white
        bg-white/10 hover:bg-white/20
        px-4 py-2 rounded-full
        backdrop-blur-md border border-white/20
        transition-all duration-200
      "
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back to Blog
    </Link>
  );
}
