/**
 * İstanbul Tango Kursu - Location Page
 * SEO-optimized landing page for Istanbul location
 * 
 * Features:
 * - Full SEO metadata with OpenGraph
 * - Schema.org LocalBusiness JSON-LD
 * - All location-specific components
 * - Bilingual support ready
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

// Generate JSON-LD schema
const jsonLd = generateLocalBusinessSchema(ISTANBUL_LOCATION);

export default function IstanbulTangoKursuPage() {
  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
