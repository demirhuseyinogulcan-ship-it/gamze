/**
 * Blog Configuration & Constants
 * Kategori, etiket ve yazar bilgileri
 */

import { CategoryInfo, BlogTag, BlogAuthor } from '@/types/blog';

// Kategoriler
export const BLOG_CATEGORIES: CategoryInfo[] = [
  {
    slug: 'tango-basics',
    name: {
      tr: 'Tango Nedir?',
      en: 'What is Tango?',
    },
    description: {
      tr: 'Arjantin tangosunun temelleri, tarihi ve felsefesi',
      en: 'Fundamentals, history and philosophy of Argentine Tango',
    },
    icon: '',
    color: '#d4af37', // gold
  },
  {
    slug: 'learning',
    name: {
      tr: 'Tango Öğrenmek',
      en: 'Learning Tango',
    },
    description: {
      tr: 'Tango öğrenme süreci, ipuçları ve başlangıç rehberi',
      en: 'Tango learning process, tips and beginner guide',
    },
    icon: '',
    color: '#8b1a1a', // crimson
  },
  {
    slug: 'wedding-dance',
    name: {
      tr: 'Düğün Dansı',
      en: 'Wedding Dance',
    },
    description: {
      tr: 'Düğün dansı tango hazırlığı ve performans ipuçları',
      en: 'Wedding dance tango preparation and performance tips',
    },
    icon: '',
    color: '#e6c65c', // gold-light
  },
  {
    slug: 'lady-styling',
    name: {
      tr: 'Lady Styling',
      en: 'Lady Styling',
    },
    description: {
      tr: 'Kadınlar için tango stilizasyonu ve zarafet',
      en: 'Tango styling and elegance for women',
    },
    icon: '',
    color: '#d4af37',
  },
  {
    slug: 'technique',
    name: {
      tr: 'Teknik',
      en: 'Technique',
    },
    description: {
      tr: 'Tango teknikleri, adımlar ve figürler',
      en: 'Tango techniques, steps and figures',
    },
    icon: '',
    color: '#b8972e', // gold-dark
  },
  {
    slug: 'culture',
    name: {
      tr: 'Tango Kültürü',
      en: 'Tango Culture',
    },
    description: {
      tr: 'Milonga, tango müziği ve kültürel etkinlikler',
      en: 'Milonga, tango music and cultural events',
    },
    icon: '',
    color: '#6b1515', // crimson-muted
  },
  {
    slug: 'events',
    name: {
      tr: 'Etkinlikler',
      en: 'Events',
    },
    description: {
      tr: 'Tango etkinlikleri, festivaller ve milongalar',
      en: 'Tango events, festivals and milongas',
    },
    icon: '',
    color: '#a52a2a', // crimson-light
  },
  {
    slug: 'tips',
    name: {
      tr: 'İpuçları',
      en: 'Tips',
    },
    description: {
      tr: 'Tango ile ilgili pratik ipuçları ve öneriler',
      en: 'Practical tips and recommendations about tango',
    },
    icon: '',
    color: '#d4af37',
  },
];

