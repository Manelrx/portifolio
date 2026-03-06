"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <motion.button
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/5 border border-border/30 text-foreground/70 hover:text-foreground hover:bg-foreground/10 hover:border-border/50 transition-all duration-300 text-xs font-medium cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase font-mono tracking-wider">{lang === 'pt' ? 'EN' : 'PT'}</span>
    </motion.button>
  );
};

export default LanguageToggle;
