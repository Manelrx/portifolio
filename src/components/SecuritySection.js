"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Zap, Lock, ChevronRight } from 'lucide-react';

const categoryIcons = {
  "Monitoramento & Detecção": Eye,
  "Resposta & Remediação": Zap,
  "Hardening & Proteção": Shield,
  "Identidade & Acesso": Lock,
};

const categoryColors = {
  "Monitoramento & Detecção": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Resposta & Remediação": "bg-red-500/10 text-red-400 border-red-500/20",
  "Hardening & Proteção": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Identidade & Acesso": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const SecuritySection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="security" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Segurança da Informação</h2>
          <p className="section-subtitle">{data.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {data.categories.map((category, catIndex) => {
            const IconComponent = categoryIcons[category.title] || Shield;
            const colors = categoryColors[category.title] || "bg-primary/10 text-primary border-primary/20";

            return (
              <motion.div
                key={catIndex}
                className="premium-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl border ${colors} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/75">
                      <ChevronRight className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
