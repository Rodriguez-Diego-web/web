/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'ui-avatars.com', 'maps.googleapis.com', 'lh3.googleusercontent.com', 'lh5.googleusercontent.com'],
  },
}

module.exports = nextConfig
