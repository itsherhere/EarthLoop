// components/FooterMinimal.tsx
import Link from "next/link";

export default function FooterMinimal() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        text-center text-white
        bg-gradient-to-br from-[#3A625B] via-[#4E716C] to-[#577D77]
        px-6 py-2
      "
    >
      {/* Brand */}
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">EarthLoop</h2>
      <p className="mt-2 text-lg md:text-xl text-white/80">Sustainability simplified.</p>

      {/* Nav */}
      <nav className="mt-6">
        <ul className="flex items-center justify-center gap-8 md:gap-12 text-base md:text-lg">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/solutions">Solutions</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
      </nav>

      {/* Socials */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <Social href="https://www.linkedin.com" label="LinkedIn">
          {/* LinkedIn */}
          <path d="M4.98 3.5A2.5 2.5 0 1 0 2.5 6 2.5 2.5 0 0 0 4.98 3.5zM3 8h4v13H3zM10 8h3.8v1.8h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.13V21H19v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.49-2.19 3V21H10z" />
        </Social>

        <Social href="https://twitter.com" label="Twitter / X">
          {/* Twitter (old bird icon for familiarity) */}
          <path d="M24 4.56c-.88.39-1.83.66-2.83.78 1.02-.61 1.8-1.57 2.16-2.73-.95.56-2.01.97-3.13 1.19a4.93 4.93 0 0 0-8.4 4.49A13.98 13.98 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57c-.74-.02-1.44-.23-2.06-.57a4.93 4.93 0 0 0 3.95 4.86c-.67.18-1.38.21-2.08.08a4.94 4.94 0 0 0 4.61 3.42A9.9 9.9 0 0 1 0 19.54a13.98 13.98 0 0 0 7.56 2.22c9.14 0 14.14-7.72 13.84-14.65A9.9 9.9 0 0 0 24 4.56z" />
        </Social>

        <Social href="https://instagram.com" label="Instagram">
          {/* Instagram */}
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.67.52.72.28 1.33.66 1.93 1.26.6.6.98 1.21 1.26 1.93.28.7.47 1.5.52 2.67.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.52 2.67a5.12 5.12 0 0 1-1.26 1.93 5.12 5.12 0 0 1-1.93 1.26c-.7.28-1.5.47-2.67.52-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.52a5.12 5.12 0 0 1-1.93-1.26 5.12 5.12 0 0 1-1.26-1.93c-.28-.7-.47-1.5-.52-2.67C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.52-2.67.28-.72.66-1.33 1.26-1.93.6-.6 1.21-.98 1.93-1.26.7-.28 1.5-.47 2.67-.52C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.51.21-1.86.34-.47.18-.81.39-1.17.75-.36.36-.57.7-.75 1.17-.13.35-.29.88-.34 1.86-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.51.34 1.86.18.47.39.81.75 1.17.36.36.7.57 1.17.75.35.13.88.29 1.86.34 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.51-.21 1.86-.34.47-.18.81-.39 1.17-.75.36-.36.57-.7.75-1.17.13-.35.29-.88.34-1.86.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.51-.34-1.86a3.32 3.32 0 0 0-.75-1.17 3.32 3.32 0 0 0-1.17-.75c-.35-.13-.88-.29-1.86-.34-1.24-.06-1.61-.07-4.76-.07Zm0 3.7a6.3 6.3 0 1 1 0 12.6 6.3 6.3 0 0 1 0-12.6Zm0 2a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6Zm5.9-2.44a1.47 1.47 0 1 1 0 2.94 1.47 1.47 0 0 1 0-2.94Z" />
        </Social>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-sm text-white/80">
        © {year} EarthLoop. All rights reserved.
      </p>
    </footer>
  );
}

/* ---------- Helpers ---------- */
function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-md px-1"
      >
        {children}
      </Link>
    </li>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-grid h-9 w-9 place-items-center rounded-lg ring-1 ring-white/25 hover:ring-white/60 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className="fill-white">
        {children}
      </svg>
    </a>
  );
}
