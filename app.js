/* Project page behaviour: sticky nav, scroll reveal, BibTeX copy.
   Adapted from the WMRL project page template (CC BY-SA 4.0).
   Everything here is progressive enhancement; the page reads fine without it. */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- sticky nav appears once the hero is behind you ---------- */

  var nav = document.getElementById('nav');
  var header = document.querySelector('header');
  if (nav && header && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('show', !entries[0].isIntersecting);
    }, { rootMargin: '-70px 0px 0px 0px' }).observe(header);
  }

  /* ---------- reveal on scroll ---------- */

  var targets = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- copy BibTeX ---------- */

  var btn = document.getElementById('copy-bib');
  var bib = document.getElementById('bib');
  if (btn && bib) {
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var text = bib.textContent;
      var done = function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done, function () {});
      } else {
        var range = document.createRange();
        range.selectNodeContents(bib);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try { if (document.execCommand('copy')) done(); } catch (err) { /* leave it selected */ }
      }
    });
  }
})();
