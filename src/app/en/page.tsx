/**
 * English Homepage
 * ─────────────────────────────────────────────────────────────────────────────
 * SEO-optimized English landing page for international visitors
 * 
 * Target Keywords:
 * - tango lessons istanbul
 * - argentine tango turkey
 * - private tango lessons istanbul
 * - wedding dance istanbul
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Metadata } from 'next';
import { Navbar, Footer, ScrollProgress, AmbientSound, PWAInstallPrompt } from '@/components/ui';
import { CursorTrail } from '@/components/effects';
import {
  Hero,
  About,
  Philosophy,
  Services,
  Gallery,
  Testimonials,
  FirstLessonJourney,
  LeadMagnet,
  Schedule,
  FAQ,
  Contact,
  BlogPreview,
} from '@/components/sections';
import { LocaleProvider } from '@/lib/i18n';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata - English SEO
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Gamze Yıldız Tango | Private Tango Lessons Istanbul',
  description: 'Professional Argentine tango lessons in Istanbul with Gamze Yıldız. Private lessons, wedding dance, lady styling. First trial lesson free! English-speaking instructor.',
  keywords: [
    // Primary Keywords
    'tango lessons istanbul',
    'private tango lessons istanbul',
    'argentine tango istanbul',
    'tango classes turkey',
    'learn tango istanbul',
    
    // Wedding Dance
    'wedding dance istanbul',
    'first dance lessons istanbul',
    'wedding tango turkey',
    
    // Location Specific
    'tango kadikoy',
    'tango beyoglu',
    'tango lessons asian side istanbul',
    'tango lessons european side istanbul',
    
    // Style Specific
    'lady styling tango',
    'milonga istanbul',
    'argentine tango teacher',
    
    // Brand
    'Gamze Yıldız',
    'Gamze Tango',
  ],
  alternates: {
    canonical: 'https://gamzetango.com/en',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: 'https://gamzetango.com/en',
    siteName: 'Gamze Yıldız Tango',
    title: 'Gamze Yıldız Tango | Private Tango Lessons Istanbul',
    description: 'Professional Argentine tango lessons in Istanbul. Private lessons, wedding dance, lady styling. English-speaking instructor.',
    images: [
      {
        url: 'https://gamzetango.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gamze Yıldız - Tango Instructor Istanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamze Yıldız Tango | Private Tango Lessons Istanbul',
    description: 'Professional Argentine tango lessons in Istanbul. English-speaking instructor. First lesson free!',
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

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Schema - English
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://gamzetango.com/en#person',
      name: 'Gamze Yıldız',
      jobTitle: 'Professional Tango Instructor',
      description: 'Experienced tango instructor offering private lessons in Istanbul, Turkey.',
      url: 'https://gamzetango.com/en',
      image: 'https://gamzetango.com/images/hakkimda.jpg',
      sameAs: [
        'https://www.instagram.com/gamze.tango/',
      ],
      knowsAbout: ['Argentine Tango', 'Dance Education', 'Wedding Dance', 'Lady Styling'],
      knowsLanguage: ['Turkish', 'English'],
      worksFor: {
        '@type': 'DanceSchool',
        name: 'Gamze Tango',
      },
    },
    {
      '@type': 'DanceSchool',
      '@id': 'https://gamzetango.com/en#school',
      name: 'Gamze Tango',
      description: 'Professional Argentine tango lessons in Istanbul - Private lessons, wedding dance, lady styling and corporate workshops.',
      url: 'https://gamzetango.com/en',
      image: 'https://gamzetango.com/images/0.jpg',
      telephone: '+905062284507',
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Kadıköy',
          addressRegion: 'Istanbul',
          addressCountry: 'Turkey',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Beyoğlu',
          addressRegion: 'Istanbul',
          addressCountry: 'Turkey',
        },
      ],
      priceRange: '$$',
      areaServed: {
        '@type': 'City',
        name: 'Istanbul',
        containedInPlace: {
          '@type': 'Country',
          name: 'Turkey',
        },
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
              description: 'One-on-one or couples tango instruction.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wedding Dance',
              description: 'Professional wedding dance preparation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lady Styling',
              description: 'Solo technique and styling for women.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://gamzetango.com/en#webpage',
      url: 'https://gamzetango.com/en',
      name: 'Gamze Yıldız Tango | Private Tango Lessons Istanbul',
      isPartOf: {
        '@id': 'https://gamzetango.com/#website',
      },
      inLanguage: 'en-US',
      about: {
        '@id': 'https://gamzetango.com/en#school',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://gamzetango.com/images/0.jpg',
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function EnglishHomePage() {
  return (
    <LocaleProvider initialLocale="en">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <CursorTrail />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Philosophy />
        <Services />
        <Gallery />
        <Testimonials />
        <FirstLessonJourney />
        <BlogPreview />
        <LeadMagnet />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AmbientSound />
      <PWAInstallPrompt />
    </LocaleProvider>
  );
}
