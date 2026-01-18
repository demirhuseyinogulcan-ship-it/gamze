/**
 * BlogArticleHeader Component
 * Blog yazısı başlık ve meta bilgileri
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost, Locale } from '@/types/blog';
import { getCategoryInfo, getAuthorInfo } from '@/lib/constants/blog';
import { Container } from '@/components/ui';

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

interface BlogArticleHeaderProps {
  post: BlogPost;
}

export function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  const { frontmatter, locale, readingTime } = post;
  const category = getCategoryInfo(frontmatter.category);
  const author = getAuthorInfo(frontmatter.author);
  const basePath = locale === 'tr' ? '/blog' : '/en/blog';
  
  const handleShare = async () => {
    const shareData = {
      title: frontmatter.title,
      text: frontmatter.description,
      url: window.location.href,
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(locale === 'tr' ? 'Link kopyalandı!' : 'Link copied!');
    }
  };
  
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={frontmatter.image}
          alt={frontmatter.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <Container>
            <Link
              href={basePath}
              className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors bg-midnight/50 backdrop-blur-sm px-4 py-2 rounded-sm"
            >
              <ArrowLeft size={18} />
              {locale === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}
            </Link>
          </Container>
        </div>
      </div>
      
      {/* Content */}
      <Container className="relative -mt-40 z-10">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category */}
          <Link
            href={`${basePath}/kategori/${frontmatter.category}`}
            className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors mb-4"
          >
            <span>{category?.icon}</span>
            <span>{category?.name[locale]}</span>
          </Link>
          
          {/* Title */}
          <h1 className="heading-lg text-white mb-6">
            {frontmatter.title}
          </h1>
          
          {/* Description */}
          <p className="body-lg text-white/70 mb-8">
            {frontmatter.description}
          </p>
          
          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
            {/* Author - Links to About section */}
            <Link
              href="/#about"
              className="flex items-center gap-3 group"
              title={locale === 'tr' ? 'Gamze Yıldız hakkında daha fazla bilgi' : 'Learn more about Gamze Yıldız'}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/30 group-hover:ring-gold transition-all">
                <Image
                  src={author?.image || '/images/optimized/hakkimda.webp'}
                  alt={author?.name || 'Yazar'}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block text-white group-hover:text-gold transition-colors">
                  {author?.name}
                </span>
                <span className="text-white/50 text-sm group-hover:text-gold/70 transition-colors">
                  {locale === 'tr' ? 'Tango Eğitmeni' : 'Tango Instructor'}
                </span>
              </div>
            </Link>
            
            {/* Date */}
            <span className="flex items-center gap-2 text-white/60">
              <Calendar size={16} className="text-gold" />
              {formatDate(frontmatter.date, locale)}
            </span>
            
            {/* Reading Time */}
            <span className="flex items-center gap-2 text-white/60">
              <Clock size={16} className="text-gold" />
              {readingTime.text}
            </span>
            
            {/* Share */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors ml-auto"
              aria-label="Paylaş"
            >
              <Share2 size={16} />
              {locale === 'tr' ? 'Paylaş' : 'Share'}
            </button>
          </div>
          
          {/* Tags */}
          {frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-6">
              <Tag size={16} className="text-gold" />
              {frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`${basePath}/etiket/${tag}`}
                  className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-sm hover:bg-gold/10 hover:text-gold transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </motion.article>
      </Container>
    </section>
  );
}
