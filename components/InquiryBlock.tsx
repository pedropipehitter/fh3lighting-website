import Link from "next/link";

export default function InquiryBlock() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-800">
      <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-4">Availability</p>
      <p className="text-neutral-300 text-[0.9rem] leading-relaxed max-w-xl mb-8">
        I'm currently booking programming work starting July 2026 and beyond, and remain
        available for lighting design and production photography. If you have a project coming
        up, I'd love to hear about it.
      </p>
      <Link
        href="/contact"
        className="inline-block font-ui-label text-[0.62rem] uppercase tracking-[0.12em] px-5 py-2.5 border border-neutral-700 text-neutral-300 hover:border-[#FFCC00] hover:text-[#FFCC00] transition-colors"
      >
        Get in Touch →
      </Link>
    </section>
  );
}
