import { productCategory, productComposition, productSummary, sortProducts } from './products';

const block = (text) => ({ _type: 'block', _key: text, style: 'normal', markDefs: [], children: [{ _type: 'span', _key: text, text, marks: [] }] });

describe('catalog data presentation', () => {
  it('preserves the mixed-case legacy cardiovascular slug', () => {
    expect(productCategory({ slug: 'zooviStat-20' })).toBe('Cardiovascular');
  });
  it('keeps new feed categories available instead of misclassifying them', () => {
    expect(productCategory({ slug: 'new-product', category: 'New category' })).toBe('New category');
  });
  it('extracts the published composition without interpreting the medical copy', () => {
    expect(productComposition({ longDesc: [block('Generic Name'), block('Ingredient A 500 mg + Ingredient B 125 mg')] })).toBe('Ingredient A 500 mg + Ingredient B 125 mg');
  });
  it('prefers structured ingredients and does not invent missing composition', () => {
    expect(productComposition({ ingredients: ['A', 'B'], longDesc: [block('Generic Name'), block('C')] })).toBe('A · B');
    expect(productComposition({ longDesc: [block('Product Information')] })).toBe('');
    expect(productSummary({ slug: 'new-product', desc: 'Promotional claims' })).not.toContain('Promotional claims');
  });
  it('keeps ranked products first without mutating the feed', () => {
    const products = [{ id: 'unranked' }, { id: 'second', orderRank: 2 }, { id: 'first', orderRank: 1 }];
    expect(sortProducts(products).map(product => product.id)).toEqual(['first', 'second', 'unranked']);
    expect(products[0].id).toBe('unranked');
  });
});
