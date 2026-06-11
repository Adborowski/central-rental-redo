export type Locale = "pl" | "en" | "ru";

export type LocaleString = {
  pl: string;
  en: string;
  ru: string;
};

export type ApartmentType = "studio" | "apartment";

export interface Apartment {
  id: string;
  slug: string;
  name: LocaleString;
  address: string;
  area: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  floor: number;
  type: ApartmentType;
  rating: number;
  reviewCount: number;
  description: LocaleString;
  amenities: string[];
  coordinates: [number, number];
  photoCount: number;
  bookingRating: number;
  objectCode: number; // iDoSell object ID for the booking widget
}
