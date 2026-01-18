/**
 * Wedding Dance Istanbul - English Page
 * SEO-optimized landing page for wedding dance lessons
 * 
 * Target Keywords:
 * - wedding dance istanbul
 * - first dance lessons istanbul
 * - wedding tango turkey
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import { LocaleProvider } from '@/lib/i18n';
import {
  LocationHero,
  LocationFeatures,
  LocationCTA,
} from '@/components/location';
import { CONTACT } from '@/lib/constants/site';

// ─────────────────────────────────────────────────────────────────────────────
// Wedding Dance Data
// ─────────────────────────────────────────────────────────────────────────────

const WEDDING_EN = {
  name: 'Wedding Dance Istanbul',
  tagline: 'Create an Unforgettable First Dance',
  heroImage: '/images/3.jpg',
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  features: [
    {
      id: 'custom',
      icon: 'Music',
      title: 'Custom Choreography',
      description: 'Personalized dance routine designed for your chosen song.',
    },
    {
      id: 'beginner',
      icon: 'Heart',
      title: 'Beginner Friendly',
      description: 'No dance experience needed. We start from the basics.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Flexible Scheduling',
      description: 'Evening and weekend lessons to fit your busy schedule.',
    },
    {
      id: 'video',
      icon: 'Video',
      title: 'Video Recording',
      description: 'Practice at home with video recordings of your routine.',
    },
    {
      id: 'styles',
      icon: 'Star',
      title: 'Multiple Styles',
      description: 'Tango, waltz, or a mix - choose your perfect style.',
    },
    {
      id: 'rehearsal',
      icon: 'CheckCircle',
      title: 'Final Rehearsal',
      description: 'Full dress rehearsal before your big day.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Wedding Dance Istanbul | First Dance Lessons Turkey',
  description: 'Professional wedding first dance lessons in Istanbul. Create an unforgettable tango or waltz for your special day. English-speaking instructor. Customized choreography.',
  keywords: [
    'wedding dance istanbul',
    'first dance lessons istanbul',
    'wedding tango turkey',
    'bridal dance lessons',
    'wedding choreography istanbul',
    'couple dance lessons istanbul',
    'wedding first dance turkey',
    'dance lessons for wedding istanbul',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en/wedding-dance-istanbul',
  },
  openGraph: {
    title: 'Wedding Dance Istanbul | First Dance Lessons',
    description: 'Professional wedding first dance lessons in Istanbul. Create an unforgettable dance for your special day.',
    url: 'https://gamzetango.com/en/wedding-dance-istanbul',
    siteName: 'Gamze Yıldız Tango',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/3.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Dance Istanbul - Gamze Yıldız',
      },
    ],
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
  '@type': 'Service',
  name: 'Wedding Dance Lessons Istanbul',
  description: 'Professional wedding first dance lessons in Istanbul, Turkey.',
  provider: {
    '@type': 'Person',
    name: 'Gamze Yıldız',
    url: 'https://gamzetango.com/en',
  },
  areaServed: {
    '@type': 'City',
    name: 'Istanbul',
  },
  serviceType: 'Wedding Dance Instruction',
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function WeddingDanceIstanbulPage() {
  return (
    <LocaleProvider initialLocale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-midnight">
        <LocationHero
          name={WEDDING_EN.name}
          tagline={WEDDING_EN.tagline}
          heroImage={WEDDING_EN.heroImage}
          locale="en"
        />

        <LocationFeatures
          features={WEDDING_EN.features}
          locale="en"
        />

        <LocationCTA
          contact={WEDDING_EN.contact}
          locationName="Wedding Dance"
          locale="en"
          locationSlug="wedding-dance-istanbul"
        />
      </main>

      <Footer />
    </LocaleProvider>
  );
}
