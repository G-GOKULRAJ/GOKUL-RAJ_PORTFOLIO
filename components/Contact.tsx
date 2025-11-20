
import React, { useState } from 'react';
import Section from './Section';
import { GithubIcon, InstagramIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from './icons/Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mvgddeqz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };
    
  return (
    <Section id="contact">
      <div className="text-center mb-6 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">Let's Connect</h2>
        <div className="w-16 sm:w-24 h-1 underline-gradient mx-auto rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-fuchsia-400">Get in Touch</h3>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
            I'm currently open to new opportunities and collaborations. Feel free to reach out.
          </p>
          <div className="space-y-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-4 text-gray-300">
                <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500" />
                <a href="mailto:gokulraj18072004@gmail.com" className="hover:text-white transition-colors text-sm sm:text-base">gokulraj18072004@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
                <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500" />
                <span className="text-sm sm:text-base">+91 9790699264</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
                <LocationMarkerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-500" />
                <span className="text-sm sm:text-base">Salem, India</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/VGM_GOKUL_33" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-gray-400 social-icon-glow">
                <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a href="https://github.com/G-GOKULRAJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 social-icon-glow">
              <GithubIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all text-sm sm:text-base"
            required
            disabled={status === 'sending'}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all text-sm sm:text-base"
            required
            disabled={status === 'sending'}
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            rows={5} 
            className="w-full p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-500 focus:outline-none transition-all text-sm sm:text-base"
            required
            disabled={status === 'sending'}
          ></textarea>
          <button 
            type="submit" 
            className="w-full px-8 py-3 sm:py-4 bg-fuchsia-600/80 text-white font-semibold rounded-lg border-2 border-fuchsia-500 btn-glow disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-400 mt-4 text-center">Thank you! Your message has been sent.</p>}
          {status === 'error' && <p className="text-red-400 mt-4 text-center">Oops! Something went wrong. Please try again later.</p>}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
