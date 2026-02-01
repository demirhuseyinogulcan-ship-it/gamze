/**
 * Grup Tango Dersi - Service Page
 * SEO-optimized landing page for group tango lessons
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
  title: 'Grup Tango Dersi',
  subtitle: 'Birlikte Öğrenmenin Keyfi',
  description: 'İstanbul\'da grup tango dersleri ile tango öğrenin. Başlangıç, orta ve ileri seviye gruplar. Sosyal bir ortamda dans edin, yeni insanlarla tanışın.',
  heroImage: '/images/optimized/3.jpg',
  features: [
    {
      title: 'Seviye Grupları',
      description: 'Başlangıç, orta ve ileri seviye gruplar ile kendi hızınızda ilerleyin.',
      icon: '📊',
    },
    {
      title: 'Sosyal Ortam',
      description: 'Aynı tutkuyu paylaşan insanlarla tanışın, yeni arkadaşlıklar kurun.',
      icon: '👥',
    },
    {
      title: 'Pratik İmkanı',
      description: 'Farklı partnerlerle dans ederek pratik yapın, uyum yeteneğinizi geliştirin.',
      icon: '💃',
    },
    {
      title: 'Uygun Fiyat',
      description: 'Grup dersleri, özel derslere göre daha ekonomik bir seçenektir.',
      icon: '💰',
    },
  ],
  levels: [
    {
      name: 'Başlangıç Seviye',
      duration: '8 hafta',
      description: 'Tango\'nun temellerini öğrenin: duruş, yürüyüş, abrazo, temel figürler.',
      topics: ['Tango duruşu ve abrazo', 'Caminata (yürüyüş)', 'Temel sekiz (ocho)', 'Cruzada ve salida'],
    },
    {
      name: 'Orta Seviye',
      duration: '12 hafta',
      description: 'Tekniklerinizi derinleştirin, müzikaliteyi keşfedin.',
      topics: ['Giros ve molinete', 'Sacadas', 'Barridas', 'Müzikalite ve ifade'],
    },
    {
      name: 'İleri Seviye',
      duration: 'Sürekli',
      description: 'Karmaşık kombinasyonlar, performans kalitesi.',
      topics: ['İleri düzey sacadas', 'Volcadas ve colgadas', 'Koreografi çalışması', 'Milonga ve vals'],
    },
  ],
  faq: [
    {
      question: 'Grup derslerine partner olmadan katılabilir miyim?',
      answer: 'Evet, kesinlikle! Grup derslerinde partner rotasyonu yapılır, böylece herkes farklı partnerlerle dans etme fırsatı bulur. Bu, hem öğrenme sürecinizi hızlandırır hem de dans adaptasyon yeteneğinizi geliştirir.',
    },
    {
      question: 'Hangi seviye grubuna katılmalıyım?',
      answer: 'Daha önce hiç tango deneyiminiz yoksa başlangıç seviyesinden başlamanızı öneririz. Eğer daha önce tango eğitimi aldıysanız, seviye belirleme için bir deneme dersine katılabilir veya bize ulaşabilirsiniz.',
    },
    {
      question: 'Grup dersleri ne sıklıkla yapılıyor?',
      answer: 'Grup dersleri haftada 1-2 kez yapılmaktadır. Ders günleri ve saatleri seviyeye göre değişebilir. Güncel program için bizimle iletişime geçebilirsiniz.',
    },
    {
      question: 'Grup derslerine kaç kişi katılıyor?',
      answer: 'Kaliteli eğitim için gruplarımızı 6-12 kişi arasında tutuyoruz. Bu sayı, hem yeterli ilgi hem de pratik imkanı sağlar.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Grup Tango Dersi İstanbul | Başlangıç, Orta, İleri Seviye | Gamze Tango',
  description: 'İstanbul\'da grup tango dersleri. Başlangıç, orta ve ileri seviye gruplar. Sosyal ortamda tango öğrenin. Haftalık dersler, uygun fiyatlar.',
  keywords: [
    'grup tango dersi',
    'grup tango kursu',
    'tango grubu istanbul',
    'başlangıç tango dersi',
    'orta seviye tango',
    'ileri seviye tango',
    'tango öğrenmek istanbul',
    'haftalık tango dersi',
  ].join(', '),
  alternates: {
    canonical: 'https://gamzetango.com/grup-tango-dersi',
  },
  openGraph: {
    title: 'Grup Tango Dersi İstanbul | Gamze Tango',
    description: 'İstanbul\'da grup tango dersleri. Başlangıç, orta ve ileri seviye gruplar. Sosyal ortamda tango öğrenin.',
    url: 'https://gamzetango.com/grup-tango-dersi',
    siteName: 'Gamze Yıldız Tango',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://gamzetango.com/images/optimized/3.jpg',
        width: 1200,
        height: 630,
        alt: 'Grup Tango Dersi İstanbul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grup Tango Dersi İstanbul | Gamze Tango',
    description: 'İstanbul\'da grup tango dersleri. Başlangıç, orta ve ileri seviye gruplar.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Course Schema for Group Lessons
const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': 'https://gamzetango.com/grup-tango-dersi#course',
  name: 'Grup Tango Dersi',
  description: SERVICE_DATA.description,
  provider: {
    '@type': 'Organization',
    '@id': 'https://gamzetango.com/#organization',
    name: 'Gamze Tango',
    url: 'https://gamzetango.com',
  },
  educationalLevel: 'Beginner to Advanced',
  inLanguage: 'tr',
  coursePrerequisites: 'Tango deneyimi gerekmez',
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      name: 'Başlangıç Seviye Grup Tango Dersi',
      courseMode: 'onsite',
      courseWorkload: 'PT1H30M',
      instructor: {
        '@type': 'Person',
        '@id': 'https://gamzetango.com/#person',
        name: 'Gamze Yıldız',
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
    {
      '@type': 'CourseInstance',
      name: 'Orta Seviye Grup Tango Dersi',
      courseMode: 'onsite',
      courseWorkload: 'PT1H30M',
      instructor: {
        '@type': 'Person',
        '@id': 'https://gamzetango.com/#person',
        name: 'Gamze Yıldız',
      },
    },
    {
      '@type': 'CourseInstance',
      name: 'İleri Seviye Grup Tango Dersi',
      courseMode: 'onsite',
      courseWorkload: 'PT1H30M',
      instructor: {
        '@type': 'Person',
        '@id': 'https://gamzetango.com/#person',
        name: 'Gamze Yıldız',
      },
    },
  ],
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

export default function GrupTangoDersiPage() {
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
              Grup Dersleri
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
                Gruba Katıl
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
              Grup Derslerinin Avantajları
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Grup derslerinde tango öğrenmek, sadece dans etmek değil, bir topluluk olmak demek.
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

        {/* Levels Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Seviye Grupları
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Her seviyeye uygun programlarımızla, nereden başlarsanız başlayın, ilerleyin.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICE_DATA.levels.map((level, index) => (
                <div
                  key={index}
                  className="p-8 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{level.name}</h3>
                  </div>
                  <p className="text-amber-400 text-sm mb-4">{level.duration}</p>
                  <p className="text-gray-400 mb-6">{level.description}</p>
                  <ul className="space-y-2">
                    {level.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-6">
              {SERVICE_DATA.faq.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
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
              Gruba Katılmaya Hazır mısınız?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Yeni başlayanlar için her ay yeni gruplar açılıyor. 
              Yerinizi ayırtın, tango yolculuğunuza başlayın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300"
              >
                Hemen Başvur
              </Link>
              <a
                href="https://wa.me/905532626498?text=Merhaba, grup tango dersleri hakkında bilgi almak istiyorum."
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
              <Link
                href="/dugun-dansi"
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  Düğün Dansı
                </h3>
                <p className="text-gray-400">
                  Özel gününüz için tango koreografisi.
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
