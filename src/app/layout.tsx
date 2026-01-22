import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

// JSON-LD Structured Data for Google Search
// This tells Google: "We are AlphaCap, a construction company in Chennai, India"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.alphacaps.in",
  "name": "AlphaCap Trade Platform Private Limited",
  "alternateName": ["AlphaCap", "AlphaCaps", "Alphacaps", "alphacaps"],
  "description": "TrustSEAL verified construction materials supplier and interior services provider in Chennai. Premium building materials, RMC services, and expert construction solutions.",
  "url": "https://www.alphacaps.in",
  "logo": "https://www.alphacaps.in/images/hero/alphacap_logo_header.png",
  "image": "https://www.alphacaps.in/images/hero/mat2.png",
  "telephone": ["+919629124777", "+918925516010"],
  "email": "tradeplatform@alphacaps.in",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Door No. A H 266, 7th Main Road, Annanagar",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600040",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0827",
    "longitude": "80.2707"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/alphacaptradeplatform/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Materials",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TMT Bars Supply"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AAC Blocks Supply"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ready Mix Concrete (RMC) Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Design Services"
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  // metadataBase is CRITICAL - it tells Next.js the base URL for all OpenGraph images
  metadataBase: new URL("https://www.alphacaps.in"),
  title: "AlphaCap | alphacaps.in - Complete Construction Solutions",
  description: "TrustSEAL verified (by IndiaMART) company offering premium building materials (Trade Platform) and expert construction & interior services (InfraCons) in Chennai. Quality materials, expert execution, moral business policies with crystal pure transparency.",
  keywords: "AlphaCap, alphacaps.in, construction materials Chennai, building materials supplier, construction services Chennai, interior design Chennai, TMT bars, AAC blocks, cement supplier, RMC services, commercial construction, residential construction, TrustSEAL verified by IndiaMART",
  authors: [{ name: "AlphaCap Trade Platform Private Limited" }],
  creator: "AlphaCap",
  publisher: "AlphaCap Trade Platform Private Limited",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AlphaCap | Complete Construction Solutions in Chennai",
    description: "TrustSEAL verified by IndiaMART. Premium building materials (TMT bars, AAC blocks, cement) and expert construction & interior services in Chennai, Tamil Nadu.",
    type: "website",
    locale: "en_IN",
    siteName: "AlphaCap",
    url: "https://www.alphacaps.in",
    images: [
      {
        url: "/images/hero/mat2.png",
        width: 1200,
        height: 630,
        alt: "AlphaCap - Construction Materials Supplier in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaCap | Complete Construction Solutions in Chennai",
    description: "TrustSEAL verified by IndiaMART. Premium building materials and expert construction & interior services in Chennai.",
    images: ["/images/hero/mat2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // You'll add your Google Search Console verification code here later
    // google: "your-google-verification-code",
  },
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
        <link rel="icon" href="/icon.png" type="image/png" />
        {/* JSON-LD Structured Data - Tells Google we are AlphaCap India, not alphacaps GmbH Germany */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

