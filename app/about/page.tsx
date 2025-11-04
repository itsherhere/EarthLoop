import AboutEarthLoop from "@/components/AboutEarthLoop";

export const metadata = {
  title: "About — EarthLoop",
  description:
    "Learn about EarthLoop’s story, mission, and vision for a more sustainable future.",
};

export default function AboutPage() {
  return (
    <main
      className="
        bg-gradient-to-br from-[#E8F1EC] via-[#D6E6DF] to-[#7AA39C]
        min-h-[100dvh] text-black
      "
    >
      <div className="mx-auto max-w-7xl">
        <AboutEarthLoop />
      </div>
    </main>
  );
}
