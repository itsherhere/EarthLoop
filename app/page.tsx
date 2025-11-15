import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyEarthLoop from "@/components/WhyEarthLoop";
import ModuleCard from "@/components/Solutions";
import BlogGrid from "@/components/BlogGrid";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero treeSrc="/images/tree.png" />
      <AboutUs bgSrc="/images/about-hero.png" />
      <WhyEarthLoop />
      <ModuleCard />
      <BlogGrid limit={3} />
      <Pricing />
      <CTA />
    </>
  );
}
