"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, CheckCircle2, Clock } from 'lucide-react';

const statusConfig = {
  "Implantado": { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  "Em implantação": { icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
};

const TechLab = ({ data }) => {
  if (!data) return null;

  return (
    <section id="techlab" className="py-20 md:py-28 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Projetos & Laboratório Tecnológico</h2>
          <p className="section-subtitle">{data.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {data.projects.map((project, index) => {
            const status = statusConfig[project.status] || statusConfig["Implantado"];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={index}
                className="premium-card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${status.bg} ${status.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechLab;
