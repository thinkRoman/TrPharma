import { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import { siteConfig } from '@/constant/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'TrPharma | Trusted Pharmaceutical Partner for Health & Wellness',
    template: `%s | ${siteConfig.title}`,
  },
  description:
    'TrPharma, a division of ThinkRoman Ventures, delivers quality nutraceuticals and pharmaceutical products. Specializing in bone health, vitamin D, calcium supplements, and wellness solutions for healthcare professionals.',
  keywords: [
    'TrPharma',
    'pharmaceutical',
    'nutraceuticals',
    'bone health',
    'calcium supplements',
    'vitamin D',
    'KashCAL PLUS',
    'healthcare',
    'wellness',
    'ThinkRoman Ventures',
    'multivitamins',
    'nutritional supplements',
    'Indian pharma',
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: 'TrPharma',
    title: 'TrPharma | Trusted Pharmaceutical Partner',
    description:
      'Quality nutraceuticals and pharmaceutical products for bone health, vitamin D, and wellness.',
    images: [`/images/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/images/og.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='bg-background'>
      <head>
      <meta name="google-site-verification" content="Q5pgrJR97DtdVeEGSi2xIFaS1J3zHSHvLsMf3X11MjQ" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
