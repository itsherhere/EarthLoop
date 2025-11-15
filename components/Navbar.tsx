"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "sticky top-2 z-50 mx-5 ",
        "rounded-xl md:rounded-3xl lg:rounded-full",
        "content-center",
        "backdrop-blur    supports-[backdrop-filter]:bg-white/60",
        scrolled
          ? "shadow-md shadow-black/10 border border-black/5"
          : "shadow-none border border-transparent",
        "transition-shadow transition-colors duration-200",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
        {/* top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="EarthLoop" width={60} height={50} />
            <span className="font-lemon text-2xl sm:text-3xl leading-none">
              <span className="text-black">Earth</span>
              <span className="text-[#1d683a]">Loop</span>
            </span>
          </Link>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/about"
              className="text-black/70 text-[18px] tracking-wide hover:text-black transition"
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-black/70 text-[18px] tracking-wide hover:text-black transition"
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className="text-black/70 text-[18px] tracking-wide hover:text-black transition"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black/70 text-[18px] tracking-wide hover:text-black transition"
            >
              Contact
            </Link>
          </div>

          {/* actions (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/signin"
              variant=""
              size="md"
              className="
              transform  hover:text-[#1d3630]
              hover:bg-[#caf1e895] hover:border-[#4e796f] transition duration-200  hover:text-[18px]
                bg-white
                border-2 border-[#356a5d]
                shadow-[2px_4px_4px_#00000040]
                text-[16px] font-Roboto font-medium
              "
            >
              Sign in
            </Button>

            <Button
              href="/login"
              variant=""
              size="md"
              className="
                transform bg-[#356a5d] hover:text-[#356a5d]
                hover:bg-[#caf1e895] hover:border-[#4e796f] transition duration-200  hover:text-[18px]
                border-2 border-[#c6c1ac8f]
                shadow-[2px_4px_4px_#00000040]
                text-[16px] font-Roboto font-medium text-white
              "
            >
              Log in
            </Button>
            {/* fix hover effects */}
          </div>

          {/* mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1d683a]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {/* open icon */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {/* close icon */}
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* mobile panel */}
        <div
          className={`lg:hidden origin-top transition-all duration-200 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:bg-black/5"
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:bg-black/5"
            >
              Solutions
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:bg-black/5"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:bg-black/5"
            >
              Contact
            </Link>

            <div className="mt-3 flex gap-2 px-2">
              <Button
                href="/signin"
                variant="outline"
                size="sm"
                className="
                  bg-white
                  border-2 border-black
                  shadow-[7px_7px_4px_#00000040]
                  text-sm font-medium w-full
                "
              >
                Sign in
              </Button>

              <Button
                href="/login"
                variant="filled"
                size="sm"
                className="
                  bg-[#3f7b6c] hover:bg-[#356a5d]
                  border-2 border-[#7f6b6b]
                  shadow-[7px_7px_4px_#00000040]
                  text-sm font-medium text-white w-full
                "
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
