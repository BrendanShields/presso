import React from 'react';

const FinanceImpact = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-light tracking-tight">
          AI in Finance and Banking
        </h1>
        <p className="text-lg text-white/60 tracking-wide max-w-2xl mx-auto">
          AI is revolutionizing the finance and banking sectors by enhancing fraud detection, automating trading, and providing personalized financial advice.
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

export default FinanceImpact; 