
import React from 'react';
import Section from './Section';
import type { ProjectItem } from '../types';

const projectsData: ProjectItem[] = [
  {
    title: 'AI-Based Driver Drowsiness, Alcohol, and Heart Attack Detection Using IoT',
    description: 'Developed an AI and IoT-enabled system to monitor driver alertness, alcohol consumption, and vital signs in real time to enhance road safety and prevent accidents. The system detects drowsiness using computer vision, identifies alcohol levels via sensors, and monitors heart rate to trigger alerts in case of abnormalities.',
    tools: ['AI', 'IoT', 'Computer Vision', 'Sensors'],
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Smart Garbage Segregation and Monitoring System Using IoT',
    description: 'Developed an IoT-enabled smart garbage system capable of detecting, segregating, and monitoring waste automatically to support smart city and environmental sustainability goals. The system separates waste into wet, dry, and metallic categories and updates the waste level status in real time.',
    tools: ['IoT', 'Embedded Systems', 'Sensors'],
    imageUrl: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Personal Portfolio Website | Built Using Vibe Coding',
    description: 'Developed a fully responsive personal portfolio website using Vibe Coding, showcasing my projects, technical skills, and achievements. Focused on clean design, smooth navigation.',
    tools: ['Vibe Coding', 'UI/UX', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
  return (
    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-fuchsia-500/30 shadow-lg card-glow flex flex-col">
      <div className="relative h-32 sm:h-40 overflow-hidden">
         <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-bold text-fuchsia-400 mb-2 group-hover:text-pink-400 transition-colors duration-300 truncate-2-lines">{project.title}</h3>
        <p className="text-gray-300 mb-3 text-xs flex-grow truncate-3-lines">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tools.map(tool => (
            <span key={tool} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] sm:text-xs rounded-full">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-6 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Featured Projects</h2>
        <div className="w-16 sm:w-24 h-1 underline-gradient mx-auto rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
