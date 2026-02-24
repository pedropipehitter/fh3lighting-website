import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows.find((s) => s.slug === slug);
  if (!show) return {};
  return { title: `${show.title} — Francisco Hermosillo III` };
}

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = shows.find((s) => s.slug === slug);
  if (!show) notFound();

  const index = shows.indexOf(show);
  const prev = shows[index - 1];
  const next = shows[index + 1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link
        href="/lighting-design"
        className="text-xs font-mono text-neutral-500 hover:text-[#1e90ff] transition-colors tracking-widest uppercase mb-10 inline-block"
      >
        ← Lighting Design
      </Link>

      {show.image && (
        <div className="relative aspect-[16/9] mb-12 bg-neutral-900">
          <Image
            src={show.image}
            alt={show.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      )}

      <div className="border-t border-neutral-800 pt-10">
        <h1 className="text-4xl font-light text-white mb-8">{show.title}</h1>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Role</dt>
            <dd className="text-neutral-300">{show.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Venue</dt>
            <dd className="text-neutral-300">{show.venue}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Year</dt>
            <dd className="text-neutral-300">{show.year}</dd>
          </div>
        </dl>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-neutral-800">
        {prev ? (
          <Link href={`/lighting-design/${prev.slug}`} className="text-xs text-neutral-500 hover:text-white transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/lighting-design/${next.slug}`} className="text-xs text-neutral-500 hover:text-white transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
