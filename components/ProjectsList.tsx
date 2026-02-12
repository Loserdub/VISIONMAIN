import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'loserdub',
    name: 'loserdub',
    description: 'Raw, gritty low-end frequencies meeting emotional dissonance.',
    tags: ['dubstep', 'lo-fi'],
    imageUrl: 'https://picsum.photos/seed/loserdub/800/800',
    color: 'bg-red-500'
  },
  {
    id: 'vision',
    name: 'VISION',
    description: 'Cinematic soundscapes for a future that hasn\'t happened yet.',
    tags: ['future-garage', 'ambient'],
    imageUrl: 'https://picsum.photos/seed/vision/800/800',
    color: 'bg-cyan-500'
  },
  {
    id: 'levide',
    name: 'le vide',
    description: 'The Void. Minimalist textures and negative space.',
    tags: ['minimal', 'drone'],
    imageUrl: 'https://picsum.photos/seed/levide/800/800',
    color: 'bg-white'
  },
  {
    id: 'flawedfuture',
    name: 'flawed future',
    description: 'Glitch mechanics and broken rhythms.',
    tags: ['glitch', 'idm'],
    imageUrl: 'https://picsum.photos/seed/flawed/800/800',
    color: 'bg-purple-500'
  },
  {
    id: 'disarray',
    name: 'disarray',
    description: 'Controlled chaos. High BPM, breakcore influences.',
    tags: ['breakcore', 'noise'],
    imageUrl: 'https://picsum.photos/seed/disarray/800/800',
    color: 'bg-yellow-500'
  }
];

const ProjectsList: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full overflow-hidden">
      <div className="container mx-auto max-w-[95vw] xl:max-w-7xl">
        
        {/* MUSIC PROJECTS SECTION */}
        <div className="mb-20">
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-transparent text-stroke uppercase tracking-wider">
                The Projects: Music
            </h2>
            <span className="hidden sm:block text-xs font-mono text-white/50">
                01 — 0{PROJECTS.length}
            </span>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/5 -mx-4 px-4 sm:mx-0 sm:px-0">
            {PROJECTS.map((project, idx) => (
                <div key={project.id} className="min-w-[85vw] sm:min-w-[300px] md:min-w-[280px] lg:min-w-[20%] flex-shrink-0 snap-center">
                <ProjectCard project={project} index={idx} />
                </div>
            ))}
            </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20"></div>

        {/* CREATIVE APPS SECTION */}
        <div>
            <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-transparent text-stroke uppercase tracking-wider">
                    Creative Apps
                </h2>
                <span className="hidden sm:block text-xs font-mono text-white/50">
                    EXPERIMENTAL
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder Card 1 */}
                <div className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-display font-bold text-white mb-2">Gemini Canvas</h3>
                        <p className="text-xs font-mono text-white/50 mb-4">Generative Visual Interface</p>
                        <span className="inline-block px-3 py-1 border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Coming Soon</span>
                    </div>
                </div>

                 {/* Placeholder Card 2 */}
                 <div className="group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-display font-bold text-white mb-2">Sonic Neural Net</h3>
                        <p className="text-xs font-mono text-white/50 mb-4">AI Audio Processing Tool</p>
                        <span className="inline-block px-3 py-1 border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Coming Soon</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsList;