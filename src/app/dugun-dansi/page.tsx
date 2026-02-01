/**
 * Düğün Dansı - Profesyonel İlk Dans Eğitimi
 * SEO-optimized hizmet sayfası
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceSteps,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import {
    WEDDING_DANCE_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: WEDDING_DANCE_SERVICE.seo.title,
    description: WEDDING_DANCE_SERVICE.seo.description,
    keywords: WEDDING_DANCE_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: WEDDING_DANCE_SERVICE.seo.canonicalUrl,
        languages: {
            'tr-TR': '/dugun-dansi',
            'en-US': '/en/wedding-dance',
        },
    },
    openGraph: {
        title: WEDDING_DANCE_SERVICE.seo.title,
        description: WEDDING_DANCE_SERVICE.seo.description,
        url: WEDDING_DANCE_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${WEDDING_DANCE_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Düğün Dansı Eğitimi - Gamze Yıldız Tango',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD Schemas
const serviceSchema = generateServiceSchema(WEDDING_DANCE_SERVICE);
const faqSchema = generateFAQSchema(WEDDING_DANCE_SERVICE);

export default function DugunDansiPage() {
    return (
        <>
            {/* JSON-LD Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="min-h-screen bg-midnight">
                {/* Hero Section */}
                <ServiceHero
                    name={WEDDING_DANCE_SERVICE.name}
                    tagline={WEDDING_DANCE_SERVICE.tagline}
                    description={WEDDING_DANCE_SERVICE.description}
                    heroImage={WEDDING_DANCE_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features */}
                <ServiceFeatures
                    features={WEDDING_DANCE_SERVICE.features}
                    title="Düğün Dansı Eğitiminde Neler Sunuyoruz?"
                    locale="tr"
                />

                {/* Benefits */}
                <ServiceBenefits
                    benefits={WEDDING_DANCE_SERVICE.benefits}
                    title="Profesyonel Hazırlık Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {WEDDING_DANCE_SERVICE.steps && (
                    <ServiceSteps
                        steps={WEDDING_DANCE_SERVICE.steps}
                        title="Düğün Dansı Hazırlık Süreci"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={WEDDING_DANCE_SERVICE.faqs}
                    title="Düğün Dansı Hakkında Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={WEDDING_DANCE_SERVICE.ctaText}
                    ctaDescription={WEDDING_DANCE_SERVICE.ctaDescription}
                    serviceName={WEDDING_DANCE_SERVICE.name}
                    serviceSlug={WEDDING_DANCE_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
