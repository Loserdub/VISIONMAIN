import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const PROJECTS: Project[] = [
  {
    id: 'loserdub',
    name: 'loserdub',
    description: 'Emotional Dissonance Meets Optimistic Nostalgia. A raw exploration of melody through the lens of imperfection.',
    tags: ['#Indie', '#Electronic', '#LoFi'],
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-red-500',
    spotifyUrl: 'https://open.spotify.com/artist/3VZelnnW9OR0DyR2qRn4Oq'
  },
  {
    id: 'vision',
    name: 'VISION',
    description: 'Cinematic soundscapes for a future that hasn\'t happened yet. Polished, synthetic, and deeply immersive.',
    tags: ['#Hybrid', '#Cinematic', '#FutureBass'],
    imageUrl: './vision.png', 
    color: 'bg-cyan-500',
    spotifyUrl: 'https://open.spotify.com/artist/6GGZwLOLxVxYGOcMry3NDi'
  },
  {
    id: 'levide',
    name: 'le vide',
    description: 'The Void. Minimalist textures and negative space. Music that breathes in the silence between notes.',
    tags: ['#French', '#AltPop', '#Minimalism'],
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-white',
    spotifyUrl: 'https://open.spotify.com/artist/42TmrCeIumkPRyTNOPP78t'
  },
  {
    id: 'flawedfuture',
    name: 'flawed future',
    description: 'Glitch mechanics and broken rhythms. Embracing the artifacts of digital decay.',
    tags: ['#EDM', '#Hardstyle', '#Glitch'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-purple-500',
    spotifyUrl: 'https://open.spotify.com/artist/3FNFzRyU0PCA2vjihWsg6y'
  },
  {
    id: 'disarray',
    name: 'disarray',
    description: 'Controlled chaos. High BPM, breakcore influences, and the beauty of structural collapse.',
    tags: ['#Alternative', '#Indie', '#Breakcore'],
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800', 
    color: 'bg-yellow-500',
    spotifyUrl: 'https://open.spotify.com/artist/6TlAxGL1Hm4FRWfTxprlMi'
  }
];

const MusicList: React.FC = () => {
  const mainProjects = PROJECTS.slice(0, 3);
  const secondaryProjects = PROJECTS.slice(3);

  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full">
      <div className="container mx-auto max-w-6xl">
         {/* Header */}
         <div className="mb-12 text-center">
             <h2 className="text-4xl sm:text-5xl font-display font-bold text-transparent text-stroke uppercase tracking-widest">
                Sonic Projects
             </h2>
             <div className="h-1 w-24 bg-purple-500 mx-auto mt-6 rounded-full"></div>
         </div>

         {/* Row 1: First 3 Projects (Squares) */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mainProjects.map((project) => (
               <a 
                 key={project.id}
                 href={project.spotifyUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`group relative aspect-square w-full border border-white/10 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center overflow-hidden cursor-pointer
                    bg-zinc-900/40 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
                 `}
               >
                  {/* Subtle Background Glow on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${project.color}`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
                      <h3 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter transition-all duration-500 text-white group-hover:text-purple-400 group-hover:scale-110">
                        {project.name}
                      </h3>
                      
                      <div className="flex flex-wrap justify-center gap-2 relative">
                        {/* Decorative Line */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-[1px] w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-purple-500"></div>
                        
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono text-purple-400 group-hover:text-purple-300 uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                      </div>
                  </div>

                  {/* Description appearing from bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-white/10">
                       <p className="text-xs text-white/70 font-light leading-relaxed">
                           {project.description}
                       </p>
                   </div>
                   
                   {/* External Link Icon */}
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} className="text-white/50" />
                   </div>
               </a>
            ))}
         </div>

         {/* Row 2: Remaining Projects (Organized Section) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {secondaryProjects.map((project) => (
               <a 
                 key={project.id}
                 href={project.spotifyUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className={`group relative border border-white/5 hover:border-purple-500/30 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[180px] w-full cursor-pointer
                    bg-zinc-900/20 hover:bg-zinc-900/40
                 `}
               >
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${project.color}`}></div>
                   
                   <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider mb-3 transition-colors duration-300 text-white/60 group-hover:text-white">
                                {project.name}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono text-white/30 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                   </div>

                   {/* External Link Icon */}
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={14} className="text-white/30" />
                   </div>
               </a>
             ))}
         </div>
      </div>
    </section>
  );
};

export default MusicList;