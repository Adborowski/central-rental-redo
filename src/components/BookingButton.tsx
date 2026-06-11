"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";

interface Props {
  objectCode: number | null; // null = general (all apartments)
  label: string;
  className?: string;
}

export default function BookingButton({ objectCode, label, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <BookingModal objectCode={objectCode} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
