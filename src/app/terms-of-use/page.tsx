import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use',
    description: 'Gamze Tango terms of use and service conditions',
};

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-midnight pt-24 pb-16">
            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Terms of <span className="italic text-gold">Use</span>
                    </h1>
                    <p className="text-cream/60">Last updated: January 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none">
                    <div className="rounded-2xl border border-cream/10 bg-charcoal/50 p-8 md:p-12 space-y-8">

                        {/* General */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">1. General</h2>
                            <p className="text-cream/80 leading-relaxed">
                                This website is operated by Gamze Yıldız (&quot;Gamze Tango&quot;). By using our website,
                                you agree to the following terms of use. If you do not accept these terms,
                                please do not use our website.
                            </p>
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">2. Our Services</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Gamze Tango offers professional tango training services:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Private tango lessons</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Wedding dance preparation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Lady styling training</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Corporate workshops</span>
                                </li>
                            </ul>
                        </section>

                        {/* Booking */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">3. Lesson Booking and Cancellation</h2>
                            <div className="space-y-4 text-cream/80">
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Booking:</strong> Lesson reservations can be made via
                                    contact form, phone, or WhatsApp. Reservations are valid after confirmation.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Cancellation Policy:</strong>
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>Cancellations made up to 24 hours in advance: lesson credit is preserved</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>Cancellations made less than 24 hours in advance: no refund</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-gold mt-1">•</span>
                                        <span>Package lessons must be used within 3 months</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Payment */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">4. Payment Terms</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                Lesson fees can be paid through the following methods:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Cash</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Bank transfer</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Credit card</span>
                                </li>
                            </ul>
                            <p className="text-cream/80 leading-relaxed mt-4">
                                Please contact us for current pricing information.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">5. Intellectual Property Rights</h2>
                            <p className="text-cream/80 leading-relaxed">
                                All content on this website (text, images, videos, logos, design, etc.) is the property
                                of Gamze Tango and is protected by copyright. Unauthorized copying, distribution,
                                or modification of content is prohibited.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">6. Disclaimer</h2>
                            <div className="space-y-4 text-cream/80">
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Website Usage:</strong> Information on our website is for
                                    general informational purposes. While efforts are made to ensure accuracy,
                                    completeness and timeliness are not guaranteed.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">Dance Training:</strong> Dance training involves physical activity.
                                    If you have any health conditions (heart, musculoskeletal problems, etc.), please
                                    inform us before attending classes. Participation is at your own responsibility.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-gold">External Links:</strong> We are not responsible for the content
                                    of third-party websites linked from our website.
                                </p>
                            </div>
                        </section>

                        {/* Class Rules */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">7. Class Environment Rules</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                For all participants to have an enjoyable experience:
                            </p>
                            <ul className="space-y-2 text-cream/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Arrive on time for classes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Wear appropriate dance attire and clean shoes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Be respectful to other participants</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gold mt-1">•</span>
                                    <span>Follow instructor guidelines</span>
                                </li>
                            </ul>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">8. Changes to Terms</h2>
                            <p className="text-cream/80 leading-relaxed">
                                These terms of use may be updated without prior notice. Changes will be effective
                                from the moment they are published on this page. Continued use of our website
                                means you accept the current terms.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">9. Governing Law</h2>
                            <p className="text-cream/80 leading-relaxed">
                                These terms of use are subject to the laws of the Republic of Turkey. In case of
                                any dispute, Istanbul courts and enforcement offices are authorized.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="font-heading text-2xl text-white mb-4">10. Contact</h2>
                            <p className="text-cream/80 leading-relaxed mb-4">
                                For questions about these terms of use:
                            </p>
                            <div className="bg-midnight/50 rounded-lg p-6 border border-cream/5">
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Email:</strong> info@gamzetango.com</p>
                                <p className="text-cream/80 mb-2"><strong className="text-gold">Phone:</strong> +90 506 228 45 07</p>
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
                        ← Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
