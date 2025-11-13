"use client";

import { InView } from "@/components/motion/InView";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Sample gallery items data
const galleryItems = [
  {
    id: 1,
    title: "Wellness Retreat",
    description:
      "Experience ultimate relaxation in our serene wellness retreat center.",
    image: "/images/gallery/hero.jpg",
  },
  {
    id: 2,
    title: "Yoga Sessions",
    description:
      "Rejuvenate your mind and body with our expert-led yoga classes.",
    image: "/images/gallery/yoga-session.jpg",
  },
  {
    id: 3,
    title: "Spa Treatments",
    description:
      "Indulge in our luxurious spa treatments for complete relaxation.",
    image: "/images/gallery/spa-treatment.jpg",
  },
  {
    id: 4,
    title: "Meditation",
    description: "Find your inner peace with our guided meditation sessions.",
    image: "/images/gallery/qwe.jpg",
  },
  {
    id: 5,
    title: "Healthy Cuisine",
    description:
      "Nourish your body with our delicious and healthy menu options.",
    image: "/images/gallery/healthy-food.jpg",
  },
  {
    id: 6,
    title: "Outdoor Activities",
    description:
      "Connect with nature through our range of outdoor wellness activities.",
    image: "/images/gallery/zumba.jpg",
  },
];

const Card = ({
  item,
  isActive = false,
}: {
  item: (typeof galleryItems)[0];
  isActive?: boolean;
}) => (
  <motion.div
    className={`h-full p-3 w-full max-w-4xl mx-auto ${
      isActive ? "pt-1 pb-8" : "py-4"
    }`}
    initial={{ scale: 0.97, opacity: isActive ? 1 : 0.92 }}
    animate={{
      scale: isActive ? 1.02 : 0.98,
      opacity: isActive ? 1 : 0.92,
      zIndex: isActive ? 10 : 1,
    }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    <div
      className={`bg-white/60 dark:bg-black/10 backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 ${
        isActive
          ? "shadow-2xl"
          : "shadow-sm hover:shadow-md hover:-translate-y-1"
      }`}
    >
      <div className="relative overflow-hidden aspect-[4/3] md:aspect-video bg-gray-50 group">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* subtle vignette to improve contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/12 to-transparent pointer-events-none" />

        {/* Transparent bottom info bar (adapts to light/dark) */}
        <div className="absolute left-4 right-4 bottom-4 md:bottom-6 p-4 md:p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-sm border border-white/5 dark:border-white/10 shadow-lg flex flex-col items-center text-center gap-3">
          <h3 className="text-foreground dark:text-white text-lg md:text-xl font-semibold drop-shadow-md">
            {item.title}
          </h3>
          <p className="text-foreground/80 dark:text-white/90 text-sm md:text-base leading-snug max-w-[70%] mx-auto line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gallery"
      className="w-full overflow-hidden py-20 scroll-mt-28"
      style={{
        background:
          "linear-gradient(to bottom, hsl(var(--background) / 0.95), hsl(var(--background) / 1))",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InView>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-medium mb-3">
              Our Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Discover Our Wellness Journey
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
            <p className="text-foreground/80 dark:text-foreground/70 text-lg">
              Immerse yourself in moments of tranquility and rejuvenation
              through our visual journey
            </p>
          </div>
        </InView>
      </div>

      {/* Full-bleed carousel wrapper with comfortable horizontal margins */}
      <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-12 box-border">
        <div className="w-full relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2.2,
                spaceBetween: 32,
              },
              1536: {
                slidesPerView: 2.5,
                spaceBetween: 36,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".gallery-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.id} className="py-8 flex justify-center">
                <div className="group h-full w-full">
                  <Card item={item} isActive={index === activeIndex} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="hidden sm:inline-flex swiper-button-prev w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-lg items-center justify-center text-primary hover:scale-105 transform transition"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="gallery-pagination flex items-center space-x-2" />

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="hidden sm:inline-flex swiper-button-next w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm shadow-lg items-center justify-center text-primary hover:scale-105 transform transition"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Keep horizontal margins via outer wrapper; swiper itself uses vertical padding */
        .gallery-swiper {
          padding: 2rem 0;
          width: 100%;
          margin: 0;
          box-sizing: border-box;
        }

        .gallery-swiper .swiper-wrapper {
          padding: 1rem 0;
        }

        .gallery-swiper .swiper-slide {
          transition: all 0.4s ease;
          height: auto;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          padding: 0 0.5rem; /* small gutter between slides */
        }

        /* slightly taller cards on small screens for better visual presence */
        @media (max-width: 767px) {
          .gallery-swiper .swiper-slide .aspect-video {
            aspect-ratio: 4 / 3 !important;
          }
        }

        /* ensure navigation arrows are fully hidden on small screens */
        @media (max-width: 639px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        }

        .gallery-swiper .swiper-slide-active {
          z-index: 2;
          transform: scale(1.05);
        }

        .gallery-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e6e7eb;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.32s cubic-bezier(0.2, 0.9, 0.3, 1);
          transform-origin: center;
        }

        .gallery-pagination .swiper-pagination-bullet-active {
          width: 14px;
          height: 14px;
          background: #2563eb; /* primary */
          box-shadow: 0 4px 18px rgba(37, 99, 235, 0.18);
          transform: scale(1.05);
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}
