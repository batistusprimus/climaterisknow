import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Expose a canonical /favicon.ico without needing to duplicate the binary
      { source: "/favicon.ico", destination: "/Logo_Sentinel_Climate_Intelligence.ico" },
    ];
  },
};

export default nextConfig;
