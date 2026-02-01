/**
 * Services Constants - Single Source of Truth
 * All service/hizmet data centralized here for DRY principle
 * 
 * Özellikle Lady Styling kapsamlı ve vurucu hazırlandı.
 */

import type {
    Service,
    ServiceSchema,
    FAQPageSchema,
} from '@/types/service';
import { CONTACT } from './site';

// =============================================================================
// LADY STYLING SERVICE - KAPSAMLI VE VURUCU
// =============================================================================

export const LADY_STYLING_SERVICE: Service = {
    id: 'lady-styling',
    slug: 'lady-styling',
    name: 'Lady Styling',
    tagline: 'Tangoda Kadın Zarafeti ve Kişisel Stil',
    description: 'Tangoda sadece adımları öğrenmek yetmez. Bir kadın olarak duruşunuz, zarafetiniz ve kişisel stiliniz sizi özel kılar. Lady Styling ile içinizdeki zarif dansçıyı keşfedin.',
    heroImage: '/images/2.jpg',

    seo: {
        title: 'Lady Styling | Bayanlara Özel Tango Dersleri | Gamze Yıldız',
        description: 'Tangoda kadın zarafeti, duruş teknikleri ve kişisel stil geliştirme. Bayanlara özel solo tango eğitimi. İstanbul\'da profesyonel Lady Styling dersleri.',
        keywords: [
            // Ana anahtar kelimeler
            'lady styling',
            'lady styling istanbul',
            'bayanlara özel tango',
            'kadınlar için tango',
            'kadın tango dersi',
            'solo kadın tango',

            // Duruş ve stil
            'tango duruş eğitimi',
            'tangoda zarafet',
            'tangoda kadın stili',
            'tango kadın teknikleri',

            // Adornos
            'adornos eğitimi',
            'tango adornos',
            'ayak süslemeleri tango',

            // Genel
            'tango solo dersi',
            'kadın dans eğitimi',
            'zarafet dersi',
            'duruş dersi',
        ],
        canonicalUrl: 'https://gamzetango.com/lady-styling',
    },

    features: [
        {
            id: 'posture',
            icon: 'Sparkles',
            title: 'Mükemmel Duruş',
            description: 'Omurga dizilimi, omuz pozisyonu ve baş açısı ile zarif bir duruş geliştirin.',
        },
        {
            id: 'adornos',
            icon: 'Footprints',
            title: 'Adornos Teknikleri',
            description: 'Ayak süslemeleri, rondeler ve boleos ile dansınıza kişisel dokunuşlar ekleyin.',
        },
        {
            id: 'musicality',
            icon: 'Music',
            title: 'Müzikal İfade',
            description: 'Müzikteki nüansları hissedin ve bedeninizle ifade edin.',
        },
        {
            id: 'arms',
            icon: 'Hand',
            title: 'Kol Estetiği',
            description: 'Kollarınızı zarafetinizin uzantısı haline getirin.',
        },
        {
            id: 'confidence',
            icon: 'Heart',
            title: 'Özgüven Geliştirme',
            description: 'Dans ederken kendinizi güçlü ve zarif hissedin.',
        },
        {
            id: 'solo',
            icon: 'User',
            title: 'Solo Çalışma',
            description: 'Partnersiz pratik yaparak tekniklerinizi mükemmelleştirin.',
        },
    ],

    benefits: [
        {
            id: 'elegance',
            title: 'Günlük Hayatta Zarafet',
            description: 'Lady Styling sadece dans pistinde kalmaz. Öğrendiğiniz duruş ve hareket kalitesi, günlük hayatınıza da yansır. Yürüyüşünüz, oturuşunuz ve kendinizi taşıma şekliniz değişir.',
            highlight: 'Herkes farkı görür',
        },
        {
            id: 'independence',
            title: 'Partner Bağımsızlığı',
            description: 'Solo çalışma becerileri kazanarak, milongalarda partner beklemeden de pratik yapabilirsiniz. Kendi başınıza dans etmek özgürlük verir.',
            highlight: 'Kendi başınıza parlayın',
        },
        {
            id: 'expression',
            title: 'Kişisel İfade',
            description: 'Her kadının dans stili benzersizdir. Lady Styling, içinizdeki özgün dansçıyı ortaya çıkarır ve sizi kalabalıktan ayırır.',
            highlight: 'Taklit değil, özgün olun',
        },
        {
            id: 'body-awareness',
            title: 'Beden Farkındalığı',
            description: 'Vücudunuzun her parçasını bilinçli kullanmayı öğrenirsiniz. Bu farkındalık, dansın ötesinde yoga, pilates ve diğer fiziksel aktivitelerde de size avantaj sağlar.',
            highlight: 'Bedeni tanıma',
        },
        {
            id: 'social',
            title: 'Sosyal Çevre',
            description: 'Lady Styling workshop\'larında benzer tutkuları paylaşan kadınlarla tanışırsınız. Sadece dans değil, dostluk ve destek ağı da kazanırsınız.',
            highlight: 'Kadın dayanışması',
        },
    ],

    audiences: [
        {
            id: 'beginners',
            title: 'Tangoya Yeni Başlayanlar',
            description: 'Henüz tangoya başladınız ve sağlam temeller atmak istiyorsunuz. Lady Styling, doğru alışkanlıkları en başından öğretir.',
            icon: 'Sprout',
        },
        {
            id: 'intermediate',
            title: 'Orta Seviye Dansçılar',
            description: 'Adımları biliyorsunuz ama dansınız "sıradan" hissettiriyor. Lady Styling, sizi bir sonraki seviyeye taşır.',
            icon: 'Flame',
        },
        {
            id: 'partnerless',
            title: 'Partner Bulamayanlar',
            description: 'Partneriniz yok veya partner kurslarına katılamıyorsunuz. Solo çalışmalarla dans etmeye devam edin.',
            icon: 'User',
        },
        {
            id: 'confidence-seekers',
            title: 'Özgüven Arayanlar',
            description: 'Dans pistinde kendinizi çekingen hissediyorsunuz. Lady Styling, içinizdeki özgüveni ortaya çıkarır.',
            icon: 'Star',
        },
    ],

    steps: [
        {
            id: 'consultation',
            stepNumber: 1,
            title: 'Tanışma & Değerlendirme',
            description: 'İlk derste mevcut duruşunuzu, dans geçmişinizi ve hedeflerinizi konuşuruz. Size özel bir gelişim planı hazırlarız.',
        },
        {
            id: 'foundation',
            stepNumber: 2,
            title: 'Temel Duruş Çalışması',
            description: 'Omurga dizilimi, denge noktası ve ağırlık aktarımı üzerine çalışırız. Sağlam bir temel olmadan stil olmaz.',
        },
        {
            id: 'technique',
            stepNumber: 3,
            title: 'Teknik Geliştirme',
            description: 'Adornos, pivot teknikleri, kol hareketleri ve müzikal ifade üzerine detaylı çalışmalar yaparız.',
        },
        {
            id: 'integration',
            stepNumber: 4,
            title: 'Stil Entegrasyonu',
            description: 'Öğrendiğiniz teknikleri kişisel stilinize dönüştürür, partner dansında uygulamayı öğrenirsiniz.',
        },
        {
            id: 'practice',
            stepNumber: 5,
            title: 'Pratik & Geri Bildirim',
            description: 'Video analizi ve birebir geri bildirimlerle sürekli gelişirsiniz. Milongalara hazır olursunuz!',
        },
    ],

    faqs: [
        {
            id: 'what-is',
            question: 'Lady Styling nedir?',
            answer: 'Lady Styling, tangoda kadın dansçılara özel solo teknik çalışmalarıdır. Duruş, zarafet, kol estetiği, ayak süslemeleri (adornos) ve müzikal ifade gibi konuları kapsar. Partner olmadan da yapılabilir ve kadın dansçının kişisel stilini geliştirmesine odaklanır.',
        },
        {
            id: 'who-is-for',
            question: 'Lady Styling dersleri kimler için uygundur?',
            answer: 'Tango bilen veya yeni başlayan tüm kadınlar için uygundur. Özellikle dansında "bir şeylerin eksik" hissedenler, partnerden bağımsız pratik yapmak isteyenler ve özgüvenini geliştirmek isteyenler için idealdir.',
        },
        {
            id: 'partner-needed',
            question: 'Partner gerekli mi?',
            answer: 'Hayır! Lady Styling solo çalışmalar içerir. Partner olmadan katılabilir, tekniklerinizi geliştirebilirsiniz. Öğrendiklerinizi daha sonra partner dansında uygularsınız.',
        },
        {
            id: 'experience-needed',
            question: 'Tango bilmem gerekiyor mu?',
            answer: 'Temel tango bilgisi faydalıdır ama şart değildir. Başlangıç seviyesindeki kadınlar için de uygun programlarımız var. Aslında doğru alışkanlıkları en başından öğrenmek daha kolaydır.',
        },
        {
            id: 'what-to-wear',
            question: 'Ne giymem gerekiyor?',
            answer: 'Rahat hareket edebileceğiniz kıyafetler (tayt, etek veya dans pantolonu) ve tercihen küçük topuklu ayakkabılar. İlk derslerde spor ayakkabı da kabul edilir.',
        },
        {
            id: 'how-long',
            question: 'Ne kadar sürede gelişme görülür?',
            answer: 'İlk dersten itibaren duruşunuzda fark hissedersiniz. Belirgin stil gelişimi genellikle 4-6 derste görülür. Sürekli pratikle 3-6 ayda kendinize güvenli, özgün bir dans stili oluşturabilirsiniz.',
        },
        {
            id: 'private-or-group',
            question: 'Özel ders mi grup dersi mi almalıyım?',
            answer: 'Her ikisinin de avantajları var. Özel dersler daha hızlı ilerleme sağlar ve size özel program oluşturulur. Grup dersleri daha ekonomik ve sosyal bir ortam sunar. İkisini birleştirmek ideal sonuç verir.',
        },
        {
            id: 'locations',
            question: 'Nerede ders alınır?',
            answer: 'Silivri, Kadıköy ve Beyoğlu lokasyonlarımızda Lady Styling dersleri mevcuttur. Size en yakın lokasyonu seçebilir veya online ön değerlendirme yapabiliriz.',
        },
    ],

    relatedLocations: [
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],

    relatedBlogs: [
        'lady-styling-rehberi',
        'adornos-teknikleri',
        'tango-dersine-ne-giyilir',
    ],

    ctaText: 'Ücretsiz Deneme Dersi',
    ctaDescription: 'İçinizdeki zarif dansçıyı keşfetmeye hazır mısınız? İlk Lady Styling dersiniz bizden!',

    isActive: true,

    translations: {
        en: {
            name: 'Lady Styling',
            tagline: 'Feminine Elegance in Tango',
            description: 'Learning tango steps is not enough. As a woman, your posture, elegance, and personal style make you unique. Discover the graceful dancer within through Lady Styling.',

            seo: {
                title: 'Lady Styling | Tango for Women | Gamze Yıldız',
                description: 'Feminine elegance, posture techniques, and personal style development in tango. Solo tango training exclusively for women in Istanbul.',
                keywords: [
                    'lady styling',
                    'lady styling istanbul',
                    'tango for women',
                    'feminine tango',
                    'solo tango women',
                    'adornos training',
                    'tango posture',
                ],
                canonicalUrl: 'https://gamzetango.com/en/lady-styling',
            },

            features: [
                {
                    id: 'posture',
                    icon: 'Sparkles',
                    title: 'Perfect Posture',
                    description: 'Develop elegant posture with spine alignment, shoulder position, and head angle.',
                },
                {
                    id: 'adornos',
                    icon: 'Footprints',
                    title: 'Adornos Techniques',
                    description: 'Add personal touches with foot embellishments, rondés, and boleos.',
                },
                {
                    id: 'musicality',
                    icon: 'Music',
                    title: 'Musical Expression',
                    description: 'Feel the nuances in the music and express them through your body.',
                },
                {
                    id: 'arms',
                    icon: 'Hand',
                    title: 'Arm Aesthetics',
                    description: 'Transform your arms into an extension of your elegance.',
                },
                {
                    id: 'confidence',
                    icon: 'Heart',
                    title: 'Confidence Building',
                    description: 'Feel powerful and graceful when you dance.',
                },
                {
                    id: 'solo',
                    icon: 'User',
                    title: 'Solo Practice',
                    description: 'Perfect your techniques with partnerless practice.',
                },
            ],

            benefits: [
                {
                    id: 'elegance',
                    title: 'Everyday Elegance',
                    description: 'Lady Styling doesn\'t stay on the dance floor. The posture and movement quality you learn reflects in your daily life.',
                    highlight: 'Everyone notices the difference',
                },
                {
                    id: 'independence',
                    title: 'Partner Independence',
                    description: 'With solo practice skills, you can practice at milongas without waiting for a partner.',
                    highlight: 'Shine on your own',
                },
                {
                    id: 'expression',
                    title: 'Personal Expression',
                    description: 'Every woman\'s dance style is unique. Lady Styling reveals your authentic dancer.',
                    highlight: 'Be original, not a copy',
                },
            ],

            audiences: [
                {
                    id: 'beginners',
                    title: 'New to Tango',
                    description: 'Just started tango and want to build solid foundations.',
                    icon: 'Sprout',
                },
                {
                    id: 'intermediate',
                    title: 'Intermediate Dancers',
                    description: 'Know the steps but your dance feels "ordinary". Level up with Lady Styling.',
                    icon: 'Flame',
                },
            ],

            steps: [
                {
                    id: 'consultation',
                    stepNumber: 1,
                    title: 'Introduction & Assessment',
                    description: 'We discuss your current posture, dance background, and goals. We create a personalized development plan.',
                },
                {
                    id: 'foundation',
                    stepNumber: 2,
                    title: 'Foundation Work',
                    description: 'Spine alignment, balance point, and weight transfer. No style without solid foundation.',
                },
                {
                    id: 'technique',
                    stepNumber: 3,
                    title: 'Technique Development',
                    description: 'Detailed work on adornos, pivot techniques, arm movements, and musical expression.',
                },
                {
                    id: 'integration',
                    stepNumber: 4,
                    title: 'Style Integration',
                    description: 'Transform techniques into your personal style and learn to apply in partner dancing.',
                },
            ],

            faqs: [
                {
                    id: 'what-is',
                    question: 'What is Lady Styling?',
                    answer: 'Lady Styling is solo technique work specifically for female tango dancers. It covers posture, elegance, arm aesthetics, foot embellishments (adornos), and musical expression.',
                },
                {
                    id: 'partner-needed',
                    question: 'Do I need a partner?',
                    answer: 'No! Lady Styling includes solo exercises. You can participate and develop your techniques without a partner.',
                },
                {
                    id: 'experience-needed',
                    question: 'Do I need tango experience?',
                    answer: 'Basic tango knowledge is helpful but not required. We have programs suitable for beginners.',
                },
            ],

            ctaText: 'Free Trial Lesson',
            ctaDescription: 'Ready to discover the graceful dancer within? Your first Lady Styling lesson is on us!',
        },
    },
};

