"use client";

import { useMemo, useState, type ReactNode } from "react";
import { InView } from "@/components/motion/InView";
import { Modal } from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MdPhotoLibrary } from "react-icons/md";
import { HiOutlineZoomIn } from "react-icons/hi";

type Category = "Wellness" | "Facilities" | "Cuisine" | "Outdoors";

const CATEGORIES: Array<Category | "All"> = [
  "All",
  "Wellness",
  "Facilities",
  "Cuisine",
  "Outdoors",
];

type GalleryItem = {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  image: string;
  span: string;
};

// Bento grid: 4 columns on desktop, varied row/col spans create
// a dense, layered mosaic layout on larger screens.
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Himalayan Sanctuary",
    subtitle: "The lap of stillness, overlooking the valley",
    category: "Wellness",
    image: "/images/gallery/hero.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Yoga Sessions",
    subtitle: "Guided flows for mind & body",
    category: "Wellness",
    image: "/images/gallery/yoga-session.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Spa Treatments",
    subtitle: "Restorative rituals with Himalayan botanicals",
    category: "Wellness",
    image: "/images/gallery/spa-treatment.jpg",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Fitness Arena",
    subtitle: "Cardio, strength & the boxing ring",
    category: "Facilities",
    image: "/images/gallery/qwe.jpg",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Open-Air Meditation",
    subtitle: "Find balance under the open sky",
    category: "Wellness",
    image: "/images/gallery/meditation.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Zumba & Cardio",
    subtitle: "High-energy sessions that keep you moving",
    category: "Facilities",
    image: "/images/gallery/zumba.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "Wellness Retreat",
    subtitle: "Rejuvenative group escapes",
    category: "Wellness",
    image: "/images/gallery/wellness-retreat.jpg",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 8,
    title: "Organic Cuisine",
    subtitle: "Mindfully-sourced meals from our kitchen",
    category: "Cuisine",
    image: "/images/gallery/healthy-food.jpg",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    title: "Outdoor Activities",
    subtitle: "Trails, fresh air & gentle adventure",
    category: "Outdoors",
    image: "/images/gallery/outdoor-activity.jpg",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 10,
    title: "Poolside Calm",
    subtitle: "Rest, reflection & warm water",
    category: "Facilities",
    image: "/images/gallery/bw.jpg",
    span: "md:col-span-1 md:row-span-2",
  },
];

type ActiveItem = GalleryItem;

export function GallerySection() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<ActiveItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleItems = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  );

  const openLightbox = (item: GalleryItem, index: number) => {
    setActive(item);
    setActiveIndex(index);
  };

  const next = () => {
    const idx = (activeIndex + 1) % visibleItems.length;
    setActive(visibleItems[idx]);
    setActiveIndex(idx);
  };

  const prev = () => {
    const idx = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    setActive(visibleItems[idx]);
    setActiveIndex(idx);
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-[#041a1b] text-white scroll-mt-24 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-16 w-96 h-96 bg-[#0a4243]/50 rounded-full blur-[150px] pointer-events-none animate-float-soft" />
      <div className="absolute bottom-1/3 right-0 w-[34rem] h-[34rem] bg-[#fdd693]/8 rounded-full blur-[160px] pointer-events-none animate-float-soft [animation-delay:-3s]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-[#fdd693]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <InView className="text-center max-w-3xl mx-auto mb-12">
          {/* Section eyebrow badge — uniform with contact/pricing-badge style */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
            <MdPhotoLibrary className="h-4 w-4" />
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Step Inside the{" "}
            <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A visual journey through our sanctuary — every corner crafted for rest, movement, and
            rejuvenation.
          </p>

          <InView delay={120} className="mt-9">
            <GridTabs active={filter} onChange={setFilter} />
          </InView>
        </InView>

        {/* Bento grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[190px] gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onOpen={() => openLightbox(item, index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.category ?? "Gallery"}
      >
        {active ? (
          <LightboxContent item={active} onPrev={prev} onNext={next} />
        ) : null}
      </Modal>
    </section>
  );
}

/* ===== Sub-components ===== */

function GridTabs({
  active,
  onChange,
}: {
  active: Category | "All";
  onChange: (category: Category | "All") => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {CATEGORIES.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
              isActive
                ? "text-[#0a4243]"
                : "text-slate-300 border border-[#fdd693]/20 hover:border-[#fdd693]/50 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="gallery-tab-pill"
                className="absolute inset-0 rounded-full bg-[#fdd693] shadow-lg shadow-[#fdd693]/30"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}

function categoryTone(category: Category) {
  switch (category) {
    case "Wellness":
      return "border-[#fdd693]/40 text-[#fdd693]";
    case "Facilities":
      return "border-[#7fe0c8]/40 text-[#7fe0c8]";
    case "Cuisine":
      return "border-[#f3be6a]/40 text-[#f3be6a]";
    case "Outdoors":
      return "border-[#9bd88f]/40 text-[#9bd88f]";
    default:
      return "border-[#fdd693]/40 text-[#fdd693]";
  }
}

function GalleryCard({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ scale: 0.985 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${item.span}`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />

      {/* Base vignette so the grid reads well even without hovering */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Animated gold ring on hover */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 group-hover:ring-[#fdd693]/40 transition-all duration-500" />

      {/* Corner zoom affordance */}
      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white transition-all duration-500 group-hover:bg-[#fdd693] group-hover:text-[#0a4243] group-hover:border-[#fdd693]">
        <HiOutlineZoomIn className="h-5 w-5" />
      </div>

      {/* Category badge */}
      <span
        className={`absolute top-4 left-4 rounded-full border px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] backdrop-blur-md bg-black/30 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 ${categoryTone(
          item.category
        )}`}
      >
        {item.category}
      </span>

      {/* Caption — slides up on hover */}
      <div className="absolute left-5 right-5 bottom-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.25em] text-[#fdd693]/90">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md leading-snug">
          {item.title}
        </h3>
        <p className="mt-0.5 text-sm text-white/70 truncate">{item.subtitle}</p>
      </div>
    </motion.div>
  );
}

function LightboxContent({
  item,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="space-y-5">
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#fdd693]/15 bg-[#041f1f]"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 90vw, 900px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-0 p-5">
          <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.25em] text-[#fdd693]">
            {item.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/75">{item.subtitle}</p>
        </div>
      </motion.div>

      {/* Prev / Next controls */}
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
          {item.category} collection
        </span>
        <div className="flex items-center gap-2">
          <LightboxButton label="Previous" onClick={onPrev}>
            ←
          </LightboxButton>
          <LightboxButton label="Next" onClick={onNext}>
            →
          </LightboxButton>
        </div>
      </div>
    </div>
  );
}

function LightboxButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#fdd693]/30 bg-[#0a4243] text-[#fdd693] transition-colors hover:bg-[#fdd693] hover:text-[#0a4243]"
    >
      {children}
    </button>
  );
}