"use client";

import { useState } from "react";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { SECTION_COPY } from "@/constants/copy";
import { FaChevronDown } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

const FAQ_ITEMS = [
  {
    question: "What do the combined wellness packages include?",
    answer:
      "Every combined package includes Gym, Sauna, Steam, Cardio, Locker, and Spa access twice a month. Choose 3 months (NRs. 40,000), 6 months (NRs. 60,000), or a full year (NRs. 100,000).",
  },
  {
    question: "Can I try a facility before committing to a membership?",
    answer:
      "Yes — book a sauna, steam & heated pool session (NRs. 1,000) or a guided tour covering the gym, boxing studio, pool, spa & sauna, and restaurant, then decide what fits you best.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "Open 7 days a week, 6:00 AM to 10:00 PM. Sauna, Steam & Heated Pool sessions run Morning 7:00 AM – 11:00 AM, Afternoon 1:00 PM – 4:00 PM, and Evening 5:00 PM – 9:00 PM.",
  },
  {
    question: "Do you run Dance, Kickboxing and personal training?",
    answer:
      "Yes — Dance Classes (1 month NRs. 3,000 · 3 months NRs. 8,000 · 6 months NRs. 15,000 · 1 year NRs. 28,000) and Kickboxing Classes (1 month NRs. 6,000 · 3 months NRs. 15,000 · 6 months NRs. 27,000 · 1 year NRs. 50,000), plus personal training on request.",
  },
  {
    question: "Is there parking, and are guests welcome?",
    answer:
      "Guests are welcome with a valid pass or member guest privileges. On-site parking is available, and the restaurant and lounge are open to day-pass holders and members alike.",
  },
  {
    question: "How do I book a spa treatment or reserve the pool?",
    answer:
      "Use the contact form, call us, or book at the front desk. Combined packages include spa access twice a month; VIP members can ask about exclusive wellness packages and special offers.",
  },
  {
    question: "Is locker membership the same as gym membership?",
    answer:
      "No — Locker Membership is separate (1 month NRs. 600 · 3 months NRs. 1,400 · 6 months NRs. 2,600 · 1 year NRs. 3,800). Combined wellness packages already include locker access.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section section-base">
      <div aria-hidden="true" className="ambient-glow right-10 top-1/3 h-72 w-72 bg-[#0a4243]/50 blur-[100px]" />

      <div className="container-narrow relative z-10">
        <InView className="mb-12 text-center">
          <Eyebrow icon={<MdHelpOutline aria-hidden="true" className="h-4 w-4" />}>
            {SECTION_COPY.faqEyebrow}
          </Eyebrow>
          <h2 id="faq-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Everything You Need to <GradientText>Know.</GradientText>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Memberships, facilities, hours, and bookings — still unsure? Just ask us.
          </p>
        </InView>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <InView key={item.question} delay={Math.min(index * 50, 250)}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-[#062324]/80 backdrop-blur-xl transition-colors duration-300 ${
                    isOpen ? "border-[#fdd693]/50" : "border-[#fdd693]/15 hover:border-[#fdd693]/35"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          aria-hidden="true"
                          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-colors duration-300 ${
                            isOpen
                              ? "border-[#fdd693] bg-[#fdd693] text-[#0a4243]"
                              : "border-[#fdd693]/25 bg-[#0a4243] text-[#fdd693]"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-white sm:text-base">
                          {item.question}
                        </span>
                      </span>
                      <FaChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 shrink-0 text-[#fdd693] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[3.75rem] pr-6 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>

        <InView className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Still have questions?{" "}
            <a
              href="#contact"
              className="rounded font-bold text-[#fdd693] underline decoration-[#fdd693]/40 underline-offset-4 transition-colors hover:text-[#fff0d0]"
            >
              Reach out to our team
            </a>
          </p>
        </InView>
      </div>
    </section>
  );
}
