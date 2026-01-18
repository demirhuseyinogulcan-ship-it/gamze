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
    // ═══════════════════════════════════════════════════════════════════════
    // SİLİVRİ - TÜM VARYASYONLAR (Ana Hedef Kelimeler)
    // ═══════════════════════════════════════════════════════════════════════
    'silivri tango dersi',
    'tango dersi silivri',
    'silivri özel tango dersi',
    'özel tango dersi silivri',
    'silivri tango kursu',
    'tango kursu silivri',
    'silivri tango eğitimi',
    'tango eğitimi silivri',
    'silivri tango hocası',
    'tango hocası silivri',
    'silivri tango eğitmeni',
    'tango eğitmeni silivri',
    'silivri özel ders tango',
    'tango özel ders silivri',
    'silivri tango okulu',
    'silivri birebir tango',
    'silivri private tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // SİLİVRİ ÇEVRESİ & BATI İSTANBUL
    // ═══════════════════════════════════════════════════════════════════════
    'silivri dans kursu',
    'silivri dans okulu',
    'silivri dans eğitimi',
    'büyükçekmece tango dersi',
    'büyükçekmece tango kursu',
    'çatalca tango dersi',
    'kumburgaz tango dersi',
    'selimpaşa tango dersi',
    'batı istanbul tango',
    'istanbul batı tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DÜĞÜN DANSI - SİLİVRİ
    // ═══════════════════════════════════════════════════════════════════════
    'silivri düğün dansı',
    'düğün dansı silivri',
    'silivri düğün dansı kursu',
    'silivri düğün dansı eğitimi',
    'silivri ilk dans',
    'silivri nikah dansı',
    'silivri evlilik dansı',
    'silivri düğün hazırlığı',
    
    // ═══════════════════════════════════════════════════════════════════════
    // LADY STYLING - SİLİVRİ
    // ═══════════════════════════════════════════════════════════════════════
    'silivri lady styling',
    'lady styling silivri',
    'silivri kadın tango dersi',
    'silivri kadınlar için tango',
    'silivri solo tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ARJANTİN TANGO & DANS TÜRLERİ
    // ═══════════════════════════════════════════════════════════════════════
    'silivri arjantin tango',
    'arjantin tango silivri',
    'silivri arjantin tangosu',
    'silivri milonga',
    'silivri tango vals',
    
    // ═══════════════════════════════════════════════════════════════════════
    // FİYAT VE BİLGİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'silivri tango dersi fiyat',
    'silivri tango fiyatları',
    'silivri özel tango dersi ücreti',
    'silivri dans kursu fiyat',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BAŞLANGIÇ SEVİYESİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'silivri tango başlangıç',
    'silivri sıfırdan tango',
    'silivri yeni başlayanlar tango',
    'silivri tango öğrenmek',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ENGLISH KEYWORDS (Turistler için)
    // ═══════════════════════════════════════════════════════════════════════
    'silivri tango lessons',
    'tango lessons silivri',
    'private tango silivri',
    'tango classes silivri istanbul',
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
          locationSlug="silivri-ozel-tango-dersi"
        />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
