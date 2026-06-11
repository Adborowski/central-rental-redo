import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
          <p className="text-primary-200">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-lg mb-5">{t("info_title")}</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-0.5">👤</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t("info_owner")}</div>
                    <div className="text-xs text-gray-500">Właściciel / Owner</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-0.5">📞</span>
                  <div>
                    <a
                      href="tel:+48502185070"
                      className="text-sm font-semibold text-gray-900 hover:text-primary-700 transition-colors"
                    >
                      {t("info_phone")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-0.5">✉️</span>
                  <div>
                    <a
                      href={`mailto:${t("info_email")}`}
                      className="text-sm font-semibold text-gray-900 hover:text-primary-700 transition-colors"
                    >
                      {t("info_email")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-600 mt-0.5">📍</span>
                  <div className="text-sm font-semibold text-gray-900">{t("info_address")}</div>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h3 className="font-semibold text-primary-800 mb-4">{t("social_title")}</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <span className="text-lg">🏠</span>
                  Airbnb Superhost Profile
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <span className="text-lg">👥</span>
                  Facebook
                </a>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <span className="text-lg">🌐</span>
                  Booking.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
