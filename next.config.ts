import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'twfik.com' },
      { protocol: 'https', hostname: 'wheat-duck-884743.hostingersite.com' },
    ],
  },
};

export default nextConfig;
