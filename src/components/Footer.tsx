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
