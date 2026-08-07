import Image from "next/image";
import Link from "next/link";
import { FACILITIES } from "@/data/facilities";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiInstagram,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-[#031718] text-white border-t border-[#fdd693]/20 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-[#fdd693]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-full overflow-hidden relative border border-[#fdd693]/50 shadow-lg">
                  <Image
                    src="/images/gallery/bw.jpg"
                    alt="Bhaktapur Wellness Logo"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-[#fdd693] font-bold">
                    Bhaktapur
                  </span>
                  <span className="text-xl font-extrabold tracking-[0.06em] text-white">
                    Wellness
                  </span>
                </div>
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Nepal&apos;s premier integrated sanctuary uniting Gym
                performance, Pro Boxing, Heated Pool aquatics, Luxury Spa &amp;
                Sauna rituals, and Organic Dining.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#fdd693] shadow-[0_0_10px_rgba(253,214,147,0.12)]" />
              <span>Bhaktapur, Nepal · Open 7 Days / Week</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] mb-4">
              Core Facilities
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {FACILITIES.map((facility) => {
                const FacilityIcon = facility.icon;
                return (
                  <li key={facility.slug}>
                    <Link
                      href={`/facilities/${facility.slug}`}
                      className="hover:text-[#fdd693] transition-colors flex items-center gap-2"
                    >
                      <FacilityIcon className="w-4 h-4 text-slate-300" />
                      {facility.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#fdd693] mb-4">
              Contact &amp; Hours
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4" /> Bhaktapur, Nepal
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4" />{" "}
                <a
                  href="tel:+9779800000000"
                  className="hover:text-[#fdd693] transition"
                >
                  (+977) 980-0000000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />{" "}
                <a
                  href="mailto:support@bhaktapurwellness.com"
                  className="hover:text-[#fdd693] transition"
                >
                  support@bhaktapurwellness.com
                </a>
              </div>
              <div className="pt-2 text-xs text-slate-300 border-t border-white/10">
                <span className="text-[#fdd693] font-semibold">Hours:</span>{" "}
                Mon–Sun: 6:00 AM – 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Bhaktapur Wellness Complex. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>Designed &amp; developed by OK</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-slate-300 hover:text-[#fdd693] transition"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-[#fdd693] transition"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-[#fdd693] transition"
              >
                <FiYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
