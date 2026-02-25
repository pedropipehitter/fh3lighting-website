export const siteConfig = {
  name: "Francisco Hermosillo III",
  title: "Francisco Hermosillo III — Lighting Designer & Production Photographer",
  description:
    "Freelance lighting designer, programmer, and production photographer based in NYC. MFA Lighting Design, University of Nebraska.",
  url: "https://franciscohermosilloiii.com",
  ogImage: "/images/SNOTL129.jpg",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
