import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/90 border-t border-white/5 py-8 mt-auto z-20 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/40 text-xs font-mono tracking-widest uppercase text-center md:text-left">
          &copy; {new Date().getFullYear()} Justin Ray. All Rights Reserved.
        </div>

        <nav className="flex gap-6 text-xs font-medium tracking-widest uppercase text-white/60">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/what-is-hybrid" className="hover:text-white transition-colors">What Is Hybrid</a>
          <a href="/projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/music" className="hover:text-white transition-colors">Music</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
