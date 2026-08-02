'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { PRICING_PLANS } from '@/constants/constants';

export function PricingSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="pricing" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#141414]' : 'bg-gray-50'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <InView animation="fade-up">
            <span className={`section-eyebrow mb-4 inline-flex items-center gap-2`}>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
              Membership
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
            </span>
          </InView>
          <InView animation="fade-up" delay={100}>
            <h2 className={`section-title mb-6`}>
              Choose Your <span className="text-emerald-600 dark:text-emerald-400">Wellness</span> Journey
            </h2>
          </InView>
          <InView animation="fade-up" delay={200}>
            <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Select the membership plan that aligns with your wellness goals. 
              All plans include access to our world-class facilities.
            </p>
          </InView>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <InView key={plan.name} animation="fade-up" delay={index * 150}>
              <div
                className={`relative rounded-2xl p-8 transition-all duration-500 h-full flex flex-col ${
                  plan.highlighted
                    ? isDark
                      ? 'bg-gradient-to-b from-emerald-500/15 to-emerald-500/5 border-2 border-emerald-500/40 shadow-primary-lg scale-[1.02]'
                      : 'bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-700/30 shadow-lg scale-[1.02]'
                    : isDark
                      ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/20'
                      : 'bg-white border border-gray-200 hover:border-emerald-200 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{plan.name}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 font-display">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`btn w-full py-3.5 ${
                    plan.highlighted
                      ? 'btn-primary'
                      : isDark
                        ? 'btn-outline border-white/20 text-white hover:bg-white/5'
                        : 'btn-outline border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </InView>
          ))}
        </div>

        {/* Additional info */}
        <InView animation="fade-up" delay={500} className="mt-12 text-center">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            All memberships include complimentary WiFi, locker access, and basic fitness assessment. 
            Contact us for corporate and family packages.
          </p>
        </InView>
      </div>
    </section>
  );
}