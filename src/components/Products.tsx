'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

import {
  categories,
  Product,
  productCategory,
  productComposition,
  sortProducts,
} from '@/lib/products';

import { ProductCard } from '@/components/ProductCard';

export function Products({
  products,
  initialCategory = 'All products',
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [query, setQuery] = useState('');
  const availableCategories = [
    'All products',
    ...categories,
    ...Array.from(new Set(products.map(productCategory))).filter(
      (category) => !categories.includes(category)
    ),
  ];
  const [category, setCategory] = useState(
    availableCategories.includes(initialCategory)
      ? initialCategory
      : 'All products'
  );
  const filtered = sortProducts(products).filter(
    (product) =>
      (category === 'All products' || productCategory(product) === category) &&
      [
        product.heading,
        product.desc,
        productComposition(product),
        productCategory(product),
        ...(product.ingredients || []),
      ]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase())
  );
  return (
    <main id='main-content'>
      <section className='catalog-heading shell'>
        <p className='eyebrow'>THE TRPHARMA RANGE</p>
        <h1>
          Find the right
          <br />
          <em>product information.</em>
        </h1>
        <p className='intro'>
          Explore our pharmaceutical and nutraceutical range. Search by product
          name, ingredient, or therapeutic area.
        </p>
      </section>
      <section
        className='shell catalog-section'
        aria-label='Product catalog'
        id='products'
      >
        <div className='catalog-controls'>
          <label className='search-field'>
            <Search size={20} />
            <span className='sr-only'>Search products</span>
            <input
              type='search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search products or ingredients'
            />
            {query && (
              <button
                type='button'
                onClick={() => setQuery('')}
                aria-label='Clear search'
              >
                <X size={18} />
              </button>
            )}
          </label>
          <label className='category-select'>
            <span>Therapeutic area</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              {availableCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div className='catalog-results'>
          <p role='status'>
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {category !== 'All products' && ` in ${category.toLowerCase()}`}
          </p>
          {(query || category !== 'All products') && (
            <button
              type='button'
              className='text-link'
              onClick={() => {
                setQuery('');
                setCategory('All products');
              }}
            >
              Reset filters <X size={14} />
            </button>
          )}
        </div>
        <div className='product-grid'>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {!filtered.length && (
          <div className='empty-state'>
            <Search size={32} />
            <h2>No products found</h2>
            <p>
              Try a different name or ingredient, or reset the filters to see
              the full range.
            </p>
            <button
              type='button'
              className='button'
              onClick={() => {
                setQuery('');
                setCategory('All products');
              }}
            >
              Show all products
            </button>
          </div>
        )}
        <p className='catalog-note'>
          Product information is for reference. Please consult a healthcare
          professional for advice about medicines.
        </p>
      </section>
    </main>
  );
}
