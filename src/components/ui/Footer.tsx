'use client';

import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container } from './Container';
import { getWhatsAppLink } from '@/lib/utils';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/gamze.tango/', label: 'Instagram' },
];

export function Footer() {
  const { t } = useTranslation();
  const footer = t('footer');
  const contact = t('contact');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-100 border-t border-white/5">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="font-heading text-3xl text-white mb-4">
                Gamze <span className="italic text-gold">Yıldız</span>
              </h3>
              <p className="body-md mb-6 max-w-md">
                {footer.description}
              </p>
              <div className="flex gap-4">
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

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-heading text-xl text-white mb-6">{footer.quickLinks}</h4>
              <ul className="space-y-3">
                {Object.entries(footer.links).map(([key, label]) => (
                  <li key={key}>
                    <a
                      href={`#${key}`}
                      className="text-white/60 hover:text-gold transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-heading text-xl text-white mb-6">{footer.contact}</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={getWhatsAppLink(contact.info.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    <Phone size={18} />
                    <span>{contact.info.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.info.email}`}
                    className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    <Mail size={18} />
                    <span>{contact.info.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{contact.info.location}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a
                href={t('nav').home === 'Ana Sayfa' ? '/gizlilik-politikasi' : '/privacy-policy'}
                className="text-white/40 hover:text-gold transition-colors duration-300"
              >
                {t('nav').home === 'Ana Sayfa' ? 'Gizlilik Politikası' : 'Privacy Policy'}
              </a>
              <a
                href={t('nav').home === 'Ana Sayfa' ? '/kullanim-sartlari' : '/terms-of-use'}
                className="text-white/40 hover:text-gold transition-colors duration-300"
              >
                {t('nav').home === 'Ana Sayfa' ? 'Kullanım Şartları' : 'Terms of Use'}
              </a>
            </div>
            {/* Copyright */}
            <p className="flex items-center gap-2 text-white/40 text-sm">
              © {currentYear} {footer.madeWith} <Heart size={14} className="text-crimson animate-pulse" /> Can
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
