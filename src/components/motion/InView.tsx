'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { gsap, gsapSetup, isReducedMotion } from '@/lib/gsap';

type InViewProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  once?: boolean;
  /** Vertical offset before the reveal triggers. */
  rootMargin?: string;
  /** Travel distance in px. Keep small — minimal motion. */
  y?: number;
};

/**
 * GSAP scroll reveal — transform/opacity only, ScrollTrigger-batched,
 * disabled entirely when the user prefers reduced motion.
 *
 * Same API as before so every section keeps working unchanged.
 */
export function InView({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  once = true,
  rootMargin = '0px 0px -8% 0px',
  y = 24,
}: InViewProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion / no-JS-IO fallback: show immediately, no tween.
    if (isReducedMotion() || typeof IntersectionObserver === 'undefined') {
      gsap.set(node, { clearProps: 'all', opacity: 1, y: 0 });
      return;
    }

    gsapSetup();

    // Start hidden — GSAP owns the transform, so no CSS transition fights.
    gsap.set(node, { opacity: 0, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(node, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              delay: delay / 1000,
              overwrite: 'auto',
              // Release the transform after the reveal so hover/tilt
              // and layout stay cheap (no permanent will-change).
              onComplete: () => { gsap.set(node, { clearProps: 'transform' }); },
            });
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            gsap.set(node, { opacity: 0, y });
          }
        });
      },
      { threshold: 0.12, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, once, rootMargin, y]);

  const style: CSSProperties = { opacity: 0 };

  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
