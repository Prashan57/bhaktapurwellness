'use client';

import { useEffect } from 'react';
import { scrollToSection } from '@/lib/scroll';

/**
 * Guarantees tab/anchor clicks land fully on their section.
 * Re-affirms the scroll after layout settles (lazy images, reveals),
 * covering cross-page `/#contact` landings and in-page hash changes.
 * Idempotent — scrolling to an already-visible target is a no-op.
 */
export function HashScroller() {
  useEffect(() => {
    const settle = () => {
      const hash = window.location.hash;
      if (!hash) return;
      // Let images/reveals finish their first layout before measuring.
      requestAnimationFrame(() => {
        window.setTimeout(() => scrollToSection(hash), 90);
      });
    };

    settle();
    window.addEventListener('hashchange', settle);
    return () => window.removeEventListener('hashchange', settle);
  }, []);

  return null;
}
