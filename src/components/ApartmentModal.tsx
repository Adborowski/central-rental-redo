"use client";

import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Apartment, Locale } from "@/types/apartment";
import ApartmentGallery from "./ApartmentGallery";
import BookingButton from "./BookingButton";
import {
  AreaIcon,
  BedIcon,
  CheckIcon,
  CloseIcon,
  FloorIcon,
  GuestsIcon,
  MapPinIcon,
  StarIcon,
} from "./Icons";

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

  const stats = [
    { Icon: AreaIcon, label: t("area"), value: `${apartment.area} ${t("sqm")}` },
    { Icon: GuestsIcon, label: t("guests"), value: apartment.maxGuests },
    { Icon: BedIcon, label: t("beds"), value: apartment.beds },
    { Icon: FloorIcon, label: t("floor"), value: apartment.floor },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary-900/70 backdrop-blur-sm animate-fade-in [animation-duration:250ms]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl animate-fade-up [animation-duration:350ms]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-stone-950/45 hover:bg-stone-950/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          aria-label={t("close")}
        >
          <CloseIcon className="w-4.5 h-4.5" />
        </button>

        {/* Gallery */}
        <ApartmentGallery
          apartmentId={apartment.id}
          name={apartment.name[locale]}
          photoCount={apartment.photoCount}
        />

        {/* Content */}
        <div className="p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <span className="text-[11px] font-semibold text-accent-600 uppercase tracking-[0.18em]">
                {apartment.type === "studio" ? t("type_studio") : t("type_apartment")}
              </span>
              <h2 className="text-[1.7rem] font-semibold text-stone-900 mt-1 leading-tight">
                {apartment.name[locale]}
              </h2>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center justify-end gap-1 text-accent-500">
                <StarIcon className="w-4 h-4" />
                <span className="font-bold text-stone-900">{apartment.rating}</span>
              </div>
              <div className="text-xs text-stone-400 mt-0.5">
                {apartment.reviewCount} {t("reviews")}
              </div>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-stone-500 mb-6">
            <MapPinIcon className="w-4 h-4 text-primary-600" />
            {apartment.address}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-7">
            {stats.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="text-center bg-sand-50 ring-1 ring-stone-900/5 rounded-2xl py-3.5 px-2"
              >
                <Icon className="w-5 h-5 text-primary-600 mx-auto mb-1.5" />
                <div className="text-base font-bold text-stone-900 leading-tight">{value}</div>
                <div className="text-[11px] text-stone-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-stone-600 leading-relaxed mb-7 text-[15px]">
            {apartment.description[locale]}
          </p>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg text-stone-900 mb-4">
              {t("amenities")}
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {apartment.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="flex items-center gap-2.5 text-sm text-stone-600"
                >
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3" />
                  </span>
                  {tAmenities(amenity as never)}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <BookingButton
            objectCode={apartment.objectCode}
            label={t("book_now")}
            className="block w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold text-center rounded-full transition-all duration-300 shadow-lg shadow-accent-600/25 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
