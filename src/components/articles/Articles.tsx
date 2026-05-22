'use client';

import { ArrowRight, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Article } from '@/components/articles/type';

export function Articles({ articles }: { articles: Article[] }) {
  if (!articles || articles.length === 0) return null;

  // Show max 3 articles on the home page
  const displayedArticles = articles.slice(0, 3);

  return (
    <section
      id='articles'
      className='relative py-16 lg:py-24 bg-background overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-8 lg:px-12'>
        {/* Section header */}
        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10'>
          <div className='max-w-2xl'>
            <p className='editorial-subheading mb-4'>ORZUV Health Magazine</p>
            <h2 className='editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6'>
              Health
              <br />
              <span className='text-accent'>Articles</span>
            </h2>
            <div className='w-16 h-0.5 bg-accent mb-6' />
            <p className='text-lg text-muted-foreground'>
              Expert insights on healthcare, wellness, and pharmaceutical
              education
            </p>
          </div>
          <Link
            href='https://orzuv.thinkroman.com/'
            target='_blank'
            className='inline-flex items-center gap-2 text-accent font-medium tracking-widest uppercase text-sm hover:text-foreground transition-colors'
          >
            See all articles
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>

        {/* Quick Summary for AEO */}
        <div className='quick-summary max-w-3xl mb-10'>
          <p className='text-xs font-semibold text-accent mb-2 tracking-widest uppercase'>
            What topics does TrPharma cover?
          </p>
          <p className='text-foreground/80 leading-relaxed text-lg'>
            Our health magazine ORZUV covers bone health, vitamin D awareness,
            nutraceutical education, preventive healthcare, and wellness topics
            relevant to Indian patients and healthcare professionals.
          </p>
        </div>

        {/* Articles grid - Cinematic cards */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedArticles.map((article) => (
            <Link
              href={article.url}
              key={article.id}
              target='_blank'
              className='group'
            >
              <article className='cinematic-card rounded-sm overflow-hidden h-full'>
                {/* Image */}
                <div className='aspect-[16/10] bg-muted relative overflow-hidden'>
                  <Image
                    src={article.featuredImage.url}
                    alt={article.title}
                    width={article.featuredImage.width}
                    height={article.featuredImage.height}
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500'
                  />
                </div>

                {/* Content */}
                <div className='p-8 space-y-4'>
                  <h3 className='text-xl font-medium text-foreground group-hover:text-accent transition-colors leading-snug tracking-tight'>
                    {article.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed line-clamp-2'>
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className='flex items-center justify-between pt-6 border-t border-border text-sm text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <User className='w-4 h-4' />
                      <span className='truncate max-w-[140px]'>
                        {article.author.name}
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Clock className='w-4 h-4' />
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Citation */}
        <div className='mt-10 text-center'>
          <p className='text-sm text-muted-foreground'>
            Articles reviewed by TrPharma Medical Team. For educational purposes
            only.
          </p>
        </div>
      </div>
    </section>
  );
}
