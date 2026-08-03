'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { SERVICES } from '@/constants/constants';
import Image from 'next/image';

export function ServicesOverview() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-20">
          <InView animation="fade-in">
            <span className="section-eyebrow">
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
              Our Services
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
            </span>
          </InView>
          <InView animation="fade-in" delay={100}>
            <h2 className="section-title">
              Discover Your Path to <span className="gradient-text">Total Wellness</span>
            </h2>
          </InView>
          <InView animation="fade-in" delay={150}>
            <p className="section-subtitle">
              Four distinct pillars of well-being, each crafted with precision and passion to elevate your lifestyle.
            </p>
          </InView>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => (
            <InView key={service.title} animation="fade-in" delay={index * 100}>
              <Link href={`/${service.title.toLowerCase()}`} className="group block h-full">
                <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/8 hover:border-emerald-500/40 shadow-luxury hover:shadow-luxury-lg'
                    : 'bg-gray-50 border border-gray-200 hover:border-emerald-700/40 shadow-sm hover:shadow-lg'
                }`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className={`text-xl font-bold tracking-tight text-white`}>{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {service.features.slice(0, 3).map((feature) => (
                          <span key={feature} className={`text-[0.6rem] uppercase tracking-wider px-2 py-1 rounded-full ${isDark ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                      <span className="font-medium transition-colors" style={{ color: isDark ? '#059669' : '#02731d' }}>Learn more →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}