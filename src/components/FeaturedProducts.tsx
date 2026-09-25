'use client';

import {
  ArrowUpRight,
  FlaskConical,
  PackageCheck,
  Pause,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface FeaturedProduct {
  slug: string;
  heading: string;
  img: string;
}

export function FeaturedProducts({
  products,
}: {
  products: FeaturedProduct[];
}) {
  const [index, setIndex] = useState(0);
  const [canRotate, setCanRotate] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const product = products[index] || products[0];
  const multiple = products.length > 1;
  const rotating =
    canRotate && multiple && !paused && !hovered && !focused && visible;

  useEffect(() => {
    const desktop = window.matchMedia(
      '(min-width: 701px) and (hover: hover) and (pointer: fine)'
    );
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () =>
      setCanRotate(desktop.matches && !reducedMotion.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    update();
    updateVisibility();
    desktop.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      desktop.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % products.length),
      6500
    );
    return () => window.clearInterval(timer);
  }, [rotating, products.length]);

  return (
    <section
      className='hero-showcase'
      aria-label='Featured products'
      aria-roledescription='carousel'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className='showcase-top'>
        <span>SCIENCE. CARE. EVERYDAY.</span>
        <FlaskConical size={22} strokeWidth={1.4} />
      </div>
      <div
        className='showcase-image showcase-slides'
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start || !multiple) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5)
            setIndex(
              (current) =>
                (current + (dx < 0 ? 1 : -1) + products.length) %
                products.length
            );
        }}
      >
        {products.map((item, position) => (
          <div
            key={item.slug}
            className={`showcase-slide ${
              position === index ? 'is-active' : ''
            }`}
            aria-hidden={position !== index}
          >
            {item.img ? (
              <Image
                src={item.img}
                alt={item.heading}
                width={560}
                height={420}
                sizes='(max-width: 700px) 90vw, 45vw'
                priority={position === 0}
                loading={position === 0 ? undefined : 'eager'}
              />
            ) : (
              <PackageCheck size={100} strokeWidth={1} />
            )}
          </div>
        ))}
        {!products.length && <PackageCheck size={100} strokeWidth={1} />}
      </div>
      <div
        className='showcase-caption'
        aria-live={rotating ? 'off' : 'polite'}
        aria-atomic='true'
      >
        <div>
          <span>
            FROM OUR RANGE
            {multiple ? ` · ${index + 1} / ${products.length}` : ''}
          </span>
          <h2 key={product?.slug}>
            {product?.heading || 'Made for everyday care'}
          </h2>
        </div>
        <Link
          href={product ? `/products/${product.slug}` : '/products'}
          aria-label={
            product ? `Explore ${product.heading}` : 'Explore products'
          }
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
      {multiple && (
        <div className='showcase-controls'>
          <div className='showcase-dots' aria-label='Choose a featured product'>
            {products.map((item, position) => (
              <button
                type='button'
                key={item.slug}
                aria-label={`Show ${item.heading}`}
                aria-pressed={index === position}
                onClick={() => setIndex(position)}
              >
                <span />
              </button>
            ))}
          </div>
          {canRotate ? (
            <button
              type='button'
              className='showcase-pause'
              onClick={() => setPaused(!paused)}
              aria-label={
                paused ? 'Play product rotation' : 'Pause product rotation'
              }
            >
              {paused ? <Play size={13} /> : <Pause size={13} />}
              <span>{paused ? 'Play' : 'Pause'}</span>
            </button>
          ) : (
            <span className='showcase-hint'>Explore our range</span>
          )}
        </div>
      )}
    </section>
  );
}
