/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['utfs.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]
  }
  // Add any other custom configurations here
};

export default nextConfig;
