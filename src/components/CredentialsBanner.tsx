import Image from "next/image";
import { useTranslations } from "next-intl";
import bookingLogo from "../../public/booking-logo.svg";
import airbnbBelo from "../../public/airbnb-belo.svg";
import { StarIcon } from "./Icons";

export default function CredentialsBanner() {
  const t = useTranslations("credentials");

  return (
    <div className="bg-sand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-stretch gap-5">
          {/* Airbnb Superhost card */}
          <div className="flex-1 flex items-center gap-6 bg-white rounded-3xl ring-1 ring-stone-900/5 shadow-sm px-8 py-7">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#ff5a5f]/8 flex items-center justify-center">
              <Image src={airbnbBelo} alt="Airbnb" height={36} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold text-stone-900">
                  {t("superhost_label")}
                </p>
                <span className="flex items-center gap-0.5 text-accent-500 text-sm font-bold">
                  <StarIcon className="w-3.5 h-3.5" />
                  4.93
                </span>
              </div>
              <p className="text-sm text-stone-500 mt-1">{t("superhost_desc")}</p>
            </div>
          </div>

          {/* Booking.com award card */}
          <div className="flex-1 flex items-center gap-6 bg-[#003580] rounded-3xl shadow-sm px-8 py-7">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white flex items-center justify-center">
              <span className="text-[#003580] text-[1.7rem] font-black leading-none tracking-tight">
                9,4
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <Image
                src={bookingLogo}
                alt="Booking.com"
                height={16}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-blue-100 text-sm font-medium">{t("booking_award")}</p>
              <p className="text-blue-200/70 text-xs leading-snug">{t("booking_basis")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
