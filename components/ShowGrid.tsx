"use client";

import { useState, useMemo, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Show } from "@/lib/shows";

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="appearance-none bg-neutral-900 border border-neutral-700 text-white text-[0.68rem] font-ui uppercase tracking-[0.1em] px-3 py-2 pr-7 focus:outline-none focus:border-[#FFCC00] transition-colors cursor-pointer"
      >
        <option value="">{label}: All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 text-[0.6rem]">
        ▾
      </span>
    </div>
  );
}

export default function ShowGrid({ shows }: { shows: Show[] }) {
  const [year, setYear] = useState("");
  const [role, setRole] = useState("");
  const [isPending, startTransition] = useTransition();

  const years = useMemo(
    () => [...new Set(shows.map((s) => String(s.year)))].sort((a, b) => Number(b) - Number(a)),
    [shows]
  );

  const roles = [
    "Lighting Designer",
    "Associate Lighting Designer",
    "Assistant Lighting Designer",
  ];

  const filtered = useMemo(
    () =>
      shows.filter(
        (s) =>
          (!year || String(s.year) === year) &&
          (!role || s.role === role)
      ),
    [shows, year, role]
  );

  const isFiltered = year || role;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <Select label="Year" value={year} onChange={(v) => startTransition(() => setYear(v))} options={years} />
        <Select label="Role" value={role} onChange={(v) => startTransition(() => setRole(v))} options={roles} />
        {isFiltered && (
          <button
            onClick={() => { setYear(""); setRole(""); }}
            className="text-[0.65rem] font-ui text-neutral-500 hover:text-[#FFCC00] uppercase tracking-[0.1em] px-2 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-600 text-[0.78rem]">No shows match the selected filters.</p>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-800 ${isPending ? "opacity-60" : ""}`}>
          {filtered.map((show) => (
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
                    <span className="font-ui text-neutral-700 text-[0.62rem] uppercase tracking-[0.1em]">
                      {show.year}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h2 className="font-heading text-[0.92rem] font-medium text-white group-hover:text-[#FFCC00] transition-colors mb-1">
                  {show.title}
                </h2>
                <p className="text-[0.72rem] text-neutral-500">{show.role}</p>
                <p className="text-[0.7rem] text-neutral-600 mt-1">
                  {show.venue} · {show.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
