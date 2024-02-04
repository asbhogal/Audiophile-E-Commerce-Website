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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = path.join(__dirname);
    return config;
  },
};

module.exports = nextConfig;
