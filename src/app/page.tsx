"use client";

import React from 'react';
import { portfolioData } from '../data/portfolioData.js';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Shield, Terminal } from 'lucide-react';

import ProfileImage from '../components/ProfileImage';
import ProfessionalSummary from '../components/ProfessionalSummary';
import StatsCounter from '../components/StatsCounter';
import SectionDivider from '../components/SectionDivider';
import Graduation from '../components/graduation';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Courses from '../components/Courses';
import Badges from '../components/Badges';
import Certifications from '../components/Certifications';

// Stats derived from data
const stats = [
  { label: "Anos de Experiência", value: 4, suffix: "+" },
  { label: "Certificações", value: portfolioData.certifications?.length || 1, suffix: "" },
  { label: "Cursos Concluídos", value: portfolioData.courses?.length || 9, suffix: "+" },
  { label: "Badges Profissionais", value: portfolioData.badges?.length || 7, suffix: "" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">

      {/* ════════ HERO SECTION ════════ */}
      <section className="w-full min-h-screen relative flex items-center justify-center cyber-grid-bg">
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileImage src={portfolioData.profileImage} alt="Foto de Perfil" />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {portfolioData.name}
            </motion.h1>

            {/* Title with terminal aesthetic */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Terminal className="w-4 h-4 text-primary/60" />
              <p className="text-lg md:text-xl text-foreground/70 font-mono">
                {portfolioData.title}
              </p>
            </motion.div>

            {/* Professional Summary */}
            <ProfessionalSummary summary={portfolioData.professionalSummary} />

            {/* Social Links */}
            <motion.div
              className="mt-8 flex justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {portfolioData.githubUrl && (
                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/5 border border-border/40 text-foreground/80 hover:text-foreground hover:bg-foreground/10 hover:border-border/60 transition-all duration-300 text-sm font-medium"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {portfolioData.linkedinUrl && (
                <a
                  href={portfolioData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 text-sm font-medium"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StatsCounter stats={stats} />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-foreground/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ EXPERIENCE ════════ */}
      <Experience items={portfolioData.experience} />

      <SectionDivider />

      {/* ════════ SKILLS ════════ */}
      <Skills skills={portfolioData.skills} />

      <SectionDivider />

      {/* ════════ EDUCATION ════════ */}
      <Graduation items={portfolioData.graduation} />

      <SectionDivider />

      {/* ════════ CERTIFICATIONS ════════ */}
      <Certifications items={portfolioData.certifications} />

      <SectionDivider />

      {/* ════════ COURSES ════════ */}
      <Courses items={portfolioData.courses} />

      <SectionDivider />

      {/* ════════ BADGES ════════ */}
      <Badges items={portfolioData.badges} />

      {/* ════════ FOOTER ════════ */}
      <footer className="w-full border-t border-border/30 bg-card/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold gradient-text">Emanuel Araújo</p>
                  <p className="text-xs text-muted-foreground">{portfolioData.title}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {portfolioData.githubUrl && (
                  <a
                    href={portfolioData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {portfolioData.linkedinUrl && (
                  <a
                    href={portfolioData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/30 mb-6" />

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <p>© {new Date().getFullYear()} {portfolioData.name || 'Emanuel Araújo'}. Todos os direitos reservados.</p>
              <p className="font-mono text-primary/40">// Segurança é prioridade &#x1f512;</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
