import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineIntro() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-light tracking-tight"
        >
          Timeline of AI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 tracking-wide max-w-2xl mx-auto"
        >
          From mechanical curiosities to neural networks, explore the fascinating journey of artificial intelligence through history. Each milestone shapes our understanding of what machines can achieve.
        </motion.p>

        {/* Timeline preview */}
        <div className="absolute left-[40%] bottom-0 w-[1px] h-[30vh] bg-white/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8"
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-white/40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 