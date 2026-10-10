"use client";

import { useState } from "react";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText, SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import CardFlipSection from "./CardFlipSection";
import { MatterportSection } from "./MatterportSection";
import { Modal } from "@/components/ui/Modal";
import { TiltCard } from "@/components/ui/TiltCard";
import { COMMON_COPY, SECTION_COPY } from "@/constants/copy";
import {
  FaArrowRight,
  FaDumbbell,
  FaSwimmer,
  FaUtensils,
} from "react-icons/fa";
import { GiBoxingGlove, GiLotus } from "react-icons/gi";
import { MdSpa } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { HiMiniScissors } from "react-icons/hi2";

const FACILITIES = [
  {
    id: "gym",
    name: "High-Performance Gym",
    tag: "Strength & Cardio",
    description:
      "A fully equipped training floor for heavy lifts, endurance work, and high-intensity circuits.",
    highlights: [
      "Strength & cardio equipment",
      "Certified trainers on the floor",
      "Dedicated functional & HIIT zone",
    ],
    icon: FaDumbbell,
    featured: true,
    href: "/facilities/gym",
    pricingHint: "Locker from NRs. 600 · full plans on the gym page",
  },
  {
    id: "boxing",
    name: "Pro Boxing Studio",
    tag: "Boxing & Martial Arts",
    description:
      "Regulation sparring ring, heavy bags, and coached sessions for every level.",
    highlights: [
      "Regulation-size sparring ring",
      "Heavy bags & striking stations",
      "Beginner to pro coaching",
    ],
    icon: GiBoxingGlove,
    featured: false,
    href: "/facilities/boxing",
    pricingHint: "Kickboxing from NRs. 6,000 · full plans on the studio page",
  },
  {
    id: "dance",
    name: "Dance Studio",
    tag: "Movement & Rhythm",
    description:
      "Instructor-led dance classes for every level — rhythm, cardio, and confidence.",
    highlights: [
      "Guided group dance classes",
      "Beginner-friendly progressions",
      "Cardio & flexibility",
    ],
    icon: GiLotus,
    featured: false,
    href: "/facilities/dance",
    pricingHint: "Dance from NRs. 3,000 · full plans on the studio page",
  },
  {
    id: "pool",
    name: "Heated Swimming Pool",
    tag: "Aquatics",
    description:
      "Year-round heated pool and jacuzzi for laps, recovery, and unwinding.",
    highlights: [
      "Climate-controlled heated pool",
      "Soothing jacuzzi zone",
      "Locker room & towel service",
    ],
    icon: FaSwimmer,
    featured: false,
    href: "/facilities/pool",
    pricingHint: "NRs. 1,000 per session · 7 AM – 11 AM / 1 PM – 4 PM / 5 PM – 9 PM",
  },
  {
    id: "spa",
    name: "Luxury Spa & Sauna",
    tag: "Recovery & Rituals",
    description:
      "Himalayan sauna, steam, and treatment suites for deep restoration.",
    highlights: [
      "Himalayan salt sauna & steam",
      "Signature massage rituals",
      "Serene recovery lounge",
    ],
    icon: MdSpa,
    featured: false,
    href: "/facilities/spa",
    pricingHint: "NRs. 1,000 per session · 7 AM – 11 AM / 1 PM – 4 PM / 5 PM – 9 PM",
  },
  {
    id: "beauty-salon",
    name: "Beauty & Salon Studio",
    tag: "Glow & Grooming",
    description:
      "Expert styling, skincare, and treatments that leave you refreshed and radiant.",
    highlights: [
      "Hair styling & finishing",
      "Skincare treatments",
      "Premium, relaxed experience",
    ],
    icon: HiMiniScissors,
    featured: false,
    href: "/facilities/beauty-salon",
  },
  {
    id: "restaurant",
    name: "Organic Restaurant",
    tag: "Farm-to-Table",
    description:
      "Seasonal Nepali and international dishes from local organic produce.",
    highlights: [
      "Seasonal farm-to-table menu",
      "Post-workout juice bar",
      "Relaxed al-fresco dining",
    ],
    icon: FaUtensils,
    featured: false,
    href: "/facilities/restaurant",
  },
];