// =============================================================================
// SILIVRI DANS KURSU SERVICE
// =============================================================================

export const SILIVRI_DANCE_COURSE_SERVICE: Service = {
    id: 'silivri-dans-kursu',
    slug: 'silivri-dans-kursu',
    name: 'Silivri Dans Kursu',
    tagline: 'Silivri\'nin İlk Profesyonel Dans Okulu',
    description: 'Silivri\'de profesyonel dans eğitimi arıyorsanız doğru yerdesiniz. Arjantin Tango odaklı kurslarımızla dansın büyülü dünyasına adım atın.',
    heroImage: '/images/0.jpg',

    seo: {
        title: 'Silivri Dans Kursu | Profesyonel Dans Eğitimi | Gamze Yıldız',
        description: 'Silivri\'de dans kursu arıyorsanız! Profesyonel Arjantin Tango eğitimi. Başlangıç seviyesinden ileri seviyeye. İlk ders ücretsiz!',
        keywords: [
            'silivri dans kursu',
            'silivri dans okulu',
            'silivri dans dersi',
            'silivri dans eğitimi',
            'silivri tango',
            'silivri arjantin tango',
            'dans kursu silivri',
            'dans okulu silivri',
            'silivri salsa', // redirect intent
            'silivri latin dansları',
            'silivri sosyal dans',
        ],
        canonicalUrl: 'https://gamzetango.com/silivri-dans-kursu',
    },

    features: [
        {
            id: 'professional',
            icon: 'Award',
            title: 'Profesyonel Eğitim',
            description: '10+ yıllık deneyimli eğitmen ile kaliteli dans eğitimi.',
        },
        {
            id: 'beginner-friendly',
            icon: 'Heart',
            title: 'Başlangıç Dostu',
            description: 'Hiç dans etmemiş olsanız bile! Sıfırdan başlayanlar için özel program.',
        },
        {
            id: 'studio',
            icon: 'Building',
            title: 'Modern Stüdyo',
            description: 'Silivri\'nin tek profesyonel dans stüdyosunda eğitim.',
        },
        {
            id: 'flexible',
            icon: 'Calendar',
            title: 'Esnek Saatler',
            description: 'Hafta içi ve hafta sonu, size uygun saat seçenekleri.',
        },
        {
            id: 'social',
            icon: 'Users',
            title: 'Sosyal Ortam',
            description: 'Dans öğrenirken yeni arkadaşlıklar kurun.',
        },
        {
            id: 'local',
            icon: 'MapPin',
            title: 'Silivri\'de Kolay Ulaşım',
            description: 'Merkezi lokasyon, ücretsiz otopark imkanı.',
        },
    ],

    benefits: [
        {
            id: 'local-option',
            title: 'İstanbul\'a Gitmek Yok',
            description: 'Artık dans kursu için İstanbul trafiğine girmek zorunda değilsiniz. Silivri\'de profesyonel eğitim kapınızda.',
            highlight: 'Zaman ve para tasarrufu',
        },
        {
            id: 'community',
            title: 'Silivri Dans Topluluğu',
            description: 'Silivri\'de büyüyen dans topluluğumuzun parçası olun. Aynı bölgeden insanlarla tanışın, sosyalleşin.',
            highlight: 'Yerel bağlantılar',
        },
        {
            id: 'tango-focus',
            title: 'Arjantin Tango Uzmanlığı',
            description: 'Genel dans kurslarından farklı olarak, Arjantin Tango\'nun derinliklerine iniyoruz. Bir dansı tam öğrenmek, onu yaşamaktır.',
            highlight: 'Uzmanlaşın',
        },
    ],

    faqs: [
        {
            id: 'what-dance',
            question: 'Hangi dans türleri öğretiliyor?',
            answer: 'Arjantin Tango uzmanlık alanımızdır. Tango vals ve milonga da dahil olmak üzere tüm tango formlarını öğretiyoruz. Düğün dansı için farklı stillerde de çalışabiliriz.',
        },
        {
            id: 'age-limit',
            question: 'Yaş sınırı var mı?',
            answer: 'Hayır! 18\'den 80\'e kadar her yaştan öğrencimiz var. Dans için asla geç değil.',
        },
        {
            id: 'partner',
            question: 'Partner bulmam gerekiyor mu?',
            answer: 'Hayır, tek başınıza gelebilirsiniz. Grup derslerinde partner rotasyonu yapıyoruz. Özel derslerde partneriniz yoksa eğitmeniniz sizinle dans eder.',
        },
        {
            id: 'schedule',
            question: 'Ders saatleri nasıl?',
            answer: 'Hafta içi akşam ve hafta sonu gündüz/akşam seçeneklerimiz var. Özel derslerde tamamen size uygun saat ayarlıyoruz.',
        },
        {
            id: 'first-lesson',
            question: 'İlk ders nasıl işliyor?',
            answer: 'İlk ders ücretsiz deneme dersidir. Gelir, dersi yaşarsınız ve karar verirsiniz. Herhangi bir bağlayıcılığı yoktur.',
        },
    ],

    relatedLocations: ['silivri-ozel-tango-dersi'],
    relatedBlogs: ['silivri-tango-kursu-sosyal-aktivite', 'silivri-sanat-dans-etkinlikleri'],

    ctaText: 'Ücretsiz Deneme Dersi',
    ctaDescription: 'Silivri\'de dans öğrenmeye başlamak için hemen iletişime geçin!',

    isActive: true,

    translations: {
        en: {
            name: 'Dance Lessons Silivri',
            tagline: 'Silivri\'s First Professional Dance School',
            description: 'Looking for dance lessons in Silivri? You\'re in the right place. Step into the magical world of Argentine Tango.',

            seo: {
                title: 'Dance Lessons Silivri | Professional Dance School',
                description: 'Professional Argentine Tango lessons in Silivri, Istanbul. From beginner to advanced. First lesson free!',
                keywords: [
                    'dance lessons silivri',
                    'dance school silivri',
                    'silivri tango',
                    'dance classes silivri istanbul',
                ],
                canonicalUrl: 'https://gamzetango.com/en/dance-lessons-silivri',
            },

            features: [
                {
                    id: 'professional',
                    icon: 'Award',
                    title: 'Professional Training',
                    description: 'Quality dance education with 10+ years experienced instructor.',
                },
                {
                    id: 'beginner-friendly',
                    icon: 'Heart',
                    title: 'Beginner Friendly',
                    description: 'Never danced before? Special program for absolute beginners.',
                },
                {
                    id: 'studio',
                    icon: 'Building',
                    title: 'Modern Studio',
                    description: 'Training in Silivri\'s only professional dance studio.',
                },
            ],

            benefits: [
                {
                    id: 'local-option',
                    title: 'No Need to Go to Istanbul',
                    description: 'Professional dance education at your doorstep. No more traffic stress.',
                    highlight: 'Save time and money',
                },
            ],

            faqs: [
                {
                    id: 'what-dance',
                    question: 'What dance styles are taught?',
                    answer: 'Argentine Tango is our specialty. We teach all tango forms including tango vals and milonga.',
                },
                {
                    id: 'partner',
                    question: 'Do I need a partner?',
                    answer: 'No, you can come alone. We do partner rotation in group classes.',
                },
            ],

            ctaText: 'Free Trial Lesson',
            ctaDescription: 'Start your dance journey in Silivri today!',
        },
    },
};

