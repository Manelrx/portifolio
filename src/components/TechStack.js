"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Shield, Briefcase, Cog, Terminal } from 'lucide-react';

const categoryConfig = {
  "Infraestrutura": { icon: Server, color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
  "Segurança": { icon: Shield, color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  "Produtividade": { icon: Briefcase, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  "Automação": { icon: Cog, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  "Desenvolvimento": { icon: Terminal, color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
};

const TechStack = ({ items }) => {
  if (!items || items.length === 0) return null;

  // Group by category
  const grouped = {};
  items.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item.name);
  });

  return (
    <section id="stack" className="py-20 md:py-28 w-full bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Stack Tecnológica</h2>
          <p className="section-subtitle">Tecnologias e ferramentas utilizadas na operação e gestão da infraestrutura</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {Object.entries(grouped).map(([category, techs], catIndex) => {
            const config = categoryConfig[category] || categoryConfig["Infraestrutura"];
            const IconComponent = config.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${config.color.split(' ').slice(0, 2).join(' ')}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default ${config.color} hover:scale-[1.02]`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
