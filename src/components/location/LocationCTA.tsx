'use client';

/**
 * LocationCTA Component
 * Call-to-action section with contact options
 * 
 * POTENTIAL ISSUES ADDRESSED:
 * - Click tracking: Data attributes for analytics
 * - Mobile: Touch-friendly button sizes
 * - Accessibility: Proper link descriptions, focus states
 * - Animation: Subtle hover effects without motion sickness triggers
 */

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import type { LocationCTAProps } from '@/types/location';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
} as const;

// Translations
const translations = {
  tr: {
    title: 'Hemen Başlayın',
    subtitle: 'Tango yolculuğunuza bugün başlayın. İlk deneme dersiniz ücretsiz!',
    cta: {
      phone: 'Hemen Arayın',
      whatsapp: 'WhatsApp ile Yazın',
      email: 'E-posta Gönderin',
    },
    badge: 'İlk Ders Ücretsiz',
    guarantee: '7 gün içinde memnun kalmazsanız ücret iadesi',
  },
  en: {
    title: 'Get Started Today',
    subtitle: 'Begin your tango journey today. Your first trial lesson is free!',
    cta: {
      phone: 'Call Now',
      whatsapp: 'Message on WhatsApp',
      email: 'Send Email',
    },
    badge: 'First Lesson Free',
    guarantee: 'Full refund within 7 days if not satisfied',
  },
} as const;

// Contact Button Component
interface ContactButtonProps {
  href: string;
  icon: typeof Phone;
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  'data-action': string;
}

function ContactButton({
  href,
  icon: Icon,
  label,
  variant,
  'data-action': dataAction,
}: ContactButtonProps) {
  const baseClasses = 'group relative flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight';
  
  const variantClasses = {
    primary: 'bg-gold text-midnight hover:bg-gold-light hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] focus:ring-gold',
    secondary: 'border-2 border-gold/50 bg-transparent text-gold hover:border-gold hover:bg-gold/10 focus:ring-gold',
    tertiary: 'border border-cream/20 bg-charcoal/50 text-cream hover:border-cream/40 hover:bg-charcoal/80 focus:ring-cream',
  };

  return (
    <motion.a
      href={href}
      variants={itemVariants}
      className={`${baseClasses} ${variantClasses[variant]}`}
      data-action={dataAction}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <Icon
        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <span>{label}</span>
      <ArrowRight
        className="h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        strokeWidth={2}
        aria-hidden="true"
      />
    </motion.a>
  );
}

export function LocationCTA({ contact, locationName, locale }: LocationCTAProps) {
  const t = translations[locale];

  // Generate contact URLs
  const phoneUrl = `tel:${contact.phone.replace(/\s/g, '')}`;
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    locale === 'tr'
      ? `Merhaba, ${locationName} için tango dersleri hakkında bilgi almak istiyorum.`
      : `Hello, I would like information about tango lessons at ${locationName}.`
  )}`;
  const emailUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    locale === 'tr' ? 'Tango Dersi Bilgi Talebi' : 'Tango Lesson Inquiry'
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      aria-labelledby="cta-title"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/30 to-midnight" />
        
        {/* Gold glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="text-sm font-medium text-gold">
              {t.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            id="cta-title"
            variants={itemVariants}
            className="mb-4 font-display text-4xl font-light tracking-tight text-cream sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-cream via-gold to-cream bg-clip-text text-transparent">
              {t.title}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-xl text-lg text-cream/70 sm:text-xl"
          >
            {t.subtitle}
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <ContactButton
              href={phoneUrl}
              icon={Phone}
              label={t.cta.phone}
              variant="primary"
              data-action="call"
            />
            <ContactButton
              href={whatsappUrl}
              icon={MessageCircle}
              label={t.cta.whatsapp}
              variant="secondary"
              data-action="whatsapp"
            />
            <ContactButton
              href={emailUrl}
              icon={Mail}
              label={t.cta.email}
              variant="tertiary"
              data-action="email"
            />
          </motion.div>

          {/* Guarantee */}
          <motion.p
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-cream/50"
          >
            <svg
              className="h-5 w-5 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            {t.guarantee}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </section>
  );
}

export default LocationCTA;
