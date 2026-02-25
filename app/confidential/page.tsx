import type { Metadata } from "next";
import ConfidentialGate from "@/components/ConfidentialGate";

export const metadata: Metadata = {
  title: "Confidential Work",
  robots: {
    index: false,
    follow: false,
  },
};

const projects = [
  {
    title: "Private Corporate Event",
    role: "Lighting Designer",
    detail: "Fortune 500 · 2024",
    description: "Full production lighting design for a large-scale private corporate celebration.",
  },
  {
    title: "Major Sporting Event",
    role: "Lighting Designer",
    detail: "National Broadcast · 2024",
    description: "Broadcast-compatible arena lighting design for a nationally televised sporting event.",
  },
  {
    title: "Private Gala Performance",
    role: "Lighting Designer",
    detail: "Invitation Only · 2023",
    description: "Intimate gala featuring live performance, lighting design coordinated with production design team.",
  },
];

export default function ConfidentialPage() {
  return (
    <ConfidentialGate>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-16">
          <p className="font-ui-label text-[0.62rem] text-[#FFCC00] mb-3 uppercase tracking-[0.15em]">
            Confidential
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
            Private Work Samples
          </h1>
          <p className="text-neutral-500 text-[0.82rem] mt-3 max-w-lg">
            These projects are shared under confidentiality. Please do not reproduce or distribute.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#121212] p-6">
              <div className="aspect-[4/3] bg-neutral-900 mb-5 flex items-center justify-center">
                <span className="font-ui text-neutral-700 text-[0.62rem] uppercase tracking-[0.1em]">
                  NDA
                </span>
              </div>
              <h2 className="font-heading text-[0.92rem] font-medium text-white mb-1">
                {project.title}
              </h2>
              <p className="text-[0.72rem] text-neutral-500">{project.role}</p>
              <p className="text-[0.7rem] text-neutral-600 mt-1">{project.detail}</p>
              <p className="text-[0.72rem] text-neutral-400 mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ConfidentialGate>
  );
}
