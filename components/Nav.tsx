"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Welcome" },
  { href: "/lighting-design", label: "Lighting Design" },
  { href: "/lighting-programming", label: "Lighting Programming" },
  { href: "/production-photography", label: "Production Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase">
          FH3
        </Link>
        <div className="flex items-center gap-6 flex-wrap">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-wide transition-colors ${
                pathname === href
                  ? "text-violet-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide text-neutral-400 hover:text-white transition-colors"
          >
            Resume
          </a>
          <div className="flex items-center gap-3 ml-2 border-l border-neutral-800 pl-4">
            <a
              href="https://instagram.com/PhotobyFH3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-violet-400 transition-colors"
            >
              IG
            </a>
            <a
              href="mailto:FH3@franciscohermosilloiii.com"
              className="text-xs text-neutral-500 hover:text-violet-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
