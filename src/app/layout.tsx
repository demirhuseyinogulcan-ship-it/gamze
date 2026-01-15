import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Urbanist } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

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
    default: 'Gamze Tango | Profesyonel Tango Eğitmeni - İstanbul',
    template: '%s | Gamze Tango',
  },
  description:
    'Gamze Yıldız ile profesyonel tango eğitimi. Silivri ve İstanbul\'da özel dersler, düğün dansı, lady styling ve kurumsal workshop. İstanbul\'un deneyimli tango eğitmeni.',
  keywords: [
    'tango',
    'tango dersi',
    'tango eğitmeni',
    'İstanbul tango',
    'Silivri tango',
    'Kadıköy tango',
    'düğün dansı',
    'wedding dance',
    'lady styling',
    'tango kursu',
    'Gamze Yıldız',
    'arjantin tangosu',
  ],
  authors: [{ name: 'Gamze Yıldız' }],
  creator: 'Gamze Yıldız',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    url: 'https://gamzetango.com',
    siteName: 'Gamze Tango',
    title: 'Gamze Yıldız | Profesyonel Tango Eğitmeni',
    description:
      'Tangonun büyüleyici dünyasına adım atın. Silivri ve İstanbul\'da profesyonel tango eğitimi.',
    images: [
      {
        url: '/images/0.jpg',
        width: 1200,
        height: 630,
        alt: 'Gamze Yıldız - Tango Eğitmeni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamze Yıldız | Profesyonel Tango Eğitmeni',
    description:
      'Tangonun büyüleyici dünyasına adım atın. Silivri ve İstanbul\'da profesyonel tango eğitimi.',
    images: ['/images/0.jpg'],
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
    {
      '@type': 'Person',
      '@id': 'https://gamzetango.com/#person',
      name: 'Gamze Yıldız',
      jobTitle: 'Profesyonel Tango Eğitmeni',
      description: 'Silivri ve İstanbul\'da profesyonel tango eğitimi veren deneyimli dans eğitmeni.',
      url: 'https://gamzetango.com',
      image: 'https://gamzetango.com/images/hakkimda.jpg',
      sameAs: [
        'https://instagram.com/gamzetango',
        'https://youtube.com/@gamzetango',
      ],
      knowsAbout: ['Arjantin Tangosu', 'Dans Eğitimi', 'Düğün Dansı', 'Lady Styling'],
      worksFor: {
        '@type': 'DanceSchool',
        name: 'Gamze Tango',
      },
    },
    {
      '@type': 'DanceSchool',
      '@id': 'https://gamzetango.com/#school',
      name: 'Gamze Tango',
      description: 'Profesyonel tango eğitimi - Özel dersler, düğün dansı, lady styling ve kurumsal workshoplar.',
      url: 'https://gamzetango.com',
      image: 'https://gamzetango.com/images/0.jpg',
      telephone: '+905468897226',
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Silivri',
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
