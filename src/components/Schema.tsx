export function OrganizationSchema() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ThinkRoman Pharma',
          url: 'https://thinkromanpharma.com',
          logo: 'https://thinkromanpharma.com/images/logo.png',
        }),
      }}
    />
  );
}

export function ProductSchema({
  product,
}: {
  product: { name: string; description: string; image?: string };
}) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.image || 'https://thinkromanpharma.com/images/og-image.jpg',
          brand: {
            '@type': 'Brand',
            name: 'TrPharma',
          },
        }),
      }}
    />
  );
}
