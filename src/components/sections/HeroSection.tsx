"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  {
    id: "retreat",
    title: "Wellness Sanctuary",
    src: "/images/gallery/himalayan-sanctuary.jpg",
    heading: "Find Your",
    accent: "Sanctuary",
    description:
      "A tranquil Himalayan wellness sanctuary where natural serenity, thoughtful design and expert care quiet the noise of everyday life.",
  },
  {
    id: "meditation",
    title: "Meditation & Sauna",
    src: "/images/gallery/meditation-room.jpg",
    heading: "Stillness &",
    accent: "Steam",
    description:
      "Guided meditation and Himalayan salt saunas melt away tension, restoring calm to body and mind one breath at a time.",
  },
  {
    id: "hero",
    title: "Fitness & Strength",
    src: "/images/gallery/fitness-arena.jpg",
    heading: "Train &",
    accent: "Excel",
    description:
      "State-of-the-art fitness arena with cardio zones, strength equipment, and the boxing ring — built for champions.",
  },
  {
    id: "outdoor",
    title: "Outdoor Vitality",
    src: "/images/gallery/outdoor-trail.jpg",
    heading: "Move With",
    accent: "Nature",
    description:
      "Open-air yoga, guided treks, and sunrise movement sessions reconnect your body with the rhythm of the Himalayan valley.",
  },
  {
    id: "spa",
    title: "Himalayan Spa Suite",
    src: "/images/gallery/spa-treatment.jpg",
    heading: "Restore &",
    accent: "Renew",
    description:
      "Signature Himalayan spa rituals, deep-tissue therapies, and herbal treatments leave you renewed from head to toe.",
  },
];

const NAV_LINKS = [
  { label: "HOME", href: "#home", active: true },
  { label: "FACILITIES", href: "#facilities" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

const SLIDE_DURATION = 6000;

export function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Carousel autoplay — paused on hover/focus
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a4243] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= FULL-SCREEN IMAGE CAROUSEL ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {HERO_IMAGES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity ease-in-out ${
              idx === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "1200ms" }}
          >
            <div
              className={`absolute inset-0 ${
                reducedMotion ? "" : "animate-[kenburns_6s_ease-out_forwards]"
              }`}
              style={{
                animationPlayState:
                  idx === activeImageIndex && !isPaused ? "running" : "paused",
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover brightness-95 contrast-[1.02]"
              />
            </div>
            {/* Gradient vignette — keeps text legible across the whole frame */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a4243]/70 via-black/10 to-black/40 pointer-events-none" />
          </div>
        ))}

        {/* Extra scrim behind the headline zone */}
        <div className="absolute inset-x-0 top-1/3 bottom-0 bg-gradient-to-b from-black/0 via-black/35 to-black/20 pointer-events-none z-10" />
      </div>

      {/* top bar removed — global `Navbar` component renders the header */}

      {/* hero-local menu removed — navigation lives in global `Navbar` component */}

      {/* ================= OVERLAPPING HEADLINE (changes per slide) ================= */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 px-6 sm:px-12 md:px-16">
        <h1
          key={activeImageIndex}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-bold text-white tracking-tighter leading-[1.05] pb-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
        >
          <span className="block overflow-hidden">
            <span className="block animate-[fadeSlideUp_0.9s_ease-out_forwards]">
              {HERO_IMAGES[activeImageIndex].heading}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block animate-[fadeSlideUp_0.9s_ease-out_forwards] text-[#fdd693]"
              style={{ animationDelay: "180ms" }}
            >
              {HERO_IMAGES[activeImageIndex].accent}
              <svg
                className="inline-block w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 ml-2 -mt-2 sm:-mt-4 text-[#fdd693] fill-current align-middle"
                viewBox="0 0 100 100"
                aria-hidden
              >
                {/* leaf motif — reinforces wellness/nature theme */}
                <path d="M50 15 C30 15 18 35 18 55 C18 75 33 88 50 90 C55 60 60 40 78 25 C68 18 58 15 50 15 Z" />
                <path
                  d="M50 90 C48 70 46 50 45 35"
                  stroke="#0a4243"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>
      </div>

      {/* ================= BOTTOM: paragraph + dots + trust badge ================= */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-6 sm:px-12 md:px-16 pb-8 md:pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-lg">
          <p
            key={`desc-${activeImageIndex}`}
            className="text-white/90 text-sm sm:text-base leading-relaxed tracking-wide font-normal drop-shadow-sm animate-[fadeSlideUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: "300ms" }}
          >
            {HERO_IMAGES[activeImageIndex].description}
          </p>

          <div className="mt-6 flex items-center gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`Select slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  idx === activeImageIndex
                    ? "w-8 bg-[#fdd693]"
                    : "w-2 bg-[#fdd693]/40 hover:bg-[#fdd693]/70 hover:scale-125"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Local keyframes for the calm, once-only headline reveal + slow background zoom */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes kenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.06);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeSlideUp_1s_ease-out_forwards\\],
          .animate-\\[kenburns_6s_ease-out_forwards\\] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
