import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resources/next-react',
        destination: 'https://www.edutopia.org/article/teaching-students-use-evidence-based-studying-strategies',
        permanent: true,
      },
      {
        source: '/resources/file-rec',
        destination: 'https://www.structural-learning.com/post/contextual-teaching-and-learning',
        permanent: true,
      },
      {
        source: '/resources/goal-oriented',
        destination: 'https://www.edutopia.org/article/supporting-student-goal-setting',
        permanent: true,
      },
      {
        source: '/resources/cognitive-development',
        destination: 'https://www.simplypsychology.org/piaget.html',
        permanent: true,
      },
    ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com/**",
      },
      {
        protocol: "https",
        hostname: "wpvip.edutopia.org/**",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com/**",
      },
      {
        protocol: "https",
        hostname: "www.simplypsychology.org/**",
      },
    ],
  },
  // if used turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
