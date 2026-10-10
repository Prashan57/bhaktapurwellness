import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NAV_COPY } from "@/constants/copy";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#041a1b] text-slate-100">
      <a href="#main-content" className="skip-link">
        {NAV_COPY.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
