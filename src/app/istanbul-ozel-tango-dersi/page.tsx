import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle, MessageCircle, Star, ChevronRight, Users, Award, Heart } from 'lucide-react';
import { Navbar, Footer, AmbientSound } from '@/components/ui';
import { CONTACT, getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants/site';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata - MEGA OPTIMIZED FOR "ÖZEL TANGO DERSİ İSTANBUL"
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: 'İstanbul Özel Tango Dersi | Profesyonel Tango Eğitimi - Gamze Yıldız',
    description: 'İstanbul\'da özel tango dersi arıyorsanız doğru yerdesiniz! Gamze Yıldız ile Avrupa ve Anadolu Yakası\'nda birebir tango eğitimi, düğün dansı hazırlığı, lady styling. İlk ders için hemen arayın!',
    keywords: [
        // Ana Keywords - Tüm Varyasyonlar
        'özel tango dersi',
        'tango özel ders',
        'istanbul özel tango dersi',
        'özel tango dersi istanbul',
        'tango dersi istanbul',
        'istanbul tango dersi',
        'tango istanbul',
        'istanbul tango',
        
        // Kurs Varyasyonları
        'istanbul tango kursu',
        'tango kursu istanbul',
        'istanbul tango okulu',
        'tango okulu istanbul',
        
        // Eğitmen/Hoca Varyasyonları
        'istanbul tango eğitmeni',
        'tango eğitmeni istanbul',
        'istanbul tango hocası',
        'tango hocası istanbul',
        'profesyonel tango eğitimi',
        'birebir tango dersi',
        
        // Bölge Bazlı
        'avrupa yakası tango dersi',
        'anadolu yakası tango dersi',
        'kadıköy tango',
        'beyoğlu tango',
        'taksim tango',
        
        // Düğün Dansı
        'düğün dansı istanbul',
        'istanbul düğün dansı',
        'düğün dansı tango',
        'tango düğün dansı',
        'düğün ilk dansı istanbul',
        
        // Diğer
        'tango öğrenmek istanbul',
        'arjantin tangosu dersi',
        'tango dersi fiyatları',
        'lady styling istanbul',
    ],
    alternates: {
        canonical: 'https://gamzetango.com/istanbul-ozel-tango-dersi',
    },
    openGraph: {
        title: 'İstanbul Özel Tango Dersi | Gamze Tango',
        description: 'İstanbul\'un her yerinde profesyonel özel tango eğitimi. Avrupa ve Anadolu Yakası\'nda hizmet.',
        url: 'https://gamzetango.com/istanbul-ozel-tango-dersi',
        type: 'website',
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Structured Data
// ─────────────────────────────────────────────────────────────────────────────

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://gamzetango.com/istanbul-ozel-tango-dersi#business',
    name: 'Gamze Tango - İstanbul Özel Tango Dersi',
    description: 'İstanbul\'un her yerinde profesyonel özel tango dersleri. Avrupa ve Anadolu Yakası\'nda birebir eğitim.',
    url: 'https://gamzetango.com/istanbul-ozel-tango-dersi',
    telephone: '+905062284507',
    priceRange: '₺₺',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
    },
    areaServed: {
        '@type': 'City',
        name: 'İstanbul',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Özel Tango Dersleri',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Özel Tango Dersi',
                    description: 'İstanbul genelinde birebir profesyonel tango eğitimi.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Düğün Dansı',
                    description: 'Düğününüz için özel tango performansı hazırlığı.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Lady Styling',
                    description: 'Kadın dansçılara özel teknik ve stil çalışmaları.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Kurumsal Workshop',
                    description: 'Şirket etkinlikleri için grup tango atölyeleri.',
                },
            },
        ],
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '127',
    },
};

