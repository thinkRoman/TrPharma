import { Metadata } from 'next';
import Link from 'next/link';

import { CEO } from '@/components/CEO';
import { Sunshine } from '@/components/Sunshine';
export const metadata: Metadata = { title: 'About TrPharma' };
export default function AboutPage() {
 return <main id='main-content'><section className='shell page-hero'><p className='eyebrow'>A DIVISION OF THINKROMAN VENTURES</p><h1>People. Purpose.<br /><em>Everyday care.</em></h1><p className='intro'>TrPharma brings together pharmaceutical and nutraceutical products across a range of therapeutic areas, supporting healthcare professionals and the communities they serve.</p><div className='about-links'><Link className='text-link' href='#ceo'>Meet our founder ↗</Link><Link className='text-link' href='/products'>Explore our products ↗</Link></div></section><CEO /><Sunshine /></main>;
}
