/**
 * Tango Lessons Silivri - English Page
 * SEO for Silivri coastal area
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

const SILIVRI_EN = {
  name: 'Tango Lessons Silivri',
  tagline: 'Learn Tango by the Marmara Sea',
  heroImage: '/images/0.jpg',
  coordinates: { lat: 41.0731, lng: 28.2466 },
  address: {
    street: 'Alibey District',
    district: 'Silivri',
    city: 'Istanbul',
    fullAddress: 'Silivri, Istanbul',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48256.65095696569!2d28.20!3d41.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51cb21e9f7f2d%3A0x9d2d7d09c0e7fb8d!2sSilivri%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890',
  features: [
    {
      id: 'location',
      icon: 'MapPin',
      title: 'Seaside Location',
      description: 'Learn tango with views of the Marmara Sea.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Private Lessons',
      description: 'Personalized one-on-one instruction.',
    },
    {
      id: 'english',
      icon: 'Globe',
      title: 'English Available',
      description: 'International visitors welcome.',
    },
    {
      id: 'peaceful',
      icon: 'Heart',
      title: 'Peaceful Setting',
      description: 'Escape the city bustle for focused learning.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Flexible Schedule',
      description: 'Weekend getaway lessons available.',
    },
    {
      id: 'experience',
      icon: 'Award',
      title: 'Home Studio',
      description: 'Comfortable, well-equipped dance studio.',
    },
  ],
  accessInfo: [
    {
      type: 'car' as const,
      name: 'TEM Highway Silivri Exit',
      distance: '5 km',
    },
    {
      type: 'bus' as const,
      name: 'Silivri Bus Station',
      distance: '500m',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Tango Lessons Silivri | Coastal Istanbul',
  description: 'Private tango lessons in Silivri, Istanbul\'s peaceful coastal district. English-speaking instructor. Perfect for weekend getaway dance lessons.',
  keywords: [
    'tango lessons silivri',
    'dance lessons silivri istanbul',
    'argentine tango silivri',
    'private tango silivri',
    'istanbul coastal tango',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en/tango-lessons-silivri',
    languages: {
      'tr-TR': '/silivri-ozel-tango-dersi',
      'en-US': '/en/tango-lessons-silivri',
    },
  },
  openGraph: {
    title: 'Tango Lessons Silivri | Coastal Istanbul',
    description: 'Private tango lessons in Silivri by the Marmara Sea.',
    url: 'https://gamzetango.com/en/tango-lessons-silivri',
    siteName: 'Gamze Yıldız Tango',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gamze Tango - Tango Lessons Silivri',
  description: 'Private tango lessons in Silivri, coastal Istanbul.',
  url: 'https://gamzetango.com/en/tango-lessons-silivri',
  telephone: '+905062284507',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Silivri',
    addressRegion: 'Istanbul',
    addressCountry: 'Turkey',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0731,
    longitude: 28.2466,
  },
};

export default function TangoLessonsSilivriPage() {
  return (
    <LocaleProvider initialLocale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-midnight">
        <LocationHero
          name={SILIVRI_EN.name}
          tagline={SILIVRI_EN.tagline}
          heroImage={SILIVRI_EN.heroImage}
          locale="en"
        />

        <LocationFeatures
          features={SILIVRI_EN.features}
          locale="en"
        />

        <LocationMap
          coordinates={SILIVRI_EN.coordinates}
          address={SILIVRI_EN.address}
          googleMapsEmbed={SILIVRI_EN.googleMapsEmbed}
          accessInfo={SILIVRI_EN.accessInfo}
        />

        <LocationCTA
          contact={SILIVRI_EN.contact}
          locationName={SILIVRI_EN.name}
          locale="en"
          locationSlug="tango-lessons-silivri"
        />
      </main>

      <Footer />
    </LocaleProvider>
  );
}
