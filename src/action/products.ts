'use server';

import { unstable_cache } from 'next/cache';

export const getProducts = unstable_cache(
  async () => {
    const res = await fetch('https://pharma247.thinkroman.com/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: process.env.PHARMA_API_SECRET as string,
      },
    });
    if (!res.ok)
      throw new Error(`Product catalog request failed (${res.status})`);
    const payload = await res.json();
    if (!Array.isArray(payload.data))
      throw new Error('Invalid product catalog response');
    return payload.data;
  },
  ['products'],
  {
    tags: ['products'],
    revalidate: 3600,
  }
);
