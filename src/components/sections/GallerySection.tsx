"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { Modal } from "@/components/ui/Modal";
import { StateBlock } from "@/components/ui/StateBlock";
import { CONFIRM_COPY, SECTION_COPY } from "@/constants/copy";
import { gsap, gsapSetup, isReducedMotion } from "@/lib/gsap";
import Image from "next/image";
import { MdPhotoLibrary } from "react-icons/md";
import { HiOutlineZoomIn } from "react-icons/hi";

type Category = "Wellness" | "Facilities" | "Cuisine" | "Outdoors";

const CATEGORIES: Array<Category | "All"> = ["All", "Wellness", "Facilities", "Cuisine", "Outdoors"];

type GalleryItem = {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  image: string;
  span: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Himalayan Sanctuary", subtitle: "Stillness overlooking the valley", category: "Wellness", image: "/images/gallery/hero.jpg", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Yoga Sessions", subtitle: "Guided flows for mind & body", category: "Wellness", image: "/images/gallery/yoga-session.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Spa Treatments", subtitle: "Restorative Himalayan rituals", category: "Wellness", image: "/images/gallery/spa-treatment.jpg", span: "md:col-span-1 md:row-span-2" },
  { id: 4, title: "Fitness Arena", subtitle: "Cardio, strength & boxing", category: "Facilities", image: "/images/gallery/qwe.jpg", span: "md:col-span-2 md:row-span-1" },
  { id: 5, title: "Open-Air Meditation", subtitle: "Balance under the open sky", category: "Wellness", image: "/images/gallery/meditation.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Zumba & Cardio", subtitle: "High-energy group sessions", category: "Facilities", image: "/images/gallery/zumba.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 7, title: "Wellness Retreat", subtitle: "Rejuvenative group escapes", category: "Wellness", image: "/images/gallery/wellness-retreat.jpg", span: "md:col-span-2 md:row-span-1" },
  { id: 8, title: "Organic Cuisine", subtitle: "Mindfully-sourced kitchen", category: "Cuisine", image: "/images/gallery/healthy-food.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 9, title: "Outdoor Activities", subtitle: "Trails, air & gentle adventure", category: "Outdoors", image: "/images/gallery/outdoor-activity.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 10, title: "Poolside Calm", subtitle: "Warm water & reflection", category: "Facilities", image: "/images/gallery/bw.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 11, title: "Boxing Corner", subtitle: "Gloves on, world off", category: "Facilities", image: "/images/web/boxing-ring.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 12, title: "Salt & Steam", subtitle: "Himalayan heat rituals", category: "Wellness", image: "/images/web/sauna-steam.jpg", span: "md:col-span-1 md:row-span-1" },
];

export function GallerySection() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleItems = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  // Minimal GSAP touch: soft stagger when the filter changes.
  // Transform/opacity only, skipped for reduced motion.
  useEffect(() => {
    if (isReducedMotion()) return;
    const grid = gridRef.current;
    if (!grid) return;
    gsapSetup();
    const cards = grid.querySelectorAll(":scope > button");
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
        stagger: { each: 0.04, from: "start" },
        overwrite: "auto",
        clearProps: "transform",
      },
    );
  }, [filter]);

  const openLightbox = (item: GalleryItem, index: number) => {
    setActive(item);
    setActiveIndex(index);
  };

  const step = (dir: 1 | -1) => {
    if (visibleItems.length === 0) return;
    const idx = (activeIndex + dir + visibleItems.length) % visibleItems.length;
    setActive(visibleItems[idx]);
    setActiveIndex(idx);
  };

  // Keyboard navigation inside the lightbox.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, activeIndex, visibleItems]);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section section-base">
      <div aria-hidden="true" className="ambient-glow -left-16 top-1/4 h-72 w-72 bg-[#0a4243]/50 blur-[100px]" />
      <div aria-hidden="true" className="ambient-glow bottom-1/3 right-0 h-72 w-72 bg-[#fdd693]/10 blur-[100px]" />

      <div className="container relative z-10">
        <InView className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow icon={<MdPhotoLibrary aria-hidden="true" className="h-4 w-4" />}>
            {SECTION_COPY.galleryEyebrow}
          </Eyebrow>
          <h2 id="gallery-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Step Inside the <GradientText>Experience.</GradientText>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Every corner crafted for rest, movement, and rejuvenation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="group" aria-label="Filter gallery">
            {CATEGORIES.map((category) => {
              const isActive = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] ${
                    isActive
                      ? "bg-[#fdd693] text-[#0a4243] shadow-lg shadow-[#fdd693]/30 scale-100"
                      : "border border-[#fdd693]/20 text-slate-300 hover:border-[#fdd693]/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </InView>

        {visibleItems.length === 0 ? (
          <StateBlock title="No photos here yet" body="Try another category to keep exploring." />
        ) : (
          <div ref={gridRef} className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[190px] md:grid-cols-4 md:gap-5">
            {visibleItems.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} onOpen={() => openLightbox(item, index)} />
            ))}
          </div>
        )}
        <p aria-live="polite" className="sr-only">
          Showing {visibleItems.length} photos{filter !== "All" ? ` in ${filter}` : ""}.
        </p>
      </div>

      <Modal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        eyebrow={active?.category}
        title={active?.title ?? "Gallery"}
      >
        {active ? <LightboxContent item={active} onPrev={() => step(-1)} onNext={() => step(1)} /> : null}
      </Modal>
    </section>
  );
}

