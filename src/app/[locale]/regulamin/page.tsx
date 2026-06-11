import { useTranslations } from "next-intl";

export default function RegulaminPage() {
  const t = useTranslations("footer");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold">{t("rules")}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ height: "80vh" }}>
          <embed
            src="/docs/regulamin.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href="/docs/regulamin.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Pobierz PDF
          </a>
        </div>
      </div>
    </div>
  );
}
