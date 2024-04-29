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
        source: '/projects',
        destination: '/',
        permanent: false, // Set to true for permanent redirection (HTTP status code 301)
      },
    ];
  },
};

