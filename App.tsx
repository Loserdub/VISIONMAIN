import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import OilBackground from './components/OilBackground';
import { Menu, X, Disc } from 'lucide-react';
import Footer from './components/Footer';
import { buildPageUrl } from './seo';


const Navigation = () => {
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
          <a href="/" className="flex items-center gap-2">
            <Disc className="animate-spin-slow text-white" size={24} />
            <span className="text-lg font-bold tracking-widest uppercase text-white">JRAY.ME</span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70" aria-label="Main navigation">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <a 
                  key={item.path}
                  href={item.path}
                  className={`hover:text-white transition-colors relative ${isActive ? 'text-white' : ''}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
          <label htmlFor="mobile-menu-toggle" className="md:hidden text-white cursor-pointer peer-checked:hidden block" aria-label="Open menu">
            <Menu />
          </label>
          <label htmlFor="mobile-menu-toggle" className="md:hidden text-white cursor-pointer peer-checked:block hidden" aria-label="Close menu">
            <X />
          </label>

          {/* Mobile Nav Overlay */}
          <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl items-center justify-center animate-fade-in hidden peer-checked:flex">
             <nav className="flex flex-col gap-8 text-center text-2xl font-light tracking-widest uppercase" aria-label="Mobile navigation">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <a 
                    key={item.path}
                    href={item.path}
                    className={`opacity-0 animate-fade-in-up hover:text-slate-300 transition-colors ${isActive ? 'text-white font-bold' : 'text-white/60'}`}
                    style={{ animationDelay: `${index * 150 + 100}ms` }}
                  >
                    {item.label}
                  </a>
                );
              })}
             </nav>
          </div>
        </div>
      </header>
    </>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const canonicalUrl = buildPageUrl(location.pathname);

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col text-white">
      <Head>
        {/* Per-page SEO is handled in each route component */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <OilBackground />
      <Navigation />

      {/* Main Content Area - Separate Pages */}
      <main className="flex-grow w-full pt-24 pb-12 flex flex-col" id="main-content">
          <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
