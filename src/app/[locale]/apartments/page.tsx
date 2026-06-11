import { useTranslations } from "next-intl";
import ApartmentsList from "@/components/ApartmentsList";
import PageHeader from "@/components/PageHeader";

export default function ApartmentsPage() {
  const t = useTranslations("apartments");
  const tNav = useTranslations("nav");

  return (
    <div className="min-h-screen bg-sand-50">
      <PageHeader
        eyebrow={tNav("apartments")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <ApartmentsList />
      </div>
    </div>
  );
}
