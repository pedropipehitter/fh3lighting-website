"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase">
          FH3
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`text-xs tracking-wide transition-colors ${
                pathname === href
                  ? "text-[#FFCC00]"
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
              className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors"
            >
              IG
            </a>
            <a
              href="https://instagram.com/fh3.lx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors"
            >
              IG LX
            </a>
            <a
              href="mailto:FH3@franciscohermosilloiii.com"
              className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1 p-1 text-neutral-400 hover:text-white transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className={`block w-5 h-px bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-4 border-t border-neutral-800 pt-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={pathname === href ? "page" : undefined}
              className={`text-sm tracking-wide transition-colors ${
                pathname === href ? "text-[#FFCC00]" : "text-neutral-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-neutral-400 hover:text-white transition-colors"
          >
            Resume
          </a>
          <div className="flex gap-4 pt-2 border-t border-neutral-800">
            <a href="https://instagram.com/PhotobyFH3" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors">IG</a>
            <a href="https://instagram.com/fh3.lx" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors">IG LX</a>
            <a href="mailto:FH3@franciscohermosilloiii.com" className="text-xs text-neutral-500 hover:text-[#FFCC00] transition-colors">Email</a>
          </div>
        </div>
      </div>
    </header>
  );
}
