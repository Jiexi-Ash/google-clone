/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.vox-cdn.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
