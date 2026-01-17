/**
 * Blog Tag Page
 * Etikete göre blog yazılarını listeler
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar, Footer, Container, AmbientSound } from '@/components/ui';
import { BlogHero, BlogGrid, BlogSidebar, BlogPagination } from '@/components/blog';
import { getPostsByTag, getAllCategories, getAllTags, paginate } from '@/lib/blog';
import { BLOG_TAGS, getTagInfo, BLOG_CONFIG } from '@/lib/constants/blog';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// Static paths oluştur
export async function generateStaticParams() {
  return BLOG_TAGS.map(tag => ({
    tag: tag.slug,
  }));
}

// Metadata oluştur
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagInfo = getTagInfo(tag);
  
  const tagName = tagInfo?.name.tr || tag;
  const tagDesc = tagInfo?.description?.tr || `${tagName} ile ilgili tüm yazılar`;
  
  return {
    title: `#${tagName} | Blog`,
    description: tagDesc,
    openGraph: {
      title: `#${tagName} | Gamze Tango Blog`,
      description: tagDesc,
      url: `https://gamzetango.com/blog/etiket/${tag}`,
    },
    alternates: {
      canonical: `https://gamzetango.com/blog/etiket/${tag}`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const tagInfo = getTagInfo(tag);
  
  const allPosts = await getPostsByTag(tag, 'tr');
  const categories = await getAllCategories('tr');
  const tags = await getAllTags('tr');
  
  // Etiket bulunamadı veya yazı yok
  if (allPosts.length === 0 && !tagInfo) {
    notFound();
  }
  
  const { items: posts, currentPage, totalPages } = paginate(
    allPosts,
    1,
    BLOG_CONFIG.postsPerPage
  );
  
  const tagName = tagInfo?.name.tr || tag;
  const tagDesc = tagInfo?.description?.tr || `${tagName} ile ilgili tüm yazılar`;
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-midnight">
        <BlogHero
          locale="tr"
          subtitle="ETİKET"
          title={`#${tagName}`}
          description={tagDesc}
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
                      basePath={`/blog/etiket/${tag}`}
                    />
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/60 text-lg">Bu etikette henüz yazı bulunmuyor.</p>
                  </div>
                )}
              </div>
              
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="tr"
                  currentTag={tag}
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
