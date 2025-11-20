
import React from 'react';
import Section from './Section';
import type { ExperienceItem } from '../types';
import { BriefcaseIcon } from './icons/Icons';

const experienceData: ExperienceItem = {
  role: 'Intern – ATM Manufacturing Company',
  company: 'NCR Corporation Pvt Ltd',
  duration: '5 Months',
  location: 'Chennai',
  description: [
    'During my internship, I gained hands-on experience in the manufacturing and assembly of ATM machines. This involved learning about industrial processes, quality control, component calibration, and electronic system integration. I also collaborated with senior engineers to understand workflow automation, troubleshoot complex circuit designs, and ensure product reliability.',
  ],
};

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-6 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Experience</h2>
        <div className="w-16 sm:w-24 h-1 underline-gradient mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-fuchsia-500/30 shadow-lg card-glow">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
            <div className="text-fuchsia-400 flex-shrink-0">
              <BriefcaseIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-fuchsia-400">{experienceData.role}</h3>
              <p className="font-semibold text-base sm:text-lg text-white mt-1">{experienceData.company}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{`${experienceData.location} | ${experienceData.duration}`}</p>
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base text-left sm:text-justify">
                {experienceData.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
