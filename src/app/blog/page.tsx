/**
 * Blog Main Page (Turkish)
 * ─────────────────────────────────────────────────────────────────────────────
 * Tüm Türkçe blog yazılarını Infinite Scroll ile listeler
 * 
 * SEO: İlk 6 yazı SSR ile render edilir
 * Performance: Sonraki yazılar lazy load edilir
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next';
import { Navbar, Footer, AmbientSound } from '@/components/ui';
import { 
  BlogHero, 
  BlogSidebar, 
  PillarClustersList,
  InfiniteScrollBlog,
} from '@/components/blog';
import { Container } from '@/components/ui';
import { 
  getAllPosts, 
  getAllCategories, 
  getAllTags,
  getPillarClusters,
} from '@/lib/blog';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Blog | Tango Dünyası',
  description: 'Arjantin tangosu hakkında yazılar, ipuçları ve deneyimler. Gamze Yıldız\'ın kaleminden tango dünyasına dair her şey.',
  keywords: [
    'tango blog',
    'tango yazıları',
    'tango ipuçları',
    'arjantin tangosu',
    'tango öğrenmek',
    'tango dersleri',
    'gamze yıldız blog',
  ],
  openGraph: {
    title: 'Blog | Gamze Tango',
    description: 'Arjantin tangosu hakkında yazılar, ipuçları ve deneyimler.',
    url: 'https://gamzetango.com/blog',
    siteName: 'Gamze Tango',
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamzetango.com/blog',
    languages: {
      'tr-TR': '/blog',
      'en-US': '/en/blog',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Schema
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Gamze Tango Blog',
  description: 'Arjantin tangosu hakkında yazılar, ipuçları ve deneyimler',
  url: 'https://gamzetango.com/blog',
  inLanguage: 'tr-TR',
  author: {
    '@type': 'Person',
    name: 'Gamze Yıldız',
    url: 'https://gamzetango.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Gamze Tango',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gamzetango.com/icons/icon-512.png',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_POSTS_COUNT = 6; // İlk yüklemede gösterilecek yazı sayısı (SEO için)

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function BlogPage() {
  // Blog verilerini getir
  const allPosts = await getAllPosts('tr');
  const categories = await getAllCategories('tr');
  const tags = await getAllTags('tr');
  const pillarClusters = await getPillarClusters('tr');
  
  // İlk yükleme için ilk N yazı (SSR - SEO friendly)
  const initialPosts = allPosts.slice(0, INITIAL_POSTS_COUNT);
  
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-midnight">
        {/* Hero */}
        <BlogHero locale="tr" />
        
        {/* Main Content */}
        <section className="py-12 md:py-20">
          <Container>
            {/* Pillar-Cluster Section */}
            {pillarClusters.length > 0 && (
              <div className="mb-16">
                <PillarClustersList clusters={pillarClusters} locale="tr" />
              </div>
            )}
            
            {/* Blog Grid with Sidebar */}
            <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">
              {/* Main Content - Infinite Scroll */}
              <div>
                <InfiniteScrollBlog
                  initialPosts={initialPosts}
                  allPosts={allPosts}
                  batchSize={6}
                  columns={2}
                  showFeatured={pillarClusters.length === 0}
                  locale="tr"
                />
              </div>
              
              {/* Sidebar */}
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="tr"
                  categories={categories}
                  popularTags={tags.slice(0, 15)}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
      <AmbientSound />
    </>
  );
}
