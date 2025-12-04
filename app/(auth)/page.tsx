"use client";

import { useState } from "react";

type Mode = "login" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-50 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-emerald-900/60" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#16a34a_1px,transparent_0)] [background-size:40px_40px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative w-full max-w-md rounded-3xl border border-emerald-400/25 bg-slate-900/70 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.75)] px-8 py-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="mx-auto inline-flex items-center justify-center h-10 w-10 rounded-full border border-emerald-400/60 bg-slate-900/80 shadow-[0_0_25px_rgba(16,185,129,0.6)]">
            <div className="h-6 w-6 rounded-full border-2 border-emerald-400" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">EarthLoop</h1>
          <p className="text-sm text-slate-300/80">
            Trusted by climate-forward teams for audit-ready carbon &amp; ESG reporting.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm font-medium">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`pb-1 transition-all ${
              mode === "login"
                ? "text-emerald-300 border-b border-emerald-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={`pb-1 transition-all ${
              mode === "signup"
                ? "text-emerald-300 border-b border-emerald-400"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Full name
              </label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-600/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent transition"
                placeholder="Alex Green"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Work email
            </label>
            <input
              type="email"
              className="w-full rounded-xl bg-slate-900/60 border border-slate-600/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent transition"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl bg-slate-900/60 border border-slate-600/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          {mode === "signup" && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-200">
                Company (optional)
              </label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-900/60 border border-slate-600/60 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent transition"
                placeholder="Greenwave Analytics"
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-3 w-3 rounded border-slate-500 bg-slate-900/80 text-emerald-400 focus:ring-0"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            {mode === "login" && (
              <button
                type="button"
                className="hover:text-slate-200 transition-colors"
              >
                Forgot password?
              </button>
            )}
          </div>

          {/* Primary button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.45)] hover:brightness-110 active:scale-[0.99] transition"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="h-px flex-1 bg-slate-700/70" />
          <span>or continue with</span>
          <div className="h-px flex-1 bg-slate-700/70" />
        </div>

        {/* Social buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 hover:border-emerald-400/70 hover:bg-slate-900 transition"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-slate-900">
              G
            </span>
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-600/80 bg-slate-900/80 px-4 py-2.5 text-sm text-slate-100 hover:border-emerald-400/70 hover:bg-slate-900 transition"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[13px] font-semibold text-slate-900">
              
            </span>
            <span>Sign in with Apple</span>
          </button>
        </div>

        {/* Tiny footer text */}
        <p className="text-[11px] text-slate-500 text-center pt-2">
          By continuing, you agree to EarthLoop&apos;s Terms &amp; Privacy Policy.
        </p>
      </div>
    </div>
  );
}