function categoryTone(category: Category) {
  switch (category) {
    case "Wellness": return "border-[#fdd693]/40 text-[#fdd693]";
    case "Facilities": return "border-[#7fe0c8]/40 text-[#7fe0c8]";
    case "Cuisine": return "border-[#f3be6a]/40 text-[#f3be6a]";
    case "Outdoors": return "border-[#9bd88f]/40 text-[#9bd88f]";
    default: return "border-[#fdd693]/40 text-[#fdd693]";
  }
}

function GalleryCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  return (
    <button
      type="button"
      className={`group relative overflow-hidden rounded-3xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] ${item.span}`}
      onClick={onOpen}
      aria-label={`View ${item.title} — ${item.subtitle}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        loading="lazy"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 opacity-90 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-[#fdd693]/40" aria-hidden="true" />

      <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-[#fdd693] group-hover:bg-[#fdd693] group-hover:text-[#0a4243]">
        <HiOutlineZoomIn aria-hidden="true" className="h-5 w-5" />
      </span>

      <span className={`absolute left-4 top-4 rounded-full border bg-black/30 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] backdrop-blur-md ${categoryTone(item.category)}`}>
        {item.category}
      </span>

      <span className="absolute inset-x-5 bottom-5 block">
        <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.25em] text-[#fdd693]/90">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="block text-lg font-bold leading-snug text-white drop-shadow-md md:text-xl">
          {item.title}
        </span>
        <span className="mt-0.5 block truncate text-sm text-white/70">{item.subtitle}</span>
      </span>
    </button>
  );
}

function LightboxContent({ item, onPrev, onNext }: { item: GalleryItem; onPrev: () => void; onNext: () => void }) {
  return (
    <div className="space-y-5">
      <div
        key={item.id}
        className="animate-scale-in relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#fdd693]/15 bg-[#041f1f] sm:aspect-[16/10]"
      >
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 90vw, 900px" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.25em] text-[#fdd693]">{item.category}</span>
          <h3 className="text-xl font-extrabold text-white sm:text-2xl">{item.title}</h3>
          <p className="mt-1 text-sm text-white/75">{item.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.category} collection</span>
        <div className="flex items-center gap-2">
          <LightboxButton label={CONFIRM_COPY.prevImage} onClick={onPrev}>←</LightboxButton>
          <LightboxButton label={CONFIRM_COPY.nextImage} onClick={onNext}>→</LightboxButton>
        </div>
      </div>
    </div>
  );
}

function LightboxButton({ children, label, onClick }: { children: ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#fdd693]/30 bg-[#0a4243] text-lg text-[#fdd693] transition-colors hover:bg-[#fdd693] hover:text-[#0a4243] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
