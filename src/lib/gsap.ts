"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Register GSAP plugins once (client-only, tree-shaken). */
export function gsapSetup() {
  if (registered) return;
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/** Global kill-switch: no motion for users who ask for none. */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Shared motion language — single source of truth for GSAP tweens.
 * Transform / opacity only. Short, subtle, interruptible.
 */
export const GSAP_EASE = "power3.out";
export const GSAP_REVEAL = {
  y: 24,
  opacity: 0,
  duration: 0.7,
  ease: GSAP_EASE,
} as const;

export { gsap, ScrollTrigger };
