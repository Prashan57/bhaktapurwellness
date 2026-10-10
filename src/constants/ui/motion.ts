// Motion tokens — short, subtle, interruptible. Anything animated
// should use transform/opacity only and respect reduced motion.

export const MOTION = {
  duration: {
    instant: 150,
    fast: 250,
    base: 350,
    slow: 500,
    slower: 700,
  },
  ease: {
    snappy: "cubic-bezier(0.22, 1, 0.36, 1)",
    out: "cubic-bezier(0.16, 1, 0.3, 1)",
    inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
  // Shared GSAP / CSS presets
  presets: {
    fadeSlideUp: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    scaleIn: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
