/**
 * InfiniteScrollBlog Component
 * ─────────────────────────────────────────────────────────────────────────────
 * Performans optimizasyonlu infinite scroll blog listesi
 * 
 * FEATURES:
 * - İlk 6 yazı SSR ile yüklenir (SEO friendly)
 * - Intersection Observer ile lazy loading
 * - Smooth skeleton loading states
 * - "Tümü yüklendi" feedback
 * - Responsive grid layout
 * - Framer Motion stagger animations
 * 
 * POTENTIAL ISSUES ADDRESSED:
 * - Layout shift: Skeleton ile aynı boyutta placeholder
 * - Memory leak: useEffect cleanup
 * - Race conditions: Loading state kontrolü
 * - SEO: Initial content server-rendered
 * ─────────────────────────────────────────────────────────────────────────────
 */

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { BlogPostSummary, Locale } from '@/types/blog';
import { BlogCard } from './BlogCard';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface InfiniteScrollBlogProps {
  /** Initial posts (SSR rendered for SEO) */
  initialPosts: BlogPostSummary[];
  /** All available posts */
  allPosts: BlogPostSummary[];
  /** Number of posts to load per batch */
  batchSize?: number;
  /** Grid columns */
  columns?: 2 | 3;
  /** Show featured post at top */
  showFeatured?: boolean;
  /** Current locale for i18n */
  locale?: Locale;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const INTERSECTION_THRESHOLD = 0.1;
const LOAD_DELAY = 300; // ms - simulates network for smoother UX

// ─────────────────────────────────────────────────────────────────────────────
// Skeleton Component
// ─────────────────────────────────────────────────────────────────────────────

function BlogCardSkeleton() {
  return (
    <div className="bg-midnight-50 rounded-sm overflow-hidden border border-white/5 animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-[16/10] bg-white/5" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Category & date */}
        <div className="flex items-center gap-3">
          <div className="h-4 w-20 bg-white/10 rounded" />
          <div className="h-4 w-24 bg-white/5 rounded" />
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-white/10 rounded" />
          <div className="h-6 w-3/4 bg-white/10 rounded" />
        </div>
        
        {/* Excerpt */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-white/5 rounded" />
          <div className="h-4 w-5/6 bg-white/5 rounded" />
        </div>
        
        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="h-4 w-24 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function InfiniteScrollBlog({
  initialPosts,
  allPosts,
  batchSize = 6,
  columns = 2,
  showFeatured = true,
  locale = 'tr',
}: InfiniteScrollBlogProps) {
  // ─────────────────────────────────────────────────────────────────────────
  // State
  // ─────────────────────────────────────────────────────────────────────────
  
  const [displayedPosts, setDisplayedPosts] = useState<BlogPostSummary[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length < allPosts.length);
  
  // ─────────────────────────────────────────────────────────────────────────
  // Refs
  // ─────────────────────────────────────────────────────────────────────────
  
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false); // Prevent race conditions
  
  // ─────────────────────────────────────────────────────────────────────────
  // Load More Handler
  // ─────────────────────────────────────────────────────────────────────────
  
  const loadMorePosts = useCallback(() => {
    // Prevent multiple simultaneous loads
    if (loadingRef.current || !hasMore) return;
    
    loadingRef.current = true;
    setIsLoading(true);
    
    // Simulate slight delay for smoother UX
    setTimeout(() => {
      const currentLength = displayedPosts.length;
      const nextBatch = allPosts.slice(currentLength, currentLength + batchSize);
      
      if (nextBatch.length > 0) {
        setDisplayedPosts(prev => [...prev, ...nextBatch]);
      }
      
      // Check if we've loaded everything
      if (currentLength + nextBatch.length >= allPosts.length) {
        setHasMore(false);
      }
      
      setIsLoading(false);
      loadingRef.current = false;
    }, LOAD_DELAY);
  }, [displayedPosts.length, allPosts, batchSize, hasMore]);
  
  // ─────────────────────────────────────────────────────────────────────────
  // Intersection Observer
  // ─────────────────────────────────────────────────────────────────────────
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMorePosts();
        }
      },
      {
        threshold: INTERSECTION_THRESHOLD,
        rootMargin: '100px', // Load slightly before reaching the trigger
      }
    );
    
    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading, loadMorePosts]);
  
  // ─────────────────────────────────────────────────────────────────────────
  // Derived Values
  // ─────────────────────────────────────────────────────────────────────────
  
  const featuredPost = showFeatured 
    ? displayedPosts.find(p => p.featured || p.pillar) 
    : null;
  
  const regularPosts = featuredPost
    ? displayedPosts.filter(p => p.slug !== featuredPost.slug)
    : displayedPosts;
  
  const gridCols = columns === 2 
    ? 'md:grid-cols-2' 
    : 'md:grid-cols-2 lg:grid-cols-3';
  
  // ─────────────────────────────────────────────────────────────────────────
  // Empty State
  // ─────────────────────────────────────────────────────────────────────────
  
  if (displayedPosts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <p className="text-white/60 text-lg">
          {locale === 'tr' ? 'Henüz yazı bulunmuyor.' : 'No posts yet.'}
        </p>
      </motion.div>
    );
  }
  
  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  
  return (
    <div className="space-y-8">
      {/* Featured Post */}
      <AnimatePresence mode="wait">
        {featuredPost && (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard post={featuredPost} variant="featured" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Regular Posts Grid */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6 lg:gap-8`}>
        <AnimatePresence mode="popLayout">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.4,
                delay: index < batchSize ? index * 0.05 : 0, // Stagger only first batch
              }}
              layout
            >
              <BlogCard post={post} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Loading Skeletons */}
        <AnimatePresence>
          {isLoading && (
            <>
              {Array.from({ length: Math.min(batchSize, 3) }).map((_, i) => (
                <motion.div
                  key={`skeleton-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BlogCardSkeleton />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      
      {/* Load More Trigger / Status */}
      <div 
        ref={loadMoreRef} 
        className="flex flex-col items-center justify-center py-8"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 text-white/60"
            >
              <Loader2 className="w-5 h-5 animate-spin text-gold" />
              <span>{locale === 'tr' ? 'Yükleniyor...' : 'Loading...'}</span>
            </motion.div>
          ) : hasMore ? (
            <motion.div
              key="scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/40 text-sm"
            >
              {locale === 'tr' 
                ? 'Daha fazla yazı için aşağı kaydırın' 
                : 'Scroll down for more posts'}
            </motion.div>
          ) : displayedPosts.length > batchSize ? (
            <motion.div
              key="all-loaded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-gold/80"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>
                {locale === 'tr' 
                  ? `Tüm yazılar yüklendi (${displayedPosts.length})` 
                  : `All posts loaded (${displayedPosts.length})`}
              </span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────

export default InfiniteScrollBlog;
