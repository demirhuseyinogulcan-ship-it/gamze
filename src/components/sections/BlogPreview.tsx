/**
 * Blog Preview Section for Homepage
 * Ana sayfada son blog yazılarını gösterir
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle, Button } from '@/components/ui';

// Geçici olarak static data - gerçek veriler MDX'ten gelecek
const PREVIEW_POSTS = [
  {
    slug: 'tango-nedir',
    title: {
      tr: 'Tango Nedir? Arjantin Tangosunun Büyülü Dünyası',
      en: 'What is Tango? The Magical World of Argentine Tango',
    },
    excerpt: {
      tr: 'Buenos Aires sokaklarından dünyaya yayılan bu tutkunun hikayesi...',
      en: 'The story of this passion that spread from the streets of Buenos Aires to the world...',
    },
    image: '/images/optimized/hakkimda.webp',
    date: '2026-01-15',
    readingTime: '5 dk',
    category: 'tango-basics',
  },
  {
    slug: 'ilk-tango-dersi',
    title: {
      tr: 'İlk Tango Dersinize Hazırlanın',
      en: 'Prepare for Your First Tango Lesson',
    },
    excerpt: {
      tr: 'Tango yolculuğunuza başlamadan önce bilmeniz gerekenler...',
      en: 'What you need to know before starting your tango journey...',
    },
    image: '/images/optimized/galeri/1.webp',
    date: '2026-01-10',
    readingTime: '4 dk',
    category: 'learning',
  },
  {
    slug: 'dugun-dansi-tango',
    title: {
      tr: 'Düğün Dansı İçin Tango: Eksiksiz Rehber',
      en: 'Tango for Wedding Dance: Complete Guide',
    },
    excerpt: {
      tr: 'Özel gününüz için mükemmel bir tango performansı hazırlamak...',
      en: 'Preparing a perfect tango performance for your special day...',
    },
    image: '/images/optimized/galeri/2.webp',
    date: '2026-01-05',
    readingTime: '6 dk',
    category: 'wedding-dance',
  },
];

const categoryIcons: Record<string, string> = {
  'tango-basics': '💃',
  'learning': '📚',
  'wedding-dance': '💒',
  'lady-styling': '✨',
  'technique': '🎯',
  'culture': '🎭',
  'events': '🎉',
  'tips': '💡',
};

export function BlogPreview() {
  const { locale } = useTranslation();
  const basePath = locale === 'tr' ? '/blog' : '/en/blog';
  
  const content = {
    tr: {
      subtitle: 'BLOG',
      title: 'Tango Dünyasından',
      description: 'Tango yolculuğunuzda size ilham verecek yazılar',
      cta: 'Tüm Yazıları Gör',
    },
    en: {
      subtitle: 'BLOG',
      title: 'From the World of Tango',
      description: 'Articles to inspire you on your tango journey',
      cta: 'See All Posts',
    },
  };
  
  const t = content[locale];
  
  return (
    <section id="blog" className="section-padding bg-midnight relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      
      <Container>
        <SectionTitle
          subtitle={t.subtitle}
          title={t.title}
          description={t.description}
        />
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {PREVIEW_POSTS.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-midnight-50 border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 card-hover"
            >
              <Link href={`${basePath}/${post.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title[locale]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-midnight/80 backdrop-blur-sm text-gold px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm">
                    {categoryIcons[post.category]}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {post.title[locale]}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-white/60 text-sm md:text-base mb-4 line-clamp-2">
                    {post.excerpt[locale]}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-white/40 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href={basePath}>
            <Button variant="secondary" className="group">
              {t.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
