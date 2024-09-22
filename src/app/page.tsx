import * as React from 'react';

import { About } from '@/components/About';
import { Articles } from '@/components/articles/Articles';
import { DrugCategories } from '@/components/DrugCategories';
import { Hero } from '@/components/Hero';
import { MissionVision } from '@/components/MissionVision';
import { Sunshine } from '@/components/Sunshine';

export const revalidate = 86400; // 24 hours

async function getArticles() {
  const data = await fetch('https://orzuv.thinkroman.com/api/orzuv/articles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: process.env.ORZUV_API_SECRET as string,
    },
  }).then((res) => res.json());
  return data;
}

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main>
      <Hero />
      <DrugCategories />
      <MissionVision />
      <Articles articles={articles} />
      <Sunshine />
      <About />
    </main>
  );
}
