import { useTranslations, useLocale } from "next-intl";
import { apartments } from "@/data/apartments";
import { Locale } from "@/types/apartment";
import MapClientWrapper from "@/components/MapClientWrapper";
import PageHeader from "@/components/PageHeader";
import { AreaIcon, GuestsIcon, StarIcon } from "@/components/Icons";

export default function MapPage() {
  const t = useTranslations("map");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <div className="min-h-screen bg-sand-50">
      <PageHeader eyebrow={tNav("map")} title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div
          className="rounded-3xl overflow-hidden ring-1 ring-stone-900/10 shadow-lg"
          style={{ height: "560px" }}
        >
          <MapClientWrapper
            apartments={apartments}
            locale={locale}
            detailsLabel={t("view_details")}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl p-5 ring-1 ring-stone-900/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="font-display font-semibold text-stone-900">
                {apt.name[locale]}
              </div>
              <div className="text-xs text-stone-500 mt-1">{apt.address}</div>
              <div className="flex items-center gap-4 mt-3 text-xs text-stone-600">
                <span className="flex items-center gap-1">
                  <StarIcon className="w-3.5 h-3.5 text-accent-500" />
                  <span className="font-semibold text-stone-800">{apt.rating}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <AreaIcon className="w-3.5 h-3.5 text-primary-600" />
                  {apt.area} m²
                </span>
                <span className="flex items-center gap-1.5">
                  <GuestsIcon className="w-3.5 h-3.5 text-primary-600" />
                  max {apt.maxGuests}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
