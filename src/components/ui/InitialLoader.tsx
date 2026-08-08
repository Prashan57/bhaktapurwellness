"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash loader for 1.8 seconds on initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#041a1b] text-white select-none overflow-hidden"
        >
          {/* Ambient background glows */}
          <div className="absolute w-[500px] h-[500px] bg-[#0a4243]/60 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute w-[300px] h-[300px] bg-[#fdd693]/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Centered Logo & Animation Container */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
            {/* Outer animated gold ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
              transition={{
                scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                opacity: { duration: 0.8 },
              }}
              className="relative mb-6 h-36 w-36 sm:h-44 sm:w-44 rounded-full p-1 bg-gradient-to-tr from-[#fdd693]/40 via-[#0a4243] to-[#fdd693]/80 shadow-[0_0_60px_rgba(253,214,147,0.25)]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#fdd693]/30 bg-[#0a4243]">
                <Image
                  src="/logo.jpg"
                  alt="Bhaktapur Wellness Logo"
                  fill
                  priority
                  className="object-cover scale-105"
                />
              </div>
            </motion.div>

            {/* Title & Tagline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
                Bhaktapur Wellness
              </h1>
              <p className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-slate-300">
                Sanctuary of Health & Harmony
              </p>
            </motion.div>

            {/* Subtle luxury progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "160px", opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              className="mt-8 h-0.5 rounded-full bg-gradient-to-r from-transparent via-[#fdd693] to-transparent shadow-[0_0_12px_#fdd693]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
