
import React from 'react';
import Section from './Section';
import type { SkillItem } from '../types';
import { GlobeAltIcon, JavaIcon, ChatGptIcon, ReplitIcon, ExcelIcon, IotIcon } from './icons/Icons';

const skillsData: SkillItem[] = [
  { name: 'Java Programming', icon: <JavaIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
  { name: 'IoT Basics', icon: <IotIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
  { name: 'ChatGPT Prompting', icon: <ChatGptIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
  { name: 'Vibe coding', icon: <ReplitIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
  { name: 'Excel', icon: <ExcelIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
  { name: 'Front-End Development', icon: <GlobeAltIcon className="w-8 h-8 mb-2 sm:w-12 sm:h-12 sm:mb-4" /> },
];

const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => (
  <div
    key={skill.name}
    className="group flex flex-col items-center p-3 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-fuchsia-500/30 card-glow"
  >
    <div className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
      {skill.icon}
    </div>
    <h3 className="text-center font-semibold text-gray-200 text-xs sm:text-base">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-6 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Technical Skills</h2>
        <div className="w-16 sm:w-24 h-1 underline-gradient mx-auto rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-8">
        {skillsData.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