// =============================================================================
// DÜĞÜN DANSI SERVICE
// =============================================================================

export const WEDDING_DANCE_SERVICE: Service = {
    id: 'dugun-dansi',
    slug: 'dugun-dansi',
    name: 'Düğün Dansı Eğitimi',
    tagline: 'Hayatınızın En Özel Dansı için Profesyonel Hazırlık',
    description: 'Düğününüzde misafirlerinizi büyüleyecek bir ilk dans hayal ediyor musunuz? Size özel koreografi ve profesyonel eğitimle o anı unutulmaz kılalım.',
    heroImage: '/images/1.jpg',

    seo: {
        title: 'Düğün Dansı Eğitimi | Profesyonel İlk Dans Kursu | Gamze Yıldız',
        description: 'Düğününüz için özel ilk dans koreografisi ve eğitimi. Tango, vals veya size özel stil. İstanbul\'da profesyonel düğün dansı dersleri.',
        keywords: [
            'düğün dansı',
            'düğün dansı eğitimi',
            'ilk dans eğitimi',
            'düğün dansı kursu',
            'düğün dansı istanbul',
            'düğün dansı koreografi',
            'gelin damat dansı',
            'nikah dansı',
            'düğün için tango',
            'düğün valsi',
        ],
        canonicalUrl: 'https://gamzetango.com/dugun-dansi',
    },

    features: [
        {
            id: 'custom',
            icon: 'Music',
            title: 'Size Özel Koreografi',
            description: 'Seçtiğiniz şarkıya özel, seviyenize uygun koreografi tasarımı.',
        },
        {
            id: 'song',
            icon: 'Headphones',
            title: 'Şarkı Seçimi Desteği',
            description: 'Dans stili ve ambiyansa uygun şarkı önerileri.',
        },
        {
            id: 'flexible',
            icon: 'Calendar',
            title: 'Esnek Program',
            description: 'Düğün tarihine göre yoğunlaştırılmış veya uzun vadeli program.',
        },
        {
            id: 'video',
            icon: 'Video',
            title: 'Video Analizi',
            description: 'Prova videolarıyla gelişiminizi takip edin.',
        },
        {
            id: 'rehearsal',
            icon: 'MapPin',
            title: 'Mekan Provası',
            description: 'İsterseniz düğün mekanında genel prova imkanı.',
        },
        {
            id: 'beginner',
            icon: 'Heart',
            title: 'Hiç Dans Bilmeyenler İçin',
            description: 'Daha önce hiç dans etmediyseniz bile endişelenmeyin!',
        },
    ],

    benefits: [
        {
            id: 'memorable',
            title: 'Unutulmaz An',
            description: 'Düğün dansı, misafirlerinizin yıllarca konuşacağı, sizin de hep hatırlayacağınız özel bir an. Bu anı tesadüfe bırakmayın.',
            highlight: 'Fotoğraflar ve videolar için mükemmel',
        },
        {
            id: 'stress-free',
            title: 'Stressiz Performans',
            description: 'Düzgün hazırlanmış bir dans, o gün rahat etmenizi sağlar. "Acaba becerebilecek miyim?" stresi olmadan sahneye çıkarsınız.',
            highlight: 'Kendinize güvenin',
        },
        {
            id: 'bonding',
            title: 'Çift Olarak Birlikte Zaman',
            description: 'Düğün hazırlıkları stresli olabilir. Dans dersleri, birlikte eğleneceğiniz ve bağınızı güçlendireceğiniz kaliteli zaman sunar.',
            highlight: 'Romantik anlar',
        },
    ],

    steps: [
        {
            id: 'meeting',
            stepNumber: 1,
            title: 'İlk Görüşme',
            description: 'Dans deneyiminizi, düğün tarihini, şarkı fikirlerinizi konuşuruz. Seviyenizi belirleriz.',
        },
        {
            id: 'planning',
            stepNumber: 2,
            title: 'Şarkı & Stil Seçimi',
            description: 'Birlikte şarkı seçer, dans stilini (tango, vals, modern vb.) belirleriz.',
        },
        {
            id: 'choreography',
            stepNumber: 3,
            title: 'Koreografi Tasarımı',
            description: 'Seviyenize uygun, etkileyici ama yapılabilir bir koreografi hazırlarız.',
        },
        {
            id: 'practice',
            stepNumber: 4,
            title: 'Pratik & İnceleme',
            description: 'Düzenli derslerle adımları oturtursunuz. Video ile takip ederiz.',
        },
        {
            id: 'final',
            stepNumber: 5,
            title: 'Genel Prova',
            description: 'Düğün öncesi son prova ve güven tazeleme.',
        },
    ],

    faqs: [
        {
            id: 'how-long',
            question: 'Düğün dansı için ne kadar süre gerekir?',
            answer: 'Seviyenize ve koreografinin zorluğuna göre değişir. Ortalama 8-12 ders öneriyoruz. Acil durumlar için 1 aylık yoğunlaştırılmış programlar da mümkün.',
        },
        {
            id: 'never-danced',
            question: 'Hiç dans etmedik, yapabilir miyiz?',
            answer: 'Kesinlikle! Öğrencilerimizin çoğu daha önce hiç dans etmemiş çiftler. Seviyenize uygun, başarılı görünecek bir koreografi hazırlarız.',
        },
        {
            id: 'which-song',
            question: 'Hangi şarkıyı seçmeliyiz?',
            answer: 'Size özel bir şarkınız varsa onu kullanabiliriz. Yoksa birlikte seçeriz. Şarkı seçimi konusunda rehberlik ediyoruz.',
        },
        {
            id: 'tango-or-waltz',
            question: 'Tango mu vals mi tercih etmeliyiz?',
            answer: 'Her ikisi de harika seçenekler. Tango daha dramatik, vals daha romantik. Kişiliğinize ve düğün ambiyansına göre karar verebiliriz.',
        },
        {
            id: 'location',
            question: 'Nerede ders alırız?',
            answer: 'Silivri, Kadıköy veya Beyoğlu stüdyolarımızda. Ayrıca evinize veya düğün mekanına da gelebiliriz (ek ücretle).',
        },
    ],

    relatedLocations: [
        'istanbul-ozel-tango-dersi',
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],
    relatedBlogs: [
        'dugun-dansi-tango',
        'dugun-dansi-tango-mu-vals-mi',
        'dugun-dansi-muzik-secimi',
        '1-ayda-dugun-dansi-yetisir-mi',
    ],

    ctaText: 'Ücretsiz Ön Görüşme',
    ctaDescription: 'Düğün dansınız için ilk adımı atın! Size özel planlama görüşmesi ücretsiz.',

    isActive: true,

    translations: {
        en: {
            name: 'Wedding Dance Training',
            tagline: 'Professional Preparation for Your Most Special Dance',
            description: 'Dream of a first dance that enchants your guests? Custom choreography and professional training to make that moment unforgettable.',

            seo: {
                title: 'Wedding Dance Lessons | First Dance Choreography Istanbul',
                description: 'Custom wedding dance choreography and training. Tango, waltz, or your unique style. Professional wedding dance lessons in Istanbul.',
                keywords: [
                    'wedding dance istanbul',
                    'first dance lessons',
                    'wedding choreography',
                    'wedding dance training',
                    'wedding tango',
                    'wedding waltz',
                ],
                canonicalUrl: 'https://gamzetango.com/en/wedding-dance',
            },

            features: [
                {
                    id: 'custom',
                    icon: 'Music',
                    title: 'Custom Choreography',
                    description: 'Choreography designed for your chosen song and skill level.',
                },
                {
                    id: 'song',
                    icon: 'Headphones',
                    title: 'Song Selection Help',
                    description: 'Recommendations for songs that match your dance style and venue.',
                },
                {
                    id: 'flexible',
                    icon: 'Calendar',
                    title: 'Flexible Schedule',
                    description: 'Intensive or extended programs based on your wedding date.',
                },
            ],

            benefits: [
                {
                    id: 'memorable',
                    title: 'Unforgettable Moment',
                    description: 'Your wedding dance is a moment guests will talk about for years. Don\'t leave it to chance.',
                    highlight: 'Perfect for photos and videos',
                },
            ],

            faqs: [
                {
                    id: 'how-long',
                    question: 'How long does wedding dance preparation take?',
                    answer: 'Depends on your level and choreography complexity. We recommend 8-12 lessons on average.',
                },
                {
                    id: 'never-danced',
                    question: 'We\'ve never danced, can we do it?',
                    answer: 'Absolutely! Most of our students are couples who have never danced. We create choreography suitable for your level.',
                },
            ],

            steps: [
                {
                    id: 'meeting',
                    stepNumber: 1,
                    title: 'Initial Meeting',
                    description: 'We discuss your dance experience, wedding date, and song ideas.',
                },
                {
                    id: 'choreography',
                    stepNumber: 3,
                    title: 'Choreography Design',
                    description: 'We create impressive yet achievable choreography for your level.',
                },
            ],

            ctaText: 'Free Consultation',
            ctaDescription: 'Take the first step for your wedding dance! Planning consultation is free.',
        },
    },
};

