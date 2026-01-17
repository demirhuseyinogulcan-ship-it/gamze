import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası',
    description: 'Gamze Tango gizlilik politikası ve KVKK aydınlatma metni',
};

export default function GizlilikPolitikasiPage() {
    return (
        <main className="min-h-screen bg-midnight pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Gizlilik <span className="italic text-gold">Politikası</span>
                    </h1>
                    <p className="text-cream/60">Son güncelleme: Ocak 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none">
                    <div className="rounded-2xl border border-cream/10 bg-charcoal/50 p-8 md:p-12 space-y-8">

                        {/* Giriş */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">1. Giriş</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Gamze Tango olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu gizlilik politikası,
                                web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını
                                ve korunduğunu açıklamaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                                veri sorumlusu olarak hareket etmekteyiz.
                            </p>
                        </section>

                        {/* İletişim Bilgileri */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">2. Veri Sorumlusu</h2>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5">
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Ad:</strong> Gamze Yıldız</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">E-posta:</strong> info@gamzetango.com</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Telefon:</strong> +90 506 228 45 07</p>
                                <p className="text-cream/80"><strong className="text-gold">Adres:</strong> Silivri, İstanbul / Türkiye</p>
                            </div>
                        </section>

                        {/* Toplanan Veriler */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">3. Toplanan Kişisel Veriler</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Web sitemiz aracılığıyla aşağıdaki kişisel veriler toplanabilmektedir:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Kimlik Bilgileri:</strong> Ad, soyad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Talep Bilgileri:</strong> İletişim formunda iletilen mesaj içeriği</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar (çerez onayınız varsa)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Kullanım Amaçları */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">4. Verilerin Kullanım Amaçları</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Ders taleplerinize yanıt vermek ve iletişim kurmak</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Hizmetlerimiz hakkında bilgilendirme yapmak</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Web sitesi deneyimini iyileştirmek</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Yasal yükümlülükleri yerine getirmek</span>
                                </li>
                            </ul>
                        </section>

                        {/* Çerezler */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">5. Çerez Politikası</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Web sitemizde kullanıcı deneyimini geliştirmek ve site trafiğini analiz etmek için çerezler kullanılmaktadır.
                            </p>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5 space-y-4">
                                <div>
                                    <h4 className="text-gold font-medium mb-1">Zorunlu Çerezler</h4>
                                    <p className="text-cream/70 text-sm">Web sitesinin temel işlevleri için gereklidir (dil tercihi, oturum yönetimi).</p>
                                </div>
                                <div>
                                    <h4 className="text-gold font-medium mb-1">Analiz Çerezleri</h4>
                                    <p className="text-cream/70 text-sm">Google Analytics aracılığıyla ziyaretçi istatistiklerini toplar. Sadece onayınızla aktif olur.</p>
                                </div>
                            </div>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                Çerez tercihlerinizi web sitemizdeki çerez banner&apos;ı aracılığıyla yönetebilirsiniz.
                            </p>
                        </section>

                        {/* Veri Güvenliği */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">6. Veri Güvenliği</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari önlemler alınmaktadır.
                                Web sitemiz SSL (HTTPS) protokolü ile şifrelenmektedir. Verileriniz üçüncü taraflarla
                                pazarlama amacıyla paylaşılmamaktadır.
                            </p>
                        </section>

                        {/* Haklarınız */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                6698 sayılı KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>İşlenmişse buna ilişkin bilgi talep etme</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Kişisel verilerin silinmesini veya yok edilmesini isteme</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhe bir sonucun ortaya çıkmasına itiraz etme</span>
                                </li>
                            </ul>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                Bu haklarınızı kullanmak için <a href="mailto:info@gamzetango.com" className="text-gold hover:underline">info@gamzetango.com</a> adresinden
                                bizimle iletişime geçebilirsiniz.
                            </p>
                        </section>

                        {/* Güncellemeler */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">8. Politika Güncellemeleri</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında
                                web sitemizde duyuru yapılacaktır. Bu sayfayı düzenli olarak kontrol etmenizi öneririz.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-gold hover:underline"
                    >
                        ← Ana Sayfaya Dön
                    </a>
                </div>
            </div>
        </main>
    );
}
