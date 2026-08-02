import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { SiteLayout } from '@/components/layouts/SiteLayout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Bhaktapur Wellness',
    template: '%s | Bhaktapur Wellness',
  },
  description: 'Experience luxury wellness in Bhaktapur. Premium gym, spa treatments, beauty services, and gourmet cuisine for mind, body, and soul.',
  keywords: ['wellness', 'spa', 'gym', 'beauty', 'cafe', 'Bhaktapur', 'Nepal', 'luxury', 'fitness', 'relaxation'],
  openGraph: {
    title: 'Bhaktapur Wellness',
    description: 'Premium wellness destination in Bhaktapur, Nepal',
    url: 'https://bhaktapurwellness.com',
    siteName: 'Bhaktapur Wellness',
    images: [
      {
        url: '/images/gallery/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Bhaktapur Wellness',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhaktapur Wellness',
    description: 'Premium wellness destination in Bhaktapur, Nepal',
    images: ['/images/gallery/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}