'use server';

import { unstable_cache } from 'next/cache';

export const getArticles = unstable_cache(
  async () => {
    const data = await fetch(
      'https://orzuv.thinkroman.com/api/orzuv/articles',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: process.env.ORZUV_API_SECRET as string,
        },
      }
    ).then((res) => res.json());
    return data;
  },
  ['articles'],
  {
    tags: ['articles'],
    revalidate: 86400,
  }
);
