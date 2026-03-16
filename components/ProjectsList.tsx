import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ProjectsList: React.FC = () => {
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: '' });

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    setTooltip({ show: true, x: e.clientX, y: e.clientY, text });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  return (
    <>
      <Helmet>
        <title>Creative Projects | Justin Ray - Hybrid Producer</title>
        <meta name="description" content="Explore Justin Ray's creative web apps: VISION SYNTH (polyphonic synthesizer), ChordCompose (MIDI sketchpad), FractalAudio (audio effects), IMAGESIZER, and J-DAW (browser-based DAW)." />
      </Helmet>
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full overflow-hidden">
      {/* Tooltip Portal */}
      {tooltip.show && (
        <div 
            className="fixed z-50 pointer-events-none px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
            style={{ 
                left: tooltip.x + 15, 
                top: tooltip.y + 15,
            }}
        >
            {tooltip.text}
        </div>
      )}

      <div className="container mx-auto max-w-[95vw] xl:max-w-7xl">

        {/* CREATIVE APPS SECTION */}
        <section aria-label="Creative Apps">
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-transparent text-stroke uppercase tracking-wider">
                    Creative Apps
                </h1>
                <span className="hidden sm:block text-xs font-mono text-white/50">
                    EXPERIMENTAL
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AestheticLens Card */}
                <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
                            alt="AestheticLens Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">AestheticLens</h2>
                        <p className="text-xs font-mono text-white/50 mb-4">Computational Visual Analysis</p>
                        <span className="inline-block px-3 py-1 border border-white/10 text-[10px] tracking-widest uppercase text-white/40 backdrop-blur-sm bg-black/20">Coming Soon</span>
                    </div>
                </article>

                 {/* VISION SYNTH Card */}
                 <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop" 
                            alt="VISION SYNTH Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">VISION SYNTH</h2>
                        <p className="text-xs font-mono text-white/50 mb-4">It's Poly-FUN-ic !</p>
                        <a 
                           href="https://loserdub.github.io/Subtractive/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Launch VISION SYNTH - Desktop Polyphonic Synthesizer"
                           className="inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300"
                           onMouseEnter={(e) => handleMouseEnter(e, "Desktop Polyphonic Synthesizer")}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                        >
                           Launch
                        </a>
                    </div>
                </article>

                {/* ChordCompose Card */}
                <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" 
                            alt="ChordCompose Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">ChordCompose</h2>
                        <p className="text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto">Chord Arranger / Idea sketch pad with exportable MIDI</p>
                        <a 
                           href="https://loserdub.github.io/chordcreate/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Launch ChordCompose - MIDI Chord Idea Sketchpad"
                           className="inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300"
                           onMouseEnter={(e) => handleMouseEnter(e, "MIDI Idea Sketchpad")}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                        >
                           Launch
                        </a>
                    </div>
                </article>

                {/* FractalAudio Card */}
                <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop" 
                            alt="FractalAudio Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">FractalAudio</h2>
                        <p className="text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto">Audio Processing &amp; Effects</p>
                        <a 
                           href="https://loserdub.github.io/FractalAudio/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Launch FractalAudio - Audio Processing and Effects"
                           className="inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300"
                           onMouseEnter={(e) => handleMouseEnter(e, "FractalAudio Project")}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                        >
                           Launch
                        </a>
                    </div>
                </article>

                {/* IMAGESIZER Card */}
                <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop" 
                            alt="IMAGESIZER Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">IMAGESIZER</h2>
                        <p className="text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto">Image Resizing and Processing</p>
                        <a 
                           href="https://loserdub.github.io/IMAGESIZER"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Launch IMAGESIZER - Image Resizing Utility"
                           className="inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300"
                           onMouseEnter={(e) => handleMouseEnter(e, "IMAGESIZER Utility")}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                        >
                           Launch
                        </a>
                    </div>
                </article>

                {/* J-DAW Card */}
                <article className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop" 
                            alt="J-DAW Background" 
                            className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">J-DAW</h2>
                        <p className="text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto">your DAW in the browser!</p>
                        <a 
                           href="https://loserdub.github.io/jdaw/"
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Launch J-DAW - Browser-based Digital Audio Workstation"
                           className="inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300"
                           onMouseEnter={(e) => handleMouseEnter(e, "Browser-based DAW")}
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                        >
                           Launch
                        </a>
                    </div>
                </article>

            </div>
        </section>

      </div>
    </section>
    </>
  );
};

export default ProjectsList;