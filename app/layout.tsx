import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      <body className={`${playfairDisplay.variable} font-[family-name:var(--font-playfair)] antialiased bg-[#121212] text-[#ededed]`}>
        <Nav />
        <main className="pt-16">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
