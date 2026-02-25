import Link from "next/link";
import { notFound } from "next/navigation";
import { photoProjects } from "@/lib/photography";

export function generateStaticParams() {
  return photoProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = photoProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Francisco Hermosillo III` };
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
        className="text-xs font-mono text-neutral-500 hover:text-[#FFCC00] transition-colors tracking-widest uppercase mb-10 inline-block"
      >
        ← Production Photography
      </Link>

      <div className="border-t border-neutral-800 pt-10">
        <h1 className="text-4xl font-light text-white mb-2">{project.title}</h1>
        <p className="text-neutral-500 mb-10">{project.company}</p>

        {/* Placeholder gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-neutral-800 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-neutral-900 flex items-center justify-center">
              <span className="text-neutral-700 font-mono text-xs">{i + 1}</span>
            </div>
          ))}
        </div>

        {project.credits && (
          <div className="border-t border-neutral-800 pt-8">
            <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-4">Credits</p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {project.credits.director && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Director</dt>
                  <dd className="text-neutral-300">{project.credits.director}</dd>
                </div>
              )}
              {project.credits.scenic && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Scenic Design</dt>
                  <dd className="text-neutral-300">{project.credits.scenic}</dd>
                </div>
              )}
              {project.credits.costume && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Costume Design</dt>
                  <dd className="text-neutral-300">{project.credits.costume}</dd>
                </div>
              )}
              {project.credits.ld && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Lighting Design</dt>
                  <dd className="text-neutral-300">{project.credits.ld}</dd>
                </div>
              )}
              {project.credits.sound && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Sound Design</dt>
                  <dd className="text-neutral-300">{project.credits.sound}</dd>
                </div>
              )}
              {project.credits.sm && (
                <div>
                  <dt className="text-neutral-600 text-xs mb-1">Stage Manager</dt>
                  <dd className="text-neutral-300">{project.credits.sm}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-neutral-800">
        {prev ? (
          <Link href={`/production-photography/${prev.slug}`} className="text-xs text-neutral-500 hover:text-white transition-colors">
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/production-photography/${next.slug}`} className="text-xs text-neutral-500 hover:text-white transition-colors">
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
