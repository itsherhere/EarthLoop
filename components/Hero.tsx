
"use client";
import Image from "next/image";
import Button from "./ui/Button";

type heroProps = {
  title?: string;
  sub1?: string;
  sub2?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
  treeSrc?: string; 
};

export default function Hero({
  title = "close the circuit, open the future",
  sub1 = "From data to action — EarthLoop gives every SME the tools to make sustainability simple, measurable,",
  sub2 = "and profitable. Because the future belongs to those who close the circuit and open new possibilities.",
  ctaPrimaryHref = "/calculator",
  ctaSecondaryHref = "/demo",
  treeSrc = "/images/tree.png",
}: heroProps) {
  return (
    <section
      className="
        relative isolate
      
        
        text-white
      "
    >
      
   
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(50%_45% at 50%_0%,black,transparent)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-1 sm:pt-16 sm:pb-4 text-center">
        {/* Headline */}
        <h1
          className="
            text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight
            drop-shadow-[0_6px_0_rgba(0,0,0,0.25)]
          "
          style={{ textShadow: "0 6px 0 rgba(0,0,0,0.25)" }} 
        >
          {title}
        </h1>

        
        <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-white/85">
          {sub1}
        </p>
        <p className="mt-2 max-w-3xl mx-auto text-sm sm:text-base text-white/70">
          {sub2}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
        <Button href={ctaPrimaryHref}
            className="
              inline-flex items-center justify-center
               px-4 sm:px-7 py-3 sm:py-3.5
              bg-[#377974]
              text-[15px] sm:text-base font-semibold
              text-black
              ring-1 ring-[#379e71]/20 
              hover:translate-y-0.5 hover:shadow-[0_px_0_rgba(0,0,0,0.25)]
              active:translate-y-1 active:shadow-[0_3px_0_rgba(0,0,0,0.25)]
              transition
            "> Calculate&nbsp;Footprint
            </Button>{/* fix styling using component and props */}
          <Button
          variant=""
            href={ctaSecondaryHref}
            className="
              inline-flex items-center justify-center
              rounded-full px-12 sm:px-15 py-3 sm:py-3.5
              text-[15px] sm:text-base font-semibold
              text-[#377974]
             bg-[#91c7bf]
              ring-1 ring-[#377974]
              hover:translate-y-0.5
              hover:shadow-[0_px_0_rgba(0,0,0,0.25)]
              active:translate-y-1 active:shadow-[0_3px_0_rgba(0,0,0,0.25)]
              transition
              "
          >
            Try Demo
          </Button>
          {/* change hover effect */}
        </div>
        
        {/* Tree Illustration */}
        <div className="mt-6 sm:mt-8">
  <div className="relative mx-auto h-[280px] w-auto sm:h-[360px] lg:h-[440px] aspect-[3/2] sm:aspect-[3/2]">
    <div className="tree-stack">
    
      <Image
        src={treeSrc}
        alt="EarthLoop tree illustration"
        fill
        priority
        className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)] tree-img-base"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
      />

      {/* leaves */}
      <Image
        src={treeSrc}
        alt="EarthLoop tree leaves"
        fill
        priority
        className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.35)] tree-img-leaves"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 800px"
      />
    </div>
  </div>

  
  <div className="ml-[200px] mt-2 h-4 w-48 sm:w-64 rounded-[999px] bg-black/30 blur-xl opacity-50" />
</div>


      </div>
    </section>
  );
}
