/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/flowint-demo', destination: '/flowint-demo/index.html' }];
  },
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
