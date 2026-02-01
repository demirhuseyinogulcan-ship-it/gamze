'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin, Heart, ChevronRight, BookOpen, Sparkles, Users, Music } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container } from './Container';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, CONTACT } from '@/lib/constants/site';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/gamze.tango/', label: 'Instagram' },
];

// SEO-critical location pages - these create internal links for Google
// Bilingual links - Turkish and English versions
const locationPages = [
  {
    hrefTr: '/istanbul-ozel-tango-dersi',
    hrefEn: '/en/private-tango-lessons-istanbul',
    labelTr: 'İstanbul Özel Tango Dersi',
    labelEn: 'Private Tango Lessons Istanbul',
  },
  {
    hrefTr: '/kadikoy-ozel-tango-dersi',
    hrefEn: '/en/tango-lessons-kadikoy',
    labelTr: 'Kadıköy Özel Tango Dersi',
    labelEn: 'Tango Lessons Kadıköy',
  },
  {
    hrefTr: '/beyoglu-ozel-tango-dersi',
    hrefEn: '/en/tango-lessons-beyoglu',
    labelTr: 'Beyoğlu Özel Tango Dersi',
    labelEn: 'Tango Lessons Beyoğlu',
  },
  {
    hrefTr: '/silivri-ozel-tango-dersi',
    hrefEn: '/en/tango-lessons-silivri',
    labelTr: 'Silivri Özel Tango Dersi',
    labelEn: 'Tango Lessons Silivri',
  },
  {
    hrefTr: '/istanbul-tango-kursu',
    hrefEn: '/en/wedding-dance-istanbul',
    labelTr: 'İstanbul Tango Kursu',
    labelEn: 'Wedding Dance Istanbul',
  },
];

// Service pages with dedicated URLs - SEO critical
const servicePages = [
  {
    hrefTr: '/grup-tango-dersi',
    hrefEn: '/en/group-tango-lessons',
    labelTr: 'Grup Tango Dersi',
    labelEn: 'Group Tango Lessons',
    icon: Users,
  },
  {
    hrefTr: '/ozel-tango-dersi',
    hrefEn: '/en/private-tango-lessons',
    labelTr: 'Özel Tango Dersi',
    labelEn: 'Private Tango Lessons',
    icon: Sparkles,
  },
  {
    hrefTr: '/cift-tango-dersi',
    hrefEn: '/en/couple-tango-lessons',
    labelTr: 'Çift Tango Dersi',
    labelEn: 'Couple Tango Lessons',
    icon: Heart,
  },
  {
    hrefTr: '/tango-deneme-dersi',
    hrefEn: '/en/tango-trial-lesson',
    labelTr: 'Deneme Dersi',
    labelEn: 'Trial Lesson',
    icon: Music,
  },
  {
    hrefTr: '/dugun-dansi',
    hrefEn: '/en/wedding-dance-istanbul',
    labelTr: 'Düğün Dansı Eğitimi',
    labelEn: 'Wedding Dance Training',
    icon: Heart,
  },
  {
    hrefTr: '/lady-styling',
    hrefEn: '/en/lady-styling',
    labelTr: 'Lady Styling',
    labelEn: 'Lady Styling',
    icon: Sparkles,
  },
];

// Blog pillar pages for topical authority - SEO critical
const blogPillarPages = [
  {
    hrefTr: '/blog/tango-rehberi',
    hrefEn: '/en/blog/tango-guide',
    labelTr: 'Tango Rehberi',
    labelEn: 'Tango Guide',
  },
  {
    hrefTr: '/blog/dugun-dansi-tango',
    hrefEn: '/en/blog/wedding-dance-tango',
    labelTr: 'Düğün Dansı Rehberi',
    labelEn: 'Wedding Dance Guide',
  },
  {
    hrefTr: '/blog/lady-styling-rehberi',
    hrefEn: '/en/blog/lady-styling-guide',
    labelTr: 'Lady Styling Rehberi',
    labelEn: 'Lady Styling Guide',
  },
  {
    hrefTr: '/blog/tango-terimleri',
    hrefEn: '/en/blog/tango-terminology',
    labelTr: 'Tango Terimleri',
    labelEn: 'Tango Terminology',
  },
];

// Service-focused links for SEO keyword coverage
const serviceLinks = [
  { labelTr: 'Özel Tango Dersi', labelEn: 'Private Tango Lessons' },
  { labelTr: 'Düğün Dansı Eğitimi', labelEn: 'Wedding Dance Training' },
  { labelTr: 'Lady Styling', labelEn: 'Lady Styling' },
  { labelTr: 'Arjantin Tango', labelEn: 'Argentine Tango' },
  { labelTr: 'Tango Kursu İstanbul', labelEn: 'Tango Course Istanbul' },
  { labelTr: 'Tango Eğitmeni', labelEn: 'Tango Instructor' },
];

