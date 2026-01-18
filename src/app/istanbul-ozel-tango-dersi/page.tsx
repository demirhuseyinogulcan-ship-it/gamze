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
    // ═══════════════════════════════════════════════════════════════════════
    // ANA KEYWORDS - İSTANBUL ÖZEL TANGO DERSİ
    // ═══════════════════════════════════════════════════════════════════════
    'özel tango dersi',
    'tango özel ders',
    'birebir tango dersi',
    'private tango lesson',
    'kişiye özel tango',
    'özel tango eğitimi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // İSTANBUL - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'istanbul özel tango dersi',
    'özel tango dersi istanbul',
    'tango dersi istanbul',
    'istanbul tango dersi',
    'tango istanbul',
    'istanbul tango',
    'istanbul da tango',
    'istanbulda tango dersi',
    'istanbul birebir tango',
    'istanbul private tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // KURS VE OKUL VARYASYONLARI
    // ═══════════════════════════════════════════════════════════════════════
    'istanbul tango kursu',
    'tango kursu istanbul',
    'istanbul tango okulu',
    'tango okulu istanbul',
    'istanbul tango akademi',
    'istanbul dans okulu tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // EĞİTMEN/HOCA VARYASYONLARI
    // ═══════════════════════════════════════════════════════════════════════
    'istanbul tango eğitmeni',
    'tango eğitmeni istanbul',
    'istanbul tango hocası',
    'tango hocası istanbul',
    'istanbul tango öğretmeni',
    'profesyonel tango eğitimi',
    'profesyonel tango eğitmeni istanbul',
    'kadın tango eğitmeni istanbul',
    
    // ═══════════════════════════════════════════════════════════════════════
    // YAKA VE BÖLGE BAZLI
    // ═══════════════════════════════════════════════════════════════════════
    'avrupa yakası tango dersi',
    'tango dersi avrupa yakası',
    'anadolu yakası tango dersi',
    'tango dersi anadolu yakası',
    'kadıköy tango',
    'beyoğlu tango',
    'taksim tango',
    'silivri tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DÜĞÜN DANSI - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'düğün dansı istanbul',
    'istanbul düğün dansı',
    'düğün dansı tango',
    'tango düğün dansı',
    'düğün dansı kursu istanbul',
    'istanbul düğün dansı kursu',
    'düğün ilk dansı istanbul',
    'ilk dans istanbul',
    'nikah dansı istanbul',
    'evlilik dansı istanbul',
    'wedding dance istanbul',
    
    // ═══════════════════════════════════════════════════════════════════════
    // LADY STYLING - İSTANBUL
    // ═══════════════════════════════════════════════════════════════════════
    'lady styling istanbul',
    'istanbul lady styling',
    'lady styling dersi istanbul',
    'kadın tango dersi istanbul',
    'solo tango istanbul',
    'kadınlar için tango istanbul',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ARJANTİN TANGO & DANS TÜRLERİ
    // ═══════════════════════════════════════════════════════════════════════
    'arjantin tangosu dersi',
    'istanbul arjantin tango',
    'arjantin tango istanbul',
    'argentine tango istanbul',
    'tango argentino istanbul',
    'milonga istanbul',
    'istanbul milonga',
    
    // ═══════════════════════════════════════════════════════════════════════
    // FİYAT VE BİLGİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'tango dersi fiyatları',
    'tango dersi fiyatları istanbul',
    'istanbul tango fiyat',
    'özel tango dersi ücreti',
    'tango ne kadar',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BAŞLANGIÇ SEVİYESİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'tango öğrenmek istanbul',
    'istanbul da tango öğrenmek',
    'tango başlangıç istanbul',
    'sıfırdan tango istanbul',
    'yeni başlayanlar için tango istanbul',
    'istanbul tango deneme dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ENGLISH KEYWORDS (Turistler için)
    // ═══════════════════════════════════════════════════════════════════════
    'private tango lessons istanbul',
    'tango lessons istanbul',
    'tango classes istanbul',
    'learn tango istanbul',
    'tango instructor istanbul',
    'tango teacher istanbul',
    'argentine tango lessons istanbul',
    'wedding dance lessons istanbul',
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
