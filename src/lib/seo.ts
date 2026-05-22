import { Metadata } from 'next';

const SITE_URL = 'https://thinkromanpharma.com';

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/images/og-image.jpg',
  path = '',
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),

    openGraph: {
      title,
      description,
      url,
      siteName: 'ThinkRoman Pharma',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
