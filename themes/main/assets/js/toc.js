/* =============================================================
   TOC — IntersectionObserver scroll-spy + mobile drawer toggle
   ============================================================= */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Mobile drawer ────────────────────────────────────────── */

    var toggle = document.querySelector('.toc-mobile__toggle');
    var body   = document.getElementById('toc-mobile-body');

    if (toggle && body) {
      toggle.addEventListener('click', function () {
        var isOpen = body.classList.contains('is-open');
        body.classList.toggle('is-open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    }

    /* ── Scroll-spy ───────────────────────────────────────────── */

    /*
      Collect all headings inside the prose area that have IDs
      (Goldmark adds IDs automatically via the anchorize option).
    */
    var prose = document.getElementById('article-prose');
    if (!prose) { return; }

    var headings = Array.from(prose.querySelectorAll('h2[id], h3[id]'));
    if (headings.length === 0) { return; }

    /*
      Build a map from heading id → all <li> elements in both the
      desktop and mobile TOC that link to that heading.
    */
    var tocContainers = Array.from(document.querySelectorAll('.toc-content'));
    var linkMap = {};

    headings.forEach(function (h) {
      var id   = h.getAttribute('id');
      var items = [];
      tocContainers.forEach(function (c) {
        var anchor = c.querySelector('a[href="#' + id + '"]');
        if (anchor) { items.push(anchor.closest('li')); }
      });
      if (items.length) { linkMap[id] = items; }
    });

    /* Track which heading is currently "active" */
    var activeId = null;

    function setActive(id) {
      if (id === activeId) { return; }

      /* Clear previous */
      if (activeId && linkMap[activeId]) {
        linkMap[activeId].forEach(function (li) { li.classList.remove('is-active'); });
      }

      activeId = id;

      /* Set new */
      if (id && linkMap[id]) {
        linkMap[id].forEach(function (li) { li.classList.add('is-active'); });
      }
    }

    /*
      rootMargin pushes the detection zone so a heading is considered
      "active" when it's in the upper portion of the viewport — not
      only when it reaches the very top edge.

      -72px top = below the sticky nav
      -60% bottom = only the top 40% of the viewport triggers
    */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.getAttribute('id'));
        }
      });
    }, {
      rootMargin: '-72px 0px -60% 0px',
      threshold:  0
    });

    headings.forEach(function (h) { observer.observe(h); });

    /* Activate the first heading on load if none is in view */
    if (headings.length && !activeId) {
      setActive(headings[0].getAttribute('id'));
    }
  });
}());
