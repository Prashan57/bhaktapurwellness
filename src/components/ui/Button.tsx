"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-[#fdd693] text-[#0a4243] font-bold shadow-lg shadow-black/20 hover:bg-[#fff0d0] hover:shadow-[#fdd693]/25",
  outline:
    "border-2 border-[#fdd693] text-[#fdd693] hover:bg-[#fdd693] hover:text-[#0a4243]",
  ghost: "text-[#fdd693] hover:text-[#fff0d0] hover:bg-white/5",
  dark: "bg-[#0a4243] text-[#fdd693] border border-[#fdd693]/25 hover:bg-[#062324] hover:border-[#fdd693]/50",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-[0.7rem] tracking-[0.14em]",
  md: "px-6 py-3 text-xs sm:text-sm tracking-[0.12em]",
  lg: "px-8 py-3.5 text-sm tracking-[0.15em]",
};

function baseClasses(variant: Variant, size: Size, pill: boolean, className: string) {
  return [
    "inline-flex items-center justify-center gap-2 font-bold uppercase",
    pill ? "rounded-full" : "rounded-xl",
    "transition-all duration-300 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdd693] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041a1b]",
    "disabled:opacity-50 disabled:pointer-events-none",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ].join(" ");
}

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  pill?: boolean;
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

/** Unified button / link with consistent sizing, radius, and focus ring. */
export function Button({
  variant = "primary",
  size = "md",
  pill = false,
  className = "",
  children,
  href,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = baseClasses(variant, size, pill, className);
  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        onClick={onClick as unknown as AnchorHTMLAttributes<HTMLAnchorElement>["onClick"]}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick as unknown as ButtonHTMLAttributes<HTMLButtonElement>["onClick"]}
      className={cls}
    >
      {children}
    </button>
  );
}
