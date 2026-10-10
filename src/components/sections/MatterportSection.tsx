"use client";

import { useState } from "react";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";

export function MatterportSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="virtual-tour" aria-labelledby="tour-heading" className="relative mx-auto w-full max-w-6xl">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>360° Walkthrough</Eyebrow>
        <h2 id="tour-heading" className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Discover the <GradientText>Space</GradientText>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Walk through our signature retreat with an interactive 3D tour — drag to look around.
        </p>
      </div>

      <div className="relative mt-8 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#041a1b] shadow-[0_35px_80px_-35px_rgba(0,0,0,0.65)]">
        {!isLoaded && (
          <div className="flex aspect-video w-full items-center justify-center bg-[#062324]" aria-hidden="true">
            <div className="flex flex-col items-center gap-3 text-slate-300">
              <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-[#fdd693]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">Loading Tour</span>
            </div>
          </div>
        )}
        <iframe
          className={`relative aspect-video w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "absolute inset-0 opacity-0"}`}
          src="https://my.matterport.com/show/?m=AGTBFFXsYeK"
          title="Bhaktapur Wellness 3D virtual tour"
          allow="xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </section>
  );
}
