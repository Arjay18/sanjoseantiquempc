/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname // Explicitly set the root directory
  },
  images: {
    domains: ['images.unsplash.com'], // Add your image domains here
  },
  // Other Next.js config options
}

module.exports = nextConfig
