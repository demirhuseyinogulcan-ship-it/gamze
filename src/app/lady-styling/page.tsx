/**
 * Lady Styling - Bayanlara Özel Tango Dersleri
 * KAPSAMLI SEO-optimized hizmet sayfası
 * 
 * Ana odak: Duruş, zarafet, kadın stili, kişisel gelişim
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
    LADY_STYLING_SERVICE,
    generateServiceSchema,
    generateFAQSchema,
} from '@/lib/constants/services';

// SEO Metadata
export const metadata: Metadata = {
    title: LADY_STYLING_SERVICE.seo.title,
    description: LADY_STYLING_SERVICE.seo.description,
    keywords: LADY_STYLING_SERVICE.seo.keywords.join(', '),
    alternates: {
        canonical: LADY_STYLING_SERVICE.seo.canonicalUrl,
        languages: {
            'tr-TR': '/lady-styling',
            'en-US': '/en/lady-styling',
        },
    },
    openGraph: {
        title: LADY_STYLING_SERVICE.seo.title,
        description: LADY_STYLING_SERVICE.seo.description,
        url: LADY_STYLING_SERVICE.seo.canonicalUrl,
        siteName: 'Gamze Yıldız Tango',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: `https://gamzetango.com${LADY_STYLING_SERVICE.heroImage}`,
                width: 1200,
                height: 630,
                alt: 'Lady Styling - Tangoda Kadın Zarafeti',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: LADY_STYLING_SERVICE.seo.title,
        description: LADY_STYLING_SERVICE.seo.description,
        images: [`https://gamzetango.com${LADY_STYLING_SERVICE.heroImage}`],
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
const serviceSchema = generateServiceSchema(LADY_STYLING_SERVICE);
const faqSchema = generateFAQSchema(LADY_STYLING_SERVICE);

export default function LadyStylingPage() {
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
                    name={LADY_STYLING_SERVICE.name}
                    tagline={LADY_STYLING_SERVICE.tagline}
                    description={LADY_STYLING_SERVICE.description}
                    heroImage={LADY_STYLING_SERVICE.heroImage}
                    locale="tr"
                />

                {/* Features - Neden Lady Styling? */}
                <ServiceFeatures
                    features={LADY_STYLING_SERVICE.features}
                    title="Lady Styling'de Neler Öğrenirsiniz?"
                    locale="tr"
                />

                {/* Target Audience - Kimler İçin? */}
                {LADY_STYLING_SERVICE.audiences && (
                    <ServiceAudience
                        audiences={LADY_STYLING_SERVICE.audiences}
                        title="Lady Styling Kimler İçin?"
                        locale="tr"
                    />
                )}

                {/* Benefits - Size Ne Kazandırır? */}
                <ServiceBenefits
                    benefits={LADY_STYLING_SERVICE.benefits}
                    title="Lady Styling Size Ne Kazandırır?"
                    locale="tr"
                />

                {/* Process Steps */}
                {LADY_STYLING_SERVICE.steps && (
                    <ServiceSteps
                        steps={LADY_STYLING_SERVICE.steps}
                        title="Lady Styling Süreci"
                        locale="tr"
                    />
                )}

                {/* FAQ Section */}
                <ServiceFAQ
                    faqs={LADY_STYLING_SERVICE.faqs}
                    title="Lady Styling Hakkında Sık Sorulan Sorular"
                    locale="tr"
                />

                {/* CTA Section */}
                <ServiceCTA
                    ctaText={LADY_STYLING_SERVICE.ctaText}
                    ctaDescription={LADY_STYLING_SERVICE.ctaDescription}
                    serviceName={LADY_STYLING_SERVICE.name}
                    serviceSlug={LADY_STYLING_SERVICE.slug}
                    locale="tr"
                />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
