import React from 'react';
import SoundCloudPlayer from './SoundCloudPlayer';
import FuzzyText from './FuzzyText';

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 py-32 sm:pt-40">
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
          A Multi-Project Auditory Experience
        </p>
      </div>

      {/* SoundCloud Embed Widget Area */}
      <div className="w-full z-20 animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
         <SoundCloudPlayer />
      </div>

      {/* Manifesto Quote Section (Replaces Bio) */}
      <div className="w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 mb-24 px-4 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 mb-6 uppercase">Manifesto</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-white/90 font-sans">
          "While others argue over black or white - pure human or pure AI - all or nothing - the future exists in the <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-100 to-gray-500 font-bold">grey</span>. Hybrid production is the search for the soul inside the algorithm. In some form, this is the only way forward with the modern music industry."
        </p>
        <div className="mt-12 h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Home;