import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    year: "SEP 2025 - PRES",
    role: "AI & Data Science Intern",
    company: "BrainHap / IIT Bombay",
    desc: "Assisting in AI & data science projects, prototyping ML models and building application-driven solutions. Engineered automation scripts for data preprocessing pipelines, streamlining raw dataset integration.",
    metrics: ["IIT Bombay Collab", "ML Prototyping"]
  },
  {
    year: "MAY 2025 - JUL 2025",
    role: "Web Developer Intern",
    company: "Athrava Group of Institutes",
    desc: "Developed and administered websites including front-end layout, back-end logic, and site architecture. Built core logic for a scalable ad-serving platform and implemented payment gateway integrations.",
    metrics: ["Full-Stack Dev", "Payment Integration"]
  },
  {
    year: "MAY 2024 - JUL 2025",
    role: "Data Analyst Intern",
    company: "Sparks Foundation",
    desc: "Performed data cleaning, preprocessing, and transformation on large datasets. Designed interactive dashboards and automated reporting workflows using Python and SQL.",
    metrics: ["Data Pipelines", "Dashboard Design"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="ma-space bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <span className="font-mono text-xs text-accent tracking-[0.5em] uppercase mb-4 block">Timeline</span>
              <h2 className="text-5xl md:text-7xl mb-8">Career <br /><span className="italic text-white/40">Path.</span></h2>
              <div className="font-jp text-sm opacity-20 leading-loose">
                絶え間ない改善。<br />
                KAIZEN — CONTINUOUS IMPROVEMENT.
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative pl-12 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(230,57,70,0.8)]" />
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl mb-1">{exp.role}</h3>
                    <div className="font-mono text-xs tracking-widest uppercase text-accent">{exp.company}</div>
                  </div>
                  <div className="font-mono text-sm opacity-40">{exp.year}</div>
                </div>

                <p className="text-lg text-white/60 font-light leading-relaxed mb-8 max-w-2xl">
                  {exp.desc}
                </p>

                <div className="flex gap-4">
                  {exp.metrics.map(metric => (
                    <div key={metric} className="px-4 py-2 border border-white/5 bg-white/5 font-mono text-[10px] tracking-widest uppercase">
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
