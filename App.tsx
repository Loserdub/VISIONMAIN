import React, { useState, Suspense, lazy } from 'react';
import OilBackground from './components/OilBackground';
import { Menu, X, Disc, Loader2 } from 'lucide-react';

// Lazy load components for performance optimization
const Home = lazy(() => import('./components/Home'));
const MusicList = lazy(() => import('./components/MusicList'));
const ProjectsList = lazy(() => import('./components/ProjectsList'));
const Biography = lazy(() => import('./components/Biography'));
const WhatIsHybrid = lazy(() => import('./components/WhatIsHybrid'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Music', id: 'music' },
    { label: 'Projects', id: 'projects' },
    { label: 'Bio', id: 'bio' },
    { label: 'What Is Hybrid', id: 'hybrid' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'music':
        return <MusicList />;
      case 'projects':
        return <ProjectsList />;
      case 'bio':
        return <Biography />;
      case 'hybrid':
        return <WhatIsHybrid onBack={() => handleNavClick('home')} />;
      case 'services':
        return <Services onContactClick={() => handleNavClick('contact')} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col">
      <OilBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <Disc className="animate-spin-slow text-white" size={24} />
            <span className="text-lg font-bold tracking-widest uppercase">JRAY.ME</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className={`hover:text-white transition-colors relative ${activeTab === item.id ? 'text-white' : ''}`}
              >
                {item.label}
                {activeTab === item.id && (
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
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`opacity-0 animate-fade-in-up hover:text-purple-400 transition-colors ${activeTab === item.id ? 'text-white font-bold' : 'text-white/60'}`}
                style={{ animationDelay: `${index * 150 + 100}ms` }}
              >
                {item.label}
              </button>
            ))}
           </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow w-full pt-24 min-h-screen flex flex-col">
        <Suspense fallback={
          <div className="flex-grow flex items-center justify-center">
            <Loader2 className="animate-spin text-white/20" size={32} />
          </div>
        }>
          {renderContent()}
        </Suspense>
      </main>

    </div>
  );
};

export default App;