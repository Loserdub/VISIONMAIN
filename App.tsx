import React, { useState, Suspense, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import OilBackground from './components/OilBackground';
import { Menu, X, Disc } from 'lucide-react';
import SoundCloudPlayer from './components/SoundCloudPlayer';

// This fixes a React Router bug where changing pages doesn't scroll to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Music', path: '/music' },
    { label: 'Projects', path: '/projects' },
    { label: 'Bio', path: '/bio' },
    { label: 'What Is Hybrid', path: '/what-is-hybrid' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Disc className="animate-spin-slow text-white" size={24} />
            <span className="text-lg font-bold tracking-widest uppercase text-white">JRAY.ME</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70" aria-label="Main navigation">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`hover:text-white transition-colors relative ${isActive ? 'text-white' : ''}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in">
           <nav className="flex flex-col gap-8 text-center text-2xl font-light tracking-widest uppercase" aria-label="Mobile navigation">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`opacity-0 animate-fade-in-up hover:text-purple-400 transition-colors ${isActive ? 'text-white font-bold' : 'text-white/60'}`}
                  style={{ animationDelay: `${index * 150 + 100}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
           </nav>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col text-white">
        <ScrollToTop />
        <OilBackground />
        <Navigation />
        <SoundCloudPlayer />

        {/* Main Content Area - Separate Pages */}
        <main className="flex-grow w-full pt-24 pb-12 flex flex-col" id="main-content">
          <Suspense fallback={
            <div className="min-h-[60vh] w-full flex items-center justify-center">
              <div className="text-white/20 font-mono text-xs tracking-widest animate-pulse uppercase">Loading Route...</div>
            </div>
          }>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default App;
