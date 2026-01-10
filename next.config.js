/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/administrator/:path*',
        destination: '/api/proxy/administrator/:path*',
      },
    ]
  },
  // Increase body size limit for file uploads
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
}

export default nextConfig;
