
import React from 'react';
import Section from './Section';
import { InstagramIcon, GithubIcon, MailIcon } from './icons/Icons';

const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <Section id="home" className="flex items-center justify-center min-h-auto sm:min-h-screen pt-24 sm:pt-32 pb-10 sm:pb-16">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 tracking-wider text-gradient glow px-2">
            GOKUL RAJ
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
            <h2>Curious Learner Ready to Contribute and Grow</h2>
          </p>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-fuchsia-600/80 text-white font-semibold rounded-lg border-2 border-fuchsia-500 btn-glow text-sm sm:text-base"
          >
            Get in Touch
          </a>
          <div className="mt-8 sm:mt-12 flex justify-center space-x-8">
            <a href="https://www.instagram.com/VGM_GOKUL_33" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-gray-400 social-icon-glow">
              <InstagramIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="https://github.com/G-GOKULRAJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 social-icon-glow">
              <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="mailto:gokulraj18072004@gmail.com" aria-label="Send an email" className="text-gray-400 social-icon-glow">
              <MailIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
