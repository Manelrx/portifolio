"use client";

import React from 'react';
import { getPortfolioData } from '../data/portfolioData.js';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, ChevronDown, Shield, Terminal, ArrowRight,
  Eye, Zap, Lock,
  Scale, AlertTriangle, Server, Headphones,
  Monitor, FileText, BarChart3,
  Cog, FlaskConical, Cpu,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

import SplashScreen from '../components/SplashScreen';
import ProfileImage from '../components/ProfileImage';
import StatsCounter from '../components/StatsCounter';
import SectionDivider from '../components/SectionDivider';
import ExpertiseAreas from '../components/ExpertiseAreas';
import ConsolidatedSection from '../components/ConsolidatedSection';
import PersonalProjects from '../components/PersonalProjects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Graduation from '../components/graduation';
import Courses from '../components/Courses';
import Badges from '../components/Badges';
import Certifications from '../components/Certifications';

function HomeContent() {
  const { t, lang } = useLanguage();
  const portfolioData = getPortfolioData(lang);

  // ═══════════════════════════════════════════
  // CONSOLIDATED SECTION CONFIG
  // ═══════════════════════════════════════════

  const securityComplianceTabs = [
    {
      labelKey: 'tab.security',
      icon: Shield,
      intro: portfolioData.securityInfo?.intro,
      categories: portfolioData.securityInfo?.categories,
      categoryIcons: {
        0: Eye,
        1: Zap,
        2: Shield,
        3: Lock,
      },
      categoryColors: {
        0: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        1: "bg-red-500/10 text-red-400 border-red-500/20",
        2: "bg-violet-500/10 text-violet-400 border-violet-500/20",
        3: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      },
    },
    {
      labelKey: 'tab.governance',
      icon: Scale,
      intro: portfolioData.governance?.intro,
      items: portfolioData.governance?.items,
    },
    {
      labelKey: 'tab.risk',
      icon: AlertTriangle,
      intro: portfolioData.riskManagement?.intro,
      items: portfolioData.riskManagement?.items,
    },
  ];

  const infraOperationsTabs = [
    {
      labelKey: 'tab.infra',
      icon: Server,
      intro: portfolioData.infrastructure?.intro,
      items: portfolioData.infrastructure?.items,
    },
    {
      labelKey: 'tab.operations',
      icon: Headphones,
      intro: portfolioData.operations?.intro,
      items: portfolioData.operations?.items,
    },
    {
      labelKey: 'tab.continuity',
      icon: Shield,
      intro: portfolioData.businessContinuity?.intro,
      items: portfolioData.businessContinuity?.items,
    },
  ];

  const managementTabs = [
    {
      labelKey: 'tab.assets',
      icon: Monitor,
      intro: portfolioData.assetManagement?.intro,
      items: portfolioData.assetManagement?.items,
    },
    {
      labelKey: 'tab.contracts',
      icon: FileText,
      intro: portfolioData.contractManagement?.intro,
      items: portfolioData.contractManagement?.items,
    },
    {
      labelKey: 'tab.bi',
      icon: BarChart3,
      intro: portfolioData.businessIntelligence?.intro,
      items: portfolioData.businessIntelligence?.items,
    },
  ];

  const automationLabTabs = [
    {
      labelKey: 'tab.automation',
      icon: Cog,
      intro: portfolioData.automation?.intro,
      items: portfolioData.automation?.items,
    },
    {
      labelKey: 'tab.techlab',
      icon: FlaskConical,
      intro: portfolioData.techLab?.intro,
      projects: portfolioData.techLab?.projects,
    },
    {
      labelKey: 'tab.stack',
      icon: Cpu,
      introKey: 'tab.stackIntro',
      techItems: portfolioData.techStack,
    },
  ];

  const stats = [
    { label: t('stats.experience'), value: 4, suffix: "+" },
    { label: t('stats.certifications'), value: portfolioData.certifications?.length || 1, suffix: "" },
    { label: t('stats.courses'), value: portfolioData.courses?.length || 9, suffix: "+" },
    { label: t('stats.badges'), value: portfolioData.badges?.length || 7, suffix: "" },
  ];

  // Resolve tab labels using translations
  const resolveTabs = (tabs: Array<{ labelKey: string; introKey?: string; intro?: string; [key: string]: unknown }>) => tabs.map(tab => ({
    ...tab,
    label: t(tab.labelKey),
    intro: tab.introKey ? t(tab.introKey) : tab.intro,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">

      {/* ════════ HERO SECTION ════════ */}
      <section className="w-full min-h-screen relative flex items-center justify-center cyber-grid-bg">
        {/* Subtle floating orbs for elegance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/[0.03] blur-[100px] animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-purple/[0.04] blur-[120px]" style={{ animationDelay: '3s', animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-primary/[0.02] blur-[80px]" style={{ animationDelay: '5s', animation: 'float 10s ease-in-out infinite' }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileImage src={portfolioData.profileImage} alt={t('profileImage.alt')} />
            </motion.div>

            {/* Name — larger, more elegant spacing */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 gradient-text tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {portfolioData.name}
            </motion.h1>

            {/* Elegant divider line */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <Terminal className="w-4 h-4 text-primary/50" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </motion.div>

            {/* Title with refined typography */}
            <motion.p
              className="text-base md:text-lg text-foreground/50 font-mono tracking-widest uppercase mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.title')}
            </motion.p>

            {/* Hero Tagline — more dramatic */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t('hero.tagline')}
            </motion.p>

            {/* Hero Highlights — refined pill badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[t('hero.highlight1'), t('hero.highlight2'), t('hero.highlight3')].map((highlight, index) => (
                <span
                  key={index}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-primary/8 text-primary/90 border border-primary/15 backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>

            {/* Status Badge */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="status-badge">
                <span className="pulse-dot" />
                {t('hero.available')}
              </div>
            </motion.div>

            {/* Short Summary — more understated */}
            <motion.p
              id="about"
              className="text-sm md:text-base text-foreground/55 leading-relaxed max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('hero.summary')}
            </motion.p>

            {/* Social Links — more elegant, pill style */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {portfolioData.githubUrl && (
                <a
                  href={portfolioData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground/5 border border-border/30 text-foreground/70 hover:text-foreground hover:bg-foreground/10 hover:border-border/50 transition-all duration-300 text-sm font-medium"
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
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 text-sm font-medium"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <StatsCounter stats={stats} />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-foreground/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ ÁREAS DE ESPECIALIZAÇÃO ════════ */}
      <ExpertiseAreas items={portfolioData.expertiseAreas} />

      <SectionDivider />

      {/* ════════ SEGURANÇA, GOVERNANÇA & RISCOS ════════ */}
      <ConsolidatedSection
        id="security"
        title={t('security.title')}
        subtitle={t('security.subtitle')}
        tabs={resolveTabs(securityComplianceTabs)}
        className="bg-card/20"
      />

      <SectionDivider />

      {/* ════════ INFRAESTRUTURA & OPERAÇÕES ════════ */}
      <ConsolidatedSection
        id="infrastructure"
        title={t('infra.title')}
        subtitle={t('infra.subtitle')}
        tabs={resolveTabs(infraOperationsTabs)}
      />

      <SectionDivider />

      {/* ════════ GESTÃO & ESTRATÉGIA ════════ */}
      <ConsolidatedSection
        id="management"
        title={t('management.title')}
        subtitle={t('management.subtitle')}
        tabs={resolveTabs(managementTabs)}
        className="bg-card/20"
      />

      <SectionDivider />

      {/* ════════ AUTOMAÇÃO & LAB ════════ */}
      <ConsolidatedSection
        id="techlab"
        title={t('automation.title')}
        subtitle={t('automation.subtitle')}
        tabs={resolveTabs(automationLabTabs)}
      />

      <SectionDivider />

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

      <SectionDivider />

      {/* ════════ PROJETOS PESSOAIS ════════ */}
      <PersonalProjects items={portfolioData.personalProjects} />

      {/* ════════ CTA SECTION ════════ */}
      <section className="w-full py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-foreground/50 mb-10 text-base">
              {t('cta.subtitle')}
            </p>
            <a
              href={portfolioData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-medium hover:bg-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5" />
              {t('cta.button')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="w-full border-t border-border/20 bg-card/20">
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
                  <p className="font-bold gradient-text">{portfolioData.name}</p>
                  <p className="text-xs text-muted-foreground">{t('hero.title')}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {portfolioData.githubUrl && (
                  <a
                    href={portfolioData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/10 transition-all"
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
                    className="w-9 h-9 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent mb-6" />

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <p>© {new Date().getFullYear()} {portfolioData.name}. {t('footer.rights')}</p>
              <p className="font-mono text-primary/30">{t('footer.tagline')}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <SplashScreen>
      <HomeContent />
    </SplashScreen>
  );
}
