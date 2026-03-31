import React, { useState } from 'react';
import { X, Radio } from 'lucide-react'; // Adding icons for a pro look

const SoundCloudPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Track URL remains the same, but we will change the player parameters
  const trackUrl = "https%3A//soundcloud.com/visiontracks";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl animate-fade-in-up">
      {/* Label above the player */}
      <div className="flex items-center justify-between mb-2 px-2">
        <div className="flex items-center gap-2 opacity-50 text-[10px] tracking-[0.4em] uppercase font-mono text-white">
          <Radio size={12} className="animate-pulse text-purple-500" />
          Latest Transmission
        </div>
        
        {/* Improved Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="group flex items-center gap-1 text-white/40 hover:text-white transition-colors"
          aria-label="Close player"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Dismiss</span>
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Player Container */}
      <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black/80 backdrop-blur-md shadow-2xl shadow-purple-500/10">
        <iframe 
          width="100%" 
          height="120" // Reduced height for a sleeker look
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          /* 
             CHANGES MADE TO SRC:
             - visual=false: This brings back the track name and navigation list.
             - height=120: Standard player height.
             - color=%23a855f7: Matches your purple theme.
          */
          src={`https://w.soundcloud.com/player/?url=${trackUrl}&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
          title="SoundCloud Player"
          className="opacity-90 hover:opacity-100 transition-opacity"
        >
        </iframe>
        
        {/* Subtle decorative edge */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
