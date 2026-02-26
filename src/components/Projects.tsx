import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NEURAL KANJI",
    category: "Generative AI",
    description: "Deep learning model for generating artistic calligraphy based on emotional sentiment analysis.",
    image: "https://picsum.photos/seed/kanji/800/600",
    tags: ["PyTorch", "GANs", "React"]
  },
  {
    title: "SHINOBI VISION",
    category: "Computer Vision",
    description: "Real-time object detection and tracking system optimized for low-latency edge devices.",
    image: "https://picsum.photos/seed/vision/800/600",
    tags: ["YOLOv8", "TensorRT", "C++"]
  },
  {
    title: "ZEN AGENT",
    category: "NLP / LLMs",
    description: "Autonomous AI agent designed for mindful task management and context-aware scheduling.",
    image: "https://picsum.photos/seed/zen/800/600",
    tags: ["LangChain", "OpenAI", "Python"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="ma-space bg-ink/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-mono text-xs text-accent tracking-[0.5em] uppercase mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl">Archive <span className="italic text-white/40">01</span></h2>
          </div>
          <div className="flex gap-4">
            {['All', 'Generative', 'Vision', 'NLP'].map(filter => (
              <button key={filter} className="px-6 py-2 border border-white/10 text-[10px] tracking-widest uppercase hover:border-accent transition-colors">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent transition-colors">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-widest text-accent uppercase">{project.category}</span>
                  <span className="font-serif italic text-white/20">0{index + 1}</span>
                </div>
                <h3 className="text-2xl tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
