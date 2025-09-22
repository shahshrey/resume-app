'use client';

import { motion } from 'framer-motion';

export function GlassBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-24 -left-24 w-56 h-56 bg-indigo-400/10 rounded-full blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-72 h-72 bg-slate-200/5 rounded-full blur-3xl"
        animate={{ x: [0, -28, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-24 left-1/4 w-40 h-40 bg-indigo-300/10 rounded-full blur-2xl"
        animate={{ x: [0, 16, 0], y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute top-2/3 -right-10 w-64 h-64 bg-slate-100/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent" />
    </div>
  );
}
