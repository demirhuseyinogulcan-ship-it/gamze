/**
 * English Blog Main Page
 * Lists all English blog posts
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
  title: 'Blog | Tango World',
  description: 'Articles, tips and experiences about Argentine tango. Everything about the world of tango from Gamze Yıldız.',
  keywords: [
    'tango blog',
    'tango articles',
    'tango tips',
    'argentine tango',
    'learn tango',
    'tango lessons',
    'gamze yildiz blog',
  ],
  openGraph: {
    title: 'Blog | Gamze Tango',
    description: 'Articles, tips and experiences about Argentine tango.',
    url: 'https://gamzetango.com/en/blog',
    siteName: 'Gamze Tango',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gamzetango.com/en/blog',
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
  description: 'Articles, tips and experiences about Argentine tango',
  url: 'https://gamzetango.com/en/blog',
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

export default async function EnglishBlogPage() {
  // Get blog data in English
  const allPosts = await getAllPosts('en');
  const categories = await getAllCategories('en');
  const tags = await getAllTags('en');
  const pillarClusters = await getPillarClusters('en');
  
  // Pagination
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
        <BlogHero locale="en" />
        
        {/* Main Content */}
        <section className="py-12 md:py-20">
          <Container>
            {/* Pillar-Cluster Section */}
            {pillarClusters.length > 0 && (
              <div className="mb-16">
                <PillarClustersList clusters={pillarClusters} locale="en" />
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
                  basePath="/en/blog"
                />
              </div>
              
              {/* Sidebar */}
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="en"
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
