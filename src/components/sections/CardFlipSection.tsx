"use client";

import { KeyboardEvent, useState } from "react";

export function CardFlipSection() {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((s) => !s);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  const quotes = [
    "Wellness: because espresso shots don't fix your spine.",
    "Take a deep breath — then charge your phone.",
    "Calm down. It's just your to-do list screaming for help.",
  ];

  return (
    <section aria-labelledby="cardflip-heading" className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Card */}
          <div className="flex items-center justify-center">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              onClick={toggle}
              onKeyDown={onKey}
              className="w-80 h-44 perspective cursor-pointer"
            >
              <div
                className={`relative w-full h-full duration-700 ${
                  flipped ? "rotate-y-180" : ""
                } transform-style preserve-3d`}
              >
                {/* front */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-border/20 bg-background text-foreground flex flex-col p-4 backface-hidden">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold tracking-widest text-primary">
                      BHKTPR
                    </div>
                    <div className="text-sm font-medium">AMX</div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-sm md:text-lg font-mono tracking-widest">
                      4321 8765 2109 6543
                    </div>
                  </div>

                  <div className="flex items-end justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-foreground/70 dark:text-white/80">
                        Cardholder
                      </div>
                      <div className="font-semibold">A. CUSTOMER</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-foreground/70 dark:text-white/80">
                        VALID THRU
                      </div>
                      <div className="font-semibold">08/27</div>
                    </div>
                  </div>
                </div>

                {/* back */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-border/20 bg-background text-foreground transform rotate-y-180 backface-hidden p-4">
                  <div className="h-8 bg-black/80 rounded-sm mb-3" />
                  <div className="text-xs mb-2">Authorized signature</div>
                  <div className="h-8 bg-white/90 dark:bg-white/10 rounded-sm mb-3" />
                  <div className="text-sm">
                    If found, please return to Bhaktapur Wellness.
                  </div>
                  <div className="mt-4 text-xs text-foreground/70 dark:text-white/70">
                    support@bhaktapurwellness.com
                  </div>
                </div>
              </div>

              <style jsx>{`
                .perspective {
                  perspective: 1000px;
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
          </div>

          {/* Right: Quotes */}
          <aside
            aria-labelledby="cardflip-heading"
            className="flex items-center"
          >
            <div>
              <h3 id="cardflip-heading" className="text-2xl font-semibold mb-4">
                Bhaktapur Wellness
              </h3>
              <ul className="space-y-4">
                {quotes.map((q, i) => (
                  <li
                    key={i}
                    className="text-foreground/80 dark:text-foreground/60"
                  >
                    “{q}”
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CardFlipSection;
