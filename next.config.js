/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", ".storybook", "components", "lib", "stories", "tests"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
