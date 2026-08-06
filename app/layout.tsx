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
  title: "Felix — AI-Native Product Builder & Creative Technologist",
  description: "Felix turns unusual ideas into working products through product direction, interaction design, AI-assisted implementation, critical review, and honest shipping.",
  icons: {
    icon: `${assetBase}/favicon.svg`,
    shortcut: `${assetBase}/favicon.svg`,
  },
  openGraph: {
    title: "Felix — I turn unusual ideas into working products",
    description: "Creative technologist and AI-native product builder working across responsible AI tools, spatial interfaces, museum experiences, simulations, and playful systems.",
    type: "website",
    url: "https://ijustcreate.github.io/felix-journey/",
    images: [{ url: `${assetBase}/og-employer.png`, width: 1536, height: 1024, alt: "Felix — I turn unusual ideas into working products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix — AI-Native Product Builder & Creative Technologist",
    description: "I turn unusual ideas into working products—and keep the human responsible for what ships.",
    images: [`${assetBase}/og-employer.png`],
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
