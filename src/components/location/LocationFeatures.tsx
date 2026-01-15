'use client';

/**
 * LocationFeatures Component
 * Displays location-specific features in a responsive grid
 * 
 * POTENTIAL ISSUES ADDRESSED:
 * - Icon rendering: Dynamic Lucide icon import with fallback
 * - Animation: Staggered reveal with IntersectionObserver
 * - Layout: Responsive grid that works on all breakpoints
 * - Accessibility: Semantic list structure, proper focus states
 */

import { motion } from 'framer-motion';
import {
  User,
  Heart,
  Calendar,
  Music,
  Home,
  Award,
  MapPin,
  Users,
  Star,
  TrendingUp,
  LucideIcon,
} from 'lucide-react';
import type { LocationFeaturesProps, LocationFeature } from '@/types/location';

// Icon mapping for type safety
const iconMap: Record<string, LucideIcon> = {
  User,
  Heart,
  Calendar,
  Music,
  Home,
  Award,
  MapPin,
  Users,
  Star,
  TrendingUp,
};

// Get icon component with fallback
function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Star;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as const;

// Translations
const translations = {
  tr: {
    title: 'Neden Bizi Tercih Etmelisiniz?',
    subtitle: 'Gamze Yıldız ile tango öğrenmenin avantajları',
  },
  en: {
    title: 'Why Choose Us?',
    subtitle: 'The advantages of learning tango with Gamze Yıldız',
  },
} as const;

// Feature Card Component - Single Responsibility
function FeatureCard({ feature, index }: { feature: LocationFeature; index: number }) {
  const IconComponent = getIcon(feature.icon);

  return (
    <motion.li
      variants={itemVariants}
      className="group relative"
      custom={index}
    >
      <article className="relative h-full overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-b from-charcoal/50 to-midnight/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] sm:p-8">
        {/* Background glow on hover */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Icon */}
        <div className="relative mb-5 inline-flex rounded-xl bg-gold/10 p-3 ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold/20 group-hover:ring-gold/40">
          <IconComponent
            className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display text-lg font-medium text-cream transition-colors duration-300 group-hover:text-gold sm:text-xl">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-cream/70 sm:text-base">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </article>
    </motion.li>
  );
}

export function LocationFeatures({ features, locale }: LocationFeaturesProps) {
  const t = translations[locale];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      aria-labelledby="features-title"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="features-title"
            className="mb-4 font-display text-3xl font-light tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-lg text-cream/60">
            {t.subtitle}
          </p>
          
          {/* Decorative line */}
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.header>

        {/* Features Grid */}
        <motion.ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          role="list"
          aria-label={t.title}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

export default LocationFeatures;
