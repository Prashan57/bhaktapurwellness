import { InView } from "@/components/motion/InView";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#062021] text-white scroll-mt-24 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#fdd693]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#0a4243]/50 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <InView className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <button className="contact-badge" aria-label="Get in touch">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#FDD693"
                />
                <circle cx="12" cy="9" r="2.2" fill="#0A4243" />
              </svg>
              <span className="transform translate-y-[0.5px]">
                Get in touch
              </span>
            </button>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Reserve Your Day Pass or Consultation.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have questions about our 5 facilities, memberships, or personal
            training? Reach out and our team will assist you immediately.
          </p>
        </InView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Form */}
          <InView as="div" className="h-full">
            <div className="rounded-[1.75rem] border border-[#fdd693]/20 bg-[#0a4243]/85 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl h-full flex flex-col justify-between">
              <form className="space-y-5 flex flex-col h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#fdd693] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#fdd693] focus:ring-1 focus:ring-[#fdd693] text-sm transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#fdd693] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#fdd693] focus:ring-1 focus:ring-[#fdd693] text-sm transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#fdd693] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#fdd693] focus:ring-1 focus:ring-[#fdd693] text-sm transition-all"
                      placeholder="(+977) 980-0000000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="facility"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#fdd693] mb-2"
                    >
                      Facility Interest
                    </label>
                    <select
                      id="facility"
                      className="w-full px-4 py-3 rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 text-white focus:outline-none focus:border-[#fdd693] focus:ring-1 focus:ring-[#fdd693] text-sm transition-all"
                    >
                      <option className="bg-[#041a1b] text-white">
                        All 5 Facilities (Full Tour)
                      </option>
                      <option className="bg-[#041a1b] text-white">
                        Gym &amp; Personal Training
                      </option>
                      <option className="bg-[#041a1b] text-white">
                        Pro Boxing Studio
                      </option>
                      <option className="bg-[#041a1b] text-white">
                        Heated Swimming Pool
                      </option>
                      <option className="bg-[#041a1b] text-white">
                        Luxury Spa &amp; Sauna
                      </option>
                      <option className="bg-[#041a1b] text-white">
                        Organic Restaurant
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#fdd693] mb-2"
                  >
                    Message / Special Requests
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#fdd693]/20 bg-[#041a1b]/70 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#fdd693] focus:ring-1 focus:ring-[#fdd693] text-sm transition-all"
                    placeholder="Tell us about your preferred visit date or questions..."
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-[#fdd693] animate-ping" />
                    <span>Open Mon–Sun: 6:00 AM – 10:00 PM</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl font-bold bg-[#fdd693] text-[#0a4243] hover:bg-[#fff0d0] shadow-lg shadow-black/20 text-sm"
                  >
                    Submit Reservation Request
                  </button>
                </div>
              </form>
            </div>
          </InView>

          {/* Map & Location Card */}
          <InView as="div" delay={100} className="h-full">
            <div className="rounded-[1.75rem] border border-[#fdd693]/20 bg-[#0a4243]/85 backdrop-blur-2xl p-2 shadow-2xl h-full flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113068.22150022577!2d85.22254214335938!3d27.6745884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b007edc1b69%3A0x68c24b9e7280695d!2sBhaktapur%20Wellness!5e0!3m2!1sen!2snp!4v1762794676817!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bhaktapur Wellness location on Google Maps"
                className="w-full h-full min-h-[420px] rounded-[1.5rem] filter invert-[0.9] hue-rotate-180 brightness-95 contrast-105"
              />
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
