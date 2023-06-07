/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'ui-avatars.com']
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
