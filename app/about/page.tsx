import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Francisco Hermosillo III",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="text-xs font-mono tracking-[0.3em] text-[#1e90ff] uppercase mb-3">About</p>
        <h1 className="text-4xl font-light text-white">Francisco Hermosillo III</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Headshot */}
        <div className="lg:col-span-1">
          <div className="aspect-[3/4] bg-neutral-900 relative overflow-hidden">
            <Image
              src="/images/FH3-Headshot.jpg"
              alt="Francisco Hermosillo III"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="lg:col-span-2 space-y-6 text-neutral-400 leading-relaxed">
          <p>
            Francisco Hermosillo III is a freelance lighting designer, programmer, and production
            photographer based in New York City. He holds an MFA in Lighting Design from the University
            of Nebraska&apos;s Johnny Carson School of Theatre and Film, where he studied as a Graduate
            Teaching Assistant and Hixson-Lied Fellow under the mentorship of Michelle Harvey.
          </p>
          <p>
            His design work spans regional theatre, opera, dance, and live entertainment — from the
            Alley Theatre and Nebraska Repertory Theatre to SeaWorld Orlando and The Mirage Las Vegas.
            As a lighting programmer, he has worked on productions at the Daryl Roth Theatre, Minetta
            Lane Theatre, Northern Stage, and SUNY Purchase, among others.
          </p>
          <p>
            His production photography has been published in the <em className="text-neutral-300">LA Times</em>,{" "}
            <em className="text-neutral-300">LiveDesign Magazine</em>, and the{" "}
            <em className="text-neutral-300">Thornton Wilder Journal</em>.
          </p>
          <p>
            Francisco holds a BA in Music Composition from California Lutheran University ('18),
            with additional study under Dr. Michael Schelle at Butler University.
          </p>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-16 border-t border-neutral-800 pt-12">
        <h2 className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Experience</h2>
        <div className="space-y-6">
          {[
            { role: "Project Engineer", org: "5 Words Media", years: "2024–2025" },
            { role: "Lighting & Projections Supervisor", org: "UCLA Theatre, Film & Television", years: "2024" },
            { role: "Assistant Lighting Design Director", org: "Alley Theatre", years: "2023–2024" },
            { role: "Production Staff", org: "Barrington Stage Company", years: "2021–2023" },
            { role: "Graduate Teaching Assistant", org: "University of Nebraska–Lincoln", years: "2020–2023" },
          ].map(({ role, org, years }) => (
            <div key={org} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span className="text-white text-sm">{role}</span>
              <span className="text-neutral-500 text-sm">{org}</span>
              <span className="text-neutral-700 text-xs font-mono sm:ml-auto">{years}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Select Credits */}
      <section className="mb-16 border-t border-neutral-800 pt-12">
        <h2 className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Select Design Credits</h2>
        <p className="text-neutral-500 text-sm leading-relaxed">
          Lied Center · Nebraska Repertory Theatre · Glenn Korff School of Music · St. Louis Black Rep ·
          Nebraska Wesleyan University · Bluebarn Theatre · Opera Omaha · UCLA TFT
        </p>
      </section>

      <section className="mb-16 border-t border-neutral-800 pt-12">
        <h2 className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-8">Select Programming Credits</h2>
        <p className="text-neutral-500 text-sm leading-relaxed">
          Daryl Roth Theatre · Minetta Lane Theatre · Northern Stage · SeaWorld Orlando · The Mirage Las Vegas · SUNY Purchase
        </p>
      </section>

      {/* CTA */}
      <div className="border-t border-neutral-800 pt-12 flex gap-4 flex-wrap">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#1e90ff] hover:bg-[#3da0ff] text-white text-sm tracking-wide transition-colors"
        >
          Get in Touch
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-sm tracking-wide transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
