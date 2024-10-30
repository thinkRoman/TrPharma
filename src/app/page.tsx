import * as React from 'react';

import { About } from '@/components/About';
import { Articles } from '@/components/articles/Articles';
import { CEO } from '@/components/CEO';
import { DrugCategories } from '@/components/DrugCategories';
import { Hero } from '@/components/Hero';
import { MissionVision } from '@/components/MissionVision';
import { Sunshine } from '@/components/Sunshine';

import { getArticles } from '@/action/articles';

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
      <CEO />
    </main>
  );
}
