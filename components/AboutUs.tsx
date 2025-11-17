"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Slide = {
  id: number;
  title: string;
  kicker?: string;
  paragraphs: string[];
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Our Story",
    kicker: "How EarthLoop came to life...",
    paragraphs: [
      "Founded by a group of sustainability-minded developers, EarthLoop was built to simplify ESG and carbon accounting for SMEs.",
      "We started with one mission: make data-driven climate action accessible, measurable, and actionable for every business.",
    ],
  },
  {
    id: 2,
    title: "Our Mission",
    kicker: "Empowering organizations for measurable impact",
    paragraphs: [
      "We believe that sustainability shouldn’t be a privilege — it should be an operational advantage.",
      "EarthLoop provides transparent tools that help companies track emissions, reduce waste, and close the loop between data and real-world action.",
    ],
  },
  {
    id: 3,
    title: "Our Vision",
    kicker: "A connected future where sustainability is default",
    paragraphs: [
      "Our vision is a world where every company — large or small — can integrate sustainability seamlessly into its workflow.",
      "Through technology and collaboration, we aim to make carbon accountability second nature and pave the way for a regenerative economy.",
    ],
  },
];

type Dir = 1 | -1;
const slideVariants = {
  enter: (dir: Dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, filter: "blur(6px)" }),
  center: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: (dir: Dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, filter: "blur(6px)" }),
};

export default function AboutUs({ bgSrc = "/images/about-hero.png" }: { bgSrc?: string }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Dir>(1);
  const active = useMemo(() => SLIDES[index], [index]);

  const goTo = useCallback((i: number) => {
    if (i === index) return;
    setDir(i > index ? 1 : -1);
    setIndex(i);
  }, [index]);

  return (
    <section className="text-white bg-[#1f5049]/60 ">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgSrc}         
            alt="About EarthLoop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        </div>

    
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]">
            About Us
          </h2>
          <p className="mt-3 text-center text-base font-semibold md:text-lg text-white/90 max-w-3xl mx-auto">
            Discover the story, mission, and vision that drive EarthLoop to empower sustainable
            transformation through technology.
          </p>

          {/* Tabs */}
          <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-20">
            {SLIDES.map((s, i) => {
              const activeTab = i === index;
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`relative rounded-t-3xl px-6 sm:py-3  text-sm font-semibold ring-1 transition
                    ${activeTab
                      ? "bg-[#D7EAD8] text-[#214D3F] ring-[#214D3F]/30"
                      : "bg-[#38635d] text-white ring-white/20 hover:bg-white/10"}`}
                >
                  {s.title}
                  {activeTab && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      
      <div className="text-center sm:text-left sm:mx-15  max-w-3xl px-4 sm:px-6 pb-14 mt-6">
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={active.id}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 350, damping: 32, mass: 0.6 }}
            className="relative"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{active.title}</h3>
            {active.kicker && <p className="mt-2 text-xl text-[#E3ECA7]">{active.kicker}</p>}
            <div className="mt-5 space-y-3 text-white/90 leading-relaxed">
              {active.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
