import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Hero from "@/components/Hero";
import CredentialsBanner from "@/components/CredentialsBanner";
import FeaturedGrid from "@/components/FeaturedGrid";
import BookingButton from "@/components/BookingButton";
import {
  ArrowRightIcon,
  ChatIcon,
  MapPinIcon,
  SofaIcon,
  TagIcon,
} from "@/components/Icons";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] mb-3 ${
          light ? "text-accent-300" : "text-accent-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl md:text-[2.6rem] font-semibold tracking-tight leading-tight ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? "text-sand-200/70" : "text-stone-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function WhySection() {
  const t = useTranslations("home");

  const reasons = [
    { Icon: MapPinIcon, title: t("why_location"), desc: t("why_location_desc") },
    { Icon: SofaIcon, title: t("why_comfort"), desc: t("why_comfort_desc") },
    { Icon: ChatIcon, title: t("why_support"), desc: t("why_support_desc") },
    { Icon: TagIcon, title: t("why_price"), desc: t("why_price_desc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading eyebrow={t("why_eyebrow")} title={t("why_title")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-sand-50 rounded-3xl p-7 ring-1 ring-stone-900/5 transition-all duration-300 hover:bg-primary-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/15"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-accent-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2 transition-colors duration-300 group-hover:text-white">
                {title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed transition-colors duration-300 group-hover:text-sand-200/75">
                {desc}
              </p>
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
    <section className="py-24 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <SectionHeading
            eyebrow={t("featured_eyebrow")}
            title={t("featured_title")}
            subtitle={t("featured_subtitle")}
          />
        </div>

        <FeaturedGrid />

        <div className="mt-12 text-center">
          <Link
            href="/apartments"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-full transition-all duration-300 shadow-md shadow-primary-900/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t("view_all")}
            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const t = useTranslations("home");

  return (
    <section className="relative overflow-hidden bg-primary-900">
      <div className="absolute inset-0">
        <Image
          src="/images/apartments/a3/1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/40 to-primary-900/80" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-5">
          {t("cta_title")}
        </h2>
        <p className="text-lg text-sand-200/80 mb-10 max-w-xl mx-auto">
          {t("cta_subtitle")}
        </p>
        <BookingButton
          objectCode={null}
          label={t("cta_button")}
          className="inline-flex items-center justify-center px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent-600/30 hover:shadow-xl hover:-translate-y-0.5"
        />
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
      <CtaSection />
    </>
  );
}
