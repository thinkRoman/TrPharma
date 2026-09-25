import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Page not found' };
export default function NotFound() {
  return (
    <main id='main-content' className='shell page-hero'>
      <p className='eyebrow'>404 · PAGE NOT FOUND</p>
      <h1>
        Let’s find
        <br />
        <em>your way back.</em>
      </h1>
      <p className='intro'>
        This page may have moved. Browse our product catalog or head back to the
        homepage.
      </p>
      <div className='hero-actions'>
        <Link className='button' href='/products'>
          Explore products
        </Link>
        <Link className='text-link' href='/'>
          Back to home ↗
        </Link>
      </div>
    </main>
  );
}
