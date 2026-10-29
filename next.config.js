/** @type {import('next').NextConfig} */
// STATIC_EXPORT=1 (npm run build:static) writes a static copy to out/ for any static host.
const isStaticExport = process.env.STATIC_EXPORT === '1'

const nextConfig = {
  ...(isStaticExport ? { output: 'export', trailingSlash: true } : {}),

  // Enable compression
  compress: true,

  // Image optimization
  images: {
    unoptimized: isStaticExport,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Package optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/audio/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

