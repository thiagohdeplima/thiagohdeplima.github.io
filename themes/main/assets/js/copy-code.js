/* =============================================================
   Copy-to-clipboard for code blocks + language label injection
   ============================================================= */
(function () {
  'use strict';

  /* SVG icons — inline so no extra network round-trip */
  var ICON_COPY = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M3 11H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v1"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="2.5 8 6 11.5 13.5 4.5"/></svg>';

  document.addEventListener('DOMContentLoaded', function () {
    var blocks = document.querySelectorAll('.highlight');

    blocks.forEach(function (block) {

      /* ── Language label ─────────────────────────────────────── */

      var codeEl = block.querySelector('code[data-lang]');
      var lang    = codeEl ? codeEl.getAttribute('data-lang') : null;

      if (lang && lang !== 'fallback') {
        var label       = document.createElement('span');
        label.className = 'code-lang';
        label.textContent = lang;
        block.appendChild(label);
      }

      /* ── Copy button ────────────────────────────────────────── */

      if (!navigator.clipboard) { return; }

      var btn       = document.createElement('button');
      btn.type      = 'button';
      btn.className = 'code-copy';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = ICON_COPY + '<span>Copy</span>';

      block.appendChild(btn);

      btn.addEventListener('click', function () {
        var text = extractCode(block);
        if (!text) { return; }

        navigator.clipboard.writeText(text).then(function () {
          btn.innerHTML  = ICON_CHECK + '<span>Copied!</span>';
          btn.classList.add('is-copied');

          setTimeout(function () {
            btn.innerHTML  = ICON_COPY + '<span>Copy</span>';
            btn.classList.remove('is-copied');
          }, 2000);
        }).catch(function () {
          /* Silently fail — clipboard blocked (iframe, insecure ctx) */
        });
      });
    });
  });

  /*
    Extract the plain text of the code, excluding line numbers.
    Hugo with lineNumbersInTable=true uses a two-column <table>:
      - column 1: line numbers  (<td class="lntd"> with .lnt spans)
      - column 2: code          (<td class="lntd"> with syntax spans)
    We grab the second column's innerText, falling back to the
    first <code> element if the table structure is absent.
  */
  function extractCode(block) {
    /* Table layout (lineNumbersInTable=true) */
    var cols = block.querySelectorAll('td.lntd');
    if (cols.length >= 2) {
      return cols[cols.length - 1].innerText.replace(/\n$/, '');
    }

    /* Inline line numbers or no line numbers */
    var codeEl = block.querySelector('code');
    if (codeEl) {
      /* Strip .lnt line-number spans before grabbing text */
      var clone = codeEl.cloneNode(true);
      clone.querySelectorAll('.lnt, .ln').forEach(function (el) { el.remove(); });
      return clone.innerText.replace(/\n$/, '');
    }

    return '';
  }
}());
