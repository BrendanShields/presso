import React from 'react';
import { motion } from 'framer-motion';

const MurderMysteryExercise = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-white text-black transition-colors duration-1000">
            <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
                <h1 className="text-6xl font-light tracking-tight">
                    CLI Murder Mystery Game 🕵️‍♀️
                </h1>
                <div className="text-lg text-black/60 tracking-wide max-w-2xl mx-auto space-y-4">
                    <div>
                        Welcome to The Terminal Detective, a command-line adventure where you solve the murder of Alex Monroe by navigating directories, inspecting files, and gathering clues using basic command-line commands and an AI tool.
                    </div>
                </div>
                <p className="text-lg text-black/60 tracking-wide max-w-2xl mx-auto">
                    Your goal is to identify the murderer by piecing together the information you find. Good luck!
                </p>
                <div className="pt-8">
                    <div className="animate-bounce">
                        <svg
                            className="w-6 h-6 mx-auto text-black/40"
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
                </div>
            </div>
        </div>
    );
};

export default MurderMysteryExercise; 