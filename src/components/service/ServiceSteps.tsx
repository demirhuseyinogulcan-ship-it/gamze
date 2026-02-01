'use client';

/**
 * ServiceSteps Component
 * Process steps visualization (what to expect)
 */

import { motion } from 'framer-motion';
import type { ServiceStepsProps } from '@/types/service';

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
        defaultTitle: 'Süreç Nasıl İşliyor?',
    },
    en: {
        defaultTitle: 'How It Works',
    },
} as const;

export function ServiceSteps({
    steps,
    title,
    locale,
}: ServiceStepsProps) {
    const t = translations[locale];
    const displayTitle = title || t.defaultTitle;

    if (!steps || steps.length === 0) return null;

    return (
        <section
            className="relative bg-midnight-light py-20 lg:py-28"
            aria-labelledby="steps-title"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="steps-title"
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {displayTitle}
                    </h2>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                {/* Steps Timeline */}
                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent sm:left-8" />

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                className="relative flex gap-6 sm:gap-8"
                            >
                                {/* Step number */}
                                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold bg-midnight text-lg font-bold text-gold sm:h-16 sm:w-16 sm:text-xl">
                                    {step.stepNumber}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <h3 className="mb-2 font-display text-xl font-medium text-cream sm:text-2xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-cream/70">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceSteps;
