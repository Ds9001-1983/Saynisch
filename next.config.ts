import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eindeutiger Workspace-Root (mehrere Lockfiles im Verzeichnisbaum)
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // noindex auf allen Nebenadressen (*.vercel.app, Previews), nur die Hauptdomain bleibt indexierbar.
      // Next.js verankert den Host-Wert als regulären Ausdruck (^…$), deshalb sind die Punkte escaped.
      {
        source: "/:path*",
        missing: [{ type: "host", value: "www\\.saynisch\\.com" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
