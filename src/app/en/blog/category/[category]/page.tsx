/**
 * English Blog Category Page
 * Lists blog posts by category
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

// Generate static paths
export async function generateStaticParams() {
  return BLOG_CATEGORIES.map(cat => ({
    category: cat.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found',
    };
  }
  
  return {
    title: `${categoryInfo.name.en} | Blog`,
    description: categoryInfo.description.en,
    openGraph: {
      title: `${categoryInfo.name.en} | Gamze Tango Blog`,
      description: categoryInfo.description.en,
      url: `https://gamzetango.com/en/blog/category/${category}`,
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://gamzetango.com/en/blog/category/${category}`,
      languages: {
        'tr-TR': `/blog/kategori/${category}`,
        'en-US': `/en/blog/category/${category}`,
      },
    },
  };
}

export default async function EnglishCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryInfo(category);
  
  if (!categoryInfo) {
    notFound();
  }
  
  const allPosts = await getPostsByCategory(category as BlogCategory, 'en');
  const categories = await getAllCategories('en');
  const tags = await getAllTags('en');
  
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
          locale="en"
          subtitle="CATEGORY"
          title={categoryInfo.name.en}
          description={categoryInfo.description.en}
        />
        
        <section className="py-12 md:py-20">
          <Container>
            <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">
              <div>
                {posts.length > 0 ? (
                  <>
                    <BlogGrid posts={posts} columns={2} showFeatured={false} />
                    <BlogPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      basePath={`/en/blog/category/${category}`}
                    />
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/60 text-lg">No posts in this category yet.</p>
                  </div>
                )}
              </div>
              
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="en"
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
