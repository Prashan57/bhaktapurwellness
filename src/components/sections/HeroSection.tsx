"use client";

import { InView } from "@/components/motion/InView";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const updateProgress = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progressRaw = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.min(Math.max(progressRaw, 0), 1);
      setScrollProgress(Number.isFinite(clamped) ? clamped : 0);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden scroll-mt-28 min-h-screen w-full flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/gallery/meditation.jpg"
          alt="Wellness retreat hero"
          fill
          className="object-cover w-full h-full brightness-[0.85]"
          sizes="(max-width: 640px) 100vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/50 to-black/35 dark:from-black/70 dark:via-black/55" />
      </div>

      {/* Ambient decorations */}
      <div
        className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl -z-10 animate-float-soft"
        style={{ transform: `translate3d(0, ${scrollProgress * -24}px, 0) scale(${1 + scrollProgress * 0.05})` }}
      />
      <div
        className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-secondary/40 blur-[130px] -z-10 hidden sm:block"
        style={{ transform: `translate3d(0, ${scrollProgress * 28}px, 0) scale(${1 + scrollProgress * 0.08})` }}
      />

      <div className="container mx-auto px-4">
        <div className="relative text-center max-w-5xl mx-auto z-10 flex flex-col items-center justify-center py-20 sm:py-32 min-h-[calc(100vh-120px)] md:min-h-0">
          <InView className="animate-scale-in hidden sm:block">
            <span className="section-eyebrow mb-4 sm:mb-6 bg-white/10 dark:bg-white/5 px-4 sm:px-5 py-2 rounded-full backdrop-blur">
                Premier wellness destination
            </span>
          </InView>
          <InView delay={80} className="animate-scale-in">
            <h1 className="section-title text-3xl sm:text-5xl md:text-6xl text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <span className="bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/70 bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(12,74,110,0.35)] dark:text-white">
                Escape to a world of mindful movement, luxury treatments, and
                tailored nutrition.
              </span>
            </h1>
          </InView>
          <InView delay={160}>
            <p className="mt-3 sm:mt-6 text-base sm:text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
              Discover an elevated blend of gym performance, spa rituals, and
              restorative cuisine curated for modern lifestyles.
            </p>
          </InView>
          <InView delay={240}>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#services" className="btn btn-primary px-7 py-3 flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 8.25l6.5-5.5 6.5 5.5M4.5 9.75v8.25a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V9.75"
                  />
                </svg>
                Explore Services
              </a>
              <a
                href="#contact"
                className="btn btn-outline px-7 py-3 flex items-center gap-3 text-white/85 border-white/30 hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25l-9 5.25-9-5.25M21 12l-9 5.25L3 12"
                  />
                </svg>
                Plan a Visit
              </a>
            </div>
          </InView>
          <InView delay={320} className="hidden sm:block">
            <div
              className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-0 sm:divide-x sm:divide-white/20 text-white/80 backdrop-blur-sm bg-white/5 rounded-2xl py-6 px-8 border border-white/15 shadow-elevated"
              style={{ transform: `translate3d(0, ${scrollProgress * -14}px, 0)`, opacity: 0.85 + scrollProgress * 0.15 }}
            >
              {[
                { label: "Club Members", value: "2,500+" },
                { label: "Wellness Programs", value: "15 curated" },
                { label: "Chef-led Cuisine", value: "Seasonal menus" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center sm:px-6">
                  <span className="text-sm uppercase tracking-[0.25em] text-white/60">
                    {item.label}
                  </span>
                  <span className="mt-2 text-xl font-semibold text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
