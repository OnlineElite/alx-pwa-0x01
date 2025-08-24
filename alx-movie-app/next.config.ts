import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["m.media-amazon.com"], // allow Amazon image URLs
  },
  reactStrictMode: true,
};

export default nextConfig;
