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
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-transparent text-stroke uppercase">
            The Projects
          </h2>
          <span className="hidden sm:block text-xs font-mono text-white/50">
            01 — 0{PROJECTS.length}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;