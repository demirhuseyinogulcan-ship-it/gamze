import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Urbanist } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { FloatingSocialButtons } from '@/components/ui/InstagramBanner';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const urbanist = Urbanist({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gamzetango.com'),
  title: {
    default: 'Gamze Yıldız Tango | İstanbul Tango Dersi & Eğitimi',
    template: '%s | Gamze Yıldız Tango',
  },
  description:
    'Gamze Yıldız ile profesyonel tango dersleri. İstanbul\'da özel tango eğitimi, düğün dansı, lady styling. İlk tanışma dersi ücretsiz! ☎ 0506 228 45 07',
  keywords: [
    // Ana Anahtar Kelimeler
    'tango',
    'tango dersi',
    'tango kursu',
    'tango eğitimi',
    'tango eğitmeni',
    'tango öğretmeni',
    'tango hocası',
    'tango okulu',

    // Özel Ders Odaklı - TÜM VARYASYONLAR
    'özel tango dersi',
    'tango özel ders',
    'birebir tango dersi',
    'özel tango eğitimi',
    'kişiye özel tango',
    'private tango lesson',
    'özel ders tango',

    // İstanbul Varyasyonları - TÜM SIRALAMAR
    'İstanbul tango',
    'tango istanbul',
    'istanbul tango dersi',
    'tango dersi istanbul',
    'istanbul tango kursu',
    'tango kursu istanbul',
    'istanbul özel tango dersi',
    'özel tango dersi istanbul',
    'istanbul tango eğitimi',
    'tango eğitimi istanbul',
    'istanbul tango hocası',
    'tango hocası istanbul',
    'istanbul tango okulu',

    // Kadıköy Varyasyonları - TÜM SIRALAMAR
    'kadıköy tango',
    'tango kadıköy',
    'kadıköy tango dersi',
    'tango dersi kadıköy',
    'kadıköy özel tango dersi',
    'özel tango dersi kadıköy',
    'kadıköy tango kursu',
    'tango kursu kadıköy',
    'kadıköy özel ders tango',
    'tango özel ders kadıköy',
    'anadolu yakası tango',
    'tango anadolu yakası',
    'anadolu yakası tango dersi',

    // Beyoğlu / Taksim Varyasyonları
    'beyoğlu tango',
    'tango beyoğlu',
    'beyoğlu tango dersi',
    'tango dersi beyoğlu',
    'beyoğlu özel tango dersi',
    'taksim tango',
    'tango taksim',
    'taksim tango dersi',
    'avrupa yakası tango',
    'tango avrupa yakası',

    // Silivri Varyasyonları
    'silivri tango',
    'tango silivri',
    'silivri tango dersi',
    'tango dersi silivri',
    'silivri özel tango dersi',
    'silivri tango kursu',

    // Düğün Dansı - TÜM VARYASYONLAR
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

    // Dans Türleri
    'arjantin tangosu',
    'argentine tango',
    'tango argentino',
    'lady styling',
    'lady styling dersi',
    'tango tekniği',

    // Fiyat ve Bilgi Aramaları
    'tango dersi fiyatları',
    'tango kursu fiyatı',
    'özel tango dersi fiyat',
    'tango öğrenmek',
    'tango nasıl öğrenilir',
    'tango başlangıç',
    'tango kursu kayıt',

    // Marka
    'Gamze Yıldız',
    'Gamze Tango',
    'gamzetango',
  ],
  authors: [{ name: 'Gamze Yıldız' }],
  creator: 'Gamze Yıldız',
  // Hreflang for international SEO
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
    title: 'Gamze Yıldız Tango | İstanbul Tango Dersi & Eğitimi',
    description:
      'Gamze Yıldız ile profesyonel tango dersleri. İstanbul\'da özel tango eğitimi, düğün dansı. İlk ders ücretsiz!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gamze Yıldız - Tango Eğitmeni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamze Yıldız Tango | İstanbul Tango Dersi & Eğitimi',
    description:
      'Gamze Yıldız ile profesyonel tango dersleri. İstanbul\'da özel tango eğitimi, düğün dansı. İlk ders ücretsiz!',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // WebSite Schema - for sitelinks
    {
      '@type': 'WebSite',
      '@id': 'https://gamzetango.com/#website',
      name: 'Gamze Tango',
      url: 'https://gamzetango.com',
      description: 'İstanbul\'da profesyonel tango eğitimi. Özel dersler, düğün dansı, lady styling.',
      publisher: {
        '@id': 'https://gamzetango.com/#organization',
      },
      inLanguage: ['tr-TR', 'en-US'],
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://gamzetango.com/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    // VideoObject Schema - for hero video
    {
      '@type': 'VideoObject',
      name: 'Gamze Yıldız Tango - İstanbul Tango Dersleri',
      description: 'Gamze Yıldız ile profesyonel tango eğitimi. İstanbul\'da Silivri, Kadıköy ve Beyoğlu lokasyonlarında özel tango dersleri.',
      thumbnailUrl: 'https://gamzetango.com/images/0.jpg',
      uploadDate: '2024-01-01T00:00:00+03:00',
      contentUrl: 'https://gamzetango.com/images/5.mp4',
      embedUrl: 'https://gamzetango.com/images/5.mp4',
      duration: 'PT30S',
      publisher: {
        '@type': 'Organization',
        name: 'Gamze Tango',
        logo: {
          '@type': 'ImageObject',
          url: 'https://gamzetango.com/icons/icon-512.png',
        },
      },
    },
    // Person Schema
    {
      '@type': 'Person',
      '@id': 'https://gamzetango.com/#person',
      name: 'Gamze Yıldız',
      jobTitle: 'Profesyonel Tango Eğitmeni',
      description: 'Silivri ve İstanbul\'da profesyonel tango eğitimi veren deneyimli dans eğitmeni.',
      url: 'https://gamzetango.com',
      image: 'https://gamzetango.com/images/hakkimda.jpg',
      sameAs: [
        'https://www.instagram.com/gamze.tango/',
      ],
      knowsAbout: ['Arjantin Tangosu', 'Dans Eğitimi', 'Düğün Dansı', 'Lady Styling'],
      worksFor: {
        '@type': 'DanceSchool',
        name: 'Gamze Tango',
      },
    },
    // DanceSchool Schema
    {
      '@type': 'DanceSchool',
      '@id': 'https://gamzetango.com/#school',
      name: 'Gamze Tango',
      description: 'Profesyonel tango eğitimi - Özel dersler, düğün dansı, lady styling ve kurumsal workshoplar.',
      url: 'https://gamzetango.com',
      image: 'https://gamzetango.com/images/0.jpg',
      telephone: '+905062284507',
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Silivri',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Beyoğlu',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Kadıköy',
          addressRegion: 'İstanbul',
          addressCountry: 'TR',
        },
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Wednesday'],
          opens: '19:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Thursday',
          opens: '20:00',
          closes: '22:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '14:00',
          closes: '18:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tango Dersleri',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Özel Tango Dersleri',
              description: 'Birebir veya çift olarak kişiye özel tango eğitimi.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Düğün Dansı',
              description: 'Düğün günü için profesyonel dans hazırlığı.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lady Styling',
              description: 'Kadın dansçılara özel solo teknik ve stil çalışmaları.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Kurumsal Workshop',
              description: 'Şirket etkinlikleri için grup dans atölyeleri.',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${urbanist.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-midnight text-white antialiased">
        {/* Skip to main content - Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-midnight focus:rounded-lg focus:font-medium"
        >
          Ana içeriğe atla
        </a>
        <Providers>
          {children}
          <FloatingSocialButtons />
          <CookieConsent />
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
