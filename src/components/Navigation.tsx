"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import BookingButton from "./BookingButton";

const FLAG: Record<string, string> = { pl: "🇵🇱", en: "🇬🇧", ru: "🇷🇺" };
const LABEL: Record<string, string> = { pl: "PL", en: "EN", ru: "RU" };

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname(); // locale-stripped path, e.g. "/apartments"
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/apartments", label: t("apartments") },
    { href: "/map", label: t("map") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary-700 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:text-primary-200 transition-colors"
        >
          Central<span className="text-accent-400">Rental</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary-900 text-white"
                      : "text-primary-100 hover:bg-primary-600 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-primary-100 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <span>{FLAG[locale]}</span>
              <span>{LABEL[locale]}</span>
              <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 w-28 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                {routing.locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      l === locale ? "text-primary-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    <span>{FLAG[l]}</span>
                    <span>{LABEL[l]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA — opens general booking widget (all apartments) */}
          <BookingButton
            objectCode={null}
            label={t("book")}
            className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors shadow"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-md hover:bg-primary-600 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-800 border-t border-primary-600 px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-md text-sm font-medium text-primary-100 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-primary-600 pt-3 flex items-center gap-3">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                onClick={() => setMenuOpen(false)}
                className={`text-sm px-2 py-1 rounded ${
                  l === locale ? "text-white font-semibold" : "text-primary-300 hover:text-white"
                }`}
              >
                {FLAG[l]} {LABEL[l]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
