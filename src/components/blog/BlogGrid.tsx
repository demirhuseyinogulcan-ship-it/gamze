/**
 * BlogGrid Component
 * Blog yazılarını grid düzeninde gösterir
 */

'use client';

import { motion } from 'framer-motion';
import { BlogPostSummary } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPostSummary[];
  columns?: 2 | 3 | 4;
  showFeatured?: boolean;
}

export function BlogGrid({ posts, columns = 3, showFeatured = true }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <p className="text-white/60 text-lg">Henüz yazı bulunmuyor.</p>
      </motion.div>
    );
  }
  
  const featuredPost = showFeatured ? posts.find(p => p.featured || p.pillar) : null;
  const regularPosts = featuredPost 
    ? posts.filter(p => p.slug !== featuredPost.slug)
    : posts;
  
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  
  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {featuredPost && (
        <BlogCard post={featuredPost} variant="featured" />
      )}
      
      {/* Regular Posts Grid */}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 lg:gap-8`}>
        {regularPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
