import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MailIcon, MapPinIcon, PhoneIcon, UserIcon } from "./Icons";
import logoWhite from "../../public/images/branding/logo_white.png";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-primary-900 text-sand-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src={logoWhite} alt="" className="h-8 w-auto" />
              <span className="text-white font-semibold text-xl tracking-tight leading-none">
                Central<span className="text-accent-400">Rental</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t("tagline")}</p>
            <div className="flex items-center gap-2.5 mt-7">
              <a
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sand-200/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                aria-label="Airbnb"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.857 0 3.37 1.51 3.37 3.368 0 1.857-1.513 3.37-3.37 3.37-1.858 0-3.37-1.513-3.37-3.37C8.63 6.01 10.142 4.5 12 4.5zm0 14.625c-2.84 0-5.363-1.42-6.908-3.592.035-2.286 4.605-3.542 6.908-3.542 2.296 0 6.873 1.256 6.908 3.542C17.363 17.705 14.84 19.125 12 19.125z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sand-200/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-full border border-white/10 flex items-center text-xs font-bold tracking-tight text-sand-200/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors"
                aria-label="Booking.com"
              >
                Booking.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-5">
              {t("links_title")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: tNav("home") },
                { href: "/apartments", label: tNav("apartments") },
                { href: "/map", label: tNav("map") },
                { href: "/contact", label: tNav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-5">
              {t("contact_title")}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <UserIcon className="w-4 h-4 text-accent-400/80 shrink-0" />
                Wojciech Borowski
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-accent-400/80 shrink-0" />
                <a href="tel:+48502185070" className="hover:text-white transition-colors">
                  +48 502 185 070
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-accent-400/80 shrink-0" />
                <a
                  href="mailto:kontakt@centralrental.pl"
                  className="hover:text-white transition-colors"
                >
                  kontakt@centralrental.pl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="w-4 h-4 text-accent-400/80 shrink-0" />
                Białystok, Polska
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-sand-200/45">
          <span>© {new Date().getFullYear()} Central Rental. {t("rights")}</span>
          <div className="flex gap-5">
            <Link href="/prywatnosc" className="hover:text-white transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/regulamin" className="hover:text-white transition-colors">
              {t("rules")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