// =============================================================================
// SILIVRI TANGO KURSU SERVICE
// =============================================================================

export const SILIVRI_TANGO_COURSE_SERVICE: Service = {
    id: 'silivri-tango-kursu',
    slug: 'silivri-tango-kursu',
    name: 'Silivri Tango Kursu',
    tagline: 'Arjantin Tango\'nun Büyüsünü Silivri\'de Yaşayın',
    description: 'Silivri\'de Arjantin Tango kursu arıyorsanız doğru yerdesiniz. Gamze Yıldız ile profesyonel tango eğitimi, sıcak atmosfer ve sürekli gelişim.',
    heroImage: '/images/0.jpg',

    seo: {
        title: 'Silivri Tango Kursu | Arjantin Tango Eğitimi | Gamze Yıldız',
        description: 'Silivri\'de profesyonel Arjantin Tango kursu. Başlangıç ve ileri seviye gruplar. Gamze Yıldız ile tangonun büyüsünü keşfedin!',
        keywords: [
            'silivri tango kursu',
            'silivri tango',
            'silivri arjantin tango',
            'tango kursu silivri',
            'silivri tango okulu',
            'silivri tango eğitimi',
            'silivri tango dersleri',
        ],
        canonicalUrl: 'https://gamzetango.com/silivri-tango-kursu',
    },

    features: [
        {
            id: 'argentine',
            icon: 'Globe',
            title: 'Arjantin Tango',
            description: 'Sahne tangosu değil, gerçek Arjantin Tango\'su öğrenin.',
        },
        {
            id: 'levels',
            icon: 'TrendingUp',
            title: 'Tüm Seviyeler',
            description: 'Başlangıçtan ileri seviyeye gruplar mevcut.',
        },
        {
            id: 'milonga',
            icon: 'Music',
            title: 'Milonga Deneyimi',
            description: 'Düzenli milonga geceleri ve pratik imkanı.',
        },
        {
            id: 'community',
            icon: 'Users',
            title: 'Tango Ailesi',
            description: 'Silivri\'nin sıcak tango topluluğuna katılın.',
        },
        {
            id: 'local',
            icon: 'MapPin',
            title: 'Silivri\'de',
            description: 'İstanbul\'a gitmeden, kendi semtinizde öğrenin.',
        },
        {
            id: 'quality',
            icon: 'Award',
            title: 'Kaliteli Eğitim',
            description: '10+ yıl deneyimli eğitmen, sertifikalı program.',
        },
    ],

    benefits: [
        {
            id: 'authentic',
            title: 'Gerçek Tango',
            description: 'TV\'de gördüğünüz gösterişli figürler değil, sosyal dansta kullanılan otantik Arjantin Tango\'su.',
            highlight: 'Milongalarda dans edin',
        },
        {
            id: 'progress',
            title: 'Sürekli Gelişim',
            description: 'Seviyeler arası geçiş sistemi ile sürekli ilerleme. Her seviyede yeni teknikler, yeni meydan okumalar.',
            highlight: 'Asla durmayın',
        },
    ],

    faqs: [
        {
            id: 'difference',
            question: 'Tango kursu ile özel ders arasındaki fark nedir?',
            answer: 'Kursta grupla ders alır, sosyalleşirsiniz ve daha ekonomiktir. Özel derste birebir ilgi görür, daha hızlı ilerlersiniz. İkisini birleştirmek idealdir.',
        },
        {
            id: 'how-to-start',
            question: 'Nasıl başlayabilirim?',
            answer: 'WhatsApp veya telefon ile iletişime geçin. Size uygun başlangıç grubu veya ücretsiz deneme dersi ayarlayalım.',
        },
        {
            id: 'schedule',
            question: 'Ders günleri ve saatleri nedir?',
            answer: 'Hafta içi akşam ve Cumartesi gündüz gruplarımız var. Detaylı program için iletişime geçin.',
        },
    ],

    relatedLocations: ['silivri-ozel-tango-dersi'],
    relatedBlogs: ['silivri-tango-kursu-sosyal-aktivite', 'tango-nedir', 'ilk-tango-dersi'],

    ctaText: 'Kayıt İçin İletişim',
    ctaDescription: 'Silivri tango kursuna katılmak için hemen iletişime geçin!',

    isActive: true,

    translations: {
        en: {
            name: 'Tango Course Silivri',
            tagline: 'Experience the Magic of Argentine Tango in Silivri',
            description: 'Professional Argentine Tango course in Silivri. All levels welcome. Discover the magic of tango with Gamze Yıldız.',

            seo: {
                title: 'Tango Course Silivri | Argentine Tango Classes',
                description: 'Professional Argentine Tango courses in Silivri, Istanbul. Beginner and advanced groups. Discover authentic tango!',
                keywords: [
                    'tango course silivri',
                    'silivri tango',
                    'argentine tango silivri',
                    'tango classes silivri istanbul',
                ],
                canonicalUrl: 'https://gamzetango.com/en/tango-course-silivri',
            },

            features: [
                {
                    id: 'argentine',
                    icon: 'Globe',
                    title: 'Argentine Tango',
                    description: 'Learn authentic Argentine Tango, not stage performances.',
                },
                {
                    id: 'levels',
                    icon: 'TrendingUp',
                    title: 'All Levels',
                    description: 'Groups available from beginner to advanced.',
                },
            ],

            benefits: [
                {
                    id: 'authentic',
                    title: 'Real Tango',
                    description: 'Not the flashy figures from TV, but authentic Argentine Tango used in social dancing.',
                    highlight: 'Dance at milongas',
                },
            ],

            faqs: [
                {
                    id: 'how-to-start',
                    question: 'How do I get started?',
                    answer: 'Contact us via WhatsApp or phone. We\'ll arrange a suitable beginner group or free trial lesson.',
                },
            ],

            steps: [],

            ctaText: 'Contact to Register',
            ctaDescription: 'Get in touch to join Silivri tango course!',
        },
    },
};

