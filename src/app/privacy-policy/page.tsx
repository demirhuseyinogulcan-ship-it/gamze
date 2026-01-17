import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Gamze Tango privacy policy and data protection notice',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-midnight pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Privacy <span className="italic text-gold">Policy</span>
                    </h1>
                    <p className="text-cream/60">Last updated: January 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none">
                    <div className="rounded-2xl border border-cream/10 bg-charcoal/50 p-8 md:p-12 space-y-8">

                        {/* Introduction */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">1. Introduction</h2>
                            <p className="text-cream/80 leading-relaxed">
                                At Gamze Tango, we value the security of your personal data. This privacy policy explains
                                what information is collected when you visit our website, how this information is used
                                and protected. We act as a data controller under applicable data protection laws.
                            </p>
                        </section>

                        {/* Contact Info */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">2. Data Controller</h2>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5">
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Name:</strong> Gamze Yıldız</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Email:</strong> info@gamzetango.com</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Phone:</strong> +90 506 228 45 07</p>
                                <p className="text-cream/80"><strong className="text-gold">Address:</strong> Silivri, Istanbul / Turkey</p>
                            </div>
                        </section>

                        {/* Collected Data */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">3. Personal Data Collected</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                The following personal data may be collected through our website:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Identity Information:</strong> Name, surname</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Contact Information:</strong> Phone number, email address</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Request Information:</strong> Message content submitted via contact form</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span><strong>Technical Data:</strong> IP address, browser type, visited pages (with your cookie consent)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Usage Purposes */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">4. Purpose of Data Usage</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Collected personal data is used for the following purposes:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>To respond to your lesson requests and communicate with you</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>To inform you about our services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>To improve website experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>To fulfill legal obligations</span>
                                </li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">5. Cookie Policy</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Our website uses cookies to enhance user experience and analyze site traffic.
                            </p>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5 space-y-4">
                                <div>
                                    <h4 className="text-gold font-medium mb-1">Essential Cookies</h4>
                                    <p className="text-cream/70 text-sm">Required for basic website functionality (language preference, session management).</p>
                                </div>
                                <div>
                                    <h4 className="text-gold font-medium mb-1">Analytics Cookies</h4>
                                    <p className="text-cream/70 text-sm">Collects visitor statistics through Google Analytics. Only active with your consent.</p>
                                </div>
                            </div>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                You can manage your cookie preferences through the cookie banner on our website.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">6. Data Security</h2>
                            <p className="text-cream/80 leading-relaxed">
                                Appropriate technical and administrative measures are taken to ensure the security of your
                                personal data. Our website is encrypted with SSL (HTTPS) protocol. Your data is not
                                shared with third parties for marketing purposes.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">7. Your Rights</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Under applicable data protection laws, you have the following rights:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to know whether your personal data is being processed</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to request information about data processing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to know the purpose of processing and whether it is used accordingly</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to request correction of incomplete or incorrect data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to request deletion or destruction of personal data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Right to object to automated decision-making</span>
                                </li>
                            </ul>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                To exercise these rights, please contact us at <a href="mailto:info@gamzetango.com" className="text-gold hover:underline">info@gamzetango.com</a>.
                            </p>
                        </section>

                        {/* Updates */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">8. Policy Updates</h2>
                            <p className="text-cream/80 leading-relaxed">
                                This privacy policy may be updated from time to time. Important changes will be
                                announced on our website. We recommend checking this page regularly.
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
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
