/**
 * BlogCard Component
 * Tek bir blog yazısını card olarak gösterir
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPostSummary, Locale } from '@/types/blog';
import { getCategoryInfo } from '@/lib/constants/blog';

// Client-side date formatter
function formatDate(dateString: string, locale: Locale = 'tr'): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', options);
}

interface BlogCardProps {
  post: BlogPostSummary;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
}

export function BlogCard({ post, index = 0, variant = 'default' }: BlogCardProps) {
  const category = getCategoryInfo(post.category);
  const href = post.locale === 'tr' ? `/blog/${post.slug}` : `/en/blog/${post.slug}`;
  
  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-sm bg-midnight-50"
      >
        <Link href={href} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent md:hidden" />
              
              {/* Pillar Badge */}
              {post.pillar && (
                <div className="absolute top-4 left-4 bg-gold text-midnight px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  Ana Rehber
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              {/* Category */}
              <span className="text-gold text-sm font-medium uppercase tracking-wider mb-3">
                {category?.name[post.locale]}
              </span>
              
              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-white/70 text-base md:text-lg mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Meta */}
              <div className="flex items-center gap-4 text-white/50 text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(post.date, post.locale)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readingTime}
                </span>
              </div>
              
              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300">
                Devamını Oku
                <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }
  
  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group"
      >
        <Link href={href} className="flex gap-4">
          {/* Image */}
          <div className="relative w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="80px"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-lg text-white group-hover:text-gold transition-colors duration-300 line-clamp-2">
              {post.title}
            </h4>
            <span className="text-white/50 text-sm">
              {formatDate(post.date, post.locale)}
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }
  
  // Default variant
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-midnight border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 card-hover"
    >
      <Link href={href} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-midnight/80 backdrop-blur-sm text-gold px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-sm">
            {category?.name[post.locale]}
          </div>
          
          {/* Pillar Badge */}
          {post.pillar && (
            <div className="absolute top-4 right-4 bg-gold text-midnight px-2 py-1 text-xs font-medium">
              ⭐ Rehber
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-heading text-xl md:text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-white/60 text-sm md:text-base mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          {/* Meta */}
          <div className="flex items-center justify-between text-white/40 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date, post.locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
