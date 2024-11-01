/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "uxwing.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com"
      },{
        protocol: "https",
        hostname: "media.geeksforgeeks.org"
      },{
        protocol: "https",
        hostname: "media.licdn.com"
      }
    ],
  },
};

export default nextConfig;
