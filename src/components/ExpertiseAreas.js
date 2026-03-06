"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Server, Shield, Scale, Monitor,
  Cog, AlertTriangle, BarChart3, Headphones
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const iconMap = {
  Server, Shield, Scale, Monitor,
  Cog, AlertTriangle, BarChart3, Headphones,
};

const ExpertiseAreas = ({ items }) => {
  const { t } = useLanguage();

  if (!items || items.length === 0) return null;

  // Color map by icon name (language-independent)
  const colorByIcon = {
    Server: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Shield: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Scale: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Monitor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Cog: "bg-green-500/10 text-green-400 border-green-500/20",
    AlertTriangle: "bg-red-500/10 text-red-400 border-red-500/20",
    BarChart3: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Headphones: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };

  return (
    <section id="expertise" className="py-20 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{t('expertise.title')}</h2>
          <p className="section-subtitle">
            {t('expertise.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {items.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Server;
            const colors = colorByIcon[area.icon] || "bg-primary/10 text-primary border-primary/20";

            return (
              <motion.div
                key={index}
                className="premium-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`w-14 h-14 rounded-2xl border ${colors} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;
