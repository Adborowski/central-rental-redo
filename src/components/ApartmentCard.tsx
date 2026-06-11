"use client";

import Image from "next/image";
import bookingLogo from "../../public/booking-logo.svg";
import airbnbBelo from "../../public/airbnb-belo.svg";
import { useTranslations, useLocale } from "next-intl";
import { Apartment, Locale } from "@/types/apartment";
import BookingButton from "./BookingButton";

interface Props {
  apartment: Apartment;
  onSelect: (apartment: Apartment) => void;
}

function AwardStrip({ rating }: { rating: number }) {
  const formatted = rating.toFixed(1).replace(".", ",");
  return (
    <div className="absolute top-0 left-0 right-0 flex items-stretch">
      {/* Booking.com section */}
      <div className="flex-1 flex items-center justify-between px-3 py-2 bg-[#003580]">
        <div className="flex flex-col leading-tight gap-0.5">
          <Image
            src={bookingLogo}
            alt="Booking.com"
            height={12}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-blue-200 text-[10px]">Traveller Review Awards 2021</span>
        </div>
        <span className="text-white text-2xl font-black leading-none pl-2">{formatted}</span>
      </div>

      {/* Divider */}
      <div className="w-px bg-white/20" />

      {/* Airbnb Superhost pill */}
      <div className="flex flex-col items-center justify-center px-3 py-2 bg-white gap-0.5">
        <Image src={airbnbBelo} alt="Airbnb" height={14} />
        <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase">Superhost</span>
      </div>
    </div>
  );
}

export default function ApartmentCard({ apartment, onSelect }: Props) {
  const t = useTranslations("apartments");
  const tAmenities = useTranslations("amenities");
  const locale = useLocale() as Locale;

  const visible = apartment.amenities.slice(0, 5);
  const overflow = apartment.amenities.length - visible.length;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group">
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={`/images/apartments/${apartment.id}/1.jpg`}
          alt={apartment.name[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <AwardStrip rating={apartment.bookingRating} />
        {/* Type badge — bottom left */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-block bg-white text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
            {apartment.type === "studio" ? t("type_studio") : t("type_apartment")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {apartment.name[locale]}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{apartment.address}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center bg-gray-50 rounded-lg p-2">
            <div className="text-base font-bold text-gray-900">{apartment.area}</div>
            <div className="text-xs text-gray-500">{t("sqm")}</div>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-2">
            <div className="text-base font-bold text-gray-900">{apartment.maxGuests}</div>
            <div className="text-xs text-gray-500">{t("guests")}</div>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-2">
            <div className="text-base font-bold text-gray-900">{apartment.beds}</div>
            <div className="text-xs text-gray-500">{t("beds")}</div>
          </div>
        </div>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visible.map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
            >
              {tAmenities(amenity as any)}
            </span>
          ))}
          {overflow > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-400">
              +{overflow}
            </span>
          )}
        </div>

        {/* Review count */}
        <p className="text-xs text-gray-400 mb-4">
          {apartment.reviewCount} {t("reviews")}
        </p>

        {/* CTA */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={() => onSelect(apartment)}
            className="flex-1 py-2.5 border border-primary-600 text-primary-700 font-semibold text-sm rounded-lg hover:bg-primary-50 transition-colors"
          >
            {t("view_details")}
          </button>
          <BookingButton
            objectCode={apartment.objectCode}
            label={t("book_now")}
            className="flex-1 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm rounded-lg transition-colors"
          />
        </div>
      </div>
    </article>
  );
}
