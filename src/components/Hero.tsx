import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js Background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // GSAP Parallax
    gsap.to(particles.position, {
      y: -1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink z-10" />

      <div ref={textRef} className="relative z-20 text-center px-6">
        <div className="mb-4 overflow-hidden">
          <span className="block font-jp text-accent text-lg md:text-xl mb-2 tracking-[0.5em] opacity-80">
            データサイエンティスト
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif mb-8 tracking-tighter leading-none">
          MAYANK <span className="italic text-white/40">BHUVAD</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-60">
          <span>Data Scientist</span>
          <span className="hidden md:inline text-accent">/</span>
          <span>Full-Stack Developer</span>
          <span className="hidden md:inline text-accent">/</span>
          <span>AI Engineer</span>
        </div>

        <div className="mt-16 flex gap-6 justify-center">
          <a href="#projects" className="group relative px-12 py-4 overflow-hidden border border-white/20 transition-all hover:border-accent">
            <span className="relative z-10 font-sans text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors">
              Explore Projects
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </a>
          <a href="https://drive.google.com/file/d/placeholder" target="_blank" rel="noopener noreferrer" className="group relative px-12 py-4 overflow-hidden border border-white/20 transition-all hover:border-accent">
            <span className="relative z-10 font-sans text-xs tracking-[0.3em] uppercase group-hover:text-white transition-colors">
              Download Resume
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]" />
          </a>
        </div>
      </div>

      {/* Ma (Negative Space) Elements */}
      <div className="absolute top-12 left-12 text-vertical font-jp text-[10px] opacity-20 tracking-widest">
        静寂の中に、真理がある。
      </div>
      <div className="absolute bottom-12 right-12 text-vertical font-jp text-[10px] opacity-20 tracking-widest">
        間 — THE SPACE BETWEEN
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-white animate-pulse" />
        <span className="font-mono text-[8px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};
