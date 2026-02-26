import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { Product } from '../data/products';
import { BUSINESS_INFO } from '../config/business';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;
  const [failed, setFailed] = useState(false);
  const initials = useMemo(() => product.name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join(''), [product.name]);

  const whatsappMessage = `Hello Shining Star Building Materials, I need a quote for: ${product.name}. Category: ${product.category}.`;
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm' onClick={onClose}>
      <div
        className='relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto'
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-2 bg-white/90 hover:bg-slate-100 rounded-full shadow transition-colors z-10'
        >
          <X size={18} className='text-slate-600' />
        </button>

        <div className='grid md:grid-cols-2'>
          {/* Image panel */}
          <div className='h-64 md:h-full min-h-[240px] bg-slate-50 flex items-center justify-center overflow-hidden border-r border-[var(--border)]'>
            {!failed ? (
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-full object-contain'
                onError={() => setFailed(true)}
              />
            ) : (
              <div className='flex flex-col items-center gap-3 text-slate-300 w-full h-full bg-slate-100'>
                <span className='text-6xl font-semibold'>{initials || 'NA'}</span>
                <span className='text-sm font-medium text-center px-4 text-slate-500'>{product.name}</span>
              </div>
            )}
          </div>

          {/* Details panel */}
          <div className='p-8 flex flex-col'>
            <span className='chip mb-2'>{product.category}</span>
            <h2 className='text-2xl font-bold text-slate-900 mb-3 leading-snug'>{product.name}</h2>
            {product.description && (
              <p className='text-slate-600 mb-6 leading-relaxed text-sm'>{product.description}</p>
            )}

            <div className='mb-6 border-t border-slate-100 pt-4'>
              <div className='flex justify-between py-1.5 text-sm'>
                <span className='text-slate-500'>Availability</span>
                <span className='text-green-600 font-semibold'>In Stock</span>
              </div>
            </div>

            <div className='mt-auto flex flex-col gap-3'>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary justify-center w-full text-sm'
              >
                <MessageCircle size={16} />
                WhatsApp Quote
              </a>
              <a
                href={BUSINESS_INFO.phoneUrl}
                className='btn-outline justify-center w-full text-sm'
              >
                <PhoneCall size={16} />
                Call Now
              </a>
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(product.category)}`}
                className='btn-outline-light justify-center w-full text-sm bg-slate-900 text-white border-slate-800 hover:bg-slate-800'
              >
                <Mail size={16} />
                Email Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
