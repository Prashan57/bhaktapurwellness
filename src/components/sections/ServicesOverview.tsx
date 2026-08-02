'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/constants/constants';

const serviceImages: Record<string, string> = {
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  beauty: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
  cafe: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
};

export function ServicesOverview() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0f0f0f]' : 'bg-white'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <InView animation="fade-up">
            <span className={`section-eyebrow mb-4 inline-flex items-center gap-2`}>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
              Our Services
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
            </span>
          </InView>
          <InView animation="fade-up" delay={100}>
            <h2 className={`section-title mb-6`}>
              Discover Our <span className="text-emerald-600 dark:text-emerald-400">Premium</span> Services
            </h2>
          </InView>
          <InView animation="fade-up" delay={200}>
            <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              From invigorating fitness sessions to relaxing spa treatments, 
              we offer a comprehensive range of wellness services tailored to your needs.
            </p>
          </InView>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <InView key={service.id} animation="fade-up" delay={index * 100}>
              <Link href={service.href} className="group block h-full">
                <div className={`luxury-card h-full flex flex-col ${
                  isDark ? '' : '!bg-white !border-gray-100 hover:!border-emerald-200'
                }`}>
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-5">
                    <Image
                      src={serviceImages[service.id]}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[0.65rem] uppercase tracking-[0.15em] px-3 py-1 rounded-full backdrop-blur-sm ${
                        isDark
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20'
                          : 'bg-white/90 text-emerald-700 border border-emerald-200'
                      }`}>
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col px-1">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      isDark
                        ? 'text-white group-hover:text-emerald-400'
                        : 'text-gray-900 group-hover:text-emerald-700'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className={`text-[0.65rem] px-2 py-0.5 rounded-full ${
                            isDark
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center text-sm font-medium transition-all duration-300 ${
                      isDark ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </InView>
          ))}
        </div>

        {/* Bottom CTA */}
        <InView animation="fade-up" delay={400} className="mt-16 text-center">
          <Link
            href="/contact"
            className={`btn btn-outline px-8 py-3.5 ${
              isDark
                ? 'text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10'
                : 'text-emerald-700 border-emerald-700/30 hover:bg-emerald-50'
            }`}
          >
            View All Services
          </Link>
        </InView>
      </div>
    </section>
  );
}