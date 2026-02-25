import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { absoluteUrl } from "@/lib/seo";
import { shows } from "@/lib/shows";

export const metadata: Metadata = {
  title: "Lighting Design",
  description: "Lighting design portfolio featuring regional theatre, opera, dance, and live entertainment work.",
  alternates: {
    canonical: "/lighting-design",
  },
  openGraph: {
    url: "/lighting-design",
    title: "Lighting Design — Francisco Hermosillo III",
    description: "Lighting design portfolio featuring regional theatre, opera, dance, and live entertainment work.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighting Design — Francisco Hermosillo III",
    description: "Lighting design portfolio featuring regional theatre, opera, dance, and live entertainment work.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
};

export default function LightingDesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3">Portfolio</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white">Lighting Design</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-800">
        {shows.map((show) => (
          <Link
            key={show.slug}
            href={`/lighting-design/${show.slug}`}
            className="group bg-[#121212] hover:bg-neutral-900 transition-colors"
          >
            <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden">
              {show.image ? (
                <Image
                  src={show.image}
                  alt={show.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-ui text-neutral-700 text-[0.62rem] uppercase tracking-[0.1em]">{show.year}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h2 className="font-heading text-[0.92rem] font-medium text-white group-hover:text-[#FFCC00] transition-colors mb-1">
                {show.title}
              </h2>
              <p className="text-[0.72rem] text-neutral-500">{show.role}</p>
              <p className="text-[0.7rem] text-neutral-600 mt-1">{show.venue} · {show.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
