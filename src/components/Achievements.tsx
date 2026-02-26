import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    title: "4x Hackathon Winner",
    org: "National & International",
    icon: Trophy,
    desc: "Won 4 hackathons at national and international levels, building innovative solutions under pressure."
  },
  {
    title: "Top 1000 — Google Hackathon",
    org: "Google",
    icon: Award,
    desc: "Ranked among the Top 1000 participants in the Google Hackathon out of thousands of competitors globally."
  },
  {
    title: "Ideathon Winner",
    org: "College Level",
    icon: Star,
    desc: "Won the Ideathon competition, showcasing innovative thinking and problem-solving abilities."
  },
  {
    title: "Python Coding Champion",
    org: "College Competition",
    icon: BookOpen,
    desc: "Winner of the College Level Python Coding Competition, demonstrating strong programming fundamentals."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="ma-space relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl mb-4">Milestones <span className="italic text-white/40">&</span> Honors</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 glass overflow-hidden"
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <item.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-2 font-serif">{item.title}</h3>
                <div className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-4">{item.org}</div>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-white/10 group-hover:border-accent transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
