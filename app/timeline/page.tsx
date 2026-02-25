import type { Metadata } from "next";
import Link from "next/link";
import { shows } from "@/lib/shows";
import { programmingCredits } from "@/lib/programming";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Chronological view of Francisco Hermosillo III's lighting design, programming, and production credits.",
  alternates: {
    canonical: "/timeline",
  },
  openGraph: {
    url: "/timeline",
    title: "Timeline — Francisco Hermosillo III",
    description: "Chronological view of lighting design, programming, and production credits.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
};

interface Entry {
  title: string;
  role: string;
  venue: string;
  year: number;
  href?: string;
  category: "design" | "programming";
}

function buildEntries(): Entry[] {
  const design: Entry[] = shows.map((s) => ({
    title: s.title,
    role: s.role,
    venue: s.venue,
    year: s.year,
    href: `/lighting-design/${s.slug}`,
    category: "design",
  }));

  const programming: Entry[] = programmingCredits
    .filter((c) => typeof c.year === "number")
    .map((c) => ({
      title: c.production,
      role: c.sub ? "Programmer (sub)" : "Programmer",
      venue: c.venue,
      year: c.year as number,
      category: "programming",
    }));

  return [...design, ...programming];
}

function groupByYear(entries: Entry[]): [number, Entry[]][] {
  const map = new Map<number, Entry[]>();
  for (const entry of entries) {
    const group = map.get(entry.year) ?? [];
    group.push(entry);
    map.set(entry.year, group);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

const categoryDot: Record<Entry["category"], string> = {
  design: "text-[#FFCC00]",
  programming: "text-neutral-500",
};

export default function TimelinePage() {
  const groups = groupByYear(buildEntries());

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3">Credits</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Timeline</h1>
        <div className="flex items-center gap-6 mt-6">
          <span className="flex items-center gap-2 text-[0.68rem] font-ui text-neutral-500">
            <span className="text-[#FFCC00]">●</span> Design
          </span>
          <span className="flex items-center gap-2 text-[0.68rem] font-ui text-neutral-500">
            <span className="text-neutral-500">●</span> Programming
          </span>
        </div>
      </header>

      <div className="space-y-12">
        {groups.map(([year, entries]) => (
          <div key={year} className="grid grid-cols-[4rem_1fr] gap-x-8 items-start">
            <div className="pt-0.5">
              <span className="font-heading text-[0.92rem] font-semibold text-white">{year}</span>
            </div>

            <div className="border-l border-neutral-800 pl-8 space-y-4">
              {entries.map((entry, i) => (
                <div key={i} className="relative">
                  <span className={`absolute -left-[2.15rem] top-[0.35rem] text-[0.5rem] ${categoryDot[entry.category]}`}>
                    ●
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    {entry.href ? (
                      <Link
                        href={entry.href}
                        className="font-heading text-[0.92rem] font-medium text-white hover:text-[#FFCC00] transition-colors leading-snug"
                      >
                        {entry.title}
                      </Link>
                    ) : (
                      <span className="font-heading text-[0.92rem] font-medium text-white leading-snug">
                        {entry.title}
                      </span>
                    )}
                    <span className="text-[0.7rem] font-ui text-neutral-500 sm:ml-auto shrink-0">{entry.role}</span>
                  </div>
                  <p className="text-[0.7rem] text-neutral-700 mt-0.5">{entry.venue}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
