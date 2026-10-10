"use client";

import { gsap, gsapSetup, isReducedMotion } from "@/lib/gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowRight, FaPause, FaPlay } from "react-icons/fa";

const HERO_IMAGES = [
  {
    id: "retreat",
    title: "Wellness Sanctuary",
    src: "/images/gallery/wellness-retreat.jpg",
    heading: "Find Your",
    accent: "Sanctuary",
    description:
      "A calm Nordic-inspired retreat where glass, light, and stillness quiet the noise of everyday life.",
  },
  {
    id: "meditation",
    title: "Meditation & Sauna",
    src: "/images/gallery/meditation.jpg",
    heading: "Stillness &",
    accent: "Steam",
    description:
      "Guided meditation and Himalayan salt saunas restore calm to body and mind, one breath at a time.",
  },
  {
    id: "hero",
    title: "Aquatic & Pool",
    src: "/images/gallery/hero.jpg",
    heading: "Dive Into",
    accent: "Serenity",
    description:
      "A heated indoor pool and hydrotherapy zone where warm water and quiet light wash the day away.",
  },
  {
    id: "outdoor",
    title: "Outdoor Vitality",
    src: "/images/gallery/outdoor-activity.jpg",
    heading: "Move With",
    accent: "Nature",
    description:
      "Open-air yoga, strength training, and sunrise movement in rhythm with the valley.",
  },
  {
    id: "spa",
    title: "Himalayan Spa Suite",
    src: "/images/gallery/spa-treatment.jpg",
    heading: "Restore &",
    accent: "Renew",
    description:
      "Signature Himalayan rituals, deep-tissue therapy, and herbal treatments that leave you renewed.",
  },
];

const SLIDE_DURATION = 6500;

const TRUST_POINTS = [
  { value: 7, label: "Signature facilities" },
  { value: "7 Days", label: "Open all week · 6 AM – 10 PM" },
  { value: "1-on-1", label: "Certified personal coaching" },
];

export function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const active = HERO_IMAGES[activeImageIndex];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    // Pause the carousel when the tab is hidden — saves CPU/battery.
    const start = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (document.hidden) return;
      timerRef.current = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      }, SLIDE_DURATION);
    };
    start();
    const onVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else start();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, reducedMotion]);

  // Minimal GSAP touch: one entrance timeline + gentle scroll parallax.
  // Both skipped on reduced motion and coarse pointers stay static.
  useEffect(() => {
    if (isReducedMotion()) return;
    gsapSetup();
    const content = contentRef.current;
    if (content) {
      gsap.fromTo(
        content.querySelectorAll("[data-hero-stagger]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.09,
          overwrite: "auto",
          clearProps: "transform",
        },
      );
    }
    const section = sectionRef.current;
    if (section && content && window.matchMedia("(pointer: fine)").matches) {
      const tween = gsap.to(content, {
        yPercent: 8,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }
  }, []);

  const goTo = useCallback((idx: number) => setActiveImageIndex(idx), []);

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Bhaktapur Wellness highlights"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#0a4243] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Backdrop carousel — opacity crossfade only (GPU-cheap).
          Inactive slides are visibility-hidden so the browser skips
          painting them entirely. */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {HERO_IMAGES.map((item, idx) => {
          const isActive = idx === activeImageIndex;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                isActive ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 ${reducedMotion ? "" : "animate-[heroKenburns_7s_ease-out_forwards]"}`}
                style={{
                  animationPlayState:
                    isActive && !isPaused ? "running" : "paused",
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "low"}
                  decoding="async"
                  quality={72}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-[#041a1b]/45 to-black/45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="container relative z-20 flex flex-1 flex-col justify-end pb-10 pt-32 md:justify-center md:pb-16 md:pt-36"
      >
        <p
          data-hero-stagger
          className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#fdd693] backdrop-blur-md"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#fdd693]"
          />
          Bhaktapur · Nepal
        </p>

        <h1
          key={activeImageIndex}
          className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl"
        >
          <span className="block overflow-hidden">
            <span className="block animate-[heroRise_0.7s_ease-out_forwards]">
              {active.heading}
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span
              className="block animate-[heroRise_0.7s_ease-out_forwards] text-[#fdd693]"
              style={{ animationDelay: "120ms" }}
            >
              {active.accent}
            </span>
          </span>
        </h1>

        <div aria-live="polite" className="mt-4 max-w-xl">
          <p
            key={`desc-${activeImageIndex}`}
            className="animate-[heroRise_0.6s_ease-out_forwards] text-sm leading-relaxed text-white/85 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            {active.description}
          </p>
        </div>

        <div
          data-hero-stagger
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#fdd693] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0a4243] shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#fff0d0] sm:text-sm"
          >
            Book Your Visit
            <FaArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#facilities"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:border-[#fdd693] hover:text-[#fdd693] sm:text-sm"
          >
            Explore Facilities
          </Link>
        </div>

        <dl
          data-hero-stagger
          className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6"
        >
          {TRUST_POINTS.map((point) => (
            <div key={point.label} className="flex flex-col">
              <dd className="order-1 text-xl font-extrabold text-[#fdd693] sm:text-2xl">
                {point.value}
              </dd>
              <dt className="order-2 mt-1 block text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/60">
                {point.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 hidden md:block">
        <div className="container flex items-center justify-between gap-6 pb-8">
          <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Choose highlight"
          >
            {HERO_IMAGES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === activeImageIndex}
                aria-label={`Show ${item.title}`}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] ${
                  idx === activeImageIndex
                    ? "w-10 bg-[#fdd693]"
                    : "w-2 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="text-xs tabular-nums text-white/60"
            >
              {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
              {String(HERO_IMAGES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              aria-pressed={isPaused}
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-colors hover:border-[#fdd693] hover:text-[#fdd693]"
            >
              {isPaused ? (
                <FaPlay aria-hidden="true" className="h-3 w-3" />
              ) : (
                <FaPause aria-hidden="true" className="h-3 w-3" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dots */}
      <div
        className="container relative z-20 flex items-center gap-2 pb-8 md:hidden"
        role="tablist"
        aria-label="Choose highlight"
      >
        {HERO_IMAGES.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={idx === activeImageIndex}
            aria-label={`Show ${item.title}`}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeImageIndex ? "w-8 bg-[#fdd693]" : "w-2 bg-white/35"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes heroRise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroKenburns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[heroRise_0\\.7s_ease-out_forwards\\],
          .animate-\\[heroRise_0\\.6s_ease-out_forwards\\],
          .animate-\\[heroKenburns_7s_ease-out_forwards\\] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
