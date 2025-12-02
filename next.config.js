/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'miro.medium.com',
      'images.ctfassets.net',
    ],
  },
}

module.exports = nextConfig

