'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ProductLink } from '@/components/ProductLink';

interface Product {
  id: string;
  slug: string;
  img: string;
  heading: string;
  desc: string;
  tagline: string;
  orderRank?: number;
  category?: string;
  ingredients?: string[];
  conditions?: string[];
}

const faqs = [
  {
    question: 'What therapeutic categories does TrPharma cover?',
    answer:
      'TrPharma offers products across 8 therapeutic categories: Antibiotics (KashMOX, KashFEX, KashZEE), Pain Management (One87 Plus, ComforTide, Reliefon Forte), Gastric Care (AcidBlock range), Respiratory (KashAIR-M), Vitamins & Supplements (880 series, Sohar-D, KashCAL Plus), Women\'s Health (280 Plus, Progestasyn), Diabetes Care (TC-A1c), and Cardiovascular (SUWAKE, zooviStat).',
  },
  {
    question: 'Are TrPharma products manufactured to international standards?',
    answer:
      'Yes, all TrPharma products are manufactured to IP (Indian Pharmacopoeia) and USP (United States Pharmacopeia) standards. Our manufacturing partners follow WHO-GMP guidelines ensuring consistent quality, safety, and efficacy across our entire product range.',
  },
  {
    question: 'Which TrPharma product is best for Vitamin D deficiency?',
    answer:
      "Sohar-D 60K is TrPharma's specialized solution for Vitamin D deficiency. Each sachet contains 60,000 IU of Cholecalciferol (Vitamin D3), providing effective supplementation for bone health and immune support. It's particularly beneficial for Indian office workers and urban populations with limited sun exposure.",
  },
  {
    question: 'Does TrPharma offer prenatal supplements?',
    answer:
      "Yes, TrPharma's Women's Health range includes 280 PLUS, a comprehensive prenatal supplement with Iron, Folic Acid, and Zinc—essential nutrients for the 280 days of pregnancy. We also offer Progestasyn-200 for hormonal balance and pregnancy support.",
  },
];

export function Products({ products }: { products: Product[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  // Detect hash on mount and scroll to + highlight that product
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    // Small delay to let the grid render
    const scrollTimeout = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setHighlightedId(hash);

        // Auto-fade after 4 seconds
        const fadeTimeout = setTimeout(() => setHighlightedId(null), 4000);
        return () => clearTimeout(fadeTimeout);
      }
    }, 300);

    return () => clearTimeout(scrollTimeout);
  }, []);
  // Sort products: lowest orderRank first, then products without orderRank
  const sortedProducts = [...products].sort((a, b) => {
    if (a.orderRank !== undefined && b.orderRank !== undefined) {
      return a.orderRank - b.orderRank;
    }
    if (a.orderRank !== undefined) return -1;
    if (b.orderRank !== undefined) return 1;
    return 0;
  });

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='pt-24 md:pt-32 pb-10 md:pb-20 px-6 lg:px-8 bg-primary'>
        <div className='max-w-7xl mx-auto'>
          <p className='text-accent text-sm font-medium tracking-[0.2em] uppercase mb-6'>
            TrPharma Product Catalog
          </p>
          <h1 className='font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[0.95] tracking-tight mb-8'>
            Our Pharmaceutical
            <br />
            <span className='text-accent'>Products</span>
          </h1>
          <p className='text-primary-foreground/80 text-xl md:text-2xl max-w-2xl leading-relaxed font-light'>
            Trusted formulations-Quality
            you can depend on.
          </p>

          {/* Quick Summary for AI/SEO */}
          <div className='hidden md:block mt-12 p-6 bg-secondary/20 rounded-lg border border-accent/20'>
            <p className='text-primary-foreground/90 text-sm leading-relaxed'>
              <strong className='text-accent'>Our Products:</strong> TrPharma specializes in pharmaceuticals and nutraceuticals across multiple therapeutic categories including antibiotics, pain management, bone and joint health, women’s health, gastrointestinal care, respiratory and allergy care, cardiac and metabolic health, diabetes support, vitamins, nutrition, and preventive wellness solutions
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id='products' className='py-20 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {sortedProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className='block'>
                <article
                  id={product.id}
                  className={`group bg-card rounded-2xl overflow-hidden border transition-all duration-700 hover:shadow-2xl relative h-full ${
                    highlightedId === product.id
                      ? 'ring-2 ring-accent ring-offset-2 ring-offset-background border-accent shadow-2xl shadow-accent/20 scale-[1.02]'
                      : highlightedId
                        ? 'opacity-40 border-border'
                        : 'border-border hover:border-accent/30'
                  }`}
                  itemScope
                  itemType='https://schema.org/Product'
                >
                  {/* Product Image */}
                  <div className='relative h-56 bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden'>
                    {product.img ? (
                      <Image
                        src={product.img}
                        alt={product.heading}
                        width={400}
                        height={300}
                        loading='lazy'
                        className='relative z-0 w-auto h-full object-contain group-hover:scale-110 transition-transform duration-500'
                      />
                    ) : (
                      <div className='relative z-0 w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500'>
                        <span className='font-serif text-3xl font-bold text-primary/40'>
                          {product.heading.charAt(0)}
                        </span>
                      </div>
                    )}
                    {/* Copy Link */}
                  <div className='z-20'>
                    <ProductLink id={product.slug} />
                  </div>
                  </div>

                  {/* Product Content */}
                  <div className='p-6'>
                    {/* Product Name */}
                    <h3
                      className='font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors'
                      itemProp='name'
                    >
                      {product.heading}
                    </h3>

                    {/* Tagline */}
                    <p className='text-accent font-medium text-sm tracking-wide mb-4'>
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p
                      className='text-muted-foreground text-sm leading-relaxed mb-6'
                      itemProp='description'
                    >
                      {product.desc}
                    </p>

                    {/* Hidden structured data for AI */}
                    <meta itemProp='brand' content='TrPharma' />
                    <meta
                      itemProp='manufacturer'
                      content='ThinkRoman Ventures LLP'
                    />
                  </div>
                </article>
              </Link>
            ))}
          </div>


        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className='py-20 px-6 lg:px-8 bg-muted/50'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12'>
            Frequently Asked Questions
          </h2>

          <div
            className='space-y-4'
            itemScope
            itemType='https://schema.org/FAQPage'
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp='mainEntity'
                itemType='https://schema.org/Question'
                className='bg-card rounded-xl border border-border overflow-hidden'
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className='w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors'
                >
                  <h3
                    itemProp='name'
                    className='font-semibold text-foreground text-lg pr-4'
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className='overflow-hidden'>
                    <div
                      itemScope
                      itemProp='acceptedAnswer'
                      itemType='https://schema.org/Answer'
                      className='px-6 pb-6'
                    >
                      <p
                        itemProp='text'
                        className='text-muted-foreground leading-relaxed'
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
