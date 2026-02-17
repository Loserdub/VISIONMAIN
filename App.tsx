import React, { useState, useEffect } from 'react';
import OilBackground from './components/OilBackground';
import Biography from './components/Biography';
import Home from './components/Home';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import WhatIsHybrid from './components/WhatIsHybrid';
import Services from './components/Services';
import { Menu, X, Disc } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'Projects', 'Bio', 'What Is Hybrid', 'Services', 'Contact'];

  const renderContent = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'projects': return <ProjectsList />;
      case 'bio': return <Biography />;
      case 'what is hybrid': return <WhatIsHybrid onBack={() => handleNavClick('home')} />;
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col">
      <OilBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <Disc className={`animate-spin-slow ${scrolled ? 'text-white' : 'text-white/80'}`} size={24} />
            <span className="text-lg font-bold tracking-widest uppercase">JRAY.ME</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70">
            {navItems.map(item => (
              <button 
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())} 
                className={`hover:text-white transition-colors relative ${currentPage === item.toLowerCase() ? 'text-white' : ''}`}
              >
                {item}
                {currentPage === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in">
           <div className="flex flex-col gap-8 text-center text-2xl font-light tracking-widest uppercase">
            {navItems.map((item, index) => (
              <button 
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`opacity-0 animate-fade-in-up hover:text-purple-400 transition-colors ${currentPage === item.toLowerCase() ? 'text-white font-bold' : 'text-white/60'}`}
                style={{ animationDelay: `${index * 150 + 100}ms` }}
              >
                {item}
              </button>
            ))}
           </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>

    </div>
  );
};

export default App;