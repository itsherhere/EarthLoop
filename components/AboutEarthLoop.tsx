"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils"; // same helper

type Step = {
  id: number;
  title: string;
  subheading?: string;
  body: string[];
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Our Story",
    subheading: "How EarthLoop came to life",
    body: [
      "Founded by a group of sustainability-minded developers, EarthLoop was built to simplify ESG and carbon accounting for SMEs.",
      "We started with one mission: make data-driven climate action accessible, measurable, and actionable for every business.",
    ],
  },
  {
    id: 2,
    title: "Our Mission",
    subheading: "Empowering organizations for measurable impact",
    body: [
      "We believe that sustainability shouldn’t be a privilege — it should be an operational advantage.",
      "EarthLoop provides transparent tools that help companies track emissions, reduce waste, and close the loop between data and real-world action.",
    ],
  },
  {
    id: 3,
    title: "Our Vision",
    subheading: "A connected future where sustainability is default",
    body: [
      "Our vision is a world where every company — large or small — can integrate sustainability seamlessly into its workflow.",
      "Through technology and collaboration, we aim to make carbon accountability second nature and pave the way for a regenerative economy.",
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

export default function AboutEarthLoop() {
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

  // keyboard arrows
  useState(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section className="relative isolate px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left text intro */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-black drop-shadow-[0_2px_0_rgba(255,255,255,0.5)]">
            About EarthLoop
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-prose">
            Discover the story, mission, and vision that drive EarthLoop to
            empower sustainable transformation through technology.
          </p>
        </div>

        {/* Right animated card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#214D3F] text-white ring-1 ring-black/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)] min-h-[320px]">
            {/* decorative bands */}
            <div className="pointer-events-none absolute inset-y-0 right-[33%] w-[14%] bg-black/15" />
            <div className="pointer-events-none absolute inset-y-0 right-[18%] w-[15%] bg-white/10" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10" />

            <div className="relative p-6 sm:p-8 pr-24 lg:pr-28">
              <motion.div
                key={`badge-${step.id}`}
                layoutId="about-badge"
                className="absolute top-6 left-6 grid h-10 w-10 place-items-center rounded-full border border-white/60 text-base font-semibold"
              >
                {step.id}
              </motion.div>

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
                        <li key={i} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav buttons */}
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

            {/* right-side numbered nav */}
            <div className="absolute inset-y-0 right-4 sm:right-6 flex flex-col items-center justify-center gap-6">
              {[0, 1, 2].map((i) => {
                const active = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to section ${i + 1}`}
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

            {/* swipe gesture */}
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
    </section>
  );
}

