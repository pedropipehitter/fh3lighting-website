import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Francisco Hermosillo III — Lighting Designer & Production Photographer",
  description:
    "Freelance lighting designer, programmer, and production photographer based in NYC. MFA Lighting Design, University of Nebraska.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} font-[family-name:var(--font-space-mono)] antialiased bg-[#121212] text-[#ededed]`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
