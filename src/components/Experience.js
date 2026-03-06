"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Experience = ({ items }) => {
  const { t } = useLanguage();

  if (!items || items.length === 0) return null;

  return (
    <section id="experience" className="py-20 md:py-28 w-full relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-16 md:pl-0 mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot" style={{ top: '1.5rem' }}>
                <div className="absolute inset-0 rounded-full animate-glow-pulse" />
              </div>

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-[calc(50%+2rem)]' : 'md:mr-auto'}`}>
                <div className="premium-card p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      <p className="text-primary text-sm font-medium">{item.company}</p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary/80 border border-primary/20 mb-4">
                    {item.period}
                  </span>

                  {item.description && (
                    <p className="text-foreground/70 text-sm mb-3">{item.description}</p>
                  )}

                  {Array.isArray(item.responsibilities) && item.responsibilities.length > 0 && (
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
