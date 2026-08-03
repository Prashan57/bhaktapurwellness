'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import { TESTIMONIALS } from '@/constants/constants';
import { useEffect, useRef, useState } from 'react';

export function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstChild instanceof HTMLElement ? container.firstChild.offsetWidth + 16 : 300;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(Math.max(idx, 0), TESTIMONIALS.length - 1));
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % TESTIMONIALS.length;
        const container = scrollRef.current;
        if (container) {
          const cardWidth = container.firstChild instanceof HTMLElement ? container.firstChild.offsetWidth + 16 : 300;
          container.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollTo = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIdx(idx);
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild instanceof HTMLElement ? container.firstChild.offsetWidth + 16 : 300;
      container.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <InView animation="fade-in">
            <span className="section-eyebrow">
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
              Testimonials
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
            </span>
          </InView>
          <InView animation="fade-in" delay={100}>
            <h2 className="section-title">
              What Our <span className="gradient-text">Members Say</span>
            </h2>
          </InView>
          <InView animation="fade-in" delay={150}>
            <p className="section-subtitle">
              Real stories from real people who have transformed their lives with us.
            </p>
          </InView>
        </div>

        {/* Testimonials */}
        <div className="relative max-w-7xl mx-auto">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-4 sm:px-0 -mx-4 sm:mx-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="snap-center flex-shrink-0 w-[85vw] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/8 hover:border-emerald-500/20 shadow-luxury hover:shadow-luxury-lg'
                    : 'bg-gray-50 border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-lg'
                }`}>
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-5 w-5 ${i < testimonial.rating ? (isDark ? 'text-emerald-400' : 'text-emerald-600') : (isDark ? 'text-gray-600' : 'text-gray-300')}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>&ldquo;{testimonial.content}&rdquo;</p>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button key={idx} onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx
                    ? isDark ? 'bg-emerald-400 w-8' : 'bg-emerald-600 w-8'
                    : isDark ? 'bg-white/20 hover:bg-white/40 w-2' : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}