// =============================================================================
// GRUP TANGO DERSİ SERVICE
// =============================================================================

export const GRUP_TANGO_DERSI_SERVICE: Service = {
    id: 'grup-tango-dersi',
    slug: 'grup-tango-dersi',
    name: 'Grup Tango Dersi',
    tagline: 'Birlikte Öğrenmenin Keyfi',
    description: 'İstanbul\'da grup tango dersleri ile tango öğrenin. Başlangıç, orta ve ileri seviye gruplar. Sosyal bir ortamda dans edin, yeni insanlarla tanışın.',
    heroImage: '/images/optimized/3.jpg',

    seo: {
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
        ],
        canonicalUrl: 'https://gamzetango.com/grup-tango-dersi',
    },

    features: [
        {
            id: 'levels',
            icon: 'TrendingUp',
            title: 'Seviye Grupları',
            description: 'Başlangıç, orta ve ileri seviye gruplar ile kendi hızınızda ilerleyin.',
        },
        {
            id: 'social',
            icon: 'Users',
            title: 'Sosyal Ortam',
            description: 'Aynı tutkuyu paylaşan insanlarla tanışın, yeni arkadaşlıklar kurun.',
        },
        {
            id: 'practice',
            icon: 'Sparkles',
            title: 'Pratik İmkanı',
            description: 'Farklı partnerlerle dans ederek pratik yapın, uyum yeteneğinizi geliştirin.',
        },
        {
            id: 'affordable',
            icon: 'Star',
            title: 'Uygun Fiyat',
            description: 'Grup dersleri, özel derslere göre daha ekonomik bir seçenektir.',
        },
    ],

    benefits: [
        {
            id: 'community',
            title: 'Tango Topluluğuna Katılın',
            description: 'Grup derslerinde sadece dans öğrenmezsiniz, bir topluluğun parçası olursunuz. Milongalara gittiğinizde tanıdık yüzler görürsünüz.',
            highlight: 'Sosyal çevreniz genişler',
        },
        {
            id: 'adaptation',
            title: 'Partner Uyumu Geliştirin',
            description: 'Farklı partnerlerle dans ederek, her tür dansçıya uyum sağlamayı öğrenirsiniz. Bu, milongalarda çok değerli bir beceridir.',
            highlight: 'Herkesle dans edebilirsiniz',
        },
        {
            id: 'motivation',
            title: 'Motivasyon ve Süreklilik',
            description: 'Grup dinamiği, düzenli devam etmenizi ve motive kalmanızı sağlar. Arkadaşlarınızla birlikte öğrenmek daha keyiflidir.',
            highlight: 'Birlikte daha güçlü',
        },
    ],

    audiences: [
        {
            id: 'beginners',
            title: 'Yeni Başlayanlar',
            description: 'Tango\'ya ilk adımınızı atmak istiyorsanız, başlangıç gruplarımız sizin için ideal.',
            icon: 'Sprout',
        },
        {
            id: 'social-dancers',
            title: 'Sosyal Dansçılar',
            description: 'Milongalarda rahatça dans etmek isteyen, sosyal tango öğrenmek isteyenler.',
            icon: 'Users',
        },
        {
            id: 'budget-conscious',
            title: 'Bütçe Bilincinde Olanlar',
            description: 'Kaliteli eğitim almak isteyen ama bütçesini düşünmek zorunda olanlar.',
            icon: 'Star',
        },
    ],

    steps: [
        {
            id: 'contact',
            stepNumber: 1,
            title: 'İletişim & Seviye Belirleme',
            description: 'Bize ulaşın, tango geçmişinizi ve hedeflerinizi konuşalım. Size uygun grup seviyesini belirleyelim.',
        },
        {
            id: 'join-group',
            stepNumber: 2,
            title: 'Gruba Katılın',
            description: 'Belirlenen seviyedeki gruba katılın. Yeni başlayanlar için her ay yeni gruplar açılıyor.',
        },
        {
            id: 'learn-practice',
            stepNumber: 3,
            title: 'Öğrenin & Pratik Yapın',
            description: 'Haftalık derslerle teknik öğrenin, farklı partnerlerle pratik yapın.',
        },
        {
            id: 'milonga',
            stepNumber: 4,
            title: 'Milongalara Katılın',
            description: 'Öğrendiklerinizi gerçek tango gecelerinde uygulayın, topluluğun parçası olun.',
        },
    ],

    faqs: [
        {
            id: 'partner-required',
            question: 'Grup derslerine partner olmadan katılabilir miyim?',
            answer: 'Evet, kesinlikle! Grup derslerinde partner rotasyonu yapılır, böylece herkes farklı partnerlerle dans etme fırsatı bulur. Bu, hem öğrenme sürecinizi hızlandırır hem de dans adaptasyon yeteneğinizi geliştirir.',
        },
        {
            id: 'which-level',
            question: 'Hangi seviye grubuna katılmalıyım?',
            answer: 'Daha önce hiç tango deneyiminiz yoksa başlangıç seviyesinden başlamanızı öneririz. Eğer daha önce tango eğitimi aldıysanız, seviye belirleme için bir deneme dersine katılabilir veya bize ulaşabilirsiniz.',
        },
        {
            id: 'frequency',
            question: 'Grup dersleri ne sıklıkla yapılıyor?',
            answer: 'Grup dersleri haftada 1-2 kez yapılmaktadır. Ders günleri ve saatleri seviyeye göre değişebilir. Güncel program için bizimle iletişime geçebilirsiniz.',
        },
        {
            id: 'group-size',
            question: 'Grup derslerine kaç kişi katılıyor?',
            answer: 'Kaliteli eğitim için gruplarımızı 6-12 kişi arasında tutuyoruz. Bu sayı, hem yeterli ilgi hem de pratik imkanı sağlar.',
        },
    ],

    relatedLocations: [
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],

    relatedBlogs: [
        'tango-rehberi',
        'ilk-tango-dersi',
        'tek-basina-tango-kursuna-gitmek',
    ],

    ctaText: 'Gruba Katıl',
    ctaDescription: 'Yeni başlayanlar için her ay yeni gruplar açılıyor. Yerinizi ayırtın, tango yolculuğunuza başlayın!',

    isActive: true,
};

