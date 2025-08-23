/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/works/:path*',
        destination: '/work/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
