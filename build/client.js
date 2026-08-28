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

  // Homepage "Recent Recovery" cards + testimonials are baked in at build time
  // (a fixed pick, so every static page load looked identical). This picks a
  // fresh random set client-side, same as the old SPA did on every load.
  function pickN(arr, n) {
    var idx = arr.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = idx[i]; idx[i] = idx[j]; idx[j] = t;
    }
    return idx.slice(0, n).map(function (i) { return arr[i]; });
  }

  function shuffleHome() {
    var dataEl = document.getElementById('pil-shuffle-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }

    var wins = pickN(data.caseResults || [], 2);
    var winEls = document.querySelectorAll('.pil-hero-win, .pil-hero-win2');
    winEls.forEach(function (el, i) {
      if (!wins[i]) return;
      var amtEl = el.querySelector('[data-role="amt"]');
      var capEl = el.querySelector('[data-role="cap"]');
      if (amtEl) amtEl.textContent = wins[i].amt;
      if (capEl) capEl.textContent = wins[i].cap;
    });

    var grid = document.getElementById('pil-testi-grid');
    if (grid && grid.children.length) {
      var picks = pickN(data.testimonials || [], Math.min(grid.children.length, (data.testimonials || []).length));
      for (var i = 0; i < grid.children.length && i < picks.length; i++) {
        var card = grid.children[i];
        var q = picks[i];
        var quoteEl = card.querySelector('[data-role="quote"]');
        var nameEl = card.querySelector('[data-role="name"]');
        var claimEl = card.querySelector('[data-role="claim"]');
        if (quoteEl) quoteEl.innerHTML = q.quote;
        if (nameEl) nameEl.textContent = q.name;
        if (claimEl) {
          if (q.claim) { claimEl.textContent = q.claim; claimEl.style.display = ''; }
          else { claimEl.textContent = ''; claimEl.style.display = 'none'; }
        }
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateStats);
    document.addEventListener('DOMContentLoaded', shuffleHome);
  } else {
    animateStats();
    shuffleHome();
  }
})();
