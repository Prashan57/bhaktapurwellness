"use client";

import { useState, type FormEvent } from "react";
import { InView } from "@/components/motion/InView";
import { Eyebrow, GradientText } from "@/components/ui/SectionHeader";
import { Field, TextInput, TextArea, Select } from "@/components/ui/Field";
import { FORM_COPY, SECTION_COPY } from "@/constants/copy";
import { FiCheck, FiSend } from "react-icons/fi";

const INTERESTS = [
  "All facilities (full tour)",
  "Combined wellness package",
  "Dance Classes",
  "Kickboxing Classes",
  "Sauna / Steam / Heated Pool",
  "Locker Membership",
  "VIP Special Packages",
  "Gym & Personal Training",
  "Pro Boxing Studio",
  "Heated Swimming Pool",
  "Luxury Spa & Sauna",
  "Organic Restaurant",
];

type FormState = { name: string; email: string; phone: string; interest: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", email: "", phone: "", interest: INTERESTS[0], message: "" };

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = FORM_COPY.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = FORM_COPY.errors.email;
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 7)
    errors.phone = FORM_COPY.errors.phone;
  if (values.message.trim().length < 10) errors.message = FORM_COPY.errors.message;
  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstError = (Object.keys(next) as Array<keyof FormState>)[0];
    if (firstError) {
      const target =
        firstError === "name" ? "contact-name" : firstError === "email" ? "contact-email" : firstError === "phone" ? "contact-phone" : "contact-message";
      document.getElementById(target)?.focus();
      return;
    }
    setStatus("sending");
    // No backend yet — simulate a successful reservation request.
    window.setTimeout(() => setStatus("sent"), 700);
  };

  const reset = () => {
    setValues(INITIAL);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-[#062021]">
      <div aria-hidden="true" className="ambient-glow left-10 top-1/4 h-64 w-64 bg-[#fdd693]/10 blur-[100px]" />
      <div aria-hidden="true" className="ambient-glow bottom-1/4 right-10 h-64 w-64 bg-[#0a4243]/50 blur-[100px]" />

      <div className="container relative z-10">
        <InView className="mx-auto mb-12 max-w-3xl text-center">
          <Eyebrow>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FDD693" />
              <circle cx="12" cy="9" r="2.2" fill="#0A4243" />
            </svg>
            {SECTION_COPY.contactEyebrow}
          </Eyebrow>
          <h2 id="contact-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Reserve Your <GradientText>Day Pass or Consultation.</GradientText>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Bhaktapur Wellness, located in Kausaltar, Bhaktapur, is a peaceful place to relax, refresh, and
            take care of yourself. Our goal is to bring all your essential wellness services under one roof,
            making it easy and convenient for you to look after your health and well-being.
          </p>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Questions about facilities, memberships, or training? Our team replies during opening hours.
          </p>
        </InView>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <InView className="h-full">
            <div className="flex h-full flex-col rounded-[1.75rem] border border-[#fdd693]/20 bg-[#0a4243]/85 p-7 shadow-2xl backdrop-blur-2xl sm:p-9">
              {status === "sent" ? (
                <div className="flex flex-1 flex-col items-center justify-center py-8 text-center" role="status">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fdd693] text-[#0a4243]">
                    <FiCheck aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-extrabold text-white">{FORM_COPY.successTitle}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{FORM_COPY.successBody}</p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 rounded-xl border-2 border-[#fdd693] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#fdd693] transition hover:bg-[#fdd693] hover:text-[#0a4243]"
                  >
                    {FORM_COPY.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex h-full flex-col gap-5" aria-label="Reservation request">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="contact-name" label={FORM_COPY.fullName} required error={errors.name}>
                      <TextInput
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder={FORM_COPY.fullNamePlaceholder}
                        value={values.name}
                        onChange={set("name")}
                        invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        required
                      />
                    </Field>
                    <Field id="contact-email" label={FORM_COPY.email} required error={errors.email}>
                      <TextInput
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder={FORM_COPY.emailPlaceholder}
                        value={values.email}
                        onChange={set("email")}
                        invalid={Boolean(errors.email)}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field id="contact-phone" label={FORM_COPY.phone} error={errors.phone} hint="Optional — for faster confirmation">
                      <TextInput
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder={FORM_COPY.phonePlaceholder}
                        value={values.phone}
                        onChange={set("phone")}
                        invalid={Boolean(errors.phone)}
                      />
                    </Field>
                    <Field id="contact-interest" label={FORM_COPY.interest}>
                      <Select id="contact-interest" value={values.interest} onChange={set("interest")}>
                        {INTERESTS.map((interest) => (
                          <option key={interest} value={interest} className="bg-[#041a1b] text-white">
                            {interest}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>

                  <Field id="contact-message" label={FORM_COPY.message} required error={errors.message}>
                    <TextArea
                      id="contact-message"
                      rows={4}
                      placeholder={FORM_COPY.messagePlaceholder}
                      value={values.message}
                      onChange={set("message")}
                      invalid={Boolean(errors.message)}
                      required
                    />
                  </Field>

                  <div className="mt-auto flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <p className="flex items-center gap-2 text-xs text-slate-300">
                      <span aria-hidden="true" className="relative flex h-2 w-2">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-[#fdd693] opacity-60" />
                        <span className="h-2 w-2 rounded-full bg-[#fdd693]" />
                      </span>
                      Open Mon–Sun: 6:00 AM – 10:00 PM
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#fdd693] px-8 py-3 text-sm font-bold text-[#0a4243] shadow-lg shadow-black/20 transition hover:bg-[#fff0d0] disabled:opacity-60"
                    >
                      <FiSend aria-hidden="true" className="h-4 w-4" />
                      {status === "sending" ? FORM_COPY.submitting : FORM_COPY.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </InView>

          <InView delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[1.75rem] border border-[#fdd693]/20 bg-[#0a4243]/85 p-2 shadow-2xl backdrop-blur-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113068.22150022577!2d85.22254214335938!3d27.6745884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b007edc1b69%3A0x68c24b9e7280695d!2sBhaktapur%20Wellness!5e0!3m2!1sen!2snp!4v1762794676817!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhaktapur Wellness location on Google Maps"
                className="h-full min-h-[380px] w-full flex-1 rounded-[1.5rem] brightness-95 contrast-[1.05] hue-rotate-180 invert-[0.9] lg:min-h-[420px]"
              />
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
