import React, { useState } from 'react';
import { X, Radio, Play } from 'lucide-react';

const TRACK_URL = "https%3A//soundcloud.com/visiontracks";
const IFRAME_SRC = `https://w.soundcloud.com/player/?url=${TRACK_URL}&color=%2394a3b8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;

const SoundCloudPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 px-4 animate-fade-in-up">
      <div className="w-full max-w-2xl">
        {/* Label above the player */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2 opacity-50 text-[10px] tracking-[0.4em] uppercase font-mono text-white">
            <Radio size={12} className="animate-pulse text-slate-400" />
            Latest Transmission
          </div>
        </div>

        {/* Player Container — explicit height prevents CLS */}
        <div
          className="relative overflow-hidden rounded-sm border border-white/10 bg-black/80 backdrop-blur-md shadow-2xl shadow-slate-500/10"
          style={{ height: 120 }}
        >
          <iframe
            width="100%"
            height="120"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            loading="lazy"
            src={IFRAME_SRC}
            title="SoundCloud Player"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />

          {/* Subtle decorative edge */}
          <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
