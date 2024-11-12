'use client';

// components/NavIndicator.js
import React from 'react';
import { Link } from 'react-scroll';

export default function NavIndicator() {
  const sections = [
    { name: 'Section1', label: 'Intro' },
    { name: 'Section2', label: 'ML Basics' },
    // Add more sections as needed
  ];

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
      {sections.map((section, idx) => (
        <Link
          key={idx}
          activeClass="active bg-blue-500"
          to={section.name}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-600 transition-colors"
        >
          <span className="sr-only">{section.label}</span>
        </Link>
      ))}
    </div>
  );
}