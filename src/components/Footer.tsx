import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-primary-800 text-primary-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl mb-3">
              Central<span className="text-accent-400">Rental</span>
            </div>
            <p className="text-sm text-primary-300 leading-relaxed">{t("tagline")}</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Airbnb"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.857 0 3.37 1.51 3.37 3.368 0 1.857-1.513 3.37-3.37 3.37-1.858 0-3.37-1.513-3.37-3.37C8.63 6.01 10.142 4.5 12 4.5zm0 14.625c-2.84 0-5.363-1.42-6.908-3.592.035-2.286 4.605-3.542 6.908-3.542 2.296 0 6.873 1.256 6.908 3.542C17.363 17.705 14.84 19.125 12 19.125z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors text-xs font-bold tracking-tight"
                aria-label="Booking.com"
              >
                Booking.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {t("links_title")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: tNav("home") },
                { href: "/apartments", label: tNav("apartments") },
                { href: "/map", label: tNav("map") },
                { href: "/contact", label: tNav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {t("contact_title")}
            </h3>
            <ul className="space-y-2 text-sm text-primary-300">
              <li>Wojciech Borowski</li>
              <li>
                <a href="tel:+48502185070" className="hover:text-white transition-colors">
                  +48 502 185 070
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@centralrental.pl"
                  className="hover:text-white transition-colors"
                >
                  kontakt@centralrental.pl
                </a>
              </li>
              <li>Białystok, Polska</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-400">
          <span>© {new Date().getFullYear()} Central Rental. {t("rights")}</span>
          <div className="flex gap-4">
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
