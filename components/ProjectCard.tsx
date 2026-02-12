import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="group relative w-full aspect-square overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-white/20"
      style={{
        animationDelay: `${index * 150}ms` 
      }}
    >
      {/* Background Image with "Oil" effect on hover */}
      <div className="absolute inset-0">
        <img 
          src={project.imageUrl} 
          alt={project.name}
          className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-80"
          style={{ filter: 'url(#oil-paint)' }} // Applying the global SVG filter for texture
        />
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay ${project.color}`} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
        <div className="flex justify-between items-start translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <span className="text-[8px] font-mono border border-white/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm text-white/80">
             0{index + 1}
           </span>
           <ArrowUpRight className="text-white/80 w-4 h-4" />
        </div>

        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1 uppercase tracking-tighter mix-blend-difference">
            {project.name}
          </h3>
          <p className="text-white/70 text-[10px] sm:text-xs font-light leading-relaxed line-clamp-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.tags.map(tag => (
              <span key={tag} className="text-[8px] uppercase tracking-wider text-white/50 border border-white/10 px-1">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;