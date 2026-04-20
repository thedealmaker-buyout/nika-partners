import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nika-partners.eu"),
  title: {
    default: "Nika Partners — Cross-Border Tech M&A Advisory",
    template: "%s | Nika Partners",
  },
  description:
    "Nika Partners is a cross-border M&A advisory boutique dedicated to European technology companies. Based in Amsterdam and Paris.",
  keywords: [
    "M&A advisory",
    "cross-border M&A",
    "technology M&A",
    "SaaS M&A",
    "venture-backed buyout",
    "European tech",
    "buy-and-build",
    "Amsterdam",
    "Paris",
  ],
  authors: [{ name: "Thomas Tcheudjio" }],
  openGraph: {
    title: "Nika Partners — Cross-Border Tech M&A Advisory",
    description:
      "Cross-border M&A advisory for technology leaders ready to build beyond their domestic market.",
    url: "https://nika-partners.eu",
    type: "website",
    locale: "en_US",
    siteName: "Nika Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nika Partners — Cross-Border Tech M&A Advisory",
    description:
      "Cross-border M&A advisory for technology leaders ready to build beyond their domestic market.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
