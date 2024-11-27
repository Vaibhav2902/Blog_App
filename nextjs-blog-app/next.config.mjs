// next.config.mjs
export default {
    experimental: {
      serverComponentsExternalPackages: ['@clerk/nextjs'],
      edge: false, // Disable Edge Functions
    },
  };
  