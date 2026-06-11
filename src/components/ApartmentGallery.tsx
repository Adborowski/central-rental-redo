"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

interface Props {
  apartmentId: string;
  name: string;
  photoCount: number;
}

export default function ApartmentGallery({ apartmentId, name, photoCount }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);
  const [portrait, setPortrait] = useState<Record<number, boolean>>({});

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const photos = Array.from({ length: photoCount }, (_, i) => i + 1);

  const dotWindow = 7;
  const windowStart = Math.min(
    Math.max(current - Math.floor(dotWindow / 2), 0),
    Math.max(photoCount - dotWindow, 0)
  );
  const visibleDots = photos.slice(windowStart, windowStart + dotWindow);

  return (
    <div className="relative group/gallery">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((i) => (
            <div
              key={i}
              className={`relative flex-none w-full h-72 md:h-96 ${
                portrait[i] ? "bg-stone-100" : "bg-stone-100"
              }`}
            >
              <Image
                src={`/images/apartments/${apartmentId}/${i}.jpg`}
                alt={`${name} – photo ${i}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className={portrait[i] ? "object-contain" : "object-cover"}
                priority={i === 1}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalHeight > img.naturalWidth) {
                    setPortrait((prev) => ({ ...prev, [i]: true }));
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scrim for controls */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-950/50 to-transparent pointer-events-none" />

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-stone-800 transition-all hover:scale-105 opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100 max-md:opacity-100"
        aria-label="Previous photo"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-stone-800 transition-all hover:scale-105 opacity-0 group-hover/gallery:opacity-100 focus-visible:opacity-100 max-md:opacity-100"
        aria-label="Next photo"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>

      {/* Dot indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {visibleDots.map((p) => {
          const i = p - 1;
          return (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Photo ${p}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 right-4 bg-stone-950/55 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full tabular-nums">
        {current + 1} / {photoCount}
      </div>
    </div>
  );
}
