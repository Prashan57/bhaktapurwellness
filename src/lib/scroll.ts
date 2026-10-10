/**
 * Anchor-scroll helpers — one consistent way to land on a section.
 * Uses scrollIntoView so each section's scroll-margin (navbar offset)
 * is honoured. Respects prefers-reduced-motion.
 */

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll to a `#section` id. Returns false when the target is missing. */
export function scrollToSection(selector: string): boolean {
  if (typeof document === "undefined") return false;
  const el = document.querySelector(selector);
  if (!el) return false;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

/**
 * Close-then-scroll for links inside modals/dialogs: the page is
 * scroll-locked while the dialog is mounted, so scrolling must wait
 * until after `onClose` has restored body scroll. Also syncs the URL.
 */
export function goToSectionDelayed(selector: string, delay = 140): void {
  window.setTimeout(() => {
    if (scrollToSection(selector)) {
      history.replaceState(null, "", selector);
    }
  }, delay);
}
