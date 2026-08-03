'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { SPA_TREATMENTS } from '@/constants/constants';

export default function SpaPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const categories = [...new Set(SPA_TREATMENTS.map(t => t.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/spa-hero.jpg"
            alt="Luxury spa at Bhaktapur Wellness"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <InView animation="fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Luxury Spa
              </span>
            </InView>
            <InView animation="fade-in" delay={100}>
              <h1 className="text-white mb-6">
                Indulge in <span className="text-emerald-300">Pure</span> Relaxation
              </h1>
            </InView>
            <InView animation="fade-in" delay={200}>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
                Escape the ordinary and immerse yourself in our luxurious spa treatments 
                designed to restore balance and tranquility.
              </p>
            </InView>
            <InView animation="fade-in" delay={300}>
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Book Treatment
              </Link>
            </InView>
          </div>
        </div>
      </section>

      {/* Spa Experience */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Therapists', description: 'Our certified therapists bring years of experience in traditional and modern techniques.', icon: '✨', image: '/images/gallery/spa-massage.jpg' },
              { title: 'Natural Products', description: 'We use only organic, locally-sourced products for all our treatments.', icon: '🌿', image: '/images/gallery/spa-aromatherapy.jpg' },
              { title: 'Serene Environment', description: 'Immerse yourself in our peaceful spa designed for ultimate relaxation.', icon: '🕯️', image: '/images/gallery/spa-relaxation.jpg' },
            ].map((feature, index) => (
              <InView key={feature.title} animation="fade-in" delay={index * 100}>
                <div className="text-center">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>{feature.description}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Menu */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <InView animation="fade-in">
              <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Treatment <span className="text-emerald-600">Menu</span>
              </h2>
            </InView>
            <InView animation="fade-in" delay={100}>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Discover our range of premium spa treatments crafted for your wellness.
              </p>
            </InView>
          </div>

          {categories.map((category, catIndex) => (
            <div key={category} className="mb-12 last:mb-0">
              <InView animation="fade-in" delay={catIndex * 100}>
                <h3 className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
                  {category}
                </h3>
              </InView>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SPA_TREATMENTS.filter(t => t.category === category).map((treatment, index) => (
                  <InView key={treatment.name} animation="fade-in" delay={index * 50}>
                    <div className={`rounded-xl p-5 flex items-center justify-between transition-all duration-300 ${
                      isDark
                        ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                        : 'bg-gray-50 border border-gray-200 hover:border-emerald-200'
                    }`}>
                      <div>
                        <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{treatment.name}</h4>
                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{treatment.duration}</p>
                      </div>
                      <span className="text-emerald-600 font-semibold">{treatment.price}</span>
                    </div>
                  </InView>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-600" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <InView animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Relaxation?
            </h2>
          </InView>
          <InView animation="fade-in" delay={100}>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Book your spa experience today and let us take care of your wellness.
            </p>
          </InView>
          <InView animation="fade-in" delay={200}>
            <Link href="/contact" className="btn bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 font-semibold">
              Book Now
            </Link>
          </InView>
        </div>
      </section>
    </div>
  );
}