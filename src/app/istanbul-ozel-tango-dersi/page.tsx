/**
 * İstanbul Özel Tango Dersi - Location Page
 * SEO-optimized landing page for Istanbul private lessons
 */

import type { Metadata } from 'next';
import { ISTANBUL_OZEL_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: ISTANBUL_OZEL_LOCATION.seo.title,
  description: ISTANBUL_OZEL_LOCATION.seo.description,
  keywords: [
    // Ana Keywords - Tüm Varyasyonlar
    'özel tango dersi',
    'tango özel ders',
    'istanbul özel tango dersi',
    'özel tango dersi istanbul',
    'tango dersi istanbul',
    'istanbul tango dersi',
    'tango istanbul',
    'istanbul tango',
    
    // Kurs Varyasyonları
    'istanbul tango kursu',
    'tango kursu istanbul',
    'istanbul tango okulu',
    'tango okulu istanbul',
    
    // Eğitmen/Hoca Varyasyonları
    'istanbul tango eğitmeni',
    'tango eğitmeni istanbul',
    'istanbul tango hocası',
    'tango hocası istanbul',
    'profesyonel tango eğitimi',
    'birebir tango dersi',
    
    // Bölge Bazlı
    'avrupa yakası tango dersi',
    'anadolu yakası tango dersi',
    'kadıköy tango',
    'beyoğlu tango',
    'taksim tango',
    
    // Düğün Dansı
    'düğün dansı istanbul',
    'istanbul düğün dansı',
    'düğün dansı tango',
    'tango düğün dansı',
    'düğün ilk dansı istanbul',
    
    // Diğer
    'tango öğrenmek istanbul',
    'arjantin tangosu dersi',
    'tango dersi fiyatları',
    'lady styling istanbul',
  ],
  alternates: {
    canonical: ISTANBUL_OZEL_LOCATION.seo.canonicalUrl,
  },
  openGraph: {
    title: ISTANBUL_OZEL_LOCATION.seo.title,
    description: ISTANBUL_OZEL_LOCATION.seo.description,
    url: ISTANBUL_OZEL_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${ISTANBUL_OZEL_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'İstanbul Özel Tango Dersi - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ISTANBUL_OZEL_LOCATION.seo.title,
    description: ISTANBUL_OZEL_LOCATION.seo.description,
    images: [`https://gamzetango.com${ISTANBUL_OZEL_LOCATION.heroImage}`],
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
const jsonLd = generateLocalBusinessSchema(ISTANBUL_OZEL_LOCATION);

export default function IstanbulOzelTangoDersiPage() {
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
          name={ISTANBUL_OZEL_LOCATION.name}
          tagline={ISTANBUL_OZEL_LOCATION.tagline}
          heroImage={ISTANBUL_OZEL_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={ISTANBUL_OZEL_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={ISTANBUL_OZEL_LOCATION.coordinates}
          address={ISTANBUL_OZEL_LOCATION.address}
          googleMapsEmbed={ISTANBUL_OZEL_LOCATION.googleMapsEmbed}
          accessInfo={ISTANBUL_OZEL_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={ISTANBUL_OZEL_LOCATION.contact}
          locationName={ISTANBUL_OZEL_LOCATION.name}
          locale="tr"
          locationSlug="istanbul-ozel-tango-dersi"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
