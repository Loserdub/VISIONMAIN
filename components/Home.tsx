import React from 'react';
import SoundCloudPlayer from './SoundCloudPlayer';
import FuzzyText from './FuzzyText';

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
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
          <div className="mt-2 sm:mt-4">
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

      <div className="absolute bottom-10 animate-bounce">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Home;