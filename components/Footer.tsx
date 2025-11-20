
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-gray-400 border-t border-slate-800">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Gokulraj. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed with passion and code.</p>
      </div>
    </footer>
  );
};

export default Footer;
