import React, { useState } from 'react';

const SoundCloudPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // Updated URL to point to the visiontracks profile
  const trackUrl = "https%3A//soundcloud.com/visiontracks";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black mx-auto max-w-4xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded hover:bg-black/70 transition-colors"
          aria-label="Close player"
        >
          ×
        </button>
        <iframe 
          width="100%" 
          height="200" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src={`https://w.soundcloud.com/player/?url=${trackUrl}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          title="SoundCloud Player"
        >
        </iframe>
      </div>
      <div className="text-center mt-2 opacity-50 text-[10px] tracking-widest uppercase font-mono">
        Latest Transmission
      </div>
    </div>
  );
};

export default SoundCloudPlayer;