import React, { useMemo } from 'react';

const OilBackground: React.FC = () => {
  // OPTIMIZED: Reduced numOctaves from 3 to 1 and adjusted frequency for performance
  // Use a data URI for noise to avoid expensive real-time SVG filter compositing on the entire screen
  const noiseBg = useMemo(() => {
    return `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`;
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
      {/* Abstract Colorful Blobs - Optimized gradients */}
      <div 
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-60 oil-bg-animate"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.3), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.2), transparent 40%),
            linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)
          `,
          filter: 'blur(60px)', // Reduced blur radius for performance
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'transform' // Hint to browser
        }}
      />
      
      {/* Lightweight Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay" 
        style={{ backgroundImage: noiseBg }}
      ></div>
    </div>
  );
};

export default OilBackground;