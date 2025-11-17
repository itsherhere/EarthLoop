import Button from "@/components/ui/Button";
import { Mail, Globe } from "lucide-react";

export default function CTA() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center 
    bg-linear-to-r from-[#c8ebdd]  via-[#fcfcfc] via-35% to-[#b1d5c7] to-98%
   px-6 py-20 text-center text-[#164137]">
      {/* headline */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Ready to take action?
      </h1>

      {/* subtitle */}
      <p className="text-lg md:text-2xl text-[#1f574a]/90 mb-10 font-medium">
        start measuring your impact with <span className="font-semibold">EarthLoop</span>.
      </p>

      {/* buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button
          href="/demo"
          size="lg"
          className="bg-[#2f5947] rounded-lg hover:bg-[#19483e] text-white px-8"
        >
          Try Demo
        </Button>

        <Button
          href="mailto:hello@earthloop.io"
          variant="ghost"
          size="lg"
          className="text-[#1f574a] rounded-lg ring-2 ring-[#1f574a] hover:bg-[#1f574a] hover:text-white px-8"
        >
          Contact Us
        </Button>
      </div>

      {/* contact info */}
      <div className="flex items-center justify-center gap-6 text-[#1f574a]/90 text-base md:text-lg">
        <div className="flex items-center gap-2">
          <Mail size={18} />
          <a href="mailto:hello@earthloop.io" className="hover:underline">
            hello@earthloop.io
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Globe size={18} />
          <span>Netherlands</span>
        </div>
      </div>
    </main>
  );
}
