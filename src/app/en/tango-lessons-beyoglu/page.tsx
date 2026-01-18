/**
 * Tango Lessons Beyoğlu - English Page
 * SEO for European Side Istanbul (Taksim, Galata area)
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

const BEYOGLU_EN = {
  name: 'Tango Lessons Beyoğlu',
  tagline: 'Dance Tango in Historic Istanbul',
  heroImage: '/images/4.jpg',
  coordinates: { lat: 41.0351, lng: 28.9777 },
  address: {
    street: 'Taksim Area',
    district: 'Beyoğlu',
    city: 'Istanbul',
    fullAddress: 'Beyoğlu, Istanbul (European Side)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24100.94!2d28.97!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sBeyoğlu%2FIstanbul!5e0!3m2!1sen!2str!4v1234567890',
  features: [
    {
      id: 'location',
      icon: 'MapPin',
      title: 'Historic District',
      description: 'Learn tango near Taksim, Galata and Istiklal Avenue.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Private Sessions',
      description: 'Personalized one-on-one or couple instruction.',
    },
    {
      id: 'english',
      icon: 'Globe',
      title: 'English Speaking',
      description: 'Perfect for tourists and expats in Istanbul.',
    },
    {
      id: 'milonga',
      icon: 'Music',
      title: 'Milonga Access',
      description: 'Introduction to Istanbul\'s vibrant tango social scene.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Tourist Friendly',
      description: 'Short-term intensive programs for visitors.',
    },
    {
      id: 'experience',
      icon: 'Award',
      title: 'Professional Instruction',
      description: 'Certified instructor with international experience.',
    },
  ],
  accessInfo: [
    {
      type: 'metro' as const,
      name: 'Taksim Metro (M2)',
      distance: '5 min walk',
    },
    {
      type: 'tram' as const,
      name: 'Nostalgic Tram',
      distance: '2 min walk',
    },
    {
      type: 'bus' as const,
      name: 'Taksim Bus Hub',
      distance: '5 min walk',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Tango Lessons Beyoğlu | Taksim Istanbul',
  description: 'Professional tango lessons in Beyoğlu near Taksim and Galata. Perfect for tourists and expats. English-speaking instructor. Private lessons in historic Istanbul.',
  keywords: [
    'tango lessons beyoglu',
    'tango taksim istanbul',
    'dance lessons galata',
    'argentine tango beyoglu',
    'tango european side istanbul',
    'tango lessons for tourists istanbul',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en/tango-lessons-beyoglu',
    languages: {
      'tr-TR': '/beyoglu-ozel-tango-dersi',
      'en-US': '/en/tango-lessons-beyoglu',
    },
  },
  openGraph: {
    title: 'Tango Lessons Beyoğlu | Taksim Istanbul',
    description: 'Professional tango lessons near Taksim. English-speaking instructor.',
    url: 'https://gamzetango.com/en/tango-lessons-beyoglu',
    siteName: 'Gamze Yıldız Tango',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Gamze Tango - Tango Lessons Beyoğlu',
  description: 'Professional tango lessons in Beyoğlu, near Taksim and Galata.',
  url: 'https://gamzetango.com/en/tango-lessons-beyoglu',
  telephone: '+905062284507',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beyoğlu',
    addressRegion: 'Istanbul',
    addressCountry: 'Turkey',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0351,
    longitude: 28.9777,
  },
};

export default function TangoLessonsBeyogluPage() {
  return (
    <LocaleProvider initialLocale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-midnight">
        <LocationHero
          name={BEYOGLU_EN.name}
          tagline={BEYOGLU_EN.tagline}
          heroImage={BEYOGLU_EN.heroImage}
          locale="en"
        />

        <LocationFeatures
          features={BEYOGLU_EN.features}
          locale="en"
        />

        <LocationMap
          coordinates={BEYOGLU_EN.coordinates}
          address={BEYOGLU_EN.address}
          googleMapsEmbed={BEYOGLU_EN.googleMapsEmbed}
          accessInfo={BEYOGLU_EN.accessInfo}
        />

        <LocationCTA
          contact={BEYOGLU_EN.contact}
          locationName={BEYOGLU_EN.name}
          locale="en"
          locationSlug="tango-lessons-beyoglu"
        />
      </main>

      <Footer />
    </LocaleProvider>
  );
}
