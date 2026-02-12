import React from 'react';

const OilBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Abstract Colorful Blobs mimicking oil paints */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] opacity-60 oil-bg-animate"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4), transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.3), transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2), transparent 50%),
            linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)
          `,
          filter: 'blur(80px) contrast(120%) saturate(150%)',
          transform: 'translateZ(0)' // Hardware accel
        }}
      />
      
      {/* Texture Overlay (Noise) */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ filter: 'url(#noise)' }}></div>
      
      {/* SVG Oil Filter Application Layer on a random image for extra texture */}
      <img 
        src="https://picsum.photos/seed/abstract_art_99/1920/1080" 
        alt="Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light"
        style={{ filter: 'url(#oil-paint)' }}
      />
    </div>
  );
};

export default OilBackground;