// ─────────────────────────────────────────────────────────────────────────────
// Lead Magnet Content
// Free PDF guide to capture email leads
// ─────────────────────────────────────────────────────────────────────────────

import type { LeadMagnetLocaleContent, LeadMagnetBenefit } from '@/types/leadMagnet';

// ─────────────────────────────────────────────────────────────────────────────
// Benefits Lists
// ─────────────────────────────────────────────────────────────────────────────

const BENEFITS_TR: LeadMagnetBenefit[] = [
  {
    id: 'mistake-1',
    text: 'Yeni başlayanların yaptığı 5 kritik hatayı öğrenin',
    icon: 'AlertCircle',
  },
  {
    id: 'mistake-2',
    text: 'Doğru duruş ve sarılma tekniklerini keşfedin',
    icon: 'User',
  },
  {
    id: 'mistake-3',
    text: 'Müzikalite ipuçlarıyla ritmi daha iyi hissedin',
    icon: 'Music',
  },
  {
    id: 'mistake-4',
    text: 'Partner bağlantısını güçlendirmenin sırlarını öğrenin',
    icon: 'Heart',
  },
  {
    id: 'mistake-5',
    text: 'Milonga etiketini anlayın ve özgüvenle dans edin',
    icon: 'Users',
  },
];

const BENEFITS_EN: LeadMagnetBenefit[] = [
  {
    id: 'mistake-1',
    text: 'Learn the 5 critical mistakes beginners make',
    icon: 'AlertCircle',
  },
  {
    id: 'mistake-2',
    text: 'Discover correct posture and embrace techniques',
    icon: 'User',
  },
  {
    id: 'mistake-3',
    text: 'Feel the rhythm better with musicality tips',
    icon: 'Music',
  },
  {
    id: 'mistake-4',
    text: 'Learn secrets to strengthen partner connection',
    icon: 'Heart',
  },
  {
    id: 'mistake-5',
    text: 'Understand milonga etiquette and dance with confidence',
    icon: 'Users',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Content Export
// ─────────────────────────────────────────────────────────────────────────────

export const LEAD_MAGNET_CONTENT: LeadMagnetLocaleContent = {
  tr: {
    title: 'Ücretsiz PDF Rehberi',
    subtitle: 'Tango Başlangıç Kılavuzu',
    description:
      'Tango öğrenirken çoğu insanın yaptığı hataları ve bunlardan nasıl kaçınacağınızı öğrenin. 15+ yıllık deneyimimi bu rehberde sizinle paylaşıyorum.',
    pdfTitle: 'Tangoda 5 Kritik Hata',
    pdfDescription:
      've Bunlardan Nasıl Kaçınırsınız - Yeni Başlayanlar İçin Kapsamlı Rehber',
    benefits: BENEFITS_TR,
    form: {
      namePlaceholder: 'Adınız',
      emailPlaceholder: 'E-posta adresiniz',
      submitText: 'Ücretsiz İndir',
      privacyText:
        'Bilgileriniz güvende. Spam göndermiyoruz ve istediğiniz zaman abonelikten çıkabilirsiniz.',
      successTitle: 'Teşekkürler!',
      successMessage:
        'PDF rehberiniz e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin.',
    },
    imageAlt: 'Tangoda 5 Kritik Hata PDF Kapağı',
  },
  en: {
    title: 'Free PDF Guide',
    subtitle: 'Tango Beginner\'s Guide',
    description:
      'Learn the mistakes most people make when learning tango and how to avoid them. I share my 15+ years of experience in this guide.',
    pdfTitle: '5 Critical Mistakes in Tango',
    pdfDescription:
      'and How to Avoid Them - A Comprehensive Guide for Beginners',
    benefits: BENEFITS_EN,
    form: {
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      submitText: 'Download Free',
      privacyText:
        'Your information is safe. We don\'t spam and you can unsubscribe anytime.',
      successTitle: 'Thank You!',
      successMessage:
        'Your PDF guide has been sent to your email. Please check your inbox.',
    },
    imageAlt: '5 Critical Mistakes in Tango PDF Cover',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

export function getLeadMagnetContent(locale: 'tr' | 'en') {
  return LEAD_MAGNET_CONTENT[locale];
}
