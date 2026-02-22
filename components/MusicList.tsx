import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'loserdub',
    name: 'loserdub',
    description: 'Emotional Dissonance Meets Optimistic Nostalgia. A raw exploration of melody through the lens of imperfection.',
    tags: ['#Indie', '#Electronic', '#LoFi'],
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-red-500'
  },
  {
    id: 'vision',
    name: 'VISION',
    description: 'Cinematic soundscapes for a future that hasn\'t happened yet. Polished, synthetic, and deeply immersive.',
    tags: ['#Hybrid', '#Cinematic', '#FutureBass'],
    imageUrl: 'https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-cyan-500'
  },
  {
    id: 'levide',
    name: 'le vide',
    description: 'The Void. Minimalist textures and negative space. Music that breathes in the silence between notes.',
    tags: ['#French', '#AltPop', '#Minimalism'],
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-white'
  },
  {
    id: 'flawedfuture',
    name: 'flawed future',
    description: 'Glitch mechanics and broken rhythms. Embracing the artifacts of digital decay.',
    tags: ['#EDM', '#Hardstyle', '#Glitch'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-purple-500'
  },
  {
    id: 'disarray',
    name: 'disarray',
    description: 'Controlled chaos. High BPM, breakcore influences, and the beauty of structural collapse.',
    tags: ['#Alternative', '#Indie', '#Breakcore'],
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-yellow-500'
  }
];

const MusicList: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full">
      <div className="container mx-auto max-w-5xl">
         {/* Header */}
         <div className="mb-20 text-center">
             <h2 className="text-4xl sm:text-5xl font-display font-bold text-transparent text-stroke uppercase tracking-widest">
                Sonic Projects
             </h2>
             <div className="h-1 w-24 bg-purple-500 mx-auto mt-6 rounded-full"></div>
         </div>

         <div className="flex flex-col gap-32">
            {PROJECTS.map((project, idx) => (
                <div key={project.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center group`}>
                    
                    {/* Image Container */}
                    <div className="w-full md:w-1/2 relative">
                         {/* Creative Border/Background Effect */}
                        <div className="absolute inset-0 bg-zinc-800 border border-white/10 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        
                        <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden border border-white/10 bg-black">
                             {/* Image with filters */}
                            <img 
                                src={project.imageUrl} 
                                alt={project.name}
                                className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:contrast-110 filter grayscale group-hover:grayscale-0"
                            />
                            
                            {/* Color Overlay */}
                            <div className={`absolute inset-0 mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500 ${project.color}`}></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter uppercase relative">
                            {project.name}
                            {/* Decorative dot */}
                            <span className={`absolute -top-2 -right-4 w-2 h-2 rounded-full ${project.color.replace('bg-', 'bg-')}`}></span> 
                        </h3>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/60 group-hover:border-white/30 group-hover:text-purple-300 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-white/70 font-light leading-relaxed mb-8 max-w-md">
                            {project.description}
                        </p>

                        <button className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-1">
                            Explore Project
                        </button>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default MusicList;