'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle, Button } from '@/components/ui';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/constants/site';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function Contact() {
  const { t } = useTranslation();
  const contact = t('contact');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // E-posta bilgilerini hazırla
    const recipientEmail = contact.info.email;
    const subject = `Tango Dersi Talebi - ${formData.name}`;
    const body = `Merhaba Gamze Hanım,

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone || 'Belirtilmedi'}

Mesaj:
${formData.message}

---
Bu mesaj gamzeyildiztango.com iletişim formundan gönderilmiştir.`;

    // mailto: linkini oluştur
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Kısa bir gecikme ile mail uygulamasını aç
    await new Promise((resolve) => setTimeout(resolve, 500));
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: contact.info.phoneLabel,
      value: contact.info.phone,
      href: getWhatsAppUrl(WHATSAPP_MESSAGES.CONTACT),
    },
    {
      icon: Mail,
      label: contact.info.emailLabel,
      value: contact.info.email,
      href: `mailto:${contact.info.email}`,
    },
    {
      icon: MapPin,
      label: contact.info.locationLabel,
      value: contact.info.location,
      href: 'https://maps.google.com/?q=Silivri,Istanbul',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-midnight relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-gold/30 to-transparent" />
      </div>

      <Container>
        <SectionTitle
          subtitle={contact.subtitle}
          title={contact.title}
          description={contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                    {contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-midnight-50 border border-white/10 rounded-sm text-white placeholder-white/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-midnight-50 border border-white/10 rounded-sm text-white placeholder-white/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 text-sm mb-2">
                  {contact.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-midnight-50 border border-white/10 rounded-sm text-white placeholder-white/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300"
                  placeholder="+90 5XX XXX XX XX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                  {contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-midnight-50 border border-white/10 rounded-sm text-white placeholder-white/40 focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-300 resize-none"
                  placeholder="Mesajınızı yazın..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="flex-1"
                >
                  <Send size={20} />
                  {contact.form.submit}
                </Button>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm"
                >
                  <p className="text-green-400 text-sm">{contact.form.success}</p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-5 p-6 bg-midnight-50 border border-white/5 rounded-sm hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="block text-white/50 text-sm mb-1">{info.label}</span>
                    <span className="text-white group-hover:text-gold transition-colors duration-300">
                      {info.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA - Elegant Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-8 bg-midnight-50 border border-gold/20 rounded-sm overflow-hidden group hover:border-gold/40 transition-all duration-500"
            >
              {/* Decorative Gold Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-2xl text-white">{contact.quickContact.title}</h3>
              </div>
              
              <p className="text-white/60 mb-6 ml-16">
                {contact.quickContact.description}
              </p>
              
              <motion.a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.CONTACT)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 ml-16 px-6 py-3 bg-gold text-midnight font-medium rounded-sm hover:bg-gold-light transition-colors duration-300"
              >
                <MessageCircle size={20} />
                {contact.quickContact.button}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
