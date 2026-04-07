import React, { useState } from 'react';
import { X, Radio, Play } from 'lucide-react';

const TRACK_URL = "https%3A//soundcloud.com/visiontracks";
const IFRAME_SRC = `https://w.soundcloud.com/player/?url=${TRACK_URL}&color=%2394a3b8&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;

const SoundCloudPlayer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [iframeActive, setIframeActive] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50 px-4 animate-fade-in-up">
      <div className="w-full max-w-2xl">
        {/* Label above the player */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2 opacity-50 text-[10px] tracking-[0.4em] uppercase font-mono text-white">
            <Radio size={12} className="animate-pulse text-slate-400" />
            Latest Transmission
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="group flex items-center gap-1 text-white/40 hover:text-white transition-colors"
            aria-label="Close player"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Dismiss</span>
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Player Container — explicit height prevents CLS */}
        <div
          className="relative overflow-hidden rounded-sm border border-white/10 bg-black/80 backdrop-blur-md shadow-2xl shadow-slate-500/10"
          style={{ height: 120 }}
        >
          {iframeActive ? (
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
          ) : (
            /* Facade / placeholder — no network request until clicked */
            <button
              onClick={() => setIframeActive(true)}
              className="w-full h-full flex items-center justify-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Load SoundCloud player"
            >
              <Play size={20} strokeWidth={1.5} className="text-slate-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest">Click to load player</span>
            </button>
          )}

          {/* Subtle decorative edge */}
          <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
