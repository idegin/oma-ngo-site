import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: [ '@prismicio/client', '@prismicio/react' ],
  },

  // Image optimization for better SEO
  images: {
    formats: [ 'image/webp', 'image/avif' ],
    deviceSizes: [ 640, 750, 828, 1080, 1200, 1920, 2048, 3840 ],
    imageSizes: [ 16, 32, 48, 64, 96, 128, 256, 384 ],
  },

  // Headers for better SEO and security
  async headers()
  {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects()
  {
    return [
      // Add any necessary redirects here
    ];
  },

  // Rewrites for better URL structure
  async rewrites()
  {
    return [
      // Add any necessary rewrites here
    ];
  },
};

export default nextConfig;
