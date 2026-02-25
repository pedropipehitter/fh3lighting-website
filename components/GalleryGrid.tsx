"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export default function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const restoreFocusRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(() => setActive((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  useEffect(() => {
    if (active === null) return;
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const activeEl = document.activeElement as HTMLElement | null;

        if (e.shiftKey && activeEl === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      restoreFocusRef.current?.focus();
    };
  }, [active, close, prev, next]);

  return (
    <>
      <p className="font-ui text-[0.62rem] uppercase tracking-[0.1em] text-neutral-500 mb-2">Click any photo to expand</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-800 mb-12">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              restoreFocusRef.current = e.currentTarget;
              setActive(i);
            }}
            className="relative aspect-[4/3] overflow-hidden bg-neutral-900 group cursor-zoom-in"
            aria-label={`Open photo ${i + 1} of ${images.length} from ${title}`}
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
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery lightbox`}
          ref={dialogRef}
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
            type="button"
            onClick={close}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close"
            ref={closeButtonRef}
          >
            ✕
          </button>

          {/* Prev */}
          {active > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors text-3xl leading-none"
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          {/* Next */}
          {active < images.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors text-3xl leading-none"
              aria-label="Next photo"
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="font-ui absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.62rem] uppercase tracking-[0.1em] text-neutral-500">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
