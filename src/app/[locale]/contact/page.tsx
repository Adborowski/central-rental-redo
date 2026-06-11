import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { MailIcon, MapPinIcon, PhoneIcon, UserIcon } from "@/components/Icons";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");

  const infoItems = [
    {
      Icon: UserIcon,
      primary: t("info_owner"),
      secondary: "Właściciel / Owner",
    },
    {
      Icon: PhoneIcon,
      primary: t("info_phone"),
      href: "tel:+48502185070",
    },
    {
      Icon: MailIcon,
      primary: t("info_email"),
      href: `mailto:${t("info_email")}`,
    },
    {
      Icon: MapPinIcon,
      primary: t("info_address"),
    },
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      <PageHeader eyebrow={tNav("contact")} title={t("title")} subtitle={t("subtitle")} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl ring-1 ring-stone-900/5 shadow-sm p-8 md:p-10">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-3xl ring-1 ring-stone-900/5 shadow-sm p-8">
              <h2 className="font-display font-semibold text-stone-900 text-xl mb-6">
                {t("info_title")}
              </h2>
              <ul className="space-y-5">
                {infoItems.map(({ Icon, primary, secondary, href }) => (
                  <li key={primary} className="flex items-center gap-4">
                    <span className="w-11 h-11 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-semibold text-stone-900 hover:text-primary-700 transition-colors"
                        >
                          {primary}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-stone-900">{primary}</div>
                      )}
                      {secondary && (
                        <div className="text-xs text-stone-400 mt-0.5">{secondary}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-900 rounded-3xl p-8 text-white">
              <h3 className="font-display font-semibold text-lg mb-5">
                {t("social_title")}
              </h3>
              <div className="flex flex-col gap-1">
                {[
                  { href: "https://www.airbnb.com", label: "Airbnb Superhost Profile" },
                  { href: "https://www.facebook.com", label: "Facebook" },
                  { href: "https://www.booking.com", label: "Booking.com" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-2.5 border-b border-white/10 last:border-0 text-sm text-sand-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                    <svg
                      className="w-4 h-4 text-accent-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
