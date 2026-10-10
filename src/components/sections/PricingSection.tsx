"use client";

import { InView } from "@/components/motion/InView";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { SECTION_COPY } from "@/constants/copy";
import { COMBINED_PACKAGES, VIP_COPY } from "@/data/membership";
import { FaCrown, FaCheck, FaArrowRight, FaGem } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { FiEye } from "react-icons/fi";

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const activePlan = COMBINED_PACKAGES.find((plan) => plan.id === selectedPlan);

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section section-raised">
      <div aria-hidden="true" className="ambient-glow right-10 top-1/3 h-72 w-72 bg-[#0a4243]/60 blur-[100px]" />
      <div aria-hidden="true" className="ambient-glow bottom-10 left-10 h-72 w-72 bg-[#fdd693]/10 blur-[100px]" />

      <div className="container relative z-10">
        <InView className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow icon={<MdWorkspacePremium aria-hidden="true" className="h-4 w-4" />}>
            {SECTION_COPY.pricingEyebrow}
          </Eyebrow>
          <h2 id="pricing-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {SECTION_COPY.pricingTitleA} <GradientText>{SECTION_COPY.pricingTitleB}</GradientText>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Combined wellness packages with Gym, Sauna, Steam, Cardio, Locker, and Spa access twice a
            month.
          </p>
        </InView>

        <ul className="grid grid-cols-1 items-stretch gap-6 pt-6 md:grid-cols-3 md:gap-7" aria-label="Combined wellness packages">
          {COMBINED_PACKAGES.map((plan, i) => {
            const selected = selectedPlan === plan.id;
            return (
              <li key={plan.id} className="h-full">
                <InView delay={Math.min(i * 80, 240)} className="h-full overflow-visible">
                  <TiltCard className="relative h-full overflow-visible">
                    {plan.badge && (
                      <p className="absolute left-1/2 top-0 z-20 inline-flex max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 truncate whitespace-nowrap rounded-full border border-[#fdd693]/60 bg-[#fdd693] px-4 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#0a4243] shadow-lg">
                        <FaGem aria-hidden="true" className="h-3 w-3 shrink-0" />
                        {plan.badge}
                      </p>
                    )}
                    <article
                      className={`card card-hover flex h-full flex-col p-7 sm:p-8 ${
                        selected || plan.featured ? "border-2 border-[#fdd693]" : "border border-[#fdd693]/15"
                      }`}
                    >
                      <header className="flex items-start justify-between gap-3 pt-2">
                        <span className="flex items-center gap-3">
                          <span
                            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${
                              plan.featured
                                ? "border-[#fdd693] bg-[#fdd693] text-[#0a4243]"
                                : "border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693]"
                            }`}
                          >
                            <FaCrown aria-hidden="true" className="h-5 w-5" />
                          </span>
                          <span className="text-lg font-extrabold tracking-tight text-white">
                            {plan.duration}
                          </span>
                        </span>
                      </header>

                      <p className="mb-6 mt-5 flex items-baseline gap-1.5 border-b border-white/10 pb-6">
                        <span className="text-4xl font-extrabold tracking-tight text-white">
                          {plan.price}
                        </span>
                        <span className="text-xs font-medium text-slate-400">total</span>
                      </p>

                      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#fdd693]/80">
                        Included services
                      </p>
                      <ul className="flex-1 space-y-3 text-sm text-slate-200">
                        {plan.inclusions.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#fdd693]/25 bg-[#fdd693]/15 text-[#fdd693]">
                              <FaCheck aria-hidden="true" className="h-2.5 w-2.5" />
                            </span>
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => setSelectedPlan(plan.id)}
                        aria-haspopup="dialog"
                        className={`mt-8 w-full rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.97] sm:text-sm ${
                          plan.featured
                            ? "bg-gradient-to-r from-[#fdd693] to-[#f3be6a] text-[#0a4243] shadow-lg shadow-[#fdd693]/25 hover:shadow-[#fdd693]/40"
                            : "border-2 border-[#fdd693] text-[#fdd693] hover:bg-[#fdd693] hover:text-[#0a4243]"
                        }`}
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          Choose {plan.duration}
                          <FaArrowRight aria-hidden="true" className="h-3 w-3" />
                        </span>
                      </button>
                      <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
                        <FiEye aria-hidden="true" className="h-3.5 w-3.5" />
                        View full details
                      </p>
                    </article>
                  </TiltCard>
                </InView>
              </li>
            );
          })}
        </ul>

        <InView delay={120} className="mt-8 overflow-visible">
          <div className="card flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#fdd693]/40 to-transparent" />
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693]">
                <FaCrown aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white">VIP Special Packages</h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-300">{VIP_COPY}</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border-2 border-[#fdd693] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#fdd693] transition hover:bg-[#fdd693] hover:text-[#0a4243]"
            >
              Contact for VIP
              <FaArrowRight aria-hidden="true" className="h-3 w-3" />
            </a>
          </div>
        </InView>
      </div>

      <Modal
        open={Boolean(activePlan)}
        onClose={() => setSelectedPlan(null)}
        eyebrow="Combined wellness package"
        title={activePlan?.duration ?? "Package details"}
      >
        {activePlan ? (
          <div className="space-y-6">
            <p className="text-sm text-slate-300 sm:text-base">
              Gym, Sauna, Steam, Cardio, Locker, and Spa access twice a month — one simple price.
            </p>
            <div className="rounded-2xl border border-[#fdd693]/15 bg-[#041f1f]/90 p-5">
              <p className="text-3xl font-extrabold text-white">
                {activePlan.price}
                <span className="ml-1 text-sm font-medium text-slate-400">total</span>
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {activePlan.inclusions.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/20 text-[#fdd693]">
                      <FaCheck aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">Questions? Our team confirms every booking personally.</p>
              <a
                href="#contact"
                onClick={() => setSelectedPlan(null)}
                className="inline-flex items-center justify-center rounded-xl bg-[#fdd693] px-6 py-3 text-sm font-bold text-[#0a4243] transition hover:bg-[#fff0d0]"
              >
                Book This Package
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
