'use client';

/**
 * LocationHero Component
 * Full-screen hero section for location pages with parallax effect
 * 
 * POTENTIAL ISSUES ADDRESSED:
 * - Image loading: Priority + blur placeholder
 * - Layout shift: Fixed aspect ratio container
 * - Mobile: Adjusted text sizes and padding
 * - Accessibility: Proper heading hierarchy, alt text
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { LocationHeroProps } from '@/types/location';

// Animation variants - extracted for reusability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as const;

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
} as const;

// Translations
const translations = {
  tr: {
    badge: 'Profesyonel Tango Eğitimi',
    cta: 'Ücretsiz Deneme Dersi',
    scrollHint: 'Keşfet',
  },
  en: {
    badge: 'Professional Tango Training',
    cta: 'Free Trial Lesson',
    scrollHint: 'Explore',
  },
} as const;

export function LocationHero({
  name,
  tagline,
  heroImage,
  locale,
}: LocationHeroProps) {
  const t = translations[locale];

  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      aria-labelledby="location-hero-title"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src={heroImage}
          alt={`${name} - Tango dersleri için stüdyo görüntüsü`}
          fill
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAHxAAAgIDAQADAAAAAAAAAAAAAQIDBAAFERIhMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEEA/ANL1e51tvr4LsDtYVLCBvJRGQEj+g5x+8eYxyYCT/9k="
          className="object-cover object-center"
          sizes="100vw"
        />
        
        {/* Gradient Overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-midnight/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 via-transparent to-midnight/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-midnight/50 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="text-xs font-medium uppercase tracking-widest text-gold">
              {t.badge}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="location-hero-title"
            variants={itemVariants}
            className="mb-4 font-display text-4xl font-light tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">{name.split(' ')[0]}</span>
            <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              {name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 max-w-2xl text-lg font-light leading-relaxed text-cream/80 sm:text-xl md:text-2xl"
          >
            {tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-medium text-midnight transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight sm:text-lg"
            >
              <span className="relative z-10">{t.cta}</span>
              <svg
                className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60 transition-colors hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-midnight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          aria-label={t.scrollHint}
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            {t.scrollHint}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />
      
      {/* Gold accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </section>
  );
}

export default LocationHero;
