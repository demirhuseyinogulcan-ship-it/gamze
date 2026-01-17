import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle, MessageCircle, Star, ChevronRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Silivri Özel Tango Dersi | Profesyonel Tango Eğitimi - Gamze Yıldız',
    description: 'Silivri\'de özel tango dersi arıyorsanız doğru yerdesiniz. Gamze Yıldız ile birebir tango eğitimi, düğün dansı hazırlığı ve lady styling dersleri. İlk ders %50 indirimli!',
    keywords: [
        'silivri tango dersi',
        'silivri özel tango dersi',
        'silivri tango eğitmeni',
        'silivri tango kursu',
        'silivri dans dersi',
        'silivri düğün dansı',
        'özel tango dersi silivri',
    ],
    alternates: {
        canonical: 'https://gamzetango.com/silivri-ozel-tango-dersi',
    },
    openGraph: {
        title: 'Silivri Özel Tango Dersi | Gamze Tango',
        description: 'Silivri\'de profesyonel özel tango eğitimi. Birebir dersler, düğün dansı ve lady styling.',
        url: 'https://gamzetango.com/silivri-ozel-tango-dersi',
        type: 'website',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Structured Data
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://gamzetango.com/silivri-ozel-tango-dersi#business',
    name: 'Gamze Tango - Silivri Özel Ders',
    description: 'Silivri\'de profesyonel özel tango dersleri. Birebir eğitim, düğün dansı hazırlığı, lady styling.',
    url: 'https://gamzetango.com/silivri-ozel-tango-dersi',
    telephone: '+905062284507',
    priceRange: '₺₺',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Silivri',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.0733,
        longitude: 28.2469,
    },
    areaServed: {
        '@type': 'City',
        name: 'Silivri',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tango Dersleri',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Özel Tango Dersi',
                    description: 'Birebir veya çift olarak kişiye özel tango eğitimi.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Düğün Dansı Hazırlığı',
                    description: 'Düğününüz için özel tango performansı hazırlığı.',
                },
            },
        ],
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ Data for SEO
// ─────────────────────────────────────────────────────────────────────────────

const faqs = [
    {
        question: 'Silivri\'de özel tango dersi ücreti ne kadar?',
        answer: 'Silivri\'de özel tango dersi fiyatları ders süresine ve paket tercihine göre değişmektedir. Detaylı fiyat bilgisi için WhatsApp üzerinden iletişime geçebilirsiniz.',
    },
    {
        question: 'Tango için hiç deneyimim yok, başlayabilir miyim?',
        answer: 'Elbette! Özel derslerimiz tamamen sizin seviyenize göre planlanır. Sıfırdan başlayanlar için temel adımlardan başlayarak ilerleriz.',
    },
    {
        question: 'Silivri\'de dersler nerede yapılıyor?',
        answer: 'Silivri merkezinde uygun bir stüdyoda veya tercihinize göre evinizde özel ders verilmektedir.',
    },
    {
        question: 'Düğün dansı için ne kadar süre gerekiyor?',
        answer: 'Düğün dansı hazırlığı için genellikle 8-12 ders önerilmektedir. Ancak bu süre çiftin dans geçmişine göre değişebilir.',
    },
    {
        question: 'Partner olmadan ders alabilir miyim?',
        answer: 'Evet! Lady styling dersleri ve solo teknik çalışmalar partner olmadan alınabilir. Ayrıca düğün dansı için eşinizle birlikte gelmeniz yeterlidir.',
    },
];

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

