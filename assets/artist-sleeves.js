(() => {
  const deck = document.querySelector("[data-artist-deck]");
  if (!deck) return;

  const sleeves = Array.from(deck.querySelectorAll(".sleeves img"));
  const caption = deck.querySelector("[data-sleeve-caption]");
  const profileLink = deck.querySelector("[data-sleeve-link]");
  const toggle = deck.querySelector("[data-rotation]");
  const next = deck.querySelector("[data-next-sleeve]");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let rotating = !motion.matches;
  let visible = false;
  let timer;
  let front = 0;

  function advance() {
    front = (front + 1) % sleeves.length;
    sleeves.forEach((sleeve, index) => {
      sleeve.dataset.depth = (index - front + sleeves.length) % sleeves.length;
    });
    const current = sleeves[front].dataset;
    caption.textContent = current.artist;
    profileLink.href = document.getElementById(current.profile).href;
  }

  function schedule() {
    window.clearInterval(timer);
    if (rotating && visible && !document.hidden && !profileLink.matches(":hover, :focus")) {
      timer = window.setInterval(advance, 6500);
    }
  }

  function setRotation(enabled) {
    rotating = enabled;
    toggle.textContent = enabled ? "Pause" : "Rotate";
    toggle.setAttribute("aria-label", enabled ? "Pause sleeve rotation" : "Start sleeve rotation");
    schedule();
  }

  next.addEventListener("click", () => {
    setRotation(false);
    advance();
    deck.querySelector("[role=status]").textContent = caption.textContent;
  });
  toggle.addEventListener("click", () => setRotation(!rotating));
  motion.addEventListener("change", () => setRotation(!motion.matches));
  document.addEventListener("visibilitychange", schedule);
  ["pointerenter", "pointerleave", "focus", "blur"].forEach(event => {
    profileLink.addEventListener(event, () => requestAnimationFrame(schedule));
  });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  }).observe(deck);
  setRotation(rotating);
  deck.querySelector(".deck-controls").hidden = false;
})();
