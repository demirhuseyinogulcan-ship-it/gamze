/**
 * Site-wide Configuration Constants
 * Single source of truth for all hardcoded values
 * 
 * SOLID: Single Responsibility - Only site configuration
 * DRY: All values defined once, imported everywhere
 */

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT = {
  PHONE: '+905062284507',
  PHONE_DISPLAY: '+90 506 228 45 07',
  PHONE_SHORT: '0506 228 45 07',
  PHONE_TEL: 'tel:+905062284507',
  EMAIL: 'info@gamzetango.com',
  WHATSAPP_BASE: 'https://wa.me/905062284507',
  WHATSAPP_NUMBER: '905062284507',
} as const;

/**
 * Generate WhatsApp URL with message
 */
export function getWhatsAppUrl(message?: string): string {
  if (!message) return CONTACT.WHATSAPP_BASE;
  return `${CONTACT.WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE = {
  NAME: 'Gamze Tango',
  DOMAIN: 'gamzetango.com',
  URL: 'https://gamzetango.com',
  TITLE: 'Gamze Tango | Profesyonel Tango Eğitmeni - İstanbul',
  DESCRIPTION: 'Gamze Yıldız ile profesyonel tango eğitimi. İstanbul\'da özel dersler, düğün dansı, lady styling.',
  LOCALE: 'tr_TR',
  LANGUAGE: 'tr',
} as const;

// ============================================
// SOCIAL LINKS
// ============================================

export const SOCIAL = {
  INSTAGRAM: 'https://instagram.com/gamzetango',
  INSTAGRAM_HANDLE: '@gamzetango',
  YOUTUBE: 'https://youtube.com/@gamzetango',
  FACEBOOK: 'https://facebook.com/gamzetango',
  WHATSAPP: CONTACT.WHATSAPP_BASE,
} as const;

// ============================================
// ANIMATION DURATIONS (seconds)
// ============================================

export const ANIMATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  SLOWER: 0.6,
  SLOWEST: 0.8,
  // For stagger effects
  STAGGER_FAST: 0.05,
  STAGGER_NORMAL: 0.1,
  STAGGER_SLOW: 0.15,
} as const;

// ============================================
// COMMON ANIMATION VARIANTS (Framer Motion)
// ============================================

export const MOTION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
} as const;

// ============================================
// GALLERY IMAGES
// ============================================

export const GALLERY_IMAGES = [
  { src: '/images/optimized/galeri/1.webp', alt: 'Tango dersi anı' },
  { src: '/images/optimized/galeri/2.webp', alt: 'Düğün dansı performansı' },
  { src: '/images/optimized/galeri/3.webp', alt: 'Tango workshop' },
  { src: '/images/optimized/galeri/4.webp', alt: 'Milonga gecesi' },
  { src: '/images/optimized/galeri/5.webp', alt: 'Lady styling dersi' },
  { src: '/images/optimized/galeri/6.webp', alt: 'Özel ders anı' },
  { src: '/images/optimized/galeri/7.webp', alt: 'Tango performansı' },
] as const;

// ============================================
// LEVEL CONFIGURATION
// ============================================

export const LEVELS = {
  beginner: {
    label: 'Başlangıç',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  intermediate: {
    label: 'Orta',
    color: 'bg-gold/20 text-gold',
  },
  advanced: {
    label: 'İleri',
    color: 'bg-crimson/20 text-crimson',
  },
  all: {
    label: 'Tüm Seviyeler',
    color: 'bg-white/20 text-white',
  },
} as const;

export type LevelKey = keyof typeof LEVELS;

// ============================================
// WHATSAPP MESSAGE TEMPLATES
// ============================================

export const WHATSAPP_MESSAGES = {
  GENERAL: 'Merhaba, tango dersleri hakkında bilgi almak istiyorum.',
  WEDDING: 'Merhaba, düğün dansı dersleri hakkında bilgi almak istiyorum.',
  PRIVATE: 'Merhaba, özel ders hakkında bilgi almak istiyorum.',
  GROUP: 'Merhaba, grup dersleri hakkında bilgi almak istiyorum.',
  // Location specific
  SILIVRI: 'Merhaba, Silivri\'de tango dersleri hakkında bilgi almak istiyorum.',
  KADIKOY: 'Merhaba, Kadıköy\'de tango dersleri hakkında bilgi almak istiyorum.',
  BEYOGLU: 'Merhaba, Beyoğlu\'nda tango dersleri hakkında bilgi almak istiyorum.',
  ISTANBUL: 'Merhaba, İstanbul\'da tango dersleri hakkında bilgi almak istiyorum.',
} as const;

// ============================================
// SEO DEFAULTS
// ============================================

export const SEO = {
  TITLE_TEMPLATE: '%s | Gamze Tango',
  OG_IMAGE: '/images/og-image.jpg',
  TWITTER_HANDLE: '@gamzetango',
  // Google Search Console verification code - set via environment variable
  GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
} as const;

// ============================================
// BREAKPOINTS (matches Tailwind)
// ============================================

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
