/**
 * Trust Node Logic — Editorial & Reader Enhancements
 * Provides:
 * 1. Universal Top Reading Progress Indicator
 * 2. One-Click Copy for Prompt & Code Blocks
 * 3. Smooth Floating "Back to Top" Action
 */
(function () {
  'use strict';

  // Injected scoped styles
  const styles = `
    :focus-visible {
      outline: 2px solid #4fd8c4 !important;
      outline-offset: 2px !important;
    }
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
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11.5px;
      font-weight: 500;
      letter-spacing: 0.05em;
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
      border-color: #4fd8c4;
      color: #4fd8c4;
      box-shadow: 0 0 16px rgba(79, 216, 196, 0.3);
    }
    .tnl-copy-wrapper {
      position: relative;
    }
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
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10.5px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.15s ease;
      user-select: none;
    }
    .tnl-copy-btn:hover {
      background: rgba(30, 36, 42, 0.95);
      border-color: #4fd8c4;
      color: #4fd8c4;
    }
    .tnl-copy-btn.copied {
      background: rgba(79, 216, 196, 0.15);
      border-color: #4fd8c4;
      color: #4fd8c4;
    }

    /* 4. Section Scroll Fade (250ms Light Reading Rhythm Pacing) */
    .has-scroll-fade .scroll-target {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .has-scroll-fade .scroll-target.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .has-scroll-fade .scroll-target {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
  `;

  function init() {
    // Inject style sheet
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    // 1. Reading Progress Bar
    let progressBar = document.getElementById('tnl-reading-progress');
    const existingProgress = document.getElementById('progress');
    if (!progressBar && !existingProgress) {
      progressBar = document.createElement('div');
      progressBar.id = 'tnl-reading-progress';
      progressBar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(progressBar);
    }

    // 2. Back to Top Button
    let btt = document.getElementById('tnl-back-to-top');
    if (!btt) {
      btt = document.createElement('button');
      btt.id = 'tnl-back-to-top';
      btt.setAttribute('aria-label', 'Scroll back to top');
      btt.innerHTML = '<span>↑</span><span>Top</span>';
      btt.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(btt);
    }

    // Scroll Handler
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          if (progressBar && docHeight > 0) {
            const pct = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
            progressBar.style.width = pct + '%';
          }

          if (btt) {
            if (scrollY > 380) {
              btt.classList.add('visible');
            } else {
              btt.classList.remove('visible');
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 3. One-Click Copy for Prompts & Code Blocks
    const codeTargets = document.querySelectorAll('pre, .manifest-preview, .tag-line, .prompt-box, .terminal-window pre, pre code');
    codeTargets.forEach((target) => {
      // If code inside pre, use pre as container
      const container = target.tagName.toLowerCase() === 'code' && target.parentElement.tagName.toLowerCase() === 'pre'
        ? target.parentElement
        : target;

      if (container.querySelector('.tnl-copy-btn') || container.closest('.no-copy')) return;

      // Ensure relative positioning
      const computedPos = window.getComputedStyle(container).position;
      if (computedPos === 'static') {
        container.style.position = 'relative';
      }

      const copyBtn = document.createElement('button');
      copyBtn.className = 'tnl-copy-btn';
      copyBtn.setAttribute('aria-label', 'Copy code snippet');
      copyBtn.textContent = 'Copy';

      copyBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        let textToCopy = container.innerText || container.textContent;
        // Clean out button label if it gets captured
        textToCopy = textToCopy.replace(/^Copy\s*/i, '').replace(/Copy$/i, '').trim();

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }

          copyBtn.textContent = 'Copied ✓';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          copyBtn.textContent = 'Failed';
          setTimeout(() => {
            copyBtn.textContent = 'Copy';
          }, 2000);
        }
      });

      container.appendChild(copyBtn);
    });

    // 4. Section Scroll Fade (Light 250ms reading rhythm pacing)
    initScrollFade();
  }

  function initScrollFade() {
    if (!('IntersectionObserver' in window)) return;

    const candidates = Array.from(document.querySelectorAll('.scroll-section, main > section'));
    if (!candidates.length) return;

    // Filter: if a section contains child .scroll-section elements, target the children instead of parent
    const targets = candidates.filter(el => {
      const hasChildTarget = el.querySelector('.scroll-section') !== null && !el.classList.contains('scroll-section');
      return !hasChildTarget;
    });

    if (!targets.length) return;

    document.documentElement.classList.add('has-scroll-fade');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });

    targets.forEach(el => {
      el.classList.add('scroll-target');
      const rect = el.getBoundingClientRect();
      // If already within top 90% of screen at load, reveal immediately
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

    // Handle direct hash navigation
    if (window.location.hash) {
      try {
        const hashEl = document.querySelector(window.location.hash);
        if (hashEl) {
          const targetSection = hashEl.closest('.scroll-target') || hashEl;
          targetSection.classList.add('is-visible');
        }
      } catch (e) {}
    }
    window.addEventListener('hashchange', () => {
      if (window.location.hash) {
        try {
          const hashEl = document.querySelector(window.location.hash);
          if (hashEl) {
            const targetSection = hashEl.closest('.scroll-target') || hashEl;
            targetSection.classList.add('is-visible');
          }
        } catch (e) {}
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
