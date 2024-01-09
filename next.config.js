/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", ".storybook", "components", "lib", "stories", "tests"],
  },
};

module.exports = nextConfig;
