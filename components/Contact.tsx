import React, { useState } from 'react';
import { Mail, Instagram, Send, Link as LinkIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: '' });

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    setTooltip({ show: true, x: e.clientX, y: e.clientY, text });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSendTransmission = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    
    // Identity -> Subject
    // Frequency -> Return Email (Included in body)
    // Transmission -> Body
    
    const subject = name;
    const body = `${message}\n\n---\nReturn Frequency: ${email}`;
    
    window.location.href = `mailto:jray517@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer className="py-20 px-4 border-t border-white/10 bg-black relative z-10 animate-fade-in-up">
      {/* Tooltip Portal */}
      {tooltip.show && (
        <div 
            className="fixed z-50 pointer-events-none px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap"
            style={{ 
                left: tooltip.x + 15, 
                top: tooltip.y + 15,
            }}
        >
            {tooltip.text}
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info & Socials */}
          <div className="space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Connect</h2>
              <p className="text-white/60 font-light max-w-md leading-relaxed">
                Interested in collaboration, booking, or sharing audio stems? Send a transmission across the void. We monitor all frequencies.
              </p>
              
              <div className="flex gap-4">
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram Profile"
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <Instagram size={20} />
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@im_the_vision" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok Profile"
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                  onMouseEnter={(e) => handleMouseEnter(e, "Tik-Tok Profile")}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="lucide lucide-music-2"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>

                {/* Linktree / All Links */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="All Links (Linktree)"
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <LinkIcon size={20} />
                </a>

                {/* Email */}
                <a 
                  href="mailto:jray517@gmail.com" 
                  aria-label="Send Email"
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group"
                  onMouseEnter={(e) => handleMouseEnter(e, "Email Me")}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-purple-900/20 to-transparent blur-xl -z-10" />
            <form className="space-y-6 p-8 bg-white/[0.02] border border-white/5 backdrop-blur-sm" onSubmit={handleSendTransmission}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Identity</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="NAME" 
                        required
                        className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Frequency</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="EMAIL" 
                        required
                        className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] transition-colors font-mono"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Transmission</label>
                  <textarea 
                      rows={4} 
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="ENTER MESSAGE..." 
                      required
                      className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.02] transition-colors font-mono resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full group relative overflow-hidden bg-white text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Transmission <Send size={16} />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Centered Copyright Section */}
        <div className="border-t border-white/10 pt-12 flex flex-col items-center justify-center text-center space-y-4">
           <div className="text-white/40 font-mono text-sm tracking-widest uppercase flex flex-col sm:flex-row items-center gap-2">
              <span>&copy; {new Date().getFullYear()} HYBRID PRODUCTION.</span>
              <span className="hidden sm:block text-white/20">|</span>
              <span className="text-white/60 font-semibold transition-all duration-500 hover:text-purple-400 hover:tracking-[0.4em] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-default">
                ALL RIGHTS RESERVED
              </span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;