"use client";

import {
  useRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Disable the tilt effect (e.g. for dense grids on touch devices). */
  disabled?: boolean;
};

/**
 * Subtle pointer tilt — transform only, rAF-throttled, and fully
 * disabled on touch / coarse pointers and reduced-motion users.
 */
export function TiltCard({ children, className = "", disabled = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const canTilt = () => {
    if (disabled) return false;
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (window.matchMedia("(pointer: coarse)").matches) return false;
    return true;
  };

  const onMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !canTilt()) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const { clientX, clientY } = event;
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      ref.current.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
      ref.current.style.setProperty("--mx", `${x * 100}%`);
      ref.current.style.setProperty("--my", `${y * 100}%`);
    });
  };

  const onMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`h-full transition-transform duration-300 ease-out motion-reduce:transform-none ${className}`}
    >
      {children}
    </div>
  );
}
