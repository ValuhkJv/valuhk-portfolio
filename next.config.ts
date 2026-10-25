import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the "N" dev-mode badge in the corner (it never shows in production).
  devIndicators: false,
};

export default nextConfig;
