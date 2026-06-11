import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Central Rental – Apartamenty Białystok",
  description:
    "Komfortowe apartamenty na wynajem krótkoterminowy w centrum Białegostoku. Airbnb Superhost.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children as React.ReactElement;
}
