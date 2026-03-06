"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../hooks/useLanguage';

// Redirects to the correct language version of a blog/project post.
// Convention: English posts have "-en" suffix, Portuguese posts don't.
export function LanguageRedirect({ currentSlug, basePath }) {
  const { lang } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const isEnSlug = currentSlug.endsWith('-en');
    
    if (lang === 'en' && !isEnSlug) {
      // Switch to English version
      router.replace(`${basePath}/${currentSlug}-en`);
    } else if (lang === 'pt' && isEnSlug) {
      // Switch to Portuguese version (remove -en suffix)
      const ptSlug = currentSlug.replace(/-en$/, '');
      router.replace(`${basePath}/${ptSlug}`);
    }
  }, [lang, currentSlug, basePath, router]);

  return null;
}
