import { AuthShell } from "@/components/AuthShell";
import LayoutShell from "@/components/LayoutShell";
export default function SignupPage() {
  return (
    <LayoutShell className="bg-[#194541]/95">
    <AuthShell
      title="Get Started Now"
      subtitle="Create your EarthLoop workspace with your company credentials."
      primaryButtonLabel="Signup"
      bottomText={
        <>
          Have an account?{" "}
          <a href="/login" className="font-medium text-teal-200 hover:underline">
            Sign In
          </a>
        </>
      }
    >
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="regCode"
              className="block text-xs font-medium tracking-wide text-slate-50/90"
            >
              Registration Code
            </label>
            <input
              id="regCode"
              type="text"
              placeholder="Enter your registration code"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-200/70 focus:outline-none focus:ring-2 focus:ring-teal-300/70"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="companyEmail"
              className="block text-xs font-medium tracking-wide text-slate-50/90"
            >
              Company Email address
            </label>
            <input
              id="companyEmail"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-200/70 focus:outline-none focus:ring-2 focus:ring-teal-300/70"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="signupPassword"
              className="block text-xs font-medium tracking-wide text-slate-50/90"
            >
              Password
            </label>
            <input
              id="signupPassword"
              type="password"
              placeholder="Choose a strong password"
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
            <span>
              I agree to the{" "}
              <a href="/terms" className="underline">
                terms &amp; policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:bg-white"
          >
            Signup
          </button>
        </div>
      </form>
    </AuthShell>
    </LayoutShell>
  );
}
