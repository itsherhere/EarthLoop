"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const solutions = [
  {
    title: "Carbon Accounting",
    subtitle: "Upload your energy data and calculate emissions",
    bullets: [
      "Upload utility data",
      "Analyze carbon footprint",
      "Download reports",
    ],
    img: "/images/solutions/carbon-accounting.png",
    imgAlt: "EarthLoop Carbon Accounting Dashboard",
  },
  {
    title: "ESG Dashboard",
    subtitle: "Track key sustainability metrics and benchmark performance",
    bullets: ["Monitor ESG KPIs", "Compare with peers", "Drive improvements"],
    img: "/images/solutions/ESG-dashboard.png",
    imgAlt: "EarthLoop ESG KPIs Comparison Dashboard",
  },
];

export default function Solutions() {
  return (
    <section className="relative isolate text-white bg-[#0d5a4f]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Solutions
          </h2>
          <p className="mt-2 text-white/80 text-base md:text-lg">
            Tailored features for measurement, insight and action.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 mx-7 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-15">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <Card
                title={s.title}
                subtitle={s.subtitle}
                className="flex flex-col justify-between min-h-[550px] ring-1 ring-white/50"
                
              >
               

                
                <div className="mt-6">
                  <div className="">
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      width={960}
                      height={560}
                      className=" w-full h-auto object-cover p-3 md:p-4"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-3 text-white/90">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#89CFA8]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Button
                    href="/solutions"
                    variant="ghost"
                    className="
                      inline-flex items-center justify-center
                      h-12 px-6 rounded-full
                      text-base font-semibold text-white
                      ring-1 ring-white/25 hover:ring-white/60
                      transition
                    "
                  >
                    Explore Module
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
