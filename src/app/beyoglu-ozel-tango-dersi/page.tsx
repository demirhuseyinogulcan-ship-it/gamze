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
    // ═══════════════════════════════════════════════════════════════════════
    // BEYOĞLU - TÜM VARYASYONLAR (Ana Hedef Kelimeler)
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu tango dersi',
    'tango dersi beyoğlu',
    'beyoğlu özel tango dersi',
    'özel tango dersi beyoğlu',
    'beyoğlu tango kursu',
    'tango kursu beyoğlu',
    'beyoğlu tango eğitimi',
    'tango eğitimi beyoğlu',
    'beyoğlu tango hocası',
    'tango hocası beyoğlu',
    'beyoğlu tango eğitmeni',
    'tango eğitmeni beyoğlu',
    'beyoğlu özel ders tango',
    'tango özel ders beyoğlu',
    'beyoğlu tango okulu',
    'beyoğlu birebir tango',
    'beyoğlu private tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // TAKSİM - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'taksim tango',
    'tango taksim',
    'taksim tango dersi',
    'tango dersi taksim',
    'taksim özel tango dersi',
    'özel tango dersi taksim',
    'taksim tango kursu',
    'tango kursu taksim',
    'taksim tango hocası',
    'taksim tango eğitmeni',
    'taksim birebir tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // AVRUPA YAKASI - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'avrupa yakası tango',
    'tango avrupa yakası',
    'avrupa yakası tango dersi',
    'tango dersi avrupa yakası',
    'avrupa yakası özel tango dersi',
    'özel tango dersi avrupa yakası',
    'avrupa yakası tango kursu',
    'avrupa yakası tango hocası',
    'avrupa yakası tango eğitmeni',
    'avrupa yakası birebir tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // SEMT BAZLI ARAMALAR (Beyoğlu Çevresi)
    // ═══════════════════════════════════════════════════════════════════════
    'galata tango dersi',
    'galata tango kursu',
    'cihangir tango',
    'cihangir tango dersi',
    'karaköy tango dersi',
    'karaköy tango kursu',
    'şişli tango dersi',
    'şişli tango kursu',
    'nişantaşı tango dersi',
    'nişantaşı tango kursu',
    'mecidiyeköy tango dersi',
    'levent tango dersi',
    'beşiktaş tango dersi',
    'beşiktaş tango kursu',
    'etiler tango dersi',
    'bebek tango dersi',
    'ortaköy tango dersi',
    'harbiye tango dersi',
    'osmanbey tango dersi',
    'fulya tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DÜĞÜN DANSI - BEYOĞLU & AVRUPA YAKASI
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu düğün dansı',
    'düğün dansı beyoğlu',
    'beyoğlu düğün dansı kursu',
    'taksim düğün dansı',
    'düğün dansı taksim',
    'avrupa yakası düğün dansı',
    'düğün dansı avrupa yakası',
    'beyoğlu ilk dans',
    'taksim nikah dansı',
    
    // ═══════════════════════════════════════════════════════════════════════
    // LADY STYLING - BEYOĞLU
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu lady styling',
    'lady styling beyoğlu',
    'taksim lady styling',
    'avrupa yakası lady styling',
    'beyoğlu kadın tango dersi',
    'beyoğlu solo tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // FİYAT VE BİLGİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu tango dersi fiyat',
    'beyoğlu tango fiyatları',
    'taksim tango dersi ücreti',
    'avrupa yakası tango fiyat',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BAŞLANGIÇ SEVİYESİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu tango başlangıç',
    'beyoğlu sıfırdan tango',
    'taksim yeni başlayanlar tango',
    'avrupa yakası tango başlangıç',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ARJANTİN TANGO & DANS TÜRLERİ
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu arjantin tango',
    'taksim arjantin tangosu',
    'beyoğlu milonga',
    'taksim milonga',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ENGLISH KEYWORDS (Turistler için)
    // ═══════════════════════════════════════════════════════════════════════
    'beyoglu tango lessons',
    'taksim tango lessons',
    'tango lessons taksim',
    'private tango beyoglu',
    'tango classes european side istanbul',
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
