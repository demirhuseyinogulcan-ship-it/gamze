/**
 * Beyoğlu Özel Tango Dersi - Location Page
 * SEO-optimized landing page for Beyoğlu private lessons
 */

import type { Metadata } from 'next';
import { BEYOGLU_LOCATION, generateLocalBusinessSchema } from '@/lib/constants/locations';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { Navbar, Footer } from '@/components/ui';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: BEYOGLU_LOCATION.seo.title,
  description: BEYOGLU_LOCATION.seo.description,
  keywords: [
    // Beyoğlu - Tüm Varyasyonlar
    'beyoğlu tango dersi',
    'tango dersi beyoğlu',
    'beyoğlu özel tango dersi',
    'özel tango dersi beyoğlu',
    'beyoğlu tango kursu',
    'tango kursu beyoğlu',
    'beyoğlu tango eğitimi',
    'beyoğlu tango hocası',
    'beyoğlu özel ders tango',
    
    // Taksim Varyasyonları
    'taksim tango',
    'tango taksim',
    'taksim tango dersi',
    'tango dersi taksim',
    'taksim özel tango dersi',
    
    // Diğer Semtler
    'galata tango dersi',
    'cihangir tango',
    'karaköy tango dersi',
    'şişli tango dersi',
    'nişantaşı tango dersi',
    
    // Avrupa Yakası
    'avrupa yakası tango',
    'tango avrupa yakası',
    'avrupa yakası tango dersi',
    'avrupa yakası özel tango dersi',
    
    // Düğün Dansı
    'beyoğlu düğün dansı',
    'taksim düğün dansı',
    'istanbul tango eğitmeni',
  ],
  alternates: {
    canonical: BEYOGLU_LOCATION.seo.canonicalUrl,
  },
  openGraph: {
    title: BEYOGLU_LOCATION.seo.title,
    description: BEYOGLU_LOCATION.seo.description,
    url: BEYOGLU_LOCATION.seo.canonicalUrl,
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: `https://gamzetango.com${BEYOGLU_LOCATION.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Beyoğlu Özel Tango Dersi - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BEYOGLU_LOCATION.seo.title,
    description: BEYOGLU_LOCATION.seo.description,
    images: [`https://gamzetango.com${BEYOGLU_LOCATION.heroImage}`],
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
const jsonLd = generateLocalBusinessSchema(BEYOGLU_LOCATION);

export default function BeyogluOzelTangoDersiPage() {
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
          name={BEYOGLU_LOCATION.name}
          tagline={BEYOGLU_LOCATION.tagline}
          heroImage={BEYOGLU_LOCATION.heroImage}
          locale="tr"
        />

        {/* Features Section */}
        <LocationFeatures
          features={BEYOGLU_LOCATION.features}
          locale="tr"
        />

        {/* Map & Directions Section */}
        <LocationMap
          coordinates={BEYOGLU_LOCATION.coordinates}
          address={BEYOGLU_LOCATION.address}
          googleMapsEmbed={BEYOGLU_LOCATION.googleMapsEmbed}
          accessInfo={BEYOGLU_LOCATION.accessInfo}
        />

        {/* Call to Action Section */}
        <LocationCTA
          contact={BEYOGLU_LOCATION.contact}
          locationName={BEYOGLU_LOCATION.name}
          locale="tr"
          locationSlug="beyoglu-ozel-tango-dersi"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
