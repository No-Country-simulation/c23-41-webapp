import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',  // For static export
   distDir: 'out',

   // Additional optimizations for Netlify
  trailingSlash: true,  // Helps with static export routing
};

export default nextConfig;
