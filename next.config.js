// next.config.js

module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'f005.backblazeb2.com' },
      { hostname: 'media.licdn.com' }
    ],
  },

  async redirects() {
    return [
      {
        source: '/bio',
        destination: '/words',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/write',
        permanent: true,
      },
    ];
  },
};

