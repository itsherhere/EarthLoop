"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/app/lib/utils"; 

interface LayoutShellProps {
  children: React.ReactNode;
  className?: string; 
}

export default function LayoutShell({ children, className }: LayoutShellProps) {
  const pathname = usePathname();

  const isAuth =
    pathname.startsWith("/auth") ||
    pathname === "/login" ||
    pathname === "/signup";

  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {!isAuth && <Footer />}
    </div>
  );
}
