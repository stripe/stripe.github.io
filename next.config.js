// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* [Start] Settings for deploying to GitHub Pages */
  output: "export",
  images: {
    unoptimized: true,
  },
  /* [End] Settings for deploying to GitHub Pages */
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
