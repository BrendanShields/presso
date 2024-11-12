'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mechanicalTurk from '../../assets/mechanical-turk.jpg';

const events = [
  {
    year: 1770,
    event: "The Mechanical Turk",
    description: "Wolfgang von Kempelen creates 'The Turk', a fake chess-playing automaton that amazed audiences including Napoleon Bonaparte and Benjamin Franklin. It was actually operated by a human chess master hidden inside - perhaps the first example of 'artificial' intelligence being neither artificial nor intelligent!",
    image: mechanicalTurk// Historical illustration of the Mechanical Turk
  },
  {
    year: 1962,
    event: "Meet Rosie the Robot",
    description: "The Jetsons debuts on TV, featuring Rosie the Robot Maid - setting unrealistic expectations for both AI and household cleaning for generations to come. Still waiting for a robot that can fold laundry as well as Rosie!",
    image: "/images/rosie-robot.jpg" // Rosie from The Jetsons
  },
  {
    year: 1950,
    event: "The Turing Test",
    description: "Alan Turing publishes 'Computing Machinery and Intelligence', proposing what becomes known as the Turing Test. The test evaluates a machine's ability to exhibit intelligent behavior indistinguishable from a human.",
    image: "/images/turing-test.jpg" // Illustration of the Turing Test concept
  },
  {
    year: 1956,
    event: "Birth of AI",
    description: "The Dartmouth Summer Research Project on Artificial Intelligence coins the term 'Artificial Intelligence'. The attendees become the founders and leaders of AI research for the next decades.",
    image: "/images/dartmouth-conference.jpg" // Historical photo of the Dartmouth conference
  },
  {
    year: 1964,
    event: "ELIZA Says Hello",
    description: "Joseph Weizenbaum creates ELIZA, the first chatbot. She works as a virtual therapist using simple pattern matching and substitution, proving that sometimes just repeating what humans say back to them as a question is enough to seem intelligent!",
    image: "/images/eliza-chat.jpg" // Recreation of ELIZA terminal interface
  },
  {
    year: 1997,
    event: "Deep Blue vs Kasparov",
    description: "IBM's Deep Blue defeats world chess champion Garry Kasparov. The real achievement wasn't just winning at chess - it was making Kasparov look like he'd seen a ghost during the matches.",
    image: "/images/deep-blue.jpg" // Famous photo of the match
  },
  {
    year: 2011,
    event: "Watson on Jeopardy!",
    description: "IBM's Watson defeats champions Ken Jennings and Brad Rutter on Jeopardy! Proving that AI can not only answer questions but also master the art of awkward pause timing.",
    image: "/images/watson-jeopardy.jpg" // Watson on Jeopardy stage
  },
  {
    year: 2012,
    event: "Deep Learning Revolution",
    description: "AlexNet wins the ImageNet competition, marking the beginning of the deep learning revolution. Finally, computers could tell cats from dogs... most of the time.",
    image: "/images/alexnet.jpg" // Visualization of AlexNet architecture
  },
  {
    year: 2016,
    event: "AlphaGo's Victory",
    description: "DeepMind's AlphaGo defeats Lee Sedol at Go, a game with more possible positions than atoms in the universe. The AI made moves so creative that human players still study them today.",
    image: "/images/alphago-match.jpg" // Famous match photo
  },
  {
    year: 2022,
    event: "ChatGPT Goes Viral",
    description: "OpenAI releases ChatGPT, marking a new era in conversational AI. Suddenly everyone's grandmother is using AI to write recipes and debug Python code.",
    image: "/images/chatgpt-interface.jpg" // ChatGPT interface
  },
  {
    year: 2024,
    event: "AI Today",
    description: "AI is now everywhere - from your phone's autocorrect making interesting word choices to self-driving cars deciding whether that paper bag is a pedestrian. The future is here, and it's both amazing and slightly concerning!",
    image: "/images/ai-today.jpg" // Modern AI applications collage
  },
  {
    year: 2029,
    event: "Skynet Becomes Self-Aware",
    description: "In a fictional yet iconic scenario, Skynet, the AI from the Terminator series, becomes self-aware and triggers a global catastrophe. This serves as a cautionary tale about the potential dangers of unchecked AI development.",
    image: "/images/skynet.jpg" // Skynet interface from the movie
  }
];

export default function Timeline({ onLastSlide }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'down') {
      if (activeIndex < events.length - 1) {
        setActiveIndex(prev => prev + 1);
      } else {
        // We're at the last slide, notify parent
        onLastSlide && onLastSlide('down');
      }
    } else if (direction === 'up') {
      if (activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      } else {
        // We're at the first slide, notify parent
        onLastSlide && onLastSlide('up');
      }
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaY) < 50) return; // Debounce
    handleScroll(e.deltaY > 0 ? 'down' : 'up');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      handleScroll('down');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleScroll('up');
    }
  };

  return (
    <div 
      className="h-screen flex items-center"
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative w-full h-full flex items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full px-8 flex items-center justify-center gap-24"
          >
            {/* Left content */}
            <div className="w-[400px] text-right translate-y-1/4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                className="text-sm font-light tracking-wider text-white"
              >
                {events[activeIndex].year}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                className="text-2xl tracking-wide mt-0.5 text-white"
              >
                {events[activeIndex].event}
              </motion.h2>
            </div>

            {/* Timeline node circle - now centered */}
            <motion.div
              className="w-3 h-3 rounded-full bg-white shrink-0"
              layoutId="timelineNode"
            />
            
            {/* Right content */}
            <div className="w-[400px] translate-y-1/4">
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg tracking-wide text-white"
              >
                {events[activeIndex].description}
              </motion.p>
              
              {events[activeIndex].image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 aspect-[16/9] overflow-hidden rounded-lg"
                >
                  <img 
                    src={events[activeIndex].image} 
                    alt={events[activeIndex].event}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation indicators */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {events.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${idx === activeIndex ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white/40'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to event ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}