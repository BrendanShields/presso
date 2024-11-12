import React from 'react';
import MLConceptsExplorer from './InteractiveComponents/MLConceptsExplorer';

export default function Section2() {
  return (
    <section
      id="Section3"
      className="w-screen h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <h1 className="text-4xl font-bold mb-4">Basics of Machine Learning</h1>
      <p className="max-w-2xl mb-8">
        Machine Learning (ML) is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.
      </p>
      {/* Include the interactive ML Concepts Explorer here */}
      <div className="w-full h-1/2">
        <MLConceptsExplorer />
      </div>
    </section>
  );
}