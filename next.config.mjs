/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // WebP only: AVIF was barely smaller for these screenshots but took up to
    // ~1.6s to encode on a cold request (vs ~50ms for WebP).
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
