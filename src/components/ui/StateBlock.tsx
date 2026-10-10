import type { ReactNode } from "react";

/** Skeleton block for loading states — same card language, no layout shift. */
export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-2xl bg-white/10 ${className}`}
    />
  );
}

type StateBlockProps = {
  icon?: ReactNode;
  title: string;
  body?: string;
  action?: ReactNode;
};

/** Shared empty / error presentation so states feel like one product. */
export function StateBlock({ icon, title, body, action }: StateBlockProps) {
  return (
    <div className="flex flex-col items-center rounded-[2rem] border border-[#fdd693]/15 bg-[#062324]/80 px-8 py-14 text-center">
      {icon ? (
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#fdd693]/25 bg-[#0a4243] text-xl text-[#fdd693]">
          {icon}
        </span>
      ) : null}
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {body ? <p className="mt-2 max-w-sm text-sm text-slate-300">{body}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
