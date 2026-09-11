/**
 * Trust Node Logic · Editorial & Reader Enhancements
 * Provides:
 * 1. Universal Top Reading Progress Indicator
 * 2. One-Click Copy for Prompt & Code Blocks
 * 3. Smooth Floating "Back to Top" Action
 * 4. Section Scroll Fade
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

    /* Amber gradient nav underline · sitewide brand accent */
    nav.site,
    body > div#root > header,
    body > header {
      border-bottom-color: transparent !important;
      position: relative;
    }
    nav.site::after,
    body > div#root > header::after,
    body > header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, #FF9F1C 0%, rgba(255,159,28,0.22) 32%, transparent 66%);
      pointer-events: none;
      z-index: 1;
    }

    /* Inactive nav link dimming · visual hierarchy sitewide */
    .navlinks a:not(.active) {
      opacity: 0.42;
      transition: opacity 0.18s ease, color 0.18s ease;
    }
    .navlinks a:not(.active):hover {
      opacity: 1;
    }
    nav[aria-label="Main navigation"] a:not([class*="text-\[#FF9F1C\]"]):not([class*="font-semibold"]) {
      opacity: 0.42;
      transition: opacity 0.18s ease;
    }
    nav[aria-label="Main navigation"] a:not([class*="text-\[#FF9F1C\]"]):not([class*="font-semibold"]):hover {
      opacity: 1;
    }

    /* Universal Verified Author & Networking Entity Card */
    .tnl-author-entity-card {
      margin: 3.5rem 0 2.5rem;
      padding: 2rem;
      background: #121417;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 3px solid #FF9F1C;
      position: relative;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }
    .tnl-author-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 1.25rem;
    }
    .tnl-author-avatar-wrap {
      position: relative;
      width: 64px;
      height: 64px;
      flex-shrink: 0;
    }
    .tnl-author-avatar {
      width: 64px;
      height: 64px;
      border-radius: 4px;
      object-fit: cover;
      object-position: top;
      border: 1px solid rgba(255, 255, 255, 0.2);
      filter: grayscale(20%);
      transition: filter 0.2s ease, border-color 0.2s ease;
    }
    .tnl-author-entity-card:hover .tnl-author-avatar {
      filter: grayscale(0%);
      border-color: #FF9F1C;
    }
    .tnl-verified-badge {
      position: absolute;
      bottom: -4px;
      right: -4px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #FF9F1C;
      color: #000;
      font-size: 11px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #121417;
      line-height: 1;
    }
    .tnl-author-meta {
      flex-grow: 1;
    }
    .tnl-author-name-row {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    .tnl-author-name {
      font-size: 1.15rem;
      font-weight: 700;
      color: #FFFFFF !important;
      text-decoration: none;
      letter-spacing: -0.01em;
      transition: color 0.15s ease;
    }
    .tnl-author-name:hover {
      color: #FF9F1C !important;
    }
    .tnl-author-aka {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: #71717A;
      font-weight: 500;
    }
    .tnl-author-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #FF9F1C;
      margin-top: 0.2rem;
      letter-spacing: 0.02em;
    }
    .tnl-author-loc {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: #A1A1AA;
      margin-top: 0.2rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .tnl-author-summary {
      font-size: 0.92rem;
      line-height: 1.6;
      color: #D4D4D8;
      margin: 0 0 1.5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 1rem;
    }
    .tnl-author-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }
    .tnl-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.5rem 0.95rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.15s ease;
      border-radius: 2px;
    }
    .tnl-btn-linkedin {
      background: #0A66C2;
      color: #FFFFFF !important;
      border: 1px solid #0A66C2;
    }
    .tnl-btn-linkedin:hover {
      background: #004182;
      border-color: #004182;
      box-shadow: 0 0 14px rgba(10, 102, 194, 0.4);
      transform: translateY(-1px);
    }
    .tnl-btn-contact {
      background: rgba(255, 159, 28, 0.12);
      color: #FF9F1C !important;
      border: 1px solid #FF9F1C;
    }
    .tnl-btn-contact:hover {
      background: #FF9F1C;
      color: #000000 !important;
      box-shadow: 0 0 14px rgba(255, 159, 28, 0.4);
      transform: translateY(-1px);
    }
    .tnl-btn-x {
      background: rgba(255, 255, 255, 0.04);
      color: #EAEAEA !important;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    .tnl-btn-x:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-1px);
    }
    .tnl-btn-about {
      background: transparent;
      color: #A1A1AA !important;
      border: 1px solid transparent;
      margin-left: auto;
    }
    .tnl-btn-about:hover {
      color: #FF9F1C !important;
      border-color: rgba(255, 159, 28, 0.3);
    }
    @media (max-width: 640px) {
      .tnl-author-entity-card { padding: 1.25rem; }
      .tnl-btn-about { margin-left: 0; width: 100%; justify-content: center; }
      .tnl-btn { flex: 1 1 calc(50% - 0.5rem); justify-content: center; }
    }

    /* Byline link styling */
    .byline a.byline-author,
    .byline a:hover {
      color: #FF9F1C !important;
      text-decoration: none;
      border-bottom: 1px dashed rgba(255, 159, 28, 0.5);
      transition: all 0.15s ease;
    }
    .byline a.byline-author:hover {
      border-bottom-style: solid;
      border-bottom-color: #FF9F1C;
    }
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

    // 5. Author Card & Byline Networking Enhancement
    initAuthorCards();
  }

  function getAuthorCardHTML() {
    return `
<aside class="tnl-author-entity-card" itemscope itemtype="https://schema.org/Person" aria-label="Author Profile and Network">
  <div class="tnl-author-header">
    <div class="tnl-author-avatar-wrap">
      <img src="https://trustnodelogic.com/assets/images/croppedjrnu.webp" alt="Justin Ray (JRAY) - Pioneer of Hybrid AI Music Production" class="tnl-author-avatar" width="64" height="64" loading="lazy" itemprop="image" />
      <span class="tnl-verified-badge" title="Verified Creator & Author" aria-label="Verified">✓</span>
    </div>
    <div class="tnl-author-meta">
      <div class="tnl-author-name-row">
        <a href="https://trustnodelogic.com/about.html" class="tnl-author-name" itemprop="url"><span itemprop="name">Justin Ray</span> <span class="tnl-author-aka">(JRAY / loserdub)</span></a>
      </div>
      <div class="tnl-author-title" itemprop="jobTitle">Pioneer of Hybrid AI Music Production · Author, HPS-1.0</div>
      <div class="tnl-author-loc">East Lansing, MI · Trust Node Logic Hub</div>
    </div>
  </div>
  <p class="tnl-author-summary" itemprop="description">
    Music producer, audio engineer, and creative technologist architecting open provenance standards (HPS-1.0), Web Audio DSP tools, and generative music workflows.
  </p>
  <div class="tnl-author-actions">
    <a href="https://www.linkedin.com/in/jray-me/" target="_blank" rel="noopener noreferrer" class="tnl-btn tnl-btn-linkedin" aria-label="Connect with Justin Ray on LinkedIn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
      <span>Connect on LinkedIn</span>
    </a>
    <a href="https://trustnodelogic.com/contact.html" class="tnl-btn tnl-btn-contact" aria-label="Collaborate or inquire with Justin Ray">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span>Work With Justin</span>
    </a>
    <a href="https://x.com/TheInnerVision" target="_blank" rel="noopener noreferrer" class="tnl-btn tnl-btn-x" aria-label="Follow Justin Ray on X">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      <span>Follow on X</span>
    </a>
    <a href="https://trustnodelogic.com/about.html" class="tnl-btn tnl-btn-about" aria-label="View Justin Ray's biography and origins">
      <span>About &amp; Origins &rarr;</span>
    </a>
  </div>
</aside>
    `.trim();
  }

  function initAuthorCards() {
    const path = window.location.pathname.toLowerCase();
    const isExcluded = path.endsWith('/index.html') || path === '/' || path.endsWith('/field-notes.html') || path.endsWith('/about.html') || path.endsWith('/contact.html') || path.endsWith('/projects.html') || path.endsWith('/services.html') || path.endsWith('/music.html') || path.endsWith('/404.html');
    if (isExcluded) return;

    // 1. Upgrade top byline author links
    const bylines = document.querySelectorAll('.byline, header .byline, .article-head .byline');
    bylines.forEach(byline => {
      if (!byline.querySelector('a[href*="about"]')) {
        const walker = document.createTreeWalker(byline, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          if (/Justin Ray|Justin Tyler Ray|JRAY/i.test(node.nodeValue)) {
            const span = document.createElement('span');
            span.innerHTML = node.nodeValue.replace(/(Justin Ray(?:\s*\(JRAY\))?|Justin Tyler Ray|JRAY)/g, '<a href="https://trustnodelogic.com/about.html" class="byline-author" title="About Justin Ray" rel="author">$1</a>');
            node.parentNode.replaceChild(span, node);
            break;
          }
        }
      }
    });

    // 2. Upgrade existing author cards or author bio containers
    const existingCards = document.querySelectorAll('.author-card, .authorbio');
    if (existingCards.length > 0) {
      existingCards.forEach(card => {
        card.outerHTML = getAuthorCardHTML();
      });
    } else {
      // If on an editorial article page that has .author-cta or .cta or .continue-reading
      const cta = document.querySelector('.author-cta, .cta');
      const continueSec = document.querySelector('.continue-reading, .continue, .sources');
      if (cta && cta.parentElement) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = getAuthorCardHTML();
        cta.insertAdjacentElement('afterend', wrapper.firstElementChild);
      } else if (continueSec && continueSec.parentElement) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = getAuthorCardHTML();
        continueSec.insertAdjacentElement('beforebegin', wrapper.firstElementChild);
      }
    }
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
