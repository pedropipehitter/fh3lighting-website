import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/seo";
import { shows } from "@/lib/shows";
import GalleryGrid from "@/components/GalleryGrid";

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const show = shows.find((s) => s.slug === slug);
  if (!show) return {};
  const description = `${show.role} for ${show.title} at ${show.venue} in ${show.location} (${show.year}).`;
  const shareImage = show.gallery?.[0] ?? show.image;
  const imageUrl = shareImage ? absoluteUrl(shareImage) : absoluteUrl("/images/SNOTL129.jpg");

  return {
    title: show.title,
    description,
    alternates: {
      canonical: `/lighting-design/${show.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/lighting-design/${show.slug}`,
      title: `${show.title} — Francisco Hermosillo III`,
      description,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${show.title} — Francisco Hermosillo III`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows.find((s) => s.slug === slug);
  if (!show) notFound();

  const index = shows.indexOf(show);
  const prev = shows[index - 1];
  const next = shows[index + 1];
  const heroImage = show.gallery?.[0] ?? show.image;

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link
        href="/lighting-design"
        className="font-ui-label text-[0.62rem] text-neutral-500 hover:text-[#FFCC00] transition-colors mb-10 inline-block"
      >
        ← Lighting Design
      </Link>

      {heroImage && (
        <div className="relative aspect-[16/9] mb-12 overflow-hidden">
          {/* blurred fill */}
          <Image
            src={heroImage}
            alt=""
            aria-hidden
            fill
            className="object-cover blur-2xl scale-110 opacity-40"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
          {/* sharp image on top */}
          <Image
            src={heroImage}
            alt={show.title}
            fill
            className="object-contain relative z-10"
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      )}

      <div className="border-t border-neutral-800 pt-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-2">{show.title}</h1>
        {show.note && (
          <p className="font-ui text-[0.68rem] uppercase tracking-[0.1em] text-[#FFCC00] mb-8">{show.note}</p>
        )}
        {!show.note && <div className="mb-8" />}
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div>
            <dt className="font-ui-label text-[0.62rem] text-neutral-600 mb-1">Role</dt>
            <dd className="text-neutral-300 text-[0.86rem]">{show.role}</dd>
          </div>
          <div>
            <dt className="font-ui-label text-[0.62rem] text-neutral-600 mb-1">Venue</dt>
            <dd className="text-neutral-300 text-[0.86rem]">{show.venue}</dd>
            <dd className="text-neutral-600 text-xs mt-0.5">{show.location}</dd>
          </div>
          <div>
            <dt className="font-ui-label text-[0.62rem] text-neutral-600 mb-1">Year</dt>
            <dd className="text-neutral-300 text-[0.86rem]">{show.year}</dd>
          </div>
        </dl>

        {show.collaborators && show.collaborators.length > 0 && (
          <div className="border-t border-neutral-900 pt-8">
            <p className="font-ui-label text-[0.62rem] text-neutral-700 mb-4">Creative Team</p>
            <ul className="space-y-1">
              {show.collaborators.map((c) => (
                <li key={c.role} className="flex gap-3 text-xs">
                  <span className="font-ui text-neutral-700 w-40 shrink-0 uppercase tracking-[0.08em]">{c.role}</span>
                  <span className="text-neutral-500 text-[0.84rem]">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {show.gallery && show.gallery.length > 1 && (
          <div className="border-t border-neutral-900 pt-10 mt-10">
            <p className="font-ui-label text-[0.62rem] text-neutral-700 mb-4">Gallery</p>
            <GalleryGrid images={show.gallery.slice(1)} title={show.title} />
          </div>
        )}
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-neutral-800">
        {prev ? (
          <Link href={`/lighting-design/${prev.slug}`} className="font-ui text-[0.72rem] uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/lighting-design/${next.slug}`} className="font-ui text-[0.72rem] uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
