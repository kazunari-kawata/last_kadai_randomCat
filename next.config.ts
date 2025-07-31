import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // 外部ホストを追加
    domains: ['cdn2.thecatapi.com'],
  },
};

export default nextConfig;