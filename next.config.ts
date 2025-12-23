import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Webpack configuration (for --webpack flag)
  webpack(config) {
    // Find the rule that handles SVG files
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test?: (str: string) => boolean } }) =>
        rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [/url/] }, // exclude if *.svg?url
          use: ["@svgr/webpack"],
        }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
  // Turbopack configuration (default in Next.js 16)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
