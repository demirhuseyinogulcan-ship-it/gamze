/**
 * Blog Main Page
 * Tüm blog yazılarını listeler
 */

import type { Metadata } from 'next';
import { Navbar, Footer, AmbientSound } from '@/components/ui';
import { 
  BlogHero, 
  BlogGrid, 
  BlogSidebar, 
  BlogPagination,
  PillarClustersList 
} from '@/components/blog';
import { Container } from '@/components/ui';
import { 
  getAllPosts, 
  getAllCategories, 
  getAllTags,
  getPillarClusters,
  paginate 
} from '@/lib/blog';
import { BLOG_CONFIG } from '@/lib/constants/blog';

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

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Gamze Tango Blog',
  description: 'Arjantin tangosu hakkında yazılar, ipuçları ve deneyimler',
  url: 'https://gamzetango.com/blog',
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

export default async function BlogPage() {
  // Blog verilerini getir
  const allPosts = await getAllPosts('tr');
  const categories = await getAllCategories('tr');
  const tags = await getAllTags('tr');
  const pillarClusters = await getPillarClusters('tr');
  
  // Sayfalama
  const { items: posts, currentPage, totalPages } = paginate(
    allPosts, 
    1, 
    BLOG_CONFIG.postsPerPage
  );
  
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
              {/* Main Content */}
              <div>
                <BlogGrid posts={posts} columns={2} showFeatured={pillarClusters.length === 0} />
                
                {/* Pagination */}
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath="/blog"
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
