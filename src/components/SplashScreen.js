"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

// ═══════════════════════════════════════════
// SPLASH SCREEN
// Shows once per session. Starts visible to prevent
// flash of site content before hydration.
// ═══════════════════════════════════════════

const SplashScreen = ({ children }) => {
  // Start TRUE to prevent flash — content is hidden until splash resolves
  const [showSplash, setShowSplash] = useState(true);
  const [phase, setPhase] = useState(0); // 0=waiting, 1=animating, 2=exit
  const [skipSplash, setSkipSplash] = useState(false);
  const initialized = useRef(false);

  // Stable particle data (generated once)
  const particles = useMemo(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: 15 + Math.random() * 70,
      y: 35 + Math.random() * 35,
      size: 1.5 + Math.random() * 2,
      delay: 0.4 + Math.random() * 1.6,
      duration: 1.8 + Math.random() * 1.2,
    })), []
  );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const hasSeenSplash = sessionStorage.getItem('portfolio_splash_seen');

    if (hasSeenSplash) {
      // Already seen — skip immediately, no animation
      setSkipSplash(true);
      setShowSplash(false);
      return;
    }

    // First visit — start animation
    setPhase(1);

    const exitTimer = setTimeout(() => setPhase(2), 3200);
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      sessionStorage.setItem('portfolio_splash_seen', 'true');
    }, 3900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // If already seen, render children immediately with no wrapper overhead
  if (skipSplash) return <>{children}</>;

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(180deg, hsl(222 30% 5%) 0%, hsl(222 25% 8%) 50%, hsl(222 30% 5%) 100%)',
              overflow: 'hidden',
            }}
          >
            {/* ═══ BACKGROUND LAYERS ═══ */}

            {/* Grid pattern — subtle, fades in */}
            {phase >= 1 && (
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(hsl(190 90% 50% / 0.025) 1px, transparent 1px), linear-gradient(90deg, hsl(190 90% 50% / 0.025) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                  maskImage: 'radial-gradient(ellipse 45% 45% at 50% 50%, black 10%, transparent 80%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
            )}

            {/* Primary ambient orb */}
            {phase >= 1 && (
              <motion.div
                style={{
                  position: 'absolute',
                  width: '500px',
                  height: '500px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, hsl(190 90% 50% / 0.05) 0%, transparent 65%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: 'easeOut' }}
              />
            )}

            {/* Secondary accent orb */}
            {phase >= 1 && (
              <motion.div
                style={{
                  position: 'absolute',
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  left: '35%',
                  top: '55%',
                  background: 'radial-gradient(circle, hsl(260 70% 60% / 0.035) 0%, transparent 65%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3, delay: 0.3, ease: 'easeOut' }}
              />
            )}

            {/* Particles */}
            {phase >= 1 && particles.map((p) => (
              <motion.div
                key={p.id}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  background: 'hsl(190 90% 55%)',
                }}
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.5, 0], y: -40, scale: [0.5, 1, 0.2] }}
                transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
              />
            ))}

            {/* Horizontal scanning line */}
            {phase >= 1 && (
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent 10%, hsl(190 90% 50% / 0.2) 50%, transparent 90%)',
                  pointerEvents: 'none',
                }}
                initial={{ top: '25%', opacity: 0 }}
                animate={{ top: '75%', opacity: [0, 0.8, 0.8, 0] }}
                transition={{ duration: 2.8, delay: 0.3, ease: 'easeInOut' }}
              />
            )}

            {/* ═══ CENTER CONTENT ═══ */}

            {/* Shield icon + pulsing ring */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                {/* Outer ring pulse */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-14px',
                    borderRadius: '30px',
                    border: '1px solid hsl(190 90% 50% / 0.12)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Inner ring pulse */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: '-6px',
                    borderRadius: '27px',
                    border: '1px solid hsl(190 90% 50% / 0.08)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />

                <div
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, hsl(190 90% 50% / 0.1), hsl(260 70% 60% / 0.08))',
                    border: '1px solid hsl(190 90% 50% / 0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px hsl(190 90% 50% / 0.1), 0 0 120px hsl(190 90% 50% / 0.04), inset 0 1px 0 hsl(0 0% 100% / 0.03)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <Shield
                    style={{
                      width: '34px',
                      height: '34px',
                      color: 'hsl(190 90% 55%)',
                      filter: 'drop-shadow(0 0 14px hsl(190 90% 50% / 0.35))',
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Name */}
            {phase >= 1 && (
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: '32px',
                  fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, hsl(190 90% 55%) 0%, hsl(210 85% 70%) 50%, hsl(260 70% 65%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Emanuel Araújo
              </motion.h1>
            )}

            {/* Decorative divider */}
            {phase >= 1 && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, hsl(190 90% 50% / 0.35))' }} />
                <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'hsl(190 90% 50% / 0.5)' }} />
                <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, hsl(190 90% 50% / 0.35), transparent)' }} />
              </motion.div>
            )}

            {/* Subtitle */}
            {phase >= 1 && (
              <motion.p
                initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 1.15 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: '14px',
                  fontSize: 'clamp(0.65rem, 1.6vw, 0.85rem)',
                  fontFamily: 'var(--font-mono), monospace',
                  color: 'hsl(210 15% 50%)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                Infrastructure & Security
              </motion.p>
            )}

            {/* Loading indicator — dots + bar */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                {/* Three dots */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        background: 'hsl(190 90% 55%)',
                      }}
                      animate={{
                        opacity: [0.15, 0.8, 0.15],
                        scale: [0.8, 1.3, 0.8],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div style={{
                  width: '120px',
                  height: '1px',
                  borderRadius: '1px',
                  background: 'hsl(222 15% 12%)',
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.4, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, hsl(190 90% 50%), hsl(260 70% 60%))',
                      boxShadow: '0 0 6px hsl(190 90% 50% / 0.3)',
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Exit overlay — smooth radial fade */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  key="exit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    background: 'hsl(222 30% 5%)',
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content — hidden while splash is active */}
      <div
        style={{
          opacity: showSplash ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
          pointerEvents: showSplash ? 'none' : 'auto',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SplashScreen;
