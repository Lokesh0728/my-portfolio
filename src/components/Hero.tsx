'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { resumeData } from '@/data/resumeData';

export default function Hero() {
  // Stagger arrangement sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  // Luxury slide up and glide expansion
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 16 } 
    }
  };

  // Organic looping pulse for structural background elements
  const luxuryGlow: Variants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      rotate: [0, 45, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md :px-8 lg:px-0 pt-28 pb-20 relative max-w-7xl mx-auto overflow-hidden">
      
      {/* LUXURY AMBIENT BACKGROUND LAYER (High-End Depth Effect) */}
      <motion.div 
        variants={luxuryGlow}
        animate="animate"
        className="absolute top-1/3 left-1/4 -z-10 w-[450px] h-[450px] rounded-full bg-linear-to-tr from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl" 
      />
      <motion.div 
        variants={luxuryGlow}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 -z-10 w-[500px] h-[500px] rounded-full bg-linear-to-br from-amber-400/5 via-rose-500/5 to-transparent blur-3xl" 
      />

      {/* Subtle Matrix-Style Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,var(--background))] -z-10 opacity-70" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full"
      >
        
        {/* LEFT COLUMN: Premium Copy & Interactive CTAs */}
        <div className="lg:col-span-7 text-left space-y-8 order-2 lg:order-1">
          
          {/* Elite Operational Status Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800/80 shadow-xs"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-800 dark:text-zinc-200 tracking-widest uppercase text-[10px]">
              Available for Full-Time Roles & Remote Systems
            </span>
          </motion.div>

          {/* Core Catchy Master Headline */}
          <div className="space-y-4">
            <motion.p 
              variants={itemVariants} 
              className="text-xs font-black tracking-[0.3em] text-indigo-600 dark:text-amber-400 uppercase layer"
            >
              Architecting Premium Web Applications
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-slate-900 dark:text-zinc-50 leading-[1.05]"
            >
              Crafting High-Performance <br />
              <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-pink-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 bg-clip-text text-transparent drop-shadow-xs">
                Full-Stack Architecture
              </span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              className="text-lg sm:text-xl font-medium text-slate-500 dark:text-zinc-400 max-w-lg flex items-center gap-2"
            >
              <Code2 className="w-5 h-5 text-slate-400 shrink-0" />
              <span>Specialized in MERN Ecosystem & Next.js Systems</span>
            </motion.h2>
          </div>

          {/* Polished Copy Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-600 dark:text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed font-normal"
          >
            I transform complex design systems and production concepts into fast, pixel-perfect, and exceptionally interactive client architectures. Let's create scalable digital infrastructure.
          </motion.p>

          {/* Luxury Execution Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a 
              href={resumeData.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-50 transition-all shadow-xl font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Review Repositories
            </a>
            
            <a 
              href={resumeData.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800/80 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all shadow-xs font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              <svg className="w-4 h-4 fill-sky-600 dark:fill-sky-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              Network Presence
            </a>

            <a 
              href={`mailto:${resumeData.email}`}
              className="group flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100/80 dark:bg-zinc-900/40 text-slate-700 dark:text-zinc-300 border border-slate-200/40 dark:border-zinc-800/30 hover:border-indigo-500/20 dark:hover:border-amber-400/20 transition-all font-semibold text-xs uppercase tracking-wider cursor-pointer"
            >
              <Mail className="w-4 h-4 text-rose-500" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Luxury Animated Image Frame & Ambient Ring Glow */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div 
            variants={itemVariants}
            className="relative group w-72 h-72 sm:w-85 sm:h-85"
          >
            {/* Spinning Infinite Active Luxury Inner Ring */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-tr from-indigo-500 via-purple-600 to-amber-400 opacity-70 blur-xs animate-spin [animation-duration:10s] group-hover:scale-102 transition-transform duration-500" />
            
            {/* Soft Outer Ambient Shadow Glow Base */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-r from-indigo-600 to-pink-500 dark:from-amber-400 dark:to-orange-500 opacity-40 blur-2xl group-hover:opacity-60 transition duration-700" />
            
            {/* Core Image Canvas Container */}
            <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-slate-50 dark:bg-zinc-950 border border-white/20 shadow-2xl">
              <Image 
                src="/profile.png" 
                alt={resumeData.name}
                fill
                priority
                sizes="(max-width: 768px) 288px, 340px"
                className="object-cover object-center scale-102 group-hover:scale-106 group-hover:rotate-1 transition-transform duration-700 ease-out grayscale-20 dark:grayscale-10 group-hover:grayscale-0"
              />
            </div>

            {/* Premium Floater Element: Top-Right Sparkle Token */}
            <div className="absolute -top-3 -right-3 bg-white dark:bg-zinc-900 p-2.5 rounded-xl shadow-lg border border-slate-100 dark:border-zinc-800 text-amber-500 animate-bounce [animation-duration:4s]">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>

            {/* Premium Floater Element: Bottom-Left Interactive Tag */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-200/50 dark:border-zinc-800/80 flex items-center gap-3 group-hover:translate-x-1 transition-transform">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 dark:bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 dark:bg-amber-500"></span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-800 dark:text-zinc-200">
                Core Engineer
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors" />
            </div>

          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}