"use client";

import { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import ApartmentModal from "./ApartmentModal";
import { apartments } from "@/data/apartments";
import { Apartment } from "@/types/apartment";

export default function FeaturedGrid() {
  const [selected, setSelected] = useState<Apartment | null>(null);
  const featured = apartments.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((apt) => (
          <ApartmentCard key={apt.id} apartment={apt} onSelect={setSelected} />
        ))}
      </div>
      <ApartmentModal apartment={selected} onClose={() => setSelected(null)} />
    </>
  );
}
