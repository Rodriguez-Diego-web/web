/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'ui-avatars.com', 'maps.googleapis.com', 'lh3.googleusercontent.com', 'lh5.googleusercontent.com', 'rodriguez-web.de'],
  },
  async redirects() {
    return [
      // Redirects für alte Portfolio-URLs
      {
        source: '/portfolio/munich-yoga',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/green-garden',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/portfolio/city-share',
        destination: '/portfolio/cityshare',
        permanent: true,
      },
      {
        source: '/portfolio/eco-cosmetics',
        destination: '/portfolio',
        permanent: true,
      },
      // Fallback für andere nicht existierende Portfolio-URLs
      {
        source: '/portfolio/:slug*',
        has: [
          {
            type: 'query',
            key: 'slug',
            value: '(?!cuxsnack-gewinnspiel|abschlepper-showcase|lawyer-showcase|craft-showcase|rireli|dudess|famfordogs|kira-marie|frebo-media|fleyver|interaktive-systeme|cityshare|safesports|saskia-photographie).*',
          },
        ],
        destination: '/portfolio',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
