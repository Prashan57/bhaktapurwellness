"use client";

import {
  useEffect,
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { gsap, gsapSetup, isReducedMotion } from "@/lib/gsap";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Disable the tilt effect (e.g. for dense grids on touch devices). */
  disabled?: boolean;
};

/**
 * Subtle pointer tilt — GSAP quickTo (rAF-batched, interruptible),
 * transform only, disabled on touch / coarse pointers and reduced-motion.
 */
export function TiltCard({ children, className = "", disabled = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const setters = useRef<{ rx: (v: number) => void; ry: (v: number) => void } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    if (isReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    gsapSetup();
    setters.current = {
      rx: gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" }),
      ry: gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" }),
    };
    gsap.set(el, { transformPerspective: 900 });
  }, [disabled]);

  const onMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || disabled || !setters.current) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setters.current.rx((0.5 - y) * 6);
    setters.current.ry((x - 0.5) * 8);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onMouseLeave = () => {
    if (!setters.current) return;
    setters.current.rx(0);
    setters.current.ry(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`h-full motion-reduce:transform-none ${className}`}
    >
      {children}
    </div>
  );
}
