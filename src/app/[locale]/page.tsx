import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Hero from "@/components/Hero";
import CredentialsBanner from "@/components/CredentialsBanner";
import FeaturedGrid from "@/components/FeaturedGrid";

function WhySection() {
  const t = useTranslations("home");

  const reasons = [
    { icon: "📍", title: t("why_location"), desc: t("why_location_desc") },
    { icon: "🛋️", title: t("why_comfort"), desc: t("why_comfort_desc") },
    { icon: "💬", title: t("why_support"), desc: t("why_support_desc") },
    { icon: "💰", title: t("why_price"), desc: t("why_price_desc") },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {t("why_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const t = useTranslations("home");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{t("featured_title")}</h2>
            <p className="text-gray-500 mt-2">{t("featured_subtitle")}</p>
          </div>
          <Link
            href="/apartments"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors"
          >
            {t("view_all")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <FeaturedGrid />

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/apartments"
            className="inline-flex items-center gap-2 text-sm text-primary-700 font-semibold"
          >
            {t("view_all")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsBanner />
      <FeaturedSection />
      <WhySection />
    </>
  );
}
