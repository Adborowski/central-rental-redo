import { useTranslations } from "next-intl";
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

      <div className="max-w-lg mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl ring-1 ring-stone-900/5 shadow-sm p-8 md:p-10">
          <h2 className="font-semibold text-stone-900 text-xl mb-8">{t("info_title")}</h2>
          <ul className="space-y-6">
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
      </div>
    </div>
  );
}
