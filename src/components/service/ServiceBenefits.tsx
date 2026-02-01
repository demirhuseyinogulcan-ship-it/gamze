'use client';

/**
 * ServiceBenefits Component
 * Showcase service benefits with highlights
 */

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { ServiceBenefitsProps } from '@/types/service';

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
            duration: 0.6,
            ease: 'easeOut',
        },
    },
} as const;

// Translations
const translations = {
    tr: {
        defaultTitle: 'Size Ne Kazandırır?',
    },
    en: {
        defaultTitle: 'What You\'ll Gain',
    },
} as const;

export function ServiceBenefits({
    benefits,
    title,
    locale,
}: ServiceBenefitsProps) {
    const t = translations[locale];
    const displayTitle = title || t.defaultTitle;

    return (
        <section
            className="relative bg-gradient-to-b from-midnight to-midnight-light py-20 lg:py-28"
            aria-labelledby="benefits-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="benefits-title"
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {displayTitle}
                    </h2>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                {/* Benefits List */}
                <motion.div
                    className="mx-auto max-w-4xl space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-midnight/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/20 sm:p-8"
                        >
                            <div className="flex gap-4 sm:gap-6">
                                {/* Number/Icon */}
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="mb-2 flex flex-wrap items-center gap-3">
                                        <h3 className="font-display text-xl font-medium text-cream sm:text-2xl">
                                            {benefit.title}
                                        </h3>
                                        {benefit.highlight && (
                                            <span className="inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold">
                                                {benefit.highlight}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-base leading-relaxed text-cream/70">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative gradient */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceBenefits;
