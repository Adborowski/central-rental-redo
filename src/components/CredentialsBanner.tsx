import Image from "next/image";
import { useTranslations } from "next-intl";
import bookingLogo from "../../public/booking-logo.svg";
import airbnbBelo from "../../public/airbnb-belo.svg";

export default function CredentialsBanner() {
  const t = useTranslations("credentials");

  return (
    <div className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-stretch gap-5">

          {/* Airbnb Superhost card */}
          <div className="flex-1 flex items-center gap-5 bg-white rounded-2xl shadow-sm border border-gray-100 px-7 py-6">
            <Image src={airbnbBelo} alt="Airbnb" height={44} className="flex-shrink-0" />
            <div>
              <p className="text-xl font-bold text-gray-900">{t("superhost_label")}</p>
              <p className="text-sm text-gray-500 mt-0.5">{t("superhost_desc")}</p>
            </div>
          </div>

          {/* Booking.com award card */}
          <div className="flex-1 flex items-center gap-5 bg-[#003580] rounded-2xl shadow-sm px-7 py-6">
            {/* Score */}
            <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-inner">
              <span className="text-[#003580] text-3xl font-black leading-none">9,4</span>
            </div>
            {/* Text */}
            <div className="flex flex-col gap-2">
              <Image
                src={bookingLogo}
                alt="Booking.com"
                height={18}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-blue-200 text-sm font-medium">{t("booking_award")}</p>
              <p className="text-blue-300 text-xs leading-snug">{t("booking_basis")}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