export function Footer() {
  const { t } = useTranslation();
  const footer = t('footer');
  const contact = t('contact');
  const isTurkish = t('nav').home === 'Ana Sayfa';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-100 border-t border-white/5">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Brand Column - 4 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <Link href="/" className="inline-block">
                <h3 className="font-heading text-3xl text-white mb-4 hover:text-gold transition-colors">
                  Gamze <span className="italic text-gold">Yıldız</span>
                </h3>
              </Link>
              <p className="body-md mb-6 max-w-sm">
                {footer.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full text-white/70 hover:bg-gold hover:text-midnight transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Column - 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="font-heading text-lg text-white mb-5">{footer.quickLinks}</h4>
              <ul className="space-y-2.5">
                {Object.entries(footer.links).map(([key, label]) => {
                  const href = key === 'blog'
                    ? (isTurkish ? '/blog' : '/en/blog')
                    : `/#${key}`;

                  return (
                    <li key={key}>
                      <Link
                        href={href}
                        className="text-white/60 hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-1 group"
                      >
                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {label as string}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Location Pages Column - 2 cols (SEO CRITICAL) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <h4 className="font-heading text-lg text-white mb-5">
                {isTurkish ? 'Lokasyonlar' : 'Locations'}
              </h4>
              <ul className="space-y-2.5">
                {locationPages.map((location) => {
                  const href = isTurkish ? location.hrefTr : location.hrefEn;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-white/60 hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-1.5 group"
                      >
                        <MapPin size={12} className="text-gold/60 flex-shrink-0" />
                        {isTurkish ? location.labelTr : location.labelEn}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Service/Lesson Pages Column - 2 cols (SEO CRITICAL) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h4 className="font-heading text-lg text-white mb-5">
                {isTurkish ? 'Dersler' : 'Lessons'}
              </h4>
              <ul className="space-y-2.5">
                {servicePages.map((service) => {
                  const href = isTurkish ? service.hrefTr : service.hrefEn;
                  const ServiceIcon = service.icon;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-white/60 hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-1.5 group"
                      >
                        <ServiceIcon size={12} className="text-gold/60 flex-shrink-0" />
                        {isTurkish ? service.labelTr : service.labelEn}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Blog Pillar Pages Column - 2 cols (SEO CRITICAL for Topical Authority) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-2"
            >
              <h4 className="font-heading text-lg text-white mb-5">
                {isTurkish ? 'Rehberler' : 'Guides'}
              </h4>
              <ul className="space-y-2.5">
                {blogPillarPages.map((page) => {
                  const href = isTurkish ? page.hrefTr : page.hrefEn;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-white/60 hover:text-gold transition-colors duration-300 text-sm inline-flex items-center gap-1.5 group"
                      >
                        <BookOpen size={12} className="text-gold/60 flex-shrink-0" />
                        {isTurkish ? page.labelTr : page.labelEn}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={isTurkish ? '/blog' : '/en/blog'}
                    className="text-gold hover:text-gold-light transition-colors duration-300 text-sm inline-flex items-center gap-1.5 group font-medium"
                  >
                    {isTurkish ? 'Tüm Yazılar →' : 'All Posts →'}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Column - 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <h4 className="font-heading text-lg text-white mb-5">{footer.contact}</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONTACT)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    <Phone size={16} className="text-gold/60 flex-shrink-0" />
                    <span>{contact.info.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.info.email}`}
                    className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    <Mail size={16} className="text-gold/60 flex-shrink-0" />
                    <span>{contact.info.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold/60" />
                  <span>{contact.info.location}</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.FOOTER)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                {isTurkish ? 'Ücretsiz Deneme Dersi' : 'Free Trial Lesson'}
                <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* SEO Keyword Footer - Additional keyword coverage */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
            {serviceLinks.map((service, index) => (
              <Link
                key={index}
                href="/#services"
                className="text-white/30 hover:text-gold/60 transition-colors duration-300 text-xs"
              >
                {isTurkish ? service.labelTr : service.labelEn}
              </Link>
            ))}
            <span className="text-white/20 text-xs">•</span>
            <span className="text-white/30 text-xs">Tango İstanbul</span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-white/30 text-xs">{isTurkish ? 'Profesyonel Tango Eğitmeni' : 'Professional Tango Instructor'}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link
                href={isTurkish ? '/gizlilik-politikasi' : '/privacy-policy'}
                className="text-white/40 hover:text-gold transition-colors duration-300"
              >
                {isTurkish ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </Link>
              <Link
                href={isTurkish ? '/kullanim-sartlari' : '/terms-of-use'}
                className="text-white/40 hover:text-gold transition-colors duration-300"
              >
                {isTurkish ? 'Kullanım Şartları' : 'Terms of Use'}
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-white/40 hover:text-gold transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>

            {/* Copyright */}
            <p className="flex items-center gap-2 text-white/40 text-sm">
              © {currentYear} Gamze Tango. {footer.madeWith} <Heart size={14} className="text-crimson animate-pulse" /> Can
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
