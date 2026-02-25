import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl } from "@/lib/seo";
import { photoProjects } from "@/lib/photography";
import GalleryGrid from "@/components/GalleryGrid";

export function generateStaticParams() {
  return photoProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = photoProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const description = `${project.title} production photography for ${project.company}.`;
  const imageUrl = project.image ? absoluteUrl(project.image) : absoluteUrl("/images/SNOTL129.jpg");

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `/production-photography/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/production-photography/${project.slug}`,
      title: `${project.title} — Francisco Hermosillo III`,
      description,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Francisco Hermosillo III`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PhotoProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = photoProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = photoProjects.indexOf(project);
  const prev = photoProjects[index - 1];
  const next = photoProjects[index + 1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <Link
        href="/production-photography"
        className="font-ui-label text-[0.62rem] text-neutral-500 hover:text-[#FFCC00] transition-colors mb-10 inline-block"
      >
        ← Production Photography
      </Link>

      <div className="border-t border-neutral-800 pt-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-2">{project.title}</h1>
        <p className="text-neutral-500 text-[0.82rem] mb-10">{project.company}</p>

        {project.gallery && project.gallery.length > 0 ? (
          <GalleryGrid images={project.gallery} title={project.title} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-800 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-neutral-900 flex items-center justify-center">
                <span className="font-ui text-neutral-700 text-[0.62rem] uppercase tracking-[0.1em]">{i + 1}</span>
              </div>
            ))}
          </div>
        )}

        {project.credits && (
          <div className="border-t border-neutral-800 pt-8">
            <p className="font-ui-label text-[0.62rem] text-neutral-600 mb-4">Credits</p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {project.credits.director && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Director</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.director}</dd>
                </div>
              )}
              {project.credits.scenic && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Scenic Design</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.scenic}</dd>
                </div>
              )}
              {project.credits.costume && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Costume Design</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.costume}</dd>
                </div>
              )}
              {project.credits.ld && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Lighting Design</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.ld}</dd>
                </div>
              )}
              {project.credits.sound && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Sound Design</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.sound}</dd>
                </div>
              )}
              {project.credits.sm && (
                <div>
                  <dt className="font-ui text-neutral-600 text-[0.62rem] uppercase tracking-[0.1em] mb-1">Stage Manager</dt>
                  <dd className="text-neutral-300 text-[0.82rem]">{project.credits.sm}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-neutral-800">
        {prev ? (
          <Link href={`/production-photography/${prev.slug}`} className="font-ui text-[0.62rem] uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/production-photography/${next.slug}`} className="font-ui text-[0.62rem] uppercase tracking-[0.1em] text-neutral-500 hover:text-white transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
