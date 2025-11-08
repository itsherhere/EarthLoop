"use client"
import React from "react";
import Image from "next/image";


export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        
        "sticky top-1 z-50 w-auto ",
        "content-center",
        "rounded-full",
        "mt-3 mx-5",
        // bg + optional blur:
        //"bg-[conic-gradient(from_90deg_at_85%_57%,rgba(212,235,226,1)_13%,rgba(209,231,223,1)_41%,rgba(209,231,223,1)_86%,rgba(209,231,223,1)_96%)]",
        "backdrop-blur supports-[backdrop-filter]:bg-white/60",
        // animated shadow when scrolling:
        scrolled ? "shadow-md/50 shadow-md border-b border-black/5" : "shadow-none",
        "transition-shadow"
      ].join(" ")}
    >
      <nav className="mx-auto max-w-1xl px-2 sm:px-6 lg:px-8 ">
        {/* top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="EarthLoop" width={60} height={50} />
            <span className="font-lemon text-2xl sm:text-3xl leading-none">
              <span className="text-black">Earth</span>
              <span className="text-[#1d683a]">Loop</span>
            </span>
          </a>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-black/70 text-[18px] tracking-wide hover:opacity-100 transition" href="#about">About</a>
            <a className="text-black/70 font-medium text-[18px] tracking-wide hover:opacity-100 transition" href="#solutions">Solutions</a>
            <a className="text-black/70 font-medium text-[18px] tracking-wide hover:opacity-100 transition" href="#blog">Blog</a>
            <a className="text-black/70 font-medium text-[18px] tracking-wide hover:opacity-100 transition" href="#contact">Contact</a>
          </div>

          {/* actions (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="h-10 px-7 rounded-full bg-white border-2 border-[#7f6b6b] shadow-[7px_7px_4px_#00000040] text-[16px] font-Roboto font-medium" >
              Sign in
            </button>
            <button className="h-10 px-7 rounded-full bg-[#3f7b6c] border-2 border-[#7f6b6b] shadow-[7px_7px_4px_#00000040] text-[16px] font-Roboto font-medium text-white">
              Log in
            </button>
          </div>

          {/* mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1d683a]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
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
            <a className="block px-3 py-2 rounded-md text-base font-medium text-black/80 hover:bg-black/5" href="#about">About</a>
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5" href="#solutions">Solutions</a>
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5" href="#blog">Blog</a>
            <a className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5" href="#contact">Contact</a>
            <div className="mt-2 flex gap-2 px-2">
              <button className="h-10 px-4 rounded-full bg-white border-2 border-black shadow-[7px_7px_4px_#00000040] text-sm font-medium w-full">
                Sign in
              </button>
              <button className="h-10 px-4 rounded-full bg-[#3f7b6c] border-2 border-[#7f6b6b] shadow-[7px_7px_4px_#00000040] text-sm font-medium text-white w-full">
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
