'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { useState } from 'react';
import { TESTIMONIALS } from '@/constants/constants';

export function TestimonialsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#141414]' : 'bg-gray-50'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <InView animation="fade-up">
            <span className={`section-eyebrow mb-4 inline-flex items-center gap-2`}>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
              Testimonials
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
            </span>
          </InView>
          <InView animation="fade-up" delay={100}>
            <h2 className={`section-title mb-6`}>
              What Our <span className="text-emerald-600 dark:text-emerald-400">Members</span> Say
            </h2>
          </InView>
          <InView animation="fade-up" delay={200}>
            <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Hear from our satisfied members about their transformative 
              wellness experiences at Bhaktapur Wellness.
            </p>
          </InView>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <InView key={testimonial.id} animation="fade-up" delay={index * 150}>
              <div
                className={`relative rounded-2xl p-8 transition-all duration-500 h-full flex flex-col ${
                  activeTestimonial === index
                    ? isDark
                      ? 'bg-gradient-to-b from-emerald-500/15 to-emerald-500/5 border-2 border-emerald-500/40 shadow-primary-lg'
                      : 'bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-700/30 shadow-lg'
                    : isDark
                      ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/20'
                      : 'bg-white border border-gray-200 hover:border-emerald-200 shadow-sm'
                }`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                {/* Quote icon */}
                <div className={`mb-6 ${isDark ? 'text-emerald-500/30' : 'text-emerald-200'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content */}
                <p className={`leading-relaxed mb-8 flex-1 italic font-accent text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`relative h-12 w-12 rounded-full overflow-hidden ${
                    isDark ? 'border-2 border-emerald-500/30' : 'border-2 border-emerald-200'
                  }`}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* Trust indicators */}
        <InView animation="fade-up" delay={400} className="mt-16">
          <div className={`flex flex-wrap justify-center items-center gap-8 sm:gap-12 ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {[
              { label: '4.9/5 Rating', icon: '★' },
              { label: '500+ Reviews', icon: '✦' },
              { label: '98% Satisfaction', icon: '◆' },
              { label: 'Award Winning', icon: '♦' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-emerald-500 text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </InView>
      </div>
    </section>
  );
}