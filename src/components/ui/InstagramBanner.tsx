'use client';

// ─────────────────────────────────────────────────────────────────────────────
// Floating Social Buttons
// Instagram + WhatsApp buttons - elegant floating widgets
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Sparkles } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';

// ─────────────────────────────────────────────────────────────────────────────
// WhatsApp Icon Component (Official Logo)
// ─────────────────────────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const INSTAGRAM_URL = 'https://www.instagram.com/gamze.tango/';
const INSTAGRAM_HANDLE = '@gamze.tango';

const WHATSAPP_PHONE = '905062284507';
const WHATSAPP_MESSAGE = 'Merhaba, ben www.gamzetango.com web sitenizden ulaşıyorum. Dersler hakkında bilgi almak istiyorum.';

const CONTENT = {
    tr: {
        instagram: 'Instagram\'da Takip Et',
        whatsapp: 'WhatsApp ile Ulaşın',
        instagramTooltip: 'Dans anlarını keşfet ✨',
        whatsappTooltip: 'Hemen bilgi alın 💬',
    },
    en: {
        instagram: 'Follow on Instagram',
        whatsapp: 'Contact via WhatsApp',
        instagramTooltip: 'Discover dance moments ✨',
        whatsappTooltip: 'Get info now 💬',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// Social Button Component
// ─────────────────────────────────────────────────────────────────────────────

interface SocialButtonProps {
    type: 'instagram' | 'whatsapp';
    onClick: () => void;
    tooltip: string;
    handle?: string;
}

function SocialButton({ type, onClick, tooltip, handle }: SocialButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const isInstagram = type === 'instagram';

    const gradientClass = isInstagram
        ? 'from-purple-600 via-pink-500 to-orange-400'
        : 'from-green-500 to-green-600';

    const ringGradient = isInstagram
        ? 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
        : 'linear-gradient(45deg, #25D366, #128C7E, #075E54)';

    return (
        <motion.div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 15,
                stiffness: 200,
                delay: isInstagram ? 0.1 : 0.2
            }}
        >
            {/* Tooltip - appears on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                    >
                        <div className="relative bg-charcoal/95 backdrop-blur-lg border border-gold/20 rounded-xl px-4 py-2.5 shadow-xl">
                            {/* Arrow */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                                <div className="border-8 border-transparent border-l-charcoal/95" />
                            </div>

                            <div className="text-right">
                                {handle && (
                                    <p className={`font-heading text-sm font-medium ${isInstagram ? 'text-pink-400' : 'text-green-400'}`}>
                                        {handle}
                                    </p>
                                )}
                                <p className="text-cream/80 text-xs">
                                    {tooltip}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                onClick={onClick}
                className="relative group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label={tooltip}
            >
                {/* Animated ring */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: ringGradient }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: isInstagram ? 3 : 4,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Pulsing glow */}
                <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientClass}`}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: isInstagram ? 0 : 0.5,
                    }}
                />

                {/* Button face */}
                <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${gradientClass} shadow-lg`}>
                    {isInstagram ? (
                        <Instagram className="h-5 w-5 text-white" />
                    ) : (
                        <WhatsAppIcon className="h-6 w-6 text-white" />
                    )}
                </div>

                {/* Sparkle indicator for Instagram */}
                {isInstagram && (
                    <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gold shadow-md">
                            <Sparkles className="h-2.5 w-2.5 text-midnight" />
                        </div>
                    </motion.div>
                )}
            </motion.button>
        </motion.div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

export function FloatingSocialButtons() {
    const { locale } = useTranslation();
    const content = CONTENT[locale];

    const handleInstagram = () => {
        window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
    };

    const handleWhatsApp = () => {
        const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-28 right-6 z-40 flex flex-col gap-3">
            <SocialButton
                type="instagram"
                onClick={handleInstagram}
                tooltip={content.instagramTooltip}
                handle={INSTAGRAM_HANDLE}
            />
            <SocialButton
                type="whatsapp"
                onClick={handleWhatsApp}
                tooltip={content.whatsappTooltip}
            />
        </div>
    );
}

// Keep the old export name for backward compatibility
export { FloatingSocialButtons as InstagramBanner };
