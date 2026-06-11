"use client";

import Image from "next/image";
import bookingLogo from "../../public/booking-logo.svg";
import airbnbBelo from "../../public/airbnb-belo.svg";
import { useTranslations, useLocale } from "next-intl";
import { Apartment, Locale } from "@/types/apartment";
import BookingButton from "./BookingButton";
import { AreaIcon, BedIcon, GuestsIcon, StarIcon } from "./Icons";

interface Props {
  apartment: Apartment;
  onSelect: (apartment: Apartment) => void;
}

export default function ApartmentCard({ apartment, onSelect }: Props) {
  const t = useTranslations("apartments");
  const tAmenities = useTranslations("amenities");
  const locale = useLocale() as Locale;

  const visible = apartment.amenities.slice(0, 4);
  const overflow = apartment.amenities.length - visible.length;
  const bookingScore = apartment.bookingRating.toFixed(1).replace(".", ",");

  const stats = [
    { Icon: AreaIcon, value: `${apartment.area} ${t("sqm")}` },
    { Icon: GuestsIcon, value: apartment.maxGuests },
    { Icon: BedIcon, value: apartment.beds },
  ];

  return (
    <article className="group bg-white rounded-3xl overflow-hidden ring-1 ring-stone-900/5 shadow-sm hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Photo */}
      <div
        className="relative h-60 overflow-hidden cursor-pointer"
        onClick={() => onSelect(apartment)}
      >
        <Image
          src={`/images/apartments/${apartment.id}/1.jpg`}
          alt={apartment.name[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-stone-950/10" />

        {/* Award badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className="flex items-center gap-1.5 bg-[#003580]/95 backdrop-blur-sm rounded-full pl-2.5 pr-1 py-1 shadow-md">
            <Image
              src={bookingLogo}
              alt="Booking.com"
              height={9}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="bg-white text-[#003580] text-[11px] font-black rounded-full px-1.5 py-0.5 leading-none">
              {bookingScore}
            </span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-md">
            <Image src={airbnbBelo} alt="Airbnb" height={11} />
            <span className="text-[9px] font-bold text-stone-600 tracking-[0.12em] uppercase">
              Superhost
            </span>
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute bottom-3.5 left-3.5">
          <span className="inline-block bg-white/95 backdrop-blur-sm text-primary-800 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-md">
            {apartment.type === "studio" ? t("type_studio") : t("type_apartment")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-xl font-semibold text-stone-900">
            {apartment.name[locale]}
          </h3>
          <span className="flex items-center gap-1 shrink-0 text-accent-500 mt-1">
            <StarIcon className="w-3.5 h-3.5" />
            <span className="text-sm font-bold text-stone-900">{apartment.rating}</span>
            <span className="text-xs text-stone-400 font-medium">
              ({apartment.reviewCount})
            </span>
          </span>
        </div>
        <p className="text-sm text-stone-500 mb-5">{apartment.address}</p>

        {/* Stats */}
        <div className="flex items-center gap-5 pb-5 mb-5 border-b border-stone-100">
          {stats.map(({ Icon, value }, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-stone-600">
              <Icon className="w-[18px] h-[18px] text-primary-600" />
              <span className="font-semibold text-stone-800">{value}</span>
            </span>
          ))}
        </div>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {visible.map((amenity) => (
            <span
              key={amenity}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-sand-100 text-stone-600"
            >
              {tAmenities(amenity as never)}
            </span>
          ))}
          {overflow > 0 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-sand-100 text-stone-400">
              +{overflow}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto flex gap-2.5">
          <button
            onClick={() => onSelect(apartment)}
            className="flex-1 py-2.5 border border-stone-200 text-stone-700 font-semibold text-sm rounded-full hover:border-primary-700 hover:text-primary-800 hover:bg-primary-50 transition-colors"
          >
            {t("view_details")}
          </button>
          <BookingButton
            objectCode={apartment.objectCode}
            label={t("book_now")}
            className="flex-1 py-2.5 bg-primary-800 hover:bg-primary-900 text-white font-semibold text-sm rounded-full transition-colors"
          />
        </div>
      </div>
    </article>
  );
}
