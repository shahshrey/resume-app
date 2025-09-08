'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#talks', label: 'Talks' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-gray-900/80 border-b border-gray-800/50' 
          : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link 
                  href={item.href} 
                  className="relative px-4 py-2 text-gray-400 hover:text-gray-100 transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="ml-4"
            >
              <Link href="/chat" className="inline-block">
                <Button 
                  size="sm"
                  className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 font-medium"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  AI Chat
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <button
            className="md:hidden p-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-gray-100 hover:bg-gray-800 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden mt-4 p-4 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      className="block px-4 py-3 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-gray-700/50 transition-all duration-300 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="pt-3 mt-3 border-t border-gray-700"
                >
                  <Link href="/chat" onClick={() => setIsOpen(false)} className="block">
                    <Button 
                      className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 font-medium"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      AI Chat
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
