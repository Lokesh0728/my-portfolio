'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { resumeData } from '@/data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track scroll position to change navbar background opacity dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the contact card if the user clicks anywhere outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-zinc-800/50 py-4 shadow-xs' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-0 flex items-center justify-between relative">
        {/* Minimalist Logo/Name */}
        <a 
          href="#" 
          className="text-lg font-black tracking-wider text-slate-950 dark:text-zinc-50 hover:opacity-80 transition-opacity"
        >
          {resumeData.name.split(' ')[0]}.DEV
        </a>

        {/* Center Desktop Navigation Menu Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-amber-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Tools: Houses theme switch & Hire Me dropdown button */}
        <div className="flex items-center gap-4" ref={dropdownRef}>
          <ThemeToggle />
          
          {/* Action Button Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer flex items-center gap-1"
          >
            Hire Me
          </button>

          {/* ANIMATED DROPDOWN CONTACT MODAL CARD */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-6 top-16 w-72 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl space-y-4"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">Let's create something epic!</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Reach out directly through any channel.</p>
                </div>

                <hr className="border-slate-100 dark:border-zinc-800" />

                <div className="space-y-2.5">
                  {/* Email Channel Link */}
                  <a 
                    href={`mailto:${resumeData.email}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800/60 hover:border-indigo-500/30 dark:hover:border-amber-400/30 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Me</p>
                        <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300 truncate max-w-[150px]">{resumeData.email}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-amber-400 transition-colors" />
                  </a>

                  {/* Phone / WhatsApp Channel Link */}
                  <a 
                    href={`tel:${resumeData.phone}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-100 dark:border-zinc-800/60 hover:border-indigo-500/30 dark:hover:border-amber-400/30 group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call / WA</p>
                        <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300">{resumeData.phone}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-amber-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}