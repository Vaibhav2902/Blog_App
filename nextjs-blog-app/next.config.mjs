const nextConfig = {
  experimental:{
  serverExternalPackages: ['@clerk/nextjs', 'bcrypt', 'jsonwebtoken'], // Add your server-side packages here
},
experimental: {
  turbo: false, // Disable TurboPack
},
};
export default nextConfig;
