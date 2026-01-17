/**
 * BlogContent Component
 * MDX içeriğini render eder ve özel bileşenler sağlar
 */

'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle, Lightbulb, Quote } from 'lucide-react';

// MDX için özel bileşenler
export const MDXComponents = {
  // Başlıklar
  h1: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h1 id={id} className="font-heading text-4xl md:text-5xl text-white mt-12 mb-6 scroll-mt-24">
      {children}
    </h1>
  ),
  h2: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h2 id={id} className="font-heading text-3xl md:text-4xl text-white mt-10 mb-5 scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h3 id={id} className="font-heading text-2xl md:text-3xl text-white mt-8 mb-4 scroll-mt-24">
      {children}
    </h3>
  ),
  h4: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h4 id={id} className="font-heading text-xl md:text-2xl text-white mt-6 mb-3 scroll-mt-24">
      {children}
    </h4>
  ),
  
  // Paragraf
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-white/80 text-lg leading-relaxed mb-6">
      {children}
    </p>
  ),
  
  // Listeler
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-none space-y-3 mb-6 pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside space-y-3 mb-6 text-white/80">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-white/80 flex items-start gap-3">
      <span className="w-2 h-2 bg-gold rounded-full mt-2.5 flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),
  
  // Linkler
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    const isExternal = href?.startsWith('http');
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href || '#'} className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
        {children}
      </Link>
    );
  },
  
  // Kalın ve italik
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic text-gold/90">{children}</em>
  ),
  
  // Alıntı
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gold pl-6 py-4 my-8 bg-gold/5 rounded-r-sm">
      <div className="text-white/90 italic text-lg">{children}</div>
    </blockquote>
  ),
  
  // Kod
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-midnight-50 text-gold px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-midnight-50 p-6 rounded-sm overflow-x-auto mb-6 border border-white/5">
      {children}
    </pre>
  ),
  
  // Yatay çizgi
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-12" />
  ),
  
  // Resim
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <figure className="my-8">
      <div className="relative aspect-video rounded-sm overflow-hidden">
        <Image
          src={src || ''}
          alt={alt || ''}
          fill
          className="object-cover"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-white/50 text-sm mt-3 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  
  // Tablo
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-6">
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
    <td className="p-4 text-white/80 border-b border-white/5">{children}</td>
  ),
};

// Özel Blog Bileşenleri

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
      className={`${style.bg} border ${style.border} rounded-sm p-6 my-8`}
    >
      <div className="flex gap-4">
        <Icon className={`${style.iconColor} flex-shrink-0 mt-1`} size={24} />
        <div>
          {title && (
            <h4 className="font-heading text-lg text-white mb-2">{title}</h4>
          )}
          <div className="text-white/80">{children}</div>
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
      className="bg-midnight-50 border border-gold/20 rounded-sm p-5 my-6"
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl">💃</span>
        <div>
          <h4 className="font-heading text-xl text-gold mb-1">
            {term}
            {pronunciation && (
              <span className="text-white/50 text-sm font-body ml-2">
                [{pronunciation}]
              </span>
            )}
          </h4>
          <p className="text-white/80">{definition}</p>
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
      className="relative my-10 p-8 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-sm"
    >
      <Quote className="absolute -top-4 -left-4 w-12 h-12 text-gold/30" />
      <blockquote className="font-heading text-xl md:text-2xl text-white/90 italic mb-4">
        {children}
      </blockquote>
      <cite className="flex items-center gap-3 text-white/70 not-italic">
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
      className="my-8"
    >
      <div className="relative aspect-video rounded-sm overflow-hidden">
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {title && (
        <p className="text-center text-white/50 text-sm mt-3 italic">{title}</p>
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
