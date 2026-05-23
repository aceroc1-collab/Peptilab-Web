'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from './CartContext';

export default function Navbar() {
  const { cartCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'NOSOTROS' },
    { id: 'products', label: 'PRODUCTOS' },
    { id: 'benefits', label: 'ESTÁNDARES' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'CONTACTO' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-3 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5,5,7,0.98)'
          : 'linear-gradient(to bottom, rgba(5,5,7,0.95), transparent)',
        borderBottom: scrolled
          ? '1px solid rgba(184,160,106,0.2)'
          : '1px solid rgba(184,160,106,0.08)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Logo */}
      <div className="cursor-pointer flex-shrink-0" onClick={() => scrollTo('hero')}>
        <Image
          src="/logo.jpg"
          alt="PEPTILAB"
          width={200}
          height={200}
          className="object-contain transition-all duration-300"
          style={{
            height: '90px',
            width: 'auto',
            filter: 'brightness(1.25) contrast(1.1) drop-shadow(0 0 12px rgba(184,160,106,0.25))',
            mixBlendMode: 'lighten',
          }}
          priority
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-[0.6rem] tracking-[0.25rem] transition-colors duration-300 font-josefin bg-transparent border-0 cursor-pointer"
            style={{ color: 'var(--text-dim)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Cart + Mobile */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleCart}
          className="relative text-[0.55rem] tracking-[0.2rem] font-josefin transition-all duration-300 cursor-pointer bg-transparent"
          style={{ border: '1px solid rgba(184,160,106,0.4)', padding: '0.5rem 1rem', color: 'var(--gold)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(184,160,106,0.4)')}
        >
          CARRITO
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[0.5rem] flex items-center justify-center font-bold"
              style={{ background: 'var(--gold)', color: 'var(--black)' }}>
              {cartCount}
            </span>
          )}
        </button>

        <button
          className="md:hidden cursor-pointer bg-transparent border-0 p-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1 w-5">
            <span className="block h-px" style={{ background: 'var(--gold)' }} />
            <span className="block h-px" style={{ background: 'var(--gold)' }} />
            <span className="block h-px" style={{ background: 'var(--gold)' }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 py-6 flex flex-col items-center gap-5"
          style={{ background: 'rgba(5,5,7,0.98)', borderBottom: '1px solid rgba(184,160,106,0.15)' }}>
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className="text-[0.6rem] tracking-[0.3rem] font-josefin bg-transparent border-0 cursor-pointer"
              style={{ color: 'var(--text-dim)' }}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
