import React from 'react';

const SoundCloudPlayer: React.FC = () => {
  // Updated URL to point to the visiontracks profile
  const trackUrl = "https%3A//soundcloud.com/visiontracks";

  return (
    <div className="w-full max-w-3xl mx-auto my-12 z-20 px-4">
      <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black">
        <iframe 
          width="100%" 
          height="300" 
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