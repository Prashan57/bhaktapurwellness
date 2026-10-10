"use client";

import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const CONTROL =
  "w-full rounded-xl border bg-[#041a1b]/70 px-4 py-3 text-sm text-white transition-all placeholder:text-slate-500 focus:outline-none focus:border-[#fdd693] focus:ring-2 focus:ring-[#fdd693]/40";

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
};

/** Label + control + hint/error — one form-field pattern everywhere. */
export function Field({ id, label, required, hint, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#fdd693]"
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-slate-400">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  const { invalid, className = "", ...rest } = props;
  return (
    <input
      className={`${CONTROL} ${invalid ? "border-rose-400/70" : "border-[#fdd693]/20"} ${className}`}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  const { invalid, className = "", ...rest } = props;
  return (
    <textarea
      className={`${CONTROL} min-h-[7rem] resize-y ${invalid ? "border-rose-400/70" : "border-[#fdd693]/20"} ${className}`}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  const { invalid, className = "", children, ...rest } = props;
  return (
    <select
      className={`${CONTROL} ${invalid ? "border-rose-400/70" : "border-[#fdd693]/20"} ${className}`}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {children}
    </select>
  );
}
