'use client';

/**
 * ServiceFeatures Component
 * Grid layout for service features with icons
 */

import { motion } from 'framer-motion';
import {
    Sparkles,
    Music,
    Heart,
    User,
    Users,
    Calendar,
    Award,
    Globe,
    MapPin,
    Building,
    Hand,
    Video,
    Headphones,
    TrendingUp,
    Star,
    Flame,
    Sprout,
} from 'lucide-react';
import type { ServiceFeaturesProps } from '@/types/service';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Music,
    Heart,
    User,
    Users,
    Calendar,
    Award,
    Globe,
    MapPin,
    Building,
    Hand,
    Video,
    Headphones,
    TrendingUp,
    Star,
    Flame,
    Sprout,
    Footprints: Sparkles, // fallback
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
} as const;

// Translations
const translations = {
    tr: {
        defaultTitle: 'Neden Bizi Tercih Etmelisiniz?',
    },
    en: {
        defaultTitle: 'Why Choose Us?',
    },
} as const;

export function ServiceFeatures({
    features,
    title,
    locale,
}: ServiceFeaturesProps) {
    const t = translations[locale];
    const displayTitle = title || t.defaultTitle;

    return (
        <section
            id="features"
            className="relative bg-midnight py-20 lg:py-28"
            aria-labelledby="features-title"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="features-title"
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {displayTitle}
                    </h2>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {features.map((feature) => {
                        const IconComponent = iconMap[feature.icon] || Sparkles;

                        return (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-midnight-light/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-midnight-light/50"
                            >
                                {/* Icon */}
                                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-gold/10 p-3 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                                    <IconComponent className="h-6 w-6" />
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-display text-lg font-medium text-cream">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-cream/70">
                                    {feature.description}
                                </p>

                                {/* Hover glow effect */}
                                <div className="pointer-events-none absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gold/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceFeatures;
