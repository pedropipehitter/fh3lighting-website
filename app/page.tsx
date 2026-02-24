import Link from "next/link";

const sections = [
  {
    href: "/lighting-design",
    title: "Lighting Design",
    description: "16 productions — regional theatre, opera, and dance across the country.",
  },
  {
    href: "/lighting-programming",
    title: "Lighting Programming",
    description: "Programming credits on Broadway-adjacent and major-venue productions.",
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[90vh] border-b border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase mb-6">
            Lighting Designer · Programmer · Production Photographer
          </p>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-white mb-6">
            Francisco Hermosillo III
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            Freelance lighting designer, programmer, and production photographer based in NYC.
            Designing for theatre, opera, dance, and live entertainment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/lighting-design"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm tracking-wide transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm tracking-wide transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-800">
          {sections.map(({ href, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group bg-[#0a0a0a] p-10 hover:bg-neutral-900 transition-colors"
            >
              <h2 className="text-xl font-light text-white mb-3 group-hover:text-violet-400 transition-colors">
                {title}
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
              <span className="inline-block mt-6 text-xs font-mono text-violet-600 group-hover:text-violet-400 transition-colors tracking-widest">
                EXPLORE →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
