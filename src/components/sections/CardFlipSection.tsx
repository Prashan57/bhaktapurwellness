"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { COMMON_COPY } from "@/constants/copy";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";

const BEN_PERKS = [
  "One card, every facility",
  "Pool, gym, boxing & sauna",
  "Dining & training perks",
  "Guest add-ons included",
];

export function CardFlipSection() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((s) => !s);
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <section aria-labelledby="cardflip-heading" className="relative overflow-hidden py-14 md:py-16">
      <div aria-hidden="true" className="ambient-glow left-1/2 top-1/2 h-36 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 bg-[#fdd693]/[0.05] blur-[100px]" />

      <div className="container relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <InView className="order-2 lg:order-1 lg:text-left">
          <Eyebrow icon={<GiLotus aria-hidden="true" className="h-4 w-4" />}>
            The Wellness Pass
          </Eyebrow>
          <h2 id="cardflip-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Every Facility, <GradientText>One Card Away.</GradientText>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Your membership opens every door — gym, pool, boxing, sauna and dining.
            Activate the card preview to see what&apos;s inside.
          </p>

          <ul className="mt-7 space-y-3">
            {BEN_PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#fdd693]/25 bg-[#fdd693]/15 text-[#fdd693]">
                  <FiCheck aria-hidden="true" className="h-3 w-3" />
                </span>
                <span className="leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] transition-colors hover:text-[#fff0d0]"
          >
            {COMMON_COPY.viewMemberships}
            <FaArrowRight aria-hidden="true" className="h-3 w-3" />
          </Link>
        </InView>

        <InView delay={120} className="order-1 flex items-center justify-center lg:order-2">
          <div className="[perspective:1200px]">
            <button
              type="button"
              onClick={toggle}
              onKeyDown={onKey}
              aria-pressed={flipped}
              aria-label={flipped ? "Show membership card front" : "Show membership card benefits"}
              className="block w-80 rounded-[1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] sm:w-[24rem]"
            >
              <span
                className="relative block h-48 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-56 [transform-style:preserve-3d]"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* Front */}
                <span className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-[#fdd693]/25 bg-gradient-to-br from-[#0a4243] via-[#062324] to-[#041a1b] p-6 text-left shadow-[0_30px_70px_-25px_rgba(0,0,0,0.8)] [backface-visibility:hidden]">
                  <span aria-hidden="true" className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#fdd693]/10 blur-2xl" />
                  <span className="relative flex items-start justify-between">
                    <span className="flex items-center gap-2.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#fdd693] to-[#f3be6a] text-[#0a4243]">
                        <GiLotus aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span className="flex flex-col leading-none">
                        <span className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#fdd693]">Bhaktapur</span>
                        <span className="mt-0.5 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-white">Wellness</span>
                      </span>
                    </span>
                    <span className="rounded-full border border-[#fdd693]/25 bg-[#0a4243]/60 px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#fdd693]">
                      All-Access
                    </span>
                  </span>
                  <span className="relative my-6 flex items-center justify-center">
                    <span className="font-mono text-base tracking-[0.3em] text-white sm:text-lg">BH2&nbsp;&nbsp;PHWD&nbsp;&nbsp;9127</span>
                  </span>
                  <span className="relative flex items-end justify-between">
                    <span>
                      <span className="block text-[0.55rem] uppercase tracking-[0.25em] text-slate-400">Cardholder</span>
                      <span className="text-sm font-semibold text-white">Wellness Member</span>
                    </span>
                    <span className="text-right">
                      <span className="block text-[0.55rem] uppercase tracking-[0.25em] text-slate-400">Valid thru</span>
                      <span className="text-sm font-semibold text-[#fdd693]">12 / 27</span>
                    </span>
                  </span>
                </span>

                {/* Back */}
                <span
                  className="absolute inset-0 flex flex-col overflow-hidden rounded-[1.5rem] border border-[#fdd693]/20 bg-[#041a1b] p-5 text-left [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <span aria-hidden="true" className="mb-4 h-9 shrink-0 rounded bg-black/70" />
                  <span className="mb-1.5 block text-[0.55rem] uppercase tracking-[0.25em] text-slate-400">
                    What&apos;s included
                  </span>
                  <span className="block flex-1 space-y-1.5">
                    {BEN_PERKS.map((perk) => (
                      <span key={perk} className="flex items-center gap-2 text-[0.7rem] leading-tight text-slate-200">
                        <FaCheck aria-hidden="true" className="h-2.5 w-2.5 shrink-0 text-[#fdd693]" />
                        <span className="truncate">{perk}</span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-3 flex shrink-0 items-center justify-between border-t border-white/10 pt-2.5 text-[0.6rem] uppercase tracking-[0.15em] text-slate-400">
                    <span className="truncate pr-2">bhaktapurwellness.com</span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[#fdd693]">
                      <FiCheck aria-hidden="true" className="h-3 w-3" />
                      flip back
                    </span>
                  </span>
                </span>
              </span>
            </button>
            <p aria-hidden="true" className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.3em] text-white/40">
              Select the card to flip
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}

export default CardFlipSection;
