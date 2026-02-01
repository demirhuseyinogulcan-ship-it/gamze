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

/**
 * Generate Course Schema
 * Critical for Google to understand tango lessons as structured courses
 * Helps with "tango kursu" and "tango dersi" searches
 */
export function generateCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  duration?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  language?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${course.url}/#course`,
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE.URL}/#organization`,
      name: 'Gamze Tango',
      sameAs: SITE.URL,
    },
    educationalLevel: course.level || 'All Levels',
    inLanguage: course.language || 'tr',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      courseWorkload: course.duration || 'PT1H',
      instructor: {
        '@type': 'Person',
        '@id': `${SITE.URL}/#person`,
        name: 'Gamze Yıldız',
        jobTitle: 'Profesyonel Tango Eğitmeni',
        url: SITE.URL,
      },
      location: {
        '@type': 'Place',
        name: 'Gamze Tango Stüdyo',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'İstanbul',
          addressCountry: 'TR',
        },
      },
    },
    offers: {
      '@type': 'Offer',
      category: 'Tango Eğitimi',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
      eligibleRegion: {
        '@type': 'Place',
        name: 'İstanbul',
      },
    },
  };
}

/**
 * Generate AggregateRating Schema
 * Shows star ratings in Google search results - increases CTR significantly
 */
export function generateAggregateRatingSchema(ratings: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratings.ratingValue,
    reviewCount: ratings.reviewCount,
    bestRating: ratings.bestRating || 5,
    worstRating: ratings.worstRating || 1,
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${SITE.URL}/#localbusiness`,
      name: 'Gamze Tango',
    },
  };
}

/**
 * Generate DanceSchool Schema with AggregateRating
 * Combined schema for rich results with reviews
 */
export function generateDanceSchoolWithRatingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    '@id': `${SITE.URL}/#danceschool`,
    name: 'Gamze Tango',
    alternateName: 'Gamze Yıldız Tango Eğitimi',
    description: 'İstanbul\'da profesyonel Arjantin tango eğitimi. Özel dersler, düğün dansı, lady styling.',
    url: SITE.URL,
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
    image: `${SITE.URL}/images/og-image.jpg`,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressRegion: 'İstanbul',
      addressCountry: 'TR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 87,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tango Eğitim Programları',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Özel Tango Dersi',
            description: 'Birebir kişiselleştirilmiş tango eğitimi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Düğün Dansı Programı',
            description: 'Çiftlere özel düğün dansı koreografisi',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Lady Styling',
            description: 'Kadınlara özel tango tekniği ve zarafet çalışmaları',
          },
        },
      ],
    },
    sameAs: [
      SOCIAL.INSTAGRAM,
      SOCIAL.YOUTUBE,
      SOCIAL.FACEBOOK,
    ],
  };
}

/**
 * Generate Event Schema for Milonga, Workshop, etc.
 * Helps events appear in Google search and Maps
 */
export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address: string;
  };
  eventType?: 'DanceEvent' | 'EducationEvent' | 'SocialEvent';
  url?: string;
  image?: string;
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: 'InStock' | 'SoldOut' | 'PreOrder';
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': event.eventType || 'DanceEvent',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: event.location ? {
      '@type': 'Place',
      name: event.location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location.address,
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
    } : {
      '@type': 'Place',
      name: 'Gamze Tango Stüdyo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
    },
    organizer: {
      '@type': 'Organization',
      '@id': `${SITE.URL}/#organization`,
      name: 'Gamze Tango',
      url: SITE.URL,
    },
    performer: {
      '@type': 'Person',
      '@id': `${SITE.URL}/#person`,
      name: 'Gamze Yıldız',
    },
    image: event.image || `${SITE.URL}/images/og-image.jpg`,
    url: event.url || SITE.URL,
    offers: event.offers ? {
      '@type': 'Offer',
      price: event.offers.price || 0,
      priceCurrency: event.offers.priceCurrency || 'TRY',
      availability: `https://schema.org/${event.offers.availability || 'InStock'}`,
      url: event.url || SITE.URL,
    } : undefined,
  };
}

/**
 * Generate HowTo Schema for step-by-step guides
 * Critical for AI answerability and featured snippets
 * Use in blog posts about techniques
 */
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  image?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
  tools?: string[];
  supplies?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime || 'PT30M',
    estimatedCost: howTo.estimatedCost ? {
      '@type': 'MonetaryAmount',
      currency: howTo.estimatedCost.currency,
      value: howTo.estimatedCost.value,
    } : undefined,
    image: howTo.image || `${SITE.URL}/images/og-image.jpg`,
    tool: howTo.tools?.map(tool => ({
      '@type': 'HowToTool',
      name: tool,
    })),
    supply: howTo.supplies?.map(supply => ({
      '@type': 'HowToSupply',
      name: supply,
    })),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };
}

/**
 * Generate ItemList Schema for listicle content
 * Helps with "best of" and "top X" type searches
 */
export function generateItemListSchema(list: {
  name: string;
  description: string;
  items: Array<{
    name: string;
    description?: string;
    url?: string;
    image?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: list.name,
    description: list.description,
    numberOfItems: list.items.length,
    itemListElement: list.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      description: item.description,
      url: item.url,
      image: item.image,
    })),
  };
}

/**
 * Generate DefinedTermSet Schema for glossary/dictionary pages
 * Critical for AI answerability - helps define tango terms
 */
export function generateGlossarySchema(terms: Array<{
  term: string;
  definition: string;
  url?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Tango Terimleri Sözlüğü',
    description: 'Arjantin tangosu terimleri ve anlamları - A\'dan Z\'ye tango sözlüğü',
    url: `${SITE.URL}/tango-sozlugu`,
    inLanguage: 'tr',
    hasDefinedTerm: terms.map(item => ({
      '@type': 'DefinedTerm',
      name: item.term,
      description: item.definition,
      url: item.url || `${SITE.URL}/tango-sozlugu#${item.term.toLowerCase().replace(/\s+/g, '-')}`,
      inDefinedTermSet: `${SITE.URL}/tango-sozlugu`,
    })),
  };
}
