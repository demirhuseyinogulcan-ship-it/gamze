/**
 * Kadıköy Özel Tango Dersi - Location Page
 * SEO-optimized landing page for Kadıköy private lessons
 */

import type { Metadata } from 'next';
import { KADIKOY_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: KADIKOY_LOCATION.seo.title,
  description: KADIKOY_LOCATION.seo.description,
  keywords: [
    // Kadıköy - Tüm Varyasyonlar
    'kadıköy tango dersi',
    'tango dersi kadıköy',
    'kadıköy özel tango dersi',
    'özel tango dersi kadıköy',
    'kadıköy tango kursu',
    'tango kursu kadıköy',
    'kadıköy tango eğitimi',
    'tango eğitimi kadıköy',
    'kadıköy tango hocası',
    'tango hocası kadıköy',
    'kadıköy tango eğitmeni',
    'kadıköy özel ders tango',
    'tango özel ders kadıköy',
    
    // Anadolu Yakası
    'anadolu yakası tango',
    'tango anadolu yakası',
    'anadolu yakası tango dersi',
    'anadolu yakası özel tango dersi',
    
    // Semt Bazlı
    'moda tango dersi',
    'bağdat caddesi tango',
    'fenerbahçe tango dersi',
    'üsküdar tango dersi',
    'ataşehir tango dersi',
    'maltepe tango dersi',
    
    // Düğün Dansı
    'kadıköy düğün dansı',
    'düğün dansı kadıköy',
    'anadolu yakası düğün dansı',
  ],
  alternates: {
    canonical: KADIKOY_LOCATION.seo.canonicalUrl,
  },
  openGraph: {
    title: KADIKOY_LOCATION.seo.title,
    description: KADIKOY_LOCATION.seo.description,
    url: KADIKOY_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${KADIKOY_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Kadıköy Özel Tango Dersi - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: KADIKOY_LOCATION.seo.title,
    description: KADIKOY_LOCATION.seo.description,
    images: [`https://gamzetango.com${KADIKOY_LOCATION.heroImage}`],
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
const jsonLd = generateLocalBusinessSchema(KADIKOY_LOCATION);

export default function KadikoyOzelTangoDersiPage() {
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
          name={KADIKOY_LOCATION.name}
          tagline={KADIKOY_LOCATION.tagline}
          heroImage={KADIKOY_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={KADIKOY_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={KADIKOY_LOCATION.coordinates}
          address={KADIKOY_LOCATION.address}
          googleMapsEmbed={KADIKOY_LOCATION.googleMapsEmbed}
          accessInfo={KADIKOY_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={KADIKOY_LOCATION.contact}
          locationName={KADIKOY_LOCATION.name}
          locale="tr"
          locationSlug="kadikoy-ozel-tango-dersi"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
