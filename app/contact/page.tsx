import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Francisco Hermosillo III for lighting design, programming, and production photography work.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact — Francisco Hermosillo III",
    description:
      "Contact Francisco Hermosillo III for lighting design, programming, and production photography work.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Francisco Hermosillo III",
    description:
      "Contact Francisco Hermosillo III for lighting design, programming, and production photography work.",
    images: [absoluteUrl("/images/SNOTL129.jpg")],
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <header className="mb-16">
        <p className="text-xs font-mono tracking-[0.3em] text-[#FFCC00] uppercase mb-3">Contact</p>
        <h1 className="text-4xl font-light text-white mb-4">Get in Touch</h1>
        <p className="text-neutral-400">
          Available for lighting design, programming, and production photography projects.
        </p>
      </header>

      <form
        action="https://formspree.io/f/mpqjklyj"
        method="POST"
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FFCC00] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FFCC00] transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FFCC00] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FFCC00] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-3 bg-[#FFCC00] hover:bg-[#ffd633] text-black text-sm tracking-wide transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-16 pt-10 border-t border-neutral-800 space-y-3">
        <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest mb-4">Direct</p>
        <a
          href="mailto:FH3@franciscohermosilloiii.com"
          className="block text-neutral-400 hover:text-[#FFCC00] transition-colors text-sm"
        >
          FH3@franciscohermosilloiii.com
        </a>
        <a
          href="https://instagram.com/PhotobyFH3"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-neutral-400 hover:text-[#FFCC00] transition-colors text-sm"
        >
          @PhotobyFH3 on Instagram
        </a>
        <a
          href="https://instagram.com/fh3.lx"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-neutral-400 hover:text-violet-400 transition-colors text-sm"
        >
          @fh3.lx on Instagram
        </a>
      </div>
    </div>
  );
}
