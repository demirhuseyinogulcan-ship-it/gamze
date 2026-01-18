/**
 * Private Tango Lessons Istanbul - English Location Page
 * SEO-optimized landing page for international visitors
 * 
 * Target Keywords:
 * - private tango lessons istanbul
 * - tango classes istanbul
 * - argentine tango istanbul
 * - learn tango turkey
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import { LocaleProvider } from '@/lib/i18n';
import {
  LocationHero,
  LocationFeatures,
  LocationMap,
  LocationCTA,
} from '@/components/location';
import { CONTACT } from '@/lib/constants/site';

// ─────────────────────────────────────────────────────────────────────────────
// English Location Data
// ─────────────────────────────────────────────────────────────────────────────

const ISTANBUL_EN = {
  name: 'Private Tango Lessons Istanbul',
  tagline: 'Professional Argentine Tango in the Heart of Istanbul',
  heroImage: '/images/1.jpg',
  coordinates: { lat: 41.0082, lng: 28.9784 },
  address: {
    street: 'Multiple Locations',
    district: 'Istanbul City',
    city: 'Istanbul',
    fullAddress: 'Istanbul, Turkey (European & Asian Side)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327595874!2d28.871754!3d41.005495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1234567890',
  features: [
    {
      id: 'private',
      icon: 'User',
      title: 'Private Lessons',
      description: 'One-on-one personalized tango instruction at your pace.',
    },
    {
      id: 'english',
      icon: 'Globe',
      title: 'English Speaking',
      description: 'Instruction available in English for international students.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Flexible Schedule',
      description: 'Lessons available weekdays and weekends to fit your travel plans.',
    },
    {
      id: 'wedding',
      icon: 'Heart',
      title: 'Wedding Dance',
      description: 'Create an unforgettable first dance for your special day.',
    },
    {
      id: 'locations',
      icon: 'MapPin',
      title: 'Multiple Locations',
      description: 'Studios on both European and Asian sides of Istanbul.',
    },
    {
      id: 'experience',
      icon: 'Award',
      title: '10+ Years Experience',
      description: 'Learn from an internationally certified instructor.',
    },
  ],
  accessInfo: [
    {
      type: 'metro' as const,
      name: 'Istanbul Metro Lines',
      distance: 'Varies by location',
    },
    {
      type: 'ferry' as const,
      name: 'Bosphorus Ferries',
      distance: 'Europe-Asia crossing',
    },
    {
      type: 'bus' as const,
      name: 'IETT Bus Network',
      distance: 'All Istanbul',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Private Tango Lessons Istanbul | Gamze Yıldız',
  description: 'Professional private Argentine tango lessons in Istanbul, Turkey. English-speaking instructor with 10+ years experience. European & Asian side. First lesson free!',
  keywords: [
    'private tango lessons istanbul',
    'tango classes istanbul',
    'argentine tango istanbul',
    'learn tango istanbul',
    'tango teacher istanbul',
    'tango lessons turkey',
    'istanbul dance lessons',
    'tango instruction english istanbul',
    'private dance lessons istanbul',
    'couple tango lessons istanbul',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en/private-tango-lessons-istanbul',
    languages: {
      'tr-TR': '/istanbul-ozel-tango-dersi',
      'en-US': '/en/private-tango-lessons-istanbul',
    },
  },
  openGraph: {
    title: 'Private Tango Lessons Istanbul | Gamze Yıldız',
    description: 'Professional private Argentine tango lessons in Istanbul. English-speaking instructor. First lesson free!',
    url: 'https://gamzetango.com/en/private-tango-lessons-istanbul',
    siteName: 'Gamze Yıldız Tango',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Private Tango Lessons Istanbul - Gamze Yıldız',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Tango Lessons Istanbul | Gamze Yıldız',
    description: 'Professional Argentine tango lessons in Istanbul. English-speaking instructor.',
    images: ['https://gamzetango.com/images/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Schema
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://gamzetango.com/en/private-tango-lessons-istanbul',
  name: 'Gamze Tango - Private Tango Lessons Istanbul',
  description: 'Professional private Argentine tango lessons in Istanbul, Turkey with English-speaking instructor.',
  url: 'https://gamzetango.com/en/private-tango-lessons-istanbul',
  telephone: '+905062284507',
  image: 'https://gamzetango.com/images/1.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Istanbul',
    addressRegion: 'Istanbul',
    addressCountry: 'Turkey',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0082,
    longitude: 28.9784,
  },
  areaServed: {
    '@type': 'City',
    name: 'Istanbul',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tango Lessons',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Private Tango Lessons',
          description: 'One-on-one or couples tango instruction in English.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wedding Dance',
          description: 'Wedding first dance preparation.',
        },
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function PrivateTangoLessonsIstanbulPage() {
  return (
    <LocaleProvider initialLocale="en">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-midnight">
        <LocationHero
          name={ISTANBUL_EN.name}
          tagline={ISTANBUL_EN.tagline}
          heroImage={ISTANBUL_EN.heroImage}
          locale="en"
        />

        <LocationFeatures
          features={ISTANBUL_EN.features}
          locale="en"
        />

        <LocationMap
          coordinates={ISTANBUL_EN.coordinates}
          address={ISTANBUL_EN.address}
          googleMapsEmbed={ISTANBUL_EN.googleMapsEmbed}
          accessInfo={ISTANBUL_EN.accessInfo}
        />

        <LocationCTA
          contact={ISTANBUL_EN.contact}
          locationName={ISTANBUL_EN.name}
          locale="en"
          locationSlug="private-tango-lessons-istanbul"
        />
      </main>

      <Footer />
    </LocaleProvider>
  );
}
