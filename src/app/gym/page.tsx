'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { GYM_CLASSES } from '@/constants/constants';

export default function GymPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Premium gym at Bhaktapur Wellness"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <InView animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Premium Gym
              </span>
            </InView>
            <InView animation="fade-up" delay={100}>
              <h1 className="text-white mb-6">
                Elevate Your <span className="text-emerald-300">Fitness</span> Journey
              </h1>
            </InView>
            <InView animation="fade-up" delay={200}>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-8">
                State-of-the-art equipment, expert trainers, and a motivating environment 
                to help you achieve your fitness goals.
              </p>
            </InView>
            <InView animation="fade-up" delay={300}>
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Start Your Journey
              </Link>
            </InView>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Modern Equipment', description: 'Latest fitness machines and free weights from top brands.', icon: '🏋️', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
              { title: 'Expert Trainers', description: 'Certified professionals to guide your fitness journey.', icon: '💪', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
              { title: 'Group Classes', description: 'High-energy classes from yoga to HIIT training.', icon: '🧘', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80' },
              { title: 'Nutrition Plans', description: 'Personalized diet plans to complement your training.', icon: '🥗', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80' },
            ].map((feature, index) => (
              <InView key={feature.title} animation="fade-up" delay={index * 100}>
                <div className={`group rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                    : 'bg-white border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md'
                }`}>
                  <div className="relative h-40 overflow-hidden">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 text-2xl">{feature.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{feature.description}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <InView animation="fade-up">
              <h2 className={`section-title mb-4`}>
                Daily <span className="text-emerald-600 dark:text-emerald-400">Classes</span>
              </h2>
            </InView>
            <InView animation="fade-up" delay={100}>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Join our expert-led classes designed for all fitness levels.
              </p>
            </InView>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GYM_CLASSES.map((cls, index) => (
              <InView key={cls.name} animation="fade-up" delay={index * 100}>
                <div className={`rounded-xl p-5 transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                    : 'bg-gray-50 border border-gray-200 hover:border-emerald-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{cls.name}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                      {cls.duration}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {cls.time}
                    </span>
                    <span>with {cls.instructor}</span>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <InView animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Ready to Transform?
            </h2>
          </InView>
          <InView animation="fade-up" delay={100}>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Join Bhaktapur Wellness today and start your fitness journey with us.
            </p>
          </InView>
          <InView animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 font-semibold">
                Get Membership
              </Link>
              <Link href="/#pricing" className="btn border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4">
                View Pricing
              </Link>
            </div>
          </InView>
        </div>
      </section>
    </div>
  );
}