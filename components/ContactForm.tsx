"use client";

import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";

export default function ContactForm() {
  const params = useSearchParams();
  const service = params.get("service") ?? "";

  return (
    <form
      action="https://formspree.io/f/mpqjklyj"
      method="POST"
      className="space-y-6"
      onSubmit={() => track("contact_form_submit", { location: "contact_page", service })}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="font-ui-label block text-[0.62rem] text-neutral-500 mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-[0.82rem] focus:outline-none focus:border-[#FFCC00] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-ui-label block text-[0.62rem] text-neutral-500 mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-[0.82rem] focus:outline-none focus:border-[#FFCC00] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="font-ui-label block text-[0.62rem] text-neutral-500 mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={service}
          className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-[0.82rem] focus:outline-none focus:border-[#FFCC00] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-ui-label block text-[0.62rem] text-neutral-500 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-[0.82rem] focus:outline-none focus:border-[#FFCC00] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="font-ui px-8 py-3 bg-[#FFCC00] hover:bg-[#ffd633] text-black text-[0.74rem] uppercase tracking-[0.12em] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