// Breadcrumb Schema for SEO
const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: 'https://gamzetango.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Silivri Özel Tango Dersi',
            item: 'https://gamzetango.com/silivri-ozel-tango-dersi',
        },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function SilivriTangoDersiPage() {
    const whatsappMessage = encodeURIComponent(
        'Merhaba, Silivri\'de özel tango dersi hakkında bilgi almak istiyorum.'
    );
    const whatsappUrl = `https://wa.me/905062284507?text=${whatsappMessage}`;

    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <main className="min-h-screen bg-midnight">
                {/* Hero Section */}
                <section className="relative py-24 px-4 bg-gradient-to-b from-charcoal to-midnight">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Breadcrumb */}
                        <nav className="flex justify-center items-center gap-2 text-sm text-cream/60 mb-8">
                            <Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gold">Silivri Özel Tango Dersi</span>
                        </nav>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                            Silivri <span className="text-gold">Özel Tango Dersi</span>
                        </h1>
                        <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
                            Silivri&apos;de profesyonel tango eğitmeni Gamze Yıldız ile birebir özel tango dersleri.
                            Düğün dansı, lady styling ve başlangıç seviyesi eğitimler.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp ile Bilgi Al
                            </a>
                            <a
                                href="tel:+905062284507"
                                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-midnight px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
                            >
                                <Phone className="w-5 h-5" />
                                Hemen Ara
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-cream/70">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-gold" />
                                <span>10+ Yıl Deneyim</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-gold" />
                                <span>500+ Mutlu Öğrenci</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gold" />
                                <span>Silivri Merkez</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Silivri&apos;de Sunduğumuz <span className="text-gold">Tango Hizmetleri</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <div className="bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                                    <Star className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="font-heading text-xl text-cream mb-4">Özel Tango Dersi</h3>
                                <p className="text-cream/70 mb-4">
                                    Silivri&apos;de birebir veya çift olarak özel tango eğitimi. Seviyenize göre kişiselleştirilmiş program.
                                </p>
                                <ul className="space-y-2 text-cream/60 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Esnek ders saatleri
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Kişiye özel müfredat
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Hızlı ilerleme garantisi
                                    </li>
                                </ul>
                            </div>

                            {/* Service 2 */}
                            <div className="bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                                    <Star className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="font-heading text-xl text-cream mb-4">Düğün Dansı Hazırlığı</h3>
                                <p className="text-cream/70 mb-4">
                                    Düğününüzde unutulmaz bir tango performansı için profesyonel hazırlık programı.
                                </p>
                                <ul className="space-y-2 text-cream/60 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Koreografi tasarımı
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Şarkı seçimi desteği
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        8-12 ders paketi
                                    </li>
                                </ul>
                            </div>

                            {/* Service 3 */}
                            <div className="bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                                    <Star className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="font-heading text-xl text-cream mb-4">Lady Styling</h3>
                                <p className="text-cream/70 mb-4">
                                    Kadın dansçılara özel solo teknik ve stil çalışmaları. Zarafetinizi keşfedin.
                                </p>
                                <ul className="space-y-2 text-cream/60 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Partner gerektirmez
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Teknik + stil çalışması
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-gold" />
                                        Özgüven geliştirme
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-4 bg-charcoal/30">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Neden <span className="text-gold">Gamze Tango?</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-midnight" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg text-cream mb-2">10+ Yıllık Profesyonel Deneyim</h3>
                                    <p className="text-cream/70">Yüzlerce öğrenciye tango öğretmiş, uluslararası festivallerde sahne almış deneyimli eğitmen.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-midnight" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg text-cream mb-2">Silivri&apos;de Yerinde Hizmet</h3>
                                    <p className="text-cream/70">Silivri merkezinde stüdyoda veya evinizde özel ders imkanı.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-midnight" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg text-cream mb-2">Kişiye Özel Eğitim Programı</h3>
                                    <p className="text-cream/70">Hedeflerinize ve seviyenize göre tamamen özelleştirilmiş ders planı.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-midnight" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg text-cream mb-2">Esnek Ders Saatleri</h3>
                                    <p className="text-cream/70">Hafta içi ve hafta sonu, size uygun saatlerde ders imkanı.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Sıkça Sorulan <span className="text-gold">Sorular</span>
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-charcoal/50 border border-gold/20 rounded-xl p-6">
                                    <h3 className="font-heading text-lg text-cream mb-3">{faq.question}</h3>
                                    <p className="text-cream/70">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 px-4 bg-gradient-to-t from-charcoal to-midnight">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
                            Silivri&apos;de Tango Yolculuğunuza <span className="text-gold">Başlayın</span>
                        </h2>
                        <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
                            Hemen iletişime geçin, sizin için en uygun ders programını birlikte planlayalım.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp ile Yazın
                            </a>
                            <a
                                href="tel:+905062284507"
                                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-midnight px-8 py-4 rounded-full font-medium transition-all"
                            >
                                <Phone className="w-5 h-5" />
                                +90 506 228 45 07
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-center gap-8 text-cream/70">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gold" />
                                <span>Silivri, İstanbul</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-gold" />
                                <span>Hafta içi & Hafta sonu</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Locations */}
                <section className="py-12 px-4 border-t border-gold/20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="font-heading text-xl text-cream text-center mb-6">
                            Diğer Lokasyonlarımız
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/kadikoy-ozel-tango-dersi"
                                className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all"
                            >
                                Kadıköy Özel Tango Dersi
                            </Link>
                            <Link
                                href="/beyoglu-ozel-tango-dersi"
                                className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all"
                            >
                                Beyoğlu Özel Tango Dersi
                            </Link>
                            <Link
                                href="/istanbul-ozel-tango-dersi"
                                className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all"
                            >
                                İstanbul Tango Dersleri
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Main Site CTA - Strong Internal Link to Homepage */}
                <section className="py-16 px-4 bg-gradient-to-b from-midnight to-charcoal">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="font-heading text-2xl md:text-3xl text-cream mb-4">
                            <span className="text-gold">Gamze Tango</span> ile Tanışın
                        </h3>
                        <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
                            10 yılı aşkın deneyimiyle İstanbul&apos;un önde gelen tango eğitmeni Gamze Yıldız hakkında 
                            daha fazla bilgi edinin. Tüm hizmetlerimizi, galeriyi, öğrenci yorumlarını ve 
                            blog yazılarımızı keşfedin.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-midnight px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
                            >
                                Ana Sayfayı Ziyaret Et
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold hover:bg-gold/10 px-8 py-4 rounded-full font-medium transition-all"
                            >
                                Tango Blog Yazıları
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
