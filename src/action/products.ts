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
    }).then((res) => res.json());
    return res.data;
  },
  ['products'],
  {
    tags: ['products'],
    revalidate: 3600,
  }
);
