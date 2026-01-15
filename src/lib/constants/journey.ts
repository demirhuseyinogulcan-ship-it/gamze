// ─────────────────────────────────────────────────────────────────────────────
// First Lesson Journey Content
// Step-by-step walkthrough of a first tango lesson experience
// ─────────────────────────────────────────────────────────────────────────────

import type { JourneyLocaleContent, JourneyStep } from '@/types/journey';

// ─────────────────────────────────────────────────────────────────────────────
// Turkish Content
// ─────────────────────────────────────────────────────────────────────────────

const STEPS_TR: JourneyStep[] = [
  {
    id: 'welcome',
    step: 1,
    title: 'Hoş Geldin Sohbeti',
    subtitle: 'Tanışma & Hedef Belirleme',
    description:
      'Dersiniz rahat bir sohbetle başlar. Dans geçmişinizi, beklentilerinizi ve hedeflerinizi öğrenirim. Hiçbir dans deneyimi gerekmiyor – birçok öğrencim sıfırdan başladı.',
    duration: '5-10 dakika',
    tip: 'Rahat kıyafetler giyin. Topuklu ayakkabı şart değil, düz tabanlı ayakkabılar da olur.',
    icon: 'MessageCircle',
  },
  {
    id: 'posture',
    step: 2,
    title: 'Vücut Duruşu',
    subtitle: 'Tango\'nun Temeli',
    description:
      'Tangonun temeli güçlü bir duruştur. Omuzlarınızı rahatlatıp, göğsünüzü açarak doğal bir dik duruş geliştirirsiniz. Bu sadece dans için değil, günlük hayatınız için de faydalı.',
    duration: '10 dakika',
    tip: 'Derin nefes alın ve omuzlarınızı gevşetin. Gerginlik en büyük düşmanımız.',
    icon: 'User',
  },
  {
    id: 'connection',
    step: 3,
    title: 'Partner Bağlantısı',
    subtitle: 'Kelimesiz İletişim',
    description:
      'Tango, partnerlerin beden diliyle iletişim kurduğu bir danstır. Hafif bir dokunuşla bile niyeti iletmeyi ve hissetmeyi öğrenirsiniz. Bu, dans dışında da ilişkilerinizi zenginleştirir.',
    duration: '10-15 dakika',
    tip: 'Gözlerinizi kapatıp partnerinizin hareketlerini hissetmeye çalışın.',
    icon: 'Heart',
  },
  {
    id: 'walking',
    step: 4,
    title: 'Tango Yürüyüşü',
    subtitle: 'Adım Adım Zarafet',
    description:
      'Tango yürüyüşü sıradan yürüyüşten farklıdır. Ayak tabanınızı yere sürerek, kedi gibi yumuşak adımlarla hareket edersiniz. Her adım bilinçli ve kasıtlıdır.',
    duration: '15-20 dakika',
    tip: 'Acele etmeyin. Yavaş adımlar daha zarif ve kontrollüdür.',
    icon: 'Footprints',
  },
  {
    id: 'music',
    step: 5,
    title: 'Müzikle Hareket',
    subtitle: 'Ritmi Hissetmek',
    description:
      'Klasik tango müziğini dinleyerek ritmi hissetmeyi öğrenirsiniz. Müzik sadece arka plan değil, dans partnerinizdir. Her nota bir hareket fırsatıdır.',
    duration: '10-15 dakika',
    tip: 'Müziğin duygusunu dinleyin – bazen hızlı, bazen romantik, bazen dramatik.',
    icon: 'Music',
  },
  {
    id: 'embrace',
    step: 6,
    title: 'Abrazo (Sarılma)',
    subtitle: 'İlk Dansınız',
    description:
      'Son olarak, öğrendiklerinizi birleştirerek partnerinizle ilk dansınızı yaparsınız. Mükemmel olmak zorunda değil – keyif almak önemli. Bu, tango yolculuğunuzun sadece başlangıcı.',
    duration: '15-20 dakika',
    tip: 'Gülümseyin ve eğlenin. Hata yapmak öğrenmenin bir parçası.',
    icon: 'Users',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// English Content
// ─────────────────────────────────────────────────────────────────────────────

const STEPS_EN: JourneyStep[] = [
  {
    id: 'welcome',
    step: 1,
    title: 'Welcome Chat',
    subtitle: 'Introduction & Goal Setting',
    description:
      'Your lesson begins with a relaxed conversation. I learn about your dance background, expectations, and goals. No dance experience required – many of my students start from zero.',
    duration: '5-10 minutes',
    tip: 'Wear comfortable clothes. High heels aren\'t necessary, flat shoes work too.',
    icon: 'MessageCircle',
  },
  {
    id: 'posture',
    step: 2,
    title: 'Body Posture',
    subtitle: 'The Foundation of Tango',
    description:
      'The foundation of tango is a strong posture. You\'ll develop a natural upright stance by relaxing your shoulders and opening your chest. This benefits not just dance but your daily life too.',
    duration: '10 minutes',
    tip: 'Take deep breaths and relax your shoulders. Tension is our biggest enemy.',
    icon: 'User',
  },
  {
    id: 'connection',
    step: 3,
    title: 'Partner Connection',
    subtitle: 'Communication Without Words',
    description:
      'Tango is a dance where partners communicate through body language. You\'ll learn to convey and feel intention through even a light touch. This enriches relationships beyond dance too.',
    duration: '10-15 minutes',
    tip: 'Close your eyes and try to feel your partner\'s movements.',
    icon: 'Heart',
  },
  {
    id: 'walking',
    step: 4,
    title: 'Tango Walk',
    subtitle: 'Step by Step Elegance',
    description:
      'The tango walk differs from ordinary walking. You move by sliding your foot along the floor, with soft cat-like steps. Each step is conscious and intentional.',
    duration: '15-20 minutes',
    tip: 'Don\'t rush. Slower steps are more elegant and controlled.',
    icon: 'Footprints',
  },
  {
    id: 'music',
    step: 5,
    title: 'Moving with Music',
    subtitle: 'Feeling the Rhythm',
    description:
      'You\'ll learn to feel the rhythm by listening to classic tango music. Music isn\'t just background – it\'s your dance partner. Every note is an opportunity for movement.',
    duration: '10-15 minutes',
    tip: 'Listen to the emotion in the music – sometimes fast, sometimes romantic, sometimes dramatic.',
    icon: 'Music',
  },
  {
    id: 'embrace',
    step: 6,
    title: 'Abrazo (The Embrace)',
    subtitle: 'Your First Dance',
    description:
      'Finally, you\'ll combine everything you\'ve learned for your first dance with your partner. It doesn\'t have to be perfect – enjoying it is what matters. This is just the beginning of your tango journey.',
    duration: '15-20 minutes',
    tip: 'Smile and have fun. Making mistakes is part of learning.',
    icon: 'Users',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Combined Content Export
// ─────────────────────────────────────────────────────────────────────────────

export const JOURNEY_CONTENT: JourneyLocaleContent = {
  tr: {
    sectionTitle: 'İlk Dersiniz Nasıl Geçer?',
    sectionSubtitle: 'Tango Yolculuğunuz',
    totalDuration: 'Toplam: 60-90 dakika',
    ctaText: 'Ücretsiz Deneme Dersi',
    ctaSecondary: 'Sorularınız mı var?',
    steps: STEPS_TR,
  },
  en: {
    sectionTitle: 'What to Expect in Your First Lesson?',
    sectionSubtitle: 'Your Tango Journey',
    totalDuration: 'Total: 60-90 minutes',
    ctaText: 'Free Trial Lesson',
    ctaSecondary: 'Have questions?',
    steps: STEPS_EN,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────────────────────────────────────────────

export function getJourneyContent(locale: 'tr' | 'en') {
  return JOURNEY_CONTENT[locale];
}
