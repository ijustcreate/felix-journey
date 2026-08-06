import type { NextConfig } from "next";

const isGitHubPages = process.env.FELIX_DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  env: {
    NEXT_PUBLIC_ASSET_BASE: isGitHubPages ? "/felix-journey" : "",
  },
  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