export function ServicesSection() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const activeFacility = FACILITIES.find((f) => f.id === selectedFacility);

  return (
    <section id="services" aria-labelledby="services-heading" className="section section-raised">
      <div id="facilities" className="scroll-mt-24" />
      <div aria-hidden="true" className="ambient-glow -left-24 top-1/4 h-72 w-72 bg-[#fdd693]/10 blur-[100px]" />
      <div aria-hidden="true" className="ambient-glow -right-16 bottom-10 h-72 w-72 bg-[#0a4243]/50 blur-[100px]" />

      <div className="container relative z-10">
        <SectionHeader
          eyebrow={
            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              {SECTION_COPY.servicesEyebrow}
            </Eyebrow>
          }
          title={
            <span id="services-heading">
              {SECTION_COPY.servicesTitleA} <GradientText>{SECTION_COPY.servicesTitleB}</GradientText>
            </span>
          }
          intro={SECTION_COPY.servicesIntro}
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3" aria-label="Facilities">
          {FACILITIES.map((facility, i) => {
            const Icon = facility.icon;
            const selected = selectedFacility === facility.id;
            return (
              <li key={facility.id} className="h-full">
                <InView delay={Math.min(i * 80, 320)} className="h-full">
                  <TiltCard className="h-full">
                    <button
                      type="button"
                      onClick={() => setSelectedFacility(facility.id)}
                      aria-pressed={selected}
                      aria-label={`View details for ${facility.name}`}
                      className={`card card-hover group flex h-full w-full flex-col p-7 text-left sm:p-8 ${
                        selected
                          ? "border-2 border-[#fdd693]"
                          : facility.featured
                            ? "border-2 border-[#fdd693]/50"
                            : "border border-[#fdd693]/15"
                      }`}
                    >
                      <span className="mb-5 flex items-center gap-4">
                        <span
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105 ${
                            facility.featured
                              ? "border-[#fdd693] bg-gradient-to-br from-[#fdd693] to-[#f3be6a] text-[#0a4243]"
                              : "border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693]"
                          }`}
                        >
                          <Icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-lg font-extrabold tracking-tight text-white">
                            {facility.name}
                          </span>
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fdd693]/80">
                            {facility.tag}
                          </span>
                        </span>
                      </span>

                      <span className="mb-5 block flex-1 text-sm leading-relaxed text-slate-300">
                        {facility.description}
                      </span>

                      <span className="mb-6 block space-y-2.5">
                        {facility.highlights.map((hl) => (
                          <span key={hl} className="flex items-start gap-2.5 text-sm text-slate-200">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#fdd693]/25 bg-[#fdd693]/15 text-[#fdd693]">
                              <FiCheck aria-hidden="true" className="h-2.5 w-2.5" />
                            </span>
                            <span className="leading-relaxed">{hl}</span>
                          </span>
                        ))}
                      </span>

                      {"pricingHint" in facility && facility.pricingHint ? (
                        <span className="mb-5 block rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 px-4 py-2.5 text-xs font-semibold tabular-nums text-[#fdd693]">
                          {facility.pricingHint as string}
                        </span>
                      ) : null}

                      <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fdd693]">
                        {COMMON_COPY.exploreSpace}
                        <FaArrowRight aria-hidden="true" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </TiltCard>
                </InView>
              </li>
            );
          })}
        </ul>

        <div className="mt-4">
          <CardFlipSection />
        </div>

        <div className="mt-16">
          <MatterportSection />
        </div>
      </div>

      <Modal
        open={Boolean(activeFacility)}
        onClose={() => setSelectedFacility(null)}
        eyebrow={activeFacility?.tag}
        title={activeFacility?.name ?? "Facility details"}
      >
        {activeFacility ? (
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {activeFacility.description}
            </p>
            {"pricingHint" in activeFacility && activeFacility.pricingHint ? (
              <p className="rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 px-4 py-3 text-xs font-semibold tabular-nums text-[#fdd693]">
                {activeFacility.pricingHint as string}
              </p>
            ) : null}
            <div className="rounded-2xl border border-[#fdd693]/15 bg-[#041a1b]/90 p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693]/80">
                What&apos;s included
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                {activeFacility.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/20 text-[#fdd693]">
                      <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Full plans live on the {activeFacility.name} page.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {"href" in activeFacility && activeFacility.href ? (
                  <Button href={activeFacility.href as string} size="sm" variant="outline" onClick={() => setSelectedFacility(null)}>
                    View Pricing
                  </Button>
                ) : null}
                <Button href="#contact" size="sm" onClick={() => setSelectedFacility(null)}>
                  Visit This Facility
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
