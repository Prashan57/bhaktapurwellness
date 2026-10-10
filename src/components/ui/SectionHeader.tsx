import type { ReactNode } from "react";
import { InView } from "@/components/motion/InView";

type EyebrowProps = {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Small pill label above every section heading — one visual language. */
export function Eyebrow({ icon, children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-[#fdd693]/30 bg-[#0a4243]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#fdd693] shadow-lg shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  intro?: string;
  align?: "center" | "left";
  narrow?: boolean;
  className?: string;
};

/** Consistent section heading block: eyebrow + title + intro. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  narrow = true,
  className = "",
}: SectionHeaderProps) {
  const alignCls =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <InView
      className={`flex max-w-3xl flex-col ${alignCls} mb-12 md:mb-14 ${narrow ? "" : "max-w-none"} ${className}`}
    >
      <div className="mb-5">{eyebrow}</div>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base text-slate-300 sm:text-lg">{intro}</p>
      ) : null}
    </InView>
  );
}

/** Gold-gradient phrase inside headings — single gradient definition. */
export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#fdd693] via-[#fff0d0] to-[#f3be6a] bg-clip-text text-transparent">
      {children}
    </span>
  );
}
