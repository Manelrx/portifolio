"use client";

import React from 'react';
import { LanguageProvider } from '../hooks/useLanguage';

const Providers = ({ children }) => {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
};

export default Providers;
