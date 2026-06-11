import { useTranslations } from "next-intl";
import ApartmentsList from "@/components/ApartmentsList";

export default function ApartmentsPage() {
  const t = useTranslations("apartments");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
          <p className="text-primary-200">{t("subtitle")}</p>
        </div>
      </div>

      {/* Listing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <ApartmentsList />
      </div>
    </div>
  );
}
