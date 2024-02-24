import Image from 'next/image';
import React from 'react';

import { Article } from '@/components/articles/type';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className='flex h-full flex-col justify-between overflow-hidden rounded-lg shadow'>
      <div className=''>
        <Image
          className='h-36 w-full object-cover object-center lg:h-48'
          src={article.featuredImage.url}
          alt={article.title}
          width={article.featuredImage.width}
          height={article.featuredImage.height}
        />
        <div className='px-4 py-2'>
          <h1 className='title-font mb-3 text-base font-medium text-gray-900 md:text-lg'>
            {article.title}
          </h1>
          <div className='flex justify-start'>
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={30}
              height={30}
              className='mr-3 h-8 w-8 rounded-full'
            />
            <div className='flex flex-col'>
              <p className='text-xs font-medium'>{article.author.name}</p>
              <div className='flex flex-wrap items-center text-xs text-gray-500'>
                <span className='mr-2'>
                  {new Date(article.publishedAt).toDateString()}
                </span>
                <span>·&nbsp;{article.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
