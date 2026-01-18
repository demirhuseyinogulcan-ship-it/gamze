/**
 * Homepage - Gamze Tango
 * Main landing page with full SEO metadata
 * 
 * CRITICAL: This page MUST have metadata for Google indexing!
 */

import type { Metadata } from 'next';
import { HomePageClient } from './HomePageClient';

// ═══════════════════════════════════════════════════════════════════════════
// METADATA - Critical for Google indexing!
// ═══════════════════════════════════════════════════════════════════════════
export const metadata: Metadata = {
  title: 'Gamze Yıldız Tango | İstanbul Özel Tango Dersi & Eğitimi',
  description:
    'Gamze Yıldız ile İstanbul\'da profesyonel özel tango dersleri. Kadıköy, Beyoğlu ve Silivri\'de birebir tango eğitimi, düğün dansı hazırlığı ve lady styling. İlk tanışma dersi ücretsiz! ☎ 0506 228 45 07',
  keywords: [
    // ═══════════════════════════════════════════════════════════════════════
    // BRAND KEYWORDS (Marka Aramaları)
    // ═══════════════════════════════════════════════════════════════════════
    'Gamze Yıldız',
    'Gamze Tango',
    'gamzetango',
    'gamzetango.com',
    'gamze yıldız tango',
    'gamze tango dersi',
    'gamze tango eğitmeni',
    
    // ═══════════════════════════════════════════════════════════════════════
    // PRIMARY KEYWORDS - Tango Dersi (Ana Anahtar Kelimeler)
    // ═══════════════════════════════════════════════════════════════════════
    'tango dersi',
    'tango kursu',
    'tango eğitimi',
    'tango okulu',
    'tango akademi',
    'tango öğren',
    'tango öğrenmek',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ÖZEL DERS KEYWORDS (Yüksek Dönüşüm)
    // ═══════════════════════════════════════════════════════════════════════
    'özel tango dersi',
    'tango özel ders',
    'birebir tango dersi',
    'özel tango eğitimi',
    'kişiye özel tango',
    'private tango lesson',
    'tango private lesson',
    'özel ders tango',
    'tango bireysel ders',
    
    // ═══════════════════════════════════════════════════════════════════════
    // EĞİTMEN/HOCA KEYWORDS
    // ═══════════════════════════════════════════════════════════════════════
    'tango eğitmeni',
    'tango öğretmeni',
    'tango hocası',
    'tango instructörü',
    'profesyonel tango eğitmeni',
    'tango dans eğitmeni',
    'kadın tango eğitmeni',
    
    // ═══════════════════════════════════════════════════════════════════════
    // İSTANBUL - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'istanbul tango',
    'tango istanbul',
    'İstanbul tango dersi',
    'tango dersi istanbul',
    'istanbul özel tango dersi',
    'özel tango dersi istanbul',
    'istanbul tango kursu',
    'tango kursu istanbul',
    'istanbul tango eğitimi',
    'tango eğitimi istanbul',
    'istanbul tango hocası',
    'tango hocası istanbul',
    'istanbul tango okulu',
    'istanbul da tango',
    'istanbulda tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // KADIKÖY - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'kadıköy tango',
    'tango kadıköy',
    'kadıköy tango dersi',
    'tango dersi kadıköy',
    'kadıköy özel tango dersi',
    'özel tango dersi kadıköy',
    'kadıköy tango kursu',
    'kadıköy tango hocası',
    'kadıköy tango eğitimi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BEYOĞLU / TAKSİM - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'beyoğlu tango',
    'tango beyoğlu',
    'beyoğlu tango dersi',
    'tango dersi beyoğlu',
    'beyoğlu özel tango dersi',
    'taksim tango',
    'tango taksim',
    'taksim tango dersi',
    'galata tango dersi',
    'şişli tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // SİLİVRİ - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'silivri tango',
    'tango silivri',
    'silivri tango dersi',
    'tango dersi silivri',
    'silivri özel tango dersi',
    'silivri tango kursu',
    'silivri tango hocası',
    
    // ═══════════════════════════════════════════════════════════════════════
    // YAKA BAZLI ARAMALAR
    // ═══════════════════════════════════════════════════════════════════════
    'anadolu yakası tango',
    'tango anadolu yakası',
    'anadolu yakası tango dersi',
    'anadolu yakası özel tango',
    'avrupa yakası tango',
    'tango avrupa yakası',
    'avrupa yakası tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DÜĞÜN DANSI - TÜM VARYASYONLAR
    // ═══════════════════════════════════════════════════════════════════════
    'düğün dansı',
    'düğün dansı kursu',
    'düğün dansı eğitimi',
    'düğün dansı tango',
    'tango düğün dansı',
    'ilk dans',
    'ilk dans eğitimi',
    'wedding dance',
    'wedding dance istanbul',
    'düğün dansı istanbul',
    'istanbul düğün dansı',
    'düğün için tango',
    'düğün dansı hazırlığı',
    'düğün dansı özel ders',
    'nikah dansı',
    'evlilik dansı',
    
    // ═══════════════════════════════════════════════════════════════════════
    // LADY STYLING
    // ═══════════════════════════════════════════════════════════════════════
    'lady styling',
    'lady styling dersi',
    'lady styling istanbul',
    'tango lady styling',
    'kadın tango dersi',
    'kadınlar için tango',
    'solo tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // DANS TÜRLERİ
    // ═══════════════════════════════════════════════════════════════════════
    'arjantin tangosu',
    'argentine tango',
    'tango argentino',
    'arjantin tango dersi',
    'milonga dersi',
    'vals tango',
    
    // ═══════════════════════════════════════════════════════════════════════
    // FİYAT VE BİLGİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'tango dersi fiyatları',
    'tango kursu fiyatı',
    'özel tango dersi fiyat',
    'tango dersi ücreti',
    'tango ne kadar',
    'tango kursu kayıt',
    'tango ders saatleri',
    
    // ═══════════════════════════════════════════════════════════════════════
    // BAŞLANGIÇ SEVİYESİ ARAMALARI
    // ═══════════════════════════════════════════════════════════════════════
    'tango nasıl öğrenilir',
    'tango başlangıç',
    'tango başlangıç dersi',
    'sıfırdan tango',
    'yeni başlayanlar için tango',
    'tango ilk ders',
    'tango deneme dersi',
    'ücretsiz tango dersi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // UZUN KUYRUK (LONG-TAIL) KEYWORDS
    // ═══════════════════════════════════════════════════════════════════════
    'istanbul da tango öğrenmek',
    'profesyonel tango eğitimi',
    'yetişkinler için tango dersi',
    'çiftler için tango dersi',
    'tango dans kursu istanbul',
    'en iyi tango dersi istanbul',
    'kaliteli tango eğitimi',
    
    // ═══════════════════════════════════════════════════════════════════════
    // ENGLISH KEYWORDS (Turistler için)
    // ═══════════════════════════════════════════════════════════════════════
    'tango lessons istanbul',
    'private tango lessons istanbul',
    'tango classes istanbul',
    'learn tango istanbul',
    'tango instructor istanbul',
    'argentine tango istanbul',
    'tango teacher istanbul',
    'wedding dance lessons istanbul',
  ],
  alternates: {
    canonical: 'https://gamzetango.com',
    languages: {
      'tr-TR': 'https://gamzetango.com',
      'en-US': 'https://gamzetango.com/en',
      'x-default': 'https://gamzetango.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    url: 'https://gamzetango.com',
    siteName: 'Gamze Yıldız Tango',
    title: 'Gamze Yıldız Tango | İstanbul Özel Tango Dersi & Eğitimi',
    description:
      'İstanbul\'da profesyonel özel tango dersleri. Kadıköy, Beyoğlu, Silivri lokasyonlarında birebir tango eğitimi. İlk ders ücretsiz!',
    images: [
      {
        url: 'https://gamzetango.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gamze Yıldız - İstanbul Tango Eğitmeni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamze Yıldız Tango | İstanbul Özel Tango Dersi',
    description:
      'İstanbul\'da profesyonel özel tango dersleri. İlk ders ücretsiz! ☎ 0506 228 45 07',
    images: ['https://gamzetango.com/images/og-image.jpg'],
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

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT - Server Component wrapper for client-side homepage
// ═══════════════════════════════════════════════════════════════════════════
export default function HomePage() {
  return <HomePageClient />;
}
