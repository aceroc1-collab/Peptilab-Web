'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at 60% 40%, rgba(0,212,255,0.04) 0%, transparent 60%),
                     radial-gradient(ellipse at 20% 80%, rgba(184,160,106,0.06) 0%, transparent 50%)`,
      }} />

      {/* Grid lines SVG */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(184,160,106,1)" strokeWidth="0.5" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(184,160,106,1)" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="200" stroke="rgba(184,160,106,0.8)" fill="none" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="350" stroke="rgba(184,160,106,0.5)" fill="none" strokeWidth="0.5" />
        <circle cx="50%" cy="50%" r="500" stroke="rgba(184,160,106,0.3)" fill="none" strokeWidth="0.5" />
      </svg>

      {/* Rotating Molecule */}
      <motion.div
        className="absolute right-16 top-1/2"
        style={{ translateY: '-50%', opacity: 0.15, width: 280, height: 280 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="140" cy="80" r="12" fill="none" stroke="rgba(184,160,106,0.8)" strokeWidth="1.5" />
          <circle cx="200" cy="120" r="10" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1" />
          <circle cx="200" cy="180" r="12" fill="none" stroke="rgba(184,160,106,0.8)" strokeWidth="1.5" />
          <circle cx="140" cy="220" r="10" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1" />
          <circle cx="80" cy="180" r="12" fill="none" stroke="rgba(184,160,106,0.8)" strokeWidth="1.5" />
          <circle cx="80" cy="120" r="10" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1" />
          <circle cx="140" cy="150" r="20" fill="none" stroke="rgba(184,160,106,0.4)" strokeWidth="1" />
          <line x1="140" y1="80" x2="200" y2="120" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="200" y1="120" x2="200" y2="180" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="200" y1="180" x2="140" y2="220" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="140" y1="220" x2="80" y2="180" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="80" y1="180" x2="80" y2="120" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="80" y1="120" x2="140" y2="80" stroke="rgba(184,160,106,0.4)" strokeWidth="0.8" />
          <line x1="140" y1="80" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
          <line x1="200" y1="120" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
          <line x1="200" y1="180" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
          <line x1="140" y1="220" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
          <line x1="80" y1="180" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
          <line x1="80" y1="120" x2="140" y2="150" stroke="rgba(184,160,106,0.2)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-8">
        <motion.p
          className="text-[0.55rem] tracking-[0.5rem] mb-8 font-josefin"
          style={{ color: 'var(--gold)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PEPTILAB.VE
        </motion.p>

        <motion.h1
          className="font-cormorant font-light text-[clamp(3.5rem,8vw,7rem)] leading-none mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Precision{' '}
          <em className="italic" style={{ color: 'var(--gold)' }}>Peptide</em>
          <br />Science
        </motion.h1>

        <motion.p
          className="text-[0.7rem] tracking-[0.3rem] max-w-sm mx-auto mb-12 leading-8 font-josefin font-extralight"
          style={{ color: 'var(--text-dim)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ADVANCED PHARMACEUTICAL OPTIMIZATION · ENGINEERED FOR ELITE PERFORMANCE
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollTo('products')}
            className="font-josefin text-[0.65rem] tracking-[0.3rem] px-12 py-4 transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--gold)', color: 'var(--black)' }}
          >
            EXPLORAR CATÁLOGO
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="font-josefin font-thin text-[0.65rem] tracking-[0.3rem] px-12 py-4 transition-all duration-300"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'var(--text)',
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.borderColor = 'var(--gold)';
              (e.target as HTMLButtonElement).style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.target as HTMLButtonElement).style.color = 'var(--text)';
            }}
          >
            NUESTRA CIENCIA
          </button>
        </motion.div>

        {/* Subtle disclaimer */}
        <motion.p
          className="font-josefin tracking-[0.3rem] mt-8"
          style={{ fontSize: '0.42rem', color: 'rgba(90,88,86,0.5)', letterSpacing: '0.25rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          FOR RESEARCH USE ONLY
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, var(--gold))' }} />
      </motion.div>
    </section>
  );
}

