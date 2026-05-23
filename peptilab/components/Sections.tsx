use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// ─── TICKER ─────────────────────────────────────────────────────────────────
export function Ticker() {
  const items = [
    'PHARMACEUTICAL GRADE', 'HIGH PURITY ≥99%', 'LAB TESTED',
    'ADVANCED RESEARCH', 'ELITE PERFORMANCE', 'SCIENCE · QUALITY · RESULTS',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden" style={{
      background: 'var(--dark2)',
      borderTop: '1px solid rgba(184,160,106,0.15)',
      borderBottom: '1px solid rgba(184,160,106,0.15)',
      padding: '0.8rem 0',
    }}>
      <div style={{ display: 'inline-flex', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-[0.55rem] tracking-[0.4rem] font-josefin px-10" style={{ color: 'var(--gold)' }}>
            {item} <span style={{ color: 'var(--text-muted)', margin: '0 1rem' }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export function About() {
  const badges = [
    'SÍNTESIS PEPTÍDICA DE FASE SÓLIDA (SPPS)',
    'ANÁLISIS HPLC — PUREZA GARANTIZADA ≥99%',
    'ESPECTROMETRÍA DE MASAS CERTIFICADA',
    'ALMACENAMIENTO ÓPTIMO Y EMBALAJE ESPECIALIZADO',
  ];
  const stats = [
    { num: '99.7%', label: 'PUREZA PROMEDIO' },
    { num: '+50', label: 'PÉPTIDOS ACTIVOS' },
    { num: 'COA', label: 'CADA PRODUCTO' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center" style={{ background: 'var(--dark)' }}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>QUIÉNES SOMOS</p>
        <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] mb-6">
          Donde la <em className="italic" style={{ color: 'var(--gold)' }}>Ciencia</em><br />Encuentra la Excelencia
        </h2>
        <p className="text-[0.7rem] tracking-[0.1rem] leading-8 mb-10" style={{ color: 'var(--text-dim)', maxWidth: 540 }}>
          PEPTILAB representa la convergencia de rigor científico y estándares farmacéuticos de élite. Cada producto es sintetizado bajo protocolos de máxima pureza, respaldado por análisis exhaustivos de control de calidad.
        </p>
        <div className="space-y-3">
          {badges.map(b => (
            <div key={b} className="flex items-center gap-4 p-4" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-0.5 h-8 flex-shrink-0" style={{ background: 'var(--gold)' }} />
              <span className="text-[0.6rem] tracking-[0.2rem] font-josefin" style={{ color: 'var(--text-dim)' }}>{b}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
        <div className="relative p-10" style={{ background: 'var(--dark2)', border: '1px solid rgba(184,160,106,0.2)' }}>
          <div className="absolute -top-px left-8 w-16 h-0.5" style={{ background: 'var(--gold)' }} />
          <svg viewBox="0 0 400 180" className="w-full" style={{ opacity: 0.6 }} xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="20" fontFamily="'Space Mono',monospace" fontSize="7" fill="rgba(184,160,106,0.7)" letterSpacing="2">PEPTIDE CHAIN ANALYSIS</text>
            <text x="10" y="38" fontFamily="'Space Mono',monospace" fontSize="6" fill="rgba(255,255,255,0.2)">H2N-Ser-Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-COOH</text>
            <line x1="10" y1="50" x2="390" y2="50" stroke="rgba(184,160,106,0.1)" strokeWidth="0.5" />
            {[['H-Ser','105'],['Tyr','181'],['Ser','105'],['Met','149']].map(([aa, mw], i) => (
              <g key={aa}>
                <rect x={10 + i * 88} y="62" width="70" height="38" rx="1" fill="none"
                  stroke={i % 2 === 0 ? 'rgba(184,160,106,0.4)' : 'rgba(0,212,255,0.3)'} strokeWidth="0.5" />
                <text x={10 + i * 88 + 35} y="77" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="6"
                  fill={i % 2 === 0 ? 'rgba(184,160,106,0.8)' : 'rgba(0,212,255,0.7)'}>{aa}</text>
                <text x={10 + i * 88 + 35} y="90" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="5"
                  fill="rgba(255,255,255,0.25)">MW:{mw}</text>
                {i < 3 && <line x1={80 + i * 88} y1="81" x2={98 + i * 88} y2="81" stroke="rgba(184,160,106,0.3)" strokeWidth="0.5" />}
              </g>
            ))}
            <text x="358" y="85" fontFamily="'Space Mono',monospace" fontSize="10" fill="rgba(184,160,106,0.3)">···</text>
            <text x="10" y="130" fontFamily="'Space Mono',monospace" fontSize="5.5" fill="rgba(255,255,255,0.12)">PURITY: 99.7% · MW: 3,657.4 Da · SEQUENCE CONFIRMED · COA AVAILABLE</text>
            <rect x="310" y="115" width="75" height="20" rx="1" fill="rgba(184,160,106,0.08)" stroke="rgba(184,160,106,0.25)" strokeWidth="0.5" />
            <text x="347" y="128" textAnchor="middle" fontFamily="'Space Mono',monospace" fontSize="5.5" fill="rgba(184,160,106,0.8)">VERIFIED ✓</text>
          </svg>
          <div className="flex gap-8 mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {stats.map(s => (
              <div key={s.num} className="text-center">
                <div className="font-cormorant font-light text-[2.2rem]" style={{ color: 'var(--gold)' }}>{s.num}</div>
                <div className="text-[0.45rem] tracking-[0.25rem] mt-1 font-josefin" style={{ color: 'var(--text-dim)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── BENEFITS ───────────────────────────────────────────────────────────────
export function Benefits() {
  const items = [
    { num: '01', title: 'Pharmaceutical Grade', desc: 'Síntesis bajo estrictos protocolos de calidad farmacéutica. Materia prima de proveedores internacionales certificados.' },
    { num: '02', title: 'High Purity ≥99%', desc: 'Verificada por HPLC de fase reversa y espectrometría de masas ESI-MS. Certificado de análisis disponible para cada lote.' },
    { num: '03', title: 'Lab Tested & Verified', desc: 'Análisis completo por laboratorios especializados. Cada partida incluye COA con resultados de HPLC, MS y pruebas de identidad.' },
    { num: '04', title: 'Embalaje Especializado', desc: 'Productos liofilizados en presentación estéril con embalaje de alta calidad para garantizar la integridad hasta el destino.' },
    { num: '05', title: 'Asesoría Especializada', desc: 'Equipo con formación en bioquímica y farmacología disponible para orientación técnica y consultas sobre nuestros productos.' },
    { num: '06', title: 'Entrega Discreta y Segura', desc: 'Envíos con embalaje neutro y tracking completo. Cobertura a nivel nacional en Venezuela con atención personalizada.' },
  ];

  return (
    <section id="benefits" className="py-32 px-6 md:px-16" style={{ background: 'var(--dark2)' }}>
      <div className="mb-16">
        <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>NUESTROS ESTÁNDARES</p>
        <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)]">
          La <em className="italic" style={{ color: 'var(--gold)' }}>Diferencia</em><br />PEPTILAB
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.03)' }}>
        {items.map((item, i) => (
          <motion.div key={item.num}
            className="p-10"
            style={{ background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.04)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[0.5rem] tracking-[0.2rem] mb-6" style={{ color: 'var(--gold)' }}>{item.num}</div>
            <h3 className="font-cormorant font-light text-[1.3rem] mb-3">{item.title}</h3>
            <p className="text-[0.6rem] tracking-[0.1rem] leading-7" style={{ color: 'var(--text-dim)' }}>{item.desc}</p>
            <div className="w-8 h-px mt-6" style={{ background: 'var(--gold)' }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
export function Testimonials() {
  const items = [
    { initials: 'DR', name: 'Dr. R. Montoya', role: 'INVESTIGADOR BIOQUÍMICO · CARACAS', text: 'La calidad del BPC-157 es excepcional. El COA fue completamente transparente y los resultados fueron consistentes con lo esperado. Atención de primer nivel.' },
    { initials: 'AC', name: 'A. Castellanos', role: 'ESPECIALISTA EN RENDIMIENTO · VALENCIA', text: 'Excelente servicio y calidad sobresaliente. La Tirzepatida llegó perfectamente embalada y la asesoría del equipo fue invaluable durante todo el proceso.' },
    { initials: 'MP', name: 'M. Pérez', role: 'PROFESIONAL DE LA SALUD · MARACAIBO', text: 'PEPTILAB es la referencia en Venezuela. La consistencia entre lotes, el embalaje impecable y el nivel de documentación no tienen comparación en el mercado local.' },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 md:px-16" style={{ background: 'var(--black)' }}>
      <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>TESTIMONIOS</p>
      <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] mb-16">
        Lo que Dicen Nuestros <em className="italic" style={{ color: 'var(--gold)' }}>Clientes</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((t, i) => (
          <motion.div key={t.name}
            className="relative p-10"
            style={{ background: 'var(--dark)', border: '1px solid rgba(184,160,106,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="absolute top-4 right-6 font-cormorant text-[5rem] leading-none" style={{ color: 'rgba(184,160,106,0.07)' }}>"</span>
            <div className="text-[0.6rem] tracking-[0.2rem] mb-4" style={{ color: 'var(--gold)' }}>★ ★ ★ ★ ★</div>
            <p className="font-cormorant font-light italic text-[1.05rem] leading-8 mb-8" style={{ color: 'var(--text-dim)' }}>{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-[0.5rem] tracking-wider font-josefin flex-shrink-0"
                style={{ background: 'rgba(184,160,106,0.15)', border: '1px solid rgba(184,160,106,0.3)', color: 'var(--gold)' }}>
                {t.initials}
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.15rem] font-josefin" style={{ color: 'var(--text)' }}>{t.name}</p>
                <p className="text-[0.5rem] tracking-[0.1rem] mt-0.5 font-josefin" style={{ color: 'var(--text-dim)' }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    {
      q: '¿Qué garantías de calidad ofrecen con cada producto?',
      a: 'Cada producto viene acompañado de un Certificado de Análisis (COA) completo que incluye resultados de cromatografía HPLC, espectrometría de masas y análisis de pureza. Trabajamos únicamente con materia prima de proveedores certificados bajo estándares internacionales de calidad.',
    },
    {
      q: '¿Cómo se realiza el embalaje y envío?',
      a: 'Todos nuestros productos son enviados en embalaje especializado que garantiza su integridad durante el transporte. Realizamos envíos a todas las ciudades principales de Venezuela con seguimiento de envío incluido.',
    },
    {
      q: '¿Cuáles son las formas de pago disponibles?',
      a: 'Aceptamos transferencias bancarias nacionales, divisas (USD), criptomonedas (USDT/BTC) y pago móvil. Para montos mayores, contamos con facilidades de pago. Contáctanos directamente por WhatsApp para coordinar la mejor opción.',
    },
    {
      q: '¿Tienen asesoría técnica sobre los productos?',
      a: 'Sí. Nuestro equipo cuenta con formación especializada en bioquímica y farmacología. Ofrecemos orientación técnica completa sobre reconstitución, almacenamiento y uso correcto de cada producto. Puedes contactarnos directamente por WhatsApp o email.',
    },
    {
      q: '¿Qué es el Agua BAC y para qué se usa?',
      a: 'El Agua Bacteriostática (BAC) es agua estéril con alcohol bencílico al 0.9% utilizada para la reconstitución de péptidos liofilizados. Permite múltiples usos por vial manteniendo la esterilidad. Es el disolvente recomendado para la mayoría de nuestros productos en polvo.',
    },
    {
      q: '¿Realizan envíos fuera de Venezuela?',
      a: 'Actualmente operamos principalmente en Venezuela con envíos a todas las ciudades principales. Los envíos internacionales se evalúan caso por caso. Contáctanos para consultar disponibilidad en tu país.',
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 md:px-16" style={{ background: 'var(--dark)' }}>
      <div className="text-center mb-16">
        <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>PREGUNTAS FRECUENTES</p>
        <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)]">
          Todo lo que <em className="italic" style={{ color: 'var(--gold)' }}>Necesitas</em> Saber
        </h2>
      </div>
      <div className="max-w-3xl mx-auto">
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <button
              className="w-full flex justify-between items-center py-7 text-left font-josefin text-[0.7rem] tracking-[0.15rem] transition-colors duration-300 cursor-pointer bg-transparent border-0"
              style={{ color: openIndex === i ? 'var(--gold)' : 'var(--text)' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className="ml-4 flex-shrink-0 text-xl transition-transform duration-300"
                style={{ color: 'var(--gold)', transform: openIndex === i ? 'rotate(45deg)' : 'none', display: 'inline-block' }}>+</span>
            </button>
            {openIndex === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="pb-7 text-[0.65rem] tracking-[0.08rem] leading-8 font-josefin"
                style={{ color: 'var(--text-dim)' }}
              >
                {item.a}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export function Contact() {
  const methods = [
    { icon: '✉', label: 'EMAIL GENERAL', value: 'contacto@peptilabve.com', href: 'mailto:contacto@peptilabve.com' },
    { icon: '◈', label: 'VENTAS & PEDIDOS', value: 'ventas@peptilabve.com', href: 'mailto:ventas@peptilabve.com' },
    { icon: '⌁', label: 'WHATSAPP', value: '+58 412-9987858', href: 'https://wa.me/584129987858' },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-16 text-center" style={{ background: 'var(--black)' }}>
      <div className="w-px h-20 mx-auto mb-12" style={{ background: 'linear-gradient(to bottom, transparent, var(--gold))' }} />
      <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>CONTACTO</p>
      <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)] mb-6">
        Hablemos de <em className="italic" style={{ color: 'var(--gold)' }}>Ciencia</em>
      </h2>
      <p className="text-[0.65rem] tracking-[0.15rem] leading-8 max-w-lg mx-auto mb-16 font-josefin" style={{ color: 'var(--text-dim)' }}>
        Nuestro equipo está disponible para responder consultas, procesar pedidos y brindarte atención personalizada.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        {methods.map(m => (
          <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer"
            className="block p-10 transition-all duration-300"
            style={{ border: '1px solid rgba(184,160,106,0.15)', textDecoration: 'none' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.background = 'rgba(184,160,106,0.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(184,160,106,0.15)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div className="text-2xl mb-4" style={{ color: 'var(--gold)' }}>{m.icon}</div>
            <p className="text-[0.5rem] tracking-[0.4rem] mb-2 font-josefin" style={{ color: 'var(--gold)' }}>{m.label}</p>
            <p className="text-[0.65rem] tracking-[0.1rem] font-josefin" style={{ color: 'var(--text-dim)' }}>{m.value}</p>
          </a>
        ))}
      </div>
      <p className="text-[0.55rem] tracking-[0.4rem] mb-4 font-josefin" style={{ color: 'var(--text-muted)' }}>SÍGUENOS EN INSTAGRAM</p>
      <a href="https://instagram.com/peptilabve" target="_blank" rel="noopener noreferrer"
        className="font-cormorant font-light italic text-[2rem] transition-opacity duration-300"
        style={{ color: 'var(--gold)', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        @peptilabve
      </a>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export function Footer() {
  const links = ['NOSOTROS', 'CATÁLOGO', 'ESTÁNDARES', 'TESTIMONIOS', 'FAQ', 'CONTACTO'];
  const ids = ['about', 'products', 'benefits', 'testimonials', 'faq', 'contact'];

  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-6 md:px-16 py-16" style={{ borderTop: '1px solid rgba(184,160,106,0.15)', background: 'var(--dark)' }}>
        <div>
          <p className="font-josefin font-thin text-2xl tracking-[0.5rem] mb-1">PEPTILAB</p>
          <p className="text-[0.5rem] tracking-[0.4rem] font-josefin" style={{ color: 'var(--gold)' }}>SCIENCE · QUALITY · RESULTS</p>
          <p className="text-[0.5rem] tracking-[0.12rem] leading-8 mt-6 font-josefin max-w-[220px]" style={{ color: 'var(--text-muted)' }}>
            Productos de alta calidad farmacéutica. Consulte disponibilidad y condiciones con nuestro equipo.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-center">
          {links.map((link, i) => (
            <button key={link}
              onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[0.55rem] tracking-[0.3rem] font-josefin transition-colors duration-300 bg-transparent border-0 cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              {link}
            </button>
          ))}
        </div>
        <div className="md:text-right">
          <div className="text-[0.5rem] tracking-[0.15rem] leading-8 font-josefin" style={{ color: 'var(--text-muted)' }}>
            <p className="font-light mb-2" style={{ color: 'var(--text)' }}>PEPTILAB.VE</p>
            <p>contacto@peptilabve.com</p>
            <p>ventas@peptilabve.com</p>
            <p className="mt-2">+58 412-9987858</p>
            <p>@peptilabve</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p className="text-[0.5rem] tracking-[0.2rem] font-josefin" style={{ color: 'var(--text-muted)' }}>
          © 2024 PEPTILAB.VE — TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="text-[0.45rem] tracking-[0.3rem] font-josefin" style={{ color: 'rgba(90,88,86,0.6)' }}>
          FOR RESEARCH USE ONLY
        </p>
        <p className="text-[0.5rem] tracking-[0.2rem] font-josefin" style={{ color: 'var(--text-muted)' }}>
          CARACAS, VENEZUELA
        </p>
      </div>
    </footer>
  );
}

       
