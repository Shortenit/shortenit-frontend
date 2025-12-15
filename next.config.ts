import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://shortenit.freaks.dev/api/:path*",
      },
      {
        source: "/s/:path*",
        destination: "https://shortenit.freaks.dev/s/:path*",
      },
      {
         // Fallback for root path short codes (e.g. localhost:3000/abc -> backend/s/abc)
         // Next.js will match file-system pages first (like /analytics, /links) before applying this rewrite.
        source: "/:slug",
        destination: "https://shortenit.freaks.dev/s/:slug",
      },
    ];
  },
};

export default nextConfig;
