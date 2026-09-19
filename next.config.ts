import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      // The practice's real staff headshots, served from their current site.
      { hostname: "le-cdn.hibuwebsites.com" },
    ],
  },
};

export default nextConfig;
