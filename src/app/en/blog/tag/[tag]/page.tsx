/**
 * English Blog Tag Page
 * Lists blog posts by tag
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

// Generate static paths
export async function generateStaticParams() {
  return BLOG_TAGS.map(tag => ({
    tag: tag.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagInfo = getTagInfo(tag);
  
  const tagName = tagInfo?.name.en || tag;
  const tagDesc = tagInfo?.description?.en || `All posts about ${tagName}`;
  
  return {
    title: `#${tagName} | Blog`,
    description: tagDesc,
    openGraph: {
      title: `#${tagName} | Gamze Tango Blog`,
      description: tagDesc,
      url: `https://gamzetango.com/en/blog/tag/${tag}`,
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://gamzetango.com/en/blog/tag/${tag}`,
      languages: {
        'tr-TR': `/blog/etiket/${tag}`,
        'en-US': `/en/blog/tag/${tag}`,
      },
    },
  };
}

export default async function EnglishTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const tagInfo = getTagInfo(tag);
  
  const allPosts = await getPostsByTag(tag, 'en');
  const categories = await getAllCategories('en');
  const tags = await getAllTags('en');
  
  // Tag not found and no posts
  if (allPosts.length === 0 && !tagInfo) {
    notFound();
  }
  
  const { items: posts, currentPage, totalPages } = paginate(
    allPosts,
    1,
    BLOG_CONFIG.postsPerPage
  );
  
  const tagName = tagInfo?.name.en || tag;
  const tagDesc = tagInfo?.description?.en || `All posts about ${tagName}`;
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-midnight">
        <BlogHero
          locale="en"
          subtitle="TAG"
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
                      basePath={`/en/blog/tag/${tag}`}
                    />
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/60 text-lg">No posts with this tag yet.</p>
                  </div>
                )}
              </div>
              
              <div className="hidden lg:block">
                <BlogSidebar
                  locale="en"
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
