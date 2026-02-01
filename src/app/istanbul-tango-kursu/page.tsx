/**
 * İstanbul Tango Kursu - Location Page
 * SEO-optimized landing page for Istanbul location
 * 
 * Features:
 * - Full SEO metadata with OpenGraph
 * - Schema.org LocalBusiness + Course + AggregateRating JSON-LD
 * - All location-specific components
 * - Commercial intent optimization
 */

import type { Metadata } from 'next';
import { ISTANBUL_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: ISTANBUL_LOCATION.seo.title,
  description: ISTANBUL_LOCATION.seo.description,
  keywords: ISTANBUL_LOCATION.seo.keywords.join(', '),
  alternates: {
    canonical: ISTANBUL_LOCATION.seo.canonicalUrl,
    languages: {
      'tr-TR': '/istanbul-tango-kursu',
      'en-US': '/en/tango-lessons-istanbul',
    },
  },
  openGraph: {
    title: ISTANBUL_LOCATION.seo.title,
    description: ISTANBUL_LOCATION.seo.description,
    url: ISTANBUL_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${ISTANBUL_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'İstanbul Tango Kursu - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ISTANBUL_LOCATION.seo.title,
    description: ISTANBUL_LOCATION.seo.description,
    images: [`https://gamzetango.com${ISTANBUL_LOCATION.heroImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Generate JSON-LD schema with Course and AggregateRating
const localBusinessSchema = generateLocalBusinessSchema(ISTANBUL_LOCATION);
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://gamzetango.com/istanbul-tango-kursu#course',
  name: 'İstanbul Tango Kursu',
  description: 'İstanbul\'da profesyonel Arjantin tango eğitimi. Başlangıç, orta ve ileri seviye gruplar.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://gamzetango.com/#organization',
    name: 'Gamze Tango',
  },
  educationalLevel: 'All Levels',
  inLanguage: 'tr',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    instructor: {
      '@type': 'Person',
      '@id': 'https://gamzetango.com/#person',
      name: 'Gamze Yıldız',
    },
    location: {
      '@type': 'Place',
      name: 'Gamze Tango İstanbul',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 87,
    bestRating: 5,
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'TRY',
    category: 'Tango Kursu',
  },
};

export default function IstanbulTangoKursuPage() {
  return (
    <>
      {/* JSON-LD Schemas for SEO - LocalBusiness + Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-midnight">
        {/* Hero Section */}
        <LocationHero
          name={ISTANBUL_LOCATION.name}
          tagline={ISTANBUL_LOCATION.tagline}
          heroImage={ISTANBUL_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={ISTANBUL_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={ISTANBUL_LOCATION.coordinates}
          address={ISTANBUL_LOCATION.address}
          googleMapsEmbed={ISTANBUL_LOCATION.googleMapsEmbed}
          accessInfo={ISTANBUL_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={ISTANBUL_LOCATION.contact}
          locationName={ISTANBUL_LOCATION.name}
          locale="tr"
          locationSlug="istanbul-tango-kursu"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
