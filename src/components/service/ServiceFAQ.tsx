'use client';

/**
 * ServiceFAQ Component
 * Accordion FAQ section with FAQ Schema support
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ServiceFAQProps } from '@/types/service';

// Animation variants
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
} as const;

// Translations
const translations = {
    tr: {
        defaultTitle: 'Sık Sorulan Sorular',
    },
    en: {
        defaultTitle: 'Frequently Asked Questions',
    },
} as const;

export function ServiceFAQ({
    faqs,
    title,
    locale,
}: ServiceFAQProps) {
    const t = translations[locale];
    const displayTitle = title || t.defaultTitle;
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            className="relative bg-midnight py-20 lg:py-28"
            aria-labelledby="faq-title"
        >
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)_0%,_transparent_50%)]" />
            </div>

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="faq-title"
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {displayTitle}
                    </h2>
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            variants={itemVariants}
                            className="overflow-hidden rounded-xl border border-gold/10 bg-midnight-light/30 backdrop-blur-sm transition-colors duration-300 hover:border-gold/20"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-inset"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${faq.id}`}
                            >
                                <span className="font-display text-lg font-medium text-cream">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 text-gold"
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${faq.id}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="border-t border-gold/10 px-6 py-5">
                                            <p className="text-base leading-relaxed text-cream/70">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceFAQ;
