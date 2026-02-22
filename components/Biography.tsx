import React from 'react';

const Biography: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 overflow-hidden animate-fade-in-up">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
             <div className="space-y-2">
                <h4 className="text-purple-400 font-mono text-xs tracking-[0.3em] uppercase">The Architect</h4>
                <h2 className="text-5xl sm:text-7xl font-display font-bold text-white leading-none tracking-tight">
                  JUSTIN<br/><span className="text-stroke text-transparent">RAY</span>
                </h2>
                <div className="flex items-center gap-4 pt-2">
                   <div className="h-[1px] w-12 bg-white/30"></div>
                   <p className="text-white/50 font-mono text-sm tracking-widest uppercase">East Lansing, MI</p>
                </div>
             </div>

             <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg font-sans">
                <p>
                  Based in East Lansing, Michigan, Justin Ray is a definable force in the emerging field of Hybrid Music Production. Since 2022, Justin has moved beyond standard composition to become a leading voice in integrating human artistry with generative audio. He is the founder of r/hybridproduction, a global community dedicated to the philosophy that AI music requires a human pulse to truly resonate.
                </p>
                <p>
                  An early adopter of the AI audio revolution, Justin began beta-testing platforms like Google’s MusicLM and Stable Audio before becoming a pivotal figure in the Suno ecosystem. His role as a Growth Specialist and early tester for Suno, as well as a consultant for Six Sides Media and Staccato. His insights into the intersection of machine learning and music have attracted attention from major tech entities, leading to interviews with a european research institute and recruitment interest from Meta for audio annotation.
                </p>
                <p>
                  Justin’s technical workflow is rigorous. Utilizing Logic Pro and Ableton Live, he bridges the gap between raw generation and professional polish. By employing iZotope RX11 for spectral repair and a suite of high-end plugins—including FabFilter, Pultec, and The God Particle—he removes the "AI artifacts" to reveal the soul underneath.
                </p>
                <p>
                   His discography reflects this duality. LoserDub represents his roots in pure, human-made Indie Electronic, defined by optimistic nostalgia. Meanwhile, his hybrid projects explore specific sonic landscapes: VISION (Pop/French Touch/Glitch), Le Vide (Modern French Pop), Flawed Future (EDM/Hardstyle), and Disarray (Alternative Rock).
                </p>
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
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                <div className="absolute -inset-4 border border-white/5 rotate-3 transition-transform duration-700 group-hover:rotate-0 pointer-events-none"></div>
                <div className="absolute -inset-4 border border-purple-500/20 -rotate-2 transition-transform duration-700 group-hover:rotate-0 pointer-events-none"></div>
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
  );
};

export default Biography;