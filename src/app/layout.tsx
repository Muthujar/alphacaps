import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Alphacaps.in - Complete Construction Solutions | Trade Platform & InfraCons Services",
  description: "TrustSEAL verified company offering premium building materials (Trade Platform) and expert construction & interior services (InfraCons) in Chennai. Quality materials, expert execution, moral business policies with crystal pure transparency.",
  keywords: "Alphacaps.in, construction materials Chennai, building materials supplier, construction services Chennai, interior design Chennai, TMT bars, AAC blocks, cement supplier, RMC services, commercial construction, residential construction, TrustSEAL verified",
  authors: [{ name: "Alphacaps.in" }],
  openGraph: {
    title: "Alphacaps.in - Complete Construction Solutions | Trade Platform & InfraCons",
    description: "TrustSEAL verified company offering premium building materials and expert construction & interior services in Chennai. Quality materials, expert execution, moral business policies.",
    type: "website",
    locale: "en_US",
    siteName: "Alphacaps.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphacaps.in - Complete Construction Solutions | Trade Platform & InfraCons",
    description: "TrustSEAL verified company offering premium building materials and expert construction & interior services in Chennai. Quality materials, expert execution.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

