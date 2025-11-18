"use client";

import { useState } from "react";

export function MatterportSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="virtual-tour"
      className="relative mt-24 w-full max-w-6xl mx-auto px-4"
      aria-label="Bhaktapur Wellness virtual tour"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Discover the Space
        </h2>
        <p className="mt-3 max-w-2xl text-base text-foreground/70">
          Walk through our signature Bhaktapur Wellness retreat with an interactive 3D Matterport tour.
        </p>
      </div>

      <div className="mt-10 relative w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.65)] backdrop-blur-xl">
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 text-foreground/70">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-foreground/30 border-t-transparent" />
              <span className="text-sm uppercase tracking-[0.35em]">Loading Tour</span>
            </div>
          </div>
        )}

        <iframe
          className={`relative aspect-video w-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          src="https://my.matterport.com/show/?m=AGTBFFXsYeK"
          title="Bhaktapur Wellness Matterport Tour"
          allow="xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </section>
  );
}
