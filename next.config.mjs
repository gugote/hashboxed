/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/flowint-demo', destination: '/flowint-demo/index.html' },
      { source: '/flowint-demo/flow-x', destination: '/flowint-demo/flow-x/index.html' },
    ];
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
