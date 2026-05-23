'use client';

import { motion } from 'framer-motion';
import { useCart } from './CartContext';
import { useState } from 'react';

export interface Product {
  id: string;
  category: string;
  formula: string;
  name: string;
  description: string;
  benefits: string[];
  variants: { mg: string; price: number }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'tirzepatida',
    category: 'METABOLIC PEPTIDES',
    formula: 'C₂₂₅H₃₄₈N₄₈O₆₈ · Agonista dual GIP/GLP-1',
    name: 'Tirzepatida',
    description: 'Agonista dual de los receptores GIP y GLP-1. Investigado por su impacto en la regulación del metabolismo glucídico y el balance energético.',
    benefits: ['AGONISTA GIP/GLP-1', 'METABOLISMO GLUCÍDICO', 'BALANCE ENERGÉTICO'],
    variants: [
      { mg: '10 mg', price: 130 },
      { mg: '20 mg', price: 240 },
    ],
  },
  {
    id: 'retatrutida',
    category: 'METABOLIC PEPTIDES',
    formula: 'Agonista triple GLP-1/GIP/Glucagón',
    name: 'Retatrutida',
    description: 'Agonista triple de receptores GLP-1, GIP y glucagón. Nueva generación en la investigación del metabolismo energético y composición corporal.',
    benefits: ['AGONISTA TRIPLE', 'COMPOSICIÓN CORPORAL', 'METABOLISMO AVANZADO'],
    variants: [
      { mg: '10 mg', price: 150 },
      { mg: '20 mg', price: 200 },
    ],
  },
  {
    id: 'bpc-157',
    category: 'RECOVERY PEPTIDES',
    formula: 'C₇₈H₁₃₃N₂₃O₂₃S₂ · MW: 1837.05 Da',
    name: 'BPC-157',
    description: 'Penta-decapéptido de origen gástrico. Ampliamente investigado por sus propiedades citoprotectoras y su rol en la recuperación de tejidos musculoesqueléticos.',
    benefits: ['REGENERACIÓN TISULAR', 'CITOPROTECTOR', 'ANGIOGÉNESIS'],
    variants: [
      { mg: '5 mg', price: 70 },
      { mg: '10 mg', price: 90 },
    ],
  },
  {
    id: 'tb-500',
    category: 'RECOVERY PEPTIDES',
    formula: 'C₄₁H₆₄N₁₄O₁₂ · MW: 937.04 Da',
    name: 'TB-500',
    description: 'Fragmento sintético de la timosina beta-4. Investigado por su rol en la modulación de la actina y la respuesta inflamatoria sistémica.',
    benefits: ['MODULACIÓN INFLAMATORIA', 'MOVILIDAD CELULAR', 'RECUPERACIÓN'],
    variants: [
      { mg: '5 mg', price: 110 },
      { mg: '10 mg', price: 170 },
    ],
  },
  {
    id: 'nad-plus',
    category: 'LONGEVITY',
    formula: 'C₂₁H₂₇N₇O₁₄P₂ · MW: 663.43 Da',
    name: 'NAD+',
    description: 'Dinucleótido de nicotinamida y adenina. Coenzima fundamental investigada por su rol en la bioenergética celular, reparación del ADN y vías de longevidad.',
    benefits: ['BIOENERGÉTICA CELULAR', 'REPARACIÓN ADN', 'VÍAS SIRTUINAS'],
    variants: [
      { mg: '500 mg', price: 80 },
    ],
  },
  {
    id: 'ghk-cu',
    category: 'REGENERATIVE PEPTIDES',
    formula: 'C₁₄H₂₄CuN₆O₄ · MW: 403.91 Da',
    name: 'GHK-Cu',
    description: 'Tripéptido de cobre de origen endógeno. Investigado por su participación en la síntesis de colágeno, remodelación tisular y respuesta antioxidante.',
    benefits: ['SÍNTESIS COLÁGENO', 'REMODELACIÓN TISULAR', 'ANTIOXIDANTE'],
    variants: [
      { mg: '50 mg', price: 40 },
    ],
  },
  {
    id: 'tesamorelin',
    category: 'GH SECRETAGOGUES',
    formula: 'C₂₂₁H₃₆₆N₆₄O₆₂S · MW: 5135.77 Da',
    name: 'Tesamorelin',
    description: 'Análogo sintético del factor liberador de hormona de crecimiento (GHRH). Investigado por sus efectos sobre la secreción de GH y la composición corporal.',
    benefits: ['ANÁLOGO GHRH', 'SECRECIÓN GH', 'COMPOSICIÓN CORPORAL'],
    variants: [
      { mg: '20 mg', price: 250 },
    ],
  },
  {
    id: 'klow-blend',
    category: 'BLENDS',
    formula: 'Fórmula patentada · 80 mg',
    name: 'KLOW Blend',
    description: 'Formulación en blend de péptidos de acción sinérgica diseñada para investigación avanzada en recuperación, composición corporal y rendimiento metabólico.',
    benefits: ['SINERGIA PEPTÍDICA', 'ACCIÓN MÚLTIPLE', 'PROTOCOLO AVANZADO'],
    variants: [
      { mg: '80 mg', price: 220 },
    ],
  },
  {
    id: 'agua-bac',
    category: 'RECONSTITUCIÓN',
    formula: 'Agua bacteriostática USP · 0.9% Benzyl Alcohol',
    name: 'Agua BAC',
    description: 'Agua bacteriostática estéril para reconstitución de péptidos liofilizados. Formulada con alcohol bencílico al 0.9% para inhibición bacteriana y múltiples usos por vial.',
    benefits: ['RECONSTITUCIÓN PÉPTIDOS', 'ESTÉRIL USP', 'MULTIDOSIS'],
    variants: [
      { mg: '10 ml', price: 20 },
    ],
  },
];

