/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc(nextConfig)({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});

// module.exports = nextConfig