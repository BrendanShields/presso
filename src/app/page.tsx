'use client';

import React, { useState } from 'react';
import HeroSection from '@/app/components/HeroSection';
import TimelineIntro from '@/app/components/TimelineIntro';
import Timeline from '@/app/components/InteractiveComponents/Timeline';
import ApplicationsIntro from '@/app/components/ApplicationsIntro/ApplicationsIntro';
import ExperiencesTimeline from '@/app/components/InteractiveComponents/ExperiencesTimeline';
import { motion, AnimatePresence } from 'framer-motion';
import MedicalApplications from '@/app/components/MedicalApplications';
import FinanceImpact from '@/app/components/FinanceImpact';
import EducationWorkplaceImpact from '@/app/components/EducationWorkplaceImpact';
import MurderMysteryExercise from '@/app/components/MurderMysteryExercise';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    { component: HeroSection, name: "Introduction" },
    { component: TimelineIntro, name: "Timeline Overview" },
    { component: Timeline, name: "AI Timeline" },
    { component: ApplicationsIntro, name: "Applications" },
    { component: ExperiencesTimeline, name: "Interactive Experiences" },
    { component: MedicalApplications, name: "Medical Applications" },
    { component: FinanceImpact, name: "Finance and Banking" },
    { component: EducationWorkplaceImpact, name: "Education and Workplace" },
    { component: MurderMysteryExercise, name: "Murder Mystery Exercise" }
  ];

  const handleSectionTransition = (direction: 'up' | 'down') => {
    if (direction === 'down' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'up' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      handleSectionTransition('down');
    } else {
      handleSectionTransition('up');
    }
  };

  const renderSection = (index: number) => {
    const section = sections[index];
    if (index === 2) { // Timeline section
      return <Timeline onLastSlide={handleSectionTransition} />;
    }
    if (index === 4) { // Experiences section (now at index 4)
      return <ExperiencesTimeline onLastSlide={handleSectionTransition} />;
    }
    return React.createElement(section.component);
  };

  return (
    <main 
      className="bg-[#0a0a0a] text-white h-screen overflow-hidden"
      onWheel={handleWheel}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="h-screen"
        >
          {renderSection(currentSection)}
        </motion.div>
      </AnimatePresence>

      {/* Section indicators */}
      <div className="fixed right-8 top-8 flex gap-2">
        {sections.map((section, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${idx === currentSection ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white/40'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={section.name}
          >
            <span className="sr-only">{section.name}</span>
          </motion.button>
        ))}
      </div>
    </main>
  );
}