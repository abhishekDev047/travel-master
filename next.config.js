/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,

  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      },
    //   {
    //     protocol: 'https',
    //     hostname: 'img.dummyapi.io'
    //   },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