const faqs = [
    {
        question: 'İstanbul\'da özel tango dersi ücreti ne kadar?',
        answer: 'Özel tango dersi fiyatları ders süresine, lokasyona ve paket tercihine göre değişmektedir. Tek ders veya paket seçenekleri mevcuttur. Detaylı fiyat bilgisi için WhatsApp üzerinden iletişime geçebilirsiniz.',
    },
    {
        question: 'İstanbul\'un hangi bölgelerinde ders veriyorsunuz?',
        answer: 'Avrupa Yakası\'nda Beyoğlu (Taksim, Galata), Şişli, Beşiktaş, Silivri; Anadolu Yakası\'nda Kadıköy, Üsküdar, Ataşehir bölgelerinde özel ders veriyoruz.',
    },
    {
        question: 'Tango öğrenmek için dans geçmişi gerekli mi?',
        answer: 'Hayır, hiç dans deneyimi olmayanlar da rahatlıkla başlayabilir. Özel dersler tamamen sizin seviyenize göre planlanır ve sıfırdan başlayanlar için temel adımlardan ilerleriz.',
    },
    {
        question: 'Düğün dansı için kaç ders gerekiyor?',
        answer: 'Düğün dansı hazırlığı için genellikle 8-12 ders önerilir. Bu süre çiftin dans geçmişine ve hedeflenen performansa göre değişebilir.',
    },
    {
        question: 'Partner olmadan tango öğrenebilir miyim?',
        answer: 'Evet! Lady styling dersleri ve solo teknik çalışmalar partner olmadan alınabilir. Ayrıca eğitmen partneriniz olarak da çalışabilir.',
    },
    {
        question: 'Online tango dersi veriyor musunuz?',
        answer: 'Evet, temel teknik, müzikalite ve solo çalışmalar için online ders seçeneğimiz mevcuttur.',
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

export default function IstanbulTangoDersiPage() {
    const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.ISTANBUL);

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
                            <span className="text-gold">İstanbul Özel Tango Dersi</span>
                        </nav>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
                            İstanbul <span className="text-gold">Özel Tango Dersi</span>
                        </h1>
                        <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
                            İstanbul&apos;un her yerinde profesyonel tango eğitmeni Gamze Yıldız ile birebir özel dersler.
                            Avrupa ve Anadolu Yakası&apos;nda düğün dansı, lady styling ve başlangıç seviyesi eğitimler.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 text-lg">
                                <MessageCircle className="w-6 h-6" />
                                WhatsApp ile Hemen Bilgi Al
                            </a>
                            <a href={CONTACT.PHONE_TEL}
                                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-midnight px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 text-lg">
                                <Phone className="w-6 h-6" />
                                Hemen Ara
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            {[
                                { icon: Award, value: '10+', label: 'Yıl Deneyim' },
                                { icon: Users, value: '500+', label: 'Mutlu Öğrenci' },
                                { icon: Star, value: '5.0', label: 'Puan' },
                                { icon: Heart, value: '127', label: 'Referans' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <stat.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                                    <div className="text-3xl font-heading text-cream">{stat.value}</div>
                                    <div className="text-cream/60 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-4">
                            İstanbul&apos;da <span className="text-gold">Ders Verdiğimiz Bölgeler</span>
                        </h2>
                        <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
                            Avrupa ve Anadolu Yakası&apos;nda size en uygun lokasyonda özel tango dersi
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/silivri-ozel-tango-dersi" className="group bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-all">
                                <MapPin className="w-10 h-10 text-gold mb-4" />
                                <h3 className="font-heading text-2xl text-cream mb-2 group-hover:text-gold transition-colors">Silivri</h3>
                                <p className="text-cream/70 mb-4">Silivri merkez ve çevresinde özel tango dersleri.</p>
                                <span className="text-gold text-sm flex items-center gap-1">Detaylar <ChevronRight className="w-4 h-4" /></span>
                            </Link>

                            <Link href="/beyoglu-ozel-tango-dersi" className="group bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-all">
                                <MapPin className="w-10 h-10 text-gold mb-4" />
                                <h3 className="font-heading text-2xl text-cream mb-2 group-hover:text-gold transition-colors">Beyoğlu</h3>
                                <p className="text-cream/70 mb-4">Taksim, Galata, Cihangir ve İstiklal çevresi.</p>
                                <span className="text-gold text-sm flex items-center gap-1">Detaylar <ChevronRight className="w-4 h-4" /></span>
                            </Link>

                            <Link href="/kadikoy-ozel-tango-dersi" className="group bg-charcoal/50 border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-all">
                                <MapPin className="w-10 h-10 text-gold mb-4" />
                                <h3 className="font-heading text-2xl text-cream mb-2 group-hover:text-gold transition-colors">Kadıköy</h3>
                                <p className="text-cream/70 mb-4">Anadolu Yakası: Moda, Bağdat Caddesi ve çevresi.</p>
                                <span className="text-gold text-sm flex items-center gap-1">Detaylar <ChevronRight className="w-4 h-4" /></span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 px-4 bg-charcoal/30">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Sunduğumuz <span className="text-gold">Tango Hizmetleri</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Özel Tango Dersi', desc: 'Birebir veya çift olarak kişiye özel eğitim programı.', icon: Star },
                                { title: 'Düğün Dansı', desc: 'Unutulmaz bir düğün için profesyonel hazırlık.', icon: Heart },
                                { title: 'Lady Styling', desc: 'Kadın dansçılara özel zarafet ve teknik çalışması.', icon: Users },
                                { title: 'Kurumsal Workshop', desc: 'Şirket etkinlikleri için grup atölyeleri.', icon: Award },
                            ].map((service, i) => (
                                <div key={i} className="bg-midnight/50 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all">
                                    <service.icon className="w-8 h-8 text-gold mb-4" />
                                    <h3 className="font-heading text-lg text-cream mb-2">{service.title}</h3>
                                    <p className="text-cream/60 text-sm">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream text-center mb-12">
                            Neden <span className="text-gold">Gamze Tango?</span>
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: '10+ Yıllık Profesyonel Deneyim', desc: 'Yüzlerce öğrenciye tango öğretmiş, uluslararası festivallerde sahne almış deneyimli eğitmen.' },
                                { title: 'İstanbul Genelinde Hizmet', desc: 'Avrupa ve Anadolu Yakası\'nda, size en uygun lokasyonda ders imkanı.' },
                                { title: 'Kişiye Özel Eğitim Programı', desc: 'Hedeflerinize ve seviyenize göre tamamen özelleştirilmiş ders planı.' },
                                { title: 'Esnek Ders Saatleri', desc: 'Hafta içi ve hafta sonu, iş çıkışı veya öğlen saatlerinde ders imkanı.' },
                                { title: 'Garanti Sonuç', desc: 'Düğün dansı hazırlığında memnuniyet garantisi.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-heading text-lg text-cream">{item.title}</h3>
                                        <p className="text-cream/70">{item.desc}</p>
                                    </div>
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
                                <div key={index} className="bg-midnight/50 border border-gold/20 rounded-xl p-6">
                                    <h3 className="font-heading text-lg text-cream mb-3">{faq.question}</h3>
                                    <p className="text-cream/70">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 px-4 bg-gradient-to-t from-charcoal to-midnight">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
                            İstanbul&apos;da Tango Yolculuğunuza <span className="text-gold">Bugün Başlayın</span>
                        </h2>
                        <p className="text-cream/80 mb-8 max-w-2xl mx-auto text-lg">
                            Hemen iletişime geçin, ücretsiz danışmanlık görüşmesi ile başlayalım.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-medium transition-all transform hover:scale-105 text-lg shadow-lg">
                                <MessageCircle className="w-6 h-6" />
                                WhatsApp ile Hemen Yazın
                            </a>
                            <a href={CONTACT.PHONE_TEL}
                                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-midnight px-10 py-5 rounded-full font-medium transition-all text-lg">
                                <Phone className="w-6 h-6" />
                                {CONTACT.PHONE_DISPLAY}
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-cream/70">
                            <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-gold" /><span>Tüm İstanbul</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /><span>7/24 İletişim</span></div>
                            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-gold" /><span>%100 Memnuniyet</span></div>
                        </div>
                    </div>
                </section>

                {/* Main Site CTA - Strong Internal Link to Homepage */}
                <section className="py-16 px-4 bg-gradient-to-b from-midnight to-charcoal border-t border-gold/20">
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
