/**
 * Blog Type Definitions
 * Pillar-Cluster Model için tip tanımlamaları
 */

export type Locale = 'tr' | 'en';

// Blog yazısının durumu
export type BlogStatus = 'draft' | 'published' | 'archived';

// Blog kategorileri - Pillar topics
export type BlogCategory = 
  | 'tango-basics'      // Tango Nedir?
  | 'learning'          // Tango Nasıl Öğrenilir?
  | 'wedding-dance'     // Düğün Dansı
  | 'wedding'           // Düğün (alias)
  | 'lady-styling'      // Lady Styling
  | 'technique'         // Teknik
  | 'culture'           // Tango Kültürü
  | 'events'            // Etkinlikler
  | 'tips'              // İpuçları
  | 'wellness';         // Sağlık & Wellness

// Etiketler - detaylı konular
export interface BlogTag {
  slug: string;
  name: {
    tr: string;
    en: string;
  };
  description?: {
    tr: string;
    en: string;
  };
}

// Yazar bilgisi
export interface BlogAuthor {
  name: string;
  slug: string;
  bio: {
    tr: string;
    en: string;
  };
  image: string;
  social?: {
    instagram?: string;
    youtube?: string;
    website?: string;
  };
}

// Blog yazısının front matter'ı
export interface BlogFrontmatter {
  title: string;
  description: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  imageAlt: string;
  status: BlogStatus;
  featured?: boolean;
  pillar?: boolean; // Ana yazı mı?
  pillarSlug?: string; // Hangi pillar'a bağlı?
  relatedPosts?: string[]; // İlgili yazıların slug'ları
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };
}

// İşlenmiş blog yazısı
export interface BlogPost {
  slug: string;
  locale: Locale;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    words: number;
  };
  toc: TableOfContentsItem[];
}

// İçindekiler tablosu
export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  children?: TableOfContentsItem[];
}

// Blog listesi için özet
export interface BlogPostSummary {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: string;
  featured?: boolean;
  pillar?: boolean;
  author: {
    name: string;
    image: string;
  };
}

// Pillar-Cluster yapısı
export interface PillarCluster {
  pillar: BlogPostSummary;
  clusters: BlogPostSummary[];
}

// Kategori bilgisi
export interface CategoryInfo {
  slug: BlogCategory;
  name: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  icon: string;
  color: string;
}

// Blog sayfası props
export interface BlogPageProps {
  posts: BlogPostSummary[];
  categories: CategoryInfo[];
  tags: BlogTag[];
  featuredPost?: BlogPostSummary;
  pillarClusters?: PillarCluster[];
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

// Blog detay sayfası props
export interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPostSummary[];
  pillarPost?: BlogPostSummary;
  clusterPosts?: BlogPostSummary[];
  previousPost?: BlogPostSummary;
  nextPost?: BlogPostSummary;
}
