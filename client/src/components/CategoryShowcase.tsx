import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-[var(--bg)]">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Browse by Category</h2>
            <p className="text-slate-600 max-w-xl">Jump straight to the materials or tools you need.</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all text-sm">
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={'/products?category=' + encodeURIComponent(cat.id)}
              className="group bg-white border border-[var(--muted)]/80 rounded-xl shadow-sm hover:border-[var(--primary)]/60 hover:shadow-md transition-all p-4 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--muted)]/60 flex items-center justify-center text-lg font-semibold text-[var(--primary)]">
                {categoryEmoji(cat.id)}
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900 leading-tight">{cat.name}</p>
                <ArrowRight size={16} className="text-[var(--primary)] opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link to="/products" className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold text-sm">
            View All Categories <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function categoryEmoji(id: string): string {
  const map: Record<string, string> = {
    "Material Handling":    "🪣",
    "Safety":               "🦺",
    "Construction Tools":   "🔨",
    "Painting & Finishing": "🖌️",
    "General Items":        "🔩",
    "Cleaning Tools":       "🧹",
    "General Hardware":     "🧰",
    "Construction Equipment":"⚙️",
    "Hardware & Trolley Parts": "🛞",
    "Garden Tools":         "🪴",
    "Hand Tools":           "🛠️",
    "Safety Wear":          "🥾",
    "Marking Tools":        "✏️",
    "Abrasives & Finishing Materials": "🧽",
  };
  return map[id] ?? "📦";
}
