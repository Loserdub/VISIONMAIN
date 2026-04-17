import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';

const projectsSchemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Creative Projects | Justin Ray - Hybrid Producer",
  "description": "Explore Justin Ray's creative web apps: r",
  "url": "https://jray.me/projects",
  "mainEntity": {
    "@type": "ItemList",
    "itemListOrder": "https://schema.org/ItemListUnordered",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebApplication",
          "name": "Black Mirror",
          "url": "https://jray.me/black-mirror.html",
          "description": "Summon Your Digital Twin",
          "operatingSystem": "Web",
          "applicationCategory": "EntertainmentApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebApplication",
          "name": "VISION SYNTH",
          "url": "https://midi-subtractive-synthesizer-548454922545.us-west1.run.app",
          "description": "Desktop Polyphonic Synthesizer",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/Subtractive"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebApplication",
          "name": "ChordCompose",
          "url": "https://loserdub.github.io/chordcreate/",
          "description": "Chord Arranger / Idea sketch pad with exportable MIDI",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/chordcreate"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebApplication",
          "name": "FractalAudio",
          "url": "https://loserdub.github.io/FractalAudio/",
          "description": "Audio Processing & Effects",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/FractalAudio"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "WebApplication",
          "name": "IMAGESIZER",
          "url": "https://loserdub.github.io/IMAGESIZER",
          "description": "Image Resizing and Processing",
          "operatingSystem": "Web",
          "applicationCategory": "UtilitiesApplication",
          "sameAs": "https://github.com/loserdub/IMAGESIZER"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "WebApplication",
          "name": "J-DAW",
          "url": "https://loserdub.github.io/jdaw/",
          "description": "Browser-based Digital Audio Workstation",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/jdaw"
        }
      }
    ]
  }
};

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
      <Head>
        <title>Creative Projects | Justin Ray - Hybrid Producer</title>
        <meta name="description" content="Explore Justin Ray's creative web apps" />
        <link rel="canonical" href="https://jray.me/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jray.me/projects" />
        <meta property="og:title" content="Creative Projects | Justin Ray - Hybrid Producer" />
        <meta property="og:description" content="Explore Justin Ray's creative web apps: VISION SYNTH (polyphonic synthesizer), ChordCompose (MIDI sketchpad), FractalAudio (audio effects), IMAGESIZER, and J-DAW (browser-based DAW)." />
        <meta property="og:image" content="https://jray.me/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://jray.me/projects" />
        <meta name="twitter:title" content="Creative Projects | Justin Ray - Hybrid Producer" />
        <meta name="twitter:description" content="Explore Justin Ray's creative web apps: VISION SYNTH (polyphonic synthesizer), ChordCompose (MIDI sketchpad), FractalAudio (audio effects), IMAGESIZER, and J-DAW (browser-based DAW)." />
        <meta name="twitter:image" content="https://jray.me/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchemaData) }}
        />
      </Head>
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
                {/* Black Mirror Card */}
                <article
                    className="group relative aspect-video border transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden"
                    style={{
                        background: '#0a0a0f',
                        borderColor: 'rgba(201,168,76,0.25)',
                        boxShadow: 'inset 0 0 40px rgba(41,121,255,0.04), inset 0 0 40px rgba(229,57,53,0.03)',
                    }}
                >
                    {/* Scanlines overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0"
                        style={{
                            background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 4px)',
                        }}
                    />
                    {/* Red/blue ambient glow */}
                    <div
                        className="absolute pointer-events-none z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            inset: '-40% -20%',
                            background: 'radial-gradient(ellipse at 30% 0%,rgba(41,121,255,0.09),transparent 55%),radial-gradient(ellipse at 80% 100%,rgba(229,57,53,0.08),transparent 55%)',
                        }}
                    />
                    {/* Gold border glow on hover */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            boxShadow: '0 0 24px rgba(201,168,76,0.18), inset 0 0 24px rgba(201,168,76,0.06)',
                        }}
                    />

                    <div className="relative z-10">
                        <h2
                            className="text-xl font-display font-bold mb-2 uppercase tracking-widest"
                            style={{
                                color: '#c9a84c',
                                textShadow: '0 0 18px rgba(201,168,76,0.4)',
                            }}
                        >
                            Black Mirror
                        </h2>
                        <p className="text-xs font-mono mb-6 tracking-widest uppercase" style={{ color: 'rgba(232,232,240,0.6)', letterSpacing: '0.18em' }}>
                            Summon Your Digital Twin
                        </p>
                        <a
                            href="/black-mirror.html"
                            aria-label="Launch Black Mirror - Summon Your Digital Twin"
                            className="inline-block px-6 py-2 text-[10px] tracking-widest uppercase transition-all duration-300"
                            style={{
                                color: 'rgba(201,168,76,0.9)',
                                background: 'rgba(20,20,32,0.55)',
                                border: '1px solid rgba(201,168,76,0.35)',
                                borderRadius: '4px',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.7)';
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 18px rgba(41,121,255,0.2),0 0 18px rgba(229,57,53,0.15)';
                                handleMouseEnter(e, "Summon Your Digital Twin");
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.35)';
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '';
                                handleMouseLeave();
                            }}
                        >
                            Live
                        </a>
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

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-xl font-display font-bold text-white mb-2">VISION SYNTH</h2>
                        <p className="text-xs font-mono text-white/50 mb-4">It's Poly-FUN-ic !</p>
                        <a 
                           href="https://midi-subtractive-synthesizer-548454922545.us-west1.run.app"
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
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
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
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
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
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
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
                    
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    
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
