import AboutEarthLoop from "@/components/AboutUs";

export const metadata = {
  title: "About — EarthLoop",
  description:
    "Learn about EarthLoop’s story, mission, and vision for a more sustainable future.",
};

export default function AboutPage() {
  return (
    <main
      className="
        bg-gradient-to-br from-[#2c665e] via-[#92beb9] to-[#38635d]
        min-h-[100dvh] text-black
      "
    >
      <div className="mt-8">
        <AboutEarthLoop />
      </div>
    </main>
  );
}
