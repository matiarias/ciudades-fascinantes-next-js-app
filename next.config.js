/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "flagcdn.com",
      "mainfacts.com",
    ],
  },
};

module.exports = nextConfig;
