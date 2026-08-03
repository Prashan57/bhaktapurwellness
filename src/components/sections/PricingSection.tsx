'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import { PRICING_PLANS } from '@/constants/constants';
import Link from 'next/link';

export function PricingSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-20">
          <InView animation="fade-in">
            <span className="section-eyebrow justify-center">
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
              Membership Plans
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
            </span>
          </InView>
          <InView animation="fade-in" delay={100}>
            <h2 className="section-title text-center">
              Choose Your <span className="gradient-text">Wellness Journey</span>
            </h2>
          </InView>
          <InView animation="fade-in" delay={150}>
            <p className="section-subtitle text-center">
              Flexible membership plans designed to support every step of your transformation.
            </p>
          </InView>
        </div>

        {/* Plans - 3 columns centered */}
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <InView key={plan.name} animation="fade-in" delay={index * 100}>
              <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.highlighted
                  ? isDark
                    ? 'bg-[#1a1a1a] border-2 border-emerald-500/50 shadow-[0_0_60px_rgba(5,150,105,0.2)] scale-105 z-10'
                    : 'bg-white border-2 border-emerald-500 shadow-2xl scale-105 z-10'
                  : isDark
                    ? 'bg-[#141414] border border-white/10 hover:border-emerald-500/30 shadow-luxury hover:shadow-luxury-lg'
                    : 'bg-gray-50 border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-lg'
              }`}>
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400" />
                )}

                <div className="p-8 lg:p-10 flex-1 flex flex-col text-center">
                  {/* Badge */}
                  {plan.highlighted && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500 text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {plan.period}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`w-full h-px mb-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-1 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1 rounded-full ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'}`}>
                          <svg className={`h-3 w-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact"
                    className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-500/25'
                        : isDark
                          ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}