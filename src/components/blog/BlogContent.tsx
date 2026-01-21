/**
 * BlogContent Component
 * MDX içeriğini render eder ve özel bileşenler sağlar
 * 
 * ULTRATHINK Typography Standards Applied:
 * - Line height: 1.85 (optimal for long-form reading)
 * - Paragraph margin: 2.5rem (vertical rhythm)
 * - Max-width: 720px (65-75 characters per line)
 * - Font size: 1.25rem / 20px (WCAG AAA compliant)
 */

'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle, Lightbulb, Quote } from 'lucide-react';

// MDX için özel bileşenler - Medium-style typography
export const MDXComponents = {
  // Başlıklar - Increased spacing for visual hierarchy
  h1: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h1 id={id} className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mt-16 mb-8 scroll-mt-24 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h2 id={id} className="font-heading text-2xl sm:text-3xl md:text-4xl text-white mt-14 mb-6 scroll-mt-24 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h3 id={id} className="font-heading text-xl sm:text-2xl md:text-3xl text-white mt-12 mb-5 scroll-mt-24 leading-snug">
      {children}
    </h3>
  ),
  h4: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h4 id={id} className="font-heading text-lg sm:text-xl md:text-2xl text-white mt-10 mb-4 scroll-mt-24 leading-snug">
      {children}
    </h4>
  ),

  // Paragraf - ULTRATHINK optimized
  // line-height: 1.85 (sweet spot for readability)
  // margin-bottom: 2.5rem (generous vertical rhythm)
  // font-size: 1.25rem on desktop, 1.125rem on mobile
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-white/75 text-lg sm:text-xl leading-[1.85] mb-10 tracking-wide">
      {children}
    </p>
  ),

  // Listeler - Increased spacing
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-none space-y-5 mb-10 pl-0">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-outside space-y-5 mb-10 text-white/75 pl-6 text-lg sm:text-xl leading-[1.85]">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-white/75 flex items-start gap-4 leading-[1.85] text-lg sm:text-xl">
      <span className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),

  // Linkler - Subtle underline, gold accent
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    const isExternal = href?.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-all duration-300"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href || '#'} className="text-gold hover:text-gold-light underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-all duration-300">
        {children}
      </Link>
    );
  },

  // Kalın ve italik - Clear visual distinction
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic text-gold/90">{children}</em>
  ),

  // Alıntı - Pull quote style
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gold pl-8 py-6 my-12 bg-gradient-to-r from-gold/5 to-transparent rounded-r-lg">
      <div className="text-white/85 italic text-xl sm:text-2xl leading-relaxed font-light">{children}</div>
    </blockquote>
  ),

  // Kod - Monospace, subtle background
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-midnight-50 text-gold px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-midnight-50 p-6 rounded-lg overflow-x-auto mb-10 border border-white/5">
      {children}
    </pre>
  ),

  // Yatay çizgi - Elegant separator
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-16" />
  ),

  // Resim - Full bleed potential
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <figure className="my-12">
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        <Image
          src={src || ''}
          alt={alt || ''}
          fill
          className="object-cover"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-white/50 text-sm mt-4 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  // Tablo - Clean, readable
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-10 rounded-lg border border-white/10">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-gold/10">{children}</thead>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="text-left p-4 text-gold font-medium border-b border-white/10">{children}</th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="p-4 text-white/75 border-b border-white/5 leading-relaxed">{children}</td>
  ),
};

// Özel Blog Bileşenleri - Enhanced spacing

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'tip';
  title?: string;
  children: ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: Info,
      iconColor: 'text-blue-400',
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      icon: AlertTriangle,
      iconColor: 'text-yellow-400',
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: CheckCircle,
      iconColor: 'text-green-400',
    },
    tip: {
      bg: 'bg-gold/10',
      border: 'border-gold/30',
      icon: Lightbulb,
      iconColor: 'text-gold',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${style.bg} border ${style.border} rounded-lg p-6 sm:p-8 my-12`}
    >
      <div className="flex gap-4 sm:gap-5">
        <Icon className={`${style.iconColor} flex-shrink-0 mt-1`} size={24} />
        <div className="flex-1">
          {title && (
            <h4 className="font-heading text-lg sm:text-xl text-white mb-4">{title}</h4>
          )}
          <div className="text-white/75 leading-relaxed text-base sm:text-lg">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

interface TangoTermProps {
  term: string;
  definition: string;
  pronunciation?: string;
}

export function TangoTerm({ term, definition, pronunciation }: TangoTermProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-midnight-50 border border-gold/20 rounded-lg p-6 sm:p-7 my-10"
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl sm:text-3xl">💃</span>
        <div>
          <h4 className="font-heading text-xl sm:text-2xl text-gold mb-2">
            {term}
            {pronunciation && (
              <span className="text-white/50 text-sm font-body ml-2">
                [{pronunciation}]
              </span>
            )}
          </h4>
          <p className="text-white/75 leading-relaxed text-base sm:text-lg">{definition}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface GamzeQuoteProps {
  children: ReactNode;
}

export function GamzeQuote({ children }: GamzeQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative my-14 p-8 sm:p-10 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-lg"
    >
      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-gold/30" />
      <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl text-white/90 italic mb-5 leading-relaxed">
        {children}
      </blockquote>
      <cite className="flex items-center gap-3 text-white/70 not-italic text-base sm:text-lg">
        <span className="w-10 h-0.5 bg-gold" />
        Gamze Yıldız
      </cite>
    </motion.div>
  );
}

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  // YouTube URL'sini embed formatına çevir
  const embedUrl = url.includes('youtube.com/watch')
    ? url.replace('watch?v=', 'embed/')
    : url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {title && (
        <p className="text-center text-white/50 text-sm mt-4 italic">{title}</p>
      )}
    </motion.div>
  );
}

// Tüm özel bileşenleri MDX için export
export const CustomComponents = {
  ...MDXComponents,
  Callout,
  TangoTerm,
  GamzeQuote,
  VideoEmbed,
};
