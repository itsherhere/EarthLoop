import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/earthloop-signup-bg.jpg"
          alt="Sustainable ESG background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content CARD – put this ABOVE with z-10 */}
      <div className="relative z-10 max-w-md w-full bg-white/95 rounded-[32px] shadow-xl mx-6 md:ml-16 p-8 md:p-10 space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold text-gray-900">
            Get Started Now
          </h1>
        </div>

        <form className="space-y-5">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              Registration Code
            </label>
            <input
              type="text"
              placeholder="Enter your registration code"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              Company Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-700">
            <input
              id="terms"
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-gray-400 text-emerald-600 focus:ring-0"
            />
            <label htmlFor="terms" className="select-none">
              I agree to the{" "}
              <span className="font-semibold underline">
                terms &amp; policy
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-[#4F6F32] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#425f29] transition"
          >
            Signup
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          <span>or</span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <span className="h-3 w-3 rounded-full bg-red-500" />
            </span>
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-[12px] text-white">
              
            </span>
            <span>Sign in with Apple</span>
          </button>
        </div>

        <p className="text-xs text-center text-gray-700">
          Have an account?{" "}
          <button type="button" className="font-semibold text-[#1E4BB5]">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
