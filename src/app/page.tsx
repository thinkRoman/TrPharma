import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FlaskConical,
  HeartHandshake,
  PackageCheck,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Product, sortProducts } from '@/lib/products';

import { DrugCategories } from '@/components/DrugCategories';
import { ProductCard } from '@/components/ProductCard';
import { Sunshine } from '@/components/Sunshine';

import { getProducts } from '@/action/products';

export const metadata: Metadata = {
  title: 'TrPharma | Care, in every formulation',
  description:
    'Explore pharmaceuticals and nutraceuticals from TrPharma, a division of ThinkRoman Ventures. Product information, therapeutic areas, and partnership enquiries.',
};

export default async function HomePage() {
  const products: Product[] = await getProducts();
  const featuredNames = ['kashcal-tm-plus', '880-plus', 'sohar-d-60k'];
  const featured = featuredNames
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
  const selection = featured.length
    ? featured
    : sortProducts(products).slice(0, 3);
  const heroProduct = selection[0];
  return (
    <main id='main-content'>
      <section className='shell home-hero'>
        <div className='hero-copy'>
          <p className='eyebrow'>TRPHARMA · FROM THINKROMAN</p>
          <h1>
            Care, in every
            <br />
            <em>formulation.</em>
          </h1>
          <p className='intro'>
            Pharmaceuticals and nutraceuticals for everyday healthcare. Discover
            our range, with clear information at every step.
          </p>
          <div className='hero-actions'>
            <Link href='/products' className='button'>
              Explore products <ArrowRight size={18} />
            </Link>
            <Link href='/about' className='text-link'>
              Get to know us <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className='hero-caption'>
            <span />
            Supporting healthcare across India
          </p>
        </div>
        <div className='hero-showcase'>
          <div className='showcase-top'>
            <span>SCIENCE. CARE. EVERYDAY.</span>
            <FlaskConical size={22} strokeWidth={1.4} />
          </div>
          <div className='showcase-image'>
            {heroProduct?.img ? (
              <Image
                src={heroProduct.img}
                alt={heroProduct.heading}
                width={560}
                height={420}
                sizes='(max-width: 768px) 90vw, 45vw'
                priority
              />
            ) : (
              <PackageCheck size={100} strokeWidth={1} />
            )}
          </div>
          <div className='showcase-caption'>
            <div>
              <span>FROM OUR RANGE</span>
              <h2>{heroProduct?.heading || 'Made for everyday care'}</h2>
            </div>
            <Link
              href={heroProduct ? `/products/${heroProduct.slug}` : '/products'}
              aria-label={
                heroProduct
                  ? `Explore ${heroProduct.heading}`
                  : 'Explore products'
              }
            >
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </section>
      <div className='principles-bar'>
        <div className='shell'>
          <span>
            <FlaskConical size={19} /> Pharmaceuticals & nutraceuticals
          </span>
          <span>
            <PackageCheck size={19} /> Clear product information
          </span>
          <span>
            <HeartHandshake size={19} /> A ThinkRoman division
          </span>
        </div>
      </div>
      <DrugCategories />
      <section className='section shell' id='products'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>GET TO KNOW OUR RANGE</p>
            <h2>Everyday care. Thoughtfully formulated.</h2>
          </div>
          <Link href='/products' className='text-link'>
            Browse the catalog <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className='product-grid'>
          {selection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className='section company-section'>
        <div className='shell company-layout'>
          <div>
            <p className='eyebrow'>THE PEOPLE BEHIND TRPHARMA</p>
            <h2>
              A shared commitment
              <br />
              <em>to better care.</em>
            </h2>
          </div>
          <div>
            <p className='intro'>
              TrPharma is the pharmaceutical and nutraceutical division of
              ThinkRoman Ventures, led by physician and founder Dr. Ashwani
              Dhar.
            </p>
            <ul className='check-list'>
              <li>
                <Check size={18} />A range spanning multiple therapeutic areas
              </li>
              <li>
                <Check size={18} />
                Product details to support informed conversations
              </li>
              <li>
                <Check size={18} />
                Connections with healthcare professionals and distributors
              </li>
            </ul>
            <Link className='text-link' href='/about'>
              More about TrPharma <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className='section shell' id='partners'>
        <div className='section-heading'>
          <div>
            <p className='eyebrow'>WORKING TOGETHER</p>
            <h2>Good care starts with connection.</h2>
          </div>
        </div>
        <div className='partner-grid'>
          <Link href='/contact-us#professionals' className='partner-card'>
            <StethoscopeIcon />
            <h3>For healthcare professionals</h3>
            <p>Explore our range and get in touch for product information.</p>
            <span className='text-link'>
              Connect with our team <ArrowUpRight size={18} />
            </span>
          </Link>
          <Link
            href='https://pharmacy.thinkroman.com/distributor-form'
            className='partner-card'
          >
            <PackageCheck size={28} strokeWidth={1.4} />
            <h3>For distribution partners</h3>
            <p>Start a conversation about bringing TrPharma to your network.</p>
            <span className='text-link'>
              Enquire about a partnership <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>
      <Sunshine />
      <section className='section shell faq-layout' id='faqs'>
        <div>
          <p className='eyebrow'>A LITTLE MORE CLARITY</p>
          <h2>
            Good questions.
            <br />
            Clear answers.
          </h2>
          <Link href='/contact-us' className='text-link'>
            Ask our team <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className='faq-list'>
          {[
            [
              'What does TrPharma offer?',
              'Our range includes pharmaceuticals and nutraceuticals across antibiotics, pain management, gastric and respiratory care, vitamins and supplements, women’s health, diabetes care, and cardiovascular health.',
            ],
            [
              'Where can I find product information?',
              'Open our product catalog and search by name or ingredient. Each product has its own page with the information available for that formulation.',
            ],
            [
              'How can I enquire about distribution?',
              'Use the distribution partnership link above or contact our team at trpharma@thinkroman.com.',
            ],
          ].map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden='true'>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
function StethoscopeIcon() {
  return <HeartHandshake size={28} strokeWidth={1.4} />;
}
