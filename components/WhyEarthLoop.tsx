"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils"; // optional helper; replace with string concat if you don't use it

type Step = {
  id: number;
  title: string;
  kicker?: string;
  subheading?: string;
  body: string[];
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Upload & Connect",
    subheading: "Import your energy and resource data effortlessly",
    body: [
      "Start by uploading your existing data — from simple CSV or Excel files to IoT sensors.",
      "EarthLoop automatically detects patterns in your energy, water, and material use, preparing everything for real-time analysis."
    ],
  },
  {
    id: 2,
    title: "Measure & Understand",
    subheading: "Get your carbon and cost footprint instantly",
    body: [
      " Our AI-powered engine calculates CO₂ emissions and related costs across all resources.",
      "Visual dashboards help you understand your biggest impact areas and where optimization brings the most value"
    ],
  },
  {
    id: 3,
    title: "Compare & Improve",
    subheading: "See how you perform and take smarter action",
    body: [
      "Benchmark your performance against industry averages using data from Eurostat and CBS.",
      " Receive tailored recommendations to reduce your footprint, increase efficiency, and meet ESG and CSRD standards."
    ],
  },
];

type Dir = 1 | -1;

const slide = {
  enter: (dir: Dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: Dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    filter: "blur(6px)",
  }),
};

export default function WhyEarthLoop() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Dir>(1);

  const step = useMemo(() => STEPS[index], [index]);

  const goTo = useCallback(
    (next: number) => {
      if (next === index) return;
      setDir(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const next = useCallback(() => goTo((index + 1) % STEPS.length), [goTo, index]);
  const prev = useCallback(
    () => goTo((index - 1 + STEPS.length) % STEPS.length),
    [goTo, index]
  );

  // keyboard navigation
  // (Note: if you embed inside a page with other listeners, you can scope this to the section)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useState(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className="relative isolate px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-[#E8F1EC] via-[#D6E6DF] to-[#7AA39C]
    min-h-[100dvh] text-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Heading / Copy */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-black drop-shadow-[0_2px_0_rgba(255,255,255,0.5)]">
            From measurement to impact — your roadmap to sustainability
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-prose">
            From measurement to action — our 3-step roadmap empowers any business to track emissions,
            uncover insights, and accelerate sustainability growth.
          </p>
        </div>

        {/* Right: Card with steps */}
        <div className="relative">
          {/* Card */}
          <div
            className="
              relative overflow-hidden
              rounded-2xl sm:rounded-3xl
              bg-[#214D3F] text-white
              ring-1 ring-black/10
              shadow-[0_30px_60px_rgba(0,0,0,0.25)]
              min-h-[320px]
            "
          >
            {/* vertical bands (to mimic screenshot) */}
            <div className="pointer-events-none absolute inset-y-0 right-[33%] w-[14%] bg-black/15" />
            <div className="pointer-events-none absolute inset-y-0 right-[18%] w-[15%] bg-white/10" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10" />

            {/* content area */}
            <div className="relative p-6 sm:p-8 pr-24 lg:pr-28">
              {/* Step badge (left/top on small, stays inside) */}
              <motion.div
                key={`badge-${step.id}`}
                layoutId="step-badge"
                className="
                  absolute top-6 left-6 grid h-10 w-10 place-items-center
                  rounded-full border border-white/60 text-base font-semibold
                "
              >
                {step.id}
              </motion.div>

              {/* Animated slide content */}
              <div className="min-h-[220px]">
                <AnimatePresence custom={dir} mode="popLayout">
                  <motion.div
                    key={step.id}
                    custom={dir}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.6 }}
                    className="space-y-3"
                  >
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {step.title}
                    </h3>
                    {step.subheading && (
                      <p className="text-lg text-[#D4E6D6]">{step.subheading}</p>
                    )}
                    <ul className="mt-4 space-y-2 text-sm sm:text-base text-white/85">
                      {step.body.map((b, i) => (
                        <li key={i} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA row (optional) */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={prev}
                  className="rounded-full px-4 py-2 text-sm ring-1 ring-white/40 hover:bg-white/10 transition"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="rounded-full px-4 py-2 text-sm bg-[#1E693B] text-black ring-1 ring-black/20 hover:translate-y-0.5 transition"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Right rail numbers */}
            <div className="absolute inset-y-0 right-4 sm:right-6 flex flex-col items-center justify-center gap-6">
              {[0, 1, 2].map((i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-full border transition",
                      active
                        ? "border-white text-white"
                        : "border-white/50 text-white/70 hover:text-white hover:border-white"
                    )}
                  >
                    <span className="text-lg font-semibold">{i + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Drag/swipe area */}
            <motion.div
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
            />
          </div>
        </div>
      </div>
      



      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </section>
  );
}
