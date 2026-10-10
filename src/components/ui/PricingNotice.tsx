import { FiInfo } from "react-icons/fi";
import { COMMON_COPY } from "@/constants/copy";

/**
 * Subtle pricing footnote — informational only, never an error/warning
 * look. Render below pricing card grids and near membership footers.
 */
export function PricingNotice({ className = "" }: { className?: string }) {
  return (
    <p
      role="note"
      className={`flex items-start gap-3 rounded-2xl border border-[#fdd693]/20 bg-[#041a1b]/70 px-5 py-4 text-sm leading-relaxed text-slate-300 ${className}`}
    >
      <FiInfo aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#fdd693]" />
      <span>{COMMON_COPY.pricingNotice}</span>
    </p>
  );
}
