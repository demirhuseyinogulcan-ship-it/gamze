'use client';

/**
 * ServiceAudience Component
 * Target audience segments visualization
 */

import { motion } from 'framer-motion';
import { Sparkles, Flame, User, Star, Sprout } from 'lucide-react';
import type { ServiceAudienceProps } from '@/types/service';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Flame,
    User,
    Star,
    Sprout,
};

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
    hidden: { opacity: 0, scale: 0.95 },
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
        defaultTitle: 'Kimler İçin?',
    },
    en: {
        defaultTitle: 'Who Is It For?',
    },
} as const;

export function ServiceAudience({
    audiences,
    title,
    locale,
}: ServiceAudienceProps) {
    const t = translations[locale];
    const displayTitle = title || t.defaultTitle;

    if (!audiences || audiences.length === 0) return null;

    return (
        <section
            className="relative bg-midnight py-20 lg:py-28"
            aria-labelledby="audience-title"
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
                        id="audience-title"
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {displayTitle}
                    </h2>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                {/* Audience Grid */}
                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {audiences.map((audience) => {
                        const IconComponent = iconMap[audience.icon || 'Sparkles'] || Sparkles;

                        return (
                            <motion.div
                                key={audience.id}
                                variants={itemVariants}
                                className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-midnight-light/30 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-gold/30"
                            >
                                {/* Icon */}
                                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                                    <IconComponent className="h-8 w-8" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-display text-lg font-medium text-cream">
                                    {audience.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-cream/70">
                                    {audience.description}
                                </p>

                                {/* Hover effect */}
                                <div className="pointer-events-none absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceAudience;
