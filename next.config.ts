import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const internalHost = process.env.TAURI_DEV_HOST || 'localhost';
const isDesktop = process.env.DEV === "desktop";

const nextConfig: NextConfig = {
  output: isDesktop ? 'export': undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  assetPrefix: (isProd || !isDesktop) ? undefined : `http://${internalHost}:3000`,  
};

export default nextConfig;
