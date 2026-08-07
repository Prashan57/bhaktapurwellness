"use client";

import { KeyboardEvent, useState } from "react";
import Link from "next/link";
import { InView } from "@/components/motion/InView";
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
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <section
      aria-labelledby="cardflip-heading"
      className="relative py-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-[40rem] h-40 mx-auto bg-[#fdd693]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#0a4243]/40 rounded-full blur-[120px] pointer-events-none animate-float-soft" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text / info */}
        <InView className="order-2 lg:order-1 lg:text-left">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
            <GiLotus className="h-4 w-4" />
            The Wellness Pass
          </span>
          <h2
            id="cardflip-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Every Facility,{" "}
            <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
              One Card Away.
            </span>
          </h2>
          <p className="mt-4 max-w-md text-sm sm:text-base text-slate-300/90 leading-relaxed">
            Your membership opens every door — gym, pool, boxing, sauna and
            dining. Tap the card to reveal what&apos;s inside.
          </p>

          <ul className="mt-7 space-y-3">
            {BEN_PERKS.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-3 text-sm text-slate-200"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/15 text-[#fdd693] border border-[#fdd693]/25">
                  <FiCheck className="h-3 w-3" />
                </span>
                <span className="leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/#pricing"
            className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] transition-colors hover:text-[#fff0d0]"
          >
            View memberships
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </InView>

        {/* Flip card */}
        <InView delay={120} className="flex items-center justify-center order-1 lg:order-2">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={flipped}
            onClick={toggle}
            onKeyDown={onKey}
            className="w-80 h-48 sm:w-[24rem] sm:h-52 md:h-56 perspective cursor-pointer"
          >
            <div
              className={`relative w-full h-full py-6 duration-700 ${
                flipped ? "rotate-y-180" : ""
              } transform-style preserve-3d`}
            >
              {/* front */}
              <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden backface-hidden border border-[#fdd693]/25 bg-gradient-to-br from-[#0a4243] via-[#062324] to-[#041a1b] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.8)] p-6">
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#fdd693]/10 blur-2xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/50 to-transparent" />

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#fdd693] to-[#f3be6a] text-[#0a4243]">
                      <GiLotus className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col leading-none">
                      <span className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#fdd693]">
                        Bhaktapur
                      </span>
                      <span className="mt-0.5 text-[0.75rem] font-extrabold uppercase tracking-[0.2em] text-white">
                        Wellness
                      </span>
                    </span>
                  </div>
                  <span className="rounded-full border border-[#fdd693]/25 bg-[#0a4243]/60 px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#fdd693]">
                    All-Access
                  </span>
                </div>

                <div className="relative my-6 flex items-center justify-center">
                  <span className="font-mono text-base sm:text-lg tracking-[0.3em] text-white drop-shadow-sm">
                    BH2  PHWD  9127
                  </span>
                </div>

                <div className="relative flex items-end justify-between">
                  <div>
                    <div className="text-[0.55rem] uppercase tracking-[0.25em] text-slate-400">
                      Cardholder
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Wellness Member
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.55rem] uppercase tracking-[0.25em] text-slate-400">
                      Valid thru
                    </div>
                    <div className="text-sm font-semibold text-[#fdd693]">
                      12 / 27
                    </div>
                  </div>
                </div>

                <div className="relative pt-3 text-center text-[0.55rem] uppercase tracking-[0.35em] text-white/40">
                  tap the card to flip
                </div>
              </div>

              {/* back */}
              <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden rotate-y-180 backface-hidden border border-[#fdd693]/20 bg-[#041a1b] p-5 flex flex-col">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/50 to-transparent" />

                <div className="h-9 rounded bg-black/70 mb-4 shrink-0" />

                <p className="shrink-0 text-[0.55rem] uppercase tracking-[0.25em] text-slate-400 mb-1.5">
                  What&apos;s included
                </p>
                <ul className="min-h-0 flex-1 space-y-1.5 overflow-hidden">
                  {BEN_PERKS.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-[0.7rem] leading-tight text-slate-200"
                    >
                      <FaCheck className="h-2.5 w-2.5 shrink-0 text-[#fdd693]" />
                      <span className="truncate">{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex shrink-0 items-center justify-between border-t border-white/10 pt-2.5 text-[0.6rem] uppercase tracking-[0.15em] text-slate-400">
                  <span className="truncate pr-2">bhaktapurwellness.com</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-[#fdd693]">
                    <FiCheck className="h-3 w-3" />
                    flip back
                  </span>
                </div>
              </div>
            </div>

            <style jsx>{`
              .perspective {
                perspective: 1200px;
              }
              .transform-style {
                transform-style: preserve-3d;
              }
              .preserve-3d {
                transform-style: preserve-3d;
              }
              .backface-hidden {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
              }
              .rotate-y-180 {
                transform: rotateY(180deg);
              }
            `}</style>
          </div>
        </InView>
      </div>
    </section>
  );
}

export default CardFlipSection;