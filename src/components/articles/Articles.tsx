'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useWindowSize } from 'rooks';

import ArticleCard from '@/components/articles/ArticleCard';
import { Article } from '@/components/articles/type';
import { Container } from '@/components/Container';

export function Articles({ articles }: { articles: Article[] }) {
  const width = useWindowSize().innerWidth;
  const maxArticles = width && width > 768 ? 2 : 1;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      currentIndex === 0
        ? articles.length - maxArticles
        : currentIndex - maxArticles
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === articles.length - maxArticles
        ? 0
        : currentIndex + maxArticles
    );
  };

  if (!articles) return null;

  return (
    <div id='wellness' className='bg-[#E7DEE0]'>
      <Container className='max-w-5xl pb-6 pt-8'>
        <div className='flex flex-col items-start justify-between gap-8 px-4 sm:flex-row'>
          <div className='flex w-full flex-col gap-4 sm:w-1/4 sm:pt-4'>
            <p className='text-lg font-semibold md:text-xl lg:text-2xl'>
              Read Articles From ORZUV Our Health Magazine
            </p>
            <Link
              href='https://orzuv.thinkroman.com/'
              target='_blank'
              className='rounded bg-blue-500 px-4 py-2 text-center font-medium text-white hover:bg-blue-600 md:w-40 md:text-lg'
            >
              See all articles
            </Link>
          </div>
          <div className='w-full sm:w-3/4'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              {articles
                .slice(currentIndex, currentIndex + maxArticles)
                .map((article) => (
                  <Link
                    href={article.url}
                    key={article.id}
                    target='_blank'
                    className='col-span-1 cursor-pointer rounded-lg bg-white'
                  >
                    <ArticleCard article={article} />
                  </Link>
                ))}
            </div>
            <div className='mt-4 flex w-full items-center justify-end space-x-4'>
              <button
                className='rounded-full bg-gray-200 p-2 shadow-md focus:outline-none'
                onClick={handlePrevClick}
              >
                <ChevronLeftIcon className='h-5 w-5' />
              </button>
              <button
                className='rounded-full bg-black p-2 text-white shadow-md focus:outline-none'
                onClick={handleNextClick}
              >
                <ChevronRightIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
