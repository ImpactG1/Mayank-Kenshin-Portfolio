import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="ma-space relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-mono text-xs text-accent tracking-[0.5em] uppercase mb-4 block">Connection</span>
            <h2 className="text-5xl md:text-8xl mb-8">Let's <span className="italic text-white/40">Collaborate.</span></h2>
            <p className="text-lg text-white/60 font-light">
              Open to Data Science, AI, and Full-Stack Development opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <a href="mailto:mayankbereal1@gmail.com" className="group cursor-pointer block">
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Electronic Mail</div>
                <div className="text-2xl font-serif group-hover:text-accent transition-colors flex items-center gap-4">
                  mayankbereal1@gmail.com
                  <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </a>

              <div className="flex gap-8">
                {[
                  { icon: Github, label: 'GitHub', url: 'https://github.com/ImpactG1' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/mayank-bhuvad-29b808296' },
                  { icon: Mail, label: 'Email', url: 'mailto:mayankbereal1@gmail.com' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[8px] font-mono tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-white/10 py-4 font-mono text-xs tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-white/10 py-4 font-mono text-xs tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                />
              </div>
              <div className="relative group">
                <textarea 
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-mono text-xs tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none"
                />
              </div>
              <button className="w-full py-6 bg-white text-ink font-mono text-xs tracking-[0.4em] uppercase hover:bg-accent hover:text-white transition-all duration-500">
                Transmit Signal
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Ma */}
      <div className="mt-48 pt-12 border-t border-white/5 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="font-serif italic text-xl">Mayank Bhuvad</div>
        <div className="font-mono text-[8px] tracking-[0.5em] uppercase">
          © 2026 // ALL RIGHTS RESERVED // MUMBAI, INDIA
        </div>
        <div className="flex gap-8 font-mono text-[8px] tracking-widest uppercase">
          <a href="#" className="hover:text-accent">Privacy</a>
          <a href="#" className="hover:text-accent">Terms</a>
        </div>
      </div>
    </section>
  );
};
