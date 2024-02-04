const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", ".storybook", "components", "lib", "stories", "tests"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
