"use client";

import { useState } from "react";
import { InView } from "@/components/motion/InView";
import CardFlipSection from "./CardFlipSection";
import { MatterportSection } from "./MatterportSection";
import { Modal } from "@/components/ui/Modal";
import { TiltCard } from "@/components/ui/TiltCard";
import {
  FaArrowRight,
  FaDumbbell,
  FaSwimmer,
  FaUtensils,
} from "react-icons/fa";
import { GiBoxingGlove, GiLotus, GiScissors } from "react-icons/gi";
import { MdSpa } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { HiMiniScissors } from "react-icons/hi2";

const FACILITIES = [
  {
    id: "gym",
    name: "High-Performance Gym",
    tag: "Strength & Cardio",
    description:
      "A fully equipped training floor where strength, endurance, and technique meet — ready for everything from heavy lifts to high-intensity circuits.",
    highlights: [
      "State-of-the-art strength & cardio equipment",
      "Certified personal trainers on the floor",
      "Dedicated functional & HIIT zone",
    ],
    icon: FaDumbbell,
    featured: true,
  },
  {
    id: "boxing",
    name: "Pro Boxing Studio",
    tag: "Boxing & Martial Arts",
    description:
      "Train like a fighter in our dedicated boxing studio — regulation sparring ring, heavy bags, and coached sessions for every level.",
    highlights: [
      "Regulation-size sparring ring",
      "Heavy bags, pads & floor-to-ceiling stations",
      "Beginner to professional coaching",
    ],
    icon: GiBoxingGlove,
    featured: false,
  },
  {
    id: "pool",
    name: "Heated Swimming Pool",
    tag: "Aquatics",
    description:
      "A year-round indoor heated pool and jacuzzi for lap swimming, aquatic recovery, and leisurely unwinding in total comfort.",
    highlights: [
      "Climate-controlled heated pool",
      "Soothing jacuzzi zone",
      "Locker room & organic towel service",
    ],
    icon: FaSwimmer,
    featured: false,
  },
  {
    id: "spa",
    name: "Luxury Spa & Sauna",
    tag: "Recovery & Rituals",
    description:
      "Step into Himalayan sauna, steam, and treatment suites designed for deep restoration and everyday relaxation rituals.",
    highlights: [
      "Himalayan salt sauna & steam room",
      "Signature massage & body rituals",
      "Serene lounge & recovery corner",
    ],
    icon: MdSpa,
    featured: false,
  },
  {
    id: "beauty-salon",
    name: "Beauty & Salon Studio",
    tag: "Glow & Grooming",
    description:
      "Indulge in polished self-care with expert styling, skincare, and wellness treatments designed to leave you refreshed and radiant.",
    highlights: [
      "Hair styling, blowouts & finishing touches",
      "Skincare and beauty treatments",
      "Relaxing salon experience with premium care",
    ],
    icon: HiMiniScissors,
    featured: false,
  },
  {
    id: "restaurant",
    name: "Organic Restaurant",
    tag: "Farm-to-Table",
    description:
      "Seasonal Nepali and international dishes crafted from local organic produce — nourishment that celebrates mindful eating.",
    highlights: [
      "Seasonal farm-to-table menu",
      "Post-workout nutrition & juice bar",
      "Relaxed al-fresco dining ambience",
    ],
    icon: FaUtensils,
    featured: false,
  },
];

