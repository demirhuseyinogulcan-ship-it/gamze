/**
 * Tango Lessons Kadıköy - English Page
 * SEO for Asian Side Istanbul
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

const KADIKOY_EN = {
  name: 'Tango Lessons Kadıköy',
  tagline: 'Learn Tango on Istanbul\'s Asian Side',
  heroImage: '/images/2.jpg',
  coordinates: { lat: 40.9927, lng: 29.0277 },
  address: {
    street: 'Caferağa District',
    district: 'Kadıköy',
    city: 'Istanbul',
    fullAddress: 'Kadıköy, Istanbul (Asian Side)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24106.88901!2d29.02!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8679bf1a4eb%3A0x4a146d4fdd7a0ed6!2sKad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1234567890',
  features: [
    {
      id: 'location',
      icon: 'MapPin',
      title: 'Central Location',
      description: 'Easy access from Moda, Bağdat Caddesi and surrounding areas.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Private Lessons',
      description: 'One-on-one instruction tailored to your level.',
    },
    {
      id: 'english',
      icon: 'Globe',
      title: 'English Available',
      description: 'Instruction in English for expats and visitors.',
    },
    {
      id: 'beginner',
      icon: 'Heart',
      title: 'All Levels Welcome',
      description: 'From complete beginners to advanced dancers.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Flexible Hours',
      description: 'Weekday and weekend appointments available.',
    },
    {
      id: 'experience',
      icon: 'Award',
      title: 'Expert Instruction',
      description: '10+ years of teaching experience.',
    },
  ],
  accessInfo: [
    {
      type: 'metro' as const,
      name: 'Kadıköy Metro (M4)',
      distance: '5 min walk',
    },
    {
      type: 'ferry' as const,
      name: 'Kadıköy Ferry Terminal',
      distance: '10 min walk',
    },
    {
      type: 'bus' as const,
      name: 'Kadıköy Bus Station',
      distance: '5 min walk',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Tango Lessons Kadıköy | Asian Side Istanbul',
  description: 'Professional tango lessons in Kadıköy, Istanbul\'s vibrant Asian side. English-speaking instructor. Private and group lessons near Moda and Bağdat Caddesi.',
  keywords: [
    'tango lessons kadikoy',
    'tango asian side istanbul',
    'dance lessons kadikoy',
    'argentine tango kadikoy',
    'tango moda istanbul',
    'private tango kadikoy',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en/tango-lessons-kadikoy',
    languages: {
      'tr-TR': '/kadikoy-ozel-tango-dersi',
      'en-US': '/en/tango-lessons-kadikoy',
    },
  },
  openGraph: {
    title: 'Tango Lessons Kadıköy | Asian Side Istanbul',
    description: 'Professional tango lessons in Kadıköy, Istanbul. English-speaking instructor.',
    url: 'https://gamzetango.com/en/tango-lessons-kadikoy',
    siteName: 'Gamze Yıldız Tango',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gamze Tango - Tango Lessons Kadıköy',
  description: 'Professional tango lessons in Kadıköy, Istanbul.',
  url: 'https://gamzetango.com/en/tango-lessons-kadikoy',
  telephone: '+905062284507',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kadıköy',
    addressRegion: 'Istanbul',
    addressCountry: 'Turkey',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.9927,
    longitude: 29.0277,
  },
};

export default function TangoLessonsKadikoyPage() {
  return (
    <LocaleProvider initialLocale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-midnight">
        <LocationHero
          name={KADIKOY_EN.name}
          tagline={KADIKOY_EN.tagline}
          heroImage={KADIKOY_EN.heroImage}
          locale="en"
        />

        <LocationFeatures
          features={KADIKOY_EN.features}
          locale="en"
        />

        <LocationMap
          coordinates={KADIKOY_EN.coordinates}
          address={KADIKOY_EN.address}
          googleMapsEmbed={KADIKOY_EN.googleMapsEmbed}
          accessInfo={KADIKOY_EN.accessInfo}
        />

        <LocationCTA
          contact={KADIKOY_EN.contact}
          locationName={KADIKOY_EN.name}
          locale="en"
          locationSlug="tango-lessons-kadikoy"
        />
      </main>

      <Footer />
    </LocaleProvider>
  );
}
