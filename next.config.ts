import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.platinumpharma-eg.com' }],
        destination: 'https://platinumpharma-eg.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
