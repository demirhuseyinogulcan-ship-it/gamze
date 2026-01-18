import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gamzetango.com';
  const lastModified = new Date();

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
  ];
}
