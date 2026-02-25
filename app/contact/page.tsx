import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
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
        <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3">Contact</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">Get in Touch</h1>
        <p className="text-neutral-400 text-[0.9rem]">
          Available for lighting design, programming, and production photography projects.
        </p>
      </header>

      <ContactForm />

      <div className="mt-16 pt-10 border-t border-neutral-800 space-y-3">
        <p className="font-ui-label text-[0.62rem] text-neutral-600 mb-4">Direct</p>
        <a
          href="mailto:FH3@franciscohermosilloiii.com"
          className="block text-neutral-400 hover:text-[#FFCC00] transition-colors text-[0.8rem]"
        >
          FH3@franciscohermosilloiii.com
        </a>
        <a
          href="https://instagram.com/PhotobyFH3"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-neutral-400 hover:text-[#FFCC00] transition-colors text-[0.8rem]"
        >
          @PhotobyFH3 on Instagram
        </a>
        <a
          href="https://instagram.com/fh3.lx"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-neutral-400 hover:text-[#FFCC00] transition-colors text-[0.8rem]"
        >
          @fh3.lx on Instagram
        </a>
      </div>
    </div>
  );
}
