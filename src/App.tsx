import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-ink cursor-none">
      <div className="grain" />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference">
            <div className="font-serif italic text-2xl tracking-tighter text-white">
              M<span className="text-accent">.</span>B
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 w-10 h-10 flex items-center justify-center group"
            >
              <div className="space-y-1.5">
                <motion.div 
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[1px] bg-white group-hover:bg-accent transition-colors" 
                />
                <motion.div 
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-4 h-[1px] bg-white group-hover:bg-accent transition-colors ml-auto" 
                />
                <motion.div 
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[1px] bg-white group-hover:bg-accent transition-colors" 
                />
              </div>
            </button>
          </nav>

          {/* Fullscreen Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-40 bg-ink flex items-center justify-center"
              >
                <div className="absolute top-1/2 left-12 -translate-y-1/2 text-[15vw] font-jp opacity-[0.03] pointer-events-none">
                  メニュー
                </div>
                
                <div className="flex flex-col gap-8 text-center">
                  {['About', 'Achievements', 'Projects', 'Experience', 'Contact'].map((item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-5xl md:text-7xl font-serif hover:text-accent transition-colors group relative"
                    >
                      <span className="relative z-10">{item}</span>
                      <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                        0{i + 1}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main>
            <Hero />
            <About />
            <Achievements />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* SVG Filters for Ink Bleed */}
          <svg className="hidden">
            <defs>
              <filter id="ink-bleed-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
              </filter>
            </defs>
          </svg>
        </motion.div>
      )}
    </div>
  );
}
