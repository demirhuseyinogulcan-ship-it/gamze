/**
 * Testimonials Data - Single Source of Truth
 * All student testimonials centralized here
 */

import type { Testimonial, ReviewSchema } from '@/types/testimonial';

// Turkish Testimonials
export const TESTIMONIALS_TR: readonly Testimonial[] = [
  {
    id: 'wedding-1',
    name: 'Ayşe & Mehmet',
    role: 'Yeni Evli Çift',
    location: 'Silivri',
    quote: 'Düğünümüzde tüm misafirleri büyüledik! Gamze Hoca ile 3 ayda hayal bile edemeyeceğimiz bir dans performansı sergiledik.',
    fullStory: 'Düğün dansı için başladığımız tango yolculuğu, hayatımızı değiştirdi. Gamze Hoca\'nın sabrı ve pozitif enerjisi sayesinde, hiç dans etmemiş iki kişi olarak 3 ay içinde unutulmaz bir performans sergiledik. Şimdi her hafta milongalara gidiyoruz!',
    rating: 5,
    category: 'wedding',
    beforeAfter: {
      before: 'Hiç dans etmemiş çift',
      after: 'Düğün dansı yıldızları',
    },
    date: '2024-09',
  },
  {
    id: 'beginner-1',
    name: 'Burak Y.',
    role: 'Yazılım Mühendisi',
    location: 'Kadıköy',
    quote: '50 yaşında tango öğrenmeye başladım. "Çok geç" diye düşünüyordum ama Gamze Hoca beni yanıltığımı gösterdi.',
    fullStory: 'Emekliliğe yaklaşırken yeni bir hobi arıyordum. Tango\'yu hep hayranlıkla izlemiştim ama "benim için çok geç" diye düşünüyordum. Gamze Hoca\'nın sabırlı ve sistematik yaklaşımı sayesinde 6 ayda milongalara katılmaya başladım. Şimdi haftada 3 gün dans ediyorum!',
    rating: 5,
    category: 'beginner',
    beforeAfter: {
      before: 'Hiç dans deneyimi yok',
      after: 'Milonga katılımcısı',
    },
    date: '2024-06',
  },
  {
    id: 'couple-1',
    name: 'Zeynep & Ahmet',
    role: 'Çift',
    location: 'Gümüşyaka',
    quote: 'Evliliğimize yeni bir soluk getirdik. Tango sadece dans değil, iletişim ve güven egzersizi oldu bizim için.',
    fullStory: '15 yıllık evliliğimizde rutine girmiştik. Bir arkadaş önerisiyle tango derslerine başladık. Gamze Hoca\'nın rehberliğinde hem birbirimizi yeniden keşfettik hem de ortak bir tutku bulduk. Şimdi hafta sonları milongalar bizim "randevu gecelerimiz".',
    rating: 5,
    category: 'couple',
    date: '2024-04',
  },
  {
    id: 'performance-1',
    name: 'Selin T.',
    role: 'Dans Eğitmeni',
    location: 'Beşiktaş',
    quote: 'Profesyonel bir dansçı olarak Gamze\'nin teknik bilgisi ve sahne deneyimi beni çok etkiledi.',
    fullStory: 'Diğer dans türlerinde deneyimliydim ama tangoya geçiş zordu. Gamze Hoca\'nın arjantin tango tekniklerindeki uzmanlığı ve sahne performansı konusundaki tecrübesi sayesinde kısa sürede gösteri tango\'ya geçiş yapabildim.',
    rating: 5,
    category: 'performance',
    date: '2024-08',
  },
  {
    id: 'beginner-2',
    name: 'Elif K.',
    role: 'Doktor',
    location: 'Silivri',
    quote: 'Yoğun iş temposunun ardından tango benim meditasyonum oldu. Stres atmanın en zarif yolu!',
    fullStory: 'Hastanedeki yoğun mesaiden sonra bir kaçış arıyordum. Tango hem fiziksel aktivite hem de zihinsel rahatlama sağladı. Gamze Hoca\'nın esnek ders programı sayesinde vardiya mesaisine rağmen düzenli devam edebildim.',
    rating: 5,
    category: 'beginner',
    date: '2024-07',
  },
  {
    id: 'wedding-2',
    name: 'Deniz & Ceren',
    role: 'Nişanlı Çift',
    location: 'Bakırköy',
    quote: 'Düğün dansımız için mükemmel bir koreografi hazırladık. Tüm davetliler hayran kaldı!',
    fullStory: 'Klasik bir düğün dansı yerine farklı bir şey istiyorduk. Gamze Hoca bizim tarzımıza uygun, romantik ama gösterişli bir tango koreografisi hazırladı. Düğün videomuzun en çok beğenilen kısmı dansımız oldu!',
    rating: 5,
    category: 'wedding',
    beforeAfter: {
      before: 'Sadece salsa biliyorduk',
      after: 'Tango performansı',
    },
    date: '2024-10',
  },
] as const;