function VariantSelector({
  variants,
  selected,
  onSelect,
}: {
  variants: Product['variants'];
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex gap-2 mb-6">
      {variants.map((v, i) => (
        <button
          key={v.mg}
          onClick={() => onSelect(i)}
          className="text-[0.5rem] tracking-[0.2rem] px-3 py-1.5 font-josefin transition-all duration-200 cursor-pointer"
          style={{
            border: selected === i ? '1px solid var(--gold)' : '1px solid rgba(255,255,255,0.1)',
            color: selected === i ? 'var(--gold)' : 'var(--text-muted)',
            background: selected === i ? 'rgba(184,160,106,0.08)' : 'transparent',
          }}
        >
          {v.mg}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [added, setAdded] = useState(false);

  const variant = product.variants[selectedVariant];

  const handleAdd = () => {
    addToCart({
      id: `${product.id}-${variant.mg}`,
      name: `${product.name} ${variant.mg}`,
      price: variant.price,
      mg: variant.mg,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      className="p-8 cursor-default group transition-all duration-300"
      style={{ background: 'var(--dark)', border: '1px solid transparent' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ background: 'var(--dark2)', borderColor: 'rgba(184,160,106,0.2)' }}
    >
      <p className="text-[0.5rem] tracking-[0.4rem] mb-3 font-josefin" style={{ color: 'var(--gold)' }}>
        {product.category}
      </p>
      <p className="font-mono text-[0.42rem] tracking-[0.1rem] mb-2" style={{ color: 'var(--text-muted)' }}>
        {product.formula}
      </p>
      <h3 className="font-cormorant font-light text-[1.6rem] leading-tight mb-3" style={{ color: 'var(--text)' }}>
        {product.name}
      </h3>
      <p className="text-[0.6rem] tracking-[0.08rem] leading-7 mb-5" style={{ color: 'var(--text-dim)' }}>
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {product.benefits.map(b => (
          <span key={b} className="text-[0.42rem] tracking-[0.15rem] px-2.5 py-1 font-josefin"
            style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'var(--text-muted)' }}>
            {b}
          </span>
        ))}
      </div>

      {/* Variant selector */}
      <VariantSelector variants={product.variants} selected={selectedVariant} onSelect={setSelectedVariant} />

      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-[1.15rem]" style={{ color: 'var(--gold)' }}>
            ${variant.price}.00
          </span>
          <span className="text-[0.55rem] tracking-[0.15rem] ml-1.5 font-josefin" style={{ color: 'var(--text-muted)' }}>
            / {variant.mg}
          </span>
        </div>
        <button
          onClick={handleAdd}
          className="text-[0.55rem] tracking-[0.2rem] px-5 py-2.5 font-josefin transition-all duration-300 cursor-pointer"
          style={{
            background: added ? 'var(--gold)' : 'transparent',
            border: '1px solid rgba(184,160,106,0.4)',
            color: added ? 'var(--black)' : 'var(--gold)',
          }}
        >
          {added ? '✓ AÑADIDO' : '+ CARRITO'}
        </button>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-32 px-6 md:px-16" style={{ background: 'var(--black)' }}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <p className="text-[0.55rem] tracking-[0.5rem] mb-4 font-josefin" style={{ color: 'var(--gold)' }}>
            CATÁLOGO
          </p>
          <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.5rem)]">
            Nuestros <em className="italic" style={{ color: 'var(--gold)' }}>Productos</em>
          </h2>
        </div>
        <p className="text-[0.5rem] tracking-[0.2rem] leading-8 font-josefin" style={{ color: 'var(--text-muted)' }}>
          PRECIOS EN USD · CONSULTAR DISPONIBILIDAD
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(184,160,106,0.08)' }}>
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
