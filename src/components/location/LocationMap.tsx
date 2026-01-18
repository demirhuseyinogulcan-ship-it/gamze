'use client';

/**
 * LocationMap Component
 * Interactive map section with transportation info
 * 
 * POTENTIAL ISSUES ADDRESSED:
 * - iframe security: sandbox, loading="lazy", referrerPolicy
 * - Performance: Lazy loading with IntersectionObserver
 * - Layout shift: Fixed aspect ratio container
 * - Mobile: Responsive layout, stacked on mobile
 * - Accessibility: Proper labels, keyboard navigation
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bus, Car, Train, Ship, Clock, Navigation, TramFront } from 'lucide-react';
import type { LocationMapProps, LocationAccess } from '@/types/location';

// Transport icon mapping
const transportIcons: Record<LocationAccess['type'], typeof Bus> = {
  bus: Bus,
  car: Car,
  train: Train,
  metro: Train,
  ferry: Ship,
  tram: TramFront,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
} as const;

// Translations
const translations = {
  tr: {
    title: 'Konum & Ulaşım',
    subtitle: 'Bize nasıl ulaşabilirsiniz',
    address: 'Adres',
    howToReach: 'Nasıl Ulaşılır',
    getDirections: 'Yol Tarifi Al',
    walkTime: 'Yürüme',
  },
  en: {
    title: 'Location & Directions',
    subtitle: 'How to find us',
    address: 'Address',
    howToReach: 'How to Reach',
    getDirections: 'Get Directions',
    walkTime: 'Walking',
  },
} as const;

// Access Info Card Component
function AccessCard({ access, locale }: { access: LocationAccess; locale: 'tr' | 'en' }) {
  const IconComponent = transportIcons[access.type];
  const t = translations[locale];

  return (
    <motion.li
      variants={itemVariants}
      className="group flex items-start gap-4 rounded-xl border border-gold/10 bg-charcoal/30 p-4 transition-all duration-300 hover:border-gold/30 hover:bg-charcoal/50"
    >
      <div className="flex-shrink-0 rounded-lg bg-gold/10 p-2.5 ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold/20">
        <IconComponent
          className="h-5 w-5 text-gold"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <div className="flex-1">
        <h4 className="mb-1 font-medium text-cream">
          {access.name}
        </h4>
        <div className="flex flex-wrap gap-3 text-sm text-cream/60">
          <span className="flex items-center gap-1.5">
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            {access.distance}
          </span>
          {access.walkTime && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {t.walkTime}: {access.walkTime}
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export function LocationMap({
  coordinates,
  address,
  googleMapsEmbed,
  accessInfo,
}: LocationMapProps) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const locale = 'tr'; // Can be made dynamic via props
  const t = translations[locale];

  // Generate Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;

  return (
    <section
      id="location"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      aria-labelledby="location-title"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/20 to-midnight" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          className="mx-auto mb-12 max-w-2xl text-center lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="location-title"
            className="mb-4 font-display text-3xl font-light tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg text-cream/60">
            {t.subtitle}
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.header>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map Container */}
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 bg-charcoal/50 shadow-2xl lg:aspect-square"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Loading skeleton */}
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
                  <span className="text-sm text-cream/60">Harita yükleniyor...</span>
                </div>
              </div>
            )}

            {/* Google Maps Embed */}
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${address.district} konumu haritası`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                isMapLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsMapLoaded(true)}
              sandbox="allow-scripts allow-same-origin"
            />

            {/* Map overlay with gradient */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/10" />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Address Card */}
            <div className="mb-8 rounded-2xl border border-gold/20 bg-gradient-to-br from-charcoal/50 to-midnight/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gold/10 p-2.5 ring-1 ring-gold/20">
                  <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-cream">
                  {t.address}
                </h3>
              </div>
              <address className="mb-5 text-lg not-italic leading-relaxed text-cream/80">
                {address.fullAddress}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-midnight transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight"
              >
                <Navigation className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                {t.getDirections}
                <span className="sr-only">(yeni sekmede açılır)</span>
              </a>
            </div>

            {/* Transportation Info */}
            <div>
              <h3 className="mb-4 font-display text-lg font-medium text-cream">
                {t.howToReach}
              </h3>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="list"
              >
                {accessInfo.map((access) => (
                  <AccessCard
                    key={`${access.type}-${access.name}`}
                    access={access}
                    locale={locale}
                  />
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
