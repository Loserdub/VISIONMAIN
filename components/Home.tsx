import React from 'react';
import SoundCloudPlayer from './SoundCloudPlayer';
import FuzzyText from './FuzzyText';

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

  return (
    <div className="relative flex flex-col items-center px-4 py-32 sm:pt-40">
      {/* SEO: Hidden H1 for crawlers as the visual title is canvas-based */}
      <h1 className="sr-only">Hybrid Production | Justin Ray</h1>

      <div className="text-center z-10 space-y-4 max-w-5xl animate-fade-in-up flex flex-col items-center">
        {/* Animated Title */}
        <div className="flex flex-col items-center leading-none">
          <FuzzyText 
            fontSize="clamp(3.5rem, 9vw, 9rem)"
            fontWeight={800}
            fontFamily="Syne, sans-serif"
            color="#fff"
            enableHover={true}
            baseIntensity={0.15}
            hoverIntensity={0.5}
            className="mix-blend-overlay opacity-90 max-w-full"
          >
            HYBRID
          </FuzzyText>
          <div className="mt-4 sm:mt-8">
            <FuzzyText 
              fontSize="clamp(2.5rem, 6.5vw, 7rem)"
              fontWeight={800}
              fontFamily="Syne, sans-serif"
              color="#fff"
              enableHover={true}
              baseIntensity={0.15}
              hoverIntensity={0.5}
              className="mix-blend-overlay opacity-90 max-w-full"
            >
              PRODUCTION
            </FuzzyText>
          </div>
        </div>

        <p className="text-lg sm:text-2xl font-light text-white/60 tracking-[0.2em] uppercase max-w-2xl mx-auto mt-4">
          A Multi-Project Odyssey Of A Human In The Loop
        </p>
      </div>

      {/* SoundCloud Embed Widget Area */}
      <div className="w-full z-20 animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
         <SoundCloudPlayer />
      </div>

      {/* Manifesto Quote Section (Replaces Bio) */}
      <div className="w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 mb-6 uppercase">Manifesto</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-white/90 font-sans">
          "While others argue over black or white - pure human or pure AI - all or nothing - the future exists in the <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-100 to-gray-500 font-bold">grey</span>. Hybrid production is the search for the soul inside the algorithm. In some form, this is the only way forward with the modern music industry."
        </p>
        <div className="mt-12 h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      </div>

      {/* NEW SECTION: What is Hybrid Production? */}
      <div className="w-full max-w-5xl mx-auto z-20 animate-fade-in-up mt-24 px-4" style={{ animationDelay: '0.3s' }}>
        <button 
            onClick={scrollToHybrid}
            className="w-full text-left relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 hover:bg-zinc-900/60 transition-colors duration-500 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
            
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-800/30 transition-colors duration-700"></div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start relative z-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-4">
                        What is <br/><span className="text-purple-400">Hybrid</span><br/>Production?
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

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-8 sm:gap-12 mt-16 mb-20 z-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        
        {/* X (Twitter) */}
        <a 
          href="https://x.com/TheInnerVision" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="X (Twitter)"
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
          aria-label="YouTube"
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
          aria-label="LinkedIn"
          className="group text-white/40 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* LANDR (Custom Icon representing Network/Audio) */}
        <a 
          href="https://app.landr.com/network/users/vision-9e58" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LANDR Network"
          className="group text-white/40 hover:text-[#00E6CB] transition-all duration-300 transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <span className="sr-only">LANDR</span>
        </a>
      </div>
      
    </div>
  );
};

export default Home;