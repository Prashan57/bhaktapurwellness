"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#071716]/95 shadow-2xl shadow-black/40 overflow-hidden animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <span className="text-xs uppercase text-[#fdd693]/90 tracking-[0.25em] font-semibold">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-200 hover:bg-white/10 transition"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>
        <div className="p-6 text-slate-100 space-y-5">{children}</div>
      </div>
    </div>
  );
}
