import * as React from 'react';

import { About } from '@/components/About';
import { Articles } from '@/components/articles/Articles';
import { CEO } from '@/components/CEO';
import { DrugCategories } from '@/components/DrugCategories';
import { HeroSection } from '@/components/Hero';
import { Sunshine } from '@/components/Sunshine';

import { getArticles } from '@/action/articles';

export default async function HomePage() {
  // const articles = await getArticles();

  return (
    <main className='min-h-screen bg-background'>
      <DrugCategories />
      <Sunshine />
      <CEO />
      {/* <Articles articles={articles} /> */}
    </main>
  );
}