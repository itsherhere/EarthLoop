import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";

export default function ContactPage() {
  return (
    <LayoutShell className="min-h-screen bg-gradient-to-br from-[#123f39] via-[#2e675e] to-[#0d5a4f] text-white">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AEE1C3]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s talk about practical sustainability.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            EarthLoop is a product prototype exploring clearer carbon-accounting
            and ESG workflows for small and medium-sized businesses.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Back to EarthLoop
          </Link>
        </div>
      </section>
    </LayoutShell>
  );
}
