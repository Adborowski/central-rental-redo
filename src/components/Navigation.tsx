"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import BookingButton from "./BookingButton";
import { CheckIcon, ChevronDownIcon, CloseIcon } from "./Icons";
import logoWhite from "../../public/images/branding/logo_white.png";

const LABEL: Record<string, string> = { pl: "Polski", en: "English", ru: "Русский" };
const SHORT: Record<string, string> = { pl: "PL", en: "EN", ru: "RU" };

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
    <header className="sticky top-0 z-50 bg-primary-900/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-primary-900/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[4.25rem]">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 hover:opacity-85 transition-opacity">
          <Image src={logoWhite} alt="" className="h-8 w-auto" />
          <span className="text-white font-semibold text-lg tracking-tight leading-none">
            Central<span className="text-accent-400">Rental</span>
          </span>
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
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-white/12 text-white"
                      : "text-sand-200/75 hover:text-white hover:bg-white/8"
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
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-sand-200/75 hover:text-white hover:bg-white/8 transition-colors"
            >
              <GlobeGlyph />
              <span>{SHORT[locale]}</span>
              <ChevronDownIcon
                className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl ring-1 ring-stone-900/5 py-1.5 z-50 animate-fade-up [animation-duration:200ms]">
                {routing.locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-sand-100 transition-colors ${
                      l === locale
                        ? "text-primary-800 font-semibold"
                        : "text-stone-600"
                    }`}
                  >
                    {LABEL[l]}
                    {l === locale && <CheckIcon className="w-4 h-4 text-primary-600" />}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA — opens general booking widget (all apartments) */}
          <BookingButton
            objectCode={null}
            label={t("book")}
            className="px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md shadow-accent-600/25 hover:shadow-lg hover:-translate-y-px"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-lg border-t border-white/10 px-4 pb-5 pt-3 animate-fade-up [animation-duration:250ms]">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-white/12 text-white"
                        : "text-sand-200/75 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {routing.locales.map((l) => (
                <Link
                  key={l}
                  href={pathname}
                  locale={l}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                    l === locale
                      ? "bg-white/12 text-white font-semibold"
                      : "text-sand-200/60 hover:text-white"
                  }`}
                >
                  {SHORT[l]}
                </Link>
              ))}
            </div>
            <BookingButton
              objectCode={null}
              label={t("book")}
              className="px-5 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors"
            />
          </div>
        </div>
      )}
    </header>
  );
}

function GlobeGlyph() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13.5 13.5 0 0 1 0 18M12 3a13.5 13.5 0 0 0 0 18" />
    </svg>
  );
}
