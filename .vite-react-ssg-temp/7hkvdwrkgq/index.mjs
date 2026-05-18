import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Head, ViteReactSSG } from "vite-react-ssg";
import { useMemo, useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Disc, X, Menu, ExternalLink, ArrowRight, Sliders, Headphones, Lightbulb, Instagram, Link, Mail, Send } from "lucide-react";
const OilBackground = () => {
  const noiseBg = useMemo(() => {
    return `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`;
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-60 oil-bg-animate",
        style: {
          background: `
            radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.6), transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(51, 65, 85, 0.4), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(15, 23, 42, 0.5), transparent 40%),
            linear-gradient(45deg, #0a0a0a, #111111, #0f172a)
          `,
          filter: "blur(60px)",
          // Reduced blur radius for performance
          transform: "translateZ(0)",
          // Force hardware acceleration
          willChange: "transform"
          // Hint to browser
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.07] mix-blend-overlay",
        style: { backgroundImage: noiseBg }
      }
    )
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "w-full bg-black/90 border-t border-white/5 py-8 mt-auto z-20 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-white/40 text-xs font-mono tracking-widest uppercase text-center md:text-left", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Justin Ray. All Rights Reserved."
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "flex gap-6 text-xs font-medium tracking-widest uppercase text-white/60", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-white transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/what-is-hybrid", className: "hover:text-white transition-colors", children: "What Is Hybrid" }),
      /* @__PURE__ */ jsx("a", { href: "/projects", className: "hover:text-white transition-colors", children: "Projects" }),
      /* @__PURE__ */ jsx("a", { href: "/music", className: "hover:text-white transition-colors", children: "Music" })
    ] })
  ] }) });
};
const BASE = "https://jray.me";
const buildPageUrl = (pathname) => {
  const clean = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  return `${BASE}${clean}`;
};
const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Music", path: "/music" },
    { label: "Projects", path: "/projects" },
    { label: "Bio", path: "/bio" },
    { label: "What Is Hybrid", path: "/what-is-hybrid" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Disc, { className: "animate-spin-slow text-white", size: 24 }),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-bold tracking-widest uppercase text-white", children: "JRAY.ME" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-white/70", "aria-label": "Main navigation", children: navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return /* @__PURE__ */ jsxs(
          "a",
          {
            href: item.path,
            className: `hover:text-white transition-colors relative ${isActive ? "text-white" : ""}`,
            children: [
              item.label,
              isActive && /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-[1px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" })
            ]
          },
          item.path
        );
      }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: "md:hidden text-white cursor-pointer",
          "aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
          "aria-expanded": mobileMenuOpen,
          children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
        }
      )
    ] }) }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-8 text-center text-2xl font-light tracking-widest uppercase", "aria-label": "Mobile navigation", children: navItems.map((item, index) => {
      const isActive = location.pathname === item.path;
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: item.path,
          className: `opacity-0 animate-fade-in-up hover:text-slate-300 transition-colors ${isActive ? "text-white font-bold" : "text-white/60"}`,
          style: { animationDelay: `${index * 150 + 100}ms` },
          children: item.label
        },
        item.path
      );
    }) }) })
  ] });
};
const App = () => {
  const location = useLocation();
  const canonicalUrl = buildPageUrl(location.pathname);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen font-sans selection:bg-white selection:text-black flex flex-col text-white", children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }) }),
    /* @__PURE__ */ jsx(OilBackground, {}),
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow w-full pt-24 pb-12 flex flex-col", id: "main-content", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const doodleImg = "/assets/doodle-CBs5MByj.jpg";
const Home = () => {
  const homeUrl = buildPageUrl("/");
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Justin Tyler Ray",
    "alternateName": ["jray", "Loserdub", "VISION"],
    "url": "https://jray.me/",
    "image": "https://jray.me/favicon.png",
    "jobTitle": "Hybrid Music Producer & Creative Technologist",
    "sameAs": [
      "https://github.com/loserdub",
      "https://reddit.com/r/hybridproduction"
    ],
    "knowsAbout": [
      "Hybrid Music Production",
      "Generative AI Audio",
      "Audio Engineering",
      "Software Engineering",
      "Creative Coding"
    ]
  };
  const scrollToHybrid = () => {
    const element = document.getElementById("hybrid");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  const links = [
    { label: "Projects", path: "/projects" },
    { label: "Music", path: "/music" },
    { label: "What Is Hybrid", path: "/what-is-hybrid" },
    { label: "Contact", path: "/contact" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-center gap-4 px-4 pt-8 pb-6 animate-fade-in-up", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/musicindustryforecast.html",
          className: "group relative inline-flex items-center justify-center px-8 py-3 overflow-visible rounded-sm bg-zinc-900/60 backdrop-blur-sm border border-white/20 hover:border-white/80 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full max-w-lg",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 z-20 bg-white text-black text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 shadow-[0_0_10px_rgba(255,255,255,0.3)]", children: "NEW!" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out overflow-hidden rounded-sm" }),
            /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-bold tracking-[0.15em] text-white uppercase", children: "The Liquidity of Sound" }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] font-light tracking-[0.2em] text-white/60 mt-1 uppercase", children: "2026–2031 Music Industry Forecast" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/agentichybridproduction.html",
          className: "group relative inline-flex items-center justify-center px-8 py-3 overflow-visible rounded-sm bg-zinc-900/60 backdrop-blur-sm border border-white/20 hover:border-white/80 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full max-w-lg",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out overflow-hidden rounded-sm" }),
            /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-bold tracking-[0.15em] text-white uppercase", children: "The Autonomous Virtual Studio" }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] font-light tracking-[0.2em] text-white/60 mt-1 uppercase", children: "Multi-Agent DAWs & Latent Space Interpolation" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative flex flex-col items-center px-4 py-12 sm:pt-20", children: [
      /* @__PURE__ */ jsxs(Head, { children: [
        /* @__PURE__ */ jsx("title", { children: "Justin Ray | Hybrid Production" }),
        /* @__PURE__ */ jsx("link", { rel: "canonical", href: homeUrl }),
        /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
        /* @__PURE__ */ jsx("meta", { property: "og:url", content: homeUrl }),
        /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Justin Ray | Creative Technologist & Hybrid Artist" }),
        /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Justin Ray is a Hybrid Producer and Creative Technologist blending Generative AI with traditional engineering to build innovative audio and visual tools." }),
        /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
        /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
        /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: homeUrl }),
        /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Justin Ray | Creative Technologist & Hybrid Artist" }),
        /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Justin Ray is a Hybrid Producer and Creative Technologist blending Generative AI with traditional engineering to build innovative audio and visual tools." }),
        /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" }),
        /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(personSchema) } })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "sr-only", children: "Hybrid Production | Justin Ray" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center z-10 space-y-4 max-w-5xl animate-fade-in-up flex flex-col items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center leading-none", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                fontFamily: '"DotGothic16", sans-serif',
                fontWeight: 400,
                color: "#fff"
              },
              className: "mix-blend-overlay opacity-90 max-w-full uppercase",
              children: "HYBRID"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-8", children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: "clamp(2.5rem, 6.5vw, 7rem)",
                fontFamily: '"DotGothic16", sans-serif',
                fontWeight: 400,
                color: "#fff"
              },
              className: "mix-blend-overlay opacity-90 max-w-full uppercase",
              children: "PRODUCTION"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-2xl font-light text-white/60 tracking-[0.2em] uppercase max-w-3xl mx-auto mt-4", children: "Creative Technologist & Hybrid Artist" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase", children: "The Philosophy" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl sm:text-3xl md:text-4xl font-light leading-tight text-white/90 font-sans", children: [
          '"While others argue over black or white - pure human or pure AI - all or nothing - the future exists in the ',
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-tr from-gray-500 via-gray-100 to-gray-500 font-bold", children: "grey" }),
          '. Hybrid production is the search for the soul inside the algorithm."'
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg sm:text-xl font-light text-white/60 mt-8 max-w-3xl mx-auto", children: [
          "As a ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "creative developer" }),
          " and artist, I don't just use the tools — I build them. Custom ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "in-browser audio environments" }),
          ", ",
          /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "AI-driven feedback" }),
          ", sample creation, bespoke workflows. When it comes to generative music, I don't start from a blank prompt. I start from something human, and let the algorithm react to it."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "w-full max-w-5xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold tracking-[0.3em] text-slate-400 mb-6 uppercase", children: "The Dissection" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl font-light text-white/80 max-w-3xl mx-auto mb-12", children: [
          "A study in identity. Exploring the spectrum of sound through a lens of ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Hybrid Production" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto", children: links.map((link, idx) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.path,
            className: "bg-zinc-900/80 border border-white/10 p-6 hover:border-slate-500/50 transition-all duration-500 flex flex-col justify-center text-center",
            children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold text-white", children: link.label })
          },
          idx
        )) }),
        /* @__PURE__ */ jsx("div", { className: "mt-16 flex justify-center w-full", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: doodleImg,
            alt: "Hybrid Production Doodle",
            className: "w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain opacity-80 mix-blend-lighten pointer-events-none"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "mt-20 h-1 w-24 bg-white/20 mx-auto rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { id: "hybrid", className: "w-full max-w-5xl mx-auto z-20 animate-fade-in-up mt-24 px-4", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: scrollToHybrid,
          className: "w-full text-left relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900/40 backdrop-blur-md p-8 md:p-12 hover:bg-zinc-900/60 transition-colors duration-500 group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-slate-400 to-transparent" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 w-64 h-64 bg-slate-800/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-slate-700/30 transition-colors duration-700" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-8 items-start relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-4", children: [
                  "What is ",
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Hybrid" }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Production?"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-12 h-[1px] bg-white/20 my-4 group-hover:w-24 transition-all duration-500" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/40 tracking-widest uppercase", children: "The Third Way" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-lg font-light text-white/80 leading-relaxed", children: `It is the definitive workflow of the post-AI musical landscape. Rejecting the binary choice between "human" and "machine", it treats Generative AI as a high-fidelity instrument in the producer's toolkit.` }),
                /* @__PURE__ */ jsx("p", { className: "text-sm font-mono text-white/60", children: "The Hybrid Producer is an editor, a curator, and a sonic sculptor who mines the algorithmic void for gold, then refines it with traditional engineering." })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("section", { className: "w-full max-w-4xl mx-auto z-20 animate-fade-in-up mt-24 px-4 text-center border-t border-white/10 pt-16", style: { animationDelay: "0.4s" }, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.2em] text-white/40 mb-8 uppercase", children: "Currently Building" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 text-left md:text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-widest", children: "Music" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-white/60 leading-relaxed", children: "Identifying systems to improve generative music fidelity, pioneering new ways to blend the grey." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-widest", children: "Community" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-white/60 leading-relaxed", children: /* @__PURE__ */ jsx("a", { href: "https://www.reddit.com/r/hybridproduction/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors underline decoration-white/30 underline-offset-4", children: "Scaling the r/hybridproduction community" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-white uppercase tracking-widest", children: "Innovation" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-white/60 leading-relaxed", children: "Refining workflows for the AI and even post-AI musical landscape. Utilizing todays tools to see tomorrows solutions." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "flex justify-center items-center gap-8 sm:gap-12 mt-16 mb-20 z-20 animate-fade-in-up", style: { animationDelay: "0.5s" }, "aria-label": "Social media links", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://x.com/TheInnerVision",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Follow Justin Ray on X (Twitter)",
            className: "group text-white/40 hover:text-white transition-all duration-300 transform hover:scale-110",
            children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-8 h-8 fill-current", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://youtube.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Visit Justin Ray's YouTube Channel",
            className: "group text-white/40 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110",
            children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-8 h-8 fill-current", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/justin-ray-277b8548/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Connect with Justin Ray on LinkedIn",
            className: "group text-white/40 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-110",
            children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-8 h-8 fill-current", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://network.landr.com/users/vision-hybrid",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Justin Ray on LANDR Network",
            className: "group text-white/40 hover:text-[#00E6CB] transition-all duration-300 transform hover:scale-110",
            children: [
              /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-8 h-8 fill-current", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" }) }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "LANDR" })
            ]
          }
        )
      ] })
    ] })
  ] });
};
const SOUNDCLOUD_TRACKS_URL = encodeURIComponent("https://soundcloud.com/visiontracks/tracks");
const SOUNDCLOUD_PLAYER_SRC = `https://w.soundcloud.com/player/?url=${SOUNDCLOUD_TRACKS_URL}&color=%2394a3b8&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
const PROJECTS = [
  {
    id: "loserdub",
    name: "loserdub",
    description: "Emotional Dissonance Meets Optimistic Nostalgia. A raw exploration of melody through the lens of imperfection.",
    tags: ["#Indie", "#Electronic", "#Human"],
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-600",
    spotifyUrl: "https://open.spotify.com/artist/3VZelnnW9OR0DyR2qRn4Oq"
  },
  {
    id: "vision",
    name: "VISION",
    description: "Cinematic soundscapes And Hazy Funk.",
    tags: ["#Hybrid", "#Cinematic", "#Funk"],
    imageUrl: "./vision.png",
    color: "bg-slate-400",
    spotifyUrl: "https://open.spotify.com/artist/6GGZwLOLxVxYGOcMry3NDi"
  },
  {
    id: "levide",
    name: "le vide",
    description: "The Void. Music that breathes in the silence between notes, in French.",
    tags: ["#French", "#Hybrid", "#Electronic"],
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
    color: "bg-white",
    spotifyUrl: "https://open.spotify.com/artist/42TmrCeIumkPRyTNOPP78t"
  },
  {
    id: "flawedfuture",
    name: "flawed future",
    description: "Glitch mechanics and broken rhythms. Embracing the artifacts of digital decay.",
    tags: ["#EDM", "#Hardstyle", "#Hybrid"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-500",
    spotifyUrl: "https://open.spotify.com/artist/3FNFzRyU0PCA2vjihWsg6y"
  },
  {
    id: "disarray",
    name: "disarray",
    description: "Controlled chaos. Alternative Rock with its Own Style.",
    tags: ["#Alternative", "#Rock", "#Hybrid"],
    imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800",
    color: "bg-slate-700",
    spotifyUrl: "https://open.spotify.com/artist/6TlAxGL1Hm4FRWfTxprlMi"
  }
];
const MusicList = () => {
  const mainProjects = PROJECTS.slice(0, 3);
  const secondaryProjects = PROJECTS.slice(3);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "Music | Justin Ray - Hybrid Producer",
    "description": "Explore Justin Ray's music projects: loserdub, VISION, le vide, flawed future, and disarray. Hybrid production blending AI and human creativity.",
    "url": "https://jray.me/music/",
    "mainEntity": {
      "@type": "Person",
      "name": "Justin Tyler Ray",
      "alternateName": "jray",
      "url": "https://jray.me",
      "jobTitle": "Hybrid Music Producer",
      "sameAs": [
        "https://reddit.com/r/hybridproduction",
        ...PROJECTS.map((p) => p.spotifyUrl)
      ],
      "knowsAbout": [
        { "@type": "Thing", "name": "Hybrid Music Production" },
        { "@type": "Thing", "name": "Generative AI Audio" },
        { "@type": "Thing", "name": "Audio Engineering" }
      ],
      // This maps your React array into SEO entities perfectly:
      "memberOf": PROJECTS.map((alias) => ({
        "@type": "MusicGroup",
        "name": alias.name,
        "description": alias.description,
        "url": alias.spotifyUrl,
        "image": alias.imageUrl
      }))
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Music | Justin Ray — Hybrid Producer" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore Justin Ray's music projects: loserdub, VISION, le vide, flawed future, and disarray. Hybrid production blending AI with human creativity." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jray.me/music/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jray.me/music/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Music | Justin Ray — Hybrid Producer" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore Justin Ray's music projects: loserdub, VISION, le vide, flawed future, and disarray. Hybrid production blending AI with human creativity." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://jray.me/music/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Music | Justin Ray — Hybrid Producer" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Explore Justin Ray's music projects: loserdub, VISION, le vide, flawed future, and disarray. Hybrid production blending AI with human creativity." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schemaData) } })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-display font-bold text-transparent text-stroke uppercase tracking-widest", children: "Sonic Projects" }),
        /* @__PURE__ */ jsx("div", { className: "h-1 w-24 bg-slate-500 mx-auto mt-6 rounded-full" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: mainProjects.map((project) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: project.spotifyUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `Listen to ${project.name} on Spotify`,
          className: `group relative aspect-square w-full border border-white/10 hover:border-slate-500/50 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center overflow-hidden cursor-pointer
                      bg-zinc-900/40 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]
                   `,
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${project.color}` }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center justify-center h-full space-y-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter transition-all duration-500 text-white group-hover:text-slate-300 group-hover:scale-110", children: project.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2 h-[1px] w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-slate-400" }),
                project.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-slate-400 group-hover:text-slate-300 uppercase tracking-widest", children: tag }, tag))
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-white/10", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-white/70 font-light leading-relaxed", children: project.description }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsx(ExternalLink, { size: 16, className: "text-white/50" }) })
          ]
        },
        project.id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: secondaryProjects.map((project) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: project.spotifyUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `Listen to ${project.name} on Spotify`,
          className: `group relative border border-white/5 hover:border-slate-500/30 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center overflow-hidden min-h-[180px] w-full cursor-pointer
                      bg-zinc-900/20 hover:bg-zinc-900/40
                   `,
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${project.color}` }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider mb-3 transition-colors duration-300 text-white/60 group-hover:text-white", children: project.name }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-white/30 group-hover:text-white/60 uppercase tracking-widest transition-colors", children: tag }, tag)) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsx(ExternalLink, { size: 14, className: "text-white/30" }) })
          ]
        },
        project.id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "SoundCloud Tracks",
          width: "100%",
          height: "460",
          scrolling: "no",
          loading: "lazy",
          src: SOUNDCLOUD_PLAYER_SRC,
          className: "w-full border border-white/10 rounded-sm bg-black/40"
        }
      ) })
    ] }) })
  ] });
};
const projectsSchemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Creative Projects | Justin Ray - Hybrid Producer",
  "description": "Explore audio and visual tools built by Justin Tyler Ray (JRAY) for the hybrid producer — synthesizers, MIDI composers, browser DAWs, and beyond.",
  "url": "https://jray.me/projects/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListOrder": "https://schema.org/ItemListUnordered",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebApplication",
          "name": "Black Mirror",
          "url": "https://jray.me/black-mirror.html",
          "description": "Summon Your Digital Twin",
          "operatingSystem": "Web",
          "applicationCategory": "EntertainmentApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebApplication",
          "name": "VISION SYNTH",
          "url": "https://midi-subtractive-synthesizer-548454922545.us-west1.run.app",
          "description": "Desktop Polyphonic Synthesizer",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/Subtractive"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebApplication",
          "name": "ChordCompose",
          "url": "https://loserdub.github.io/chordcreate/",
          "description": "Chord Arranger / Idea sketch pad with exportable MIDI",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/chordcreate"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebApplication",
          "name": "FractalAudio",
          "url": "https://loserdub.github.io/FractalAudio/",
          "description": "Audio Processing & Effects",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/FractalAudio"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "WebApplication",
          "name": "IMAGESIZER",
          "url": "https://loserdub.github.io/IMAGESIZER",
          "description": "Image Resizing and Processing",
          "operatingSystem": "Web",
          "applicationCategory": "UtilitiesApplication",
          "sameAs": "https://github.com/loserdub/IMAGESIZER"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "WebApplication",
          "name": "J-DAW",
          "url": "https://loserdub.github.io/jdaw/",
          "description": "Browser-based Digital Audio Workstation",
          "operatingSystem": "Web",
          "applicationCategory": "MultimediaApplication",
          "sameAs": "https://github.com/loserdub/jdaw"
        }
      }
    ]
  }
};
const voidAccentColor = "#39ff14";
const voidAccentRgb = "57,255,20";
const ProjectsList = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Projects | Justin Ray — Browser Audio Tools & Creative Apps" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore browser-based audio tools and creative apps by Justin Ray: VISION SYNTH, ChordCompose, J-DAW, FractalAudio, Black Mirror, and more. Built for the hybrid producer." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jray.me/projects/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jray.me/projects/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Projects | Justin Ray — Browser Audio Tools & Creative Apps" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore browser-based audio tools and creative apps by Justin Ray: VISION SYNTH, ChordCompose, J-DAW, FractalAudio, Black Mirror, and more. Built for the hybrid producer." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://jray.me/projects/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Projects | Justin Ray — Browser Audio Tools & Creative Apps" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Explore browser-based audio tools and creative apps by Justin Ray: VISION SYNTH, ChordCompose, J-DAW, FractalAudio, Black Mirror, and more. Built for the hybrid producer." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(projectsSchemaData) } })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up w-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-[95vw] xl:max-w-7xl", children: /* @__PURE__ */ jsxs("section", { "aria-label": "Creative Apps", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8 border-b border-white/10 pb-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-display font-bold text-transparent text-stroke uppercase tracking-wider", children: "Creative Apps" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block text-xs font-mono text-white/50", children: "EXPERIMENTAL" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs(
          "article",
          {
            className: "group relative aspect-video border transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden",
            style: {
              background: "#0a0a0f",
              borderColor: "rgba(201,168,76,0.25)",
              boxShadow: "inset 0 0 40px rgba(41,121,255,0.04), inset 0 0 40px rgba(229,57,53,0.03)"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none z-0",
                  style: {
                    background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 4px)"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute pointer-events-none z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                  style: {
                    inset: "-40% -20%",
                    background: "radial-gradient(ellipse at 30% 0%,rgba(41,121,255,0.09),transparent 55%),radial-gradient(ellipse at 80% 100%,rgba(229,57,53,0.08),transparent 55%)"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  style: {
                    boxShadow: "0 0 24px rgba(201,168,76,0.18), inset 0 0 24px rgba(201,168,76,0.06)"
                  }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx(
                  "h2",
                  {
                    className: "text-xl font-display font-bold mb-2 uppercase tracking-widest",
                    style: {
                      color: "#c9a84c",
                      textShadow: "0 0 18px rgba(201,168,76,0.4)"
                    },
                    children: "Black Mirror"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs font-mono mb-6 tracking-widest uppercase", style: { color: "rgba(232,232,240,0.6)", letterSpacing: "0.18em" }, children: "Summon Your Digital Twin" }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/black-mirror.html",
                    "aria-label": "Launch Black Mirror - Summon Your Digital Twin",
                    className: "inline-block px-6 py-2 text-[10px] tracking-widest uppercase transition-all duration-300 relative group/link",
                    style: {
                      color: "rgba(201,168,76,0.9)",
                      background: "rgba(20,20,32,0.55)",
                      border: "1px solid rgba(201,168,76,0.35)",
                      borderRadius: "4px"
                    },
                    children: [
                      "Live",
                      /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "Summon Your Digital Twin" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("article", { className: "group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=800&auto=format&fit=crop",
                alt: "VISION SYNTH Background",
                className: "w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display font-bold text-white mb-2", children: "VISION SYNTH" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/50 mb-4", children: "It's Poly-FUN-ic !" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://midi-subtractive-synthesizer-548454922545.us-west1.run.app",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Launch VISION SYNTH - Desktop Polyphonic Synthesizer",
                className: "inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300 relative group/link",
                children: [
                  "Launch",
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "Desktop Polyphonic Synthesizer" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
                alt: "ChordCompose Background",
                className: "w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display font-bold text-white mb-2", children: "ChordCompose" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto", children: "Chord Arranger / Idea sketch pad with exportable MIDI" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://loserdub.github.io/chordcreate/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Launch ChordCompose - MIDI Chord Idea Sketchpad",
                className: "inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300 relative group/link",
                children: [
                  "Launch",
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "MIDI Idea Sketchpad" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
                alt: "FractalAudio Background",
                className: "w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display font-bold text-white mb-2", children: "FractalAudio" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto", children: "Audio Processing & Effects" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://loserdub.github.io/FractalAudio/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Launch FractalAudio - Audio Processing and Effects",
                className: "inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300 relative group/link",
                children: [
                  "Launch",
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "FractalAudio Project" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
                alt: "IMAGESIZER Background",
                className: "w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display font-bold text-white mb-2", children: "IMAGESIZER" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto", children: "Image Resizing and Processing" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://loserdub.github.io/IMAGESIZER",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Launch IMAGESIZER - Image Resizing Utility",
                className: "inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300 relative group/link",
                children: [
                  "Launch",
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "IMAGESIZER Utility" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "group relative aspect-video bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-8 flex flex-col justify-center items-center text-center overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
                alt: "J-DAW Background",
                className: "w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:grayscale-0"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-display font-bold text-white mb-2", children: "J-DAW" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-white/50 mb-4 max-w-[80%] mx-auto", children: "your DAW in the browser!" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://loserdub.github.io/jdaw/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Launch J-DAW - Browser-based Digital Audio Workstation",
                className: "inline-block px-6 py-2 border border-white/10 hover:border-white hover:bg-white hover:text-black text-[10px] tracking-widest uppercase text-white/60 hover:text-black transition-all duration-300 relative group/link",
                children: [
                  "Launch",
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/link:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] whitespace-nowrap z-50", children: "Browser-based DAW" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative w-full max-w-3xl overflow-hidden border px-6 py-8 text-center sm:px-10",
          style: {
            background: "#0a0a0f",
            borderColor: `rgba(${voidAccentRgb},0.35)`,
            boxShadow: `0 0 28px rgba(${voidAccentRgb},0.12), inset 0 0 32px rgba(41,121,255,0.04)`
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 4px)"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 pointer-events-none",
                style: {
                  background: `radial-gradient(circle at top, rgba(${voidAccentRgb},0.14), transparent 60%)`
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center gap-5", children: [
              /* @__PURE__ */ jsxs(
                "p",
                {
                  className: "text-lg font-display font-bold uppercase tracking-[0.14em] text-white sm:text-2xl",
                  style: { textShadow: `0 0 18px rgba(${voidAccentRgb},0.35)` },
                  children: [
                    "DOWNLOAD ",
                    /* @__PURE__ */ jsx("span", { style: { color: voidAccentColor }, children: "VOID 1.23 BETA" }),
                    " TODAY"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://github.com/Loserdub/VOID1.2/releases/download/void_app/VOID1.23beta.exe",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Download VOID 1.23 Beta",
                  className: "inline-block px-8 py-3 text-xs font-mono uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black",
                  style: {
                    border: `1px solid rgba(${voidAccentRgb},0.45)`,
                    background: `rgba(${voidAccentRgb},0.1)`,
                    boxShadow: `0 0 18px rgba(${voidAccentRgb},0.16)`
                  },
                  children: "Download"
                }
              )
            ] })
          ]
        }
      ) })
    ] }) }) })
  ] });
};
const Biography = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Bio | Justin Ray — Hybrid Music Producer & Creative Developer" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Justin Tyler Ray: hybrid music producer, creative developer, and founder of r/HybridProduction. artist in East Lansing, MI." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jray.me/bio/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "profile" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jray.me/bio/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Bio | Justin Ray — Hybrid Music Producer" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Meet Justin Tyler Ray: hybrid music producer, creative developer, and founder of r/HybridProduction. East Lansing, MI." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://jray.me/bio/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Bio | Justin Ray — Hybrid Music Producer" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Meet Justin Tyler Ray: hybrid music producer, creative developer, and founder of r/HybridProduction. East Lansing, MI." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-8 relative z-10 overflow-hidden animate-fade-in-up", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-2 md:order-1 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-mono text-xs tracking-[0.3em] uppercase", children: "The Architect" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-7xl font-display font-bold text-white leading-none tracking-tight", children: [
            "JUSTIN",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-stroke text-transparent", children: "RAY" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-2", children: [
            /* @__PURE__ */ jsx("div", { className: "h-[1px] w-12 bg-white/30" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/50 font-mono text-sm tracking-widest uppercase", children: "East Lansing, MI" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-white/80 font-light leading-relaxed text-lg font-sans", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.3em] uppercase text-slate-400", children: "My Origin" }),
            /* @__PURE__ */ jsx("p", { children: "Based in East Lansing, Michigan, I am a Hybrid Producer and creative developer dedicated to bridging the gap between raw human artistry and generative AI audio workflows." }),
            /* @__PURE__ */ jsx("p", { children: "My journey into music production didn't begin with algorithms; it began with a profound need for self-expression. Following a series of life-altering shifts, I turned away from the noise of traditional social networking and immersed myself in daily, completely human songwriting. I learned the foundational mechanics of composition, keys, and guitar from the ground up—developing a deep respect for the emotional core of music." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.3em] uppercase text-slate-400", children: "The Age of Imagination" }),
            /* @__PURE__ */ jsx("p", { children: "But as the landscape of audio engineering shifted, so did my workflow. About a year into my traditional production journey, I was invited to be an early beta tester for Google's MusicLM. That experience, combined with early experiments using Large Language Models to analyze audio files, was a revelation. While early AI often hallucinated, the potential was undeniable: generative AI was not a replacement for the artist, but a powerful new instrument." }),
            /* @__PURE__ */ jsx("p", { children: "This realization led me to Suno at its very inception, where I proudly served as a Growth Specialist for a year. During that time, I witnessed the polarization of the music industry—creators divided between traditional purists and AI enthusiasts. I stepped away to forge a new path that unifies both: Hybrid Production." }),
            /* @__PURE__ */ jsx("p", { children: "To prove this concept, I founded the rapidly growing Reddit community r/hybridproduction. Here, we are developing new methodologies—like Taxonomic Rank and Spectral Splitting—that blend AI music generation with advanced sound engineering." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xs font-mono tracking-[0.3em] uppercase text-slate-400", children: "The Tech Stack" }),
            /* @__PURE__ */ jsx("p", { children: "Today, my creative ecosystem is a true hybrid of coding and composition. As a creative developer, I leverage AI models like Gemini and Claude alongside GitHub to build forward-thinking app concepts. As a sound engineer, my workflow relies on industry-standard DAWs like Logic Pro X and Ableton Live. I sculpt sounds using powerful plugins like Xfer Serum and Sonic Academy ANA 2, and refine the final product using the FabFilter suite for mixing and mastering, alongside iZotope RX11 for meticulous audio restoration and cleanup. Finally, the finished tracks are distributed via LANDR and visualizers are published to YouTube." }),
            /* @__PURE__ */ jsx("p", { children: "We are in an era where the boundaries of audio are limitless. Whether you are a forward-thinking creator looking to step outside the box, an artist seeking creative consulting to elevate your tracks, or a pioneering music-tech company looking to bring visionary ideas to life—the future of music is a collaborative, hybrid effort." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx("div", { className: "inline-flex flex-col", children: /* @__PURE__ */ jsx("span", { className: "text-5xl font-display font-bold text-white/10 select-none", children: "EST. 2023" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 md:order-2 relative group", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto overflow-hidden rounded-sm bg-zinc-900 border border-white/10 shadow-2xl", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://picsum.photos/seed/justinray_producer/800/1000",
              alt: "Justin Ray",
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:contrast-125 grayscale group-hover:grayscale-0 will-change-[transform]",
              style: { filter: "url(#oil-paint)" }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent mix-blend-overlay pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 border border-white/5 rotate-3 transition-transform duration-700 group-hover:rotate-0 pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 border border-slate-500/20 -rotate-2 transition-transform duration-700 group-hover:rotate-0 pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 md:-left-12 bg-black/80 border border-white/20 p-4 backdrop-blur-xl z-20 shadow-lg", children: /* @__PURE__ */ jsxs("p", { className: "font-mono text-xs text-white/60 uppercase tracking-widest text-center", children: [
          "Creator",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "r/HybridProduction" })
        ] }) })
      ] })
    ] }) }) })
  ] });
};
const cycleDiagram = "/assets/cyclediagram-CdE74cGA.jpg";
const WhatIsHybrid = () => {
  const whatIsHybridUrl = buildPageUrl("/what-is-hybrid");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Justin Ray | What Is Hybrid" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Learn what Hybrid Production means and explore related articles including Future of Hybrid."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: whatIsHybridUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: whatIsHybridUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Hybrid Knowledge Base | Justin Ray" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "The definitive Hybrid Production knowledge base by Justin Tyler Ray (JRAY). Explore frameworks, methodologies, and articles defining the third way in the post-AI music landscape." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: whatIsHybridUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Hybrid Knowledge Base | Justin Ray" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "The definitive Hybrid Production knowledge base by Justin Tyler Ray (JRAY). Explore frameworks, methodologies, and articles defining the third way in the post-AI music landscape." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-12 w-full", children: /* @__PURE__ */ jsxs("details", { className: "group border border-white/30 rounded-sm bg-white/5 transition-colors open:bg-zinc-900/80", children: [
        /* @__PURE__ */ jsxs("summary", { className: "cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between px-6 py-4 text-xl md:text-2xl font-display font-bold tracking-wide text-white hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsx("span", { children: "Field Notes (Editorial Articles)" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/40 group-open:rotate-180 transition-transform duration-300 ml-4", children: "↓" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-white/20 px-6 py-2 md:px-8 md:py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("a", { href: "/agentichybridproduction.html", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "01" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "The Autonomous Virtual Studio: Multi-Agent DAWs and Latent Space Interpolation" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "Mapping the science, feasibility, and step-by-step implementation of multi-agent DAW control and SLERP-based latent space audio merging — the future of music production." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "May 17, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "→" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/musicindustryforecast.html", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "02" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "The Liquidity of Sound: 2026–2031 Music Industry Forecast" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "Vibe coding, AI displacement, and the emerging hybrid creator economy — a comprehensive look at where the music industry is heading." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "May 16, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "→" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/trainingday.html", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "03" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "Is uploading your music to AI generations stealing your music? An investigation into your IP rights." }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "Should you upload a loop or a full song to Suno or Udio? The upload strategy, IP truths, and legal realities artists need before they click submit." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "May 06, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "→" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/machinehumanhybrid.html", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "04" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "Drawing the line, when is it your song if AI made it?" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "Where does an AI-generated song stop being AI? The line nobody in the industry has drawn… until now." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "May 06, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "→" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/futureofhybrid.html", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "05" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "Future of Hybrid" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "A manifesto on the evolution of Hybrid Music Production, from Black Box AI models to Multi-Agent Orchestration." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "Apr 28, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "→" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/Suno101.html", target: "_blank", rel: "noreferrer", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "06" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "Suno 101" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "A masterclass in transcending standard AI outputs using structural tags and psycho-acoustic architecture." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "Apr 20, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "↗" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/fingerprint.html", target: "_blank", rel: "noreferrer", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "07" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "Watermarks in AI" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "Explore the hidden technological cold war of AI audio steganography, digital watermarking, and machine listening systems." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "Apr 15, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "↗" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/c2pa-music-provenance.html", target: "_blank", rel: "noreferrer", className: "group flex flex-col md:flex-row md:items-center py-4 border-b border-white/10 hover:border-white/40 transition-colors duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex md:items-center w-full md:w-auto flex-1 gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl font-display text-white/40 w-8 shrink-0", children: "08" }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-display font-bold text-white/90 group-hover:text-white transition-colors uppercase tracking-tight", children: "C2PA Dive" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors", children: "An intelligence report on C2PA, content credentials, and the future of music industry chain-of-custody." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 md:mt-0 flex items-center justify-between md:justify-end md:w-56 shrink-0 pl-14 md:pl-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest text-white/40 uppercase md:mr-8", children: "Apr 02, 2026" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-white/30 group-hover:text-white transition-colors", children: "↗" })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("article", { className: "rounded-sm border border-white/10 bg-zinc-900/40 p-8 md:p-12", children: [
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight", children: "What is Hybrid Production?" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-white/90", children: "Definition" }),
            /* @__PURE__ */ jsx("blockquote", { className: "mt-3 border-l-2 border-white/15 pl-5 text-lg text-white/80 leading-relaxed", children: "“Hybrid Production isn't about choosing between human and machine—it’s about the handshake between them. It’s using AI to sprout the initial 'seeds' of an idea, then taking the wheel with live synths, real instruments, and human intuition to turn those sparks into a finished track.”" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-display font-bold text-white/90", children: "Why Hybrid is Superior" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: [
              /* @__PURE__ */ jsxs("section", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-white", children: "Limitless Palette" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: "AI gives me colors and sonic textures I didn't know existed." })
              ] }),
              /* @__PURE__ */ jsxs("section", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-white", children: "Speed to Inspiration" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: `It kills "writer's block" instantly, generating raw material to mold.` })
              ] }),
              /* @__PURE__ */ jsxs("section", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-white", children: "Human Control" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/70 leading-relaxed", children: `At the end of the day, I'm the one who decides what stays and what goes. The "Logic" is mine; the "Chaos" is the AI's.` })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "mt-12 rounded-sm border border-white/10 bg-black/20 p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold uppercase tracking-wider text-white", children: "Index / Table of Contents" }),
            /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-white/75", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#definition", children: "Definition: What is Hybrid?" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#pros", children: "Pros: Why Hybrid is Superior" }) }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#part-one", children: "Part One: Seeding (The Prompt)" }),
                /* @__PURE__ */ jsx("ul", { className: "mt-2 ml-4 space-y-2", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#taxonomy-chart", children: "↳ The Hybrid Taxonomy Chart" }) }) })
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#part-two", children: "Part Two: Spectral Splitting" }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-2 ml-4 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#reconstruction-bus", children: "↳ 1. The Reconstruction Bus" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#isolation-eq", children: "↳ 2. The Isolation EQ" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#mono-anchor", children: "↳ 3. The Mono Anchor" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#refinement-chain", children: "↳ 4. The Refinement Chain" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#final-limiter", children: "↳ 5. The Final Limiter" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#part-three", children: "Part Three: The Round Trip (Feedback Loop)" }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-2 ml-4 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#node-a", children: "↳ Node A: The Anchor" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#node-b", children: "↳ Node B: Neural Seeding & Refinement" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { className: "hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white", href: "#node-c", children: "↳ Node C: The Manifestation" }) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 space-y-10 text-white/75 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("section", { id: "part-one", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-display font-bold text-white/90", children: "Part One: Seeding (The Prompt)" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold text-white/90", children: "The Biological Blueprint: Taxonomic Rank" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "In the 18th century, Swedish botanist Carl Linnaeus formalized the system of Taxonomic Rank. Its primary value in biology is the standardized classification and naming of organisms. By grouping life into a rigid hierarchy from the broad Kingdom down to the specific Species, scientists can identify relationships, predict behaviors, and ensure that every specimen has a unique and universally recognized place in the natural world." }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold text-white/90", children: "Application: Sonic DNA" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "In Hybrid Production, this identical logic must be applied to the initial AI prompt. The latent space of a generative AI model is a chaotic wilderness of unstructured audio data. Without a hierarchical framework, prompting is merely pulling the lever of a slot machine. This results in a sonic mutation with no clear lineage." }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: 'By utilizing Taxonomic Ranks in the style generation, a process defined here as "Seeding," the producer injects a deliberate sequence of Sonic DNA. You are not asking the machine for a generic output. You are defining the exact biological structure of a new musical organism before it is rendered.' }),
            /* @__PURE__ */ jsxs("div", { id: "taxonomy-chart", className: "mt-8 scroll-mt-28", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "The Hybrid Taxonomy Chart" }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-x-auto rounded-sm border border-white/10", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-sm", children: [
                /* @__PURE__ */ jsx("thead", { className: "bg-black/30", children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold uppercase tracking-wider text-white/90 border-b border-white/10", children: "Taxonomic Rank" }),
                  /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold uppercase tracking-wider text-white/90 border-b border-white/10", children: "Musical Equivalent" }),
                  /* @__PURE__ */ jsx("th", { className: "p-3 text-left font-bold uppercase tracking-wider text-white/90 border-b border-white/10", children: "Purpose and Implementation" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-white/10", children: [
                  /* @__PURE__ */ jsxs("tr", { className: "bg-zinc-900/10", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kingdom" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Domain" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The broadest category of sound (e.g., Electronic, Acoustic, Orchestral)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Phylum" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Core Genre" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The fundamental body plan (e.g., Industrial, Ambient, Synthwave)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "bg-zinc-900/10", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Class" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Atmosphere" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The environmental climate (e.g., Dark, Ethereal, Tense, Cinematic)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Order" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Pulse and Rhythm" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The structural heart rate (e.g., 95 BPM, Half-time, Syncopated)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "bg-zinc-900/10", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Family" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Instrumentation" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The anatomy of the track (e.g., Analog Bass, Granular Synths, 808s)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Genus" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The Vibe Twist" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The identifying mutation (e.g., Glitch-heavy, Bit-crushed, Lo-fi)." })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "bg-zinc-900/10", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "Species" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The Final State" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: "The specific surface texture (e.g., Gritty, Polished, Raw)." })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-sm border border-white/10 bg-black/20 p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "Ground Evidence: The Case for Creative Control" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Structuring a seed prompt through strict taxonomy is not merely a creative exercise. It is a verifiable mechanism of human authorship. Generative AI models are fundamentally classification engines. When a producer inputs a structured taxonomic string, they override the default probabilistic tendencies of the AI. The machine is no longer guessing what sounds good together. It is executing a highly specific set of parameters dictated entirely by human intent." }),
              /* @__PURE__ */ jsx("p", { className: "mt-3", children: "This established workflow provides critical data provenance. It serves as ground evidence that the resulting audio file is the direct product of human architecture. In an industry grappling with the definition of authorship, a taxonomic seed proves that the producer maintained absolute creative control over the genetic makeup of the work, reducing the generative AI to its proper role as a rendering engine for human imagination." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "part-two", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-display font-bold text-white/90", children: "Part Two: Spectral Splitting (The Tri-Band Dissection)" }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold text-white/90", children: "The Limitation of Flat Audio" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Generative audio models inherently output a single, flattened stereo file. In traditional audio engineering, a producer has access to individual stems, allowing for precise spatial and dynamic control over every instrument. A flat AI render traps all frequencies in a single layer. This often results in a compressed, muddy, or mathematically rigid sound." }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold text-white/90", children: "The Spectral Splitting Methodology" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Spectral Splitting is the process of dissecting this flattened audio into manageable, independent frequency bands. By duplicating the raw audio across multiple tracks and utilizing surgical equalization, the producer shatters the locked file. This workflow bypasses the limitations of the AI output, granting the creator granular control over the sonic anatomy through targeted plugin chains." }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 text-xl font-bold text-white/90", children: "The Architecture of the Split (DAW Setup)" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "To execute this method correctly, the routing in the Digital Audio Workstation must follow a strict architectural hierarchy. The producer is essentially building a custom crossover network." }),
            /* @__PURE__ */ jsxs("ol", { className: "mt-6 space-y-6", children: [
              /* @__PURE__ */ jsxs("li", { id: "reconstruction-bus", className: "scroll-mt-28", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white/90", children: "1. The Reconstruction Bus and the Three Branches" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Before applying any plugins, the producer must establish the routing framework. First, create a single unifying Bus track. This is often labeled the Hybrid Master or Split Bus. Next, create three duplicate audio tracks of the raw AI generation." }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "These three tracks will serve as the High, Mid, and Low branches. All three branches must be routed directly into the Reconstruction Bus, ensuring they are processed as a single, cohesive unit before hitting the master output." })
              ] }),
              /* @__PURE__ */ jsxs("li", { id: "isolation-eq", className: "scroll-mt-28", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white/90", children: "2. The Isolation EQ (First Position)" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "The absolute first insert on each of the three branching tracks must be an equalizer. Using steep high-pass and low-pass filters, the producer carves out the designated frequency range for that specific channel." }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-3 list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: "The Low Band: Approximately 20Hz to 200Hz." }),
                  /* @__PURE__ */ jsx("li", { children: "The Mid Band: Approximately 200Hz to 4kHz." }),
                  /* @__PURE__ */ jsx("li", { children: "The High Band: Approximately 4kHz to 20kHz." })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-3", children: "During this phase, the workflow requires isolating the active band by muting the others to allow for surgical precision. The producer must frequently unmute the full stack to check the combined mix, ensuring the crossover points remain phase-aligned and transparent." })
              ] }),
              /* @__PURE__ */ jsxs("li", { id: "mono-anchor", className: "scroll-mt-28", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white/90", children: "3. The Mono Anchor (The Low Band)" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "The isolated Low band is the structural Anchor of the track and must always be collapsed into pure mono. Low frequencies carry the physical, kinetic energy of a composition. Because human hearing cannot easily localize sub-bass frequencies, leaving them in wide stereo introduces severe phase cancellation." }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "When a stereo bass signal is summed to mono on club PA systems or mobile devices, the opposing left and right frequencies cancel each other out, leaving a hollow mix. Forcing the Low Anchor into mono ensures maximum kinetic impact and absolute structural integrity." })
              ] }),
              /* @__PURE__ */ jsxs("li", { id: "refinement-chain", className: "scroll-mt-28", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white/90", children: "4. The Refinement Chain (Artist Intent)" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Once the frequencies are isolated and the Anchor is set, the producer applies a dedicated signal chain to each branch." }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-bold uppercase tracking-wider text-white/90", children: "Low Anchor Processing" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "The goal is tightening the foundation. Common tools include iZotope Low End Focus for punch, or analog-modeled EQs like the Universal Audio EQP-1A to boost fundamental sub-harmonics without introducing mid-range mud." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-bold uppercase tracking-wider text-white/90", children: "Mid Band Processing" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "This branch houses the core identity of the track, including vocals and lead synths. Dynamic control and resonance suppression are vital here to tame the harsh peaks and artifacts inherent in generative audio. Industry-standard tools like FabFilter Pro-MB provide surgical multiband compression, while Oeksound Soothe2 is highly recommended for dynamically smoothing out the harsh, metallic resonances often found in AI-generated mid-ranges." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-white/10 bg-black/20 p-5", children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-bold uppercase tracking-wider text-white/90", children: "High Band Processing" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: "This is the realm of spatial width and high-frequency breath. Harmonic exciters or stereo imagers are applied to push the high frequencies out wide, enveloping the listener while keeping the mono Anchor firmly centered. Utilizing the famous Air Band on the Maag Audio EQ4 can bring synthetic highs to life, while spatial tools like Soundtoys MicroShift or the iZotope Ozone Imager effectively widen the stereo field without causing phase correlation issues." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { id: "final-limiter", className: "scroll-mt-28", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white/90", children: "5. The Final Limiter" }),
                /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Because the three branches are routed back together into the Reconstruction Bus, a final stage of control is required. A glue compressor and a true-peak limiter must be placed at the end of the Bus signal chain. This catches and suppresses any rogue dynamic peaks created where the frequency bands intersect, delivering a polished, professional foundation ready for the next phase of production." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "part-three", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-display font-bold text-white/90", children: "Part Three: The Round Trip (Feedback Loop)" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: `The real magic of Hybrid Production doesn't happen when you just generate audio. It happens in the continuous feedback loop between human intent and machine complexity. Lets refer tot his as the "Round Trip".` }),
            /* @__PURE__ */ jsx("p", { className: "mt-3", children: "This three-step cycle makes sure the AI serves the composition instead of the other way around. It is a deliberate workflow designed to cut out the randomness and give you a final product with real intent." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-4", children: [
              /* @__PURE__ */ jsxs("div", { id: "node-a", className: "scroll-mt-28 rounded-sm border border-white/10 bg-black/20 p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "Node A: The Anchor (Human Source DNA)" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Every Hybrid track starts in the physical world. Instead of typing a blank text prompt, the whole process kicks off with a human anchor. This could be a custom sample, a recorded vocal, or an original instrumental progression (even a previous entire song!). We inject this seed right into the workflow so the AI has a strict rhythmic and harmonic DNA to follow. By setting this anchor first, you lock in the original soul of the track." })
              ] }),
              /* @__PURE__ */ jsxs("div", { id: "node-b", className: "scroll-mt-28 rounded-sm border border-white/10 bg-black/20 p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "Node B: Neural Seeding & Refinement" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Once the anchor is locked in, we feed it into the AI's latent space for seeding. This is where the actual heavy lifting of prompting and refining takes place." }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-3 list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: "I use the anchor to guide the AI to build specific textures and expansions around the original audio." }),
                  /* @__PURE__ */ jsx("li", { children: "We refine and re-roll the generation continuously until the output perfectly matches the creative vision." }),
                  /* @__PURE__ */ jsx("li", { children: "Once we hit that ideal variation, I export the new audio file and pull it directly back into the local DAW(Logic, Ableton, FL Studio, Etc.)." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { id: "node-c", className: "scroll-mt-28 rounded-sm border border-white/10 bg-black/20 p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "Node C: The Manifestation (Surgical Refinement)" }),
                /* @__PURE__ */ jsx("p", { className: "mt-3", children: "This step is where the producer takes total control back. The audio exported from the AI is treated like just another raw track on the mixing desk. To reach the final manifestation, we use a few key techniques:" }),
                /* @__PURE__ */ jsxs("ul", { className: "mt-3 list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx("strong", { className: "text-white/90", children: "Spectral Splitting:" }),
                    " Surgically carving out frequencies to separate the complex AI textures from the core stems."
                  ] }),
                  /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx("strong", { className: "text-white/90", children: "Human Instrumentation:" }),
                    " Overdubbing live synthesizers, adding vocals, or chopping manual drum breaks to bring the groove back down to earth. (This is where you get creative)"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx("strong", { className: "text-white/90", children: "Mixing & Mastering:" }),
                    " Applying traditional audio engineering techniques to glue the human and digital elements together."
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: cycleDiagram,
                alt: "Hybrid Production Round Trip Cycle Diagram",
                className: "mt-4 w-full rounded-sm border border-white/10",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-sm border border-white/10 bg-black/20 p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white/90", children: "The Result" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3", children: "What you get is a continuous feedback loop. Human emotion informs the machine intelligence, and the machine's complexity inspires the human mix. The Round Trip guarantees that the final output is never just a random hallucination. It becomes a highly controlled and deeply intentional piece of art." })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const Services = ({ onContactClick }) => {
  const services = [
    {
      icon: /* @__PURE__ */ jsx(Sliders, { size: 32 }),
      title: "Hybrid Mixing",
      description: "Blending analog warmth with digital precision. I treat generative stems as raw material, applying spectral repair and dynamic processing to achieve industry-standard loudness and clarity.",
      price: "Starting at $50/track"
    },
    {
      icon: /* @__PURE__ */ jsx(Headphones, { size: 32 }),
      title: "Audio Review",
      description: "Detailed feedback on your productions. Whether human-composed or AI-generated, get actionable advice on arrangement, sound design, and mix balance.",
      price: "Inquire for Pricing"
    },
    {
      icon: /* @__PURE__ */ jsx(Lightbulb, { size: 32 }),
      title: "Creative Consultation",
      description: "Stuck in the loop? Let's break down your workflow. I offer guidance on integrating generative tools into your creative process without losing your artistic identity.",
      price: "Contact for Rates"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Services | Justin Ray — Hybrid Mixing, Audio Review & Creative Consultation" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Professional hybrid mixing, audio review, and creative consultation by Justin Ray. Elevate your AI-assisted or human productions with industry-standard engineering." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jray.me/services/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jray.me/services/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Services | Justin Ray — Hybrid Mixing & Audio Review" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Professional hybrid mixing, audio review, and creative consultation by Justin Ray. Elevate your AI-assisted or human productions with industry-standard engineering." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://jray.me/services/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Services | Justin Ray — Hybrid Mixing & Audio Review" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Professional hybrid mixing, audio review, and creative consultation by Justin Ray. Elevate your AI-assisted or human productions with industry-standard engineering." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-20 text-center space-y-4", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl font-display font-bold text-white uppercase tracking-tighter", children: [
          "Studio ",
          /* @__PURE__ */ jsx("span", { className: "text-transparent text-stroke", children: "Services" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/60 font-light max-w-2xl mx-auto", children: "Elevate your sonic identity. Professional engineering and guidance for the modern hybrid artist." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: services.map((service, index) => /* @__PURE__ */ jsxs("div", { className: "group p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-500 hover:border-slate-500/30 flex flex-col items-center text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-6 p-4 rounded-full border border-white/10 bg-black group-hover:border-slate-500/50 transition-colors duration-500 text-slate-400", children: service.icon }),
        /* @__PURE__ */ jsx("h2", { className: "relative z-10 text-xl font-display font-bold text-white mb-4 uppercase tracking-wider", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "relative z-10 text-white/60 text-sm leading-relaxed mb-8 flex-grow", children: service.description }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-auto w-full pt-6 border-t border-white/5", children: [
          /* @__PURE__ */ jsx("span", { className: "block text-xs font-mono text-white/40 mb-4", children: service.price }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/contact",
              "aria-label": `Inquire about ${service.title} services`,
              className: "w-full py-3 bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-all duration-300 uppercase text-xs font-bold tracking-widest flex items-center justify-center gap-2",
              children: [
                "Inquire ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ]
            }
          )
        ] })
      ] }, index)) })
    ] })
  ] });
};
const Contact = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact | Justin Ray — Collaboration, Booking & Creative Inquiries" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jray.me/contact/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jray.me/contact/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Contact | Justin Ray — Collaboration & Booking" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jray.me/favicon.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://jray.me/contact/" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Contact | Justin Ray — Collaboration & Booking" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Get in touch with Justin Ray for music collaboration, hybrid mixing services, booking, or creative tech inquiries. Send a transmission." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jray.me/favicon.png" })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "py-20 px-4 border-t border-white/10 bg-black relative z-10 animate-fade-in-up", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 mb-24", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-10 flex flex-col justify-between", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-display font-bold uppercase tracking-widest text-white", children: "Connect" }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 font-light max-w-md leading-relaxed", children: "Interested in collaboration, booking, or sharing audio stems? Send a transmission across the void. We monitor all frequencies." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://instagram.com",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Instagram Profile",
                className: "p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group",
                children: /* @__PURE__ */ jsx(Instagram, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.tiktok.com/@im_the_vision",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "TikTok Profile",
                className: "p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      className: "lucide lucide-music-2",
                      children: /* @__PURE__ */ jsx("path", { d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" })
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50", children: "Tik-Tok Profile" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://trustnodelogic.com",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Trust Node Logic",
                className: "p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative",
                children: [
                  /* @__PURE__ */ jsx(Link, { size: 20 }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50", children: "Trust Node Logic" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:jray517@gmail.com",
                "aria-label": "Send Email",
                className: "p-4 rounded-none border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group relative",
                children: [
                  /* @__PURE__ */ jsx(Mail, { size: 20 }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 px-3 py-2 bg-black/90 border border-white/20 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase rounded shadow-[0_0_15px_rgba(148,163,184,0.3)] whitespace-nowrap z-50", children: "Email Me" })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-b from-slate-900/20 to-transparent blur-xl -z-10" }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-6 p-8 bg-white/[0.02] border border-white/5 backdrop-blur-sm", action: "mailto:jray517@gmail.com", method: "GET", encType: "text/plain", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/40 ml-1", children: "Identity" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "subject",
                      placeholder: "NAME",
                      required: true,
                      className: "w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/40 ml-1", children: "Frequency" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      placeholder: "EMAIL",
                      className: "w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/40 ml-1", children: "Transmission" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    rows: 4,
                    name: "body",
                    placeholder: "ENTER MESSAGE...",
                    required: true,
                    className: "w-full bg-black/40 border border-white/10 p-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-slate-500/50 focus:bg-white/[0.02] transition-all duration-300"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full group relative overflow-hidden bg-white text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-slate-700 hover:text-white transition-all duration-300",
                children: /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center gap-2", children: [
                  "Send Transmission ",
                  /* @__PURE__ */ jsx(Send, { size: 16 })
                ] })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-white/10 pt-12 flex flex-col items-center justify-center text-center space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "text-white/40 font-mono text-sm tracking-widest uppercase flex flex-col sm:flex-row items-center gap-2", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " HYBRID PRODUCTION."
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:block text-white/20", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-white/60 font-semibold transition-all duration-500 hover:text-slate-300 hover:tracking-[0.4em] hover:shadow-[0_0_15px_rgba(148,163,184,0.3)] cursor-default", children: "ALL RIGHTS RESERVED" })
      ] }) })
    ] }) })
  ] });
};
const createRoot = ViteReactSSG({
  routes: [
    {
      path: "/",
      element: /* @__PURE__ */ jsx(App, {}),
      children: [
        { index: true, element: /* @__PURE__ */ jsx(Home, {}) },
        { path: "music", element: /* @__PURE__ */ jsx(MusicList, {}) },
        { path: "projects", element: /* @__PURE__ */ jsx(ProjectsList, {}) },
        { path: "bio", element: /* @__PURE__ */ jsx(Biography, {}) },
        { path: "what-is-hybrid", element: /* @__PURE__ */ jsx(WhatIsHybrid, {}) },
        { path: "services", element: /* @__PURE__ */ jsx(Services, {}) },
        { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) }
      ]
    }
  ]
});
export {
  createRoot
};
