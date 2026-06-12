'use client';

import { motion, Variants } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Code2, CheckCircle2, Sparkles } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Experience() {
  
  // Section Header reveal animation
  const headerReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Luxury side-slide spring entry for timeline cards
  const timelineCardReveal: Variants = {
    hidden: { opacity: 0, x: -20, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  return (
    <section className="py-12 md:py-24 px-6 md:px-8 lg:px-0 max-w-4xl mx-auto scroll-mt-20 relative" id="experience">
      
      {/* Luxury Subtle Background Lighting */}
      <div className="absolute top-1/2 right-0 -z-10 w-80 h-80 rounded-full bg-linear-to-b from-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* SECTION HEADER WITH SCROLL REVEAL */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerReveal}
        className="text-center max-w-xl mx-auto mb-24 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400">
          <Sparkles className="w-3 h-3 text-indigo-500 dark:text-amber-400" /> Professional Milestones
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-wider text-slate-900 dark:text-zinc-50 leading-tight">
          Journey & <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 bg-clip-text text-transparent">
            Background History
          </span>
        </h2>
      </motion.div>

      {/* THE CENTRAL TIMELINE SECTOR */}
      <div className="relative border-l-2 border-slate-200/80 dark:border-zinc-800/80 ml-4 md:ml-8 space-y-14">
        
        {/* 1. MERN STACK INTERNSHIP BLOCK */}
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={timelineCardReveal}
            className="relative pl-8 md:pl-12"
          >
            {/* Pulsing Active Luxury Timeline Node */}
            <div className="absolute -left-[19px] md:-left-[21px] top-1.5 p-2 rounded-xl bg-indigo-600 text-white dark:bg-amber-400 dark:text-zinc-950 border-4 border-slate-50 dark:border-zinc-950 shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Experience Card with Micro-Hover Dynamics */}
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/60 dark:border-zinc-800/60 shadow-xs hover:shadow-xl hover:border-indigo-500/30 dark:hover:border-amber-400/20 transition-all duration-300 text-left group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-zinc-800/40 shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-amber-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Work Milestones List */}
              <ul className="space-y-3 mt-6 border-t border-slate-100 dark:border-zinc-800/50 pt-4">
                {exp.points.map((point, ptIdx) => (
                  <li key={ptIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}


        {/* 2. NEW ADDITION: KGiSL SPECIALIZATION TIMELINE BLOCK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={timelineCardReveal}
          className="relative pl-8 md:pl-12"
        >
          {/* Custom Dynamic Node */}
          <div className="absolute -left-[19px] md:-left-[21px] top-1.5 p-2 rounded-xl bg-teal-600 text-white dark:bg-emerald-400 dark:text-zinc-950 border-4 border-slate-50 dark:border-zinc-950 shadow-md z-10">
            <Code2 className="w-4 h-4" />
          </div>

          {/* Luxury Course Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/60 dark:border-zinc-800/60 shadow-xs hover:shadow-xl hover:border-teal-500/30 dark:hover:border-emerald-400/20 transition-all duration-300 text-left group">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-teal-600 dark:group-hover:text-emerald-400 transition-colors">
                  Advanced Full-Stack Engineering Certification
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400">KGiSL Institute of Technology</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-zinc-800/40 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-teal-500 dark:text-emerald-400" />
                <span>May 2025 - Dec 2025</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-zinc-400 mt-4 border-t border-slate-100 dark:border-zinc-800/50 pt-4 leading-relaxed">
              Completed an intensive technical residency program focused on advanced software engineering architectures, design patterns, algorithmic optimization, and deployment pipelines.
            </p>
          </div>
        </motion.div>


        {/* 3. ACADEMIC DEGREES BLOCK (B.Sc Computer Science) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={timelineCardReveal}
          className="relative pl-8 md:pl-12"
        >
          {/* Custom Academic Node Accent */}
          <div className="absolute -left-[19px] md:-left-[21px] top-1.5 p-2 rounded-xl bg-purple-600 text-white dark:bg-orange-400 dark:text-zinc-950 border-4 border-slate-50 dark:border-zinc-950 shadow-md z-10">
            <GraduationCap className="w-4 h-4" />
          </div>

          {/* Academic Content Luxury Minimalist Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/60 dark:border-zinc-800/60 shadow-xs hover:shadow-xl hover:border-purple-500/30 dark:hover:border-orange-400/20 transition-all duration-300 text-left group">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-orange-400 transition-colors">
                  B.Sc Computer Science
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-zinc-400">
                  Sri Ramakrishna Mission Vidyalaya College of Arts and Science
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-zinc-800/40 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-purple-500 dark:text-orange-400" />
                <span>2022 - 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}