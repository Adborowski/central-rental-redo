import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRightIcon, StarIcon } from "./Icons";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden bg-primary-900 text-white">
      {/* Photo backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/apartments/a7/1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/75 to-primary-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-primary-900/30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm text-sand-100 mb-8 animate-fade-up">
            <span className="flex items-center gap-1 text-accent-300">
              <StarIcon className="w-3.5 h-3.5" />
              <span className="font-semibold text-white">4.93</span>
            </span>
            <span className="w-px h-3.5 bg-white/25" />
            Airbnb Superhost · Białystok
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold leading-[1.08] tracking-tight mb-6 animate-fade-up delay-75">
            {t("hero_title")}
          </h1>

          <p className="text-lg md:text-xl text-sand-100/85 leading-relaxed max-w-xl mb-10 animate-fade-up delay-150">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 animate-fade-up delay-225">
            <Link
              href="/apartments"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent-600/25 hover:shadow-xl hover:shadow-accent-600/30 hover:-translate-y-0.5"
            >
              {t("hero_cta_primary")}
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/25 bg-white/5 hover:bg-white/15 backdrop-blur-md text-white font-semibold rounded-full transition-colors duration-300"
            >
              {t("hero_cta_secondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-primary-900/55 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7">
          {[
            { value: "8", label: t("stats_apartments") },
            { value: "1 200+", label: t("stats_reviews") },
            { value: "4.93", label: t("stats_rating") },
            { value: "10+", label: t("stats_years") },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-sand-200/70 mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
