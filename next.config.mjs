import nextMdx from '@next/mdx';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  experimental: {
    viewTransitions: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});

export default nextConfig;
