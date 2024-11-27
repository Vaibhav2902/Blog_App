/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@clerk/nextjs'],
      edge: false, // Disable Edge Functions
    },
  };
  
  module.exports = nextConfig;
  