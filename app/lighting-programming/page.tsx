import { programmingCredits } from "@/lib/programming";

export const metadata = {
  title: "Lighting Programming — Francisco Hermosillo III",
};

export default function LightingProgrammingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="text-xs font-mono tracking-[0.3em] text-[#FFCC00] uppercase mb-3">Credits</p>
        <h1 className="text-4xl font-light text-white mb-6">Lighting Programming</h1>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          Experienced with ETC Eos family (APEX, GIO, TI, Ion XE), MA2, and beyond.
          Comfortable in fast-paced, high-pressure environments.
        </p>
      </header>

      <div className="overflow-x-auto mb-16">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-left text-xs font-mono text-neutral-600 uppercase tracking-widest pb-4 pr-8">Production</th>
              <th className="text-left text-xs font-mono text-neutral-600 uppercase tracking-widest pb-4 pr-8">Designer</th>
              <th className="text-left text-xs font-mono text-neutral-600 uppercase tracking-widest pb-4 pr-8">Venue</th>
              <th className="text-left text-xs font-mono text-neutral-600 uppercase tracking-widest pb-4 pr-8">Console</th>
              <th className="text-left text-xs font-mono text-neutral-600 uppercase tracking-widest pb-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {programmingCredits.map((credit, i) => (
              <tr key={i} className="border-b border-neutral-900 hover:bg-neutral-900/50 transition-colors">
                <td className="py-4 pr-8 text-white font-medium">{credit.production}</td>
                <td className="py-4 pr-8 text-neutral-400">{credit.designer}</td>
                <td className="py-4 pr-8 text-neutral-400">{credit.venue}</td>
                <td className="py-4 pr-8 text-neutral-500 font-mono text-xs">{credit.console}</td>
                <td className="py-4 text-neutral-600">{credit.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-0">
        <div className="border border-neutral-800 p-8 bg-neutral-900/30">
          <p className="text-xs font-mono text-[#FFCC00] uppercase tracking-widest mb-4">Confidential Work</p>
          <p className="text-neutral-400 leading-relaxed">
            I work regularly on high-profile private and corporate events — major sporting events, exclusive galas,
            and private performances. These projects require strict confidentiality; I&apos;m well-practiced at operating
            with discretion under high-pressure, high-visibility conditions.
          </p>
        </div>
        <div className="border border-neutral-800 p-8 bg-neutral-900/30">
          <p className="text-xs font-mono text-[#FFCC00] uppercase tracking-widest mb-4">Alley Theatre — 2023–2024</p>
          <p className="text-neutral-400 leading-relaxed">
            Served as a programming mentor for the Alley Theatre, training staff electricians in ETC Eos programming
            as part of their rotating show duties.
          </p>
        </div>
      </div>
    </div>
  );
}
