/* =============================================================
   Search — Fuse.js full client-side search against /index.json
   ============================================================= */
(function () {
  'use strict';

  var FUSE_OPTIONS = {
    includeScore:       true,
    threshold:          0.35,
    minMatchCharLength: 2,
    ignoreLocation:     true,
    keys: [
      { name: 'title',       weight: 4 },
      { name: 'description', weight: 2 },
      { name: 'tags',        weight: 1 },
      { name: 'categories',  weight: 1 },
      { name: 'series',      weight: 1 },
    ]
  };

  document.addEventListener('DOMContentLoaded', function () {
    var input   = document.getElementById('search-input');
    var results = document.getElementById('search-results');
    var status  = document.getElementById('search-status');
    if (!input || !results || !status) { return; }

    var fuse    = null;
    var timer   = null;

    /* ── Load index ─────────────────────────────────────────── */

    fetch('/index.json')
      .then(function (r) {
        if (!r.ok) { throw new Error('index not found'); }
        return r.json();
      })
      .then(function (data) {
        fuse = new Fuse(data, FUSE_OPTIONS);
        input.removeAttribute('disabled');
        input.placeholder = 'Search articles…';

        /* Restore query from URL (?q=) on page load */
        var params = new URLSearchParams(window.location.search);
        var q = params.get('q');
        if (q) {
          input.value = q;
          runSearch(q);
        } else {
          input.focus();
        }
      })
      .catch(function () {
        status.textContent = 'Search index could not be loaded.';
        input.placeholder  = 'Search unavailable';
      });

    /* ── Input handler ──────────────────────────────────────── */

    input.addEventListener('input', function () {
      clearTimeout(timer);
      var q = input.value.trim();

      /* Sync query to URL without a page reload */
      var url = new URL(window.location);
      if (q) { url.searchParams.set('q', q); }
      else    { url.searchParams.delete('q'); }
      history.replaceState(null, '', url);

      timer = setTimeout(function () { runSearch(q); }, 150);
    });

    /* Clear on Escape */
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
    });

    /* ── Search ─────────────────────────────────────────────── */

    function runSearch(q) {
      results.innerHTML = '';
      status.textContent = '';

      if (!fuse || q.length < 2) { return; }

      var matches = fuse.search(q);

      if (matches.length === 0) {
        status.textContent = 'No results for “' + esc(q) + '”';
        return;
      }

      status.textContent = matches.length
        + (matches.length === 1 ? ' result' : ' results');

      var frag = document.createDocumentFragment();
      matches.forEach(function (m) {
        var el = document.createElement('div');
        el.innerHTML = renderResult(m.item);
        frag.appendChild(el.firstElementChild);
      });
      results.appendChild(frag);
    }

    /* ── Result renderer ────────────────────────────────────── */

    function renderResult(p) {
      var cat  = (p.categories || [])[0] || '';
      var tags = (p.tags || []).slice(0, 4)
        .map(function (t) {
          return '<a href="/tags/' + slug(t) + '/" class="tag">#' + esc(t) + '</a>';
        }).join('');

      return [
        '<article class="post-row">',
        '  <div class="post-row__meta">',
        '    <span class="post-row__date">' + esc(p.date || '') + '</span>',
        cat
          ? '    <span class="post-row__category">' + esc(cat) + '</span>'
          : '',
        '  </div>',
        '  <div class="post-row__body">',
        '    <h3 class="post-row__title">',
        '      <a href="' + esc(p.url) + '">' + esc(p.title) + '</a>',
        '    </h3>',
        p.description
          ? '<p class="post-row__excerpt">' + esc(p.description) + '</p>'
          : '',
        p.readingTime
          ? '<p class="post-row__reading-time">' + p.readingTime + ' min read</p>'
          : '',
        tags
          ? '<div class="search-result__tags">' + tags + '</div>'
          : '',
        '  </div>',
        '</article>',
      ].join('\n');
    }

    /* ── Utilities ──────────────────────────────────────────── */

    function esc(s) {
      return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function slug(s) {
      return encodeURIComponent(
        String(s).toLowerCase().replace(/\s+/g, '-')
      );
    }
  });
}());
