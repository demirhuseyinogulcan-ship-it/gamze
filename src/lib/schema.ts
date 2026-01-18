import { CONTACT, SITE, SOCIAL } from '@/lib/constants/site';

/**
 * Generate Organization Schema for the entire site
 * This helps Google understand the business as a whole
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.URL}/#organization`,
    name: 'Gamze Tango',
    alternateName: 'Gamze Yıldız Tango',
    url: SITE.URL,
    logo: `${SITE.URL}/icons/icon-512.png`,
    image: `${SITE.URL}/images/og-image.jpg`,
    description: SITE.DESCRIPTION,
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Gamze Yıldız',
      jobTitle: 'Profesyonel Tango Eğitmeni',
      url: SITE.URL,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.PHONE,
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English'],
      areaServed: 'TR',
    },
    sameAs: [
      SOCIAL.INSTAGRAM,
      SOCIAL.YOUTUBE,
      SOCIAL.FACEBOOK,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
  };
}

/**
 * Generate LocalBusiness Schema
 * This is crucial for local SEO - helps with "tango dersi istanbul" searches
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.URL}/#localbusiness`,
    name: 'Gamze Tango',
    alternateName: 'Gamze Yıldız Tango Eğitimi',
    description: 'İstanbul\'da profesyonel tango eğitimi. Özel dersler, düğün dansı, lady styling ve kurumsal workshop hizmetleri.',
    url: SITE.URL,
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
    image: `${SITE.URL}/images/og-image.jpg`,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'İstanbul',
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      postalCode: '34000',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0082,
      longitude: 28.9784,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'İstanbul',
      },
      {
        '@type': 'Place',
        name: 'Silivri',
      },
      {
        '@type': 'Place',
        name: 'Kadıköy',
      },
      {
        '@type': 'Place',
        name: 'Beyoğlu',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tango Eğitim Hizmetleri',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Özel Tango Dersi',
            description: 'Birebir kişiselleştirilmiş tango eğitimi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Düğün Dansı Eğitimi',
            description: 'Çiftlere özel düğün dansı koreografisi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lady Styling',
            description: 'Kadınlara özel tango tekniği ve zarafet çalışmaları',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kurumsal Workshop',
            description: 'Şirket etkinlikleri için tango workshop',
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      SOCIAL.INSTAGRAM,
      SOCIAL.YOUTUBE,
      SOCIAL.FACEBOOK,
    ],
  };
}

/**
 * Generate Service Schema for specific services
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE.URL}/#localbusiness`,
      name: 'Gamze Tango',
    },
    areaServed: service.areaServed || 'İstanbul',
    serviceType: 'Tango Eğitimi',
  };
}

/**
 * Generate WebSite Schema with SearchAction
 * Helps with sitelinks in Google search results
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.URL}/#website`,
    name: 'Gamze Tango',
    url: SITE.URL,
    description: SITE.DESCRIPTION,
    publisher: {
      '@id': `${SITE.URL}/#organization`,
    },
    inLanguage: ['tr-TR', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate FAQPage Schema
 * Helps get rich snippets in Google search results with FAQ accordion
 */
export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate VideoObject Schema
 * Helps videos appear in Google Video search and rich results
 */
export function generateVideoSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Gamze Yıldız Tango - İstanbul Tango Dersleri',
    description: 'Gamze Yıldız ile profesyonel tango eğitimi. İstanbul\'da Silivri, Kadıköy ve Beyoğlu lokasyonlarında özel tango dersleri.',
    thumbnailUrl: `${SITE.URL}/images/0.jpg`,
    uploadDate: '2024-01-01T00:00:00+03:00',
    contentUrl: `${SITE.URL}/images/5.mp4`,
    embedUrl: `${SITE.URL}/images/5.mp4`,
    duration: 'PT30S',
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: { '@type': 'WatchAction' },
      userInteractionCount: 5000,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gamze Tango',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.URL}/icons/icon-512.png`,
      },
    },
  };
}
