// next.config.mjs

const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@clerk/nextjs'],  // Ensure this is used to allow Clerk's server-side components
    },
    // The Edge runtime is disabled globally
    target: 'server',  // Disables Edge functions, ensuring that your middleware runs in a Node.js runtime
  };
  
  export default nextConfig;
  