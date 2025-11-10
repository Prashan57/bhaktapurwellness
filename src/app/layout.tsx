import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { SiteLayout } from '@/components/layouts/SiteLayout';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WindSurf — SWE-1',
  description: 'A modern Next.js application with TypeScript and Tailwind CSS',
};

 export const viewport: Viewport = {
   width: 'device-width',
   initialScale: 1,
   themeColor: [
     { media: '(prefers-color-scheme: light)', color: '#ffffff' },
     { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
   ],
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground min-h-screen`}>
        <ThemeProvider>
          <SiteLayout>
            {children}
          </SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
