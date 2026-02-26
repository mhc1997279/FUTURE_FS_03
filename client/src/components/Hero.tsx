import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../config/business';
import heroBg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <div className='relative text-white overflow-hidden min-h-[85vh] flex items-center'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className='absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />

      <div className='container-custom relative z-10 py-24 md:py-32'>
        <div className='max-w-3xl lg:max-w-5xl'>
          <h1 className='text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg text-white max-w-4xl lg:max-w-5xl'>
            <span className='block'>Your One-Stop</span>
            <span className='block lg:whitespace-nowrap'>Building Materials &amp; Hardware Supplier</span>
          </h1>
          <p className='text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed'>
            Building materials, tools, safety items, and site essentials — delivered fast across Dubai &amp; UAE.
          </p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Link to={ROUTES.PRODUCTS} className='btn-primary text-base'>
              Browse Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
