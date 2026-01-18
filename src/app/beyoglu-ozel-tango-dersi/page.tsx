import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle, MessageCircle, Star, ChevronRight } from 'lucide-react';
import { Navbar, Footer, AmbientSound } from '@/components/ui';
import { CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants/site';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'Beyoğlu Özel Tango Dersi | Avrupa Yakası Tango Eğitimi - Gamze Yıldız',
    description: 'Beyoğlu\'nda özel tango dersi. Taksim, Galata, Cihangir ve İstiklal çevresinde profesyonel tango eğitimi. Gamze Yıldız ile birebir dersler, düğün dansı ve lady styling.',
    keywords: [
        // Beyoğlu - Tüm Varyasyonlar
        'beyoğlu tango dersi',
        'tango dersi beyoğlu',
        'beyoğlu özel tango dersi',
        'özel tango dersi beyoğlu',
        'beyoğlu tango kursu',
        'tango kursu beyoğlu',
        'beyoğlu tango eğitimi',
        'beyoğlu tango hocası',
        'beyoğlu özel ders tango',
        
        // Taksim Varyasyonları
        'taksim tango',
        'tango taksim',
        'taksim tango dersi',
        'tango dersi taksim',
        'taksim özel tango dersi',
        
        // Diğer Semtler
        'galata tango dersi',
        'cihangir tango',
        'karaköy tango dersi',
        'şişli tango dersi',
        'nişantaşı tango dersi',
        
        // Avrupa Yakası
        'avrupa yakası tango',
        'tango avrupa yakası',
        'avrupa yakası tango dersi',
        'avrupa yakası özel tango dersi',
        
        // Düğün Dansı
        'beyoğlu düğün dansı',
        'taksim düğün dansı',
        'istanbul tango eğitmeni',
    ],
    alternates: {
        canonical: 'https://gamzetango.com/beyoglu-ozel-tango-dersi',
    },
    openGraph: {
        title: 'Beyoğlu Özel Tango Dersi | Gamze Tango',
        description: 'Beyoğlu, Taksim ve Galata\'da profesyonel özel tango eğitimi.',
        url: 'https://gamzetango.com/beyoglu-ozel-tango-dersi',
        type: 'website',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Structured Data
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://gamzetango.com/beyoglu-ozel-tango-dersi#business',
    name: 'Gamze Tango - Beyoğlu Özel Ders',
    description: 'Beyoğlu, Taksim, Galata ve Cihangir\'de profesyonel özel tango dersleri.',
    url: 'https://gamzetango.com/beyoglu-ozel-tango-dersi',
    telephone: CONTACT.PHONE,
    priceRange: '₺₺',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beyoğlu',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.0351,
        longitude: 28.9777,
    },
    areaServed: [
        { '@type': 'City', name: 'Beyoğlu' },
        { '@type': 'City', name: 'Şişli' },
        { '@type': 'City', name: 'Beşiktaş' },
    ],
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '63',
    },
};

