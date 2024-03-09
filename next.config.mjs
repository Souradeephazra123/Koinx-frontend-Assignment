// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true",
};

const nextConfig = {
  images: {
    domains: ["assets.coingecko.com"],
    // domains: ["images.unsplash.com"],
  },
  distDir: "build",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default withBundleAnalyzer(bundleAnalyzerConfig)(nextConfig);
