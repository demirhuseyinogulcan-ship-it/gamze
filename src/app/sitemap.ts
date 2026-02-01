import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gamzetango.com';
  const lastModified = new Date();

  // Get all blog posts dynamically
  const allPostSlugs = await getAllPostSlugs();

  return [
    // ═══════════════════════════════════════════════════════════════════════════
    // MAIN PAGES - Turkish (Priority 1.0)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          tr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MAIN PAGES - English (Priority 0.9)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          tr: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // LOCATION PAGES - Turkish (Priority 1.0 - Local SEO Critical)
    // ═══════════════════════════════════════════════════════════════════════════

    // İstanbul - Main
    {
      url: `${baseUrl}/istanbul-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          tr: `${baseUrl}/istanbul-ozel-tango-dersi`,
          en: `${baseUrl}/en/private-tango-lessons-istanbul`,
        },
      },
    },
    {
      url: `${baseUrl}/istanbul-tango-kursu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Kadıköy - Anadolu Yakası
    {
      url: `${baseUrl}/kadikoy-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/kadikoy-ozel-tango-dersi`,
          en: `${baseUrl}/en/tango-lessons-kadikoy`,
        },
      },
    },

    // Beyoğlu - Avrupa Yakası
    {
      url: `${baseUrl}/beyoglu-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/beyoglu-ozel-tango-dersi`,
          en: `${baseUrl}/en/tango-lessons-beyoglu`,
        },
      },
    },

    // Silivri
    {
      url: `${baseUrl}/silivri-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/silivri-ozel-tango-dersi`,
          en: `${baseUrl}/en/tango-lessons-silivri`,
        },
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // LOCATION PAGES - English (Priority 0.9)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/en/private-tango-lessons-istanbul`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tango-lessons-kadikoy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/tango-lessons-beyoglu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/tango-lessons-silivri`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/wedding-dance-istanbul`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVICE PAGES - Turkish (Priority 0.95 - High Converting Pages)
    // ═══════════════════════════════════════════════════════════════════════════

    // Lady Styling
    {
      url: `${baseUrl}/lady-styling`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/lady-styling`,
          en: `${baseUrl}/en/lady-styling`,
        },
      },
    },

    // Silivri Dans Kursu (SEO Critical - "silivri dans kursu" keyword)
    {
      url: `${baseUrl}/silivri-dans-kursu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/silivri-dans-kursu`,
          en: `${baseUrl}/en/dance-lessons-silivri`,
        },
      },
    },

    // Silivri Tango Kursu
    {
      url: `${baseUrl}/silivri-tango-kursu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/silivri-tango-kursu`,
          en: `${baseUrl}/en/tango-course-silivri`,
        },
      },
    },

    // Düğün Dansı
    {
      url: `${baseUrl}/dugun-dansi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/dugun-dansi`,
          en: `${baseUrl}/en/wedding-dance`,
        },
      },
    },

    // Grup Tango Dersi
    {
      url: `${baseUrl}/grup-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/grup-tango-dersi`,
          en: `${baseUrl}/en/group-tango-lessons`,
        },
      },
    },

    // Özel Tango Dersi (General)
    {
      url: `${baseUrl}/ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/ozel-tango-dersi`,
          en: `${baseUrl}/en/private-tango-lessons`,
        },
      },
    },

    // Çift Tango Dersi
    {
      url: `${baseUrl}/cift-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/cift-tango-dersi`,
          en: `${baseUrl}/en/couple-tango-lessons`,
        },
      },
    },

    // Tango Deneme Dersi
    {
      url: `${baseUrl}/tango-deneme-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          tr: `${baseUrl}/tango-deneme-dersi`,
          en: `${baseUrl}/en/tango-trial-lesson`,
        },
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVICE PAGES - English (Priority 0.9)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/en/lady-styling`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/dance-lessons-silivri`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/tango-course-silivri`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BLOG PAGES - Turkish (Priority 0.9)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    // Pillar Content (Highest Priority)
    {
      url: `${baseUrl}/blog/tango-rehberi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/dugun-dansi-tango`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/lady-styling-rehberi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/tango-muzigi-rehberi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/milonga-adabi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/tango-tarihi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog/tango-saglik-faydalari`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Cluster Content
    {
      url: `${baseUrl}/blog/tango-nedir`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ilk-tango-dersi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tango-terimleri`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BLOG PAGES - English (Priority 0.85)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/en/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.85,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // LEGAL PAGES (Low Priority)
    // ═══════════════════════════════════════════════════════════════════════════
    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/kullanim-sartlari`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // BLOG POSTS - Dynamically generated from content directory
    // ═══════════════════════════════════════════════════════════════════════════
    ...allPostSlugs.map(({ slug, locale }) => {
      const url = locale === 'tr'
        ? `${baseUrl}/blog/${slug}`
        : `${baseUrl}/en/blog/${slug}`;

      // Determine priority based on pillar content
      const isPillar = [
        'tango-rehberi', 'dugun-dansi-tango', 'lady-styling-rehberi',
        'tango-muzigi-rehberi', 'milonga-adabi', 'tango-tarihi', 'tango-saglik-faydalari',
        'tango-guide', 'wedding-dance-tango', 'lady-styling-guide'
      ].includes(slug);

      return {
        url,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: isPillar ? 0.9 : 0.7,
        alternates: {
          languages: {
            tr: locale === 'tr' ? url : `${baseUrl}/blog/${slug}`,
            en: locale === 'en' ? url : `${baseUrl}/en/blog/${slug}`,
          },
        },
      };
    }),
  ];
}
