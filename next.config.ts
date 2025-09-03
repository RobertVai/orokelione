import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

 
  eslint: {
    ignoreDuringBuilds: true,
  },

   typescript: {
    ignoreBuildErrors: true,
  },

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;

