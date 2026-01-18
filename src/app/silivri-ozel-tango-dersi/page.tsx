/**
 * Silivri Özel Tango Dersi - Location Page
 * SEO-optimized landing page for Silivri private lessons
 */

import type { Metadata } from 'next';
import { SILIVRI_OZEL_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: SILIVRI_OZEL_LOCATION.seo.title,
  description: SILIVRI_OZEL_LOCATION.seo.description,
  keywords: [
    // Silivri - Tüm Varyasyonlar
    'silivri tango dersi',
    'tango dersi silivri',
    'silivri özel tango dersi',
    'özel tango dersi silivri',
    'silivri tango kursu',
    'tango kursu silivri',
    'silivri tango eğitimi',
    'silivri tango hocası',
    'silivri dans kursu',
    
    // Düğün Dansı
    'silivri düğün dansı',
    'düğün dansı silivri',
    'silivri düğün dansı kursu',
    
    // Arjantin Tango
    'silivri arjantin tango',
    'arjantin tango silivri',
    
    // Genel
    'silivri dans eğitimi',
    'silivri dans okulu',
  ],
  alternates: {
    canonical: SILIVRI_OZEL_LOCATION.seo.canonicalUrl,
  },
  openGraph: {
    title: SILIVRI_OZEL_LOCATION.seo.title,
    description: SILIVRI_OZEL_LOCATION.seo.description,
    url: SILIVRI_OZEL_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${SILIVRI_OZEL_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Silivri Özel Tango Dersi - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SILIVRI_OZEL_LOCATION.seo.title,
    description: SILIVRI_OZEL_LOCATION.seo.description,
    images: [`https://gamzetango.com${SILIVRI_OZEL_LOCATION.heroImage}`],
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
const jsonLd = generateLocalBusinessSchema(SILIVRI_OZEL_LOCATION);

export default function SilivriOzelTangoDersiPage() {
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
          name={SILIVRI_OZEL_LOCATION.name}
          tagline={SILIVRI_OZEL_LOCATION.tagline}
          heroImage={SILIVRI_OZEL_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={SILIVRI_OZEL_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={SILIVRI_OZEL_LOCATION.coordinates}
          address={SILIVRI_OZEL_LOCATION.address}
          googleMapsEmbed={SILIVRI_OZEL_LOCATION.googleMapsEmbed}
          accessInfo={SILIVRI_OZEL_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={SILIVRI_OZEL_LOCATION.contact}
          locationName={SILIVRI_OZEL_LOCATION.name}
          locale="tr"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
