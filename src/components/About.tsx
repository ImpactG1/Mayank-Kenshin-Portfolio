import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Globe, Layers, Zap } from 'lucide-react';

const skills = [
  { name: 'Python & ML', icon: Cpu, level: 95 },
  { name: 'Full-Stack Web Dev', icon: Layers, level: 90 },
  { name: 'Data Science & Analytics', icon: Database, level: 92 },
  { name: 'NLP & AI Agents', icon: Globe, level: 85 },
  { name: 'React & Next.js', icon: Zap, level: 88 },
];

export const About = () => {
  return (
    <section id="about" className="ma-space relative container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-48 h-48 border border-accent/20 rounded-full animate-pulse" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Transforming Data <br />
              <span className="italic text-accent">into Intelligence.</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-12 max-w-xl">
              Based in Mumbai, I build data-driven solutions and full-stack applications that deliver real-world impact. 
              Skilled in Python, ML, and modern web technologies — with a proven track record of 
              <span className="text-white font-medium">award-winning hackathon projects</span> at national and international levels.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-serif mb-1">4x</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Hackathon Wins</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-1">3+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Internships</div>
              </div>
              <div>
                <div className="text-3xl font-serif mb-1">B.Sc</div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">Data Science</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <skill.icon className="w-5 h-5 text-accent" />
                  <span className="font-mono text-xs tracking-widest uppercase">{skill.name}</span>
                </div>
                <span className="font-mono text-xs opacity-40">{skill.level}%</span>
              </div>
              <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                  className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_10px_rgba(230,57,70,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Kanji */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20vw] font-jp opacity-[0.02] pointer-events-none select-none">
        知能
      </div>
    </section>
  );
};
