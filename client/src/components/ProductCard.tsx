import { MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../config/business';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const whatsappMessage = `Hello Shining Star Building Materials, I need a quote for: ${product.name}. Category: ${product.category}.`;
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className="group bg-[var(--surface)] rounded-xl border border-[var(--border)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-[var(--border)]">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="text-slate-200 font-bold text-4xl select-none group-hover:text-slate-300 transition-colors">
            {product.name.substring(0, 2).toUpperCase()}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-600 shadow-sm text-[10px] ring-1 ring-slate-900/5">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-900 mb-1 line-clamp-2 leading-tight group-hover:text-[var(--primary)] transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-2"
          >
            <Mail size={14} /> Email Quote
          </Link>
          <a
            href={whatsappUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition-colors"
            title="Request Quote via WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
