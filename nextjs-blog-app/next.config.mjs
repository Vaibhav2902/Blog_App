/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    experimental: {
      serverComponentsExternalPackages: ['@clerk/nextjs'],
      edge: false, // Disable Edge Functions
    },
  };