// Etiketler - Tango terimleri dahil
export const BLOG_TAGS: BlogTag[] = [
  // Tango Terimleri
  {
    slug: 'abrazo',
    name: { tr: 'Abrazo', en: 'Abrazo' },
    description: {
      tr: 'Tango kucaklaması - partnerlerin birbirine tutunma şekli',
      en: 'Tango embrace - how partners hold each other',
    },
  },
  {
    slug: 'caminata',
    name: { tr: 'Caminata', en: 'Caminata' },
    description: {
      tr: 'Tango yürüyüşü - tangonun temel hareketi',
      en: 'Tango walk - the fundamental movement of tango',
    },
  },
  {
    slug: 'milonga',
    name: { tr: 'Milonga', en: 'Milonga' },
    description: {
      tr: 'Tango partisi veya müzik türü',
      en: 'Tango party or music genre',
    },
  },
  {
    slug: 'ocho',
    name: { tr: 'Ocho', en: 'Ocho' },
    description: {
      tr: 'Sekiz figürü - tangonun temel figürlerinden',
      en: 'Figure eight - one of the basic tango figures',
    },
  },
  {
    slug: 'giro',
    name: { tr: 'Giro', en: 'Giro' },
    description: {
      tr: 'Dönüş hareketi',
      en: 'Turning movement',
    },
  },
  {
    slug: 'sacada',
    name: { tr: 'Sacada', en: 'Sacada' },
    description: {
      tr: 'Yer değiştirme hareketi',
      en: 'Displacement movement',
    },
  },
  {
    slug: 'gancho',
    name: { tr: 'Gancho', en: 'Gancho' },
    description: {
      tr: 'Kanca hareketi - bacak kancalama',
      en: 'Hook movement - leg hooking',
    },
  },
  {
    slug: 'boleos',
    name: { tr: 'Boleos', en: 'Boleos' },
    description: {
      tr: 'Bacak savurma hareketi',
      en: 'Leg flicking movement',
    },
  },
  {
    slug: 'parada',
    name: { tr: 'Parada', en: 'Parada' },
    description: {
      tr: 'Durdurma hareketi',
      en: 'Stop movement',
    },
  },
  {
    slug: 'tanda',
    name: { tr: 'Tanda', en: 'Tanda' },
    description: {
      tr: '3-4 şarkılık dans seti',
      en: 'A set of 3-4 songs for dancing',
    },
  },
  {
    slug: 'cabeceo',
    name: { tr: 'Cabeceo', en: 'Cabeceo' },
    description: {
      tr: 'Göz teması ile dans daveti',
      en: 'Dance invitation through eye contact',
    },
  },
  // Genel Etiketler
  {
    slug: 'baslangic',
    name: { tr: 'Başlangıç', en: 'Beginner' },
  },
  {
    slug: 'orta-seviye',
    name: { tr: 'Orta Seviye', en: 'Intermediate' },
  },
  {
    slug: 'ileri-seviye',
    name: { tr: 'İleri Seviye', en: 'Advanced' },
  },
  {
    slug: 'teknik',
    name: { tr: 'Teknik', en: 'Technique' },
  },
  {
    slug: 'muzik',
    name: { tr: 'Müzik', en: 'Music' },
  },
  {
    slug: 'tarih',
    name: { tr: 'Tarih', en: 'History' },
  },
  {
    slug: 'kiyafet',
    name: { tr: 'Kıyafet', en: 'Clothing' },
  },
  {
    slug: 'ayakkabi',
    name: { tr: 'Ayakkabı', en: 'Shoes' },
  },
  {
    slug: 'istanbul',
    name: { tr: 'İstanbul', en: 'Istanbul' },
  },
  {
    slug: 'silivri',
    name: { tr: 'Silivri', en: 'Silivri' },
  },
];

// Yazarlar
export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    name: 'Gamze Yıldız',
    slug: 'gamze-yildiz',
    bio: {
      tr: 'Profesyonel tango eğitmeni. 10+ yıllık deneyim ile İstanbul ve Silivri\'de tango öğretiyor.',
      en: 'Professional tango instructor. Teaching tango in Istanbul and Silivri with 10+ years of experience.',
    },
    image: '/images/optimized/hakkimda.webp',
    social: {
      instagram: 'https://www.instagram.com/gamze.tango/',
      website: 'https://gamzetango.com',
    },
  },
];

// Blog ayarları
export const BLOG_CONFIG = {
  postsPerPage: 9,
  featuredPostsCount: 3,
  relatedPostsCount: 3,
  excerptLength: 160,
  contentPath: 'content/blog',
};

// Pillar yazıları - Ana konular
export const PILLAR_TOPICS = [
  {
    slug: 'tango-rehberi',
    title: {
      tr: 'Tango Rehberi: A\'dan Z\'ye Her Şey',
      en: 'Tango Guide: Everything from A to Z',
    },
    description: {
      tr: 'Arjantin tangosunu baştan sona öğrenmek için kapsamlı rehber',
      en: 'Comprehensive guide to learn Argentine tango from start to finish',
    },
    category: 'tango-basics' as const,
    clusters: ['tango-nedir', 'tango-nasil-ogrenilir', 'tango-terimleri', 'ilk-tango-dersi'],
  },
  {
    slug: 'dugun-dansi-rehberi',
    title: {
      tr: 'Düğün Dansı Tango: Eksiksiz Hazırlık Rehberi',
      en: 'Wedding Dance Tango: Complete Preparation Guide',
    },
    description: {
      tr: 'Düğününüz için mükemmel tango performansı hazırlayın',
      en: 'Prepare the perfect tango performance for your wedding',
    },
    category: 'wedding-dance' as const,
    clusters: ['dugun-dansi-hazirligi', 'dugun-dansi-muzik-secimi', 'dugun-dansi-kiyafet'],
  },
  {
    slug: 'lady-styling-rehberi',
    title: {
      tr: 'Lady Styling: Tangoda Kadın Zarafeti',
      en: 'Lady Styling: Feminine Elegance in Tango',
    },
    description: {
      tr: 'Tangoda kadın stilizasyonu ve zarafet teknikleri',
      en: 'Women\'s styling and elegance techniques in tango',
    },
    category: 'lady-styling' as const,
    clusters: ['lady-styling-temelleri', 'adornos-teknikleri', 'tango-ayakkabisi'],
  },
];

// Kategori helper fonksiyonları
export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return BLOG_CATEGORIES.find(cat => cat.slug === slug);
}

export function getTagInfo(slug: string): BlogTag | undefined {
  return BLOG_TAGS.find(tag => tag.slug === slug);
}

export function getAuthorInfo(slug: string): BlogAuthor | undefined {
  return BLOG_AUTHORS.find(author => author.slug === slug);
}
