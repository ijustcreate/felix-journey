import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://ijustcreate.github.io/felix-journey/"),
  title: "Felix Embree — Creative Technologist & AI-Native Product Builder",
  description: "Felix makes interactive systems for real environments through product direction, experience design, AI-assisted implementation, critical review, and honest shipping.",
  icons: {
    icon: `${assetBase}/favicon.svg`,
    shortcut: `${assetBase}/favicon.svg`,
  },
  openGraph: {
    title: "Felix Embree — I make systems people can feel their way through",
    description: "Creative technologist and AI-native product builder working across public-space systems, venue interaction, responsible AI tools, spatial interfaces, simulations, and playful systems.",
    type: "website",
    url: "https://ijustcreate.github.io/felix-journey/",
    images: [{ url: `${assetBase}/og-v2.png`, width: 1536, height: 1024, alt: "Felix Embree — I make systems people can feel their way through" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Embree — Creative Technologist & AI-Native Product Builder",
    description: "I make systems people can feel their way through—and keep the human responsible for what ships.",
    images: [`${assetBase}/og-v2.png`],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
