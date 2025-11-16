// next.config.js

module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'f005.backblazeb2.com' },
      { hostname: 'media.licdn.com' },
      {
        protocol: "https",
        hostname: "blah148.s3.us-east-005.backblazeb2.com",
        pathname: "/**",       // allow all paths under this host
      },
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

