"use client";

import { useState } from "react";
import { InView } from "@/components/motion/InView";
import { FaChevronDown } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

const FAQ_ITEMS = [
  {
    question: "What is included in a Day Sanctuary Pass?",
    answer:
      "A Day Sanctuary Pass gives you full single-day access to the gym & cardio floor, heated pool & jacuzzi, Himalayan sauna & steam room, plus locker rooms and organic towel service. Spa treatments and personal training can be added at the front desk.",
  },
  {
    question: "Can I try a facility before committing to a membership?",
    answer:
      "Absolutely. We offer day passes and free guided tours. Contact us to book a complimentary walkthrough of all 5 facilities — the gym, boxing studio, pool, spa & sauna, and restaurant — so you can decide what fits you best.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "We are open 7 days a week, 6:00 AM to 10:00 PM. The organic restaurant and spa follow the same daily schedule, while personal training and spa appointments can be reserved in advance.",
  },
  {
    question: "Do you run classes and personal training?",
    answer:
      "Yes. We offer boxing & martial arts coaching, functional and HIIT sessions, personal training, and wellness classes. All-Access members receive 3 free personal trainer sessions every month, and VIP members get a dedicated 1-on-1 trainer.",
  },
  {
    question: "Is there parking or facilities for guests?",
    answer:
      "Guests are welcome with a valid pass or member guest privileges. Parking is available on-site, and our organic restaurant and lounge are open to day-pass holders and members alike.",
  },
  {
    question: "How do I book a spa treatment or reserve the pool?",
    answer:
      "Reservations can be made through the contact form, by phone, or at the front desk. VIP members can reserve the private spa and sauna for exclusive sessions at their preferred time.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#041a1b] text-white scroll-mt-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0a4243]/50 rounded-full blur-[140px] pointer-events-none animate-float-soft" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-[#fdd693]/8 rounded-full blur-[140px] pointer-events-none animate-float-soft [animation-delay:-3s]" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <InView className="text-center mb-14">
          {/* Section eyebrow badge — uniform with contact-badge style */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] backdrop-blur-xl shadow-lg shadow-black/20 mb-5">
            <MdHelpOutline className="h-4 w-4" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
              Know.
            </span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Quick answers about memberships, facilities, hours, and bookings — still unsure? Just ask us.
          </p>
        </InView>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <InView key={item.question} delay={index * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-[#062324]/80 backdrop-blur-xl transition-all duration-500 ${
                    isOpen
                      ? "border-[#fdd693]/50 shadow-[0_18px_50px_rgba(253,214,147,0.12)]"
                      : "border-[#fdd693]/15 hover:border-[#fdd693]/40 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#fdd693] text-[#0a4243] border-[#fdd693]"
                            : "bg-[#0a4243] text-[#fdd693] border-[#fdd693]/25"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white">
                        {item.question}
                      </span>
                    </span>
                    <FaChevronDown
                      className={`h-4 w-4 shrink-0 text-[#fdd693] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[3.75rem] text-sm text-slate-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>

        <InView className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Still have questions?{" "}
            <a
              href="#contact"
              className="font-bold text-[#fdd693] underline decoration-[#fdd693]/40 underline-offset-4 transition-colors hover:text-[#fff0d0]"
            >
              Reach out to our team
            </a>
          </p>
        </InView>
      </div>
    </section>
  );
}