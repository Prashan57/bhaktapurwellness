"use client";

import { KeyboardEvent, useState } from "react";

export function CardFlip() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((s) => !s);
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 sm:right-8 sm:bottom-8">
      <div
        role="button"
        aria-pressed={flipped}
        tabIndex={0}
        onClick={toggle}
        onKeyDown={onKey}
        className="w-72 h-44 perspective cursor-pointer"
      >
        <div
          className={`relative w-full h-full duration-700 transform-style preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-white/90 to-white/70 dark:from-black/40 dark:to-black/20 text-foreground dark:text-white flex flex-col p-4 backface-hidden">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-widest text-primary">
                BHKTPR
              </div>
              <div className="text-sm font-medium">●●●●</div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="text-sm md:text-lg font-mono tracking-widest">
                1234 5678 9012 3456
              </div>
            </div>

            <div className="flex items-end justify-between text-xs">
              <div>
                <div className="text-[10px] text-foreground/70 dark:text-white/80">
                  Cardholder
                </div>
                <div className="font-semibold">JANE DOE</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-foreground/70 dark:text-white/80">
                  VALID THRU
                </div>
                <div className="font-semibold">12/28</div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-foreground dark:text-white transform rotate-y-180 backface-hidden p-4">
            <div className="h-8 bg-black/80 rounded-sm mb-3" />
            <div className="text-xs mb-2">Authorized signature</div>
            <div className="h-8 bg-white/90 dark:bg-white/10 rounded-sm mb-3" />
            <div className="text-sm">
              If found, please return to Bhaktapur Wellness.
            </div>
            <div className="mt-4 text-xs text-foreground/70 dark:text-white/70">
              Customer Support: support@bhaktapurwellness.com
            </div>
          </div>
        </div>

        <div className="mt-2 text-center text-[11px] text-foreground/70 dark:text-white/60">
          Click card to flip
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
        .rotate-y-180 > .back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default CardFlip;
