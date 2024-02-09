/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // edit: updated to new key. Was previously `allowedForwardedHosts`
      allowedOrigins: ['localhost:3000','turbo-space-doodle-wwwxvg57wv42gp4r-3000.app.github.dev:3000'],
    },
  },  
};

module.exports = nextConfig;
