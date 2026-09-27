"use client";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
};

const features: Feature[] = [
  {
    title: "AI-powered\nanalytics",
    desc: "Explore CO₂ and ESG insights through a clear, business-focused interface.",
    icon: (
      <svg viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
        <g fill="none" stroke="#8AD1AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 2a7 7 0 0 0-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2A7 7 0 0 0 12 2Z" />
          <path d="M12 8l-1.5 2H13l-1 2" />
        </g>
      </svg>
    ),
  },
  {
    title: "Smart\nbenchmarking",
    desc: "Compare your data with industry standards and EU metrics.",
    icon: (
      <svg viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
        <g fill="none" stroke="#8AD1AF" strokeWidth="1.2" strokeLinecap="round">
          <rect x="4" y="12.5" width="3" height="7.5" rx="1.2" />
          <rect x="9.5" y="9" width="3" height="11" rx="1.2" />
          <rect x="15" y="5" width="3" height="15" rx="1.2" />
          <rect x="20.5" y="10.5" width="3" height="9.5" rx="1.2" />
        </g>
      </svg>
    ),
  },
  {
    title: "Made for\nSMEs",
    desc: "Designed around practical sustainability reporting workflows for SMEs.",
    icon: (
      <svg viewBox="0 0 24 24" width="100" height="100" className="mx-auto">
        <g fill="none" stroke="#8AD1AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v10H3V10z" />
          <path d="M7 10l4-6a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2l-1 7a2 2 0 0 1-2 2H7" />
        </g>
      </svg>
    ),
  },
];

export default function WhyEarthLoop() {
  return (
    <section className="relative isolate text-white  bg-linear-to-t from-[#0d5a4f]  via-[#537a6f] via-35% to-[#1f5049]/60 to-98% ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#C6E4D2]">Why EarthLoop?</h2>
          <p className="mt-5 text-[#C6E4D2]/60 text-base md:text-lg">
            Because every business deserves the tools to make an impact
          </p>
        </div>

        {/* Cards */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <Card
                title={f.title}
                body={f.desc}
                icon={f.icon}
                href={f.href ?? "#"}
                buttonText="Learn More"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
