import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import { Truck, ShieldCheck, BadgeDollarSign, HardHat } from 'lucide-react';

export default function Index() {
  return (
    <>
      <Hero />

      {/* Why Choose Us */}
      <section className='py-20 bg-white'>
        <div className='container-custom'>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>Why Choose Us</h2>
            <p className='text-slate-500'>
              Reliable supply, genuine products, and competitive pricing for all your construction and building needs.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <FeatureCard
              icon={<Truck className='w-8 h-8 text-[var(--primary)]' />}
              title='Fast Quotes & Support'
              desc='Quick responses on price and availability to keep your site moving.'
            />
            <FeatureCard
              icon={<ShieldCheck className='w-8 h-8 text-[var(--primary)]' />}
              title='Wide Product Range'
              desc='Materials, tools, safety, and hardware—from one supplier.'
            />
            <FeatureCard
              icon={<BadgeDollarSign className='w-8 h-8 text-[var(--primary)]' />}
              title='Reliable Delivery'
              desc='Coordinated deliveries across Dubai & UAE with careful handling.'
            />
            <FeatureCard
              icon={<HardHat className='w-8 h-8 text-[var(--primary)]' />}
              title='Trusted Quality'
              desc='Products vetted for durability so crews can work with confidence.'
            />
          </div>
        </div>
      </section>

      <CategoryShowcase />
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className='p-6 rounded-xl bg-[#F7F8FA] border border-slate-100 hover:shadow-md transition-all text-center group'>
      <div className='bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform'>
        {icon}
      </div>
      <h3 className='text-lg font-bold text-slate-900 mb-2'>{title}</h3>
      <p className='text-slate-500 text-sm leading-relaxed'>{desc}</p>
    </div>
  );
}
