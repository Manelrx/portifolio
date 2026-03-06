"use client";

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

// Blog page header — client component for i18n
export function BlogHeader() {
  const { t } = useLanguage();
  
  return (
    <>
      <h1 className="section-title gradient-text mb-4">{t('blog.title')}</h1>
      <p className="section-subtitle">
        {t('blog.subtitle')}
      </p>
    </>
  );
}

export function BlogEmpty() {
  const { t } = useLanguage();
  
  return (
    <>
      <p className="text-foreground/60 text-lg mb-2">{t('blog.empty')}</p>
      <p className="text-foreground/40 text-sm">{t('blog.emptySub')}</p>
    </>
  );
}

export function BlogReadMore() {
  const { t } = useLanguage();
  
  return <>{t('blog.readMore')}</>;
}

export function BlogDateFormatter({ date }) {
  const { lang } = useLanguage();
  
  return (
    <time dateTime={date}>
      {new Date(date).toLocaleDateString(lang === 'en' ? "en-US" : "pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'UTC'
      })}
    </time>
  );
}

// Projects page header — client component for i18n
export function ProjectsHeader() {
  const { t } = useLanguage();
  
  return (
    <>
      <h1 className="section-title gradient-text mb-4">{t('projectsPage.title')}</h1>
      <p className="section-subtitle">
        {t('projectsPage.subtitle')}
      </p>
    </>
  );
}

export function ProjectsBadge() {
  const { t } = useLanguage();
  
  return <>{t('projectsPage.badge')}</>;
}

export function ProjectsEmpty() {
  const { t } = useLanguage();
  
  return (
    <>
      <p className="text-foreground/60 text-lg mb-2">{t('projectsPage.empty')}</p>
      <p className="text-foreground/40 text-sm">{t('projectsPage.emptySub')}</p>
    </>
  );
}

export function ProjectsViewDetails() {
  const { t } = useLanguage();
  
  return <>{t('projectsPage.viewDetails')}</>;
}

export function ProjectsCode() {
  const { t } = useLanguage();
  
  return <>{t('projectsPage.code')}</>;
}

// Shared components for slug pages
export function BackToBlog() {
  const { t } = useLanguage();
  
  return <>{t('blog.back')}</>;
}

export function BackToProjects() {
  const { t } = useLanguage();
  
  return <>{t('projectsPage.back')}</>;
}
