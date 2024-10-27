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
        source: '/contact',
        destination: '/write',
        permanent: true, // Use true for a 308 redirect, false for a 307
      },
    ];
  },

};

