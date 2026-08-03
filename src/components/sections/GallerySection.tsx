'use client';

import { InView } from '@/components/motion/InView';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { useState } from 'react';

const GALLERY_IMAGES = [
  { src: '/images/gallery/gym-hero.jpg', alt: 'Premium gym equipment', category: 'Gym' },
  { src: '/images/gallery/spa-hero.jpg', alt: 'Luxury spa treatment', category: 'Spa' },
  { src: '/images/gallery/beauty-hero.jpg', alt: 'Beauty services', category: 'Beauty' },
  { src: '/images/gallery/cafe-hero.jpg', alt: 'Healthy cafe meals', category: 'Cafe' },
  { src: '/images/gallery/spa-massage.jpg', alt: 'Spa massage therapy', category: 'Spa' },
  { src: '/images/gallery/gym-equipment.jpg', alt: 'Gym equipment', category: 'Gym' },
  { src: '/images/gallery/gym-classes.jpg', alt: 'Group fitness classes', category: 'Gym' },
  { src: '/images/gallery/spa-aromatherapy.jpg', alt: 'Aromatherapy treatment', category: 'Spa' },
  { src: '/images/gallery/beauty-hair.jpg', alt: 'Hair styling', category: 'Beauty' },
  { src: '/images/gallery/cafe-food.jpg', alt: 'Healthy food', category: 'Cafe' },
  { src: '/images/gallery/gym-trainer.jpg', alt: 'Personal training', category: 'Gym' },
  { src: '/images/gallery/beauty-skincare.jpg', alt: 'Skincare treatment', category: 'Beauty' },
];

export function GallerySection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = ['All', 'Gym', 'Spa', 'Beauty', 'Cafe'];

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <InView animation="fade-in">
            <span className="section-eyebrow">
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
              Gallery
              <span className="w-8 h-px" style={{ backgroundColor: '#02731d' }} />
            </span>
          </InView>
          <InView animation="fade-in" delay={100}>
            <h2 className="section-title">
              Experience <span className="gradient-text">Our World</span>
            </h2>
          </InView>
          <InView animation="fade-in" delay={150}>
            <p className="section-subtitle">
              A visual journey through our spaces, designed to inspire your wellness transformation.
            </p>
          </InView>
        </div>

        {/* Filter */}
        <InView animation="fade-in" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? isDark ? 'bg-emerald-500 text-white' : 'bg-emerald-700 text-white'
                    : isDark ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10' : 'bg-gray-100 text-gray-500 hover:text-gray-900 border border-gray-200'
                }`}>
                {category}
              </button>
            ))}
          </div>
        </InView>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <InView key={image.src} animation="fade-in" delay={index * 50}
              className={`relative group overflow-hidden rounded-2xl ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${isDark ? 'bg-[#1a1a1a]' : 'bg-gray-100'}`}>
              <div className={`relative aspect-square ${index % 5 === 0 ? 'md:aspect-auto md:h-full' : ''}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-wider text-emerald-300">{image.category}</span>
                <p className="text-sm text-white font-medium mt-0.5">{image.alt}</p>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}