// English Testimonials
export const TESTIMONIALS_EN: readonly Testimonial[] = [
  {
    id: 'wedding-1',
    name: 'Ayşe & Mehmet',
    role: 'Newlyweds',
    location: 'Silivri',
    quote: 'We mesmerized all our wedding guests! With Teacher Gamze, we performed a dance in 3 months that we couldn\'t even dream of.',
    fullStory: 'Our tango journey that started for our wedding dance changed our lives. Thanks to Teacher Gamze\'s patience and positive energy, as two people who had never danced, we gave an unforgettable performance in 3 months. Now we go to milongas every week!',
    rating: 5,
    category: 'wedding',
    beforeAfter: {
      before: 'Never danced before',
      after: 'Wedding dance stars',
    },
    date: '2024-09',
  },
  {
    id: 'beginner-1',
    name: 'Burak Y.',
    role: 'Software Engineer',
    location: 'Kadıköy',
    quote: 'I started learning tango at 50. I thought it was "too late" but Teacher Gamze proved me wrong.',
    fullStory: 'Approaching retirement, I was looking for a new hobby. I always admired tango but thought "it\'s too late for me". Thanks to Teacher Gamze\'s patient and systematic approach, I started attending milongas in 6 months. Now I dance 3 days a week!',
    rating: 5,
    category: 'beginner',
    beforeAfter: {
      before: 'No dance experience',
      after: 'Milonga participant',
    },
    date: '2024-06',
  },
  {
    id: 'couple-1',
    name: 'Zeynep & Ahmet',
    role: 'Couple',
    location: 'Gümüşyaka',
    quote: 'We brought a new breath to our marriage. Tango became not just a dance, but a communication and trust exercise for us.',
    fullStory: 'After 15 years of marriage, we had fallen into a routine. At a friend\'s suggestion, we started tango lessons. Under Teacher Gamze\'s guidance, we both rediscovered each other and found a common passion. Now weekend milongas are our "date nights".',
    rating: 5,
    category: 'couple',
    date: '2024-04',
  },
  {
    id: 'performance-1',
    name: 'Selin T.',
    role: 'Dance Instructor',
    location: 'Beşiktaş',
    quote: 'As a professional dancer, Gamze\'s technical knowledge and stage experience really impressed me.',
    fullStory: 'I was experienced in other dance styles but the transition to tango was difficult. Thanks to Teacher Gamze\'s expertise in Argentine tango techniques and stage performance experience, I was able to transition to show tango in a short time.',
    rating: 5,
    category: 'performance',
    date: '2024-08',
  },
  {
    id: 'beginner-2',
    name: 'Elif K.',
    role: 'Doctor',
    location: 'Silivri',
    quote: 'After the intense work tempo, tango became my meditation. The most elegant way to relieve stress!',
    fullStory: 'After busy hospital shifts, I was looking for an escape. Tango provided both physical activity and mental relaxation. Thanks to Teacher Gamze\'s flexible lesson schedule, I was able to attend regularly despite shift work.',
    rating: 5,
    category: 'beginner',
    date: '2024-07',
  },
  {
    id: 'wedding-2',
    name: 'Deniz & Ceren',
    role: 'Engaged Couple',
    location: 'Bakırköy',
    quote: 'We prepared a perfect choreography for our wedding dance. All guests were amazed!',
    fullStory: 'We wanted something different instead of a classic wedding dance. Teacher Gamze prepared a romantic but showy tango choreography that suited our style. The most liked part of our wedding video was our dance!',
    rating: 5,
    category: 'wedding',
    beforeAfter: {
      before: 'Only knew salsa',
      after: 'Tango performance',
    },
    date: '2024-10',
  },
] as const;

// Get testimonials by locale
export function getTestimonials(locale: 'tr' | 'en'): readonly Testimonial[] {
  return locale === 'tr' ? TESTIMONIALS_TR : TESTIMONIALS_EN;
}

// Get testimonials by category
export function getTestimonialsByCategory(
  locale: 'tr' | 'en',
  category: Testimonial['category'] | 'all'
): readonly Testimonial[] {
  const testimonials = getTestimonials(locale);
  if (category === 'all') return testimonials;
  return testimonials.filter((t) => t.category === category);
}

// Generate Schema.org Review JSON-LD
export function generateReviewSchema(testimonial: Testimonial): ReviewSchema {
  return {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
    datePublished: testimonial.date,
  };
}

// Category labels for filters
export const CATEGORY_LABELS = {
  tr: {
    all: 'Tümü',
    beginner: 'Başlangıç',
    wedding: 'Düğün Dansı',
    performance: 'Performans',
    couple: 'Çift',
    general: 'Genel',
  },
  en: {
    all: 'All',
    beginner: 'Beginners',
    wedding: 'Wedding Dance',
    performance: 'Performance',
    couple: 'Couples',
    general: 'General',
  },
} as const;
