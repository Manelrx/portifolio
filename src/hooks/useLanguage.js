"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  lang: 'pt',
  setLang: (lang) => {},
  t: (key) => key,
});

// ═══════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════
const translations = {
  pt: {
    // Nav
    'nav.about': 'Sobre',
    'nav.expertise': 'Especialização',
    'nav.security': 'Segurança',
    'nav.infrastructure': 'Infraestrutura',
    'nav.lab': 'Lab',
    'nav.experience': 'Experiência',
    'nav.certifications': 'Certificações',
    'nav.blog': 'Blog',
    'nav.projects': 'Projetos',
    'nav.menu': 'Menu',

    // Hero
    'hero.title': 'Especialista em Infraestrutura & Segurança da Informação',
    'hero.tagline': 'Protejo infraestruturas. Fortaleço defesas. Automatizo processos.',
    'hero.highlight1': 'Segurança da Informação',
    'hero.highlight2': 'Infraestrutura de TI',
    'hero.highlight3': 'Governança & Compliance',
    'hero.available': 'Disponível para oportunidades',
    'hero.summary': 'Mais de 4 anos protegendo e evoluindo a infraestrutura tecnológica de uma cooperativa financeira regulada pelo Banco Central. Atuo na interseção entre segurança da informação, governança de TI e automação — garantindo que cada camada do ambiente tecnológico esteja segura, documentada e em conformidade.',

    // Stats
    'stats.experience': 'Anos de Experiência',
    'stats.certifications': 'Certificações',
    'stats.courses': 'Cursos Concluídos',
    'stats.badges': 'Badges Profissionais',

    // Sections
    'expertise.title': 'Áreas de Especialização',
    'expertise.subtitle': 'Domínios de atuação que compõem uma visão abrangente e estratégica da gestão de tecnologia',
    'security.title': 'Segurança & Compliance',
    'security.subtitle': 'Proteção de ativos, governança de TI e gestão de riscos tecnológicos',
    'infra.title': 'Infraestrutura & Operações',
    'infra.subtitle': 'Sustentação, operação e resiliência do ambiente tecnológico',
    'management.title': 'Gestão & Estratégia',
    'management.subtitle': 'Gestão de ativos, contratos e inteligência de dados para decisão',
    'automation.title': 'Automação & Laboratório',
    'automation.subtitle': 'Automação de processos, projetos de implantação e stack tecnológica',
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Trajetória e contribuições em segurança e infraestrutura de TI',
    'skills.title': 'Habilidades & Competências',
    'skills.subtitle': 'Domínios técnicos em segurança, infraestrutura, redes e desenvolvimento',
    'education.title': 'Formação Acadêmica',
    'certifications.title': 'Certificações',
    'courses.title': 'Cursos & Treinamentos',
    'badges.title': 'Badges Profissionais',
    'projects.title': 'Projetos Pessoais',
    'projects.subtitle': 'Iniciativas independentes que demonstram capacidade de concepção, desenvolvimento e publicação de soluções completas',

    // Tabs
    'tab.security': 'Segurança',
    'tab.governance': 'Governança',
    'tab.risk': 'Gestão de Riscos',
    'tab.infra': 'Infraestrutura',
    'tab.operations': 'Operações',
    'tab.continuity': 'Continuidade',
    'tab.assets': 'Ativos de TI',
    'tab.contracts': 'Contratos',
    'tab.bi': 'Business Intelligence',
    'tab.automation': 'Automação',
    'tab.techlab': 'Lab Tecnológico',
    'tab.stack': 'Stack',
    'tab.stackIntro': 'Tecnologias e ferramentas que compõem meu arsenal técnico no dia a dia.',

    // CTA
    'cta.title': 'Vamos conversar?',
    'cta.subtitle': 'Estou aberto a novas oportunidades e conexões profissionais.',
    'cta.button': 'Conecte-se no LinkedIn',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.tagline': '// Segurança é prioridade 🔒',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Artigos sobre cibersegurança, boas práticas e tendências em TI',
    'blog.empty': 'Nenhum post encontrado ainda.',
    'blog.emptySub': 'Em breve novos artigos serão publicados aqui.',
    'blog.readMore': 'Ler artigo',
    'blog.back': 'Voltar para o Blog',
    'blog.readTime': 'min de leitura',

    // Projects page
    'projectsPage.title': 'Meus Projetos',
    'projectsPage.subtitle': 'Projetos práticos em segurança, infraestrutura e desenvolvimento',
    'projectsPage.empty': 'Nenhum projeto publicado ainda',
    'projectsPage.emptySub': 'Em breve novos projetos serão compartilhados aqui.',
    'projectsPage.viewDetails': 'Ver detalhes',
    'projectsPage.back': 'Voltar para Projetos',
    'projectsPage.code': 'Código',
    'projectsPage.badge': 'Projetos',

    // Component sections
    'graduation.title': 'Formação Acadêmica',
    'graduation.subtitle': 'Base teórica e prática em Ciência da Computação e Segurança da Informação',
    'certifications.subtitle': 'Credenciais verificáveis que comprovam expertise em segurança',
    'certifications.verify': 'Verificar Certificação',
    'courses.subtitle': 'Aprendizado contínuo em cibersegurança, redes e tecnologia',
    'courses.viewCredential': 'Ver Credencial',
    'courses.certificateAlt': 'Certificado',
    'badges.subtitle': 'Reconhecimentos e validações de competências por organizações líderes',
    'skills.categorySecurity': 'Segurança',
    'skills.categoryNetworks': 'Redes',
    'skills.categoryInfra': 'Infraestrutura',
    'skills.categoryDev': 'Dev/Scripting',
    'skills.categoryTools': 'Ferramentas',
    'profileImage.alt': 'Foto de Perfil',
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.security': 'Security',
    'nav.infrastructure': 'Infrastructure',
    'nav.lab': 'Lab',
    'nav.experience': 'Experience',
    'nav.certifications': 'Certifications',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.menu': 'Menu',

    // Hero
    'hero.title': 'Infrastructure & Information Security Specialist',
    'hero.tagline': 'I protect infrastructures. Strengthen defenses. Automate processes.',
    'hero.highlight1': 'Information Security',
    'hero.highlight2': 'IT Infrastructure',
    'hero.highlight3': 'Governance & Compliance',
    'hero.available': 'Open to opportunities',
    'hero.summary': 'Over 4 years protecting and evolving the technology infrastructure of a financial cooperative regulated by the Central Bank. I work at the intersection of information security, IT governance, and automation — ensuring every layer of the technology environment is secure, documented, and compliant.',

    // Stats
    'stats.experience': 'Years of Experience',
    'stats.certifications': 'Certifications',
    'stats.courses': 'Courses Completed',
    'stats.badges': 'Professional Badges',

    // Sections
    'expertise.title': 'Areas of Expertise',
    'expertise.subtitle': 'Domains that compose a comprehensive and strategic view of technology management',
    'security.title': 'Security & Compliance',
    'security.subtitle': 'Asset protection, IT governance, and technology risk management',
    'infra.title': 'Infrastructure & Operations',
    'infra.subtitle': 'Sustaining, operating, and building resilience in the technology environment',
    'management.title': 'Management & Strategy',
    'management.subtitle': 'Asset management, contracts, and data intelligence for decision-making',
    'automation.title': 'Automation & Lab',
    'automation.subtitle': 'Process automation, deployment projects, and technology stack',
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'Career path and contributions in IT security and infrastructure',
    'skills.title': 'Skills & Competencies',
    'skills.subtitle': 'Technical domains in security, infrastructure, networking, and development',
    'education.title': 'Education',
    'certifications.title': 'Certifications',
    'courses.title': 'Courses & Training',
    'badges.title': 'Professional Badges',
    'projects.title': 'Personal Projects',
    'projects.subtitle': 'Independent initiatives demonstrating end-to-end solution design, development, and delivery',

    // Tabs
    'tab.security': 'Security',
    'tab.governance': 'Governance',
    'tab.risk': 'Risk Management',
    'tab.infra': 'Infrastructure',
    'tab.operations': 'Operations',
    'tab.continuity': 'Continuity',
    'tab.assets': 'IT Assets',
    'tab.contracts': 'Contracts',
    'tab.bi': 'Business Intelligence',
    'tab.automation': 'Automation',
    'tab.techlab': 'Tech Lab',
    'tab.stack': 'Stack',
    'tab.stackIntro': 'Technologies and tools that make up my daily technical arsenal.',

    // CTA
    'cta.title': "Let's connect?",
    'cta.subtitle': "I'm open to new opportunities and professional connections.",
    'cta.button': 'Connect on LinkedIn',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': '// Security is a priority 🔒',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles on cybersecurity, best practices, and IT trends',
    'blog.empty': 'No posts found yet.',
    'blog.emptySub': 'New articles will be published here soon.',
    'blog.readMore': 'Read article',
    'blog.back': 'Back to Blog',
    'blog.readTime': 'min read',

    // Projects page
    'projectsPage.title': 'My Projects',
    'projectsPage.subtitle': 'Hands-on projects in security, infrastructure, and development',
    'projectsPage.empty': 'No projects found yet.',
    'projectsPage.emptySub': 'New projects will be shared here soon.',
    'projectsPage.viewDetails': 'View details',
    'projectsPage.back': 'Back to Projects',
    'projectsPage.code': 'Code',
    'projectsPage.badge': 'Projects',

    // Component sections
    'graduation.title': 'Education',
    'graduation.subtitle': 'Theoretical and practical foundation in Computer Science and Information Security',
    'certifications.subtitle': 'Verifiable credentials demonstrating security expertise',
    'certifications.verify': 'Verify Certification',
    'courses.subtitle': 'Continuous learning in cybersecurity, networking, and technology',
    'courses.viewCredential': 'View Credential',
    'courses.certificateAlt': 'Certificate',
    'badges.subtitle': 'Competency recognitions and validations from leading organizations',
    'skills.categorySecurity': 'Security',
    'skills.categoryNetworks': 'Networks',
    'skills.categoryInfra': 'Infrastructure',
    'skills.categoryDev': 'Dev/Scripting',
    'skills.categoryTools': 'Tools',
    'profileImage.alt': 'Profile Photo',
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['pt']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;
