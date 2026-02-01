/**
 * Çift Tango Dersi - Service Page
 * SEO-optimized landing page for couple tango lessons
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
  title: 'Çift Tango Dersi',
  subtitle: 'Birlikte Dans Edin, Birlikte Büyüyün',
  description: 'Partnerinizle birlikte tango öğrenin. Çiftlere özel programlar, düğün dansı hazırlığı, ilişkinizi güçlendiren dans deneyimi.',
  heroImage: '/images/optimized/wedding dance.jpg',
  features: [
    {
      title: 'Partner Uyumu',
      description: 'Birlikte çalışarak partnerinizle mükemmel uyum yakalayın.',
      icon: '💑',
    },
    {
      title: 'İletişim Gelişimi',
      description: 'Dans yoluyla sözsüz iletişiminizi güçlendirin.',
      icon: '💬',
    },
    {
      title: 'Özel Program',
      description: 'İkinizin seviyesine ve hedeflerine göre özelleştirilmiş içerik.',
      icon: '🎯',
    },
    {
      title: 'Kaliteli Zaman',
      description: 'Birlikte geçirdiğiniz kaliteli ve eğlenceli anlar.',
      icon: '❤️',
    },
  ],
  forWho: [
    {
      title: 'Nişanlı Çiftler',
      description: 'Düğün dansınız için profesyonel hazırlık. Misafirlerinizi büyüleyecek bir performans.',
      icon: '💍',
    },
    {
      title: 'Yeni Evli Çiftler',
      description: 'Birlikte yeni bir hobi edinmek ve partnerinizle bağınızı güçlendirmek için.',
      icon: '🎊',
    },
    {
      title: 'Uzun Süreli Çiftler',
      description: 'İlişkinize yeni bir heyecan katmak, birlikte bir şeyler öğrenmek için.',
      icon: '🌹',
    },
    {
      title: 'Dans Seven Çiftler',
      description: 'Tango\'nun tutkusunu ve zarafetini birlikte keşfetmek için.',
      icon: '💃',
    },
  ],
  benefits: [
    'Partnerinizle aynı hızda ilerleme',
    'Dans dışında da geçerli iletişim becerileri',
    'Birlikte geçirilen kaliteli zaman',
    'Stres atmak ve eğlenmek',
    'Yeni sosyal çevre edinme fırsatı',
    'Fiziksel ve zihinsel sağlık faydaları',
  ],
  faq: [
    {
      question: 'İkimiz de hiç dans bilmiyoruz, yine de katılabilir miyiz?',
      answer: 'Kesinlikle! Çift derslerimiz her seviyeye uygundur. Sıfırdan başlayarak birlikte öğrenmek, aslında en güzel yollardan biridir. İkiniz de aynı seviyede ilerlersiniz.',
    },
    {
      question: 'Düğün dansı için ne kadar süre önceden başlamalıyız?',
      answer: 'İdeal olarak düğününüzden 2-3 ay önce başlamanızı öneriyoruz. Bu süre içinde rahat ve özgüvenli bir performans sergileyebilecek seviyeye ulaşırsınız. Acil durumlar için 1 aylık yoğun programlarımız da mevcuttur.',
    },
    {
      question: 'Seviyelerimiz farklı olursa ne olacak?',
      answer: 'Bu çok yaygın bir durum ve sorun değil. Eğitmen, her ikinizin de gelişmesini sağlayacak şekilde dersi uyarlar. Daha deneyimli partner, partnerlik becerilerini geliştirir; yeni başlayan ise temel teknikleri öğrenir.',
    },
    {
      question: 'Çift dersi mi yoksa özel ders mi almalıyız?',
      answer: 'Çift dersi zaten özel ders formatındadır - sadece siz ikiniz ve eğitmen. Eğer partneriniz olmadan kendi başınıza tango öğrenmek isterseniz, bireysel özel ders alabilirsiniz.',
    },
    {
      question: 'Bir derste ne kadar ilerleme kaydedebiliriz?',
      answer: 'Her çift farklı hızda öğrenir, ancak genellikle 4-6 ders sonunda basit bir tango yürüyüşü ve temel figürlerle dans edebilir hale gelirsiniz. Düğün dansı için 8-12 ders idealdir.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Çift Tango Dersi İstanbul | Partnerinizle Tango Öğrenin | Gamze Tango',
  description: 'İstanbul\'da çiftlere özel tango dersleri. Partnerinizle birlikte tango öğrenin. Düğün dansı hazırlığı, çift programları. Profesyonel eğitim.',
  keywords: [
    'çift tango dersi',
    'çiftler için tango',
    'partner tango dersi',
    'birlikte tango öğrenmek',
    'çift dans dersi istanbul',
    'tango düğün dansı',
    'çiftlere özel dans dersi',
    'romantik tango dersi',
  ].join(', '),
  alternates: {
    canonical: 'https://gamzetango.com/cift-tango-dersi',
  },
  openGraph: {
    title: 'Çift Tango Dersi İstanbul | Gamze Tango',
    description: 'Partnerinizle birlikte tango öğrenin. Çiftlere özel programlar, düğün dansı hazırlığı.',
    url: 'https://gamzetango.com/cift-tango-dersi',
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/optimized/wedding%20dance.jpg',
        width: 1200,
        height: 630,
        alt: 'Çift Tango Dersi İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çift Tango Dersi İstanbul | Gamze Tango',
    description: 'Partnerinizle birlikte tango öğrenin. Çiftlere özel programlar.',
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
  '@id': 'https://gamzetango.com/cift-tango-dersi#course',
  name: 'Çift Tango Dersi',
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
    name: 'Çift Tango Dersi',
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

export default function CiftTangoDersiPage() {
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
            <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6">
              💑 Çiftlere Özel
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
                Randevu Al
              </Link>
              <Link
                href="/dugun-dansi"
                className="px-8 py-4 border border-amber-500/50 hover:bg-amber-500/10 text-white rounded-lg transition-all duration-300"
              >
                Düğün Dansı
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Neden Birlikte Tango?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Tango, sadece bir dans değil; bir iletişim, bir bağ, bir yolculuk.
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

        {/* For Who Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Kimler İçin?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Her aşamadaki çiftler için dans etmenin keyfi
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICE_DATA.forWho.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 flex gap-6"
                >
                  <span className="text-4xl shrink-0">{item.icon}</span>
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

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Birlikte Tango Öğrenmenin Faydaları
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Dans etmek, ilişkinize beklemediğiniz güzellikler katar
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {SERVICE_DATA.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
                >
                  <span className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
                    ✓
                  </span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Dance Highlight */}
        <section className="py-20 bg-gradient-to-br from-amber-500/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6">
                  💍 Özel Gününüz İçin
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Düğün Dansı Hazırlığı
                </h2>
                <p className="text-gray-300 mb-6">
                  Düğününüzde misafirlerinizi büyüleyecek bir performans sergilemek ister misiniz? 
                  Profesyonel düğün dansı eğitimimiz ile özel gününüz unutulmaz olsun.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    Size özel koreografi
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    Şarkı seçimi danışmanlığı
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    Acil durum paketleri
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    Düğün günü desteği
                  </li>
                </ul>
                <Link
                  href="/dugun-dansi"
                  className="inline-flex px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
                >
                  Düğün Dansı Detayları
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/images/optimized/wedding dance 1.jpg"
                    alt="Düğün Dansı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
              </div>
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
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Birlikte Dans Etmeye Başlayın
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Partnerinizle birlikte tango dünyasına adım atın. 
              İlk dersinizi planlamak için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Randevu Al
              </Link>
              <a
                href="https://wa.me/905532626498?text=Merhaba, partnerimle birlikte tango dersi almak istiyoruz."
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
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
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
                href="/grup-tango-dersi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Grup Tango Dersi
                </h3>
                <p className="text-gray-400">
                  Sosyal ortamda dans öğrenin.
                </p>
              </Link>
              <Link
                href="/dugun-dansi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
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
