import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { InitialLoader } from "@/components/ui/InitialLoader";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <InitialLoader />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
