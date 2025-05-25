/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'ui-avatars.com', 'maps.googleapis.com', 'lh3.googleusercontent.com', 'lh5.googleusercontent.com', 'rodriguez-web.de'],
  },
}

module.exports = nextConfig
