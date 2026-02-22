import React from 'react';
import { ArrowLeft, Cpu, Fingerprint, Waves } from 'lucide-react';

interface WhatIsHybridProps {
  onBack: () => void;
}

const WhatIsHybrid: React.FC<WhatIsHybridProps> = ({ onBack }) => {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center space-y-6">
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-tight">
          What is <br className="sm:hidden" /><span className="text-transparent text-stroke">Hybrid</span> Production?
        </h2>
        <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* SEO Intro */}
      <div className="prose prose-invert prose-lg mx-auto mb-20 text-center sm:text-left max-w-4xl bg-zinc-900/30 p-8 border border-white/5 backdrop-blur-sm rounded-sm">
        <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90 mb-6">
          <strong className="text-purple-400">Hybrid Production</strong> is the definitive workflow of the post-AI musical landscape.
          Emerging from communities like <a href="https://reddit.com/r/hybridproduction" target="_blank" rel="noopener noreferrer" className="font-mono text-sm bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors text-purple-300 no-underline">r/hybridproduction</a>, it rejects the binary choice between "human" and "machine."
        </p>
        <p className="text-white/60 font-light">
          Instead, it treats Generative AI not as a replacement for the artist, but as a high-fidelity instrument—a chaotic synthesizer capable of infinite texture.
          The Hybrid Producer is an editor, a curator, and a sonic sculptor who mines the algorithmic void for gold, then refines it with traditional engineering,
          music theory, and raw human emotion. It is the art of <strong>humanizing the synthetic</strong>.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 mb-20 opacity-30">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <span className="font-mono text-xs whitespace-nowrap tracking-[0.2em]">THE METHODOLOGY</span>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      {/* Method Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Method 1 */}
        <div className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-500 hover:border-purple-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="mb-6 text-purple-400 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Fingerprint size={48} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wider">Method #01</h3>
            <h4 className="text-xs font-mono text-white/50 mb-4 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">The Curator</h4>
            <p className="text-white/60 text-sm leading-relaxed">
                Putting prompts together in the optimal order, using the best descriptors, structuring prompts to get intended output.
            </p>
          </div>
        </div>

        {/* Method 2 */}
        <div className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-500 hover:border-cyan-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="mb-6 text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Cpu size={48} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wider">Method #02</h3>
            <h4 className="text-xs font-mono text-white/50 mb-4 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">The Architect</h4>
            <p className="text-white/60 text-sm leading-relaxed">
                Giving the model the skeleton of the idea, and allowing it to refine an idea.
            </p>
          </div>
        </div>

        {/* Method 3 */}
        <div className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-500 hover:border-yellow-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="mb-6 text-yellow-400 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Waves size={48} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wider">Method #03</h3>
            <h4 className="text-xs font-mono text-white/50 mb-4 uppercase tracking-widest border-b border-white/10 pb-2 inline-block">The Alchemist</h4>
            <p className="text-white/60 text-sm leading-relaxed">
                Spectral repair and mixing. Removing artifacts to reveal the high-fidelity soul beneath.
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 px-8 py-4 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-sm uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Return to Signal
        </button>
      </div>
    </section>
  );
};

export default WhatIsHybrid;