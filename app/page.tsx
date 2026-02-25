import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHeroActions from "@/components/HomeHeroActions";
import PressStrip from "@/components/PressStrip";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const sections = [
  {
    href: "/lighting-design",
    title: "Lighting Design",
    description: "16 productions — regional theatre, opera, and dance across the country.",
  },
  {
    href: "/lighting-programming",
    title: "Lighting Programming",
    description: "Programming credits across Off-Broadway, large-scale live events, and regional/summerstock productions.",
  },
  {
    href: "/production-photography",
    title: "Production Photography",
    description: "15 projects — work published in LA Times and LiveDesign Magazine.",
  },
  {
    href: "/about",
    title: "About",
    description: "MFA Lighting Design, UNL. Freelance designer and photographer, NYC.",
  },
];

const featuredWork = [
  {
    href: "/lighting-design/silent-night-of-the-lambs",
    image: "/images/SNOTL129.jpg",
    category: "Lighting Design",
    title: "Silent Night of the Lambs",
    detail: "Bluebarn Theatre · 2024",
  },
  {
    href: "/production-photography/nutcracker",
    image: "/images/121324-LNK-NUTCRACKER-FH3-12.JPG",
    category: "Production Photography",
    title: "Nutcracker",
    detail: "Midwest Ballet Company",
  },
  {
    href: "/lighting-programming",
    image: "/images/080124-UCLA-MTSI-SOMETHING-ROTTEN-FH3-10.JPG",
    category: "Lighting Programming",
    title: "Programming Credits",
    detail: "Off-Broadway, large-scale live events, and regional/summerstock productions",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[90vh] border-b border-neutral-800 overflow-hidden">
        <Image
          src="/images/SNOTL129.jpg"
          alt="Theatrical production lighting"
          fill
          priority
          quality={82}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/60 via-[#1a1400]/60 to-[#121212]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-ui-label text-[0.62rem] sm:text-xs text-[#FFCC00] mb-6">
            Lighting Designer · Programmer · Production Photographer
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            Francisco Hermosillo III
          </h1>
          <p className="text-neutral-300 text-[0.95rem] sm:text-[1.05rem] leading-relaxed mb-10">
            Freelance lighting designer, programmer, and production photographer based in NYC.
            Designing for theatre, opera, dance, and live entertainment.
          </p>
          <HomeHeroActions />
        </div>
      </section>

      {/* Featured work */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3">Featured Work</p>
            <h2 className="font-heading text-2xl sm:text-3xl text-white">Current Highlights</h2>
          </div>
          <Link
            href="/lighting-design"
            className="font-ui text-[0.64rem] uppercase tracking-[0.12em] text-neutral-400 hover:text-white transition-colors"
          >
            View Full Portfolio →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredWork.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden border border-neutral-800 bg-neutral-900 min-h-[22rem]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-2">{item.category}</p>
                <h3 className="font-heading text-xl text-white mb-1">{item.title}</h3>
                <p className="text-[0.78rem] text-neutral-300">{item.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PressStrip />

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-800">
          {sections.map(({ href, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group bg-[#121212] p-10 hover:bg-neutral-900 transition-colors"
            >
              <h2 className="font-heading text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-[#FFCC00] transition-colors">
                {title}
              </h2>
              <p className="text-[0.8rem] text-neutral-500 leading-relaxed">{description}</p>
              <span className="font-ui-label inline-block mt-6 text-[0.62rem] text-[#FFCC00] group-hover:text-[#FFCC00] transition-colors">
                EXPLORE →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
