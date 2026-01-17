/**
 * Blog Category Page
 * Kategoriye göre blog yazılarını listeler
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar, Footer, Container, AmbientSound } from '@/components/ui';
import { BlogHero, BlogGrid, BlogSidebar, BlogPagination } from '@/components/blog';
import { getPostsByCategory, getAllCategories, getAllTags, paginate } from '@/lib/blog';
import { BLOG_CATEGORIES, getCategoryInfo, BLOG_CONFIG } from '@/lib/constants/blog';
import { BlogCategory } from '@/types/blog';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Static paths oluştur
export async function generateStaticParams() {
  return BLOG_CATEGORIES.map(cat => ({
    category: cat.slug,
  }));
}

// Metadata oluştur
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    return {
      title: 'Kategori Bulunamadı',
    };
  }
  
  return {
    title: `${categoryInfo.name.tr} | Blog`,
    description: categoryInfo.description.tr,
    openGraph: {
      title: `${categoryInfo.name.tr} | Gamze Tango Blog`,
      description: categoryInfo.description.tr,
      url: `https://gamzetango.com/blog/kategori/${category}`,
    },
    alternates: {
      canonical: `https://gamzetango.com/blog/kategori/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    notFound();
  }
  
  const allPosts = await getPostsByCategory(category as BlogCategory, 'tr');
  const categories = await getAllCategories('tr');
  const tags = await getAllTags('tr');
  
  const { items: posts, currentPage, totalPages } = paginate(
    allPosts,
    1,
    BLOG_CONFIG.postsPerPage
  );
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-midnight">
        <BlogHero
          locale="tr"
          subtitle="KATEGORİ"
          title={`${categoryInfo.icon} ${categoryInfo.name.tr}`}
          description={categoryInfo.description.tr}
        />
        
        <section className="py-12 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">
              <div>
                <BlogGrid posts={posts} columns={2} showFeatured={false} />
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  basePath={`/blog/kategori/${category}`}
                />
              </div>
              
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="tr"
                  currentCategory={category as BlogCategory}
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
