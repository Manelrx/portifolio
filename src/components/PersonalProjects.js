"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const PersonalProjects = ({ items }) => {
  const { t } = useLanguage();

  if (!items || items.length === 0) return null;

  return (
    <section id="personal-projects" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {items.map((project, index) => (
            <motion.div
              key={index}
              className="premium-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors mb-4"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {project.url}
                    </a>
                  )}
                  <p className="text-sm text-foreground/75 leading-relaxed mt-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