export function ServicesSection() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const activeFacility = FACILITIES.find(
    (facility) => facility.id === selectedFacility,
  );

  return (
    <section
      id="services"
      className="py-24 bg-[#062324] text-white scroll-mt-24 relative overflow-hidden"
    >
      <div id="facilities" className="scroll-mt-32"></div>

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#fdd693]/10 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0a4243]/40 rounded-full blur-[140px] pointer-events-none animate-float-soft [animation-delay:-3s]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <InView className="text-center max-w-3xl mx-auto mb-16">
          {/* Section eyebrow badge — uniform with contact-badge style */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
            <GiLotus className="h-4 w-4" />6 Core Facilities &amp; Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Designed for Holistic{" "}
            <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
              Rejuvenation.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience our high-performance gym, pro sparring ring, heated pool,
            Himalayan sauna, beauty salon, and organic farm-to-table restaurant.
          </p>
        </InView>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <InView key={facility.id} delay={i * 100} className="h-full">
                <TiltCard>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={selectedFacility === facility.id}
                    onClick={() => setSelectedFacility(facility.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedFacility(facility.id);
                      }
                    }}
                    className={`relative group h-full flex flex-col rounded-[2rem] border bg-[#041a1b]/90 backdrop-blur-xl p-7 sm:p-8 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]/70 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.08),0_18px_40px_-18px_rgba(0,0,0,0.7)] transition-[box-shadow,border-color] duration-500 ${
                      selectedFacility === facility.id
                        ? "border-2 border-[#fdd693] shadow-[0_30px_90px_rgba(253,214,147,0.22)]"
                        : facility.featured
                          ? "border-2 border-[#fdd693]/60 shadow-[0_24px_70px_rgba(253,214,147,0.14)]"
                          : "border border-[#fdd693]/15 hover:border-[#fdd693]/40"
                    }`}
                  >
                    {/* Clipped overlay effects */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/40 to-transparent" />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(253,214,147,0.09), transparent 45%)",
                        }}
                      />
                      <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                    </div>

                    {/* Header */}
                    <div className="relative z-10 mb-5">
                      <div className="flex items-center gap-4">
                        <span
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                            facility.featured
                              ? "bg-gradient-to-br from-[#fdd693] to-[#f3be6a] text-[#0a4243] border-[#fdd693] shadow-lg shadow-[#fdd693]/30"
                              : "bg-[#0a4243] text-[#fdd693] border-[#fdd693]/25"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-extrabold text-white tracking-tight">
                            {facility.name}
                          </h3>
                          <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#fdd693]/80">
                            {facility.tag}
                          </p>
                        </div>
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#fdd693]/20 text-[#fdd693] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          <FaArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    <p className="relative z-10 text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6 flex-1">
                      {facility.description}
                    </p>

                    <ul className="relative z-10 space-y-2.5 mb-6">
                      {facility.highlights.slice(0, 3).map((hl, hi) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 transition-transform duration-300 ease-out group-hover:translate-x-1"
                          style={{ transitionDelay: `${hi * 40}ms` }}
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/15 text-[#fdd693] border border-[#fdd693]/25">
                            <FiCheck className="h-2.5 w-2.5" />
                          </span>
                          <span className="leading-relaxed">{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="relative z-10 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#fdd693] group-hover:text-[#fff0d0] transition-colors duration-300">
                      Explore this space
                      <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </TiltCard>
              </InView>
            );
          })}
        </div>

        {/* Card flip subsection */}
        <div>
          <CardFlipSection />
        </div>

        <div className="mt-20">
          <MatterportSection />
        </div>
      </div>

      <Modal
        open={Boolean(activeFacility)}
        onClose={() => setSelectedFacility(null)}
        title={activeFacility?.name ?? "Facility details"}
      >
        {activeFacility ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fdd693] text-[#0a4243]">
                {(() => {
                  const ActiveIcon = activeFacility.icon;
                  return <ActiveIcon className="h-5 w-5" />;
                })()}
              </span>
              <div>
                <span className="block text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-[#fdd693]/80">
                  {activeFacility.tag}
                </span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeFacility.description}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#fdd693]/15 bg-[#041a1b]/90 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#fdd693]/80 mb-4">
                What&apos;s included
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                {activeFacility.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fdd693]/20 text-[#fdd693]">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Book a guided visit or add this facility to your membership.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#fdd693] px-6 py-3 text-sm font-bold text-[#0a4243] hover:bg-[#fff0d0] transition"
              >
                Visit This Facility
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
