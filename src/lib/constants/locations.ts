/**
 * Location Constants - Single Source of Truth
 * All location data centralized here for maintainability
 */

import type { Location, LocalBusinessSchema } from '@/types/location';
import { CONTACT } from './site';

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
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'Silivri Tango Dersi ⭐ İlk Ders Bedava | 500+ Mutlu Öğrenci',
    description: 'Silivri\'de profesyonel tango dersleri 💃 15 yıl deneyim | Özel & grup dersleri | Düğün dansı eğitimi. Şubat indirimi %20! Hemen başla.',
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
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'İstanbul Tango Kursu 💃 Her İki Yakada | Deneme Ücretsiz',
    description: 'İstanbul\'da profesyonel Arjantin Tango ⭐ 500+ mezun | Avrupa & Anadolu yakası | Özel/grup dersleri. 15 yıl deneyim. İlk ders bedava!',
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
      id: 'studio',
      icon: 'Building',
      title: 'Profesyonel Stüdyo',
      description: 'Konforlu ve modern dans stüdyosunda eğitim.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Özel Ders',
      description: 'Birebir kişiselleştirilmiş tango eğitimi.',
    },
    {
      id: 'group',
      icon: 'Users',
      title: 'Grup Dersleri',
      description: 'Sosyal ortamda öğrenin, yeni insanlarla tanışın.',
    },
    {
      id: 'couple',
      icon: 'Heart',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin. Çiftlere özel indirimler.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz bir tango performansı.',
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

// Kadıköy Location Data
export const KADIKOY_LOCATION: Location = {
  id: 'kadikoy',
  slug: 'kadikoy-ozel-tango-dersi',
  name: 'Kadıköy Özel Tango Dersi',
  tagline: 'Anadolu Yakası\'nın Tango Merkezi',
  description: 'Kadıköy\'de profesyonel tango eğitimi. Moda, Bağdat Caddesi ve çevresinde stüdyo dersleri.',
  heroImage: '/images/2.jpg',
  coordinates: {
    lat: 40.9927,
    lng: 29.0277,
  },
  address: {
    street: 'Caferağa Mahallesi',
    district: 'Kadıköy',
    city: 'İstanbul',
    fullAddress: 'Kadıköy, İstanbul (Anadolu Yakası)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'Kadıköy Tango Dersi ⭐ Moda & Bağdat Cad | İlk Ders Bedava',
    description: 'Kadıköy\'de profesyonel tango eğitimi 💃 500+ mutlu öğrenci | Moda, Bağdat Caddesi stüdyo | Birebir & grup dersleri. Şubat fırsatı %20!',
    keywords: [
      'kadıköy tango dersi',
      'kadıköy özel tango dersi',
      'anadolu yakası tango',
      'kadıköy tango eğitmeni',
      'moda tango dersi',
      'bağdat caddesi tango',
    ],
    canonicalUrl: 'https://gamzetango.com/kadikoy-ozel-tango-dersi',
  },
  features: [
    {
      id: 'studio',
      icon: 'Building',
      title: 'Profesyonel Stüdyo',
      description: 'Kadıköy\'de modern ve konforlu dans stüdyosunda eğitim.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Özel Ders',
      description: 'Birebir kişiselleştirilmiş tango eğitimi.',
    },
    {
      id: 'group',
      icon: 'Users',
      title: 'Grup Dersleri',
      description: 'Sosyal ortamda öğrenin, yeni insanlarla tanışın.',
    },
    {
      id: 'couple',
      icon: 'Heart',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz tango performansı.',
    },
    {
      id: 'all-levels',
      icon: 'TrendingUp',
      title: 'Her Seviye',
      description: 'Başlangıçtan ileri seviyeye program.',
    },
  ],
  testimonials: [
    {
      id: 'kadikoy-1',
      name: 'Ayşe K.',
      location: 'Moda',
      quote: 'Kadıköy\'de profesyonel bir tango eğitimi bulmak harikaydı!',
      rating: 5,
    },
    {
      id: 'kadikoy-2',
      name: 'Mehmet D.',
      location: 'Bağdat Caddesi',
      quote: 'Gamze Hoca\'nın sabrı ve enerjisi muhteşem.',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'metro',
      name: 'Kadıköy Metro',
      distance: '10 dk',
    },
    {
      type: 'ferry',
      name: 'Kadıköy İskelesi',
      distance: '15 dk',
    },
  ],
  workingHours: [
    { day: 'Pazartesi', hours: '10:00 - 21:00' },
    { day: 'Salı', hours: '10:00 - 21:00' },
    { day: 'Çarşamba', hours: '10:00 - 21:00' },
    { day: 'Perşembe', hours: '10:00 - 21:00' },
    { day: 'Cuma', hours: '10:00 - 21:00' },
    { day: 'Cumartesi', hours: '10:00 - 18:00' },
    { day: 'Pazar', hours: 'Randevu ile' },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.30000!2d29.02!3d40.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86e1200a921%3A0x1b0abb4a8c0b4f59!2zS2FkxLFrw7Z5LCDEsHN0YW5idWw!5e0!3m2!1sen!2str',
  isActive: true,
};

// Beyoğlu Location Data
export const BEYOGLU_LOCATION: Location = {
  id: 'beyoglu',
  slug: 'beyoglu-ozel-tango-dersi',
  name: 'Beyoğlu Özel Tango Dersi',
  tagline: 'Avrupa Yakası\'nın Tango Kalbi',
  description: 'Beyoğlu\'nda profesyonel tango eğitimi. Taksim, Galata, Cihangir bölgelerinde stüdyo dersleri.',
  heroImage: '/images/3.jpg',
  coordinates: {
    lat: 41.0336,
    lng: 28.9769,
  },
  address: {
    street: 'Beyoğlu Merkez',
    district: 'Beyoğlu',
    city: 'İstanbul',
    fullAddress: 'Beyoğlu, İstanbul (Avrupa Yakası)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'Beyoğlu Tango Dersi ⭐ Taksim & Galata | İlk Ders Bedava',
    description: 'Beyoğlu\'nda profesyonel tango 💃 500+ mezun öğrenci | Taksim, Galata stüdyo | Birebir & grup dersleri. 15 yıl deneyim. Şubat indirimi!',
    keywords: [
      'beyoğlu tango dersi',
      'beyoğlu özel tango dersi',
      'taksim tango',
      'galata tango dersi',
      'avrupa yakası tango',
    ],
    canonicalUrl: 'https://gamzetango.com/beyoglu-ozel-tango-dersi',
  },
  features: [
    {
      id: 'studio',
      icon: 'Building',
      title: 'Merkezi Stüdyo',
      description: 'Beyoğlu\'nun kalbinde profesyonel dans stüdyosu.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Özel Ders',
      description: 'Birebir kişiselleştirilmiş tango eğitimi.',
    },
    {
      id: 'group',
      icon: 'Users',
      title: 'Grup Dersleri',
      description: 'Sosyal ortamda öğrenin, yeni insanlarla tanışın.',
    },
    {
      id: 'couple',
      icon: 'Heart',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz tango performansı.',
    },
    {
      id: 'lady-styling',
      icon: 'Sparkles',
      title: 'Lady Styling',
      description: 'Kadın dansçılara özel teknik ve stil çalışmaları.',
    },
  ],
  testimonials: [
    {
      id: 'beyoglu-1',
      name: 'Zeynep A.',
      location: 'Taksim',
      quote: 'Taksim\'de böyle kaliteli bir eğitim bulmak şanstı!',
      rating: 5,
    },
    {
      id: 'beyoglu-2',
      name: 'Emre B.',
      location: 'Galata',
      quote: 'Harika bir atmosferde harika dersler.',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'metro',
      name: 'Taksim Metro',
      distance: '5 dk',
    },
    {
      type: 'metro',
      name: 'İstiklal Tramvay',
      distance: '3 dk',
    },
  ],
  workingHours: [
    { day: 'Pazartesi', hours: '10:00 - 21:00' },
    { day: 'Salı', hours: '10:00 - 21:00' },
    { day: 'Çarşamba', hours: '10:00 - 21:00' },
    { day: 'Perşembe', hours: '10:00 - 21:00' },
    { day: 'Cuma', hours: '10:00 - 21:00' },
    { day: 'Cumartesi', hours: '10:00 - 18:00' },
    { day: 'Pazar', hours: 'Randevu ile' },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48156.30000!2d28.97!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8c3a6f4553a1c4a8!2zQmV5b8SfbHUsIMSwc3RhbmJ1bA!5e0!3m2!1sen!2str',
  isActive: true,
};

// İstanbul Özel Tango Dersi Location Data
export const ISTANBUL_OZEL_LOCATION: Location = {
  id: 'istanbul-ozel',
  slug: 'istanbul-ozel-tango-dersi',
  name: 'İstanbul Özel Tango Dersi',
  tagline: 'İstanbul\'un Her Yerinde Profesyonel Tango Eğitimi',
  description: 'İstanbul genelinde profesyonel özel tango dersleri. Avrupa ve Anadolu yakasında stüdyo eğitimi.',
  heroImage: '/images/1.jpg',
  coordinates: {
    lat: 41.0082,
    lng: 28.9784,
  },
  address: {
    street: 'Çeşitli Stüdyolar',
    district: 'İstanbul Geneli',
    city: 'İstanbul',
    fullAddress: 'İstanbul (Avrupa & Anadolu Yakası)',
  },
  contact: {
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'İstanbul Özel Tango Dersi ⭐ Birebir Eğitim | Deneme Ücretsiz',
    description: 'İstanbul\'da özel tango dersleri 💃 Her iki yakada hizmet | 500+ mezun | Birebir, çift, grup dersleri. 15 yıl deneyim. İlk ders bedava!',
    keywords: [
      'istanbul özel tango dersi',
      'özel tango dersi istanbul',
      'istanbul tango eğitimi',
      'profesyonel tango dersi',
      'birebir tango dersi',
    ],
    canonicalUrl: 'https://gamzetango.com/istanbul-ozel-tango-dersi',
  },
  features: [
    {
      id: 'studio',
      icon: 'Building',
      title: 'Profesyonel Stüdyo',
      description: 'Modern ve konforlu dans stüdyolarında eğitim.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Özel Ders',
      description: 'Birebir kişiselleştirilmiş tango eğitimi.',
    },
    {
      id: 'group',
      icon: 'Users',
      title: 'Grup Dersleri',
      description: 'Sosyal ortamda öğrenin, yeni insanlarla tanışın.',
    },
    {
      id: 'couple',
      icon: 'Heart',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin. Çiftlere özel indirimler.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz bir tango performansı.',
    },
    {
      id: 'lady-styling',
      icon: 'Sparkles',
      title: 'Lady Styling',
      description: 'Kadın dansçılara özel teknik ve stil çalışmaları.',
    },
  ],
  testimonials: [
    {
      id: 'istanbul-ozel-1',
      name: 'Selin T.',
      location: 'Kadıköy',
      quote: 'İstanbul\'un en iyi tango eğitmeni!',
      rating: 5,
    },
    {
      id: 'istanbul-ozel-2',
      name: 'Can & Elif',
      location: 'Beşiktaş',
      quote: 'Düğün dansımız için harika bir hazırlık yaptık.',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'metro',
      name: 'Metro Hatları',
      distance: 'Lokasyona göre değişir',
    },
    {
      type: 'ferry',
      name: 'Vapur Seferleri',
      distance: 'Anadolu-Avrupa geçişi',
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
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327595874!2d28.871754!3d41.005495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str',
  isActive: true,
};

// Silivri Özel Tango Dersi Location Data
export const SILIVRI_OZEL_LOCATION: Location = {
  id: 'silivri-ozel',
  slug: 'silivri-ozel-tango-dersi',
  name: 'Silivri Özel Tango Dersi',
  tagline: 'Silivri\'nin İlk ve Tek Profesyonel Tango Okulu',
  description: 'Silivri\'de profesyonel özel tango eğitimi. Modern stüdyoda birebir, çift ve grup dersleri.',
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
    phone: CONTACT.PHONE_DISPLAY,
    email: CONTACT.EMAIL,
    whatsapp: CONTACT.PHONE.replace('+', ''),
  },
  seo: {
    title: 'Silivri Özel Tango Dersi ⭐ Modern Stüdyo | İlk Ders Bedava',
    description: 'Silivri\'de özel tango dersleri 💃 Birebir, çift & grup eğitimi | Düğün dansı uzmanı | 15 yıl deneyim. Şubat fırsatı %20 indirim!',
    keywords: [
      'silivri tango dersi',
      'silivri özel tango dersi',
      'silivri tango kursu',
      'silivri düğün dansı',
      'silivri dans eğitimi',
    ],
    canonicalUrl: 'https://gamzetango.com/silivri-ozel-tango-dersi',
  },
  features: [
    {
      id: 'studio',
      icon: 'Building',
      title: 'Modern Stüdyo',
      description: 'Silivri\'nin tek profesyonel dans stüdyosunda eğitim.',
    },
    {
      id: 'private',
      icon: 'User',
      title: 'Özel Ders',
      description: 'Birebir kişiselleştirilmiş tango eğitimi.',
    },
    {
      id: 'group',
      icon: 'Users',
      title: 'Grup Dersleri',
      description: 'Sosyal ortamda öğrenin, yeni insanlarla tanışın.',
    },
    {
      id: 'couple',
      icon: 'Heart',
      title: 'Çift Dersleri',
      description: 'Partnerinizle birlikte öğrenin.',
    },
    {
      id: 'wedding',
      icon: 'Music',
      title: 'Düğün Dansı',
      description: 'Özel gününüz için unutulmaz tango performansı.',
    },
    {
      id: 'beginner',
      icon: 'Sparkles',
      title: 'Başlangıç Dostu',
      description: 'Hiç dans etmemiş olsanız bile başlayabilirsiniz.',
    },
  ],
  testimonials: [
    {
      id: 'silivri-ozel-1',
      name: 'Ayşe K.',
      location: 'Silivri',
      quote: 'Düğünümüz için 3 ay Gamze Hoca ile çalıştık. Herkes dansımıza hayran kaldı!',
      rating: 5,
    },
    {
      id: 'silivri-ozel-2',
      name: 'Mehmet D.',
      location: 'Silivri Merkez',
      quote: '50 yaşında tango öğrenmeye başladım. Gamze Hoca\'nın sabrı inanılmaz.',
      rating: 5,
    },
  ],
  accessInfo: [
    {
      type: 'bus',
      name: 'Silivri Merkez Durağı',
      distance: '500m',
    },
    {
      type: 'car',
      name: 'TEM Otoyolu Silivri Çıkışı',
      distance: '5 km',
    },
  ],
  workingHours: [
    { day: 'Pazartesi', hours: '10:00 - 21:00' },
    { day: 'Salı', hours: '10:00 - 21:00' },
    { day: 'Çarşamba', hours: '10:00 - 21:00' },
    { day: 'Perşembe', hours: '10:00 - 21:00' },
    { day: 'Cuma', hours: '10:00 - 21:00' },
    { day: 'Cumartesi', hours: '10:00 - 18:00' },
    { day: 'Pazar', hours: 'Randevu ile' },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48256.65095696569!2d28.20!3d41.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b51cb21e9f7f2d%3A0x9d2d7d09c0e7fb8d!2sSilivri%2C%20Istanbul!5e0!3m2!1sen!2str',
  isActive: true,
};

// All locations array for iteration
export const ALL_LOCATIONS: readonly Location[] = [
  SILIVRI_LOCATION,
  ISTANBUL_LOCATION,
  KADIKOY_LOCATION,
  BEYOGLU_LOCATION,
  ISTANBUL_OZEL_LOCATION,
  SILIVRI_OZEL_LOCATION,
] as const;

// Helper to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return ALL_LOCATIONS.find((loc) => loc.slug === slug);
}

// Generate Schema.org LocalBusiness JSON-LD
// Using LocalBusiness instead of DanceSchool for broader Google support
export function generateLocalBusinessSchema(location: Location): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
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
  };
}
