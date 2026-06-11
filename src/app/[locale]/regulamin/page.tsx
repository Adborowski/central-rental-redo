import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import { DownloadIcon } from "@/components/Icons";

export default function RegulaminPage() {
  const t = useTranslations("footer");

  return (
    <div className="min-h-screen bg-sand-50">
      <PageHeader title={t("rules")} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="bg-white rounded-3xl ring-1 ring-stone-900/5 shadow-sm overflow-hidden"
          style={{ height: "80vh" }}
        >
          <embed
            src="/docs/regulamin.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        <div className="mt-6 text-center">
          <a
            href="/docs/regulamin.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 bg-white text-sm text-stone-700 font-semibold hover:border-primary-700 hover:text-primary-800 transition-colors"
          >
            <DownloadIcon className="w-4 h-4" />
            Pobierz PDF
          </a>
        </div>
      </div>
    </div>
  );
}
