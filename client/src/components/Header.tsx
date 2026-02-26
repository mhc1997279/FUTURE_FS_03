import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO, ROUTES } from '../config/business';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className='sticky top-0 z-50 w-full bg-[var(--header)] border-b border-[var(--border)]/70 text-[var(--text)] shadow-sm'>
      <div className='container-custom mx-auto'>
        <div className="h-20 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <Link to={ROUTES.HOME} className='flex items-center gap-3' onClick={closeMenu}>
            <img src={logo} alt="Shining Star Building Materials Trading LLC" className='h-11 w-auto object-contain' />
            <span className='font-semibold text-lg sm:text-xl leading-tight text-black tracking-tight font-[600]'>Shining Star Building Materials Trading LLC</span>
          </Link>

          {/* Right: Nav + CTA */}
          <div className='hidden md:flex items-center gap-8'>
            <nav className='flex items-center gap-6'>
              <NavLink to={ROUTES.HOME} active={isActive(ROUTES.HOME)}>Home</NavLink>
              <NavLink to={ROUTES.PRODUCTS} active={isActive(ROUTES.PRODUCTS)}>Products</NavLink>
              <NavLink to={ROUTES.ABOUT} active={isActive(ROUTES.ABOUT)}>About</NavLink>
              <NavLink to={ROUTES.CONTACT} active={isActive(ROUTES.CONTACT)}>Contact</NavLink>
            </nav>
            <a href={BUSINESS_INFO.phoneUrl} className='btn-primary rounded-full text-sm py-2 px-5'>
              <PhoneCall size={18} />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className='md:hidden p-2 text-slate-300 hover:text-white' onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className='md:hidden bg-[var(--header)] border-t border-[var(--border)]'>
          <div className='flex flex-col p-4 space-y-4'>
            <MobileNavLink to={ROUTES.HOME} onClick={closeMenu} active={isActive(ROUTES.HOME)}>Home</MobileNavLink>
            <MobileNavLink to={ROUTES.PRODUCTS} onClick={closeMenu} active={isActive(ROUTES.PRODUCTS)}>Products</MobileNavLink>
            <MobileNavLink to={ROUTES.ABOUT} onClick={closeMenu} active={isActive(ROUTES.ABOUT)}>About</MobileNavLink>
            <MobileNavLink to={ROUTES.CONTACT} onClick={closeMenu} active={isActive(ROUTES.CONTACT)}>Contact</MobileNavLink>
            <a href={BUSINESS_INFO.phoneUrl} className='btn-primary w-full justify-center'>
              <PhoneCall size={18} /> {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, active }: { to: string, children: React.ReactNode, active: boolean }) {
  return (
    <Link to={to} className={`relative py-2 text-base font-medium tracking-[0.01em] transition-colors ${active ? 'text-[var(--primary)]' : 'text-black/80 hover:text-black'}`}>
      {children}
      {active && <span className='absolute -bottom-0.5 left-0 w-full h-0.5 bg-[var(--primary)] rounded-full' />}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick, active }: any) {
  return (
    <Link to={to} onClick={onClick} className={`block px-4 py-2 rounded-md text-sm font-medium ${active ? 'text-[var(--primary)] bg-[var(--muted)]' : 'text-black/70 hover:text-black hover:bg-[var(--muted)]/60'}`}>
      {children}
    </Link>
  );
}
