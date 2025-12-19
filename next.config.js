/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '/api/proxy/admin/:path*',
      },
    ]
  }
};

module.exports = nextConfig;
