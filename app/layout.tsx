import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { buildMetadata, jsonLd } from "@/lib/seo";
import { MICRO } from "@/lib/content";
import { AppProviders } from "@/components/providers/AppProviders";

// Self-hosted via next/font (Download zur Build-Zeit, kein Google-CDN zur Laufzeit)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${hanken.variable} ${martian.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        <a href="#main" className="skip-link">
          {MICRO.skipLink}
        </a>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
