import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import OilBackground from './components/OilBackground';
import { Menu, X, Disc } from 'lucide-react';
import Home from './components/Home';

// Define dynamic import factories to allow manual prefetching
const loadMusic = () => import('./components/MusicList');
const loadProjects = () => import('./components/ProjectsList');
const loadBio = () => import('./components/Biography');
const loadHybrid = () => import('./components/WhatIsHybrid');
const loadServices = () => import('./components/Services');
const loadContact = () => import('./components/Contact');

// Create Lazy components
const MusicList = lazy(loadMusic);
const ProjectsList = lazy(loadProjects);
const Biography = lazy(loadBio);
const WhatIsHybrid = lazy(loadHybrid);
const Services = lazy(loadServices);
const Contact = lazy(loadContact);

// LazySection Wrapper Component
// Handles viewport detection to trigger actual component loading (rendering)
// This prevents all lazy components from fetching immediately on mount.
const LazySection = ({ children }: { children: React.ReactNode }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50% 0px' } // Start loading when section is 50% of viewport away
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen w-full">
      {shouldLoad ? (
        <Suspense fallback={
          <div className="min-h-screen w-full flex items-center justify-center">
            <div className="text-white/20 font-mono text-xs tracking-widest animate-pulse uppercase">Initializing...</div>
          </div>
        }>
          {children}
        </Suspense>
      ) : (
        // Placeholder to maintain layout flow before load
        <div className="min-h-screen w-full" />
      )}
    </div>
  );
};

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

  // Prefetch logic triggers the dynamic import when hovering over links
  const prefetchSection = (id: string) => {
    switch (id) {
      case 'music': loadMusic(); break;
      case 'projects': loadProjects(); break;
      case 'bio': loadBio(); break;
      case 'hybrid': loadHybrid(); break;
      case 'services': loadServices(); break;
      case 'contact': loadContact(); break;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
    setActiveTab(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for trigger point

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col text-white">
      <OilBackground />

      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-white/5"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button 
            className="flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1" 
            onClick={() => scrollToSection('home')}
            aria-label="Go to Homepage"
          >
            <Disc className="animate-spin-slow text-white" size={24} aria-hidden="true" />
            <span className="text-lg font-bold tracking-widest uppercase">JRAY.ME</span>
          </button>
          
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70" role="menubar">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                onMouseEnter={() => prefetchSection(item.id)}
                className={`hover:text-white transition-colors relative focus:outline-none focus-visible:text-white ${activeTab === item.id ? 'text-white' : ''}`}
                role="menuitem"
                aria-label={item.label}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
           <div className="flex flex-col gap-8 text-center text-2xl font-light tracking-widest uppercase">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => prefetchSection(item.id)}
                className={`opacity-0 animate-fade-in-up hover:text-purple-400 transition-colors focus:outline-none focus-visible:text-purple-400 ${activeTab === item.id ? 'text-white font-bold' : 'text-white/60'}`}
                style={{ animationDelay: `${index * 150 + 100}ms` }}
              >
                {item.label}
              </button>
            ))}
           </div>
        </div>
      )}

      {/* Main Content Area - Single Page Vertical Layout */}
      <main className="flex-grow w-full pt-0 flex flex-col" id="main-content" role="main">
        {/* Home is static (above fold) */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        
        {/* Other sections are lazy loaded */}
        <section id="music" className="min-h-screen border-t border-white/5">
          <LazySection>
            <MusicList />
          </LazySection>
        </section>

        <section id="projects" className="min-h-screen border-t border-white/5">
          <LazySection>
             <ProjectsList />
          </LazySection>
        </section>

        <section id="bio" className="min-h-screen border-t border-white/5">
          <LazySection>
             <Biography />
          </LazySection>
        </section>

        <section id="hybrid" className="min-h-screen border-t border-white/5">
          <LazySection>
             <WhatIsHybrid />
          </LazySection>
        </section>

        <section id="services" className="min-h-screen border-t border-white/5">
          <LazySection>
             <Services onContactClick={() => scrollToSection('contact')} />
          </LazySection>
        </section>

        <section id="contact" className="min-h-screen border-t border-white/5">
          <LazySection>
             <Contact />
          </LazySection>
        </section>
      </main>

    </div>
  );
};

export default App;
