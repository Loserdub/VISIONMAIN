import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import { Mail, Instagram, Send, Link as LinkIcon } from 'lucide-react';

const Contact: React.FC = () => {


  return (
    <>
    <Head>
      <title>Contact | Justin Ray — Collaboration, Booking & Creative Inquiries</title>
      <meta name="description" content="Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." />
      <link rel="canonical" href="https://jray.me/contact/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jray.me/contact/" />
      <meta property="og:title" content="Contact | Justin Ray — Collaboration & Booking" />
      <meta property="og:description" content="Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." />
      <meta property="og:image" content="https://jray.me/favicon.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://jray.me/contact/" />
      <meta name="twitter:title" content="Contact | Justin Ray — Collaboration & Booking" />
      <meta name="twitter:description" content="Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." />
      <meta name="twitter:image" content="https://jray.me/favicon.png" />
    </Head>
    <footer className="py-20 px-4 border-t border-white/10 bg-black relative z-10 animate-fade-in-up">

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info & Socials */}
          <div className="space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Connect</h1>
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
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative"
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
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50">
                    Tik-Tok Profile
                  </div>
                </a>

               {/* Linktree / All Links */}
          <a 
            href="https://trustnodelogic.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Trust Node Logic"
            className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative"
          >
            <LinkIcon size={20} />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50">
              Trust Node Logic
            </div>
          </a>

                {/* Email */}
                <a 
                  href="mailto:jray517@gmail.com" 
                  aria-label="Send Email"
                  className="p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative"
                >
                  <Mail size={20} />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50">
                    Email Me
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-slate-900/20 to-transparent blur-xl -z-10" />
            <form className="space-y-6 p-8 bg-white/[0.02] border border-white/5 backdrop-blur-sm" action="mailto:jray517@gmail.com" method="GET" encType="text/plain">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Identity</label>
                    <input 
                        type="text" 
                        name="subject"
                        placeholder="NAME" 
                        required
                        className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Frequency</label>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="EMAIL" 
                        className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Transmission</label>
                  <textarea 
                      rows={4} 
                      name="body"
                      placeholder="ENTER MESSAGE..." 
                      required
                      className="w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full group relative overflow-hidden bg-white text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-slate-700 hover:text-white transition-all duration-300"
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
              <span className="text-white/60 font-semibold transition-all duration-500 hover:text-slate-300 hover:tracking-[0.4em] hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] cursor-default">
                ALL RIGHTS RESERVED
              </span>
           </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Contact;
