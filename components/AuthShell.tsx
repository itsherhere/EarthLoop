
"use client";

import React from "react";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bottomText: React.ReactNode;
}

export function AuthShell({
  title,
  subtitle,
  children,
  bottomText,
}: AuthShellProps) {
  return (
    <section
      className="min-h-screen w-full bg-[#416A6A] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/auth-bg.png')", 
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4 py-10">
        <div className="w-full max-w-xl rounded-[32px] border border-white/12 bg-white/6 px-8 py-10 text-white shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:px-10 md:py-12">
          <header className="mb-8 space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h1>
            <p className="text-sm text-slate-100/80">{subtitle}</p>
          </header>

          <div className="space-y-7">
            {children}

            {/* divider */}
            <div className="flex items-center gap-3 text-xs text-slate-100/70">
              <div className="h-px flex-1 bg-white/20" />
              <span>or</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>

            {/* SSO buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium text-slate-50 hover:bg-white/15">
  <span className="flex h-4 w-4 items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="17" height="17">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.23 9.21 3.24l6.85-6.85C35.38 2.38 29.98 0 24 0 14.95 0 7.08 5.88 3.56 14.44l7.98 6.19C13.16 13.16 18.17 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.57-.14-3.09-.41-4.56H24v8.64h12.65a10.8 10.8 0 01-4.68 6.99l7.36 5.71C43.01 36.66 46.5 30.24 46.5 24.5z"/>
      <path fill="#FBBC05" d="M11.54 28.63A14.34 14.34 0 019.5 24c0-1.61.27-3.16.76-4.63l-7.98-6.19A23.89 23.89 0 000 24c0 3.82.9 7.44 2.48 10.64l9.06-7.01z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.9-2.13 15.87-5.77l-7.36-5.71c-2.07 1.39-4.75 2.22-8.51 2.22-5.83 0-10.84-3.66-12.46-8.85l-9.06 7.01C7.08 42.12 14.95 48 24 48z"/>
    </svg>
  </span>
  <span>Sign in with Google</span>
</button>

              <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-medium text-slate-50 hover:bg-white/15">
                <span className="text-lg"></span>
                <span>Sign in with Apple</span>
              </button>
            </div>

            <p className="pt-1 text-center text-xs text-slate-100/80">
              {bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
