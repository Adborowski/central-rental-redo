"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Apartment, Locale } from "@/types/apartment";
import { Link } from "@/i18n/navigation";

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Props {
  apartments: Apartment[];
  locale: Locale;
  detailsLabel: string;
}

export default function MapView({ apartments, locale, detailsLabel }: Props) {
  useEffect(() => {}, []);

  const center: [number, number] = [53.1325, 23.1688];

  return (
    <MapContainer
      center={center}
      zoom={15}
      className="w-full h-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {apartments.map((apt) => (
        <Marker key={apt.id} position={apt.coordinates} icon={markerIcon}>
          <Popup>
            <div className="min-w-40">
              <div className="font-bold text-gray-900 mb-1">{apt.name[locale]}</div>
              <div className="text-xs text-gray-500 mb-2">{apt.address}</div>
              <div className="text-xs text-gray-600 mb-3">
                ★ {apt.rating} · {apt.area} m² · max {apt.maxGuests} os.
              </div>
              <Link
                href="/apartments"
                className="block text-center text-xs bg-primary-700 text-white px-3 py-1.5 rounded-lg hover:bg-primary-800 transition-colors"
              >
                {detailsLabel}
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
