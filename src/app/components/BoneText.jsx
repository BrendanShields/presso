import React from 'react';

const XrayText = ({ text = "X-RAY", fontSize = "120px" }) => {
  return (
    <div className="w-full h-96 bg-background relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Intense blur for X-ray glow */}
          <filter id="xrayBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1"/>
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2"/>
            <feBlend in="blur1" in2="blur2" mode="screen"/>
            <feComposite in2="SourceGraphic" operator="over"/>
          </filter>
          
          {/* Film grain */}
          <filter id="filmGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="5" result="noise">
              <animate attributeName="seed" from="1" to="10" dur="1s" repeatCount="indefinite"/>
            </feTurbulence>
            <feColorMatrix in="noise" type="matrix" values="0.1 0 0 0 0   0.1 0 0 0 0   0.1 0 0 0 0   0 0 0 0.3 0"/>
            <feBlend in2="SourceGraphic" mode="overlay"/>
          </filter>

          {/* Bone texture overlay */}
          <filter id="boneStructure">
            <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="2" seed="2"/>
            <feColorMatrix type="matrix" values="0.2 0 0 0 0   0 0.2 0 0 0   0 0 0.2 0 0   0 0 0 0.15 0"/>
            <feBlend mode="multiply" in2="SourceGraphic"/>
          </filter>

          {/* Development gradient */}
          <linearGradient id="developmentGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0f12">
              <animate 
                attributeName="offset" 
                from="0" 
                to="1" 
                dur="3s" 
                begin="0s" 
                fill="freeze"
              />
            </stop>
            <stop offset="20%" stopColor="transparent">
              <animate 
                attributeName="offset" 
                from="0.2" 
                to="1.2" 
                dur="3s" 
                begin="0s" 
                fill="freeze"
              />
            </stop>
          </linearGradient>

          {/* Vignette gradient */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent"/>
            <stop offset="100%" stopColor="#0a0f12"/>
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="var(--background)"/>
        
        {/* Film grain background */}
        <rect width="100%" height="100%" filter="url(#filmGrain)" opacity="0.7"/>

        {/* Main text group */}
        <g transform="translate(400, 200)">
          {/* Bone structure overlay */}
          <g filter="url(#boneStructure)" opacity="0.4">
            <rect x="-350" y="-150" width="700" height="300" fill="none"/>
          </g>
          
          {/* Glowing text */}
          <text 
            textAnchor="middle" 
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
            fontSize={fontSize}
            fontWeight="bold"
            fill="var(--foreground)"
            filter="url(#xrayBlur)"
            opacity="0.9"
          >
            <animate 
              attributeName="opacity" 
              from="0" 
              to="0.9" 
              dur="3s" 
              begin="0s" 
              fill="freeze"
            />
            {text}
          </text>
        </g>

        {/* Additional film grain */}
        <rect width="100%" height="100%" filter="url(#filmGrain)" opacity="0.2"/>
        
        {/* Vignette effect */}
        <rect width="100%" height="100%" fill="url(#vignette)" opacity="0.7"/>

        {/* Development overlay */}
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#developmentGradient)"
        >
          <animate 
            attributeName="opacity" 
            from="1" 
            to="0" 
            dur="3s" 
            begin="0s" 
            fill="freeze"
          />
        </rect>
      </svg>
    </div>
  );
};

// Example usage with children
const BoneText = ({text, fontSize}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900">
      <XrayText text={text} fontSize={fontSize} />
    </div>
  );
};

export default BoneText;