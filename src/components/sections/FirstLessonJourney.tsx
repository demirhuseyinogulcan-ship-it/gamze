'use client';

// ─────────────────────────────────────────────────────────────────────────────
// First Lesson Journey Section
// Interactive step-by-step walkthrough of a first tango lesson
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  User,
  Heart,
  Footprints,
  Music,
  Users,
  ChevronRight,
  ChevronLeft,
  Clock,
  Lightbulb,
  Phone,
  ArrowRight,
} from 'lucide-react';

import { Container, SectionTitle } from '@/components/ui';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getJourneyContent } from '@/lib/constants/journey';
import type { JourneyStep } from '@/types/journey';

// ─────────────────────────────────────────────────────────────────────────────
// Icon Mapping
// ─────────────────────────────────────────────────────────────────────────────

const ICON_MAP = {
  MessageCircle,
  User,
  Heart,
  Footprints,
  Music,
  Users,
} as const;

type IconName = keyof typeof ICON_MAP;

function getIcon(name: string) {
  return ICON_MAP[name as IconName] || MessageCircle;
}

// ─────────────────────────────────────────────────────────────────────────────
// Step Progress Indicator
// ─────────────────────────────────────────────────────────────────────────────

interface ProgressIndicatorProps {
  steps: JourneyStep[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

function ProgressIndicator({ steps, currentStep, onStepClick }: ProgressIndicatorProps) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
      {steps.map((step, index) => {
        const Icon = getIcon(step.icon);
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <button
            key={step.id}
            onClick={() => onStepClick(index)}
            className="group relative flex flex-col items-center"
            aria-label={`Step ${index + 1}: ${step.title}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {/* Connector Line */}
            {index > 0 && (
              <div
                className={`absolute right-full top-1/2 h-0.5 w-2 -translate-y-1/2 sm:w-4 ${isCompleted ? 'bg-gold' : 'bg-cream/20'
                  }`}
              />
            )}

            {/* Step Circle */}
            <motion.div
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-12 sm:w-12 ${isActive
                  ? 'border-gold bg-gold/20 text-gold'
                  : isCompleted
                    ? 'border-gold bg-gold text-midnight'
                    : 'border-cream/30 text-cream/50 hover:border-cream/50'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />

              {/* Active Pulse */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gold"
                  initial={{ opacity: 0.5, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Step Number (Desktop) */}
            <span
              className={`mt-2 hidden text-xs font-medium transition-colors sm:block ${isActive ? 'text-gold' : 'text-cream/50'
                }`}
            >
              {index + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Step Card Component
// ─────────────────────────────────────────────────────────────────────────────

interface StepCardProps {
  step: JourneyStep;
  direction: number;
}

function StepCard({ step, direction }: StepCardProps) {
  const Icon = getIcon(step.icon);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="absolute inset-0"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-cream/10 bg-gradient-to-br from-cream/5 to-transparent p-6 backdrop-blur-sm sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-6 flex items-start gap-4 sm:gap-6">
          {/* Icon */}
          <motion.div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold sm:h-20 sm:w-20"
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>

          {/* Title Area */}
          <div className="flex-1">
            <motion.p
              className="mb-1 text-sm font-medium uppercase tracking-wider text-gold"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {step.subtitle}
            </motion.p>
            <motion.h3
              className="font-display text-2xl font-bold text-cream sm:text-3xl"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {step.title}
            </motion.h3>
          </div>

          {/* Duration Badge */}
          <motion.div
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1.5 text-sm text-cream/80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, type: 'spring' }}
          >
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">{step.duration}</span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="mb-6 text-base leading-relaxed text-cream/80 sm:text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {step.description}
        </motion.p>

        {/* Tip Box */}
        <motion.div
          className="flex items-start gap-3 rounded-xl bg-gold/10 p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="mb-1 text-sm font-medium text-gold">İpucu / Tip</p>
            <p className="text-sm text-cream/70">{step.tip}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Navigation Buttons
// ─────────────────────────────────────────────────────────────────────────────

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  currentStep: number;
  totalSteps: number;
}

function Navigation({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  currentStep,
  totalSteps,
}: NavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {/* Previous Button */}
      <motion.button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${canGoPrev
            ? 'bg-cream/10 text-cream hover:bg-cream/20'
            : 'cursor-not-allowed text-cream/30'
          }`}
        whileHover={canGoPrev ? { x: -4 } : undefined}
        whileTap={canGoPrev ? { scale: 0.95 } : undefined}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Önceki / Previous</span>
      </motion.button>

      {/* Step Counter */}
      <div className="text-sm text-cream/60">
        <span className="font-bold text-gold">{currentStep + 1}</span>
        <span> / {totalSteps}</span>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        disabled={!canGoNext}
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${canGoNext
            ? 'bg-gold text-midnight hover:bg-gold/90'
            : 'cursor-not-allowed bg-cream/10 text-cream/30'
          }`}
        whileHover={canGoNext ? { x: 4 } : undefined}
        whileTap={canGoNext ? { scale: 0.95 } : undefined}
      >
        <span className="hidden sm:inline">Sonraki / Next</span>
        <ChevronRight className="h-4 w-4" />
      </motion.button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA Section
// ─────────────────────────────────────────────────────────────────────────────

interface JourneyCTAProps {
  ctaText: string;
  ctaSecondary: string;
}

function JourneyCTA({ ctaText, ctaSecondary }: JourneyCTAProps) {
  return (
    <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
        <Clock className="h-4 w-4" />
        <span>İlk ders ücretsiz! / First lesson is free!</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <motion.a
          href="tel:+905062284507"
          className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-medium text-midnight transition-all hover:bg-gold/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="h-5 w-5" />
          <span>{ctaText}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.a>

        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-gold"
          whileHover={{ x: 4 }}
        >
          <span>{ctaSecondary}</span>
          <ChevronRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main First Lesson Journey Component
// ─────────────────────────────────────────────────────────────────────────────

export function FirstLessonJourney() {
  const { locale } = useTranslation();
  const content = useMemo(() => getJourneyContent(locale), [locale]);

  const [currentStep, setCurrentStep] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      const newStep = currentStep + newDirection;
      if (newStep >= 0 && newStep < content.steps.length) {
        setCurrentStep(newStep);
        setPage([page + newDirection, newDirection]);
      }
    },
    [currentStep, content.steps.length, page]
  );

  const goToStep = useCallback(
    (stepIndex: number) => {
      const direction = stepIndex > currentStep ? 1 : -1;
      setCurrentStep(stepIndex);
      setPage([stepIndex, direction]);
    },
    [currentStep]
  );

  const handlePrev = useCallback(() => paginate(-1), [paginate]);
  const handleNext = useCallback(() => paginate(1), [paginate]);

  return (
    <section
      id="first-lesson"
      className="relative overflow-hidden bg-midnight py-20 sm:py-28 lg:py-32"
      aria-labelledby="first-lesson-title"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Title */}
        <div className="mb-12">
          <h2 id="first-lesson-title" className="sr-only">
            {content.sectionTitle}
          </h2>
          <SectionTitle subtitle={content.sectionSubtitle} title={content.sectionTitle} />
          <p className="mt-4 text-center text-cream/60">{content.totalDuration}</p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator
          steps={content.steps}
          currentStep={currentStep}
          onStepClick={goToStep}
        />

        {/* Step Cards Container */}
        <div className="relative mx-auto" style={{ height: '380px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <StepCard
              key={currentStep}
              step={content.steps[currentStep]}
              direction={direction}
            />
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <Navigation
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={currentStep > 0}
          canGoNext={currentStep < content.steps.length - 1}
          currentStep={currentStep}
          totalSteps={content.steps.length}
        />

        {/* CTA */}
        <JourneyCTA ctaText={content.ctaText} ctaSecondary={content.ctaSecondary} />
      </Container>
    </section>
  );
}
