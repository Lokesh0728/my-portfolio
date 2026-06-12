'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Phone, ArrowUp, Sparkles } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll reveal variants
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  // Smooth scroll back to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-zinc-800/60 bg-white/30 dark:bg-zinc-950/20 backdrop-blur-md pt-20 pb-10 px-6 md:px-8 lg:px-0 overflow-hidden">
      
      {/* Decorative Luxury Subtle Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[250px] rounded-full bg-gradient-to-t from-indigo-500/5 via-purple-500/0 to-transparent blur-3xl opacity-60 pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={revealVariants}
        className="max-w-7xl mx-auto space-y-16"
      >
        
        {/* UPPER ROW: Master Call-to-Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand/Vision Statement Column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400">
              <Sparkles className="w-2.5 h-2.5 text-amber-500" /> Let's Collaborate
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
              {resumeData.name.split(' ')[0]}.DEV
            </h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Engineering pristine digital infrastructure and responsive client interfaces. Open for full-time opportunities and strategic technical collaborations.
            </p>
          </div>

          {/* Quick Anchor Navigation Links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', href: '#' },
                { name: 'Skills Matrix', href: '#skills' },
                { name: 'Featured Works', href: '#projects' },
                { name: 'Background Journey', href: '#experience' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Pipeline Contact Information Channel Box */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Direct Communication</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${resumeData.email}`}
                  className="inline-flex items-center gap-3 p-2 rounded-xl border border-slate-100 dark:border-zinc-800/50 bg-slate-50/50 dark:bg-zinc-900/30 text-slate-600 dark:text-zinc-400 hover:border-indigo-500/30 dark:hover:border-amber-400/30 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200 text-xs font-medium w-full truncate"
                >
                  <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{resumeData.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${resumeData.phone}`}
                  className="inline-flex items-center gap-3 p-2 rounded-xl border border-slate-100 dark:border-zinc-800/50 bg-slate-50/50 dark:bg-zinc-900/30 text-slate-600 dark:text-zinc-400 hover:border-indigo-500/30 dark:hover:border-amber-400/30 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-200 text-xs font-medium w-full"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{resumeData.phone}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* LOWER ROW: Copyright Safeguards & Brand Vectors */}
        <div className="pt-10 border-t border-slate-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Automatic Copyright String */}
          <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 order-2 sm:order-1 text-center sm:text-left">
            © {currentYear} {resumeData.name}. Crafted with Next.js & Tailwind v4. All Rights Reserved.
          </p>

          {/* Social Links & Floating Top Trigger */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            
            {/* Inline Premium Vector GitHub Icon */}
            <a 
              href={resumeData.github}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-950 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* Inline Premium Vector LinkedIn Icon */}
            <a 
              href={resumeData.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Presence"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* Dedicated Top Trigger Anchor */}
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top of layout"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/40 text-slate-700 dark:text-zinc-300 hover:bg-indigo-600 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>

          </div>
        </div>

      </motion.div>
    </footer>
  );
}