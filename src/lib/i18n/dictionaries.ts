export type Locale = 'tr' | 'en';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    schedule: string;
    faq: string;
    contact: string;
    locations: string;
    silivri: string;
    istanbul: string;
  };
  hero: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    subtitle: string;
    title: string;
    description: string[];
    stats: {
      experience: string;
      students: string;
      events: string;
    };
  };
  philosophy: {
    subtitle: string;
    title: string;
    quote: string;
    description: string;
  };
  services: {
    subtitle: string;
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      features: string[];
    }[];
    cta: string;
  };
  gallery: {
    subtitle: string;
    title: string;
  };
  schedule: {
    subtitle: string;
    title: string;
    description: string;
    classes: {
      day: string;
      time: string;
      level: string;
      location: string;
    }[];
    locations: {
      name: string;
      address: string;
    }[];
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      phone: string;
      email: string;
      location: string;
      phoneLabel: string;
      emailLabel: string;
      locationLabel: string;
    };
    quickContact: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    rights: string;
    madeWith: string;
    quickLinks: string;
    contact: string;
    description: string;
    links: {
      about: string;
      classes: string;
      gallery: string;
      schedule: string;
      contact: string;
    };
  };
  faq: {
    subtitle: string;
    title: string;
    description: string;
    stillHaveQuestions: string;
    contactUs: string;
    categories: {
      name: string;
      items: {
        question: string;
        answer: string;
      }[];
    }[];
  };
  common: {
    explore: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      services: 'Dersler',
      gallery: 'Galeri',
      schedule: 'Takvim',
      faq: 'SSS',
      contact: 'İletişim',
      locations: 'Lokasyonlar',
      silivri: 'Silivri Tango Dersi',
      istanbul: 'İstanbul Tango Kursu',
    },
    hero: {
      subtitle: 'Profesyonel Tango Eğitmeni',
      title: 'Gamze Yıldız',
      titleHighlight: 'Tango',
      description: 'Tangonun büyüleyici dünyasına adım atın. Silivri ve İstanbul\'da profesyonel tango eğitimi ile dans tutkunuzu keşfedin.',
      cta: 'Ders Al',
      ctaSecondary: 'Daha Fazla',
    },
    about: {
      subtitle: 'Hakkımda',
      title: 'Dansın Ritmi, Hayatın Yansıması',
      description: [
        'Tango, sadece bir dans değil; iki ruhun bir araya gelerek yarattığı bir sanat eseridir. Yıllardır bu sanatı öğreniyor, öğretiyor ve her adımda yeniden keşfediyorum.',
        'Buenos Aires\'in ruhunu İstanbul\'a taşıyarak, her seviyeden dans tutkunlarına kapılarımı açıyorum. Amacım sadece adımları öğretmek değil, tangonun duygusunu hissettirmek.',
        'Silivri ve İstanbul\'daki dans okullarında verdiğim eğitimlerle, yüzlerce öğrenciye tangonun büyüsünü aktardım.',
      ],
      stats: {
        experience: 'Yıl Deneyim',
        students: 'Mutlu Öğrenci',
        events: 'Dans Gecesi',
      },
    },
    philosophy: {
      subtitle: 'Felsefem',
      title: 'Her Adımda Bir Hikaye',
      quote: '"Tango, kelimeler olmadan söylenen bir şiirdir."',
      description: 'Tangoda her hareket bir duygunun, her adım bir hikayenin parçasıdır. Ben de bu hikayeleri sizinle paylaşmak, tangonun tutkusunu ve zarafetini her derse taşımak istiyorum.',
    },
    services: {
      subtitle: 'Dersler',
      title: 'Dans Eğitimleri',
      items: [
        {
          id: 'private',
          title: 'Özel Tango Dersleri',
          description: 'Birebir veya çift olarak, kişiye özel hazırlanmış program ile tangonun inceliklerini öğrenin.',
          features: ['Kişiye özel program', 'Esnek saat seçimi', 'Hızlı ilerleme', 'Detaylı geri bildirim'],
        },
        {
          id: 'wedding',
          title: 'Düğün Dansı',
          description: 'Hayatınızın en özel gününde unutulmaz bir dans performansı sergilemek için profesyonel hazırlık.',
          features: ['Şarkı seçimi desteği', 'Koreografi tasarımı', 'Video analizi', 'Genel prova'],
        },
        {
          id: 'lady',
          title: 'Lady Styling',
          description: 'Kadın dansçılara özel solo teknik çalışmaları ve stil geliştirme programı.',
          features: ['Duruş ve zarafet', 'Adorno teknikleri', 'Müzikalite', 'Özgüven geliştirme'],
        },
        {
          id: 'corporate',
          title: 'Kurumsal Workshop',
          description: 'Şirket etkinlikleri ve takım çalışması için özel tasarlanmış grup dans atölyeleri.',
          features: ['Takım bağları güçlendirme', 'Eğlenceli aktivite', 'Her seviyeye uygun', 'Özel program'],
        },
      ],
      cta: 'Detaylı Bilgi Al',
    },
    gallery: {
      subtitle: 'Galeri',
      title: 'Anlardan Kareler',
    },
    schedule: {
      subtitle: 'Takvim',
      title: 'Ders Programı',
      description: 'Silivri, Beyoğlu ve Kadıköy lokasyonlarında düzenlenen haftalık ders programı',
      classes: [
        { day: 'Pazartesi', time: '19:00 - 20:30', level: 'Başlangıç', location: 'Silivri' },
        { day: 'Çarşamba', time: '19:00 - 20:30', level: 'Orta Seviye', location: 'Silivri' },
        { day: 'Perşembe', time: '20:00 - 21:30', level: 'Başlangıç', location: 'Kadıköy' },
        { day: 'Cumartesi', time: '14:00 - 15:30', level: 'Lady Styling', location: 'Kadıköy' },
        { day: 'Cumartesi', time: '16:00 - 17:30', level: 'İleri Seviye', location: 'Kadıköy' },
      ],
      locations: [
        { name: 'Silivri Dans Stüdyosu', address: 'Silivri, İstanbul' },
        { name: 'Beyoğlu Dans Stüdyosu', address: 'Beyoğlu, İstanbul (Avrupa Yakası)' },
        { name: 'Kadıköy Dans Okulu', address: 'Kadıköy, İstanbul (Anadolu Yakası)' },
      ],
    },
    contact: {
      subtitle: 'İletişim',
      title: 'Birlikte Dans Edelim',
      description: 'Tango yolculuğunuza başlamak için benimle iletişime geçin. İlk adımı birlikte atalım.',
      form: {
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        phone: 'Telefon Numaranız',
        message: 'Mesajınız',
        submit: 'Mesaj Gönder',
        success: 'Mesajınız başarıyla gönderildi!',
      },
      info: {
        phone: '+90 506 228 45 07',
        email: 'info@gamzetango.com',
        location: 'Silivri, Beyoğlu & Kadıköy',
        phoneLabel: 'Telefon',
        emailLabel: 'E-posta',
        locationLabel: 'Lokasyon',
      },
      quickContact: {
        title: 'Hızlı İletişim',
        description: 'WhatsApp üzerinden anında mesaj gönderin ve ders hakkında bilgi alın.',
        button: 'WhatsApp ile Ulaşın',
      },
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      madeWith: 'Tüm hislerim saklıdır',
      quickLinks: 'Hızlı Bağlantılar',
      contact: 'İletişim',
      description: 'Tangonun büyüleyici dünyasına adım atın. Silivri ve İstanbul\'da profesyonel tango eğitimi.',
      links: {
        about: 'Hakkımda',
        classes: 'Dersler',
        gallery: 'Galeri',
        schedule: 'Takvim',
        contact: 'İletişim',
      },
    },
    faq: {
      subtitle: 'Sıkça Sorulan Sorular',
      title: 'Merak Ettikleriniz',
      description: 'Tango yolculuğunuza başlamadan önce aklınızdaki tüm soruları yanıtlayalım. Burada bulamadığınız sorular için bizimle iletişime geçmekten çekinmeyin.',
      stillHaveQuestions: 'Aradığınız cevabı bulamadınız mı?',
      contactUs: 'Bizimle iletişime geçin',
      categories: [
        {
          name: 'Başlangıç & İlk Adım',
          items: [
            {
              question: 'Hiç dans deneyimim yok, tango öğrenebilir miyim?',
              answer: 'Kesinlikle evet! Tangoya başlamak için herhangi bir dans geçmişine ihtiyacınız yok. Aslında deneyimsiz başlamak bazen avantaj bile olabilir - çünkü yanlış alışkanlıkları düzeltmek yerine en başından doğru tekniklerle ilerliyoruz. Her öğrenci benzersizdir ve dersleri sizin hızınıza göre ilerleterek, adım adım tangonun temellerini birlikte keşfedeceğiz. En önemli şey merak ve öğrenme isteğidir.'
            },
            {
              question: 'Tango öğrenmek için fiziksel olarak fit olmam gerekiyor mu?',
              answer: 'Tango, her yaştan ve fitness seviyesinden insanın yapabileceği zarif bir danstır. Atletik bir geçmiş gerektirmez. Aksine, tango zamanla vücut farkındalığınızı, dengenizi ve duruşunuzu geliştirir. Özel sağlık durumlarınız varsa (diz, bel sorunları vb.) lütfen ilk dersten önce benimle paylaşın - hareketleri size uygun şekilde adapte edebiliriz. 70\'li yaşlarında tangoya başlayıp yıllarca dans eden öğrencilerim oldu.'
            },
            {
              question: 'Tango öğrenmek ne kadar sürer?',
              answer: 'Bu tamamen hedeflerinize bağlı. İlk 8-12 haftalık düzenli derslerin ardından temel adımları ve müzikaliteyi kavrayarak sosyal dans ortamlarında (milonga) dans etmeye başlayabilirsiniz. Ancak tango bir yolculuktur, varış noktası değil. Yıllar sonra bile öğrenecek yeni şeyler keşfedersiniz - bu tangonun büyüsünün bir parçası. Önemli olan sürekli pratik yapmak ve dans etmekten keyif almaktır.'
            },
            {
              question: 'Dans edemiyorum, iki sol ayağım var diyenler için ne dersiniz?',
              answer: '"İki sol ayak" efsanesi genellikle geçmişte yaşanan kötü bir deneyimden veya özgüven eksikliğinden kaynaklanır. Yılların tecrübesiyle şunu söyleyebilirim: Müzik dinleyebiliyor ve yürüyebiliyorsanız, tango öğrenebilirsiniz. Tango aslında süslü bir yürüyüştür - karmaşık figürler değil, partnerinizle uyum içinde hareket etmektir. Sabırlı ve destekleyici bir ortamda, "dans edemem" diyen birçok öğrencimin nasıl dönüştüğüne tanık oldum.'
            }
          ]
        },
        {
          name: 'Dersler & Eğitim Süreci',
          items: [
            {
              question: 'Özel ders mi yoksa grup dersi mi tercih etmeliyim?',
              answer: 'Her ikisinin de avantajları var ve ideal olan ikisini birleştirmektir.\n\n• Özel dersler: Tamamen size özel tempo, anında geri bildirim, teknik detaylara odaklanma. Özellikle düğün dansı hazırlığı veya belirli teknikleri geliştirmek isteyenler için ideal.\n\n• Grup dersleri: Farklı partnerlerle dans deneyimi, sosyalleşme, daha ekonomik. Farklı vücut tipleri ve dans stilleriyle çalışmak size esneklik kazandırır.\n\nÖnerim: Başlangıçta birkaç özel ders alarak temelleri kavrayın, sonra grup derslerine katılın, ara ara özel derslerle gelişiminizi destekleyin.'
            },
            {
              question: 'Bir ders ne kadar sürüyor?',
              answer: 'Özel dersler 60 dakika, grup dersleri ise 90 dakika sürmektedir. Özel derslerde tam bir saat boyunca birebir çalışırız. Grup derslerinde ise ısınma, teknik çalışma, figür öğrenimi ve pratik zamanı dahildir. İlk deneme dersiniz için özel bir süre ayırıyorum - hem tanışmak hem de dans geçmişinizi ve hedeflerinizi anlayabilmek için.'
            },
            {
              question: 'Derslere ne sıklıkta katılmalıyım?',
              answer: 'Düzenli ilerleme için haftada en az bir ders öneriyorum. Ancak haftada iki ders almanız öğrenme sürecinizi önemli ölçüde hızlandırır - vücut hafızası daha hızlı gelişir ve bir önceki derste öğrendikleriniz taze kalır. Yoğun iş temposu olanlar için esnek programlama yapıyorum. Önemli olan düzenlilik - ayda bir uzun ders yerine, haftada bir kısa ders çok daha etkilidir.'
            },
            {
              question: 'Derslerde hangi seviyeler var?',
              answer: 'Dört temel seviye sunuyorum:\n\n• Başlangıç (0-6 ay): Temel yürüyüş, kucaklama, müzikalite, basit figürler\n• Orta Seviye (6-18 ay): Daha karmaşık figürler, pivotlar, süslemeler, improvizasyon\n• İleri Seviye (18+ ay): Karmaşık kombinasyonlar, sahne figürleri, koreografi\n• Practica: Tüm seviyelerin bir arada pratik yaptığı, serbest dans ortamı\n\nSeviye değerlendirmesi ilk görüşmemizde yapılır ve ilerledikçe esnek geçişler sağlanır.'
            },
            {
              question: 'Dersleri kaçırırsam ne olur? İptal veya erteleme politikanız nedir?',
              answer: 'Hayatın beklenmedik anları olduğunu biliyorum.\n\n• 24 saat öncesine kadar yapılan iptallerde ders hakkınız korunur ve başka bir güne aktarılır.\n• 24 saatten kısa sürede yapılan iptallerde maalesef ders hakkı yanmış sayılır.\n• Paket alımlarında dersler 3 ay içinde kullanılmalıdır.\n• Hastalık veya acil durumlar için esneklik gösteriyorum - lütfen iletişime geçin.\n\nToplu iptal veya uzun süreli ara durumlarında özel çözümler üretebiliriz.'
            }
          ]
        },
        {
          name: 'Partner & Eşleşme',
          items: [
            {
              question: 'Derslere katılmak için bir partnerim olması şart mı?',
              answer: 'Hayır, kesinlikle şart değil! Birçok öğrencim tek başına geliyor ve gayet başarılı oluyor. Grup derslerinde partner rotasyonu yapıyoruz - bu hem farklı dans stilleriyle tanışmanızı sağlar hem de bağımlılık yaratmaz. Özel derslerde ise sizinle birlikte çalışarak her iki rolü de (leader ve follower) öğretiyorum. Ayrıca partner arayan diğer öğrencilerle eşleştirme de yapabiliyorum.'
            },
            {
              question: 'Eşimle/sevgilimle birlikte ders almak istiyoruz, bu mümkün mü?',
              answer: 'Çiftler için özel dersler sunuyorum ve bu çok keyifli bir deneyim! Birlikte öğrenmek, partnerinizle yeni bir bağ kurmanın harika bir yolu. Düğün dansı hazırlıkları için de çiftlere özel program uyguluyorum. Tek ricam: Derste birbirinize değil, bana odaklanın - evde tartışmalar olmaması için her adımı açıkça öğretiyorum. Tango, iletişim ve güven dansıdır - bu beceriler ilişkinize de yansıyacaktır.'
            },
            {
              question: 'Leader ve follower rolleri nedir? Hangisini öğrenmeliyim?',
              answer: 'Tangoda geleneksel olarak leader (yönlendiren) ve follower (takip eden) rolleri vardır. Geleneksel olarak erkekler leader, kadınlar follower olsa da, modern tangoda bu kurallara bağlı kalmak zorunda değilsiniz.\n\nHer iki rolü öğrenmek:\n• Dans anlayışınızı derinleştirir\n• Partnerinizi daha iyi anlamanızı sağlar\n• Dans özgürlüğünüzü artırır\n\nBaşlangıçta bir rolle başlayıp, ilerledikçe diğerini de öğrenmenizi öneririm.'
            }
          ]
        },
        {
          name: 'Pratik Detaylar',
          items: [
            {
              question: 'Derslere ne giymeli, hangi ayakkabıları getirmeliyim?',
              answer: 'Rahat hareket edebileceğiniz kıyafetler yeterli. Dar kot pantolon veya çok dar etek yerine, bacaklarınızı rahatça hareket ettirebileceğiniz giysiler tercih edin.\n\nAyakkabı için:\n• Başlangıçta temiz tabanlı, kaymayan bir ayakkabı yeterli\n• Bayan için 5-7 cm topuklu, kayışlı ayakkabı ideal\n• Erkekler için deri tabanlı, hafif topuklu klasik ayakkabı\n• İlerledikçe tango ayakkabısı öneriyorum - dans deneyiminizi çok değiştirir\n\nİlk derslerinizde mevcut ayakkabılarınızla gelin, doğru ayakkabı seçimi konusunda size rehberlik ederim.'
            },
            {
              question: 'Dersler nerede yapılıyor?',
              answer: 'Üç ana lokasyonda özel ders veriyorum:\n\n📍 Silivri\nSakin, ferah bir stüdyo ortamında, özellikle özel dersler için ideal.\n\n📍 Beyoğlu (Avrupa Yakası)\nMerkezi lokasyon, toplu taşımaya yakın.\n\n📍 Kadıköy (Anadolu Yakası)\nAnadolu yakasında kolay ulaşılabilir lokasyon.\n\nTüm lokasyonlarda ahşap zemin ve kaliteli ses sistemi mevcut. Özel durumlarda ev/ofis ziyaretleri de değerlendirilebilir.'
            },
            {
              question: 'Ödeme seçenekleri nelerdir?',
              answer: 'Esnek ödeme seçenekleri sunuyorum:\n\n• Tek ders: En esnek seçenek, denemek isteyenler için\n• 4 derslik paket: %10 indirimli\n• 8 derslik paket: %15 indirimli\n• 12 derslik paket: %20 indirimli\n\nÖdeme yöntemleri: Nakit, havale/EFT, kredi kartı\n\n🎁 İlk tanışma dersi tamamen ücretsiz! Hiçbir ödeme veya taahhüt yok. Fiyatlar hakkında detaylı bilgi almak için lütfen benimle iletişime geçin.'
            }
          ]
        },
        {
          name: 'Düğün Dansı',
          items: [
            {
              question: 'Düğünümüz için tango öğrenmek istiyoruz, ne kadar süre gerekir?',
              answer: 'Düğün dansı hazırlığı için ideal süre 2-3 aydır (haftada 1-2 ders). Bu sürede:\n\n• Seçtiğiniz şarkıya özel koreografi hazırlarız\n• Temel tango adımlarını öğrenirsiniz\n• Kamera karşısında güzel görünen hareketlere odaklanırız\n• Dans kaygısını yenmeniz için pratik yaparız\n\nDaha kısa süreniz varsa (4-6 hafta) yoğunlaştırılmış program uygulayabiliriz. Şarkı seçiminde de yardımcı oluyorum - tango dışında vals veya diğer dans stilleri de çalışabiliriz.'
            },
            {
              question: 'Düğün dansında tango mı yapmalıyız yoksa başka dans stilleri de var mı?',
              answer: 'Tamamen size ve hayalinizdeki düğüne bağlı! Sunduğum seçenekler:\n\n• Arjantin Tangosu: Dramatik, tutkulu, çok etkileyici\n• Vals: Romantik, klasik, zarif\n• Slow dans / First dance: Daha sade, duygusal\n• Fusion: Farklı stillerin karışımı, modern\n\nŞarkınızı ve düğün konseptinizi dinledikten sonra en uygun stili birlikte seçeriz. Bazen tango girişi + vals finali gibi kombinasyonlar da harika sonuçlar veriyor.'
            }
          ]
        },
        {
          name: 'İleri Seviye & Sosyal Dans',
          items: [
            {
              question: 'Milonga nedir ve ne zaman milongalara katılabilirim?',
              answer: 'Milonga, tango severlerin bir araya gelip sosyal dans ettiği etkinliklerdir - tangonun sosyal kalbidir. 8-12 haftalık düzenli ders sonrası temel adımları öğrendiğinizde milongalara katılabilirsiniz.\n\nMilonga adabı (códigos):\n• Cabeceo ile davet (göz temasıyla dans daveti)\n• Tanda (3-4 şarkılık setler) ve cortina (ara müzik)\n• Dans pistinde akış yönü (saat yönünün tersi)\n\nİlk milonganıza birlikte gideriz - sizi ortama alıştırır ve tanıştırırım. Bu deneyim, neden tango öğrendiğinizi hatırlatacak büyülü bir an olacak.'
            },
            {
              question: 'Tango performansı veya gösteri yapmak istiyorum, mümkün mü?',
              answer: 'Elbette! Sahne tangosu (tango escenario) ayrı bir dal ve bunu da çalışıyoruz. İleri seviye öğrencilerime:\n\n• Koreografi oluşturma\n• Sahne varlığı ve performans teknikleri\n• Kostüm ve müzik seçimi\n• Etkinliklerde gösteri fırsatları\n\nsunuyorum. Yılda birkaç kez öğrenci gösterileri düzenliyoruz. Ayrıca özel etkinlikleriniz (düğün, kutlama vb.) için de koreografi hazırlayabiliriz.'
            }
          ]
        }
      ],
    },
    common: {
      explore: 'Keşfet',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Classes',
      gallery: 'Gallery',
      schedule: 'Schedule',
      faq: 'FAQ',
      contact: 'Contact',
      locations: 'Locations',
      silivri: 'Silivri Tango Lessons',
      istanbul: 'Istanbul Tango Course',
    },
    hero: {
      subtitle: 'Professional Tango Instructor',
      title: 'Gamze Yıldız',
      titleHighlight: 'Tango',
      description: 'Step into the enchanting world of tango. Discover your passion for dance with professional tango training in Silivri and Kadıköy.',
      cta: 'Book a Class',
      ctaSecondary: 'Learn More',
    },
    about: {
      subtitle: 'About Me',
      title: 'The Rhythm of Dance, The Reflection of Life',
      description: [
        'Tango is not just a dance; it is a work of art created by two souls coming together. For years, I have been learning, teaching, and rediscovering this art with every step.',
        'Bringing the spirit of Buenos Aires to Istanbul, I open my doors to dance enthusiasts of all levels. My goal is not just to teach steps, but to make you feel the emotion of tango.',
        'Through my training at dance schools in Silivri and Kadıköy, I have shared the magic of tango with hundreds of students.',
      ],
      stats: {
        experience: 'Years Experience',
        students: 'Happy Students',
        events: 'Dance Nights',
      },
    },
    philosophy: {
      subtitle: 'My Philosophy',
      title: 'A Story in Every Step',
      quote: '"Tango is a poem spoken without words."',
      description: 'In tango, every movement is part of an emotion, every step is part of a story. I want to share these stories with you, bringing the passion and elegance of tango to every class.',
    },
    services: {
      subtitle: 'Classes',
      title: 'Dance Training',
      items: [
        {
          id: 'private',
          title: 'Private Tango Lessons',
          description: 'Learn the intricacies of tango with a personalized program, one-on-one or as a couple.',
          features: ['Personalized program', 'Flexible scheduling', 'Fast progress', 'Detailed feedback'],
        },
        {
          id: 'wedding',
          title: 'Wedding Dance',
          description: 'Professional preparation to perform an unforgettable dance on the most special day of your life.',
          features: ['Song selection support', 'Choreography design', 'Video analysis', 'Dress rehearsal'],
        },
        {
          id: 'lady',
          title: 'Lady Styling',
          description: 'Solo technique work and style development program specially designed for female dancers.',
          features: ['Posture and grace', 'Adorno techniques', 'Musicality', 'Confidence building'],
        },
        {
          id: 'corporate',
          title: 'Corporate Workshop',
          description: 'Group dance workshops specially designed for corporate events and team building.',
          features: ['Team bonding', 'Fun activity', 'Suitable for all levels', 'Custom program'],
        },
      ],
      cta: 'Get Details',
    },
    gallery: {
      subtitle: 'Gallery',
      title: 'Captured Moments',
    },
    schedule: {
      subtitle: 'Schedule',
      title: 'Class Schedule',
      description: 'Weekly class schedule at Silivri, Beyoğlu and Kadıköy locations',
      classes: [
        { day: 'Monday', time: '19:00 - 20:30', level: 'Beginner', location: 'Silivri' },
        { day: 'Wednesday', time: '19:00 - 20:30', level: 'Intermediate', location: 'Silivri' },
        { day: 'Thursday', time: '20:00 - 21:30', level: 'Beginner', location: 'Kadıköy' },
        { day: 'Saturday', time: '14:00 - 15:30', level: 'Lady Styling', location: 'Kadıköy' },
        { day: 'Saturday', time: '16:00 - 17:30', level: 'Advanced', location: 'Kadıköy' },
      ],
      locations: [
        { name: 'Silivri Dance Studio', address: 'Silivri, Istanbul' },
        { name: 'Beyoğlu Dance Studio', address: 'Beyoğlu, Istanbul (European Side)' },
        { name: 'Kadıköy Dance School', address: 'Kadıköy, Istanbul (Asian Side)' },
      ],
    },
    contact: {
      subtitle: 'Contact',
      title: "Let's Dance Together",
      description: 'Get in touch with me to start your tango journey. Let\'s take the first step together.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Your message has been sent successfully!',
      },
      info: {
        phone: '+90 506 228 45 07',
        email: 'info@gamzetango.com',
        location: 'Silivri, Beyoğlu & Kadıköy',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        locationLabel: 'Location',
      },
      quickContact: {
        title: 'Quick Contact',
        description: 'Send us a message on WhatsApp and get information about classes.',
        button: 'Contact via WhatsApp',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'All hearts reserved',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      description: 'Step into the enchanting world of tango. Professional tango training in Silivri and Istanbul.',
      links: {
        about: 'About',
        classes: 'Classes',
        gallery: 'Gallery',
        schedule: 'Schedule',
        contact: 'Contact',
      },
    },
    faq: {
      subtitle: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      description: 'Let us answer all your questions before you start your tango journey. Feel free to contact us for anything not covered here.',
      stillHaveQuestions: 'Couldn\'t find what you\'re looking for?',
      contactUs: 'Get in touch with us',
      categories: [
        {
          name: 'Getting Started',
          items: [
            {
              question: 'I have no dance experience, can I learn tango?',
              answer: 'Absolutely yes! You don\'t need any dance background to start tango. In fact, starting with no experience can be an advantage - we build proper techniques from the ground up instead of correcting old habits. Every student is unique, and we progress at your pace, discovering the fundamentals of tango together step by step. The most important thing is curiosity and a desire to learn.'
            },
            {
              question: 'Do I need to be physically fit to learn tango?',
              answer: 'Tango is an elegant dance that people of all ages and fitness levels can enjoy. It doesn\'t require an athletic background. On the contrary, tango improves your body awareness, balance, and posture over time. If you have any health conditions (knee, back issues, etc.), please share them with me before your first class - we can adapt movements to suit you. I\'ve had students start tango in their 70s and dance for years.'
            },
            {
              question: 'How long does it take to learn tango?',
              answer: 'This entirely depends on your goals. After 8-12 weeks of regular lessons, you\'ll grasp the basic steps and musicality enough to start dancing at social events (milongas). However, tango is a journey, not a destination. Even after years, you\'ll discover new things to learn - that\'s part of tango\'s magic. What matters is consistent practice and enjoying the dance.'
            },
            {
              question: 'What do you say to those who think they have "two left feet"?',
              answer: 'The "two left feet" myth usually stems from a past bad experience or lack of confidence. With years of experience, I can say this: If you can listen to music and walk, you can learn tango. Tango is essentially a fancy walk - it\'s not about complex figures, but moving in harmony with your partner. In a patient and supportive environment, I\'ve witnessed many students who said "I can\'t dance" completely transform.'
            }
          ]
        },
        {
          name: 'Classes & Training',
          items: [
            {
              question: 'Should I choose private lessons or group classes?',
              answer: 'Both have advantages, and ideally you\'d combine them.\n\n• Private lessons: Completely personalized pace, instant feedback, focus on technical details. Ideal for wedding dance preparation or developing specific techniques.\n\n• Group classes: Experience dancing with different partners, socialization, more economical. Working with different body types and dance styles gives you flexibility.\n\nMy recommendation: Start with a few private lessons to grasp the basics, then join group classes, and occasionally support your development with private lessons.'
            },
            {
              question: 'How long is a lesson?',
              answer: 'Private lessons are 60 minutes, while group classes are 90 minutes. In private lessons, we work one-on-one for a full hour. Group classes include warm-up, technical work, figure learning, and practice time. I allocate special time for your first trial lesson - to get to know each other and understand your dance background and goals.'
            },
            {
              question: 'How often should I take lessons?',
              answer: 'For regular progress, I recommend at least one lesson per week. However, taking two lessons per week significantly accelerates your learning - muscle memory develops faster and what you learned in the previous lesson stays fresh. I offer flexible scheduling for those with busy work schedules. Consistency is key - one short lesson per week is much more effective than one long lesson per month.'
            },
            {
              question: 'What levels are available?',
              answer: 'I offer four main levels:\n\n• Beginner (0-6 months): Basic walk, embrace, musicality, simple figures\n• Intermediate (6-18 months): More complex figures, pivots, embellishments, improvisation\n• Advanced (18+ months): Complex combinations, stage figures, choreography\n• Practica: A free practice environment where all levels dance together\n\nLevel assessment is done at our first meeting, with flexible transitions as you progress.'
            },
            {
              question: 'What happens if I miss a class? What\'s your cancellation policy?',
              answer: 'I understand life has unexpected moments.\n\n• Cancellations made up to 24 hours in advance: Your lesson credit is preserved and transferred to another day.\n• Cancellations made with less than 24 hours notice: Unfortunately, the lesson credit is forfeited.\n• Package purchases: Lessons must be used within 3 months.\n• Illness or emergencies: I show flexibility - please get in touch.\n\nFor bulk cancellations or extended breaks, we can work out special solutions.'
            }
          ]
        },
        {
          name: 'Partners & Pairing',
          items: [
            {
              question: 'Do I need a partner to take classes?',
              answer: 'No, absolutely not required! Many of my students come alone and do great. In group classes, we do partner rotation - this helps you experience different dance styles and prevents dependency. In private lessons, I work with you to teach both roles (leader and follower). I can also match you with other students looking for partners.'
            },
            {
              question: 'We want to take lessons together with my spouse/partner, is this possible?',
              answer: 'I offer private lessons for couples, and it\'s a wonderful experience! Learning together is a great way to build a new connection with your partner. I also have a special program for wedding dance preparations. My only request: Focus on me during class, not each other - I teach each step clearly to avoid arguments at home. Tango is a dance of communication and trust - these skills will reflect in your relationship too.'
            },
            {
              question: 'What are leader and follower roles? Which should I learn?',
              answer: 'In tango, there are traditionally leader (the one who guides) and follower (the one who follows) roles. Traditionally men are leaders and women are followers, but in modern tango, you don\'t have to follow these rules.\n\nLearning both roles:\n• Deepens your understanding of the dance\n• Helps you better understand your partner\n• Increases your dance freedom\n\nI recommend starting with one role and learning the other as you progress.'
            }
          ]
        },
        {
          name: 'Practical Details',
          items: [
            {
              question: 'What should I wear and what shoes should I bring?',
              answer: 'Clothes you can move comfortably in are sufficient. Instead of tight jeans or very tight skirts, prefer clothes that allow your legs to move freely.\n\nFor shoes:\n• Initially, clean-soled, non-slip shoes are enough\n• For ladies: 5-7 cm heeled shoes with straps are ideal\n• For men: Leather-soled, slightly heeled classic shoes\n• As you progress, I recommend tango shoes - they transform your dance experience\n\nCome to your first lessons with your current shoes; I\'ll guide you on proper shoe selection.'
            },
            {
              question: 'Where are the lessons held?',
              answer: 'I offer private lessons at three main locations:\n\n📍 Silivri\nA calm, spacious studio environment, ideal especially for private lessons.\n\n📍 Beyoğlu (European Side)\nCentral location, close to public transport.\n\n📍 Kadıköy (Asian Side)\nEasily accessible location on the Asian side.\n\nAll locations have wooden floors and quality sound systems. Home/office visits can be considered for special situations.'
            },
            {
              question: 'What are the payment options?',
              answer: 'I offer flexible payment options:\n\n• Single lesson: Most flexible option, for those who want to try\n• 4-lesson package: 10% discount\n• 8-lesson package: 15% discount\n• 12-lesson package: 20% discount\n\nPayment methods: Cash, bank transfer, credit card\n\n🎁 Your first trial lesson is completely free! No payment or commitment required. Please contact me for detailed pricing information.'
            }
          ]
        },
        {
          name: 'Wedding Dance',
          items: [
            {
              question: 'We want to learn tango for our wedding, how long do we need?',
              answer: 'The ideal time for wedding dance preparation is 2-3 months (1-2 lessons per week). During this time:\n\n• We create choreography specific to your chosen song\n• You learn basic tango steps\n• We focus on moves that look beautiful on camera\n• We practice to overcome dance anxiety\n\nIf you have less time (4-6 weeks), we can apply an intensive program. I also help with song selection - we can work on waltz or other dance styles besides tango.'
            },
            {
              question: 'Should we do tango for our wedding dance or are there other styles?',
              answer: 'It entirely depends on you and your dream wedding! Options I offer:\n\n• Argentine Tango: Dramatic, passionate, very impressive\n• Waltz: Romantic, classic, elegant\n• Slow dance / First dance: Simpler, emotional\n• Fusion: Mix of different styles, modern\n\nAfter listening to your song and wedding concept, we\'ll choose the most suitable style together. Sometimes combinations like a tango opening + waltz finale give amazing results.'
            }
          ]
        },
        {
          name: 'Advanced & Social Dancing',
          items: [
            {
              question: 'What is a milonga and when can I attend one?',
              answer: 'A milonga is an event where tango lovers come together for social dancing - it\'s the social heart of tango. After 8-12 weeks of regular lessons when you\'ve learned the basic steps, you can attend milongas.\n\nMilonga etiquette (códigos):\n• Invitation by cabeceo (eye contact invitation to dance)\n• Tanda (sets of 3-4 songs) and cortina (break music)\n• Flow direction on the dance floor (counter-clockwise)\n\nWe\'ll go to your first milonga together - I\'ll help you adjust to the environment and make introductions. This experience will be a magical moment reminding you why you\'re learning tango.'
            },
            {
              question: 'I want to perform tango on stage, is this possible?',
              answer: 'Of course! Stage tango (tango escenario) is a separate discipline and we work on this too. For my advanced students I offer:\n\n• Creating choreography\n• Stage presence and performance techniques\n• Costume and music selection\n• Performance opportunities at events\n\nWe organize student showcases several times a year. We can also prepare choreography for your special events (weddings, celebrations, etc.).'
            }
          ]
        }
      ],
    },
    common: {
      explore: 'Explore',
    },
  },
};
