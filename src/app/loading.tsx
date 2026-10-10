/**
 * Route transition state. Shown in the page slot while the next route
 * loads, so navbar navigation never feels dead. Pure CSS (animate-pulse
 * is neutralised globally under prefers-reduced-motion), no JS, no images.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="min-h-screen bg-[#041a1b]"
    >
      <span className="sr-only">Loading page, please wait…</span>

      {/* Hero skeleton */}
      <div aria-hidden="true" className="relative flex min-h-[52svh] items-end overflow-hidden">
        <div className="absolute inset-0 animate-pulse bg-[#062324]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a1b] via-transparent to-transparent" />
        <div className="container relative z-10 pb-14 pt-36">
          <div className="h-4 w-48 animate-pulse rounded-full bg-[#fdd693]/20" />
          <div className="mt-6 h-12 w-3/4 animate-pulse rounded-2xl bg-white/10 md:h-16" />
          <div className="mt-4 h-5 w-1/2 animate-pulse rounded-xl bg-white/10" />
          <div className="mt-8 flex gap-3">
            <div className="h-12 w-40 animate-pulse rounded-full bg-[#fdd693]/30" />
            <div className="hidden h-12 w-40 animate-pulse rounded-full bg-white/10 sm:block" />
          </div>
        </div>
      </div>

      {/* Card grid skeleton */}
      <div aria-hidden="true" className="container grid grid-cols-1 gap-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{ animationDelay: `${Math.min(i * 90, 450)}ms` }}
            className="h-64 animate-pulse rounded-[1.75rem] border border-[#fdd693]/15 bg-[#062324]/80"
          />
        ))}
      </div>
    </div>
  );
}
