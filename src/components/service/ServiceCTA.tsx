'use client';

/**
 * ServiceCTA Component
 * Call-to-action section for service pages
 * Redirects to WhatsApp/email (no pricing)
 */

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import type { ServiceCTAProps } from '@/types/service';
import { CONTACT } from '@/lib/constants/site';

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
        title: 'Hemen Başlayın',
        subtitle: 'Bilgi almak ve kayıt olmak için bizimle iletişime geçin',
        whatsapp: 'WhatsApp ile Yazın',
        email: 'E-posta Gönderin',
        phone: 'Bizi Arayın',
        free: 'İlk ders ücretsiz!',
    },
    en: {
        title: 'Get Started',
        subtitle: 'Contact us for more information and registration',
        whatsapp: 'Message on WhatsApp',
        email: 'Send Email',
        phone: 'Call Us',
        free: 'First lesson is free!',
    },
} as const;

export function ServiceCTA({
    ctaText,
    ctaDescription,
    serviceName,
    serviceSlug,
    locale,
}: ServiceCTAProps) {
    const t = translations[locale];

    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
        locale === 'tr'
            ? `Merhaba! ${serviceName} hakkında bilgi almak istiyorum.`
            : `Hello! I would like information about ${serviceName}.`
    );
    const whatsappUrl = `https://wa.me/${CONTACT.PHONE.replace('+', '')}?text=${whatsappMessage}`;

    // Email subject
    const emailSubject = encodeURIComponent(
        locale === 'tr'
            ? `${serviceName} Hakkında Bilgi`
            : `Information About ${serviceName}`
    );
    const emailUrl = `mailto:${CONTACT.EMAIL}?subject=${emailSubject}`;

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-b from-midnight-light to-midnight py-20 lg:py-28"
            aria-labelledby="cta-title"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-gold/5 blur-3xl" />
                <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gold/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2"
                    >
                        <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                        <span className="text-sm font-medium text-gold">{t.free}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        id="cta-title"
                        variants={itemVariants}
                        className="mb-4 font-display text-3xl font-light text-cream sm:text-4xl lg:text-5xl"
                    >
                        {t.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-4 max-w-2xl text-lg text-cream/70"
                    >
                        {ctaDescription}
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-10 max-w-xl text-base text-cream/50"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* Contact Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
                    >
                        {/* WhatsApp - Primary */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] sm:w-auto"
                        >
                            <MessageCircle className="h-5 w-5" />
                            <span>{t.whatsapp}</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        {/* Email - Secondary */}
                        <a
                            href={emailUrl}
                            className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold/30 bg-midnight/50 px-8 py-4 text-base font-medium text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold/50 hover:bg-midnight sm:w-auto"
                        >
                            <Mail className="h-5 w-5 text-gold" />
                            <span>{t.email}</span>
                        </a>
                    </motion.div>

                    {/* Phone number */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex items-center justify-center gap-2 text-cream/50"
                    >
                        <Phone className="h-4 w-4" />
                        <a
                            href={`tel:${CONTACT.PHONE}`}
                            className="text-sm transition-colors hover:text-gold"
                        >
                            {CONTACT.PHONE_DISPLAY}
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceCTA;
