import React from 'react';
import { Sliders, Headphones, Lightbulb, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onContactClick?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const services = [
    {
      icon: <Sliders size={32} />,
      title: "Hybrid Mixing",
      description: "Blending analog warmth with digital precision. I treat generative stems as raw material, applying spectral repair and dynamic processing to achieve industry-standard loudness and clarity.",
      price: "Starting at $50/track"
    },
    {
      icon: <Headphones size={32} />,
      title: "Audio Review",
      description: "Detailed feedback on your productions. Whether human-composed or AI-generated, get actionable advice on arrangement, sound design, and mix balance.",
      price: "Inquire for Pricing"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Consultation",
      description: "Stuck in the loop? Let's break down your workflow. I offer guidance on integrating generative tools into your creative process without losing your artistic identity.",
      price: "Contact for Rates"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up max-w-7xl mx-auto">
      <div className="mb-20 text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-white uppercase tracking-tighter">
          Studio <span className="text-transparent text-stroke">Services</span>
        </h2>
        <p className="text-white/60 font-light max-w-2xl mx-auto">
          Elevate your sonic identity. Professional engineering and guidance for the modern hybrid artist.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-500 hover:border-purple-500/30 flex flex-col items-center text-center relative overflow-hidden">
             {/* Hover Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10 mb-6 p-4 rounded-full border border-white/10 bg-black group-hover:border-purple-500/50 transition-colors duration-500 text-purple-400">
                {service.icon}
             </div>
             
             <h3 className="relative z-10 text-xl font-display font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h3>
             <p className="relative z-10 text-white/60 text-sm leading-relaxed mb-8 flex-grow">
               {service.description}
             </p>
             
             <div className="relative z-10 mt-auto w-full pt-6 border-t border-white/5">
                <span className="block text-xs font-mono text-white/40 mb-4">{service.price}</span>
                <button 
                  onClick={onContactClick}
                  className="w-full py-3 bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-all duration-300 uppercase text-xs font-bold tracking-widest flex items-center justify-center gap-2"
                >
                  Inquire <ArrowRight size={14} />
                </button>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;