/**
 * Özel Tango Dersi - Service Page
 * SEO-optimized landing page for private tango lessons
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
    OZEL_TANGO_DERSI_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: OZEL_TANGO_DERSI_SERVICE.seo.title,
    description: OZEL_TANGO_DERSI_SERVICE.seo.description,
    keywords: OZEL_TANGO_DERSI_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: OZEL_TANGO_DERSI_SERVICE.seo.canonicalUrl,
    },
    openGraph: {
        title: OZEL_TANGO_DERSI_SERVICE.seo.title,
        description: OZEL_TANGO_DERSI_SERVICE.seo.description,
        url: OZEL_TANGO_DERSI_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${OZEL_TANGO_DERSI_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Özel Tango Dersi İstanbul',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: OZEL_TANGO_DERSI_SERVICE.seo.title,
        description: OZEL_TANGO_DERSI_SERVICE.seo.description,
        images: [`https://gamzetango.com${OZEL_TANGO_DERSI_SERVICE.heroImage}`],
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
const serviceSchema = generateServiceSchema(OZEL_TANGO_DERSI_SERVICE);
const faqSchema = generateFAQSchema(OZEL_TANGO_DERSI_SERVICE);

export default function OzelTangoDersiPage() {
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
                    name={OZEL_TANGO_DERSI_SERVICE.name}
                    tagline={OZEL_TANGO_DERSI_SERVICE.tagline}
                    description={OZEL_TANGO_DERSI_SERVICE.description}
                    heroImage={OZEL_TANGO_DERSI_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Özel Ders? */}
                <ServiceFeatures
                    features={OZEL_TANGO_DERSI_SERVICE.features}
                    title="Özel Dersin Avantajları"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {OZEL_TANGO_DERSI_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={OZEL_TANGO_DERSI_SERVICE.audiences}
                        title="Özel Ders Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={OZEL_TANGO_DERSI_SERVICE.benefits}
                    title="Özel Ders Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {OZEL_TANGO_DERSI_SERVICE.steps && (
                    <ServiceSteps
                        steps={OZEL_TANGO_DERSI_SERVICE.steps}
                        title="Özel Ders Süreci"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={OZEL_TANGO_DERSI_SERVICE.faqs}
                    title="Özel Ders Hakkında Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={OZEL_TANGO_DERSI_SERVICE.ctaText}
                    ctaDescription={OZEL_TANGO_DERSI_SERVICE.ctaDescription}
                    serviceName={OZEL_TANGO_DERSI_SERVICE.name}
                    serviceSlug={OZEL_TANGO_DERSI_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
