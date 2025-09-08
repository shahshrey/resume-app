'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function LoadingTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-loading"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="loading-spinner"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-muted-foreground"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Loading AI Assistant...</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
