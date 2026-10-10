import Link from 'next/link';

/** Styled 404 — dead routes land here, never on a bare default page. */
export default function NotFound() {
  return (
    <section aria-labelledby="notfound-heading" className="section section-base">
      <div className="container-narrow relative z-10 py-10 text-center">
        <p className="eyebrow-badge">404 · Page not found</p>
        <h1 id="notfound-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          This page drifted away.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
          The link may be old, or the page may have moved. Start back home
          and find your way from there.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/facilities" className="btn btn-outline">
            Browse facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