// =============================================================================
// ÖZEL TANGO DERSİ SERVICE
// =============================================================================

export const OZEL_TANGO_DERSI_SERVICE: Service = {
    id: 'ozel-tango-dersi',
    slug: 'ozel-tango-dersi',
    name: 'Özel Tango Dersi',
    tagline: 'Kişiye Özel Eğitim, Hızlı İlerleme',
    description: 'İstanbul\'da özel tango dersleri ile hızla ilerleme kaydedin. Bire bir eğitim, esnek zamanlama, kişiselleştirilmiş program. Her seviye için.',
    heroImage: '/images/optimized/tango ozel dersi.jpg',

    seo: {
        title: 'Özel Tango Dersi İstanbul | Bire Bir Eğitim | Gamze Tango',
        description: 'İstanbul\'da özel tango dersleri. Bire bir eğitim ile hızlı ilerleme. Esnek zamanlama, kişisel program. Her seviye için profesyonel tango eğitimi.',
        keywords: [
            'özel tango dersi',
            'özel tango dersi istanbul',
            'birebir tango dersi',
            'private tango lesson',
            'kişiye özel tango',
            'tango özel eğitim',
            'özel ders tango',
        ],
        canonicalUrl: 'https://gamzetango.com/ozel-tango-dersi',
    },

    features: [
        {
            id: 'personal-attention',
            icon: 'User',
            title: 'Bire Bir İlgi',
            description: 'Tüm ders boyunca sadece size odaklanılır, hatalarınız anında düzeltilir.',
        },
        {
            id: 'fast-progress',
            icon: 'TrendingUp',
            title: 'Hızlı İlerleme',
            description: 'Grup derslerine göre 3-4 kat daha hızlı öğrenme imkanı.',
        },
        {
            id: 'flexible-schedule',
            icon: 'Calendar',
            title: 'Esnek Zamanlama',
            description: 'Kendi programınıza uygun ders saatleri belirleyin.',
        },
        {
            id: 'custom-program',
            icon: 'Award',
            title: 'Kişisel Program',
            description: 'Hedeflerinize ve seviyenize özel hazırlanmış müfredat.',
        },
    ],

    benefits: [
        {
            id: 'beginners',
            title: 'Yeni Başlayanlar İçin',
            description: 'Temel teknikleri doğru öğrenerek sağlam bir altyapı oluşturun. Grup derslerinde kaçırılabilecek detayları yakalayın.',
            highlight: 'Doğru başlangıç',
        },
        {
            id: 'intermediate',
            title: 'Orta Seviye İçin',
            description: 'Belirli zorlukları aşmak, teknik sorunları düzeltmek ve repertuarınızı genişletmek için ideal.',
            highlight: 'Gelişiminizi hızlandırın',
        },
        {
            id: 'advanced',
            title: 'İleri Seviye İçin',
            description: 'Stil geliştirme, müzikalite, performans hazırlığı ve ileri düzey figürler üzerine çalışın.',
            highlight: 'Ustalığa ulaşın',
        },
        {
            id: 'special-occasion',
            title: 'Düğün/Özel Gün İçin',
            description: 'Belirli bir tarih ve şarkı için koreografi hazırlığı. Etkileyici bir performans sergilemek için.',
            highlight: 'Unutulmaz anlar',
        },
    ],

    audiences: [
        {
            id: 'fast-learners',
            title: 'Hızlı İlerlemek İsteyenler',
            description: 'Grup derslerine ek olarak veya tek başına, hızlı ilerleme hedefleyenler.',
            icon: 'TrendingUp',
        },
        {
            id: 'busy-professionals',
            title: 'Yoğun Programlılar',
            description: 'Esnek ders saatleri ile programınıza uygun dans öğrenin.',
            icon: 'Calendar',
        },
        {
            id: 'special-needs',
            title: 'Özel İhtiyaçları Olanlar',
            description: 'Belirli bir teknik sorun, figür veya stil üzerinde çalışmak isteyenler.',
            icon: 'Star',
        },
    ],

    steps: [
        {
            id: 'analysis',
            stepNumber: 1,
            title: 'İhtiyaç Analizi',
            description: 'İlk görüşmede hedeflerinizi, seviyenizi ve beklentilerinizi konuşuyoruz.',
        },
        {
            id: 'program',
            stepNumber: 2,
            title: 'Kişisel Program',
            description: 'Size özel bir eğitim planı hazırlıyoruz.',
        },
        {
            id: 'lessons',
            stepNumber: 3,
            title: 'Düzenli Dersler',
            description: 'Belirlenen program dahilinde dersler başlıyor.',
        },
        {
            id: 'evaluation',
            stepNumber: 4,
            title: 'Değerlendirme',
            description: 'İlerleyişinizi düzenli olarak değerlendiriyoruz.',
        },
    ],

    faqs: [
        {
            id: 'private-vs-group',
            question: 'Özel ders mi, grup dersi mi tercih etmeliyim?',
            answer: 'Her ikisinin de avantajları var. Özel dersler, hızlı ilerleme ve kişisel ilgi sunar. Grup dersleri ise sosyal ortam ve farklı partnerlerle pratik imkanı sağlar. İdeal kombinasyon, her ikisini birlikte almaktır.',
        },
        {
            id: 'location',
            question: 'Özel dersler nerede yapılıyor?',
            answer: 'Dersler, İstanbul\'daki stüdyomuzda veya belirlediğiniz bir mekanda yapılabilir. Ev veya ofis dersleri için uygun alan gereklidir.',
        },
        {
            id: 'with-partner',
            question: 'Özel derse partnerimle birlikte gelebilir miyim?',
            answer: 'Elbette! Çift olarak özel ders almak, partnerinizle uyumunuzu geliştirmenin en etkili yoludur. Çift dersleri için ayrı bir programımız da bulunmaktadır.',
        },
        {
            id: 'minimum-lessons',
            question: 'Minimum kaç ders almam gerekiyor?',
            answer: 'Minimum ders zorunluluğu yoktur. Ancak düzenli ilerleme için haftada en az 1 ders önerilir. Düğün dansı için ortalama 8-12 ders gerekir.',
        },
    ],

    relatedLocations: [
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],

    relatedBlogs: [
        'tango-rehberi',
        'ilk-tango-dersi',
        'tango-kursu-fiyatlari-2026',
    ],

    ctaText: 'Ücretsiz Deneme Dersi',
    ctaDescription: 'Özel ders deneyimini yaşamak ister misiniz? İlk tanışma dersimiz ücretsiz!',

    isActive: true,
};

