'use client';

import Link from 'next/link';
import { useEffect } from 'react';

type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Route-level failure state. Renders inside the site layout, so the
 * navbar, theme, and CSS stay intact — a thrown render error degrades
 * to this designed panel instead of an unstyled crash page.
 */
export default function Error({ error, reset }: AppErrorProps) {
  useEffect(() => {
    // Structured log point — forward to the observability layer.
    console.error(
      JSON.stringify({
        message: error.message,
        digest: error.digest ?? null,
        context: 'app-error-boundary',
        timestamp: new Date().toISOString(),
      }),
    );
  }, [error]);

  return (
    <section aria-labelledby="error-heading" className="section section-base">
      <div className="container-narrow relative z-10 py-10 text-center">
        <p className="eyebrow-badge">Something went wrong</p>
        <h1 id="error-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          This page hit a snag.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
          Try again — if it keeps happening, head home and navigate back.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn btn-primary">
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
