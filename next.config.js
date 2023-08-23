const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
      },
    ],
  },
};

module.exports = nextConfig;
