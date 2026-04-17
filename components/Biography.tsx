import React from 'react';
import { Helmet } from 'react-helmet-async';

const Biography: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Biography | Justin Ray - Hybrid Music Producer</title>
        <meta name="description" content="Justin Ray is a Hybrid Music Producer based in East Lansing, MI. Founder of r/hybridproduction, music artist" />
        <link rel="canonical" href="https://jray.me/bio" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://jray.me/bio" />
        <meta property="og:image" content="https://jray.me/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://jray.me/bio" />
        <meta name="twitter:title" content="Biography | Justin Ray - Hybrid Music Producer" />
        <meta name="twitter:image" content="https://jray.me/favicon.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "url": "https://jray.me/bio",
          "mainEntity": {
            "@type": "Person",
            "name": "JRay",
            "alternateName": ["Justin Ray", "Justin Tyler Ray"],
            "jobTitle": [
              "Hybrid Producer",
              "Sound Engineer",
              "Creative Developer",
              "Artist"
            ],
            "image": "https://jray.me/favicon.png",
            "knowsAbout": [
              "Hybrid Production",
              "Generative AI Audio",
              "Sound Engineering",
              "Music Production",
              "Ableton Live",
              "Logic Pro X",
              "Prompt Design",
              "Spectral Splitting",
              "Creative Software Development"
            ],
            "sameAs": [
              "https://open.spotify.com/artist/3VZelnnW9OR0DyR2qRn4Oq",
              "https://www.linkedin.com/in/jray-me/",
              "https://github.com/Loserdub",
              "https://soundcloud.com/visiontracks/",
              "https://www.youtube.com/@loserdub",
              "https://www.reddit.com/r/hybridproduction/"
            ]
          }
        })}</script>
      </Helmet>
    <section className="py-24 px-4 sm:px-8 relative z-10 overflow-hidden animate-fade-in-up">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
             <div className="space-y-2">
                <p className="text-slate-400 font-mono text-xs tracking-[0.3em] uppercase">The Architect</p>
                <h1 className="text-5xl sm:text-7xl font-display font-bold text-white leading-none tracking-tight">
                  JUSTIN<br/><span className="text-stroke text-transparent">RAY</span>
                </h1>
                <div className="flex items-center gap-4 pt-2">
                   <div className="h-[1px] w-12 bg-white/30"></div>
                   <p className="text-white/50 font-mono text-sm tracking-widest uppercase">East Lansing, MI</p>
                </div>
             </div>

             <div className="space-y-8 text-white/80 font-light leading-relaxed text-lg font-sans">
                <div className="space-y-4">
                  <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-400">My Origin</h2>
                  <p>
                    Based in East Lansing, Michigan, I am a Hybrid Producer and creative developer dedicated to bridging the gap between raw human artistry and generative AI audio workflows.
                  </p>
                  <p>
                    My journey into music production didn't begin with algorithms; it began with a profound need for self-expression. Following a series of life-altering shifts, I turned away from the noise of traditional social networking and immersed myself in daily, completely human songwriting. I learned the foundational mechanics of composition, keys, and guitar from the ground up—developing a deep respect for the emotional core of music.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-400">The Age of Imagination</h2>
                  <p>
                    But as the landscape of audio engineering shifted, so did my workflow. About a year into my traditional production journey, I was invited to be an early beta tester for Google's MusicLM. That experience, combined with early experiments using Large Language Models to analyze audio files, was a revelation. While early AI often hallucinated, the potential was undeniable: generative AI was not a replacement for the artist, but a powerful new instrument.
                  </p>
                  <p>
                    This realization led me to Suno at its very inception, where I proudly served as a Growth Specialist for a year. During that time, I witnessed the polarization of the music industry—creators divided between traditional purists and AI enthusiasts. I stepped away to forge a new path that unifies both: Hybrid Production.
                  </p>
                  <p>
                    To prove this concept, I founded the rapidly growing Reddit community r/hybridproduction. Here, we are developing new methodologies—like Taxonomic Rank and Spectral Splitting—that blend AI music generation with advanced sound engineering.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-400">The Tech Stack</h2>
                  <p>
                    Today, my creative ecosystem is a true hybrid of coding and composition. As a creative developer, I leverage AI models like Gemini and Claude alongside GitHub to build forward-thinking app concepts. As a sound engineer, my workflow relies on industry-standard DAWs like Logic Pro X and Ableton Live. I sculpt sounds using powerful plugins like Xfer Serum and Sonic Academy ANA 2, and refine the final product using the FabFilter suite for mixing and mastering, alongside iZotope RX11 for meticulous audio restoration and cleanup. Finally, the finished tracks are distributed via LANDR and visualizers are published to YouTube.
                  </p>
                  <p>
                    We are in an era where the boundaries of audio are limitless. Whether you are a forward-thinking creator looking to step outside the box, an artist seeking creative consulting to elevate your tracks, or a pioneering music-tech company looking to bring visionary ideas to life—the future of music is a collaborative, hybrid effort.
                  </p>
                </div>
             </div>

             <div className="pt-4">
                <div className="inline-flex flex-col">
                   <span className="text-5xl font-display font-bold text-white/10 select-none">EST. 2023</span>
                </div>
             </div>
          </div>

          {/* Abstract Portrait */}
          <div className="order-1 md:order-2 relative group">
             <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded-sm bg-zinc-900 border border-white/10 shadow-2xl">
                {/* Image with Oil Filter */}
                <img 
                  src="https://picsum.photos/seed/justinray_producer/800/1000" 
                  alt="Justin Ray" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:contrast-125 grayscale group-hover:grayscale-0 will-change-[transform]"
                  style={{ filter: 'url(#oil-paint)' }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                <div className="absolute -inset-4 border border-white/5 rotate-3 transition-transform duration-700 group-hover:rotate-0 pointer-events-none"></div>
                <div className="absolute -inset-4 border border-slate-500/20 -rotate-2 transition-transform duration-700 group-hover:rotate-0 pointer-events-none"></div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 md:-left-12 bg-black/80 border border-white/20 p-4 backdrop-blur-xl z-20 shadow-lg">
               <p className="font-mono text-xs text-white/60 uppercase tracking-widest text-center">
                 Creator<br/>
                 <span className="text-white font-bold text-sm">r/HybridProduction</span>
               </p>
             </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  );
};

export default Biography;
