import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaCart — Premium Tech & Lifestyle Accessories",
  description:
    "Discover curated smart watches, headphones, gaming gear, and lifestyle tech. Free shipping over $75. Premium quality, 30-day returns.",
  keywords: [
    "ecommerce",
    "tech accessories",
    "smart watches",
    "headphones",
    "premium gadgets",
    "NovaCart",
  ],
  authors: [{ name: "NovaCart" }],
  openGraph: {
    title: "NovaCart — Premium Tech & Lifestyle Accessories",
    description:
      "Tech that moves with you. Shop curated premium gadgets and smart accessories.",
    type: "website",
    locale: "en_US",
    siteName: "NovaCart",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaCart — Premium Tech Store",
    description:
      "Discover curated smart watches, headphones, and lifestyle tech.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
