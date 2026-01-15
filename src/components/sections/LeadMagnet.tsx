'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Lead Magnet Section
// Free PDF download in exchange for email signup
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo, useCallback, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertCircle,
  User,
  Music,
  Heart,
  Users,
  Download,
  Mail,
  UserCircle,
  Check,
  Loader2,
  FileText,
  Shield,
  Sparkles,
} from 'lucide-react';

import { Container } from '@/components/ui';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getLeadMagnetContent } from '@/lib/constants/leadMagnet';
import type { FormStatus, LeadMagnetFormData } from '@/types/leadMagnet';

// ─────────────────────────────────────────────────────────────────────────────
// Icon Mapping
// ─────────────────────────────────────────────────────────────────────────────

const ICON_MAP = {
  AlertCircle,
  User,
  Music,
  Heart,
  Users,
} as const;

type IconName = keyof typeof ICON_MAP;

function getIcon(name: string) {
  return ICON_MAP[name as IconName] || AlertCircle;
}

// ─────────────────────────────────────────────────────────────────────────────
// PDF Preview Component
// ─────────────────────────────────────────────────────────────────────────────

interface PDFPreviewProps {
  title: string;
  description: string;
}

function PDFPreview({ title, description }: PDFPreviewProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* PDF Mockup */}
      <div className="relative mx-auto max-w-sm">
        {/* Floating glow effect */}
        <div className="absolute -inset-4 rounded-2xl bg-gold/20 blur-2xl" />

        {/* PDF Card */}
        <motion.div
          className="relative overflow-hidden rounded-xl border border-cream/20 bg-gradient-to-br from-midnight via-charcoal to-midnight p-8 shadow-2xl"
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Header decoration */}
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-gold via-gold/60 to-gold" />

          {/* PDF Icon */}
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FileText className="h-10 w-10 text-gold" />
          </motion.div>

          {/* Title */}
          <h3 className="mb-2 text-center font-display text-2xl font-bold text-gold">
            {title}
          </h3>
          <p className="text-center text-sm leading-relaxed text-cream/70">
            {description}
          </p>

          {/* Decorative elements */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
            <Sparkles className="h-4 w-4 text-gold/60" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
          </div>

          {/* Stats */}
          <div className="mt-4 flex justify-center gap-6 text-xs text-cream/50">
            <span>📄 12 sayfa</span>
            <span>⏱ 10 dk okuma</span>
          </div>
        </motion.div>

        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-black/40 blur-xl" />
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Benefits List Component
// ─────────────────────────────────────────────────────────────────────────────

interface BenefitsListProps {
  benefits: { id: string; text: string; icon: string }[];
}

function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <ul className="space-y-4">
      {benefits.map((benefit, index) => {
        const Icon = getIcon(benefit.icon);
        return (
          <motion.li
            key={benefit.id}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
              <Icon className="h-3.5 w-3.5 text-gold" />
            </div>
            <span className="text-cream/80">{benefit.text}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Form Component
// ─────────────────────────────────────────────────────────────────────────────

interface SignupFormProps {
  content: {
    namePlaceholder: string;
    emailPlaceholder: string;
    submitText: string;
    privacyText: string;
    successTitle: string;
    successMessage: string;
  };
}

function SignupForm({ content }: SignupFormProps) {
  const [formData, setFormData] = useState<LeadMagnetFormData>({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setStatus('submitting');
      setErrorMessage('');

      // Basic validation
      if (!formData.name.trim() || !formData.email.trim()) {
        setStatus('error');
        setErrorMessage('Please fill in all fields');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus('error');
        setErrorMessage('Please enter a valid email address');
        return;
      }

      // Simulate API call (replace with actual implementation)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // In production, this would be an actual API call:
        // await fetch('/api/lead-magnet', {
        //   method: 'POST',
        //   body: JSON.stringify(formData),
        // });
        setStatus('success');
      } catch {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    },
    [formData]
  );

  const handleChange = useCallback((field: keyof LeadMagnetFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  }, [status]);

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center"
        >
          <motion.div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Check className="h-8 w-8 text-green-400" />
          </motion.div>
          <h4 className="mb-2 font-display text-xl font-bold text-green-400">
            {content.successTitle}
          </h4>
          <p className="text-green-300/80">{content.successMessage}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Name Input */}
          <div className="relative">
            <UserCircle className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cream/40" />
            <input
              type="text"
              placeholder={content.namePlaceholder}
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-cream/5 py-3 pl-12 pr-4 text-cream placeholder-cream/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              disabled={status === 'submitting'}
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cream/40" />
            <input
              type="email"
              placeholder={content.emailPlaceholder}
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full rounded-lg border border-cream/20 bg-cream/5 py-3 pl-12 pr-4 text-cream placeholder-cream/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              disabled={status === 'submitting'}
            />
          </div>

          {/* Error Message */}
          {status === 'error' && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400"
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-4 font-medium text-midnight transition-all hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Gönderiliyor...</span>
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                <span>{content.submitText}</span>
              </>
            )}
          </motion.button>

          {/* Privacy Note */}
          <div className="flex items-start gap-2 text-xs text-cream/50">
            <Shield className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{content.privacyText}</p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Lead Magnet Component
// ─────────────────────────────────────────────────────────────────────────────

export function LeadMagnet() {
  const { locale } = useTranslation();
  const content = useMemo(() => getLeadMagnetContent(locale), [locale]);

  return (
    <section
      id="free-guide"
      className="relative overflow-hidden bg-gradient-to-b from-charcoal to-midnight py-20 sm:py-28 lg:py-32"
      aria-labelledby="lead-magnet-title"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: PDF Preview */}
          <div className="flex items-center justify-center lg:justify-start">
            <PDFPreview title={content.pdfTitle} description={content.pdfDescription} />
          </div>

          {/* Right: Content & Form */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-gold">
                {content.subtitle}
              </span>
              <h2
                id="lead-magnet-title"
                className="mb-4 font-display text-3xl font-bold text-cream sm:text-4xl"
              >
                {content.title}
              </h2>
              <p className="mb-8 text-cream/70">{content.description}</p>
            </motion.div>

            {/* Benefits List */}
            <div className="mb-8">
              <BenefitsList benefits={content.benefits} />
            </div>

            {/* Signup Form */}
            <SignupForm content={content.form} />
          </div>
        </div>
      </Container>
    </section>
  );
}
