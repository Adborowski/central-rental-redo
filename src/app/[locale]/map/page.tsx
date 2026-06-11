import { useTranslations, useLocale } from "next-intl";
import { apartments } from "@/data/apartments";
import { Locale } from "@/types/apartment";
import MapClientWrapper from "@/components/MapClientWrapper";

export default function MapPage() {
  const t = useTranslations("map");
  const locale = useLocale() as Locale;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
          <p className="text-primary-200">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "560px" }}>
          <MapClientWrapper
            apartments={apartments}
            locale={locale}
            detailsLabel={t("view_details")}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apartments.map((apt) => (
            <div key={apt.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="font-semibold text-gray-900 text-sm">{apt.name[locale]}</div>
              <div className="text-xs text-gray-500 mt-1">{apt.address}</div>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                <span>★ {apt.rating}</span>
                <span>{apt.area} m²</span>
                <span>max {apt.maxGuests} os.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
