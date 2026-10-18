(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const current = document.getElementById('current');
  let index = Math.max(0, Math.min(slides.length - 1, (parseInt(location.hash.slice(1), 10) || 1) - 1));

  function show(n, updateHash = true) {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    current.textContent = String(index + 1);
    document.title = `Agent Winthorpe — ${index + 1}/${slides.length}`;
    if (updateHash) history.replaceState(null, '', `#${index + 1}`);
  }
  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  document.querySelector('.next').addEventListener('click', next);
  document.querySelector('.prev').addEventListener('click', prev);
  document.addEventListener('keydown', e => {
    if (['ArrowRight','PageDown',' ','Enter'].includes(e.key)) { e.preventDefault(); next(); }
    if (['ArrowLeft','PageUp','Backspace'].includes(e.key)) { e.preventDefault(); prev(); }
    if (e.key === 'Home') show(0);
    if (e.key === 'End') show(slides.length - 1);
  });
  let x0 = null;
  document.addEventListener('touchstart', e => { x0 = e.changedTouches[0].clientX; }, {passive:true});
  document.addEventListener('touchend', e => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) dx < 0 ? next() : prev();
    x0 = null;
  }, {passive:true});
  window.addEventListener('hashchange', () => {
    const n = parseInt(location.hash.slice(1), 10);
    if (Number.isFinite(n) && n >= 1 && n <= slides.length) show(n - 1, false);
  });
  show(index, false);
})();
