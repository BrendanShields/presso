import React from 'react';
import { motion } from 'framer-motion';

export default function ApplicationsIntro() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-light tracking-tight"
        >
          Real World Applications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 tracking-wide max-w-2xl mx-auto"
        >
          From healthcare to autonomous vehicles, AI is transforming industries and reshaping our daily lives.
          Discover how machine learning and artificial intelligence are solving complex problems and creating
          new possibilities across different sectors.
        </motion.p>

        {/* Lightbulb hanging from the ceiling */}
        <div className="absolute left-1/2 top-0 w-[1px] h-[30vh] bg-white/20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 transform rotate-180 warm-glow"
            >
              <path
                d="M9 21h6v-1H9v1z"
                fill="#FFD700" // Base of the bulb
              />
              <path
                d="M12 2C8.48 2 5 5.48 5 10c0 2.53 1.19 4.78 3 6.22V19h8v-2.78c1.81-1.44 3-3.69 3-6.22 0-4.52-3.48-8-8-8z"
                fill="#FFFACD" // Bulb glass
              />
              <path
                d="M12 16c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z"
                fill="#FFD700" // Filament
              />
              <path
                d="M12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                fill="#FFA500" // Inner glow
              />
            </svg>
          </motion.div>
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

      <style jsx>{`
        .warm-glow {
          filter: drop-shadow(0 0 10px rgba(255, 165, 0, 0.8));
          animation: flicker 1.5s infinite alternate;
        }

        .text-center {
          text-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
        }

        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            opacity: 1;
          }
          20%, 24%, 55% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
} 