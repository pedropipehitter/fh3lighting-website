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
        className="text-xs font-mono text-neutral-500 hover:text-[#FFCC00] transition-colors tracking-widest uppercase mb-10 inline-block"
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
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>
      )}

      <div className="border-t border-neutral-800 pt-10">
        <h1 className="text-4xl font-light text-white mb-2">{show.title}</h1>
        {show.note && (
          <p className="text-xs font-mono text-violet-400 mb-8">{show.note}</p>
        )}
        {!show.note && <div className="mb-8" />}
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Role</dt>
            <dd className="text-neutral-300">{show.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Venue</dt>
            <dd className="text-neutral-300">{show.venue}</dd>
            <dd className="text-neutral-600 text-xs mt-0.5">{show.location}</dd>
          </div>
          <div>
            <dt className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-1">Year</dt>
            <dd className="text-neutral-300">{show.year}</dd>
          </div>
        </dl>

        {show.collaborators && show.collaborators.length > 0 && (
          <div className="border-t border-neutral-900 pt-8">
            <p className="text-xs font-mono text-neutral-700 uppercase tracking-widest mb-4">Creative Team</p>
            <ul className="space-y-1">
              {show.collaborators.map((c) => (
                <li key={c.role} className="flex gap-3 text-xs">
                  <span className="text-neutral-700 w-40 shrink-0">{c.role}</span>
                  <span className="text-neutral-500">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
