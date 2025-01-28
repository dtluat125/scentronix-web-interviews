import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kingarthurbaking.com", // Replace with your hostname
      },
    ],
  },
};

export default nextConfig;
