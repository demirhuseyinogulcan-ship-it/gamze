/**
 * Location Constants - Single Source of Truth
 * All location data centralized here for maintainability
 */

import type { Location, LocalBusinessSchema } from '@/types/location';

// Silivri Location Data
export const SILIVRI_LOCATION: Location = {
  id: 'silivri',
  slug: 'silivri-tango-dersi',
  name: 'Silivri Tango Dersi',
  tagline: 'Silivri\'nin İlk ve Tek Profesyonel Tango Okulu',
  description: 'Marmara\'nın incisi Silivri\'de, deniz esintisi eşliğinde tango öğrenin. Gamze Yıldız ile birebir özel dersler ve grup eğitimleri.',
  heroImage: '/images/0.jpg',
  coordinates: {
    lat: 41.0731,
    lng: 28.2466,
  },
  address: {
    street: 'Alibey Mahallesi',
    district: 'Silivri',
    city: 'İstanbul',
    postalCode: '34570',
    fullAddress: 'Alibey Mahallesi, Silivri, İstanbul 34570',
  },
  contact: {
    phone: '+90 506 228 45 07',
    email: 'info@gamzetango.com',
    whatsapp: '905062284507',
  },
  seo: {
    title: 'Silivri Tango Dersi | Gamze Yıldız ile Profesyonel Tango Eğitimi',
    description: 'Silivri\'de profesyonel tango dersleri. Özel ders, grup dersi ve düğün dansı eğitimi. Gamze Yıldız ile tangonun büyüsünü keşfedin. İlk ders ücretsiz!',
    keywords: [
      'silivri tango dersi',
      'silivri dans kursu',
      'silivri tango',
      'silivri düğün dansı',
      'silivri özel ders',
      'silivri tango okulu',
      'tango silivri',
      'arjantin tango silivri',
    ],
    canonicalUrl: 'https://gamzetango.com/silivri-tango-dersi',
  },
  features: [
    {
      id: 'private',
      icon: 'User',
      title: 'Birebir Özel Ders',
      description: 'Tamamen size özel, kişiselleştirilmiş tango eğitimi. Kendi hızınızda ilerleyin.',
    },
    {
      id: 'beginner',
      icon: 'Heart',
      title: 'Başlangıç Dostu',
      description: 'Hiç dans etmemiş olsanız bile! Sıfırdan başlayanlara özel sabırlı yaklaşım.',
    },
    {
      id: 'flexible',
      icon: 'Calendar',
      title: 'Esnek Program',
      description: 'Hafta içi ve hafta sonu, size uygun saatlerde ders imkanı.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz bir düğün dansı koreografisi.',
    },
    {
      id: 'studio',
      icon: 'Home',
      title: 'Konforlu Stüdyo',
      description: 'Modern, ferah ve hijyenik dans stüdyosu. Klima ve ses sistemi mevcut.',
    },
    {
      id: 'experience',
      icon: 'Award',
      title: '10+ Yıl Deneyim',
      description: 'Uluslararası sertifikalı, tecrübeli eğitmen eşliğinde öğrenin.',
    },
  ],
  testimonials: [
    {
      id: 'silivri-1',
      name: 'Ayşe K.',
      location: 'Silivri',
      quote: 'Düğünümüz için 3 ay Gamze Hoca ile çalıştık. Herkes dansımıza hayran kaldı!',
      rating: 5,
    },
    {
      id: 'silivri-2',
      name: 'Mehmet D.',
      location: 'Silivri Merkez',
      quote: '50 yaşında tango öğrenmeye başladım. Gamze Hoca\'nın sabrı ve pozitif enerjisi inanılmaz.',
      rating: 5,
    },
    {
      id: 'silivri-3',
      name: 'Zeynep & Ahmet',
      location: 'Gümüşyaka',
      quote: 'Çift olarak başladık, şimdi milongalara gidiyoruz. Hayatımız değişti!',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'bus',
      name: 'Silivri Merkez Durağı',
      distance: '500m',
      walkTime: '6 dk',
    },
    {
      type: 'car',
      name: 'TEM Otoyolu Silivri Çıkışı',
      distance: '5 km',
    },
    {
      type: 'train',
      name: 'Marmaray - Halkalı (Aktarmalı)',
      distance: '40 km',
    },
  ],
  workingHours: [
    { day: 'Pazartesi', hours: '10:00 - 21:00' },
    { day: 'Salı', hours: '10:00 - 21:00' },
    { day: 'Çarşamba', hours: '10:00 - 21:00' },
    { day: 'Perşembe', hours: '10:00 - 21:00' },
    { day: 'Cuma', hours: '10:00 - 21:00' },
    { day: 'Cumartesi', hours: '10:00 - 18:00' },
    { day: 'Pazar', hours: 'Randevu ile', isClosed: false },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48256.65095696569!2d28.20!3d41.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51cb21e9f7f2d%3A0x9d2d7d09c0e7fb8d!2sSilivri%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890',
  isActive: true,
};

// Istanbul Location Data
export const ISTANBUL_LOCATION: Location = {
  id: 'istanbul',
  slug: 'istanbul-tango-kursu',
  name: 'İstanbul Tango Kursu',
  tagline: 'İstanbul\'un Kalbinde Arjantin Tango Eğitimi',
  description: 'İstanbul\'da profesyonel Arjantin Tango dersleri. Avrupa ve Anadolu yakasında esnek ders lokasyonları.',
  heroImage: '/images/1.jpg',
  coordinates: {
    lat: 41.0082,
    lng: 28.9784,
  },
  address: {
    street: 'Çeşitli Lokasyonlar',
    district: 'İstanbul Geneli',
    city: 'İstanbul',
    fullAddress: 'İstanbul (Avrupa & Anadolu Yakası)',
  },
  contact: {
    phone: '+90 506 228 45 07',
    email: 'info@gamzetango.com',
    whatsapp: '905062284507',
  },
  seo: {
    title: 'İstanbul Tango Kursu | Profesyonel Arjantin Tango Dersleri',
    description: 'İstanbul\'da Arjantin Tango dersleri. Özel ders, grup dersi, düğün dansı. Avrupa ve Anadolu yakasında hizmet. Deneyimli eğitmen Gamze Yıldız.',
    keywords: [
      'istanbul tango kursu',
      'istanbul tango dersi',
      'arjantin tango istanbul',
      'tango öğren istanbul',
      'istanbul dans kursu',
      'tango eğitimi istanbul',
      'profesyonel tango dersi',
      'çift tango dersi istanbul',
    ],
    canonicalUrl: 'https://gamzetango.com/istanbul-tango-kursu',
  },
  features: [
    {
      id: 'location-flexible',
      icon: 'MapPin',
      title: 'Esnek Lokasyon',
      description: 'Size en yakın lokasyonda ders imkanı. Avrupa veya Anadolu yakası.',
    },
    {
      id: 'home-lesson',
      icon: 'Home',
      title: 'Evde Özel Ders',
      description: 'Evinizde veya ofisinizde özel ders seçeneği.',
    },
    {
      id: 'couple',
      icon: 'Users',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin. Çiftlere özel indirimler.',
    },
    {
      id: 'milonga',
      icon: 'Music',
      title: 'Milonga Hazırlık',
      description: 'İstanbul\'un en iyi milongalarına hazırlanın.',
    },
    {
      id: 'performance',
      icon: 'Star',
      title: 'Performans Eğitimi',
      description: 'Sahne ve gösteri tango teknikleri.',
    },
    {
      id: 'all-levels',
      icon: 'TrendingUp',
      title: 'Her Seviye',
      description: 'Başlangıçtan ileri seviyeye, kişiye özel program.',
    },
  ],
  testimonials: [
    {
      id: 'istanbul-1',
      name: 'Selin T.',
      location: 'Kadıköy',
      quote: 'Kadıköy\'e gelip ders veriyor olması büyük kolaylık. Harika bir hoca!',
      rating: 5,
    },
    {
      id: 'istanbul-2',
      name: 'Can & Elif',
      location: 'Beşiktaş',
      quote: 'Evimize gelip ders verdi. Çok pratik ve etkili bir deneyimdi.',
      rating: 5,
    },
    {
      id: 'istanbul-3',
      name: 'Burak Y.',
      location: 'Bakırköy',
      quote: '6 ayda sıfırdan milongalara gitmeye başladım. Teşekkürler Gamze Hoca!',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'metro',
      name: 'M1A/M2/M4 Metro Hatları',
      distance: 'Lokasyona göre değişir',
    },
    {
      type: 'ferry',
      name: 'İDO/Şehir Hatları',
      distance: 'Anadolu-Avrupa geçişi',
    },
    {
      type: 'bus',
      name: 'İETT Hatları',
      distance: 'Tüm İstanbul',
    },
  ],
  workingHours: [
    { day: 'Pazartesi', hours: '09:00 - 22:00' },
    { day: 'Salı', hours: '09:00 - 22:00' },
    { day: 'Çarşamba', hours: '09:00 - 22:00' },
    { day: 'Perşembe', hours: '09:00 - 22:00' },
    { day: 'Cuma', hours: '09:00 - 22:00' },
    { day: 'Cumartesi', hours: '10:00 - 20:00' },
    { day: 'Pazar', hours: '10:00 - 18:00' },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327595874!2d28.871754!3d41.005495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1234567890',
  isActive: true,
};

// All locations array for iteration
export const ALL_LOCATIONS: readonly Location[] = [
  SILIVRI_LOCATION,
  ISTANBUL_LOCATION,
] as const;

// Helper to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return ALL_LOCATIONS.find((loc) => loc.slug === slug);
}

// Generate Schema.org LocalBusiness JSON-LD
export function generateLocalBusinessSchema(location: Location): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'DanceSchool',
    name: `Gamze Yıldız Tango - ${location.name}`,
    description: location.description,
    image: `https://gamzetango.com${location.heroImage}`,
    telephone: location.contact.phone,
    email: location.contact.email,
    url: location.seo.canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.street,
      addressLocality: location.address.district,
      addressRegion: location.address.city,
      postalCode: location.address.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    openingHoursSpecification: location.workingHours
      .filter((wh) => !wh.isClosed)
      .map((wh) => {
        const [opens, closes] = wh.hours.includes('-')
          ? wh.hours.split(' - ')
          : ['10:00', '21:00'];
        return {
          '@type': 'OpeningHoursSpecification' as const,
          dayOfWeek: wh.day,
          opens,
          closes,
        };
      }),
    priceRange: '₺₺',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5.0,
      reviewCount: location.testimonials.length,
    },
  };
}
