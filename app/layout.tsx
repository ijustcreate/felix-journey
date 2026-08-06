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
  title: "Felix’s Journey with AI",
  description: "21 public repositories, 11 live worlds, and a trail of experiments where Felix made ideas tangible with AI.",
  icons: {
    icon: `${assetBase}/favicon.svg`,
    shortcut: `${assetBase}/favicon.svg`,
  },
  openGraph: {
    title: "Felix’s Journey with AI",
    description: "Rooms, tools, museums, desktops, and tiny universes—built in public and presented honestly.",
    type: "website",
    url: "https://ijustcreate.github.io/felix-journey/",
    images: [{ url: `${assetBase}/og.png`, width: 1536, height: 1024, alt: "A map of Felix’s project worlds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix’s Journey with AI",
    description: "21 public repositories. 11 live worlds. One long experiment in making ideas tangible.",
    images: [`${assetBase}/og.png`],
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
