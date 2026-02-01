/**
 * Çift Tango Dersi - Service Page
 * SEO-optimized landing page for couple tango lessons
 * 
 * Uses shared service components for consistent UI/UX
 * Based on lady-styling page structure
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import {
    ServiceHero,
    ServiceFeatures,
    ServiceBenefits,
    ServiceSteps,
    ServiceAudience,
    ServiceFAQ,
    ServiceCTA,
} from '@/components/service';
import {
    CIFT_TANGO_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: CIFT_TANGO_DERSI_SERVICE.seo.title,
    description: CIFT_TANGO_DERSI_SERVICE.seo.description,
    keywords: CIFT_TANGO_DERSI_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: CIFT_TANGO_DERSI_SERVICE.seo.canonicalUrl,
    },
    openGraph: {
        title: CIFT_TANGO_DERSI_SERVICE.seo.title,
        description: CIFT_TANGO_DERSI_SERVICE.seo.description,
        url: CIFT_TANGO_DERSI_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${CIFT_TANGO_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Çift Tango Dersi İstanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: CIFT_TANGO_DERSI_SERVICE.seo.title,
        description: CIFT_TANGO_DERSI_SERVICE.seo.description,
        images: [`https://gamzetango.com${CIFT_TANGO_DERSI_SERVICE.heroImage}`],
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
const serviceSchema = generateServiceSchema(CIFT_TANGO_DERSI_SERVICE);
const faqSchema = generateFAQSchema(CIFT_TANGO_DERSI_SERVICE);

export default function CiftTangoDersiPage() {
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
                    name={CIFT_TANGO_DERSI_SERVICE.name}
                    tagline={CIFT_TANGO_DERSI_SERVICE.tagline}
                    description={CIFT_TANGO_DERSI_SERVICE.description}
                    heroImage={CIFT_TANGO_DERSI_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Çift Dersi? */}
                <ServiceFeatures
                    features={CIFT_TANGO_DERSI_SERVICE.features}
                    title="Çift Dersinin Avantajları"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {CIFT_TANGO_DERSI_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={CIFT_TANGO_DERSI_SERVICE.audiences}
                        title="Çift Dersi Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={CIFT_TANGO_DERSI_SERVICE.benefits}
                    title="Çift Dersi Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {CIFT_TANGO_DERSI_SERVICE.steps && (
                    <ServiceSteps
                        steps={CIFT_TANGO_DERSI_SERVICE.steps}
                        title="Çift Dersi Süreci"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={CIFT_TANGO_DERSI_SERVICE.faqs}
                    title="Çift Dersi Hakkında Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={CIFT_TANGO_DERSI_SERVICE.ctaText}
                    ctaDescription={CIFT_TANGO_DERSI_SERVICE.ctaDescription}
                    serviceName={CIFT_TANGO_DERSI_SERVICE.name}
                    serviceSlug={CIFT_TANGO_DERSI_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
