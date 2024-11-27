/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@clerk/nextjs'],
      edge: false, // Disable Edge Functions for Clerk
    },
  };
  
  module.exports = nextConfig;
  