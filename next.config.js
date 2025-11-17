// next.config.js

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f005.backblazeb2.com",
        pathname: "/file/blah148/**",   // allow your Backblaze bucket paths
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blah148.s3.us-east-005.backblazeb2.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/bio",
        destination: "/words",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/write",
        permanent: true,
      },
    ];
  },
};

