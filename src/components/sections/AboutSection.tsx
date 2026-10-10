"use client";

import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { BUSINESS_DESCRIPTION } from "@/data/membership";
import { GiLotus } from "react-icons/gi";
import { FiCheck } from "react-icons/fi";

const ABOUT_POINTS = [
  "Located in Kausaltar, Bhaktapur",
  "Everyday wellness under one roof",
  "Calm space to relax & recharge",
] as const;

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section section-base">
      <div aria-hidden="true" className="ambient-glow -left-20 top-10 h-64 w-64 bg-[#fdd693]/10 blur-[100px]" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <InView>
            <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
              Welcome to Bhaktapur Wellness
            </Eyebrow>
            <h2 id="about-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              One Roof for <GradientText>Complete Well-Being.</GradientText>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {BUSINESS_DESCRIPTION}
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Wellness highlights">
              {ABOUT_POINTS.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-[#fdd693]/25 bg-[#062324]/80 px-4 py-2 text-xs font-semibold text-slate-200"
                >
                  <FiCheck aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#fdd693]" />
                  {point}
                </li>
              ))}
            </ul>
          </InView>

          <InView delay={120} className="h-full">
            <div className="card flex h-full flex-col justify-center p-7 sm:p-8">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/40 to-transparent" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#fdd693]">
                Kausaltar · Bhaktapur
              </p>
              <p className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-white">
                Relax, refresh, and take care of yourself.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Gym, classes, heated pool, sauna, steam, locker, spa, and organic dining — planned around
                your routine, not the other way around.
              </p>
              <a
                href="#services"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#fdd693] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0a4243] transition hover:bg-[#fff0d0]"
              >
                Explore facilities
              </a>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
