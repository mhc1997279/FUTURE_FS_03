import { Link } from "react-router-dom";
import aboutImg from "../assets/about.png";

const SUPPLY_ITEMS = [
  { label: "Material Handling", category: "Material Handling", emoji: "🛒" },
  { label: "Safety", category: "Safety", emoji: "🦺" },
  { label: "Construction Tools", category: "Construction Tools", emoji: "🛠️" },
  { label: "Painting & Finishing", category: "Painting & Finishing", emoji: "🎨" },
  { label: "General Items", category: "General Items", emoji: "📦" },
  { label: "Garden Tools", category: "Garden Tools", emoji: "🪴" }
];

const HELP_POINTS = [
  "Fast quotation turnaround",
  "Support for regular and bulk supply",
  "Delivery coordination across UAE",
  "Trusted product sourcing",
];

export default function About() {
  return (
    <div className="flex-grow bg-[var(--bg)]">
      {/* Header strip */}
      <section className="bg-slate-100 border-b">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">About</h1>
          <p className="text-sm text-gray-600 mt-2">Learn more about our business, mission, and vision.</p>
        </div>
      </section>

      <main className="space-y-12 py-12">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900">Who We Are</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Shining Star Building Materials Trading LLC supplies building materials, tools, and safety products across the UAE. We prioritize quick quotations, dependable availability, and clear communication to keep sites moving.</p>
            <p>Our team supports contractors, maintenance crews, and industrial buyers with responsive service and practical guidance, ensuring the right materials arrive when you need them.</p>
            <p>From day-to-day consumables to project-wide replenishment, we focus on reliability so your teams can work without delays.</p>
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to deliver high-quality building materials and hardware with fast turnaround, fair pricing, and attentive support. Every inquiry is handled as a priority—from single tools to full-site replenishment—so teams can work without delays.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--primary)]">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                We aim to be the most trusted supplier for construction, maintenance, and industrial projects in the region—known for consistent availability, honest guidance, and deliveries that arrive when promised. By keeping inventory ready and communication clear, we help customers keep every job moving.
              </p>
            </div>
          </div>
        </section>

        {/* What We Supply */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900">What We Supply</h3>
                <p className="text-slate-600">Key categories we keep ready for projects across the UAE.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {SUPPLY_ITEMS.map((item) => {
                  const link = `/products?category=${encodeURIComponent(item.category)}`;
                  return (
                    <Link
                      key={item.label}
                      to={link}
                      className="group bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-5 flex items-center gap-3 hover:border-[var(--primary)]/60 hover:shadow-md transition-all"
                    >
                      <span className="text-xl" aria-hidden>{item.emoji}</span>
                      <span className="font-semibold text-slate-900 text-sm md:text-base">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white h-full max-h-[420px]">
              <img src={aboutImg} alt="Team at work" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-3">Supplying sites across the UAE with reliable materials and safety products.</p>
        </section>

        {/* How We Help */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">How We Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HELP_POINTS.map((point) => (
              <div key={point} className="bg-white border border-slate-200 rounded-lg shadow-sm px-4 py-3 text-slate-700">
                {point}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
