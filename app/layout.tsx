import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Neel Seth - Founder & Product Leader | ReplyDaddy, Teacherop, Shipstation.ai",
  description: "Serial entrepreneur and product leader with expertise in AI-powered platforms, SaaS, and e-commerce. Building ReplyDaddy (AI Reddit marketing), Teacherop (adaptive learning), and Shipstation.ai (AI website builder). 10+ years scaling products from 0 to millions of users.",
  keywords: "Neel Seth, Product Developer, Founder, ReplyDaddy, Teacherop, Shipstation.ai, AI Products, SaaS, Bengaluru, Product Management, Entrepreneurship, Reddit Marketing AI, EdTech, Website Builder",
  authors: [{ name: "Neel Seth" }],
  creator: "Neel Seth",
  publisher: "Neel Seth",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Neel Seth - Founder & Product Leader",
    description: "Serial entrepreneur building AI-powered platforms. Founder of ReplyDaddy, Teacherop, and Shipstation.ai. Ex-Product Lead at Dukaan.",
    url: "https://neelseth.com",
    siteName: "Neel Seth Portfolio",
    images: [
      {
        url: "/neelprofileimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Neel Seth - Product Leader & Entrepreneur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neel Seth - Founder & Product Leader",
    description: "Serial entrepreneur building AI-powered platforms. Founder of ReplyDaddy, Teacherop, and Shipstation.ai.",
    creator: "@NeelSeth7",
    images: ["/neelprofileimage.jpeg"],
  },
  alternates: {
    canonical: "https://neelseth.com",
  },
  verification: {
    google: "fTOmc8heUcqO31iK9HuMpdwTvckJw9cUSQsUafdybpw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Neel Seth",
    "url": "https://neelseth.com",
    "image": "https://neelseth.com/neelprofileimage.jpeg",
    "jobTitle": "Founder & Product Leader",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ReplyDaddy",
        "url": "https://replydaddy.com"
      },
      {
        "@type": "Organization",
        "name": "Teacherop",
        "url": "https://teacherop.com"
      },
      {
        "@type": "Organization",
        "name": "Shipstation.ai",
        "url": "https://firstsite.app/"
      }
    ],
    "sameAs": [
      "https://github.com/TeacherOp",
      "https://www.linkedin.com/in/neel-seth-323827138/",
      "https://x.com/NeelSeth7"
    ],
    "email": "neelseth48@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "description": "Serial entrepreneur and product leader with expertise in AI-powered platforms, SaaS, and e-commerce. Building innovative solutions that scale from 0 to millions of users."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
