"use client";

import { InView } from "@/components/motion/InView";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { TiltCard } from "@/components/ui/TiltCard";
import { FaSun, FaBolt, FaCrown, FaCheck, FaArrowRight } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { FiEye } from "react-icons/fi";

const MEMBERSHIP_PLANS = [
  {
    id: "day-pass",
    name: "Day Sanctuary Pass",
    monthlyPrice: "NPR 1,500",
    annualPrice: "NPR 1,200",
    unit: "/ day",
    badge: "Flexible Access",
    featured: false,
    description: "Full single-day entry to Gym, Pool, Sauna & Lounge.",
    features: [
      "Full Gym & Cardio floor access",
      "Heated pool & Jacuzzi session",
      "Himalayan sauna & steam room",
      "Locker room & organic towel service",
    ],
    cta: "Buy Day Pass",
    icon: FaSun,
  },
  {
    id: "all-access",
    name: "All-Access Club Member",
    monthlyPrice: "NPR 8,500",
    annualPrice: "NPR 6,900",
    unit: "/ month",
    badge: "Most Popular",
    featured: true,
    description: "Unlimited monthly entry to all 5 core facilities & classes.",
    features: [
      "Unlimited 5-Facility Access",
      "Boxing & Martial Arts sparring ring",
      "Year-round heated indoor pool",
      "Unlimited Spa, Sauna & Steam",
      "15% Discount at Organic Restaurant",
      "Free 3 Personal Trainer Sessions",
    ],
    cta: "Join All-Access",
    icon: FaBolt,
  },
  {
    id: "vip-pass",
    name: "VIP Executive Pass",
    monthlyPrice: "NPR 18,000",
    annualPrice: "NPR 14,500",
    unit: "/ month",
    badge: "Ultimate Luxury",
    featured: false,
    description: "Exclusive dedicated locker, private spa sessions & 1-on-1 coaching.",
    features: [
      "All 5 Facilities + VIP Lounge Access",
      "Private Spa & Sauna reservations",
      "Dedicated 1-on-1 Certified Personal Trainer",
      "Customized Nutrition Plan from Chef",
      "Free guest passes (2 per month)",
    ],
    cta: "Apply for VIP",
    icon: FaCrown,
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const activePlan = MEMBERSHIP_PLANS.find((plan) => plan.id === selectedPlan);

  return (
    <section id="pricing" className="py-24 bg-[#041a1b] text-white scroll-mt-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0a4243]/60 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#fdd693]/10 rounded-full blur-[140px] pointer-events-none animate-float-soft [animation-delay:-3s]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-[#fdd693]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <InView className="text-center max-w-3xl mx-auto mb-14">
          {/* Section eyebrow badge — uniform with contact-badge style */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
            <MdWorkspacePremium className="h-4 w-4" />
            Membership Tiers
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Invest in Your Vitality{" "}
            <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
              &amp; Peace.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Choose flexible day passes or complete monthly sanctuary memberships with full access to all 5 facilities.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex relative items-center rounded-full border border-[#fdd693]/30 bg-[#062324]/80 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <span
              aria-hidden
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#fdd693] shadow-md shadow-[#fdd693]/30 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                billingCycle === "annual" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`relative z-10 w-40 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-[#0a4243]" : "text-slate-300 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`relative z-10 w-40 rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-colors duration-300 ${
                billingCycle === "annual" ? "text-[#0a4243]" : "text-slate-300 hover:text-white"
              }`}
            >
              Annual Pass
            </button>
          </div>
          <p
            key={billingCycle}
            className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400 animate-fade-in"
          >
            {billingCycle === "annual"
              ? "Billed annually — you save 20% today"
              : "Billed monthly — switch anytime"}
          </p>
        </InView>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <InView key={plan.id} delay={i * 100} className="h-full">
                <TiltCard>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-pressed={selectedPlan === plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedPlan(plan.id);
                      }
                    }}
                    className={`relative group h-full flex flex-col rounded-[2rem] border bg-[#062324]/90 backdrop-blur-xl p-7 sm:p-9 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693]/70 shadow-[inset_0_1px_0_0_rgba(253,214,147,0.08),0_18px_40px_-18px_rgba(0,0,0,0.7)] transition-[box-shadow,border-color] duration-500 ${
                      selectedPlan === plan.id
                        ? "border-2 border-[#fdd693] shadow-[0_30px_90px_rgba(253,214,147,0.25)]"
                        : plan.featured
                          ? "border-2 border-[#fdd693] shadow-[0_24px_70px_rgba(253,214,147,0.18)]"
                          : "border border-[#fdd693]/15 hover:border-[#fdd693]/40"
                    }`}
                  >
                    {/* Clipped overlay effects */}
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                      <div
                        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
                          plan.featured ? "via-[#fff0d0]" : "via-[#fdd693]/50"
                        }`}
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(253,214,147,0.10), transparent 45%)",
                        }}
                      />
                      <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                    </div>

                    {/* Popular Badge */}
                    {plan.featured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-[#fdd693]/60 bg-[#fdd693] px-4 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#0a4243] shadow-lg shadow-[#fdd693]/30 z-20">
                        <FaBolt className="h-3 w-3" />
                        {plan.badge}
                      </div>
                    )}

                    {/* Header */}
                    <div className="relative z-10 flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                            plan.featured
                              ? "bg-[#fdd693] text-[#0a4243] border-[#fdd693] shadow-lg shadow-[#fdd693]/30"
                              : "bg-[#0a4243] text-[#fdd693] border-[#fdd693]/25"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">{plan.name}</h3>
                      </div>
                      {!plan.featured && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider font-semibold text-[#fdd693] bg-[#0a4243] px-2.5 py-1 rounded-full border border-[#fdd693]/30">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="relative z-10 text-xs text-slate-300/90 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div
                      key={billingCycle}
                      className="relative z-10 mb-6 pb-6 border-b border-white/10 flex items-baseline gap-1.5 animate-fade-slide"
                    >
                      <span className="text-4xl sm:text-[2.6rem] font-extrabold tracking-tight text-white">
                        {billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{plan.unit}</span>
                      {billingCycle === "annual" && (
                        <span className="ml-auto text-[0.65rem] font-bold uppercase tracking-wider text-[#f3be6a] bg-[#fdd693]/10 border border-[#fdd693]/20 rounded-full px-2.5 py-1">
                          Save 20%
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="relative z-10 space-y-3 text-xs sm:text-sm text-slate-200 flex-1">
                      {plan.features.map((feat, fi) => (
                        <li
                          key={feat}
                          className="flex items-start gap-3 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                          style={{ transitionDelay: `${fi * 40}ms` }}
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fdd693]/15 text-[#fdd693] border border-[#fdd693]/25 group-hover:bg-[#fdd693] group-hover:text-[#0a4243] transition-colors duration-300">
                            <FaCheck className="h-2.5 w-2.5" />
                          </span>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedPlan(plan.id);
                      }}
                      className={`group/btn relative z-10 mt-8 w-full overflow-hidden rounded-xl py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-[0.97] ${
                        plan.featured
                          ? "bg-gradient-to-r from-[#fdd693] to-[#f3be6a] text-[#0a4243] shadow-lg shadow-[#fdd693]/25 hover:shadow-[#fdd693]/40"
                          : "border-2 border-[#fdd693] text-[#fdd693] hover:bg-[#fdd693] hover:text-[#0a4243]"
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {plan.cta}
                        <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    </button>

                    {/* Details hint */}
                    <p className="relative z-10 mt-4 flex items-center justify-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 group-hover:text-[#fdd693]/80 transition-colors duration-300">
                      <FiEye className="h-3.5 w-3.5" />
                      View full details
                    </p>
                  </div>
                </TiltCard>
              </InView>
            );
          })}
        </div>
      </div>

      <Modal
        open={Boolean(activePlan)}
        onClose={() => setSelectedPlan(null)}
        title={activePlan?.name ?? "Plan details"}
      >
        {activePlan ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fdd693] text-[#0a4243]">
                {(() => {
                  const ActiveIcon = activePlan.icon;
                  return <ActiveIcon className="h-5 w-5" />;
                })()}
              </span>
              <p className="text-slate-300 text-sm sm:text-base">{activePlan.description}</p>
            </div>
            <div className="rounded-3xl border border-[#fdd693]/15 bg-[#041f1f]/90 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#fdd693]/80">Price</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">
                    {billingCycle === "monthly" ? activePlan.monthlyPrice : activePlan.annualPrice}
                    <span className="text-sm text-slate-400 ml-1">{activePlan.unit}</span>
                  </p>
                </div>
                <span className="inline-flex rounded-full bg-[#fdd693]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#fdd693]">
                  {billingCycle === "monthly" ? "Monthly" : "Annual"}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {activePlan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fdd693]/20 text-[#fdd693]">
                      <FaCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">
                Tap the card again to close, or use the button below to continue to contact.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#fdd693] px-6 py-3 text-sm font-bold text-[#0a4243] hover:bg-[#fff0d0] transition"
              >
                Book This Plan
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
