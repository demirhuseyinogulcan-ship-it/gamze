/**
 * Tango Deneme Dersi - Service Page
 * SEO-optimized landing page for trial tango lessons
 * 
 * Features:
 * - Full SEO metadata with OpenGraph
 * - Schema.org Course + Offer JSON-LD
 * - Lead generation focus
 * - Low-commitment entry point
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import Link from 'next/link';

const SERVICE_DATA = {
  title: 'Tango Deneme Dersi',
  subtitle: 'Tango ile Tanışmanın En Kolay Yolu',
  description: 'Tango\'yu denemek mi istiyorsunuz? Deneme dersimizle tango dünyasına ilk adımınızı atın. Hiçbir ön bilgi gerekmez, sadece merakınız yeterli.',
  heroImage: '/images/optimized/6.jpg',
  features: [
    {
      title: 'Bağlayıcılık Yok',
      description: 'Tek seferlik deneme fırsatı. Devam edip etmemek tamamen size kalmış.',
      icon: '🔓',
    },
    {
      title: 'Temel Tanışma',
      description: 'Tango\'nun ne olduğunu, nasıl hissettirdiğini ilk elden deneyimleyin.',
      icon: '👋',
    },
    {
      title: 'Deneyim Gerekmez',
      description: 'Hiç dans etmemiş olsanız bile katılabilirsiniz.',
      icon: '🌱',
    },
    {
      title: 'Sorularınıza Yanıt',
      description: 'Tango hakkındaki tüm merak ettiklerinizi sorun.',
      icon: '❓',
    },
  ],
  whatToExpect: [
    {
      title: 'Tanışma & Sohbet',
      duration: '10 dk',
      description: 'Hedeflerinizi, beklentilerinizi ve dans geçmişinizi konuşuyoruz.',
    },
    {
      title: 'Temel Bilgiler',
      duration: '15 dk',
      description: 'Tango\'nun tarihçesi, stilleri ve felsefesi hakkında kısa bilgi.',
    },
    {
      title: 'İlk Adımlar',
      duration: '25 dk',
      description: 'Duruş, yürüyüş ve abrazo (kucaklama) ile ilk tango deneyiminiz.',
    },
    {
      title: 'Değerlendirme',
      duration: '10 dk',
      description: 'Devam etmek isterseniz size uygun programı belirleyelim.',
    },
  ],
  testimonials: [
    {
      quote: 'Deneme dersinden sonra tango\'ya aşık oldum. Şimdi 2 yıldır dans ediyorum!',
      author: 'Zeynep K.',
    },
    {
      quote: 'Hiç beklemiyordum ama çok eğlenceli geçti. Hemen grup dersine kaydoldum.',
      author: 'Mehmet A.',
    },
    {
      quote: 'Gamze çok sabırlı ve cesaretlendirici. İlk dakikadan rahat hissettim.',
      author: 'Ayşe B.',
    },
  ],
  faq: [
    {
      question: 'Deneme dersine partner olmadan gelebilir miyim?',
      answer: 'Evet, kesinlikle! Deneme dersleri genellikle bireysel veya küçük gruplar halinde yapılır. Partner zorunluluğu yoktur.',
    },
    {
      question: 'Ne giysem iyi olur?',
      answer: 'Rahat hareket edebileceğiniz günlük kıyafetler yeterli. Ayakkabı olarak topuksuz, kaymayan tabanlı bir ayakkabı tercih edin. Özel dans ayakkabısı gerekmez.',
    },
    {
      question: 'Deneme dersi ne kadar sürüyor?',
      answer: 'Deneme dersi yaklaşık 45-60 dakika sürmektedir. Bu süre tanışma, temel bilgiler ve ilk pratik içindir.',
    },
    {
      question: 'Deneme dersinden sonra kayıt olmak zorunda mıyım?',
      answer: 'Hayır, hiçbir zorunluluk yoktur. Deneme dersi, tango\'yu tanımanız içindir. Devam edip etmemek tamamen size kalmış.',
    },
    {
      question: 'Yaş sınırı var mı?',
      answer: 'Tango için yaş sınırı yoktur! 18-70 yaş arası öğrencilerimiz mevcut. Fiziksel bir engel yoksa herkes tango öğrenebilir.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Tango Deneme Dersi İstanbul | İlk Adımınızı Atın | Gamze Tango',
  description: 'Tango deneme dersi ile tango dünyasına giriş yapın. Hiç deneyim gerekmez, bağlayıcılık yok. İstanbul\'da profesyonel tango eğitimi.',
  keywords: [
    'tango deneme dersi',
    'tango denemek',
    'tango başlangıç dersi',
    'tango introduction',
    'tango ilk ders',
    'tango tanışma dersi',
    'ücretsiz tango dersi',
    'tango öğrenmek istanbul',
  ].join(', '),
  alternates: {
    canonical: 'https://gamzetango.com/tango-deneme-dersi',
  },
  openGraph: {
    title: 'Tango Deneme Dersi İstanbul | Gamze Tango',
    description: 'Tango ile tanışmanın en kolay yolu. Deneme dersimizle tango dünyasına ilk adımınızı atın.',
    url: 'https://gamzetango.com/tango-deneme-dersi',
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/optimized/6.jpg',
        width: 1200,
        height: 630,
        alt: 'Tango Deneme Dersi İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tango Deneme Dersi İstanbul | Gamze Tango',
    description: 'Tango ile tanışmanın en kolay yolu. Hiç deneyim gerekmez.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Course Schema
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://gamzetango.com/tango-deneme-dersi#course',
  name: 'Tango Deneme Dersi',
  description: SERVICE_DATA.description,
  provider: {
    '@type': 'Organization',
    '@id': 'https://gamzetango.com/#organization',
    name: 'Gamze Tango',
    url: 'https://gamzetango.com',
  },
  educationalLevel: 'Beginner',
  inLanguage: 'tr',
  coursePrerequisites: 'Hiçbir ön bilgi veya deneyim gerekmez',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    name: 'Tango Deneme Dersi',
    courseMode: 'onsite',
    courseWorkload: 'PT1H',
    instructor: {
      '@type': 'Person',
      '@id': 'https://gamzetango.com/#person',
      name: 'Gamze Yıldız',
      jobTitle: 'Profesyonel Tango Eğitmeni',
    },
    location: {
      '@type': 'Place',
      name: 'Gamze Tango Stüdyo',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'İstanbul',
        addressCountry: 'TR',
      },
    },
  },
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICE_DATA.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function TangoDenemeeDersiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SERVICE_DATA.heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm mb-6">
              🌱 Yeni Başlayanlar İçin
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {SERVICE_DATA.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 mb-6">
              {SERVICE_DATA.subtitle}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {SERVICE_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905532626498?text=Merhaba, tango deneme dersi için randevu almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Hemen Randevu Al
              </a>
              <Link
                href="/#contact"
                className="px-8 py-4 border border-amber-500/50 hover:bg-amber-500/10 text-white rounded-lg transition-all duration-300"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Deneme Dersinde Sizi Ne Bekliyor?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Rahat, eğlenceli ve keşif dolu bir deneyim
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICE_DATA.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-700 hover:border-amber-500/50 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Ders Programı
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              ~60 dakikalık deneme dersinde neler yapacağız?
            </p>

            <div className="space-y-6">
              {SERVICE_DATA.whatToExpect.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-black rounded-xl border border-zinc-800"
                >
                  <span className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-amber-400 text-sm">{item.duration}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Deneme Dersine Katılanlar Ne Diyor?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {SERVICE_DATA.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                >
                  <div className="text-amber-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                  <p className="text-amber-400 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mid Page */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-amber-600/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Merak Ettiğiniz Her Şeyi Sorun
            </h2>
            <p className="text-gray-300 mb-6">
              Deneme dersi hakkında sorularınız mı var? WhatsApp ile hemen ulaşın.
            </p>
            <a
              href="https://wa.me/905532626498?text=Merhaba, tango deneme dersi hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              WhatsApp ile Sor
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-6">
              {SERVICE_DATA.faq.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-black rounded-xl border border-zinc-800"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İlk Adımı Atmaya Hazır mısınız?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Tango size göre mi, değil mi? Deneme dersinde kendiniz görün. 
              Hiçbir bağlayıcılık yok, sadece keyifli bir deneyim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905532626498?text=Merhaba, tango deneme dersi için randevu almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Deneme Dersi Randevusu Al
              </a>
              <Link
                href="/#contact"
                className="px-8 py-4 border border-amber-500/50 hover:bg-amber-500/10 text-white rounded-lg transition-all duration-300"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </section>

        {/* After Trial - What's Next */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Deneme Dersinden Sonra
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tango hoşunuza giderse, size uygun programla devam edin
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/grup-tango-dersi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Grup Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Sosyal ortamda, uygun fiyatla tango öğrenin.
                </p>
              </Link>
              <Link
                href="/ozel-tango-dersi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Özel Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Bire bir eğitim ile hızlı ilerleme.
                </p>
              </Link>
              <Link
                href="/cift-tango-dersi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Çift Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Partnerinizle birlikte öğrenin.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
