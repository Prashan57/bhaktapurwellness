'use client';

import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

type Phase = 'idle' | 'busy' | 'done';

const SAFETY_TIMEOUT = 8000;
const FADE_TIMEOUT = 450;

/**
 * Click-instant navigation feedback. Route skeletons can only paint once
 * the transition's render work yields; this bar starts synchronously on
 * link click so the app never looks frozen during heavy page swaps.
 */
function NavigationProgressInner() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');
  const startPath = useRef<string | null>(null);
  const safetyTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    safetyTimer.current = null;
    fadeTimer.current = null;
  };

  // Start synchronously on any plain left-click to an internal route.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor || anchor.target === '_blank') return;
      const href = anchor.getAttribute('href') ?? '';
      if (!href.startsWith('/') || href.startsWith('//')) return;
      // Tab scrolls (same-page anchors like /#contact while on /) never
      // leave the page — the scroll itself is the feedback, so starting
      // the bar here only lets it get stuck: hash hops change neither
      // the pathname nor fire hashchange under client-side routing.
      const dest = new URL(href, window.location.origin);
      const current = window.location.pathname + window.location.search;
      if (dest.pathname + dest.search === current) return;
      startPath.current = current;
      setPhase('busy');
      if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
      safetyTimer.current = window.setTimeout(() => {
        setPhase('idle');
        startPath.current = null;
      }, SAFETY_TIMEOUT);
    };
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  // Complete when the route actually settles somewhere new.
  useEffect(() => {
    if (phase !== 'busy' || startPath.current === null) return;
    if (pathname === startPath.current) return;
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
    setPhase('done');
    fadeTimer.current = window.setTimeout(() => {
      setPhase('idle');
      startPath.current = null;
    }, FADE_TIMEOUT);
    return () => {
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, [pathname, phase]);

  // Same-path hash hops never change pathname — don't leave the bar stuck.
  useEffect(() => {
    const onHash = () => {
      setPhase((current) => {
        if (current === 'busy') {
          startPath.current = null;
          return 'idle';
        }
        return current;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('hashchange', onHash);
      clearTimers();
    };
  }, []);

  if (phase === 'idle') return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px] bg-transparent">
      <div
        className={`h-full bg-gradient-to-r from-[#f3be6a] via-[#fdd693] to-[#fff0d0] ${
          phase === 'busy' ? 'nav-progress-busy' : 'nav-progress-done'
        }`}
      />
    </div>
  );
}

export function NavigationProgress() {
  return (
    <Suspense fallback={null}>
      <NavigationProgressInner />
    </Suspense>
  );
}
