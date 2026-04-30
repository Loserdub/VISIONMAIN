import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import doodleImg from '../assets/images/doodle.jpg';

const Home: React.FC = () => {
  const scrollToHybrid = () => {
    const element = document.getElementById('hybrid');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const aliases = [
    {
      name: "loserdub",
      desc: "The foundational alias. A space for raw, experimental bass music and genre-fluid explorations."
    },
    {
      name: "VISION",
      desc: "High-fidelity hybrid compositions. Pushing the boundaries of human and AI collaboration."
    },
    {
      name: "flawed future",
      desc: "Embracing the artifacts of the algorithmic void. Nostalgic yet fiercely forward-looking."
    },
    {
      name: "le vide",
      desc: "Ambient, textural, and cinematic. The space between the notes, sculpted for deep listening."
    },
    {
      name: "disarray",
      desc: "Organized chaos. High-energy structural sound design meant to shatter expectations."
    }
  ];

  const [currentAlias, setCurrentAlias] = useState(0);

  const nextAlias = () => setCurrentAlias((prev) => (prev + 1) % aliases.length);
  const prevAlias = () => setCurrentAlias((prev) => (prev - 1 + aliases.length) % aliases.length);

  return (
    <>
      <section className="relative flex flex-col items-center px-4 py-32 sm:pt-40">
        <Head>
          <title>Home | Justin Ray - Creative Technologist & Hybrid Artist</title>
          <meta name="description" content="Justin Ray is a Hybrid Producer and Creative Technologist blending Generative AI with traditional engineering to build innovative audio and visual tools." />
          <link rel="canonical" href="https://jray.me/" />
        </Head>
        {/* SEO: Hidden H1 for crawlers as the visual title is canvas-based */}
        <h1 className="sr-only">Hybrid Production | Justin Ray</h1>

      <div className="text-center z-10 space-y-4 max-w-5xl animate-fade-in-up flex flex-col items-center">
        {/* Title */}
        <div className="flex flex-col items-center leading-none">
          <div 
            style={{ 
              fontSize: 'clamp(3.5rem, 9vw, 9rem)', 
              fontFamily: '"DotGothic16", sans-serif',
              fontWeight: 400,
              color: '#fff',
            }}
            className="mix-blend-overlay opacity-90 max-w-full uppercase"
          >
            HYBRID
          </div>
          <div className="mt-4 sm:mt-8">
            <div 
              style={{ 
                fontSize: 'clamp(2.5rem, 6.5vw, 7rem)', 
                fontFamily: '"DotGothic16", sans-serif',
                fontWeight: 400,
                color: '#fff',
              }}
              className="mix-blend-overlay opacity-90 max-w-full uppercase"
            >
              PRODUCTION
            </div>
          </div>
        </div>

        <p className="text-lg sm:text-2xl font-light text-white/60 tracking-[0.2em] uppercase max-w-3xl mx-auto mt-4">
          Creative Technologist & Hybrid Artist
        </p>
      </div>

      {/* Philosophy / Manifesto Section */}
      <section className="w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase">The Philosophy</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-white/90 font-sans">
          "While others argue over black or white - pure human or pure AI - all or nothing - the future exists in the <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-100 to-gray-500 font-bold">grey</span>. Hybrid production is the search for the soul inside the algorithm."
        </p>
        <p className="text-lg sm:text-xl font-light text-white/60 mt-8 max-w-3xl mx-auto">
          As a <span className="text-white font-medium">creative developer</span> and artist, I don't just use the tools — I build them. Custom <span className="text-white font-medium">in-browser audio environments</span>, <span className="text-white font-medium">AI-driven feedback</span>, sample creation, bespoke workflows. When it comes to generative music, I don't start from a blank prompt. I start from something human, and let the algorithm react to it.
        </p>
      </section>

      {/* The Multiverse / Studio Model Section (Carousel) */}
      <section className="w-full max-w-5xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase">The Dissection</h2>
        <p className="text-xl font-light text-white/80 max-w-3xl mx-auto mb-12">
          A study in identity. Exploring the spectrum of sound through a lens of <span className="font-bold">Hybrid Production</span>.
        </p>
        
        <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
          <button 
            onClick={prevAlias}
            className="p-3 text-white/40 hover:text-white transition-colors focus:outline-none"
            aria-label="Previous alias"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <div className="flex-1 bg-zinc-900/80 border border-white/10 p-10 hover:border-slate-500/50 transition-all duration-500 min-h-[220px] flex flex-col justify-center">
            <h3 className="text-3xl font-display font-bold text-white mb-4 transition-colors">
              {aliases[currentAlias].name}
            </h3>
            <p className="text-base text-white/60 leading-relaxed">
              {aliases[currentAlias].desc}
            </p>
          </div>

          <button 
            onClick={nextAlias}
            className="p-3 text-white/40 hover:text-white transition-colors focus:outline-none"
            aria-label="Next alias"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {aliases.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentAlias(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${idx === currentAlias ? 'bg-white' : 'bg-white/20'}`} 
              aria-label={`Go to alias ${idx + 1}`}
            />
          ))}
        </div>

        {/* Doodle Image */}
        <div className="mt-16 flex justify-center w-full">
          <img 
            src={doodleImg} 
            alt="Hybrid Production Doodle" 
            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain opacity-80 mix-blend-lighten pointer-events-none"
          />
        </div>

        <div className="mt-20 h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      </section>

      {/* NEW SECTION: What is Hybrid Production? (The Third Way) */}
      <div id="hybrid" className="w-full max-w-5xl mx-auto z-20 animate-fade-in-up mt-24 px-4" style={{ animationDelay: '0.3s' }}>
        <button 
            onClick={scrollToHybrid}
            className="w-full text-left relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 hover:bg-zinc-900/60 transition-colors duration-500 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-slate-500"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 to-transparent"></div>
            
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-800/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-slate-700/30 transition-colors duration-700"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start relative z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-4">
                        What is <br/><span className="text-slate-300">Hybrid</span><br/>Production?
                    </h2>
                    <div className="w-12 h-[1px] bg-white/20 my-4 group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-xs font-mono text-white/40 tracking-widest uppercase">
                        The Third Way
                    </p>
                </div>
                <div className="space-y-6">
                    <p className="text-lg font-light text-white/80 leading-relaxed">
                        It is the definitive workflow of the post-AI musical landscape. Rejecting the binary choice between "human" and "machine", it treats Generative AI as a high-fidelity instrument—a chaotic synthesizer capable of infinite texture.
                    </p>
                    <p className="text-sm font-mono text-white/60">
                        The Hybrid Producer is an editor, a curator, and a sonic sculptor who mines the algorithmic void for gold, then refines it with traditional engineering.
                    </p>
                </div>
            </div>
        </button>
      </div>

      {/* Current Focus / Builder Signal */}
      <section className="w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center border-t border-white/10 pt-16" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xs font-mono tracking-[0.2em] text-white/40 mb-8 uppercase">Currently Building</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 text-left md:text-center">
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Music</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">Identifying systems to improve generative music fidelity, pioneering new ways to blend the grey.</p>
            </div>
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Community</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  <a href="https://www.reddit.com/r/hybridproduction/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4 hover:decoration-white">
                    Scaling the r/hybridproduction community
                  </a>
                </p>
            </div>
            <div className="flex-1 space-y-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Innovation</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">Refining workflows for the AI and even post-AI musical landscape. Utilizing todays tools to see tomorrows solutions</p>
            </div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="flex justify-center items-center gap-8 sm:gap-12 mt-16 mb-20 z-20 animate-fade-in-up" style={{ animationDelay: '0.5s' }} aria-label="Social media links">
        
        {/* X (Twitter) */}
        <a 
          href="https://x.com/TheInnerVision" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Follow Justin Ray on X (Twitter)"
          className="group text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Visit Justin Ray's YouTube Channel"
          className="group text-white/40 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
             <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/justin-ray-277b8548/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Connect with Justin Ray on LinkedIn"
          className="group text-white/40 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* LANDR (Custom Icon representing Network/Audio) */}
        <a 
          href="https://network.landr.com/users/vision-hybrid" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Justin Ray on LANDR Network"
          className="group text-white/40 hover:text-[#00E6CB] transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <span className="sr-only">LANDR</span>
        </a>
      </section>
      
      </section>
    </>
  );
};

export default Home;
