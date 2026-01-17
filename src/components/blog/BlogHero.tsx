/**
 * BlogHero Component
 * Blog sayfası hero bölümü
 */

'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { Locale } from '@/types/blog';

interface BlogHeroProps {
  locale?: Locale;
  title?: string;
  subtitle?: string;
  description?: string;
}

const defaultContent = {
  tr: {
    subtitle: 'BLOG',
    title: 'Tango Dünyası',
    description: 'Tangonun büyülü dünyasına dair yazılar, ipuçları ve deneyimlerim. Gamze\'nin dilinden tango...',
  },
  en: {
    subtitle: 'BLOG',
    title: 'Tango World',
    description: 'Articles, tips and my experiences about the magical world of tango. Tango from Gamze\'s perspective...',
  },
};

export function BlogHero({ 
  locale = 'tr', 
  title, 
  subtitle, 
  description 
}: BlogHeroProps) {
  const content = defaultContent[locale];
  
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-midnight overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-gold font-body text-sm uppercase tracking-[0.3em] mb-4"
          >
            {subtitle || content.subtitle}
          </motion.span>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-xl text-white mb-6"
          >
            {title || content.title}
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="body-lg text-white/70"
          >
            {description || content.description}
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gold mx-auto mt-8"
          />
        </motion.div>
      </Container>
    </section>
  );
}
