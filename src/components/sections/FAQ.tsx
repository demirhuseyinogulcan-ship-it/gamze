'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { Container, SectionTitle } from '@/components/ui';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg md:text-xl text-white group-hover:text-gold transition-colors duration-300 pr-8">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 ${
            isOpen ? 'rotate-180 bg-gold/20' : ''
          }`}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const { t } = useTranslation();
  const faq = t('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  const categories = faq.categories;

  // Global index hesaplama
  const getGlobalIndex = (catIndex: number, itemIndex: number): number => {
    let idx = 0;
    for (let i = 0; i < catIndex; i++) {
      idx += categories[i].items.length;
    }
    return idx + itemIndex;
  };

  // Generate FAQPage Schema for SEO - rich snippets in Google
  const faqSchema = useMemo(() => {
    const allFaqs = categories.flatMap(cat => cat.items);
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer.replace(/\n/g, ' ').replace(/•/g, '-'),
        },
      })),
    };
  }, [categories]);

  return (
    <section id="faq" className="section-padding bg-midnight-50 relative overflow-hidden">
      {/* FAQPage Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Background Pattern - pointer-events-none eklendi */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          subtitle={faq.subtitle}
          title={faq.title}
          description={faq.description}
        />

        <div className="mt-12 max-w-4xl mx-auto">
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="mb-12 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-heading text-xl">{catIndex + 1}</span>
                </div>
                <h3 className="font-heading text-2xl text-gold">{category.name}</h3>
              </div>

              {/* Questions */}
              <div className="bg-midnight/50 rounded-sm border border-white/5 px-6 md:px-8">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = getGlobalIndex(catIndex, itemIndex);
                  
                  return (
                    <FAQItem
                      key={`faq-${catIndex}-${itemIndex}`}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === globalIndex}
                      onToggle={() => handleToggle(globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-4">{faq.stillHaveQuestions}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 font-medium"
          >
            {faq.contactUs}
            <span className="text-lg">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
