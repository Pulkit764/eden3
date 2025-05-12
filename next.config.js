/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'fr', 'zh', 'hi', 'ar', 'sw'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig