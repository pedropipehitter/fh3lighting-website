import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import { programmingCredits } from "@/lib/programming";

export const metadata: Metadata = {
  title: "Lighting Programming",
  description: "Lighting programming credits across theatre, touring, corporate, and live event productions.",
  alternates: {
    canonical: "/lighting-programming",
  },
  openGraph: {
    url: "/lighting-programming",
    title: "Lighting Programming — Francisco Hermosillo III",
    description: "Lighting programming credits across theatre, touring, corporate, and live event productions.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighting Programming — Francisco Hermosillo III",
    description: "Lighting programming credits across theatre, touring, corporate, and live event productions.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
};

export default function LightingProgrammingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-6">Lighting Programming</h1>
        <p className="text-neutral-300 max-w-2xl leading-relaxed text-[0.92rem]">
          Experienced with ETC Eos family (APEX, GIO, TI, Ion XE), MA2, and beyond.
          Comfortable in fast-paced, high-pressure environments.
        </p>
      </header>

      <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-6">Credits</p>

      <div className="overflow-x-auto mb-16">
        <table className="w-full text-[0.9rem]">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="font-ui-label text-left text-[0.62rem] text-neutral-400 pb-4 pr-8">Production</th>
              <th className="font-ui-label text-left text-[0.62rem] text-neutral-400 pb-4 pr-8">Designer</th>
              <th className="font-ui-label text-left text-[0.62rem] text-neutral-400 pb-4 pr-8">Venue</th>
              <th className="font-ui-label text-left text-[0.62rem] text-neutral-400 pb-4 pr-8">Console</th>
              <th className="font-ui-label text-left text-[0.62rem] text-neutral-400 pb-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {programmingCredits.map((credit, i) => (
              <tr key={i} className="border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                <td className="font-heading py-4 pr-8 text-white text-[0.92rem] font-medium">
                  {credit.production}{credit.sub && <sup className="text-[#FFCC00] text-sm ml-0.5">*</sup>}
                </td>
                <td className="py-4 pr-8 text-neutral-300 text-[0.82rem]">{credit.designer}</td>
                <td className="py-4 pr-8 text-neutral-300 text-[0.82rem]">{credit.venue}</td>
                <td className="font-ui py-4 pr-8 text-neutral-400 text-xs uppercase tracking-[0.1em]">{credit.console}</td>
                <td className="py-4 text-neutral-400 text-[0.8rem]">{credit.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="font-ui text-xs uppercase tracking-[0.1em] text-neutral-400 mt-3">
          <sup className="text-[#FFCC00] text-sm">*</sup> Substitute programmer
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-16">
        <div className="border border-neutral-800 p-8 bg-neutral-900/30">
          <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-4">Confidential Work</p>
          <p className="text-neutral-300 leading-relaxed text-[0.82rem]">
            I work regularly on high-profile private and corporate events — major sporting events, exclusive galas,
            and private performances. These projects require strict confidentiality; I&apos;m well-practiced at operating
            with discretion under high-pressure, high-visibility conditions.
          </p>
        </div>
        <div className="border border-neutral-800 p-8 bg-neutral-900/30">
          <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-4">Alley Theatre — 2023–2024</p>
          <p className="text-neutral-300 leading-relaxed text-[0.82rem]">
            As Assistant Lighting Director at the Alley Theatre, mentoring staff electricians in ETC Eos programming
            was part of my regular duties — training them in console operation as part of their rotating show responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}
