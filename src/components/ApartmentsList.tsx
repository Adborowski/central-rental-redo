"use client";

import { useState } from "react";
import ApartmentCard from "./ApartmentCard";
import ApartmentModal from "./ApartmentModal";
import { apartments } from "@/data/apartments";
import { Apartment } from "@/types/apartment";

export default function ApartmentsList() {
  const [selected, setSelected] = useState<Apartment | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apt) => (
          <ApartmentCard key={apt.id} apartment={apt} onSelect={setSelected} />
        ))}
      </div>
      <ApartmentModal apartment={selected} onClose={() => setSelected(null)} />
    </>
  );
}
