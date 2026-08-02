'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Wellness Retreat',
    description: 'Experience ultimate relaxation in our serene wellness center.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80',
    category: 'Retreat',
  },
  {
    id: 2,
    title: 'Yoga Sessions',
    description: 'Rejuvenate your mind and body with expert-led yoga classes.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    category: 'Fitness',
  },
  {
    id: 3,
    title: 'Spa Treatments',
    description: 'Indulge in luxurious spa treatments for complete relaxation.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    category: 'Spa',
  },
  {
    id: 4,
    title: 'Meditation Space',
    description: 'Find your inner peace in our dedicated meditation rooms.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    category: 'Wellness',
  },
  {
    id: 5,
    title: 'Healthy Cuisine',
    description: 'Nourish your body with delicious and nutritious meals.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    category: 'Cafe',
  },
  {
    id: 6,
    title: 'Outdoor Activities',
    description: 'Connect with nature through outdoor wellness activities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    category: 'Fitness',
  },
];

const categories = ['All', 'Retreat', 'Fitness', 'Spa', 'Wellness', 'Cafe'];

export function GallerySection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0f0f0f]' : 'bg-white'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/8'
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <InView animation="fade-up">
            <span className={`section-eyebrow mb-4 inline-flex items-center gap-2`}>
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
              Gallery
              <span className={`w-8 h-[1px] ${isDark ? 'bg-emerald-500/50' : 'bg-emerald-700/40'}`} />
            </span>
          </InView>
          <InView animation="fade-up" delay={100}>
            <h2 className={`section-title mb-6`}>
              Our <span className="text-emerald-600 dark:text-emerald-400">Wellness</span> Journey
            </h2>
          </InView>
          <InView animation="fade-up" delay={200}>
            <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Immerse yourself in moments of tranquility and rejuvenation 
              through our visual journey.
            </p>
          </InView>
        </div>

        {/* Category filter */}
        <InView animation="fade-up" delay={300} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-primary'
                    : isDark
                      ? 'bg-white/5 text-gray-400 border border-white/10 hover:border-emerald-500/30 hover:text-emerald-400'
                      : 'bg-gray-100 text-gray-500 border border-gray-200 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </InView>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <InView key={item.id} animation="fade-up" delay={index * 100}>
              <div
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  isDark
                    ? 'bg-[#1a1a1a] border border-white/10 hover:border-emerald-500/30'
                    : 'bg-white border border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-[0.65rem] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      isDark
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20'
                        : 'bg-white/90 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredId === item.id
                      ? isDark ? 'bg-emerald-500/10 backdrop-blur-sm' : 'bg-emerald-500/5 backdrop-blur-sm'
                      : 'opacity-0'
                  }`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isDark
                      ? 'text-white group-hover:text-emerald-400'
                      : 'text-gray-900 group-hover:text-emerald-700'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </InView>
          ))}
        </div>

        {/* View more */}
        <InView animation="fade-up" delay={400} className="mt-12 text-center">
          <button className={`btn btn-outline px-8 py-3.5 ${
            isDark
              ? 'text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10'
              : 'text-emerald-700 border-emerald-700/30 hover:bg-emerald-50'
          }`}>
            View Full Gallery
          </button>
        </InView>
      </div>
    </section>
  );
}