/**
 * Özel Tango Dersi - Service Page
 * SEO-optimized landing page for private tango lessons
 * 
 * Features:
 * - Full SEO metadata with OpenGraph
 * - Schema.org Course + Offer JSON-LD
 * - Service-specific components
 * - Commercial intent optimization
 */

import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/ui';
import Link from 'next/link';

const SERVICE_DATA = {
  title: 'Özel Tango Dersi',
  subtitle: 'Kişiye Özel Eğitim, Hızlı İlerleme',
  description: 'İstanbul\'da özel tango dersleri ile hızla ilerleme kaydedin. Bire bir eğitim, esnek zamanlama, kişiselleştirilmiş program. Her seviye için.',
  heroImage: '/images/optimized/tango ozel dersi.jpg',
  features: [
    {
      title: 'Bire Bir İlgi',
      description: 'Tüm ders boyunca sadece size odaklanılır, hatalanız anında düzeltilir.',
      icon: '🎯',
    },
    {
      title: 'Hızlı İlerleme',
      description: 'Grup derslerine göre 3-4 kat daha hızlı öğrenme imkanı.',
      icon: '🚀',
    },
    {
      title: 'Esnek Zamanlama',
      description: 'Kendi programınıza uygun ders saatleri belirleyin.',
      icon: '📅',
    },
    {
      title: 'Kişisel Program',
      description: 'Hedeflerinize ve seviyenize özel hazırlanmış müfredat.',
      icon: '📋',
    },
  ],
  benefits: [
    {
      title: 'Yeni Başlayanlar İçin',
      description: 'Temel teknikleri doğru öğrenerek sağlam bir altyapı oluşturun. Grup derslerinde kaçırılabilecek detayları yakalayın.',
    },
    {
      title: 'Orta Seviye İçin',
      description: 'Belirli zorlukları aşmak, teknik sorunları düzeltmek ve repertuarınızı genişletmek için ideal.',
    },
    {
      title: 'İleri Seviye İçin',
      description: 'Stil geliştirme, müzikalite, performans hazırlığı ve ileri düzey figürler üzerine çalışın.',
    },
    {
      title: 'Düğün/Özel Gün İçin',
      description: 'Belirli bir tarih ve şarkı için koreografi hazırlığı. Etkileyici bir performans sergilemek için.',
    },
  ],
  process: [
    {
      step: 1,
      title: 'İhtiyaç Analizi',
      description: 'İlk görüşmede hedeflerinizi, seviyenizi ve beklentilerinizi konuşuyoruz.',
    },
    {
      step: 2,
      title: 'Kişisel Program',
      description: 'Size özel bir eğitim planı hazırlıyoruz.',
    },
    {
      step: 3,
      title: 'Düzenli Dersler',
      description: 'Belirlenen program dahilinde dersler başlıyor.',
    },
    {
      step: 4,
      title: 'Değerlendirme',
      description: 'İlerleyişinizi düzenli olarak değerlendiriyoruz.',
    },
  ],
  faq: [
    {
      question: 'Özel ders mi, grup dersi mi tercih etmeliyim?',
      answer: 'Her ikisinin de avantajları var. Özel dersler, hızlı ilerleme ve kişisel ilgi sunar. Grup dersleri ise sosyal ortam ve farklı partnerlerle pratik imkanı sağlar. İdeal kombinasyon, her ikisini birlikte almaktır.',
    },
    {
      question: 'Özel dersler nerede yapılıyor?',
      answer: 'Dersler, İstanbul\'daki stüdyomuzda veya belirlediğiniz bir mekanda yapılabilir. Ev veya ofis dersleri için uygun alan gereklidir.',
    },
    {
      question: 'Özel derse partnerimle birlikte gelebilir miyim?',
      answer: 'Elbette! Çift olarak özel ders almak, partnerinizle uyumunuzu geliştirmenin en etkili yoludur. Çift dersleri için ayrı bir programımız da bulunmaktadır.',
    },
    {
      question: 'Minimum kaç ders almam gerekiyor?',
      answer: 'Minimum ders zorunluluğu yoktur. Ancak düzenli ilerleme için haftada en az 1 ders önerilir. Düğün dansı için ortalama 8-12 ders gerekir.',
    },
    {
      question: 'Ders iptali/erteleme nasıl yapılıyor?',
      answer: '24 saat öncesinden bildirim yapılması halinde ders ücretsiz ertelenebilir. Son dakika iptalleri ders ücreti olarak sayılır.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Özel Tango Dersi İstanbul | Bire Bir Eğitim | Gamze Tango',
  description: 'İstanbul\'da özel tango dersleri. Bire bir eğitim, esnek zamanlama, kişiselleştirilmiş program. Hızlı ilerleme garantisi. Her seviye için.',
  keywords: [
    'özel tango dersi',
    'özel tango dersi istanbul',
    'bire bir tango dersi',
    'private tango lesson',
    'tango özel ders fiyatları',
    'tango eğitmeni istanbul',
    'kişisel tango dersi',
    'özel dans dersi',
  ].join(', '),
  alternates: {
    canonical: 'https://gamzetango.com/ozel-tango-dersi',
    languages: {
      'tr-TR': '/ozel-tango-dersi',
      'en-US': '/en/private-tango-lessons',
    },
  },
  openGraph: {
    title: 'Özel Tango Dersi İstanbul | Gamze Tango',
    description: 'İstanbul\'da özel tango dersleri. Bire bir eğitim, esnek zamanlama, kişiselleştirilmiş program.',
    url: 'https://gamzetango.com/ozel-tango-dersi',
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/optimized/tango%20ozel%20dersi.jpg',
        width: 1200,
        height: 630,
        alt: 'Özel Tango Dersi İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Özel Tango Dersi İstanbul | Gamze Tango',
    description: 'İstanbul\'da özel tango dersleri. Bire bir eğitim, esnek zamanlama.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Course Schema for Private Lessons
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://gamzetango.com/ozel-tango-dersi#course',
  name: 'Özel Tango Dersi',
  description: SERVICE_DATA.description,
  provider: {
    '@type': 'Organization',
    '@id': 'https://gamzetango.com/#organization',
    name: 'Gamze Tango',
    url: 'https://gamzetango.com',
  },
  educationalLevel: 'All Levels',
  inLanguage: 'tr',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    name: 'Özel Tango Dersi',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://gamzetango.com/ozel-tango-dersi#service',
  name: 'Özel Tango Dersi',
  description: SERVICE_DATA.description,
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://gamzetango.com/#localbusiness',
    name: 'Gamze Tango',
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul',
  },
  serviceType: 'Private Dance Lessons',
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

export default function OzelTangoDersiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6">
              Özel Dersler
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
              <Link
                href="/#contact"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Özel Ders Al
              </Link>
              <Link
                href="/tango-deneme-dersi"
                className="px-8 py-4 border border-amber-500/50 hover:bg-amber-500/10 text-white rounded-lg transition-all duration-300"
              >
                Deneme Dersi
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Özel Dersin Avantajları
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Kişiselleştirilmiş eğitim ile tango yolculuğunuzda fark yaratın.
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

        {/* Benefits Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Kimler İçin İdeal?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Özel dersler, her seviyeden ve her hedeften dansçı için uygundur.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICE_DATA.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-8 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Başlamanız için 4 basit adım
            </p>

            <div className="space-y-6">
              {SERVICE_DATA.process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-zinc-900 rounded-xl border border-zinc-800"
                >
                  <span className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-amber-500/20 to-transparent">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hemen Başlayın
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              İlk özel dersinizi planlamak için iletişime geçin. 
              Hedeflerinizi konuşalım, size özel bir plan oluşturalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Randevu Al
              </Link>
              <a
                href="https://wa.me/905532626498?text=Merhaba, özel tango dersi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                WhatsApp ile Ulaş
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/grup-tango-dersi"
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Grup Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Sosyal ortamda dans öğrenin.
                </p>
              </Link>
              <Link
                href="/cift-tango-dersi"
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Çift Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Partnerinizle birlikte öğrenin.
                </p>
              </Link>
              <Link
                href="/dugun-dansi"
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Düğün Dansı
                </h3>
                <p className="text-gray-400">
                  Özel gününüz için koreografi.
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
