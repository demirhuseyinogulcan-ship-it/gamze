/**
 * Kurumsal Tango Workshop - Şirket Etkinlikleri
 * SEO-optimized hizmet sayfası
 * 
 * Ana odak: Takım çalışması, motivasyon, kurumsal etkinlik
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
    KURUMSAL_WORKSHOP_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: KURUMSAL_WORKSHOP_SERVICE.seo.title,
    description: KURUMSAL_WORKSHOP_SERVICE.seo.description,
    keywords: KURUMSAL_WORKSHOP_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: KURUMSAL_WORKSHOP_SERVICE.seo.canonicalUrl,
        languages: {
            'tr-TR': '/kurumsal-workshop',
            'en-US': '/en/corporate-workshop',
        },
    },
    openGraph: {
        title: KURUMSAL_WORKSHOP_SERVICE.seo.title,
        description: KURUMSAL_WORKSHOP_SERVICE.seo.description,
        url: KURUMSAL_WORKSHOP_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${KURUMSAL_WORKSHOP_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Kurumsal Tango Workshop - Takım Çalışması',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: KURUMSAL_WORKSHOP_SERVICE.seo.title,
        description: KURUMSAL_WORKSHOP_SERVICE.seo.description,
        images: [`https://gamzetango.com${KURUMSAL_WORKSHOP_SERVICE.heroImage}`],
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
const serviceSchema = generateServiceSchema(KURUMSAL_WORKSHOP_SERVICE);
const faqSchema = generateFAQSchema(KURUMSAL_WORKSHOP_SERVICE);

export default function KurumsalWorkshopPage() {
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
                    name={KURUMSAL_WORKSHOP_SERVICE.name}
                    tagline={KURUMSAL_WORKSHOP_SERVICE.tagline}
                    description={KURUMSAL_WORKSHOP_SERVICE.description}
                    heroImage={KURUMSAL_WORKSHOP_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Kurumsal Workshop? */}
                <ServiceFeatures
                    features={KURUMSAL_WORKSHOP_SERVICE.features}
                    title="Kurumsal Workshop'ta Neler Var?"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {KURUMSAL_WORKSHOP_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={KURUMSAL_WORKSHOP_SERVICE.audiences}
                        title="Kurumsal Workshop Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={KURUMSAL_WORKSHOP_SERVICE.benefits}
                    title="Ekibinize Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {KURUMSAL_WORKSHOP_SERVICE.steps && (
                    <ServiceSteps
                        steps={KURUMSAL_WORKSHOP_SERVICE.steps}
                        title="Workshop Süreci"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={KURUMSAL_WORKSHOP_SERVICE.faqs}
                    title="Kurumsal Workshop Hakkında Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={KURUMSAL_WORKSHOP_SERVICE.ctaText}
                    ctaDescription={KURUMSAL_WORKSHOP_SERVICE.ctaDescription}
                    serviceName={KURUMSAL_WORKSHOP_SERVICE.name}
                    serviceSlug={KURUMSAL_WORKSHOP_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
