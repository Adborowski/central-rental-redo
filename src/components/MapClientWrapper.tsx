"use client";

import dynamic from "next/dynamic";
import { Apartment, Locale } from "@/types/apartment";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-2xl">
      <div className="text-gray-400 text-sm">Loading map…</div>
    </div>
  ),
});

interface Props {
  apartments: Apartment[];
  locale: Locale;
  detailsLabel: string;
}

export default function MapClientWrapper(props: Props) {
  return <MapView {...props} />;
}
