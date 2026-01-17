/**
 * Blog Post Detail Page
 * Tek bir blog yazısını gösterir
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar, Footer } from '@/components/ui';
import { Container } from '@/components/ui';
import { 
  BlogArticleHeader, 
  TableOfContents,
  BlogSidebar,
  BlogCard,
  MDXComponents,
  Callout,
  TangoTerm,
  GamzeQuote,
  VideoEmbed,
} from '@/components/blog';
import { 
  getPostBySlug, 
  getAllPostSlugs, 
  getRelatedPosts,
  getAdjacentPosts,
  getAllTags,
} from '@/lib/blog';
import { getAuthorInfo } from '@/lib/constants/blog';

// MDX işleme
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Static paths oluştur
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs('tr');
  return slugs.map(({ slug }) => ({ slug }));
}

// Metadata oluştur
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, 'tr');
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }
  
  const { frontmatter } = post;
  const author = getAuthorInfo(frontmatter.author);
  
  return {
    title: frontmatter.seo?.title || frontmatter.title,
    description: frontmatter.seo?.description || frontmatter.description,
    keywords: frontmatter.seo?.keywords || frontmatter.tags,
    authors: [{ name: author?.name || 'Gamze Yıldız' }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://gamzetango.com/blog/${slug}`,
      siteName: 'Gamze Tango',
      locale: 'tr_TR',
      type: 'article',
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updatedAt,
      authors: [author?.name || 'Gamze Yıldız'],
      images: [
        {
          url: `https://gamzetango.com${frontmatter.image}`,
          width: 1200,
          height: 630,
          alt: frontmatter.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [`https://gamzetango.com${frontmatter.image}`],
    },
    alternates: {
      canonical: frontmatter.seo?.canonicalUrl || `https://gamzetango.com/blog/${slug}`,
      languages: {
        'tr-TR': `/blog/${slug}`,
        'en-US': `/en/blog/${slug}`,
      },
    },
  };
}

// JSON-LD Article Schema
function generateArticleSchema(post: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>) {
  const { frontmatter, slug } = post;
  const author = getAuthorInfo(frontmatter.author);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    image: `https://gamzetango.com${frontmatter.image}`,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updatedAt || frontmatter.date,
    author: {
      '@type': 'Person',
      name: author?.name || 'Gamze Yıldız',
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gamzetango.com/blog/${slug}`,
    },
    keywords: frontmatter.tags.join(', '),
  };
}

// MDX bileşenleri
const components = {
  ...MDXComponents,
  Callout,
  TangoTerm,
  GamzeQuote,
  VideoEmbed,
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, 'tr');
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = await getRelatedPosts(slug, 'tr');
  const { previous, next } = await getAdjacentPosts(slug, 'tr');
  const tags = await getAllTags('tr');
  const jsonLd = generateArticleSchema(post);
  
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-midnight">
        {/* Article Header */}
        <BlogArticleHeader post={post} />
        
        {/* Article Content */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
              {/* Main Content */}
              <article className="prose prose-invert prose-gold max-w-none">
                <MDXRemote
                  source={post.content}
                  components={components}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                      ],
                    },
                  }}
                />
              </article>
              
              {/* Sidebar with TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  {post.toc.length > 0 && (
                    <TableOfContents items={post.toc} locale="tr" />
                  )}
                </div>
              </aside>
            </div>
            
            {/* Post Navigation */}
            <nav className="mt-16 pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                {previous && (
                  <BlogCard post={previous} variant="compact" />
                )}
                {next && (
                  <BlogCard post={next} variant="compact" />
                )}
              </div>
            </nav>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-8 border-t border-white/10">
                <h2 className="heading-sm text-white mb-8">İlgili Yazılar</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
                  ))}
                </div>
              </section>
            )}
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
