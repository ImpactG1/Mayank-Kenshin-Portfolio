import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-serif italic text-white flex items-center gap-4"
        >
          <span className="text-accent">M</span>
          <span className="tracking-widest uppercase text-2xl font-sans font-light">Mayank Bhuvad</span>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-4 left-0 h-[1px] bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
        Loading Portfolio // {progress}%
      </div>
      
      <div className="absolute bottom-12 left-12 font-jp text-[10px] opacity-20 vertical-rl">
        静寂の中に、真理がある。
      </div>
    </motion.div>
  );
};
