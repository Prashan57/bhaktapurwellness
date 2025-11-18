import { InView } from "@/components/motion/InView";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
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
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl -z-10 animate-float-soft" />
      <div className="absolute -left-24 bottom-12 h-64 w-64 rounded-full bg-secondary/40 blur-[130px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="relative text-center max-w-5xl mx-auto z-10 flex flex-col items-center justify-center py-24 sm:py-32">
          <InView className="animate-scale-in">
            <span className="section-eyebrow mb-6 bg-white/10 dark:bg-white/5 px-5 py-2 rounded-full backdrop-blur">
              Premier wellness destination
            </span>
          </InView>
          <InView delay={80} className="animate-scale-in">
            <h1 className="section-title text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              Escape to a world of mindful movement, luxury treatments, and
              tailored nutrition.
            </h1>
          </InView>
          <InView delay={160}>
            <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
              Discover an elevated blend of gym performance, spa rituals, and
              restorative cuisine curated for modern lifestyles.
            </p>
          </InView>
          <InView delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
          <InView delay={320}>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-0 sm:divide-x sm:divide-white/20 text-white/80 backdrop-blur-sm bg-white/5 rounded-2xl py-6 px-8 border border-white/15 shadow-elevated">
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
