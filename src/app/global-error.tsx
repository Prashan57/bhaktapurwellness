'use client';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Last-resort failure state. Owns its <html>/<body> and uses inline
 * styles only — deliberately zero dependencies, so it renders even
 * when the layout or stylesheet pipeline is the thing that broke.
 */
export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
          backgroundColor: '#041a1b',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              display: 'inline-block',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#fdd693',
              border: '1px solid rgba(253,214,147,0.3)',
              borderRadius: 9999,
              padding: '8px 20px',
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: '20px 0 0' }}>
            This page hit a snag.
          </h1>
          <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
            Reload the page — if it keeps happening, come back in a moment.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: 16,
              border: 0,
              borderRadius: 12,
              backgroundColor: '#fdd693',
              color: '#0a4243',
              fontWeight: 700,
              fontSize: 14,
              padding: '12px 28px',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
