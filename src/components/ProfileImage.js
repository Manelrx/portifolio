"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated ring */}
        <div className="absolute -inset-2 rounded-full animate-glow-pulse" />
        <div
          className="absolute -inset-1 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--neon-purple)), hsl(var(--primary)))',
            animation: 'spin-slow 8s linear infinite',
            opacity: 0.6,
          }}
        />
        
        {/* Image container */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-background shadow-2xl shadow-primary/20">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 144px, 176px"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
