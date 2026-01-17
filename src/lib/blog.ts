/**
 * Blog Utility Functions
 * MDX dosyalarını okuma, işleme ve sıralama
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import {
  BlogPost,
  BlogPostSummary,
  BlogFrontmatter,
  TableOfContentsItem,
  Locale,
  BlogCategory,
  PillarCluster,
} from '@/types/blog';
import { BLOG_CONFIG, getAuthorInfo, getCategoryInfo } from '@/lib/constants/blog';

// Blog içerik dizini
const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Tüm blog yazılarını getir
 */
export async function getAllPosts(locale: Locale = 'tr'): Promise<BlogPostSummary[]> {
  const localeDir = path.join(CONTENT_DIR, locale);
  
  if (!fs.existsSync(localeDir)) {
    return [];
  }
  
  const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.mdx'));
  
  const posts = files.map(file => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(localeDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const frontmatter = data as BlogFrontmatter;
    
    // Sadece yayınlanmış yazıları göster
    if (frontmatter.status !== 'published') {
      return null;
    }
    
    const stats = readingTime(content);
    const author = getAuthorInfo(frontmatter.author);
    
    return {
      slug,
      locale,
      title: frontmatter.title,
      description: frontmatter.description,
      excerpt: frontmatter.excerpt || frontmatter.description.slice(0, BLOG_CONFIG.excerptLength),
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags,
      image: frontmatter.image,
      imageAlt: frontmatter.imageAlt,
      readingTime: `${Math.ceil(stats.minutes)} dk`,
      featured: frontmatter.featured,
      pillar: frontmatter.pillar,
      author: {
        name: author?.name || 'Gamze Yıldız',
        image: author?.image || '/images/optimized/hakkimda.webp',
      },
    } as BlogPostSummary;
  }).filter(Boolean) as BlogPostSummary[];
  
  // Tarihe göre sırala (en yeni önce)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Tek bir blog yazısını getir
 */
export async function getPostBySlug(slug: string, locale: Locale = 'tr'): Promise<BlogPost | null> {
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);
  const toc = extractTableOfContents(content);
  
  return {
    slug,
    locale,
    frontmatter,
    content,
    readingTime: {
      text: `${Math.ceil(stats.minutes)} dk okuma`,
      minutes: Math.ceil(stats.minutes),
      words: stats.words,
    },
    toc,
  };
}

/**
 * Kategoriye göre yazıları getir
 */
export async function getPostsByCategory(
  category: BlogCategory,
  locale: Locale = 'tr'
): Promise<BlogPostSummary[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.category === category);
}

/**
 * Etikete göre yazıları getir
 */
export async function getPostsByTag(
  tag: string,
  locale: Locale = 'tr'
): Promise<BlogPostSummary[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.tags.includes(tag));
}

/**
 * Öne çıkan yazıları getir
 */
export async function getFeaturedPosts(locale: Locale = 'tr'): Promise<BlogPostSummary[]> {
  const posts = await getAllPosts(locale);
  return posts
    .filter(post => post.featured)
    .slice(0, BLOG_CONFIG.featuredPostsCount);
}

/**
 * Pillar yazıları getir
 */
export async function getPillarPosts(locale: Locale = 'tr'): Promise<BlogPostSummary[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.pillar);
}

/**
 * Pillar-Cluster yapısını getir
 */
export async function getPillarClusters(locale: Locale = 'tr'): Promise<PillarCluster[]> {
  const allPosts = await getAllPosts(locale);
  const pillarPosts = allPosts.filter(post => post.pillar);
  
  return Promise.all(
    pillarPosts.map(async pillar => {
      const post = await getPostBySlug(pillar.slug, locale);
      const relatedSlugs = post?.frontmatter.relatedPosts || [];
      const clusters = allPosts.filter(p => relatedSlugs.includes(p.slug));
      
      return {
        pillar,
        clusters,
      };
    })
  );
}

/**
 * İlgili yazıları getir
 */
export async function getRelatedPosts(
  slug: string,
  locale: Locale = 'tr'
): Promise<BlogPostSummary[]> {
  const post = await getPostBySlug(slug, locale);
  if (!post) return [];
  
  const allPosts = await getAllPosts(locale);
  
  // Önce manuel olarak belirtilen ilgili yazıları kontrol et
  if (post.frontmatter.relatedPosts?.length) {
    const manualRelated = allPosts.filter(p => 
      post.frontmatter.relatedPosts?.includes(p.slug) && p.slug !== slug
    );
    if (manualRelated.length >= BLOG_CONFIG.relatedPostsCount) {
      return manualRelated.slice(0, BLOG_CONFIG.relatedPostsCount);
    }
  }
  
  // Aynı kategoriden yazıları bul
  const sameCategoryPosts = allPosts.filter(
    p => p.category === post.frontmatter.category && p.slug !== slug
  );
  
  // Ortak etiketlere göre sırala
  const scored = sameCategoryPosts.map(p => {
    const commonTags = p.tags.filter(tag => post.frontmatter.tags.includes(tag));
    return { post: p, score: commonTags.length };
  });
  
  scored.sort((a, b) => b.score - a.score);
  
  return scored.slice(0, BLOG_CONFIG.relatedPostsCount).map(s => s.post);
}

/**
 * Sonraki ve önceki yazıları getir
 */
export async function getAdjacentPosts(
  slug: string,
  locale: Locale = 'tr'
): Promise<{ previous: BlogPostSummary | null; next: BlogPostSummary | null }> {
  const posts = await getAllPosts(locale);
  const currentIndex = posts.findIndex(p => p.slug === slug);
  
  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}

/**
 * Tüm slug'ları getir (static generation için)
 */
export async function getAllPostSlugs(locale?: Locale): Promise<{ slug: string; locale: Locale }[]> {
  const locales: Locale[] = locale ? [locale] : ['tr', 'en'];
  const slugs: { slug: string; locale: Locale }[] = [];
  
  for (const loc of locales) {
    const localeDir = path.join(CONTENT_DIR, loc);
    if (!fs.existsSync(localeDir)) continue;
    
    const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.mdx'));
    files.forEach(file => {
      slugs.push({
        slug: file.replace('.mdx', ''),
        locale: loc,
      });
    });
  }
  
  return slugs;
}

/**
 * Tüm kategorileri getir
 */
export async function getAllCategories(locale: Locale = 'tr'): Promise<{ category: BlogCategory; count: number }[]> {
  const posts = await getAllPosts(locale);
  const categoryCount: Record<string, number> = {};
  
  posts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });
  
  return Object.entries(categoryCount).map(([category, count]) => ({
    category: category as BlogCategory,
    count,
  }));
}

/**
 * Tüm etiketleri getir
 */
export async function getAllTags(locale: Locale = 'tr'): Promise<{ tag: string; count: number }[]> {
  const posts = await getAllPosts(locale);
  const tagCount: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * İçindekiler tablosu oluştur
 */
function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = slugify(title);
    
    toc.push({
      id,
      title,
      level,
    });
  }
  
  return toc;
}

/**
 * String'i slug'a çevir
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Sayfalama hesapla
 */
export function paginate<T>(
  items: T[],
  page: number,
  perPage: number = BLOG_CONFIG.postsPerPage
): {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    items: items.slice(startIndex, endIndex),
    currentPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}

/**
 * Tarih formatla
 */
export function formatDate(dateString: string, locale: Locale = 'tr'): string {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', options);
}
