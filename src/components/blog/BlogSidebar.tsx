/**
 * BlogSidebar Component
 * Kategoriler, etiketler ve ilgili yazılar
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tag, Folder, TrendingUp } from 'lucide-react';
import { BlogPostSummary, BlogCategory } from '@/types/blog';
import { BlogCard } from './BlogCard';
import { getCategoryInfo, getTagInfo, BLOG_CATEGORIES, BLOG_TAGS } from '@/lib/constants/blog';
import { Locale } from '@/types/blog';

interface BlogSidebarProps {
  locale?: Locale;
  currentCategory?: BlogCategory;
  currentTag?: string;
  relatedPosts?: BlogPostSummary[];
  popularTags?: { tag: string; count: number }[];
  categories?: { category: BlogCategory; count: number }[];
}

export function BlogSidebar({
  locale = 'tr',
  currentCategory,
  currentTag,
  relatedPosts = [],
  popularTags = [],
  categories = [],
}: BlogSidebarProps) {
  const basePath = locale === 'tr' ? '/blog' : '/en/blog';
  
  return (
    <aside className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-midnight-50 rounded-sm p-6 border border-white/5"
      >
        <h3 className="font-heading text-xl text-white mb-4">
          {locale === 'tr' ? 'Ara' : 'Search'}
        </h3>
        <div className="relative">
          <input
            type="search"
            placeholder={locale === 'tr' ? 'Yazılarda ara...' : 'Search posts...'}
            className="w-full bg-midnight border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
      </motion.div>
      
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-midnight-50 rounded-sm p-6 border border-white/5"
      >
        <h3 className="font-heading text-xl text-white mb-4 flex items-center gap-2">
          <Folder size={18} className="text-gold" />
          {locale === 'tr' ? 'Kategoriler' : 'Categories'}
        </h3>
        <ul className="space-y-2">
          {(categories.length > 0 ? categories : BLOG_CATEGORIES.map(c => ({ category: c.slug as BlogCategory, count: 0 }))).map(({ category, count }) => {
            const info = getCategoryInfo(category);
            const isActive = currentCategory === category;
            
            return (
              <li key={category}>
                <Link
                  href={`${basePath}/${locale === 'tr' ? 'kategori' : 'category'}/${category}`}
                  className={`flex items-center justify-between py-2 px-3 rounded-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gold/10 text-gold'
                      : 'text-white/70 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{info?.icon}</span>
                    <span>{info?.name[locale]}</span>
                  </span>
                  {count > 0 && (
                    <span className="text-sm text-white/40">({count})</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
      
      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-midnight-50 rounded-sm p-6 border border-white/5"
      >
        <h3 className="font-heading text-xl text-white mb-4 flex items-center gap-2">
          <Tag size={18} className="text-gold" />
          {locale === 'tr' ? 'Popüler Etiketler' : 'Popular Tags'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {(popularTags.length > 0 ? popularTags.slice(0, 15) : BLOG_TAGS.slice(0, 15)).map(item => {
            // Handle both PopularTag format and BlogTag format
            const tagSlug = typeof item === 'object' && 'tag' in item 
              ? item.tag 
              : (item as { slug: string }).slug;
            const tagInfo = getTagInfo(tagSlug);
            const isActive = currentTag === tagSlug;
            
            return (
              <Link
                key={tagSlug}
                href={`${basePath}/${locale === 'tr' ? 'etiket' : 'tag'}/${tagSlug}`}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-sm text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-midnight'
                    : 'bg-white/5 text-white/70 hover:bg-gold/10 hover:text-gold'
                }`}
              >
                #{tagInfo?.name[locale] || tagSlug}
              </Link>
            );
          })}
        </div>
      </motion.div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-midnight-50 rounded-sm p-6 border border-white/5"
        >
          <h3 className="font-heading text-xl text-white mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-gold" />
            {locale === 'tr' ? 'İlgili Yazılar' : 'Related Posts'}
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} variant="compact" />
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm p-6 border border-gold/20"
      >
        <h3 className="font-heading text-xl text-white mb-2">
          {locale === 'tr' ? 'Tango İpuçları' : 'Tango Tips'}
        </h3>
        <p className="text-white/70 text-sm mb-4">
          {locale === 'tr'
            ? 'Yeni yazılardan haberdar olmak için bültenime abone olun.'
            : 'Subscribe to my newsletter to stay updated with new posts.'}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-gold text-midnight px-4 py-2 text-sm font-medium hover:bg-gold-light transition-colors"
        >
          {locale === 'tr' ? 'Abone Ol' : 'Subscribe'}
        </Link>
      </motion.div>
    </aside>
  );
}
