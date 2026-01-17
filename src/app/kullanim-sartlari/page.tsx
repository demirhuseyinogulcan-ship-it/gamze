import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Şartları',
    description: 'Gamze Tango kullanım şartları ve hizmet koşulları',
};

export default function KullanimSartlariPage() {
    return (
        <main className="min-h-screen bg-midnight pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Kullanım <span className="italic text-gold">Şartları</span>
                    </h1>
                    <p className="text-cream/60">Son güncelleme: Ocak 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none">
                    <div className="rounded-2xl border border-cream/10 bg-charcoal/50 p-8 md:p-12 space-y-8">

                        {/* Giriş */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">1. Genel</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Bu web sitesi Gamze Yıldız (&quot;Gamze Tango&quot;) tarafından işletilmektedir. Web sitemizi
                                kullanarak aşağıdaki kullanım şartlarını kabul etmiş olursunuz. Bu şartları kabul
                                etmiyorsanız, lütfen web sitemizi kullanmayınız.
                            </p>
                        </section>

                        {/* Hizmetler */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">2. Hizmetlerimiz</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Gamze Tango, profesyonel tango eğitimi hizmetleri sunmaktadır:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Özel tango dersleri</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Düğün dansı hazırlığı</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Lady styling eğitimi</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Kurumsal workshop&apos;lar</span>
                                </li>
                            </ul>
                        </section>

                        {/* Ders Rezervasyonu */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">3. Ders Rezervasyonu ve İptal</h2>
                            <div className="space-y-4 text-cream/80">
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Rezervasyon:</strong> Ders rezervasyonları iletişim formu,
                                    telefon veya WhatsApp aracılığıyla yapılabilir. Rezervasyonlar onaylandıktan sonra geçerli olur.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">İptal Politikası:</strong>
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>24 saat öncesine kadar yapılan iptallerde ders hakkı korunur</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>24 saatten kısa sürede iptal edilen derslerde ücret iadesi yapılmaz</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>Paket derslerin 3 ay içinde kullanılması gerekmektedir</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Ödeme */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">4. Ödeme Koşulları</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Ders ücretleri aşağıdaki yöntemlerle ödenebilir:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Nakit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Banka havalesi / EFT</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Kredi kartı</span>
                                </li>
                            </ul>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                Güncel fiyat bilgisi için lütfen bizimle iletişime geçin.
                            </p>
                        </section>

                        {/* Fikri Mülkiyet */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">5. Fikri Mülkiyet Hakları</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Bu web sitesindeki tüm içerikler (metin, görsel, video, logo, tasarım vb.) Gamze Tango&apos;nun
                                mülkiyetindedir ve telif hakları ile korunmaktadır. İçeriklerin izinsiz olarak
                                kopyalanması, dağıtılması veya değiştirilmesi yasaktır.
                            </p>
                        </section>

                        {/* Sorumluluk Reddi */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">6. Sorumluluk Reddi</h2>
                            <div className="space-y-4 text-cream/80">
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Web Sitesi Kullanımı:</strong> Web sitemizdeki bilgiler
                                    genel bilgilendirme amaçlıdır. İçeriklerin doğruluğu için çaba gösterilmekle birlikte,
                                    eksiksiz ve güncel olduğu garanti edilmez.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Dans Eğitimi:</strong> Dans eğitimi fiziksel aktivite içerir.
                                    Derse katılmadan önce herhangi bir sağlık sorununuz varsa (kalp, kas-iskelet sistemi
                                    problemleri vb.) lütfen bizi bilgilendirin. Derslere katılım kendi sorumluluğunuzdadır.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Dış Bağlantılar:</strong> Web sitemizde yer alan üçüncü
                                    taraf web sitelerine verilen bağlantıların içeriklerinden sorumlu değiliz.
                                </p>
                            </div>
                        </section>

                        {/* Davranış Kuralları */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">7. Ders Ortamı Kuralları</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Tüm katılımcıların keyifli bir deneyim yaşaması için:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Derslere zamanında gelinmelidir</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Uygun dans kıyafeti ve temiz ayakkabı giyilmelidir</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Diğer katılımcılara saygılı davranılmalıdır</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Eğitmen talimatlarına uyulmalıdır</span>
                                </li>
                            </ul>
                        </section>

                        {/* Değişiklikler */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">8. Şartlarda Değişiklik</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Bu kullanım şartları önceden haber verilmeksizin güncellenebilir. Değişiklikler
                                bu sayfada yayınlandığı andan itibaren geçerli olacaktır. Web sitemizi kullanmaya
                                devam etmeniz, güncel şartları kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>

                        {/* Uygulanacak Hukuk */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">9. Uygulanacak Hukuk</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir. Herhangi bir
                                uyuşmazlık durumunda İstanbul mahkemeleri ve icra daireleri yetkilidir.
                            </p>
                        </section>

                        {/* İletişim */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">10. İletişim</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Bu kullanım şartları hakkında sorularınız için:
                            </p>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5">
                                <p className="text-cream/80 mb-2"><strong className="text-gold">E-posta:</strong> info@gamzetango.com</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Telefon:</strong> +90 506 228 45 07</p>
                                <p className="text-cream/80"><strong className="text-gold">WhatsApp:</strong> +90 506 228 45 07</p>
                            </div>
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
