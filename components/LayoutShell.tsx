"use client";

import { usePathname } from "next/navigation";
import {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuth =
    pathname.startsWith("/auth") || 
    pathname === "/login" ||
    pathname === "/signup";

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!isAuth && <Footer />}
    </>
  );
}
