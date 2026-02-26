import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/content/v1/**",
      },
      {
        protocol: "https",
        hostname: "photos.smugmug.com",
      },
    ],
  },
};

export default nextConfig;
