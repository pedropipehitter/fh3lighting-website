"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function HomeHeroActions() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <Link
        href="/lighting-design"
        onClick={() => track("cta_click", { location: "home_hero", target: "lighting_design" })}
        className="font-ui px-6 py-3 bg-[#FFCC00] hover:bg-[#ffd633] text-black text-[0.74rem] uppercase tracking-[0.12em] transition-colors"
      >
        View Work
      </Link>
      <Link
        href="/contact"
        onClick={() => track("cta_click", { location: "home_hero", target: "contact" })}
        className="font-ui px-6 py-3 border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-[0.74rem] uppercase tracking-[0.12em] transition-colors"
      >
        Get in Touch
      </Link>
    </div>
  );
}
