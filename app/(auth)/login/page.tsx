import { AuthShell } from "@/components/AuthShell";
import LayoutShell from "@/components/LayoutShell";
export default function LoginPage() {
  return (
   <LayoutShell className="bg-[#194541]/95">
     <AuthShell
      title="Welcome back!"
      subtitle="Enter your credentials to access your account."
      primaryButtonLabel="Login"
      bottomText={
        <>
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-medium text-teal-200 hover:underline">
            Sign Up
          </a>
        </>
      }
    >
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium tracking-wide text-slate-50/90"
            >
              Company Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-200/70 focus:outline-none focus:ring-2 focus:ring-teal-300/70"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label
                htmlFor="password"
                className="font-medium tracking-wide text-slate-50/90"
              >
                Password
              </label>
              <button
                type="button"
                className="text-[11px] text-teal-200 hover:underline"
              >
                Forgot password
              </button>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-200/70 focus:outline-none focus:ring-2 focus:ring-teal-300/70"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2 text-xs text-slate-100/80">
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border border-white/30 bg-transparent text-teal-300"
            />
            <span>Remember me for 30 days</span>
          </label>

          <button
            type="submit"
            className="mt-1 mb-6 w-full rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-white"
          >
            Login
          </button>
        </div>
      </form>
    </AuthShell>
   
   </LayoutShell>
  );
}
