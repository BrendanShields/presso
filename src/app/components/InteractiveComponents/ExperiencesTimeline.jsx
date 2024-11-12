'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SoundWaveVizualization from './SoundWaveVizualization.jsx/SoundWave';

export default function ExperiencesTimeline() {
    return (
        <div
            className="h-screen relative overflow-hidden flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: 'url(/path/to/your/hero-background.jpg)' }}
            tabIndex={0}
        >
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full flex flex-col justify-center items-center"
            >
                <div className="container mx-auto px-8 text-center">
                    <div className="mb-8">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-5xl font-bold text-white"
                        >
                            Translating Whale Sounds
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            className="text-xl mt-2 text-white"
                        >
                            Discover how AI is used to translate whale sounds into language, unlocking the mysteries of these majestic creatures' communication.
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-0 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="w-full flex-grow flex items-center justify-center opacity-20" style={{ height: '20vw' }}>
                    <SoundWaveVizualization />
                </div>
            </motion.div>
        </div>
    );
} 