'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
        window.requestAnimationFrame(() => { updateProgress(); ticking = false; });
        ticking = true;
      }
    };
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden scroll-mt-24 min-h-screen w-full flex items-center justify-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
          alt="Luxury wellness spa treatment"
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          priority
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-black/70 via-black/50 to-black/30'
            : 'bg-gradient-to-br from-black/50 via-black/35 to-black/20'
        }`} />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-t from-[#0f0f0f]/95 via-transparent to-black/20'
            : 'bg-gradient-to-t from-white/80 via-transparent to-white/20'
        }`} />
      </div>

      {/* Decorative elements */}
      <div
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10 animate-float-soft"
        style={{ transform: `translate3d(0, ${scrollProgress * -30}px, 0)` }}
      />
      <div
        className="absolute -left-24 bottom-12 h-80 w-80 rounded-full bg-emerald-500/5 blur-[150px] -z-10 hidden sm:block"
        style={{ transform: `translate3d(0, ${scrollProgress * 35}px, 0)` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center max-w-5xl mx-auto z-10 flex flex-col items-center justify-center py-32 sm:py-40 min-h-[calc(100vh-100px)]">
          {/* Eyebrow */}
          <InView animation="fade-up" className="mb-6">
            <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-medium backdrop-blur-sm ${
              isDark
                ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                : 'bg-white/80 border border-emerald-700/15 text-emerald-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Premium Wellness Destination
            </span>
          </InView>

          {/* Main heading */}
          <InView animation="fade-up" delay={100} className="mb-6">
            <h1 className="text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <span className="block">Where Wellness Meets</span>
              <span className="block mt-2 text-emerald-300">
                Excellence
              </span>
            </h1>
          </InView>

          {/* Subtitle */}
          <InView animation="fade-up" delay={200} className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed">
              Experience an elevated blend of fitness excellence, rejuvenating spa rituals, 
              and restorative cuisine curated for the modern lifestyle.
            </p>
          </InView>

          {/* CTA buttons */}
          <InView animation="fade-up" delay={300} className="mb-16">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/gym" className="btn btn-primary px-8 py-4 flex items-center gap-3 text-base">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline px-8 py-4 flex items-center gap-3 text-base text-white border-white/30 hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Consultation
              </Link>
            </div>
          </InView>

          {/* Stats bar */}
          <InView animation="fade-up" delay={400} className="hidden sm:block w-full max-w-4xl">
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/20 backdrop-blur-md rounded-2xl py-6 px-8 ${
                isDark
                  ? 'bg-black/40 border border-white/10'
                  : 'bg-black/30 border border-white/15'
              }`}
              style={{ transform: `translate3d(0, ${scrollProgress * -20}px, 0)`, opacity: 0.85 + scrollProgress * 0.15 }}
            >
              {[
                { label: 'Happy Members', value: '2,500+' },
                { label: 'Expert Trainers', value: '15+' },
                { label: 'Wellness Programs', value: '50+' },
                { label: 'Years Experience', value: '8+' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center sm:px-6 py-2">
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-300 font-display">
                    {item.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-[0.25em] text-white/40">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-300/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}