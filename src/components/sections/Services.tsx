'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Sparkles, Building2, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle, Button } from '@/components/ui';

const serviceIcons = {
  private: Users,
  wedding: Heart,
  lady: Sparkles,
  corporate: Building2,
};

// Location links for internal linking - boosts SEO
const locationLinks = {
  tr: [
    { name: 'Kadıköy', href: '/kadikoy-ozel-tango-dersi' },
    { name: 'Beyoğlu', href: '/beyoglu-ozel-tango-dersi' },
    { name: 'Silivri', href: '/silivri-ozel-tango-dersi' },
    { name: 'İstanbul', href: '/istanbul-ozel-tango-dersi' },
  ],
  en: [
    { name: 'Kadıköy', href: '/en/tango-lessons-kadikoy' },
    { name: 'Beyoğlu', href: '/en/tango-lessons-beyoglu' },
    { name: 'Silivri', href: '/en/tango-lessons-silivri' },
    { name: 'Istanbul', href: '/en/private-tango-lessons-istanbul' },
  ],
};

export function Services() {
  const { t, locale } = useTranslation();
  const services = t('services');
  const locations = locationLinks[locale] || locationLinks.tr;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-midnight-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <Container>
        <SectionTitle
          subtitle={services.subtitle}
          title={services.title}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-midnight p-8 md:p-10 rounded-sm border border-white/5 hover:border-gold/30 transition-all duration-500 card-hover"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 flex items-center justify-center bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-colors duration-300"
                >
                  <Icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-2xl md:text-3xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="body-md mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  onClick={scrollToContact}
                  className="group/btn"
                >
                  {services.cta}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Hover Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold/30" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Location Links Section - Internal Linking for SEO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <h3 className="font-heading text-xl text-white">
              {locale === 'en' ? 'Our Locations' : 'Lokasyonlarımız'}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="px-6 py-3 bg-midnight border border-white/10 rounded-sm text-white/80 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
