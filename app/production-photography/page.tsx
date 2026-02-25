import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { absoluteUrl } from "@/lib/seo";
import { photoProjects } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Production Photography",
  description: "Production photography portfolio with theatre and live performance image galleries.",
  alternates: {
    canonical: "/production-photography",
  },
  openGraph: {
    url: "/production-photography",
    title: "Production Photography — Francisco Hermosillo III",
    description: "Production photography portfolio with theatre and live performance image galleries.",
    images: [absoluteUrl("/images/121324-LNK-NUTCRACKER-FH3-12.JPG")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Photography — Francisco Hermosillo III",
    description: "Production photography portfolio with theatre and live performance image galleries.",
    images: [absoluteUrl("/images/121324-LNK-NUTCRACKER-FH3-12.JPG")],
  },
};

export default function ProductionPhotographyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="text-xs font-mono tracking-[0.3em] text-[#FFCC00] uppercase mb-3">Portfolio</p>
        <h1 className="text-4xl font-light text-white mb-4">Production Photography</h1>
        <p className="text-neutral-500 text-sm">
          Work published in LA Times, LiveDesign Magazine, and Thornton Wilder Journal.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
        {photoProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/production-photography/${project.slug}`}
            className="group bg-[#121212] hover:bg-neutral-900 transition-colors"
          >
            <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-700 font-mono text-xs">{project.company}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h2 className="text-sm font-medium text-white group-hover:text-[#FFCC00] transition-colors mb-1">
                {project.title}
              </h2>
              <p className="text-xs text-neutral-500">{project.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
