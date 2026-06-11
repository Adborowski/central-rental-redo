import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden bg-primary-800 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full -translate-y-1/2 translate-x-1/3 opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600 rounded-full translate-y-1/2 -translate-x-1/3 opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary-700 bg-opacity-60 rounded-full px-4 py-1.5 text-sm text-primary-200 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            Airbnb Superhost · Białystok
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t("hero_title")}
          </h1>

          <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-10">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apartments"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary-800 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              {t("hero_cta_primary")}
            </Link>
            <Link
              href="/apartments"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors shadow-lg"
            >
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-primary-900 bg-opacity-60 backdrop-blur-sm border-t border-primary-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8", label: t("stats_apartments") },
            { value: "1 200+", label: t("stats_reviews") },
            { value: "4.93", label: t("stats_rating") },
            { value: "10+", label: t("stats_years") },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-primary-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
