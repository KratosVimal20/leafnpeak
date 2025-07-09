// next.config.js (or next.config.mjs for pure ESM)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ✅ Enables static HTML export
};

export default nextConfig;
