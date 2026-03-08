import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matchaku.web.id"),

  title: {
    default: "Matchaku - Your Personal Mathca Journey",
    template: "%s | Matchaku",
  },

  description:
    "Sebuah platform untuk menemukan, mereview, dan berbagi segala hal tentang matcha",

  keywords: [
    "Matchaku",
    "Matcha",
    "Tea",
    "Indonesia",
    "Matcha Enthusiast",
    "Teh",
  ],

  authors: [{ name: "Dimas Aris Pangestu", url: "https://www.dimasaris.xyz" }],

  creator: "satellacodes",
  publisher: "satellacodes",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.matchaku.web.id",
  },

  openGraph: {
    title: "Matchaku - Your Personal Matcha Journey ",
    description:
      "Sebuah platform untuk menemukan, mereview, dan berbagi segala hal tentang matcha",
    url: "https://www.matchaku.web.id",
    siteName: "Matchaku",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matchaku",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Matchaku - Your Personal Matcha Journey",
    description:
      "Sebuah platform untuk menemukan, mereview, dan berbagi segala hal tentang matcha",
    creator: "@satellacodes",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "google-site-verification-code",
  },

  category: "Note",
};

export default function Home() {
  return (
    );
}
