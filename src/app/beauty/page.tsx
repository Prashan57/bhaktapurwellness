'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { BEAUTY_SERVICES } from '@/constants/constants';

export default function BeautyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const categories = [...new Set(BEAUTY_SERVICES.map(s => s.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-40 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/beauty-hero.jpg"
            alt="Beauty parlor at Bhaktapur Wellness"
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
                Beauty Parlor
              </span>
            </InView>
            <InView animation="fade-in" delay={100}>
              <h1 className="text-white mb-6">
                Enhance Your <span className="text-emerald-300">Natural</span> Beauty
              </h1>
            </InView>
            <InView animation="fade-in" delay={200}>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
                Expert beauty services from hair styling to skincare, 
                designed to enhance your natural radiance.
              </p>
            </InView>
            <InView animation="fade-in" delay={300}>
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Book Appointment
              </Link>
            </InView>
          </div>
        </div>
      </section>

      {/* Beauty Philosophy */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#141414]' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hair Styling', description: 'From cuts to color, our stylists create your perfect look.', icon: '💇', image: '/images/gallery/beauty-hair.jpg' },
              { title: 'Skincare', description: 'Advanced facials and treatments for radiant skin.', icon: '✨', image: '/images/gallery/beauty-skincare.jpg' },
              { title: 'Nail Art', description: 'Manicures, pedicures, and creative nail designs.', icon: '💅', image: '/images/gallery/beauty-nails.jpg' },
              { title: 'Makeup', description: 'Professional makeup for every occasion.', icon: '💄', image: '/images/gallery/beauty-makeup.jpg' },
            ].map((service, index) => (
              <InView key={service.title} animation="fade-in" delay={index * 100}>
                <div className={`group rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                    : 'bg-white border border-gray-200 hover:border-emerald-200 shadow-sm hover:shadow-md'
                }`}>
                  <div className="relative h-40 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 text-2xl">{service.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{service.description}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <InView animation="fade-in">
              <h2 className={`section-title mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our <span className="text-emerald-600">Services</span>
              </h2>
            </InView>
            <InView animation="fade-in" delay={100}>
              <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                Explore our comprehensive range of beauty services.
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
                {BEAUTY_SERVICES.filter(s => s.category === category).map((service, index) => (
                  <InView key={service.name} animation="fade-in" delay={index * 50}>
                    <div className={`rounded-xl p-5 flex items-center justify-between transition-all duration-300 ${
                      isDark
                        ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                        : 'bg-gray-50 border border-gray-200 hover:border-emerald-200'
                    }`}>
                      <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.name}</h4>
                      <span className="text-emerald-600 font-semibold">{service.price}</span>
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
              Ready for a Transformation?
            </h2>
          </InView>
          <InView animation="fade-in" delay={100}>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
              Let our expert stylists help you look and feel your best.
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