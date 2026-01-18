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
    // ═══════════════════════════════════════════════════════════════════════
    // KADIKÖY - TÜM VARYASYONLAR (Ana Hedef Kelimeler)
    // ═══════════════════════════════════════════════════════════════════════
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
    'tango eğitmeni kadıköy',
    'kadıköy özel ders tango',
    'tango özel ders kadıköy',
    'kadıköy tango okulu',
    'kadıköy birebir tango',
    'kadıköy private tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ANADOLU YAKASI - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'anadolu yakası tango',
    'tango anadolu yakası',
    'anadolu yakası tango dersi',
    'tango dersi anadolu yakası',
    'anadolu yakası özel tango dersi',
    'özel tango dersi anadolu yakası',
    'anadolu yakası tango kursu',
    'anadolu yakası tango hocası',
    'anadolu yakası tango eğitmeni',
    'anadolu yakası birebir tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // SEMT BAZLI ARAMALAR (Kadıköy Çevresi)
    // ═══════════════════════════════════════════════════════════════════════
    'moda tango dersi',
    'moda tango kursu',
    'bağdat caddesi tango',
    'bağdat caddesi tango dersi',
    'fenerbahçe tango dersi',
    'fenerbahçe tango kursu',
    'üsküdar tango dersi',
    'üsküdar tango kursu',
    'ataşehir tango dersi',
    'ataşehir tango kursu',
    'maltepe tango dersi',
    'maltepe tango kursu',
    'kartal tango dersi',
    'pendik tango dersi',
    'göztepe tango dersi',
    'suadiye tango dersi',
    'erenköy tango dersi',
    'kozyatağı tango dersi',
    'acıbadem tango dersi',
    'altunizade tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DÜĞÜN DANSI - KADIKÖY & ANADOLU YAKASI
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy düğün dansı',
    'düğün dansı kadıköy',
    'kadıköy düğün dansı kursu',
    'anadolu yakası düğün dansı',
    'düğün dansı anadolu yakası',
    'kadıköy ilk dans',
    'kadıköy nikah dansı',
    'kadıköy evlilik dansı',
    
    // ═══════════════════════════════════════════════════════════════════════
    // LADY STYLING - KADIKÖY
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy lady styling',
    'lady styling kadıköy',
    'anadolu yakası lady styling',
    'kadıköy kadın tango dersi',
    'kadıköy solo tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // FİYAT VE BİLGİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy tango dersi fiyat',
    'kadıköy tango fiyatları',
    'kadıköy özel tango dersi ücreti',
    'anadolu yakası tango fiyat',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BAŞLANGIÇ SEVİYESİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy tango başlangıç',
    'kadıköy sıfırdan tango',
    'kadıköy yeni başlayanlar tango',
    'anadolu yakası tango başlangıç',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ARJANTİN TANGO & DANS TÜRLERİ
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy arjantin tango',
    'kadıköy arjantin tangosu',
    'kadıköy milonga',
    'kadıköy tango vals',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ENGLISH KEYWORDS (Turistler için)
    // ═══════════════════════════════════════════════════════════════════════
    'kadikoy tango lessons',
    'tango lessons kadikoy',
    'private tango kadikoy',
    'tango classes asian side istanbul',
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
