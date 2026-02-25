import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import { shows } from "@/lib/shows";
import ShowGrid from "@/components/ShowGrid";

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

      <ShowGrid shows={shows} />
    </div>
  );
}
