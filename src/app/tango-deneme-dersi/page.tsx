/**
 * Tango Deneme Dersi - Service Page
 * SEO-optimized landing page for trial tango lessons
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
    TANGO_DENEME_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: TANGO_DENEME_DERSI_SERVICE.seo.title,
    description: TANGO_DENEME_DERSI_SERVICE.seo.description,
    keywords: TANGO_DENEME_DERSI_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: TANGO_DENEME_DERSI_SERVICE.seo.canonicalUrl,
    },
    openGraph: {
        title: TANGO_DENEME_DERSI_SERVICE.seo.title,
        description: TANGO_DENEME_DERSI_SERVICE.seo.description,
        url: TANGO_DENEME_DERSI_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${TANGO_DENEME_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Tango Deneme Dersi İstanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: TANGO_DENEME_DERSI_SERVICE.seo.title,
        description: TANGO_DENEME_DERSI_SERVICE.seo.description,
        images: [`https://gamzetango.com${TANGO_DENEME_DERSI_SERVICE.heroImage}`],
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
const serviceSchema = generateServiceSchema(TANGO_DENEME_DERSI_SERVICE);
const faqSchema = generateFAQSchema(TANGO_DENEME_DERSI_SERVICE);

export default function TangoDenemeDerasiPage() {
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
                    name={TANGO_DENEME_DERSI_SERVICE.name}
                    tagline={TANGO_DENEME_DERSI_SERVICE.tagline}
                    description={TANGO_DENEME_DERSI_SERVICE.description}
                    heroImage={TANGO_DENEME_DERSI_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Deneme Dersi? */}
                <ServiceFeatures
                    features={TANGO_DENEME_DERSI_SERVICE.features}
                    title="Deneme Dersinin Avantajları"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {TANGO_DENEME_DERSI_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={TANGO_DENEME_DERSI_SERVICE.audiences}
                        title="Deneme Dersi Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={TANGO_DENEME_DERSI_SERVICE.benefits}
                    title="Deneme Dersi Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {TANGO_DENEME_DERSI_SERVICE.steps && (
                    <ServiceSteps
                        steps={TANGO_DENEME_DERSI_SERVICE.steps}
                        title="Deneme Dersi Nasıl Geçer?"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={TANGO_DENEME_DERSI_SERVICE.faqs}
                    title="Deneme Dersi Hakkında Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={TANGO_DENEME_DERSI_SERVICE.ctaText}
                    ctaDescription={TANGO_DENEME_DERSI_SERVICE.ctaDescription}
                    serviceName={TANGO_DENEME_DERSI_SERVICE.name}
                    serviceSlug={TANGO_DENEME_DERSI_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
