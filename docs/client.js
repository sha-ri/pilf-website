/* ============================================================
   propertyinsurance.law — client runtime for the static site.
   Two independent pieces: mobile menu toggle, and the stat
   count-up animation. No routing here — every page is a real file.
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-action]') : null;
    if (!a) return;
    var act = a.getAttribute('data-action');
    if (act === 'stop') { e.stopPropagation(); return; }
    var menu = document.querySelector('.pil-mobnav');
    if (act === 'toggleMobile') { e.preventDefault(); if (menu) menu.style.display = 'block'; }
    else if (act === 'closeMobile') { if (menu) menu.style.display = 'none'; }
  });

  function formatStat(n, s) {
    n = Math.round(n);
    var txt = s.comma ? n.toLocaleString('en-US') : String(n);
    return (s.prefix || '') + txt + (s.suffix || '');
  }

  function animateStats() {
    var els = document.querySelectorAll('[data-statroll]');
    if (!els.length) return;
    var run = function (el) {
      var end = Number(el.getAttribute('data-end')) || 0;
      var start = el.hasAttribute('data-start') ? Number(el.getAttribute('data-start')) : 0;
      var s = { prefix: el.getAttribute('data-prefix') || '', suffix: el.getAttribute('data-suffix') || '', comma: el.hasAttribute('data-comma') };
      var t0 = null, dur = 1600;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = formatStat(start + (end - start) * e, s);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    if (typeof IntersectionObserver === 'undefined') { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateStats);
  } else {
    animateStats();
  }
})();
