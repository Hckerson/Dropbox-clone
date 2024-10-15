/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fjord.dropboxstatic.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;