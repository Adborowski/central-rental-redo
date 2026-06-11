"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

interface Props {
  objectCode: number | null; // null = general (all apartments)
  onClose: () => void;
}

const LANG_ID: Record<string, number> = { pl: 1, en: 2, ru: 135 };

function isoDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function BookingModal({ objectCode, onClose }: Props) {
  const locale = useLocale();
  const langId = LANG_ID[locale] ?? 1;

  // Always pass explicit dates so iDoSell never falls back to 01-01-1970
  const startDate = isoDate(0);
  const endDate = isoDate(1);

  const base = `https://client8134.idobooking.com/book-now/index.php?language=${langId}&transparentbackground=1&start_date=${startDate}&end_date=${endDate}`;
  const src = objectCode !== null ? `${base}&ob[${objectCode}]=1` : base;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-900/75 backdrop-blur-sm animate-fade-in [animation-duration:250ms]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl flex flex-col overflow-hidden animate-fade-up [animation-duration:350ms]"
           style={{ height: "min(680px, 90vh)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-primary-900 flex-shrink-0">
          <span className="text-white font-semibold">
            {locale === "pl" ? "Rezerwacja online" : locale === "ru" ? "Онлайн-бронирование" : "Online booking"}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-sand-200/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* iFrame */}
        <iframe
          src={src}
          className="flex-1 w-full border-0"
          title="Booking"
          allow="payment"
        />
      </div>
    </div>
  );
}
