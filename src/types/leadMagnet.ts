// ─────────────────────────────────────────────────────────────────────────────
// Lead Magnet Types
// Free PDF download in exchange for email signup
// ─────────────────────────────────────────────────────────────────────────────

export interface LeadMagnetBenefit {
  id: string;
  text: string;
  icon: string;
}

export interface LeadMagnetContent {
  title: string;
  subtitle: string;
  description: string;
  pdfTitle: string;
  pdfDescription: string;
  benefits: LeadMagnetBenefit[];
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    submitText: string;
    privacyText: string;
    successTitle: string;
    successMessage: string;
  };
  imageAlt: string;
}

export interface LeadMagnetLocaleContent {
  tr: LeadMagnetContent;
  en: LeadMagnetContent;
}

export interface LeadMagnetFormData {
  name: string;
  email: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