const faqs = [
    {
        question: 'Beyoğlu\'nda tango dersleri nerede yapılıyor?',
        answer: 'Taksim, Galata, Cihangir ve İstiklal Caddesi çevresindeki profesyonel dans stüdyolarında dersler verilmektedir.',
    },
    {
        question: 'Avrupa Yakası\'nda hangi semtlere geliyorsunuz?',
        answer: 'Beyoğlu, Şişli, Beşiktaş, Nişantaşı, Etiler ve Levent bölgelerine özel ders için gelebiliyoruz.',
    },
    {
        question: 'Akşam saatlerinde ders var mı?',
        answer: 'Evet, hafta içi akşam 19:00-22:00 arası ve hafta sonu gündüz saatlerinde ders imkanı mevcuttur.',
    },
    {
        question: 'Online tango dersi veriyor musunuz?',
        answer: 'Evet, temel teknik ve solo çalışmalar için online ders seçeneğimiz de bulunmaktadır.',
    },
];

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
};

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default function BeyogluTangoDersiPage() {
    const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.BEYOGLU);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <Navbar />

            <main className="min-h-screen bg-midnight pt-20">
                {/* Hero Section */}
                <section className="relative py-24 px-4 bg-gradient-to-b from-charcoal to-midnight">
                    <div className="max-w-4xl mx-auto text-center">
                        <nav className="flex justify-center items-center gap-2 text-sm text-cream/60 mb-8">
                            <Link href="/" className="hover:text-gold transition-colors">Ana Sayfa</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-gold">Beyoğlu Özel Tango Dersi</span>
                        </nav>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                            Beyoğlu <span className="text-gold">Özel Tango Dersi</span>
                        </h1>
                        <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
                            İstanbul&apos;un kalbinde, Taksim ve Galata&apos;da profesyonel tango eğitimi.
                            Avrupa Yakası&apos;nda birebir özel dersler, düğün dansı hazırlığı ve lady styling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp ile Bilgi Al
                            </a>
                            <a href={CONTACT.PHONE_TEL}
                                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-midnight px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
                                <Phone className="w-5 h-5" />
                                Hemen Ara
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-cream/70">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-gold" />
                                <span>10+ Yıl Deneyim</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-gold" />
                                <span>Merkezi Konum</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-gold" />
                                <span>Taksim & Galata</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Beyoğlu&apos;nda <span className="text-gold">Tango Hizmetlerimiz</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Özel Tango Dersi', desc: 'Taksim ve çevresinde birebir profesyonel eğitim.', features: ['Merkezi lokasyon', 'Esnek saatler', 'Hızlı ilerleme'] },
                                { title: 'Düğün Dansı', desc: 'Unutulmaz bir düğün için tango hazırlığı.', features: ['Özel koreografi', 'Şarkı seçimi', 'Video kayıt'] },
                                { title: 'Lady Styling', desc: 'Kadın dansçılara özel zarafet eğitimi.', features: ['Solo teknik', 'Duruş çalışması', 'Özgüven'] },
                            ].map((service, i) => (
                                <div key={i} className="bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/40 transition-all">
                                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                                        <Star className="w-6 h-6 text-gold" />
                                    </div>
                                    <h3 className="font-heading text-xl text-cream mb-4">{service.title}</h3>
                                    <p className="text-cream/70 mb-4">{service.desc}</p>
                                    <ul className="space-y-2 text-cream/60 text-sm">
                                        {service.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-gold" />{f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 bg-charcoal/30">
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

                {/* CTA Section */}
                <section className="py-20 px-4 bg-gradient-to-t from-charcoal to-midnight">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
                            Beyoğlu&apos;nda Tango <span className="text-gold">Öğrenmeye Başlayın</span>
                        </h2>
                        <p className="text-cream/80 mb-8">İstanbul&apos;un merkezinde tango yolculuğunuza başlayın!</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all">
                                <MessageCircle className="w-5 h-5" />WhatsApp ile Yazın
                            </a>
                            <a href={CONTACT.PHONE_TEL}
                                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-midnight px-8 py-4 rounded-full font-medium transition-all">
                                <Phone className="w-5 h-5" />{CONTACT.PHONE_DISPLAY}
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 text-cream/70">
                            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-gold" /><span>Beyoğlu, İstanbul</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /><span>Hafta içi & Hafta sonu</span></div>
                        </div>
                    </div>
                </section>

                {/* Other Locations */}
                <section className="py-12 px-4 border-t border-gold/20">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="font-heading text-xl text-cream text-center mb-6">Diğer Lokasyonlarımız</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/silivri-ozel-tango-dersi" className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all">Silivri Tango Dersi</Link>
                            <Link href="/kadikoy-ozel-tango-dersi" className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all">Kadıköy Tango Dersi</Link>
                            <Link href="/istanbul-ozel-tango-dersi" className="px-6 py-3 bg-charcoal/50 border border-gold/20 rounded-full text-cream/80 hover:border-gold/50 hover:text-gold transition-all">İstanbul Tango Dersleri</Link>
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

            <Footer />
            <AmbientSound />
        </>
    );
}
