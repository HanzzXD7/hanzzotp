import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
