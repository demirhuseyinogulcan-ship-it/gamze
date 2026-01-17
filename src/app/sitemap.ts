import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gamzetango.com';
  const lastModified = new Date();

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Section Anchors
    {
      url: `${baseUrl}/#about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#schedule`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Location Pages - HIGH PRIORITY FOR LOCAL SEO
    // These are the main landing pages for "özel tango dersi" searches
    // ─────────────────────────────────────────────────────────────────────────

    // Main İstanbul Page (Highest Priority)
    {
      url: `${baseUrl}/istanbul-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Silivri Page
    {
      url: `${baseUrl}/silivri-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Kadıköy Page (Anadolu Yakası)
    {
      url: `${baseUrl}/kadikoy-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // Beyoğlu Page (Avrupa Yakası)
    {
      url: `${baseUrl}/beyoglu-ozel-tango-dersi`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // Legal Pages (Turkish)
    // ─────────────────────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────────────────────
    // Legal Pages (English)
    // ─────────────────────────────────────────────────────────────────────────
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

    // ─────────────────────────────────────────────────────────────────────────
    // Blog Pages - HIGH PRIORITY FOR CONTENT SEO
    // ─────────────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
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
  ];
}
