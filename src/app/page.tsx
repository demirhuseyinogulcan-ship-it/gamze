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
    // Primary Keywords - Brand
    'Gamze Yıldız',
    'Gamze Tango',
    'gamzetango',
    'gamzetango.com',
    
    // Primary Keywords - Service
    'tango dersi',
    'özel tango dersi',
    'tango kursu',
    'tango eğitimi',
    'tango eğitmeni',
    'tango öğretmeni',
    'tango hocası',
    
    // İstanbul Variations
    'İstanbul tango dersi',
    'tango dersi istanbul',
    'istanbul özel tango dersi',
    'özel tango dersi istanbul',
    'istanbul tango kursu',
    'istanbul tango eğitimi',
    'istanbul tango hocası',
    
    // Location Keywords
    'kadıköy tango dersi',
    'beyoğlu tango dersi',
    'silivri tango dersi',
    'anadolu yakası tango',
    'avrupa yakası tango',
    
    // Service Keywords
    'düğün dansı',
    'düğün dansı istanbul',
    'lady styling',
    'arjantin tangosu',
    
    // Long-tail Keywords
    'istanbul da tango öğrenmek',
    'tango nasıl öğrenilir',
    'tango dersi fiyatları',
    'profesyonel tango eğitimi',
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
