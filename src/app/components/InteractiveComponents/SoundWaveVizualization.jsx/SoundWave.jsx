import React from 'react';

const SoundWaveVizualization = () => {
  return (
    <div className="w-full h-1/3 fixed bottom-0 left-0">
      <div className="relative w-full h-full bg-background overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 800 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="whaleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#2A27B8', stopOpacity: 0.6}}/>
              <stop offset="50%" style={{stopColor: '#32C5FF', stopOpacity: 0.8}}/>
              <stop offset="100%" style={{stopColor: '#9D34FF', stopOpacity: 0.6}}/>
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="textFade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopOpacity: 0}}/>
              <stop offset="10%" style={{stopOpacity: 1}}/>
              <stop offset="90%" style={{stopOpacity: 1}}/>
              <stop offset="100%" style={{stopOpacity: 0}}/>
            </linearGradient>
          </defs>
          
          <rect width="800" height="100" fill="var(--background)"/>
          
          <g filter="url(#glow)">
            <path d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50" fill="none" stroke="url(#whaleGradient)" strokeWidth="2">
              <animate 
                attributeName="d" 
                dur="4s"
                repeatCount="indefinite"
                values="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50;
                       M0,50 Q100,100 200,50 T400,50 T600,50 T800,50;
                       M0,50 Q100,0 200,50 T400,50 T600,50 T800,50"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </path>
            
            <path d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50" fill="none" stroke="url(#whaleGradient)" strokeWidth="2" opacity="0.6">
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50;
                       M0,50 Q100,100 200,50 T400,50 T600,50 T800,50;
                       M0,50 Q100,0 200,50 T400,50 T600,50 T800,50"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
            </path>
          </g>

          <g style={{fontFamily: 'Arial'}} fontSize="14" fill="currentColor" mask="url(#textFade)">
            <text x="200" y="50" opacity="0">
              hello
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                values="0;0.8;0" begin="0s"/>
              <animate attributeName="y" dur="3s" repeatCount="indefinite"
                values="50;30;10" begin="0s"/>
            </text>
            
            <text x="350" y="50" opacity="0">
              world
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                values="0;0.8;0" begin="1s"/>
              <animate attributeName="y" dur="3s" repeatCount="indefinite"
                values="50;70;90" begin="1s"/>
            </text>

            <text x="500" y="50" opacity="0">
              how
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                values="0;0.8;0" begin="0.5s"/>
              <animate attributeName="y" dur="3s" repeatCount="indefinite"
                values="50;40;30" begin="0.5s"/>
            </text>

            <text x="650" y="50" opacity="0">
              are
              <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                values="0;0.8;0" begin="1.5s"/>
              <animate attributeName="y" dur="3s" repeatCount="indefinite"
                values="50;60;70" begin="1.5s"/>
            </text>

            <text x="150" y="50" opacity="0">
              you
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite"
                values="0;0.8;0" begin="2s"/>
              <animate attributeName="y" dur="4s" repeatCount="indefinite"
                values="50;30;10" begin="2s"/>
            </text>

            <text x="300" y="50" opacity="0">
              today
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite"
                values="0;0.8;0" begin="2.5s"/>
              <animate attributeName="y" dur="4s" repeatCount="indefinite"
                values="50;70;90" begin="2.5s"/>
            </text>

            <text x="450" y="50" opacity="0">
              friend
              <animate attributeName="opacity" dur="4s" repeatCount="indefinite"
                values="0;0.8;0" begin="3s"/>
              <animate attributeName="y" dur="4s" repeatCount="indefinite"
                values="50;30;10" begin="3s"/>
            </text>

            <text x="250" y="50" opacity="0">
              ?
              <animate attributeName="opacity" dur="2s" repeatCount="indefinite"
                values="0;0.8;0" begin="1.2s"/>
              <animate attributeName="y" dur="2s" repeatCount="indefinite"
                values="50;30;10" begin="1.2s"/>
              <animate attributeName="x" dur="2s" repeatCount="indefinite"
                values="250;270;290" begin="1.2s"/>
            </text>

            <text x="550" y="50" opacity="0">
              !
              <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite"
                values="0;0.8;0" begin="0.7s"/>
              <animate attributeName="y" dur="2.5s" repeatCount="indefinite"
                values="50;60;70" begin="0.7s"/>
              <animate attributeName="x" dur="2.5s" repeatCount="indefinite"
                values="550;530;510" begin="0.7s"/>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SoundWaveVizualization;