// =============================================================================
// ÇİFT TANGO DERSİ SERVICE
// =============================================================================

export const CIFT_TANGO_DERSI_SERVICE: Service = {
    id: 'cift-tango-dersi',
    slug: 'cift-tango-dersi',
    name: 'Çift Tango Dersi',
    tagline: 'Birlikte Dans Edin, Birlikte Büyüyün',
    description: 'Partnerinizle birlikte tango öğrenin. Çiftlere özel programlar, düğün dansı hazırlığı, ilişkinizi güçlendiren dans deneyimi.',
    heroImage: '/images/optimized/wedding dance.jpg',

    seo: {
        title: 'Çift Tango Dersi İstanbul | Partnerinizle Tango Öğrenin | Gamze Tango',
        description: 'İstanbul\'da çiftlere özel tango dersleri. Partnerinizle birlikte tango öğrenin. Düğün dansı hazırlığı, çift programları. Profesyonel eğitim.',
        keywords: [
            'çift tango dersi',
            'çiftler için tango',
            'partnerle tango',
            'düğün dansı tango',
            'çift dans dersi istanbul',
            'tango couple lessons',
        ],
        canonicalUrl: 'https://gamzetango.com/cift-tango-dersi',
    },

    features: [
        {
            id: 'harmony',
            icon: 'Users',
            title: 'Partner Uyumu',
            description: 'Birlikte çalışarak partnerinizle mükemmel uyum yakalayın.',
        },
        {
            id: 'communication',
            icon: 'Heart',
            title: 'İletişim Gelişimi',
            description: 'Dans yoluyla sözsüz iletişiminizi güçlendirin.',
        },
        {
            id: 'custom',
            icon: 'Award',
            title: 'Özel Program',
            description: 'İkinizin seviyesine ve hedeflerine göre özelleştirilmiş içerik.',
        },
        {
            id: 'quality-time',
            icon: 'Sparkles',
            title: 'Kaliteli Zaman',
            description: 'Birlikte geçirdiğiniz kaliteli ve eğlenceli anlar.',
        },
    ],

    benefits: [
        {
            id: 'sync',
            title: 'Aynı Hızda İlerleme',
            description: 'Partnerinizle aynı anda, aynı şeyleri öğrenerek uyum içinde ilerlersiniz. Farklı seviye sorunu yaşamazsınız.',
            highlight: 'Birlikte gelişin',
        },
        {
            id: 'relationship',
            title: 'İlişkinizi Güçlendirin',
            description: 'Dans, sözsüz iletişimi geliştirir. Öğrendiğiniz dinleme ve uyum becerileri ilişkinize de yansır.',
            highlight: 'Daha güçlü bağ',
        },
        {
            id: 'memories',
            title: 'Özel Anılar',
            description: 'Birlikte öğrendiğiniz dans, hayat boyu hatırlayacağınız özel anılar oluşturur.',
            highlight: 'Unutulmaz deneyim',
        },
    ],

    audiences: [
        {
            id: 'engaged',
            title: 'Nişanlı Çiftler',
            description: 'Düğün dansınız için profesyonel hazırlık. Misafirlerinizi büyüleyecek bir performans.',
            icon: 'Heart',
        },
        {
            id: 'newlywed',
            title: 'Yeni Evli Çiftler',
            description: 'Birlikte yeni bir hobi edinmek ve partnerinizle bağınızı güçlendirmek için.',
            icon: 'Sparkles',
        },
        {
            id: 'long-term',
            title: 'Uzun Süreli Çiftler',
            description: 'İlişkinize yeni bir heyecan katmak, birlikte bir şeyler öğrenmek için.',
            icon: 'Star',
        },
    ],

    steps: [
        {
            id: 'consultation',
            stepNumber: 1,
            title: 'Tanışma Görüşmesi',
            description: 'İkinizin de hedeflerini, dans geçmişinizi ve beklentilerinizi konuşuyoruz.',
        },
        {
            id: 'plan',
            stepNumber: 2,
            title: 'Program Oluşturma',
            description: 'İkinize özel bir eğitim planı hazırlıyoruz.',
        },
        {
            id: 'lessons',
            stepNumber: 3,
            title: 'Birlikte Öğrenme',
            description: 'Dersler başlıyor, birlikte ilerliyorsunuz.',
        },
        {
            id: 'practice',
            stepNumber: 4,
            title: 'Pratik & Dans',
            description: 'Öğrendiklerinizi pekiştirin, birlikte dans edin.',
        },
    ],

    faqs: [
        {
            id: 'no-experience',
            question: 'İkimiz de hiç dans bilmiyoruz, yine de katılabilir miyiz?',
            answer: 'Kesinlikle! Çift derslerimiz her seviyeye uygundur. Sıfırdan başlayarak birlikte öğrenmek, aslında en güzel yollardan biridir. İkiniz de aynı seviyede ilerlersiniz.',
        },
        {
            id: 'wedding-timing',
            question: 'Düğün dansı için ne kadar süre önceden başlamalıyız?',
            answer: 'İdeal olarak düğününüzden 2-3 ay önce başlamanızı öneriyoruz. Bu süre içinde rahat ve özgüvenli bir performans sergileyebilecek seviyeye ulaşırsınız. Acil durumlar için 1 aylık yoğun programlarımız da mevcuttur.',
        },
        {
            id: 'different-levels',
            question: 'Seviyelerimiz farklı olursa ne olacak?',
            answer: 'Bu çok yaygın bir durum ve sorun değil. Eğitmen, her ikinizin de gelişmesini sağlayacak şekilde dersi uyarlar. Daha deneyimli partner, partnerlik becerilerini geliştirir; yeni başlayan ise temel teknikleri öğrenir.',
        },
        {
            id: 'lesson-count',
            question: 'Bir derste ne kadar ilerleme kaydedebiliriz?',
            answer: 'Her çift farklı hızda öğrenir, ancak genellikle 4-6 ders sonunda basit bir tango yürüyüşü ve temel figürlerle dans edebilir hale gelirsiniz. Düğün dansı için 8-12 ders idealdir.',
        },
    ],

    relatedLocations: [
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],

    relatedBlogs: [
        'dugun-dansi-tango',
        'dugun-dansi-muzik-secimi',
        'tango-kursu-fiyatlari-2026',
    ],

    ctaText: 'Ücretsiz Deneme Dersi',
    ctaDescription: 'Partnerinizle birlikte tango deneyimini yaşamak ister misiniz? İlk dersimiz ücretsiz!',

    isActive: true,
};

