import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  // Penting: Sesuaikan dengan nama repository Anda
  basePath: process.env.NODE_ENV === "production" ? "/valuhk-portfolio" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/valuhk-portfolio/" : "",

  // Nonaktifkan optimisasi gambar bawaan Next.js karena tidak didukung di GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
