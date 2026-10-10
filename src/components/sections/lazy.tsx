import dynamic from 'next/dynamic';

/**
 * Below-fold heavy sections, code-split. The server still renders them
 * (SEO/first paint intact); the client hydrates them after the critical
 * above-fold work, so route transitions stay responsive.
 */

function ContactSkeleton() {
  return (
    <div aria-hidden="true" className="container py-20 md:py-24">
      <div className="mx-auto mb-12 h-10 w-2/3 animate-pulse rounded-2xl bg-white/10" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-96 animate-pulse rounded-[1.75rem] border border-[#fdd693]/15 bg-[#062324]/80" />
        <div className="h-96 animate-pulse rounded-[1.75rem] border border-[#fdd693]/15 bg-[#062324]/80" />
      </div>
    </div>
  );
}

function TourSkeleton() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-6xl">
      <div className="mx-auto h-8 w-1/2 animate-pulse rounded-xl bg-white/10" />
      <div className="mt-8 aspect-video w-full animate-pulse rounded-3xl border border-white/10 bg-[#062324]/80" />
    </div>
  );
}

export const LazyContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then((m) => m.ContactSection),
  { loading: () => <ContactSkeleton /> },
);

export const LazyMatterportSection = dynamic(
  () => import('@/components/sections/MatterportSection').then((m) => m.MatterportSection),
  { loading: () => <TourSkeleton /> },
);
