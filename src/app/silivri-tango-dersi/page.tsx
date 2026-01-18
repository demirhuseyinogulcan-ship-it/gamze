/**
 * Silivri Tango Dersi - Location Page
 * SEO-optimized landing page for Silivri location
 * 
 * Features:
 * - Full SEO metadata with OpenGraph
 * - Schema.org LocalBusiness JSON-LD
 * - All location-specific components
 * - Bilingual support ready
 */

import type { Metadata } from 'next';
import { SILIVRI_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: SILIVRI_LOCATION.seo.title,
  description: SILIVRI_LOCATION.seo.description,
  keywords: SILIVRI_LOCATION.seo.keywords.join(', '),
  alternates: {
    canonical: SILIVRI_LOCATION.seo.canonicalUrl,
    languages: {
      'tr-TR': '/silivri-tango-dersi',
      'en-US': '/en/tango-lessons-silivri',
    },
  },
  openGraph: {
    title: SILIVRI_LOCATION.seo.title,
    description: SILIVRI_LOCATION.seo.description,
    url: SILIVRI_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${SILIVRI_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Silivri Tango Dersi - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SILIVRI_LOCATION.seo.title,
    description: SILIVRI_LOCATION.seo.description,
    images: [`https://gamzetango.com${SILIVRI_LOCATION.heroImage}`],
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
const jsonLd = generateLocalBusinessSchema(SILIVRI_LOCATION);

export default function SilivriTangoDersiPage() {
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
          name={SILIVRI_LOCATION.name}
          tagline={SILIVRI_LOCATION.tagline}
          heroImage={SILIVRI_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={SILIVRI_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={SILIVRI_LOCATION.coordinates}
          address={SILIVRI_LOCATION.address}
          googleMapsEmbed={SILIVRI_LOCATION.googleMapsEmbed}
          accessInfo={SILIVRI_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={SILIVRI_LOCATION.contact}
          locationName={SILIVRI_LOCATION.name}
          locale="tr"
          locationSlug="silivri-tango-dersi"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
