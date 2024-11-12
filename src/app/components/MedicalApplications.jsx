import React from 'react';
import BoneText from './BoneText';

const MedicalApplications = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-light tracking-tight">
          <BoneText text="AI in Medicine" fontSize="80px" />
        </h1>
        <p className="text-lg text-white/60 tracking-wide max-w-2xl mx-auto">
          Artificial Intelligence (AI) is revolutionizing the field of medicine by enhancing diagnostic accuracy, personalizing treatment plans, and streamlining administrative tasks. AI algorithms can analyze vast amounts of medical data, including imaging and genetic information, to identify patterns and predict outcomes with unprecedented precision. This technology is also being used to develop new drugs, monitor patient health in real-time, and provide virtual health assistants that improve patient care and accessibility. As AI continues to evolve, it holds the promise of transforming healthcare delivery and improving patient outcomes on a global scale.
        </p>
        <div className="pt-8">
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
        </div>
      </div>
    </div>
  );
};

export default MedicalApplications; 