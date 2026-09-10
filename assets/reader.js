/**
 * Trust Node Logic — Editorial & Reader Enhancements
 * Provides:
 * 1. Universal Top Reading Progress Indicator
 * 2. One-Click Copy for Prompt & Code Blocks
 * 3. Smooth Floating "Back to Top" Action
 * 4. Section Scroll Fade
 * 5. Left Rail Reading System (article pages only, >= 3 headings)
 */
(function () {
  'use strict';

  const styles = `
    :focus-visible {
      outline: 2px solid #4fd8c4 !important;
      outline-offset: 2px !important;
    }

    /* Top progress bar */
    #tnl-reading-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      background: linear-gradient(90deg, #4fd8c4, #a3e635);
      z-index: 99999;
      pointer-events: none;
      transition: width 0.08s ease-out;
      box-shadow: 0 0 8px rgba(79, 216, 196, 0.6);
    }

    /* Back to top */
    #tnl-back-to-top {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 99990;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 9999px;
      background: rgba(14, 17, 20, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.14);
      color: #e9ecee;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      opacity: 0;
      transform: translateY(12px);
      pointer-events: none;
      transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }
    #tnl-back-to-top.visible {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    #tnl-back-to-top:hover {
      border-color: #FF9F1C;
      color: #FF9F1C;
      box-shadow: 0 0 16px rgba(255, 159, 28, 0.25);
    }

    /* Copy button */
    .tnl-copy-wrapper { position: relative; }
    .tnl-copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 4px;
      background: rgba(18, 22, 26, 0.85);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #9aa3ab;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
    }
    .tnl-copy-btn:hover { background: rgba(30,36,42,0.95); border-color: #FF9F1C; color: #FF9F1C; }
    .tnl-copy-btn.copied { background: rgba(255,159,28,0.1); border-color: #FF9F1C; color: #FF9F1C; }

    /* Section scroll fade */
    .has-scroll-fade .scroll-target {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .has-scroll-fade .scroll-target.is-visible { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) {
      .has-scroll-fade .scroll-target { opacity: 1 !important; transform: none !important; transition: none !important; }
    }

    /* Left Rail Reading System */
    #tnl-rail {
      position: fixed;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.4s ease;
      width: 228px;
    }
    #tnl-rail.rail-visible { opacity: 1; pointer-events: auto; }

    #tnl-rail-track {
      position: absolute;
      left: 19px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }
    #tnl-rail-fill {
      position: absolute;
      left: 19px;
      top: 0;
      width: 2px;
      height: 0%;
      background: #FF9F1C;
      border-radius: 2px;
      transition: height 0.12s ease-out;
      box-shadow: 0 0 8px rgba(255, 159, 28, 0.45);
    }
    #tnl-rail-dot {
      position: absolute;
      left: 14px;
      top: 0%;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #FF9F1C;
      box-shadow: 0 0 10px rgba(255, 159, 28, 0.65);
      transform: translateY(-50%);
      transition: top 0.12s ease-out;
    }
    #tnl-rail.rail-done #tnl-rail-fill { background: #22c55e; box-shadow: 0 0 8px rgba(34,197,94,0.45); }
    #tnl-rail.rail-done #tnl-rail-dot { background: #22c55e; box-shadow: 0 0 10px rgba(34,197,94,0.65); }

    #tnl-rail-nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: relative;
      z-index: 1;
      padding: 2px 0;
    }
    .tnl-rail-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 0;
      cursor: pointer;
      background: none;
      border: none;
      text-align: left;
      width: 100%;
    }
    .tnl-rail-pip {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1.5px solid rgba(255, 255, 255, 0.14);
      background: #08090A;
      flex-shrink: 0;
      margin-left: 15px;
      transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    }
    .tnl-rail-item.active .tnl-rail-pip {
      border-color: #FF9F1C;
      background: #FF9F1C;
      box-shadow: 0 0 6px rgba(255, 159, 28, 0.5);
    }
    .tnl-rail-item:hover .tnl-rail-pip { border-color: rgba(255, 159, 28, 0.6); }
    #tnl-rail.rail-done .tnl-rail-item.active .tnl-rail-pip {
      border-color: #22c55e;
      background: #22c55e;
      box-shadow: 0 0 6px rgba(34,197,94,0.5);
    }
    .tnl-rail-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: transparent;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 160px;
      opacity: 0;
      transform: translateX(-6px);
      transition: color 0.2s, opacity 0.25s, transform 0.25s;
    }
    #tnl-rail:hover .tnl-rail-label { opacity: 1; transform: translateX(0); color: rgba(255,255,255,0.35); }
    .tnl-rail-item.active .tnl-rail-label { opacity: 1; transform: translateX(0); color: #FF9F1C !important; }
    .tnl-rail-item:hover .tnl-rail-label { color: rgba(255,255,255,0.7) !important; }

    #tnl-rail-meta {
      position: absolute;
      left: 32px;
      bottom: -26px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.18);
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s, color 0.3s;
    }
    #tnl-rail:hover #tnl-rail-meta { opacity: 1; }
    #tnl-rail.rail-done #tnl-rail-meta { color: #22c55e; opacity: 1; }

    @media (max-width: 1099px) { #tnl-rail { display: none !important; } }
  `;

  function init() {
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    // 1. Top Progress Bar
    let progressBar = document.getElementById('tnl-reading-progress');
    const existingProgress = document.getElementById('progress');
    if (!progressBar && !existingProgress) {
      progressBar = document.createElement('div');
      progressBar.id = 'tnl-reading-progress';
      progressBar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(progressBar);
    }

    // 2. Back to Top
    let btt = document.getElementById('tnl-back-to-top');
    if (!btt) {
      btt = document.createElement('button');
      btt.id = 'tnl-back-to-top';
      btt.setAttribute('aria-label', 'Scroll back to top');
      btt.innerHTML = '<span>↑</span><span>Top</span>';
      btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      document.body.appendChild(btt);
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          if (progressBar && docHeight > 0) {
            progressBar.style.width = Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) + '%';
          }
          if (btt) btt.classList.toggle('visible', scrollY > 380);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 3. Copy Buttons
    const codeTargets = document.querySelectorAll('pre, .manifest-preview, .tag-line, .prompt-box, .terminal-window pre, pre code');
    codeTargets.forEach((target) => {
      const container = target.tagName.toLowerCase() === 'code' && target.parentElement.tagName.toLowerCase() === 'pre'
        ? target.parentElement : target;
      if (container.querySelector('.tnl-copy-btn') || container.closest('.no-copy')) return;
      if (window.getComputedStyle(container).position === 'static') container.style.position = 'relative';

      const copyBtn = document.createElement('button');
      copyBtn.className = 'tnl-copy-btn';
      copyBtn.setAttribute('aria-label', 'Copy code snippet');
      copyBtn.textContent = 'Copy';
      copyBtn.addEventListener('click', async (e) => {
        e.stopPropagation(); e.preventDefault();
        let text = (container.innerText || container.textContent)
          .replace(/^Copy\s*/i, '').replace(/Copy$/i, '').trim();
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
          } else {
            const ta = document.createElement('textarea');
            ta.value = text; ta.style.cssText = 'position:fixed;left:-999999px';
            document.body.appendChild(ta); ta.focus(); ta.select();
            document.execCommand('copy'); ta.remove();
          }
          copyBtn.textContent = 'Copied ✓'; copyBtn.classList.add('copied');
          setTimeout(() => { copyBtn.textContent = 'Copy'; copyBtn.classList.remove('copied'); }, 2000);
        } catch (err) {
          copyBtn.textContent = 'Failed';
          setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
        }
      });
      container.appendChild(copyBtn);
    });

    // 4. Scroll Fade
    initScrollFade();

    // 5. Left Rail
    initReadingRail();
  }

  function initReadingRail() {
    // Exclude catalog, index, and archive pages with multiple article cards
    if (document.body.classList.contains('no-reading-rail') ||
        document.querySelector('[data-no-reading-rail]') ||
        document.querySelectorAll('article').length > 1 ||
        /field-notes\.html|projects\.html|music\.html|index\.html|services\.html|contact\.html/i.test(location.pathname)) {
      return;
    }

    const headings = Array.from(
      document.querySelectorAll('main h2, main h3, article h2, article h3')
    ).filter(h => h.textContent.trim().length > 2);

    if (headings.length < 3) return;

    const mainEl = document.querySelector('main, article');
    const words = mainEl ? (mainEl.innerText || '').split(/\s+/).filter(Boolean).length : 0;
    const totalMins = Math.max(1, Math.round(words / 200));
    const pageKey = 'tnl_read_' + (location.pathname.split('/').pop() || 'index');

    const rail = document.createElement('div');
    rail.id = 'tnl-rail';
    rail.setAttribute('aria-hidden', 'true');
    rail.innerHTML = [
      '<div id="tnl-rail-track"></div>',
      '<div id="tnl-rail-fill"></div>',
      '<div id="tnl-rail-dot"></div>',
      '<nav id="tnl-rail-nav"></nav>',
      '<div id="tnl-rail-meta">~' + totalMins + ' min left</div>'
    ].join('');

    const navEl  = rail.querySelector('#tnl-rail-nav');
    const fillEl = rail.querySelector('#tnl-rail-fill');
    const dotEl  = rail.querySelector('#tnl-rail-dot');
    const metaEl = rail.querySelector('#tnl-rail-meta');

    headings.forEach((h, i) => {
      if (!h.id) h.id = 'tnl-s' + i;
      const label = h.textContent.trim().replace(/\s+/g, ' ');
      const short = label.length > 24 ? label.slice(0, 22) + '..' : label;
      const btn = document.createElement('button');
      btn.className = 'tnl-rail-item';
      btn.setAttribute('data-target', h.id);
      btn.setAttribute('aria-label', 'Jump to: ' + label);
      btn.innerHTML = '<span class="tnl-rail-pip"></span><span class="tnl-rail-label">' + short + '</span>';
      btn.addEventListener('click', () => {
        const el = document.getElementById(h.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      navEl.appendChild(btn);
    });

    document.body.appendChild(rail);

    let railShown = false, rafPending = false, saved = false;
    const navItems = Array.from(navEl.querySelectorAll('.tnl-rail-item'));

    function updateRail() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docH <= 0) { rafPending = false; return; }

      const pct = Math.min(100, Math.max(0, (scrollY / docH) * 100));

      if (!railShown && pct > 5) { rail.classList.add('rail-visible'); railShown = true; }

      fillEl.style.height = pct + '%';
      dotEl.style.top = pct + '%';

      if (pct >= 98) {
        metaEl.textContent = '✓ finished';
        rail.classList.add('rail-done');
        if (!saved) { try { localStorage.setItem(pageKey, '1'); } catch(e) {} saved = true; }
      } else {
        const minsLeft = Math.max(0, Math.round(totalMins * (1 - pct / 100)));
        metaEl.textContent = '~' + (minsLeft < 1 ? '< 1' : minsLeft) + ' min left';
      }

      let activeIdx = 0;
      headings.forEach((h, i) => {
        if (h.getBoundingClientRect().top <= window.innerHeight * 0.45) activeIdx = i;
      });
      navItems.forEach((item, i) => item.classList.toggle('active', i === activeIdx));

      rafPending = false;
    }

    window.addEventListener('scroll', () => {
      if (!rafPending) { rafPending = true; requestAnimationFrame(updateRail); }
    }, { passive: true });

    updateRail();

    try {
      if (localStorage.getItem(pageKey) === '1') {
        rail.classList.add('rail-visible', 'rail-done');
        fillEl.style.height = '100%';
        dotEl.style.top = '100%';
        metaEl.textContent = '✓ read';
        railShown = true;
      }
    } catch(e) {}
  }

  function initScrollFade() {
    if (!('IntersectionObserver' in window)) return;
    const candidates = Array.from(document.querySelectorAll('.scroll-section, main > section'));
    if (!candidates.length) return;

    const targets = candidates.filter(el => {
      const hasChildTarget = el.querySelector('.scroll-section') !== null && !el.classList.contains('scroll-section');
      return !hasChildTarget;
    });
    if (!targets.length) return;

    document.documentElement.classList.add('has-scroll-fade');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    targets.forEach(el => {
      el.classList.add('scroll-target');
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

    const revealHash = () => {
      if (!window.location.hash) return;
      try {
        const el = document.querySelector(window.location.hash);
        if (el) (el.closest('.scroll-target') || el).classList.add('is-visible');
      } catch(e) {}
    };
    if (window.location.hash) revealHash();
    window.addEventListener('hashchange', revealHash);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
