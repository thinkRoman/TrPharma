'use client';
import Link from 'next/link';
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id='main-content' className='shell page-hero'>
      <p className='eyebrow'>LET’S TRY THAT AGAIN</p>
      <h1>
        This page is
        <br />
        <em>temporarily unavailable.</em>
      </h1>
      <p className='intro'>
        We couldn’t load the information just now. Try again, or contact our
        team for help with a product enquiry.
      </p>
      <div className='hero-actions'>
        <button type='button' className='button' onClick={reset}>
          Try again
        </button>
        <Link className='text-link' href='/contact-us'>
          Contact our team ↗
        </Link>
      </div>
    </main>
  );
}
