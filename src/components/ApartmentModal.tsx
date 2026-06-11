"use client";

import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Apartment, Locale } from "@/types/apartment";
import ApartmentGallery from "./ApartmentGallery";
import BookingButton from "./BookingButton";

interface Props {
  apartment: Apartment | null;
  onClose: () => void;
}

export default function ApartmentModal({ apartment, onClose }: Props) {
  const t = useTranslations("apartments");
  const tAmenities = useTranslations("amenities");
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (!apartment) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [apartment, onClose]);

  if (!apartment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label={t("close")}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Gallery */}
        <ApartmentGallery
          apartmentId={apartment.id}
          name={apartment.name[locale]}
          photoCount={apartment.photoCount}
        />

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                {apartment.type === "studio" ? t("type_studio") : t("type_apartment")}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-0.5">
                {apartment.name[locale]}
              </h2>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-yellow-500">
                <span>★</span>
                <span className="font-bold text-gray-900">{apartment.rating}</span>
              </div>
              <div className="text-xs text-gray-500">{apartment.reviewCount} {t("reviews")}</div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">{apartment.address}</p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: t("area"), value: `${apartment.area} ${t("sqm")}` },
              { label: t("guests"), value: apartment.maxGuests },
              { label: t("beds"), value: apartment.beds },
              { label: t("floor"), value: apartment.floor },
            ].map((s) => (
              <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                <div className="text-lg font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6 text-sm">
            {apartment.description[locale]}
          </p>

          {/* Amenity pills */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">{t("amenities")}</h3>
            <div className="flex flex-wrap gap-2">
              {apartment.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700"
                >
                  {tAmenities(amenity as any)}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <BookingButton
            objectCode={apartment.objectCode}
            label={t("book_now")}
            className="block w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold text-center rounded-xl transition-colors shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