// =============================================================================
// TANGO DENEME DERSİ SERVICE
// =============================================================================

export const TANGO_DENEME_DERSI_SERVICE: Service = {
    id: 'tango-deneme-dersi',
    slug: 'tango-deneme-dersi',
    name: 'Tango Deneme Dersi',
    tagline: 'Tango ile Tanışmanın En Kolay Yolu',
    description: 'Tango\'yu denemek mi istiyorsunuz? Deneme dersimizle tango dünyasına ilk adımınızı atın. Hiçbir ön bilgi gerekmez, sadece merakınız yeterli.',
    heroImage: '/images/optimized/6.jpg',

    seo: {
        title: 'Tango Deneme Dersi İstanbul | Ücretsiz İlk Ders | Gamze Tango',
        description: 'İstanbul\'da ücretsiz tango deneme dersi. Tango\'yu tanıyın, hiçbir bağlayıcılık yok. Merakınız yeterli, deneyim gerekmez!',
        keywords: [
            'tango deneme dersi',
            'ücretsiz tango dersi',
            'tango denemek',
            'ilk tango dersi',
            'tango başlangıç',
            'tango tanışma dersi',
            'tango istanbul deneme',
        ],
        canonicalUrl: 'https://gamzetango.com/tango-deneme-dersi',
    },

    features: [
        {
            id: 'no-commitment',
            icon: 'Heart',
            title: 'Bağlayıcılık Yok',
            description: 'Tek seferlik deneme fırsatı. Devam edip etmemek tamamen size kalmış.',
        },
        {
            id: 'introduction',
            icon: 'Sparkles',
            title: 'Temel Tanışma',
            description: 'Tango\'nun ne olduğunu, nasıl hissettirdiğini ilk elden deneyimleyin.',
        },
        {
            id: 'no-experience',
            icon: 'Sprout',
            title: 'Deneyim Gerekmez',
            description: 'Hiç dans etmemiş olsanız bile katılabilirsiniz.',
        },
        {
            id: 'questions',
            icon: 'User',
            title: 'Sorularınıza Yanıt',
            description: 'Tango hakkındaki tüm merak ettiklerinizi sorun.',
        },
    ],

    benefits: [
        {
            id: 'risk-free',
            title: 'Risksiz Deneyim',
            description: 'Hiçbir taahhüt olmadan tango\'yu deneme fırsatı. Beğenirseniz devam edersiniz, beğenmezseniz güle güle dersiniz.',
            highlight: 'Kaybedecek bir şey yok',
        },
        {
            id: 'feel-tango',
            title: 'Tango\'yu Hissedin',
            description: 'Videolarda gördükleriniz başka, bizzat yaşamak başka. İlk abrazo\'nuzu (kucaklama) deneyimleyin.',
            highlight: 'Sözcükler yetmez',
        },
        {
            id: 'meet-instructor',
            title: 'Eğitmeninizi Tanıyın',
            description: 'Gamze ile tanışın, öğretim stilini görün. Uyumlu olup olmadığınızı anlayın.',
            highlight: 'Kişisel bağlantı',
        },
    ],

    audiences: [
        {
            id: 'curious',
            title: 'Meraklılar',
            description: 'Tango hakkında merak duyan ama adım atmaya çekinen herkes.',
            icon: 'Sparkles',
        },
        {
            id: 'undecided',
            title: 'Karar Veremeyenler',
            description: 'Dans kursuna başlayıp başlamamaya karar veremeyenler.',
            icon: 'User',
        },
        {
            id: 'returners',
            title: 'Yeniden Başlayanlar',
            description: 'Eskiden dans edip ara verenler, tango\'ya dönmek isteyenler.',
            icon: 'Heart',
        },
    ],

    steps: [
        {
            id: 'contact',
            stepNumber: 1,
            title: 'Randevu Alın',
            description: 'WhatsApp veya telefon ile deneme dersi için randevu oluşturun.',
        },
        {
            id: 'intro',
            stepNumber: 2,
            title: 'Tanışma (10 dk)',
            description: 'Hedeflerinizi, beklentilerinizi ve dans geçmişinizi konuşuyoruz.',
        },
        {
            id: 'basics',
            stepNumber: 3,
            title: 'İlk Adımlar (35 dk)',
            description: 'Duruş, yürüyüş ve abrazo ile ilk tango deneyiminiz.',
        },
        {
            id: 'evaluation',
            stepNumber: 4,
            title: 'Değerlendirme (15 dk)',
            description: 'Devam etmek isterseniz size uygun programı belirleyelim.',
        },
    ],

    faqs: [
        {
            id: 'partner-needed',
            question: 'Deneme dersine partner olmadan gelebilir miyim?',
            answer: 'Evet, kesinlikle! Deneme dersleri genellikle bireysel veya küçük gruplar halinde yapılır. Partner zorunluluğu yoktur.',
        },
        {
            id: 'what-to-wear',
            question: 'Ne giysem iyi olur?',
            answer: 'Rahat hareket edebileceğiniz günlük kıyafetler yeterli. Ayakkabı olarak topuksuz, kaymayan tabanlı bir ayakkabı tercih edin. Özel dans ayakkabısı gerekmez.',
        },
        {
            id: 'duration',
            question: 'Deneme dersi ne kadar sürüyor?',
            answer: 'Deneme dersi yaklaşık 45-60 dakika sürmektedir. Bu süre tanışma, temel bilgiler ve ilk pratik içindir.',
        },
        {
            id: 'obligation',
            question: 'Deneme dersinden sonra kayıt olmak zorunda mıyım?',
            answer: 'Hayır, hiçbir zorunluluk yoktur. Deneme dersi, tango\'yu tanımanız içindir. Devam edip etmemek tamamen size kalmış.',
        },
        {
            id: 'age-limit',
            question: 'Yaş sınırı var mı?',
            answer: 'Tango için yaş sınırı yoktur! 18-70 yaş arası öğrencilerimiz mevcut. Fiziksel bir engel yoksa herkes tango öğrenebilir.',
        },
    ],

    relatedLocations: [
        'silivri-ozel-tango-dersi',
        'kadikoy-ozel-tango-dersi',
        'beyoglu-ozel-tango-dersi',
    ],

    relatedBlogs: [
        'ilk-tango-dersi',
        'tango-nedir',
        'tek-basina-tango-kursuna-gitmek',
    ],

    ctaText: 'Deneme Dersi Al',
    ctaDescription: 'Tango\'yu merak mı ediyorsunuz? İlk adımı atın, gerisini birlikte çözeriz!',

    isActive: true,
};

// =============================================================================
// ALL SERVICES
// =============================================================================

export const ALL_SERVICES: readonly Service[] = [
    LADY_STYLING_SERVICE,
    SILIVRI_DANCE_COURSE_SERVICE,
    SILIVRI_TANGO_COURSE_SERVICE,
    WEDDING_DANCE_SERVICE,
    GRUP_TANGO_DERSI_SERVICE,
    OZEL_TANGO_DERSI_SERVICE,
    CIFT_TANGO_DERSI_SERVICE,
    TANGO_DENEME_DERSI_SERVICE,
] as const;

// Helper to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
    return ALL_SERVICES.find((svc) => svc.slug === slug);
}

// Generate Schema.org Service JSON-LD
export function generateServiceSchema(service: Service): ServiceSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
            '@type': 'Person',
            name: 'Gamze Yıldız',
            url: 'https://gamzetango.com',
        },
        areaServed: {
            '@type': 'City',
            name: 'İstanbul',
        },
        serviceType: 'Dance Lessons',
        url: service.seo.canonicalUrl,
    };
}

// Generate FAQ Schema for rich snippets
export function generateFAQSchema(service: Service): FAQPageSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
