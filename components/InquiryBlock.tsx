import Link from "next/link";

const services = [
  {
    title: "Lighting Design",
    description: "Regional theatre, opera, dance, and live entertainment.",
    param: "Lighting Design Inquiry",
  },
  {
    title: "Lighting Programming",
    description: "Off-Broadway, large-scale live events, and summerstock.",
    param: "Lighting Programming Inquiry",
  },
  {
    title: "Production Photography",
    description: "Production stills for theatre, dance, and live performance.",
    param: "Production Photography Inquiry",
  },
];

export default function InquiryBlock() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
      <div className="mb-10">
        <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3">Availability</p>
        <h2 className="font-heading text-2xl sm:text-3xl text-white">Work Together</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-800">
        {services.map(({ title, description, param }) => (
          <div key={title} className="bg-[#121212] p-8 flex flex-col">
            <h3 className="font-heading text-lg font-medium text-white mb-2">{title}</h3>
            <p className="text-[0.78rem] text-neutral-500 leading-relaxed flex-1">{description}</p>
            <Link
              href={`/contact?service=${encodeURIComponent(param)}`}
              className="mt-8 inline-block font-ui-label text-[0.62rem] uppercase tracking-[0.12em] px-5 py-2.5 border border-neutral-700 text-neutral-300 hover:border-[#FFCC00] hover:text-[#FFCC00] transition-colors self-start"
            >
              Inquire →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
