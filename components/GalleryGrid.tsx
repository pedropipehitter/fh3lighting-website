"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(() => setActive((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-800 mb-12">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative aspect-[4/3] overflow-hidden bg-neutral-900 group cursor-zoom-in"
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${title} — photo ${active + 1}`}
              fill
              className="object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {active > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors text-3xl leading-none"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Next */}
          {active < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors text-3xl leading-none"
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-neutral-500">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
