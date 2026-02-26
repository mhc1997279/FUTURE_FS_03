import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import ProductModal from '../components/ProductModal';
import { CATEGORIES, PRODUCTS, Product } from '../data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategory = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description ?? '').toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className='min-h-screen bg-[var(--bg)]'>
      <section className="bg-slate-100 border-b">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">Product Catalog</h1>
          <p className="text-sm text-gray-600 mt-2">Building materials, hardware, and safety gear ready to ship across the UAE.</p>
        </div>
      </section>

      <div className='container-custom py-10'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Sidebar — categories */}
          <aside className='lg:w-60 shrink-0'>
            <div className='bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden shadow-sm'>
              <div className='px-4 py-3 bg-slate-50 border-b border-[var(--border)]'>
                <span className='text-[11px] font-bold text-slate-500 uppercase tracking-[0.18em]'>Categories</span>
              </div>
              <nav className='flex flex-col'>
                <CategoryButton
                  label={`All Products (${PRODUCTS.length})`}
                  active={!activeCategory}
                  onClick={() => setSearchParams({})}
                />
                {CATEGORIES.map(cat => {
                  const count = PRODUCTS.filter(p => p.category === cat.id).length;
                  return (
                    <CategoryButton
                      key={cat.id}
                      label={`${cat.name} (${count})`}
                      active={activeCategory === cat.id}
                      onClick={() => setSearchParams({ category: cat.id })}
                    />
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className='flex-1 min-w-0'>
            {/* Search bar */}
            <div className='relative mb-6'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400' size={18} />
              <input
                type='text'
                placeholder='Search products or categories...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm shadow-sm'
              />
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                ))}
              </div>
            ) : (
              <div className='text-center py-20 text-slate-400'>
                <p className='text-xl mb-3'>No products found.</p>
                <button
                  onClick={() => { setSearchParams({}); setSearchQuery(''); }}
                  className='text-[var(--primary)] hover:underline text-sm'
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

function CategoryButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left px-4 py-2.5 text-sm font-medium transition-colors border-b border-[var(--border)] last:border-0 ${active ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
    >
      {label}
    </button>
  );
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (p: Product) => void }) {
  const [failed, setFailed] = useState(false);
  const initials = product.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase())
    .join('');

  return (
    <div className='bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col'>
      {/* Image area */}
      <div className='h-52 bg-slate-50 border-b border-[var(--border)] flex items-center justify-center overflow-hidden p-4 relative'>
        {!failed ? (
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-contain'
            onError={() => setFailed(true)}
            loading='lazy'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-semibold text-2xl'>
            {initials || 'NA'}
          </div>
        )}
        <span className='absolute top-3 left-3 bg-white/90 backdrop-blur text-[11px] font-semibold px-2 py-1 rounded-full text-slate-700 border border-[var(--border)]'>
          {product.category}
        </span>
      </div>

      {/* Body */}
      <div className='p-4 flex flex-col flex-1 gap-2'>
        <h3 className='font-bold text-slate-900 leading-snug'>{product.name}</h3>
        {product.description && (
          <p className='text-slate-600 text-sm leading-relaxed line-clamp-2'>{product.description}</p>
        )}
        <div className='mt-auto pt-2'>
          <button
            onClick={() => onSelect(product)}
            className='w-full py-2.5 rounded-lg border border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center gap-2'
          >
            Request Quote <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
