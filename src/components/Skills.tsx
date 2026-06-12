'use client';

import { motion, Variants } from 'framer-motion';
import { Layout, Terminal, Database, Code2, Sparkles } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Skills() {
  // Stagger wrapper for smooth entry sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.05 } 
    }
  };

  // Spring entry configuration for individual grid blocks
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  // Pure Technical Bento Grid Schema — Zero soft skills required
  const bentoItems = [
    {
      title: 'Frontend Architecture',
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      items: resumeData.skills.frontend,
      className: 'md:col-span-2' // Double wide layout box
    },
    {
      title: 'Backend Systems',
      icon: <Terminal className="w-5 h-5 text-emerald-500" />,
      items: resumeData.skills.backend,
      className: 'md:col-span-1' // Square item block
    },
    {
      title: 'Data & Cloud Structures',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      items: resumeData.skills.database,
      className: 'md:col-span-1' // Square item block
    },
    {
      title: 'Core Programming Languages',
      icon: <Code2 className="w-5 h-5 text-sky-500" />,
      items: resumeData.skills.languages,
      className: 'md:col-span-2' // Double wide layout box
    },
    {
      title: 'Libraries & Motion Toolkits',
      icon: <Code2 className="w-5 h-5 text-rose-500" />,
      items: resumeData.skills.libraries,
      className: 'md:col-span-3' // Full footer row block spanning all 3 columns
    }
  ];

  return (
    <section className="py-12 md:py-24 px-6 md:px-8 lg:px-0 max-w-7xl mx-auto scroll-mt-20" id="skills">
      
      {/* Premium Editorial Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400">
          <Sparkles className="w-3 h-3 text-indigo-500 dark:text-amber-400" /> Capabilities Ecosystem
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-wider text-slate-900 dark:text-zinc-50 leading-tight">
          Technical Stack & <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 bg-clip-text text-transparent">
            Core Competencies
          </span>
        </h2>
      </div>

      {/* THE COMPACT LUXURY BENTO GRID GRID SYSTEM */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {bentoItems.map((box, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            className={`p-7 rounded-3xl bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-slate-200/60 dark:border-zinc-800/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${box.className}`}
          >
            <div>
              {/* Header inside bento element */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 group-hover:bg-slate-900 dark:group-hover:bg-zinc-100 group-hover:text-white dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs">
                  {box.icon}
                </div>
                <h3 className="text-base font-bold tracking-tight text-slate-800 dark:text-zinc-100">
                  {box.title}
                </h3>
              </div>

              {/* Minimal Luxury Badges Grid Layout */}
              <div className="flex flex-wrap gap-2">
                {box.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-50/50 dark:bg-zinc-800/20 text-slate-700 dark:text-zinc-300 border border-slate-100 dark:border-zinc-800/40 hover:bg-white dark:hover:bg-zinc-900 hover:text-indigo-600 dark:hover:text-amber-400 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}