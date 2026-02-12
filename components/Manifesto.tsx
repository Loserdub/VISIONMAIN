import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/40 backdrop-blur-sm min-h-[60vh] flex items-center animate-fade-in-up">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 mb-6 uppercase">Manifesto</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-white/90">
          "While others argue over black or white - pure human or pure AI - all or nothing - the future exists in the <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-100 to-gray-500 font-bold">grey</span>. Hybrid production is the search for the soul inside the algorithm. In some form, this is the only way forward with the modern music industry."
        </p>
        <div className="mt-12 h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Manifesto;