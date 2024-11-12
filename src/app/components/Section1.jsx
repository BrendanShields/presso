import React from 'react';
import Timeline from './InteractiveComponents/Timeline';

export default function Section1() {
  return (
    <section
      id="Section1"
      className="w-screen h-screen flex flex-col items-center justify-center text-center p-4"
    >
      <h1 className="text-4xl font-bold mb-4">Introduction to AI</h1>
      <p className="max-w-2xl mb-8">
        Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.
      </p>
      {/* Include the interactive timeline here */}
      <div className="w-full h-1/2">
        <Timeline />
      </div>
    </section>
  );
}