import React from 'react';
import { Helmet } from 'react-helmet-async';

const WhatIsHybrid: React.FC = () => {
  const scrollToArticles = () => {
    const section = document.getElementById('more-topics');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Helmet>
        <title>What Is Hybrid | Justin Ray</title>
        <meta
          name="description"
          content="Learn what Hybrid Production means and explore related articles including Future of Hybrid."
        />
        <link rel="canonical" href="https://jray.me/what-is-hybrid" />
      </Helmet>

      <section className="py-24 px-4 sm:px-8 relative z-10 animate-fade-in-up">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <button
              type="button"
              onClick={scrollToArticles}
              className="text-sm text-white/70 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition"
              aria-label="See other articles"
            >
              See other articles
            </button>
          </div>

          <article className="rounded-sm border border-white/10 bg-zinc-900/40 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
              What Is Hybrid Production?
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Hybrid Production is the bridge between human creativity and AI systems. It rejects the
              all-or-nothing mindset and treats generative tools as instruments that can be directed,
              edited, and refined with intent.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              The Hybrid Producer is both artist and architect: generating ideas quickly, then using
              traditional music production and engineering discipline to shape those ideas into
              polished records.
            </p>
          </article>

          <div
            id="more-topics"
            className="mt-12 rounded-sm border border-white/10 bg-zinc-900/40 p-8 scroll-mt-28"
          >
            <h2 className="text-lg font-bold uppercase tracking-wider text-white">
              More Topics / Articles
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/futureofhybrid.html"
                  className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition"
                >
                  Future of Hybrid
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsHybrid;
