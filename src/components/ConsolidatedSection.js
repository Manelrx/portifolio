"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ConsolidatedSection = ({ id, title, subtitle, tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <section id={id} className={`py-20 md:py-28 w-full ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            const IconComponent = tab.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  group relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? 'bg-primary/15 text-primary border border-primary/30 shadow-lg shadow-primary/10'
                    : 'bg-card/40 text-foreground/60 border border-border/30 hover:text-foreground hover:bg-card/60 hover:border-border/50'
                  }
                `}
              >
                {IconComponent && (
                  <IconComponent className={`w-4 h-4 transition-colors ${isActive ? 'text-primary' : 'text-foreground/40 group-hover:text-foreground/60'}`} />
                )}
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId={`tab-glow-${id}`}
                    className="absolute inset-0 rounded-xl bg-primary/5 border border-primary/20"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.35 }}
            >
              {/* Tab Intro */}
              {tabs[activeTab].intro && (
                <div className="premium-card p-6 md:p-8 mb-6">
                  <p className="text-foreground/80 leading-relaxed text-center">
                    {tabs[activeTab].intro}
                  </p>
                </div>
              )}

              {/* Grid of items */}
              {tabs[activeTab].items && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {tabs[activeTab].items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border/20 hover:border-primary/20 hover:bg-card/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Categories (for security section) */}
              {tabs[activeTab].categories && (
                <div className="grid md:grid-cols-2 gap-4">
                  {tabs[activeTab].categories.map((cat, catIndex) => {
                    const CatIcon = tabs[activeTab].categoryIcons?.[catIndex] || tabs[activeTab].categoryIcons?.[cat.title];
                    const catColor = tabs[activeTab].categoryColors?.[catIndex] || tabs[activeTab].categoryColors?.[cat.title] || 'bg-primary/10 text-primary border-primary/20';
                    return (
                      <motion.div
                        key={catIndex}
                        className="premium-card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {CatIcon && (
                            <div className={`w-10 h-10 rounded-xl border ${catColor} flex items-center justify-center flex-shrink-0`}>
                              <CatIcon className="w-5 h-5" />
                            </div>
                          )}
                          <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                        </div>
                        <ul className="space-y-2.5">
                          {cat.items.map((item, itemIndex) => (
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
              )}

              {/* Projects grid (for tech lab) */}
              {tabs[activeTab].projects && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {tabs[activeTab].projects.map((project, pIndex) => (
                    <motion.div
                      key={pIndex}
                      className="premium-card p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: pIndex * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-base font-semibold text-foreground">{project.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Implantado' || project.status === 'Deployed'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Tech stack grid */}
              {tabs[activeTab].techItems && (
                <div className="flex flex-wrap justify-center gap-3">
                  {tabs[activeTab].techItems.map((tech, tIndex) => (
                    <motion.div
                      key={tIndex}
                      className="px-4 py-2.5 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 hover:bg-card/70 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tIndex * 0.04 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-sm font-medium text-foreground/80 group-hover:text-foreground">{tech.name}</div>
                      <div className="text-xs text-foreground/40 mt-0.5">{tech.category}</div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ConsolidatedSection;
