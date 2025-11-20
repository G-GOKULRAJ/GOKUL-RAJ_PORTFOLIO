
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">About Me</h2>
        <div className="w-16 sm:w-24 h-1 underline-gradient mx-auto mb-4 sm:mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed text-center px-2">
            I am a passionate Electronics and Communication Engineering professional with a strong foundation in core electronics, IoT, and a burning curiosity for AI. I thrive on solving complex problems and turning innovative ideas into practical solutions. I'm excited to learn, grow, and create something impactful in the world of AI technology.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
